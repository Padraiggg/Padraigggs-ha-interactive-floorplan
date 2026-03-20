var Mi = {};
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const G = Mi.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = Mi.NODE_ENV !== "production" ? Object.freeze([]) : [], ie = () => {
}, Fi = () => !1, Qt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vn = (e) => e.startsWith("onUpdate:"), Y = Object.assign, vo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rr = Object.prototype.hasOwnProperty, k = (e, t) => rr.call(e, t), $ = Array.isArray, gt = (e) => In(e) === "[object Map]", ji = (e) => In(e) === "[object Set]", I = (e) => typeof e == "function", X = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Oo = (e) => (q(e) || I(e)) && I(e.then) && I(e.catch), Hi = Object.prototype.toString, In = (e) => Hi.call(e), wo = (e) => In(e).slice(8, -1), Rn = (e) => In(e) === "[object Object]", xo = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ Xe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), lr = /* @__PURE__ */ Xe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, cr = /-\w/g, Ee = Mn(
  (e) => e.replace(cr, (t) => t.slice(1).toUpperCase())
), fr = /\B([A-Z])/g, Ne = Mn(
  (e) => e.replace(fr, "-$1").toLowerCase()
), Fn = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), dt = Mn(
  (e) => e ? `on${Fn(e)}` : ""
), rt = (e, t) => !Object.is(e, t), It = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, On = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ar = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jo = (e) => {
  const t = X(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yo;
const en = () => Yo || (Yo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ht(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = X(o) ? hr(o) : ht(o);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (X(e) || q(e))
    return e;
}
const ur = /;(?![^(]*\))/g, dr = /:([^]+)/, pr = /\/\*[^]*?\*\//g;
function hr(e) {
  const t = {};
  return e.replace(pr, "").split(ur).forEach((n) => {
    if (n) {
      const o = n.split(dr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Gt(e) {
  let t = "";
  if (X(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Gt(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const gr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", _r = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", mr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Er = /* @__PURE__ */ Xe(gr), br = /* @__PURE__ */ Xe(_r), yr = /* @__PURE__ */ Xe(mr), Nr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vr = /* @__PURE__ */ Xe(Nr);
function Li(e) {
  return !!e || e === "";
}
const ki = (e) => !!(e && e.__v_isRef === !0), Ui = (e) => X(e) ? e : e == null ? "" : $(e) || q(e) && (e.toString === Hi || !I(e.toString)) ? ki(e) ? Ui(e.value) : JSON.stringify(e, Bi, 2) : String(e), Bi = (e, t) => ki(t) ? Bi(e, t.value) : gt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], s) => (n[zn(o, s) + " =>"] = i, n),
    {}
  )
} : ji(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => zn(n))
} : ft(t) ? zn(t) : q(t) && !$(t) && !Rn(t) ? String(t) : t, zn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var z = {};
function Pe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let me;
class Or {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(
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
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    } else z.NODE_ENV !== "production" && Pe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = me, me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (me = this.prevScope, this.prevScope = void 0);
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
function wr() {
  return me;
}
let W;
const Jn = /* @__PURE__ */ new WeakSet();
class Wi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, me && me.active && me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
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
    const t = W, n = Ce;
    W = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      z.NODE_ENV !== "production" && W !== this && Pe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), zi(this), W = t, Ce = n, this.flags &= -3;
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
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    so(this) && this.run();
  }
  get dirty() {
    return so(this);
  }
}
let Ki = 0, kt, Ut;
function Gi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ut, Ut = e;
    return;
  }
  e.next = kt, kt = e;
}
function Do() {
  Ki++;
}
function Vo() {
  if (--Ki > 0)
    return;
  if (Ut) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kt; ) {
    let t = kt;
    for (kt = void 0; t; ) {
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
function zi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), So(o), xr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function so(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ji(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ji(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qt) || (e.globalVersion = qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !so(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = W, o = Ce;
  W = e, Ce = !0;
  try {
    qi(e);
    const i = e.fn(e._value);
    (t.version === 0 || rt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    W = n, Ce = o, zi(e), e.flags &= -3;
  }
}
function So(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), z.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      So(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xr(e) {
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
    const n = W;
    W = void 0;
    try {
      t();
    } finally {
      W = n;
    }
  }
}
let qt = 0;
class Dr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Co {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, z.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!W || !Ce || W === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== W)
      n = this.activeLink = new Dr(W, this), W.deps ? (n.prevDep = W.depsTail, W.depsTail.nextDep = n, W.depsTail = n) : W.deps = W.depsTail = n, Xi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = W.depsTail, n.nextDep = void 0, W.depsTail.nextDep = n, W.depsTail = n, W.deps === n && (W.deps = o);
    }
    return z.NODE_ENV !== "production" && W.onTrack && W.onTrack(
      Y(
        {
          effect: W
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, qt++, this.notify(t);
  }
  notify(t) {
    Do();
    try {
      if (z.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Y(
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), z.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ro = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol(
  z.NODE_ENV !== "production" ? "Object iterate" : ""
), lo = /* @__PURE__ */ Symbol(
  z.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zt = /* @__PURE__ */ Symbol(
  z.NODE_ENV !== "production" ? "Array iterate" : ""
);
function oe(e, t, n) {
  if (Ce && W) {
    let o = ro.get(e);
    o || ro.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Co()), i.map = o, i.key = n), z.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ue(e, t, n, o, i, s) {
  const r = ro.get(e);
  if (!r) {
    qt++;
    return;
  }
  const l = (f) => {
    f && (z.NODE_ENV !== "production" ? f.trigger({
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
    const f = $(e), h = f && xo(n);
    if (f && n === "length") {
      const d = Number(o);
      r.forEach((u, _) => {
        (_ === "length" || _ === zt || !ft(_) && _ >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), h && l(r.get(zt)), t) {
        case "add":
          f ? h && l(r.get("length")) : (l(r.get(_t)), gt(e) && l(r.get(lo)));
          break;
        case "delete":
          f || (l(r.get(_t)), gt(e) && l(r.get(lo)));
          break;
        case "set":
          gt(e) && l(r.get(_t));
          break;
      }
  }
  Vo();
}
function Nt(e) {
  const t = j(e);
  return t === e ? t : (oe(t, "iterate", zt), de(e) ? t : t.map(Re));
}
function jn(e) {
  return oe(e = j(e), "iterate", zt), e;
}
function nt(e, t) {
  return Ie(e) ? lt(e) ? St(Re(t)) : St(t) : Re(t);
}
const Vr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => nt(this, e));
  },
  concat(...e) {
    return Nt(this).concat(
      ...e.map((t) => $(t) ? Nt(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = nt(this, e[1]), e));
  },
  every(e, t) {
    return qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return qe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => nt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return qe(
      this,
      "find",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return qe(
      this,
      "findLast",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return qe(this, "forEach", e, t, void 0, arguments);
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
    return qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rt(this, "pop");
  },
  push(...e) {
    return Rt(this, "push", e);
  },
  reduce(e, ...t) {
    return Zo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zo(this, "reduceRight", e, t);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rt(this, "splice", e);
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
    return Rt(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => nt(this, e));
  }
};
function Yn(e, t, n) {
  const o = jn(e), i = o[t]();
  return o !== e && !de(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const Sr = Array.prototype;
function qe(e, t, n, o, i, s) {
  const r = jn(e), l = r !== e && !de(e), f = r[t];
  if (f !== Sr[t]) {
    const u = f.apply(e, s);
    return l ? Re(u) : u;
  }
  let h = n;
  r !== e && (l ? h = function(u, _) {
    return n.call(this, nt(e, u), _, e);
  } : n.length > 2 && (h = function(u, _) {
    return n.call(this, u, _, e);
  }));
  const d = f.call(r, h, o);
  return l && i ? i(d) : d;
}
function Zo(e, t, n, o) {
  const i = jn(e);
  let s = n;
  return i !== e && (de(e) ? n.length > 3 && (s = function(r, l, f) {
    return n.call(this, r, l, f, e);
  }) : s = function(r, l, f) {
    return n.call(this, r, nt(e, l), f, e);
  }), i[t](s, ...o);
}
function Xn(e, t, n) {
  const o = j(e);
  oe(o, "iterate", zt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && wn(n[0]) ? (n[0] = j(n[0]), o[t](...n)) : i;
}
function Rt(e, t, n = []) {
  $e(), Do();
  const o = j(e)[t].apply(e, n);
  return Vo(), Ae(), o;
}
const Cr = /* @__PURE__ */ Xe("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Tr(e) {
  ft(e) || (e = String(e));
  const t = j(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
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
    const r = $(t);
    if (!i) {
      let f;
      if (r && (f = Vr[n]))
        return f;
      if (n === "hasOwnProperty")
        return Tr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : o
    );
    if ((ft(n) ? Zi.has(n) : Cr(n)) || (i || oe(t, "get", n), s))
      return l;
    if (Q(l)) {
      const f = r && xo(n) ? l : l.value;
      return i && q(f) ? fo(f) : f;
    }
    return q(l) ? i ? fo(l) : To(l) : l;
  }
}
class es extends Qi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let s = t[n];
    const r = $(t) && xo(n);
    if (!this._isShallow) {
      const h = Ie(s);
      if (!de(o) && !Ie(o) && (s = j(s), o = j(o)), !r && Q(s) && !Q(o))
        return h ? (z.NODE_ENV !== "production" && Pe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (s.value = o, !0);
    }
    const l = r ? Number(n) < t.length : k(t, n), f = Reflect.set(
      t,
      n,
      o,
      Q(t) ? t : i
    );
    return t === j(i) && (l ? rt(o, s) && Ue(t, "set", n, o, s) : Ue(t, "add", n, o)), f;
  }
  deleteProperty(t, n) {
    const o = k(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Ue(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ft(n) || !Zi.has(n)) && oe(t, "has", n), o;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      $(t) ? "length" : _t
    ), Reflect.ownKeys(t);
  }
}
class ts extends Qi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return z.NODE_ENV !== "production" && Pe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return z.NODE_ENV !== "production" && Pe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Pr = /* @__PURE__ */ new es(), $r = /* @__PURE__ */ new ts(), Ar = /* @__PURE__ */ new es(!0), Ir = /* @__PURE__ */ new ts(!0), co = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function Rr(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, s = j(i), r = gt(s), l = e === "entries" || e === Symbol.iterator && r, f = e === "keys" && r, h = i[e](...o), d = n ? co : t ? St : Re;
    return !t && oe(
      s,
      "iterate",
      f ? lo : _t
    ), {
      // iterator protocol
      next() {
        const { value: u, done: _ } = h.next();
        return _ ? { value: u, done: _ } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
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
function an(e) {
  return function(...t) {
    if (z.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Pe(
        `${Fn(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mr(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, r = j(s), l = j(i);
      e || (rt(i, l) && oe(r, "get", i), oe(r, "get", l));
      const { has: f } = fn(r), h = t ? co : e ? St : Re;
      if (f.call(r, i))
        return h(s.get(i));
      if (f.call(r, l))
        return h(s.get(l));
      s !== r && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && oe(j(i), "iterate", _t), i.size;
    },
    has(i) {
      const s = this.__v_raw, r = j(s), l = j(i);
      return e || (rt(i, l) && oe(r, "has", i), oe(r, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const r = this, l = r.__v_raw, f = j(l), h = t ? co : e ? St : Re;
      return !e && oe(f, "iterate", _t), l.forEach((d, u) => i.call(s, h(d), h(u), r));
    }
  };
  return Y(
    n,
    e ? {
      add: an("add"),
      set: an("set"),
      delete: an("delete"),
      clear: an("clear")
    } : {
      add(i) {
        !t && !de(i) && !Ie(i) && (i = j(i));
        const s = j(this);
        return fn(s).has.call(s, i) || (s.add(i), Ue(s, "add", i, i)), this;
      },
      set(i, s) {
        !t && !de(s) && !Ie(s) && (s = j(s));
        const r = j(this), { has: l, get: f } = fn(r);
        let h = l.call(r, i);
        h ? z.NODE_ENV !== "production" && Qo(r, l, i) : (i = j(i), h = l.call(r, i));
        const d = f.call(r, i);
        return r.set(i, s), h ? rt(s, d) && Ue(r, "set", i, s, d) : Ue(r, "add", i, s), this;
      },
      delete(i) {
        const s = j(this), { has: r, get: l } = fn(s);
        let f = r.call(s, i);
        f ? z.NODE_ENV !== "production" && Qo(s, r, i) : (i = j(i), f = r.call(s, i));
        const h = l ? l.call(s, i) : void 0, d = s.delete(i);
        return f && Ue(s, "delete", i, void 0, h), d;
      },
      clear() {
        const i = j(this), s = i.size !== 0, r = z.NODE_ENV !== "production" ? gt(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return s && Ue(
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
    n[i] = Rr(i, e, t);
  }), n;
}
function Hn(e, t) {
  const n = Mr(e, t);
  return (o, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    k(n, i) && i in o ? n : o,
    i,
    s
  );
}
const Fr = {
  get: /* @__PURE__ */ Hn(!1, !1)
}, jr = {
  get: /* @__PURE__ */ Hn(!1, !0)
}, Hr = {
  get: /* @__PURE__ */ Hn(!0, !1)
}, Lr = {
  get: /* @__PURE__ */ Hn(!0, !0)
};
function Qo(e, t, n) {
  const o = j(n);
  if (o !== n && t.call(e, o)) {
    const i = wo(e);
    Pe(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ns = /* @__PURE__ */ new WeakMap(), os = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), ss = /* @__PURE__ */ new WeakMap();
function kr(e) {
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
function Ur(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kr(wo(e));
}
function To(e) {
  return Ie(e) ? e : Ln(
    e,
    !1,
    Pr,
    Fr,
    ns
  );
}
function Br(e) {
  return Ln(
    e,
    !1,
    Ar,
    jr,
    os
  );
}
function fo(e) {
  return Ln(
    e,
    !0,
    $r,
    Hr,
    is
  );
}
function We(e) {
  return Ln(
    e,
    !0,
    Ir,
    Lr,
    ss
  );
}
function Ln(e, t, n, o, i) {
  if (!q(e))
    return z.NODE_ENV !== "production" && Pe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Ur(e);
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
function de(e) {
  return !!(e && e.__v_isShallow);
}
function wn(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Wr(e) {
  return !k(e, "__v_skip") && Object.isExtensible(e) && On(e, "__v_skip", !0), e;
}
const Re = (e) => q(e) ? To(e) : e, St = (e) => q(e) ? fo(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rs(e) {
  return Kr(e, !1);
}
function Kr(e, t) {
  return Q(e) ? e : new Gr(e, t);
}
class Gr {
  constructor(t, n) {
    this.dep = new Co(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : Re(t), this.__v_isShallow = n;
  }
  get value() {
    return z.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || de(t) || Ie(t);
    t = o ? t : j(t), rt(t, n) && (this._rawValue = t, this._value = o ? t : Re(t), z.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ls(e) {
  return Q(e) ? e.value : e;
}
const qr = {
  get: (e, t, n) => t === "__v_raw" ? e : ls(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Q(i) && !Q(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function cs(e) {
  return lt(e) ? e : new Proxy(e, qr);
}
class zr {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Co(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    W !== this)
      return Gi(this, !0), !0;
  }
  get value() {
    const t = z.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ji(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : z.NODE_ENV !== "production" && Pe("Write operation failed: computed value is readonly");
  }
}
function Jr(e, t, n = !1) {
  let o, i;
  return I(e) ? o = e : (o = e.get, i = e.set), new zr(o, i, n);
}
const un = {}, xn = /* @__PURE__ */ new WeakMap();
let pt;
function Yr(e, t = !1, n = pt) {
  if (n) {
    let o = xn.get(n);
    o || xn.set(n, o = []), o.push(e);
  } else z.NODE_ENV !== "production" && !t && Pe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Xr(e, t, n = G) {
  const { immediate: o, deep: i, once: s, scheduler: r, augmentJob: l, call: f } = n, h = (T) => {
    (n.onWarn || Pe)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (T) => i ? T : de(T) || i === !1 || i === 0 ? st(T, 1) : st(T);
  let u, _, x, S, D = !1, C = !1;
  if (Q(e) ? (_ = () => e.value, D = de(e)) : lt(e) ? (_ = () => d(e), D = !0) : $(e) ? (C = !0, D = e.some((T) => lt(T) || de(T)), _ = () => e.map((T) => {
    if (Q(T))
      return T.value;
    if (lt(T))
      return d(T);
    if (I(T))
      return f ? f(T, 2) : T();
    z.NODE_ENV !== "production" && h(T);
  })) : I(e) ? t ? _ = f ? () => f(e, 2) : e : _ = () => {
    if (x) {
      $e();
      try {
        x();
      } finally {
        Ae();
      }
    }
    const T = pt;
    pt = u;
    try {
      return f ? f(e, 3, [S]) : e(S);
    } finally {
      pt = T;
    }
  } : (_ = ie, z.NODE_ENV !== "production" && h(e)), t && i) {
    const T = _, Z = i === !0 ? 1 / 0 : i;
    _ = () => st(T(), Z);
  }
  const H = wr(), M = () => {
    u.stop(), H && H.active && vo(H.effects, u);
  };
  if (s && t) {
    const T = t;
    t = (...Z) => {
      T(...Z), M();
    };
  }
  let F = C ? new Array(e.length).fill(un) : un;
  const ee = (T) => {
    if (!(!(u.flags & 1) || !u.dirty && !T))
      if (t) {
        const Z = u.run();
        if (i || D || (C ? Z.some((be, le) => rt(be, F[le])) : rt(Z, F))) {
          x && x();
          const be = pt;
          pt = u;
          try {
            const le = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              F === un ? void 0 : C && F[0] === un ? [] : F,
              S
            ];
            F = Z, f ? f(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            );
          } finally {
            pt = be;
          }
        }
      } else
        u.run();
  };
  return l && l(ee), u = new Wi(_), u.scheduler = r ? () => r(ee, !1) : ee, S = (T) => Yr(T, !1, u), x = u.onStop = () => {
    const T = xn.get(u);
    if (T) {
      if (f)
        f(T, 4);
      else
        for (const Z of T) Z();
      xn.delete(u);
    }
  }, z.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? ee(!0) : F = u.run() : r ? r(ee.bind(null, !0), !0) : u.run(), M.pause = u.pause.bind(u), M.resume = u.resume.bind(u), M.stop = M, M;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Q(e))
    st(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      st(e[o], t, n);
  else if (ji(e) || gt(e))
    e.forEach((o) => {
      st(o, t, n);
    });
  else if (Rn(e)) {
    for (const o in e)
      st(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && st(e[o], t, n);
  }
  return e;
}
var p = {};
const mt = [];
function hn(e) {
  mt.push(e);
}
function gn() {
  mt.pop();
}
let Zn = !1;
function O(e, ...t) {
  if (Zn) return;
  Zn = !0, $e();
  const n = mt.length ? mt[mt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Zr();
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
`, ...Qr(i)), console.warn(...s);
  }
  Ae(), Zn = !1;
}
function Zr() {
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
function Qr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...el(n));
  }), t;
}
function el({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${rn(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [i, ...tl(e.props), s] : [i + s];
}
function tl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...fs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fs(e, t, n) {
  return X(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Q(t) ? (t = fs(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
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
function Ke(e, t, n, o) {
  if (I(e)) {
    const i = Ct(e, t, n, o);
    return i && Oo(i) && i.catch((s) => {
      tn(s, t, n);
    }), i;
  }
  if ($(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Ke(e[s], t, n, o));
    return i;
  } else p.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function tn(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || G;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = p.NODE_ENV !== "production" ? Po[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, f, h) === !1)
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
  nl(e, n, i, o, r);
}
function nl(e, t, n, o = !0, i = !1) {
  if (p.NODE_ENV !== "production") {
    const s = Po[t];
    if (n && hn(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && gn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const ue = [];
let ke = -1;
const Dt = [];
let ot = null, wt = 0;
const as = /* @__PURE__ */ Promise.resolve();
let Dn = null;
const ol = 100;
function us(e) {
  const t = Dn || as;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function il(e) {
  let t = ke + 1, n = ue.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = ue[o], s = Jt(i);
    s < e || s === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function kn(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = ue[ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? ue.push(e) : ue.splice(il(t), 0, e), e.flags |= 1, ds();
  }
}
function ds() {
  Dn || (Dn = as.then(gs));
}
function ps(e) {
  $(e) ? Dt.push(...e) : ot && e.id === -1 ? ot.splice(wt + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1), ds();
}
function ei(e, t, n = ke + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ue.length; n++) {
    const o = ue[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && $o(t, o))
        continue;
      ue.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function hs(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, o) => Jt(n) - Jt(o)
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
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gs(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => $o(e, n) : ie;
  try {
    for (ke = 0; ke < ue.length; ke++) {
      const n = ue[ke];
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
    for (; ke < ue.length; ke++) {
      const n = ue[ke];
      n && (n.flags &= -2);
    }
    ke = -1, ue.length = 0, hs(e), Dn = null, (ue.length || Dt.length) && gs(e);
  }
}
function $o(e, t) {
  const n = e.get(t) || 0;
  if (n > ol) {
    const o = t.i, i = o && Zs(o.type);
    return tn(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Se = !1;
const _n = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (en().__VUE_HMR_RUNTIME__ = {
  createRecord: Qn(_s),
  rerender: Qn(ll),
  reload: Qn(cl)
});
const bt = /* @__PURE__ */ new Map();
function sl(e) {
  const t = e.type.__hmrId;
  let n = bt.get(t);
  n || (_s(t, e.type), n = bt.get(t)), n.instances.add(e);
}
function rl(e) {
  bt.get(e.type.__hmrId).instances.delete(e);
}
function _s(e, t) {
  return bt.has(e) ? !1 : (bt.set(e, {
    initialDef: Vn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Vn(e) {
  return Qs(e) ? e.__vccOpts : e;
}
function ll(e, t) {
  const n = bt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Vn(o.type).render = t), o.renderCache = [], Se = !0, o.job.flags & 8 || o.update(), Se = !1;
  }));
}
function cl(e, t) {
  const n = bt.get(e);
  if (!n) return;
  t = Vn(t), ti(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const s = o[i], r = Vn(s.type);
    let l = _n.get(r);
    l || (r !== n.initialDef && ti(r, t), _n.set(r, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? kn(() => {
      s.job.flags & 8 || (Se = !0, s.parent.update(), Se = !1, l.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(r);
  }
  ps(() => {
    _n.clear();
  });
}
function ti(e, t) {
  Y(e, t);
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
let Be, jt = [], ao = !1;
function nn(e, ...t) {
  Be ? Be.emit(e, ...t) : ao || jt.push({ event: e, args: t });
}
function ms(e, t) {
  var n, o;
  Be = e, Be ? (Be.enabled = !0, jt.forEach(({ event: i, args: s }) => Be.emit(i, ...s)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ms(s, t);
  }), setTimeout(() => {
    Be || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ao = !0, jt = []);
  }, 3e3)) : (ao = !0, jt = []);
}
function fl(e, t) {
  nn("app:init", e, t, {
    Fragment: re,
    Text: on,
    Comment: we,
    Static: bn
  });
}
function al(e) {
  nn("app:unmount", e);
}
const ul = /* @__PURE__ */ Ao(
  "component:added"
  /* COMPONENT_ADDED */
), Es = /* @__PURE__ */ Ao(
  "component:updated"
  /* COMPONENT_UPDATED */
), dl = /* @__PURE__ */ Ao(
  "component:removed"
  /* COMPONENT_REMOVED */
), pl = (e) => {
  Be && typeof Be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Be.cleanupBuffer(e) && dl(e);
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
const hl = /* @__PURE__ */ bs(
  "perf:start"
  /* PERFORMANCE_START */
), gl = /* @__PURE__ */ bs(
  "perf:end"
  /* PERFORMANCE_END */
);
function bs(e) {
  return (t, n, o) => {
    nn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function _l(e, t, n) {
  nn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ve = null, ys = null;
function Sn(e) {
  const t = ve;
  return ve = e, ys = e && e.type.__scopeId || null, t;
}
function ml(e, t = ve, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && gi(-1);
    const s = Sn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Sn(s), o._d && gi(1);
    }
    return p.NODE_ENV !== "production" && Es(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ns(e) {
  lr(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function at(e, t, n, o) {
  const i = e.dirs, s = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    s && (l.oldValue = s[r].value);
    let f = l.dir[o];
    f && ($e(), Ke(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ae());
  }
}
function El(e, t) {
  if (p.NODE_ENV !== "production" && (!ne || ne.isMounted) && O("provide() can only be used inside setup()."), ne) {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function mn(e, t, n = !1) {
  const o = Js();
  if (o || Vt) {
    let i = Vt ? Vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const bl = /* @__PURE__ */ Symbol.for("v-scx"), yl = () => {
  {
    const e = mn(bl);
    return e || p.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function eo(e, t, n) {
  return p.NODE_ENV !== "production" && !I(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vs(e, t, n);
}
function vs(e, t, n = G) {
  const { immediate: o, deep: i, flush: s, once: r } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Y({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = O);
  const f = t && o || !t && s !== "post";
  let h;
  if (Xt) {
    if (s === "sync") {
      const x = yl();
      h = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!f) {
      const x = () => {
      };
      return x.stop = ie, x.resume = ie, x.pause = ie, x;
    }
  }
  const d = ne;
  l.call = (x, S, D) => Ke(x, d, S, D);
  let u = !1;
  s === "post" ? l.scheduler = (x) => {
    ye(x, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (x, S) => {
    S ? x() : kn(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), u && (x.flags |= 2, d && (x.id = d.uid, x.i = d));
  };
  const _ = Xr(e, t, l);
  return Xt && (h ? h.push(_) : f && _()), _;
}
function Nl(e, t, n) {
  const o = this.proxy, i = X(e) ? e.includes(".") ? Os(o, e) : () => o[e] : e.bind(o, o);
  let s;
  I(t) ? s = t : (s = t.handler, n = t);
  const r = sn(this), l = vs(i, s.bind(o), n);
  return r(), l;
}
function Os(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const vl = /* @__PURE__ */ Symbol("_vte"), Ol = (e) => e.__isTeleport, wl = /* @__PURE__ */ Symbol("_leaveCb");
function Io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Y({ name: e.name }, t, { setup: e })
  ) : e;
}
function ws(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ni = /* @__PURE__ */ new WeakSet(), Cn = /* @__PURE__ */ new WeakMap();
function Bt(e, t, n, o, i = !1) {
  if ($(e)) {
    e.forEach(
      (D, C) => Bt(
        D,
        t && ($(t) ? t[C] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Wt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Bt(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? Uo(o.component) : o.el, r = i ? null : s, { i: l, r: f } = e;
  if (p.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = l.refs === G ? l.refs = {} : l.refs, u = l.setupState, _ = j(u), x = u === G ? Fi : (D) => p.NODE_ENV !== "production" && (k(_, D) && !Q(_[D]) && O(
    `Template ref "${D}" used on a non-ref value. It will not work in the production build.`
  ), ni.has(_[D])) ? !1 : k(_, D), S = (D) => p.NODE_ENV === "production" || !ni.has(D);
  if (h != null && h !== f) {
    if (oi(t), X(h))
      d[h] = null, x(h) && (u[h] = null);
    else if (Q(h)) {
      S(h) && (h.value = null);
      const D = t;
      D.k && (d[D.k] = null);
    }
  }
  if (I(f))
    Ct(f, l, 12, [r, d]);
  else {
    const D = X(f), C = Q(f);
    if (D || C) {
      const H = () => {
        if (e.f) {
          const M = D ? x(f) ? u[f] : d[f] : S(f) || !e.k ? f.value : d[e.k];
          if (i)
            $(M) && vo(M, s);
          else if ($(M))
            M.includes(s) || M.push(s);
          else if (D)
            d[f] = [s], x(f) && (u[f] = d[f]);
          else {
            const F = [s];
            S(f) && (f.value = F), e.k && (d[e.k] = F);
          }
        } else D ? (d[f] = r, x(f) && (u[f] = r)) : C ? (S(f) && (f.value = r), e.k && (d[e.k] = r)) : p.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (r) {
        const M = () => {
          H(), Cn.delete(e);
        };
        M.id = -1, Cn.set(e, M), ye(M, n);
      } else
        oi(e), H();
    } else p.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function oi(e) {
  const t = Cn.get(e);
  t && (t.flags |= 8, Cn.delete(e));
}
en().requestIdleCallback;
en().cancelIdleCallback;
const Wt = (e) => !!e.type.__asyncLoader, Mo = (e) => e.type.__isKeepAlive;
function xl(e, t) {
  xs(e, "a", t);
}
function Dl(e, t) {
  xs(e, "da", t);
}
function xs(e, t, n = ne) {
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
      Mo(i.parent.vnode) && Vl(o, t, n, i), i = i.parent;
  }
}
function Vl(e, t, n, o) {
  const i = Un(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Vs(() => {
    vo(o[t], i);
  }, n);
}
function Un(e, t, n = ne, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
      $e();
      const l = sn(n), f = Ke(t, n, e, r);
      return l(), Ae(), f;
    });
    return o ? i.unshift(s) : i.push(s), s;
  } else if (p.NODE_ENV !== "production") {
    const i = dt(Po[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ze = (e) => (t, n = ne) => {
  (!Xt || e === "sp") && Un(e, (...o) => t(...o), n);
}, Sl = Ze("bm"), Ds = Ze("m"), Cl = Ze(
  "bu"
), Tl = Ze("u"), Pl = Ze(
  "bum"
), Vs = Ze("um"), $l = Ze(
  "sp"
), Al = Ze("rtg"), Il = Ze("rtc");
function Rl(e, t = ne) {
  Un("ec", e, t);
}
const Ml = /* @__PURE__ */ Symbol.for("v-ndc");
function dn(e, t, n, o) {
  let i;
  const s = n, r = $(e);
  if (r || X(e)) {
    const l = r && lt(e);
    let f = !1, h = !1;
    l && (f = !de(e), h = Ie(e), e = jn(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        f ? h ? St(Re(e[d])) : Re(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
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
        const d = l[f];
        i[f] = t(e[d], d, f, s);
      }
    }
  else
    i = [];
  return i;
}
const uo = (e) => e ? Ys(e) ? Uo(e) : uo(e.parent) : null, Et = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? We(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? We(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? We(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? We(e.refs) : e.refs,
    $parent: (e) => uo(e.parent),
    $root: (e) => uo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ts(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      kn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = us.bind(e.proxy)),
    $watch: (e) => Nl.bind(e)
  })
), Fo = (e) => e === "_" || e === "$", to = (e, t) => e !== G && !e.__isScriptSetup && k(e, t), Ss = {
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
        po && (r[t] = 0);
      }
    }
    const h = Et[t];
    let d, u;
    if (h)
      return t === "$attrs" ? (oe(e.attrs, "get", ""), p.NODE_ENV !== "production" && Pn()) : p.NODE_ENV !== "production" && t === "$slots" && oe(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== G && k(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      u = f.config.globalProperties, k(u, t)
    )
      return u[t];
    p.NODE_ENV !== "production" && ve && (!X(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== G && Fo(t[0]) && k(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ve && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: s } = e;
    return to(i, t) ? (i[t] = n, !0) : p.NODE_ENV !== "production" && i.__isScriptSetup && k(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && k(o, t) ? (o[t] = n, !0) : k(e.props, t) ? (p.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && O(
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
    return !!(n[l] || e !== G && l[0] !== "$" && k(e, l) || to(t, l) || k(s, l) || k(o, l) || k(Et, l) || k(i.config.globalProperties, l) || (f = r.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (Ss.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Fl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Et).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Et[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ie
    });
  }), t;
}
function jl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ie
    });
  });
}
function Hl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Fo(o[0])) {
        O(
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
        set: ie
      });
    }
  });
}
function ii(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ll() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let po = !0;
function kl(e) {
  const t = Ts(e), n = e.proxy, o = e.ctx;
  po = !1, t.beforeCreate && si(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: r,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: _,
    beforeUpdate: x,
    updated: S,
    activated: D,
    deactivated: C,
    beforeDestroy: H,
    beforeUnmount: M,
    destroyed: F,
    unmounted: ee,
    render: T,
    renderTracked: Z,
    renderTriggered: be,
    errorCaptured: le,
    serverPrefetch: pe,
    // public API
    expose: Ge,
    inheritAttrs: Qe,
    // assets
    components: De,
    directives: ln,
    filters: Wo
  } = t, et = p.NODE_ENV !== "production" ? Ll() : null;
  if (p.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const L in U)
        et("Props", L);
  }
  if (h && Ul(h, o, et), r)
    for (const U in r) {
      const L = r[U];
      I(L) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: L.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = L.bind(n), p.NODE_ENV !== "production" && et("Methods", U)) : p.NODE_ENV !== "production" && O(
        `Method "${U}" has type "${typeof L}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    p.NODE_ENV !== "production" && !I(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = i.call(n, n);
    if (p.NODE_ENV !== "production" && Oo(U) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(U))
      p.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = To(U), p.NODE_ENV !== "production")
      for (const L in U)
        et("Data", L), Fo(L[0]) || Object.defineProperty(o, L, {
          configurable: !0,
          enumerable: !0,
          get: () => U[L],
          set: ie
        });
  }
  if (po = !0, s)
    for (const U in s) {
      const L = s[U], Me = I(L) ? L.bind(n, n) : I(L.get) ? L.get.bind(n, n) : ie;
      p.NODE_ENV !== "production" && Me === ie && O(`Computed property "${U}" has no getter.`);
      const Kn = !I(L) && I(L.set) ? L.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : ie, Tt = Zt({
        get: Me,
        set: Kn
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
      Cs(l[U], o, n, U);
  if (f) {
    const U = I(f) ? f.call(n) : f;
    Reflect.ownKeys(U).forEach((L) => {
      El(L, U[L]);
    });
  }
  d && si(d, e, "c");
  function he(U, L) {
    $(L) ? L.forEach((Me) => U(Me.bind(n))) : L && U(L.bind(n));
  }
  if (he(Sl, u), he(Ds, _), he(Cl, x), he(Tl, S), he(xl, D), he(Dl, C), he(Rl, le), he(Il, Z), he(Al, be), he(Pl, M), he(Vs, ee), he($l, pe), $(Ge))
    if (Ge.length) {
      const U = e.exposed || (e.exposed = {});
      Ge.forEach((L) => {
        Object.defineProperty(U, L, {
          get: () => n[L],
          set: (Me) => n[L] = Me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === ie && (e.render = T), Qe != null && (e.inheritAttrs = Qe), De && (e.components = De), ln && (e.directives = ln), pe && ws(e);
}
function Ul(e, t, n = ie) {
  $(e) && (e = ho(e));
  for (const o in e) {
    const i = e[o];
    let s;
    q(i) ? "default" in i ? s = mn(
      i.from || o,
      i.default,
      !0
    ) : s = mn(i.from || o) : s = mn(i), Q(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (r) => s.value = r
    }) : t[o] = s, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function si(e, t, n) {
  Ke(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Cs(e, t, n, o) {
  let i = o.includes(".") ? Os(n, o) : () => n[o];
  if (X(e)) {
    const s = t[e];
    I(s) ? eo(i, s) : p.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, s);
  } else if (I(e))
    eo(i, e.bind(n));
  else if (q(e))
    if ($(e))
      e.forEach((s) => Cs(s, t, n, o));
    else {
      const s = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(s) ? eo(i, s, e) : p.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else p.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function Ts(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (h) => Tn(f, h, r, !0)
  ), Tn(f, t, r)), q(t) && s.set(t, f), f;
}
function Tn(e, t, n, o = !1) {
  const { mixins: i, extends: s } = t;
  s && Tn(e, s, n, !0), i && i.forEach(
    (r) => Tn(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      p.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Bl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Bl = {
  data: ri,
  props: li,
  emits: li,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Kl,
  // provide / inject
  provide: ri,
  inject: Wl
};
function ri(e, t) {
  return t ? e ? function() {
    return Y(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Wl(e, t) {
  return Ht(ho(e), ho(t));
}
function ho(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function li(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    ii(e),
    ii(t ?? {})
  ) : t;
}
function Kl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ae(e[o], t[o]);
  return n;
}
function Ps() {
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
let Gl = 0;
function ql(e, t) {
  return function(o, i = null) {
    I(o) || (o = Y({}, o)), i != null && !q(i) && (p.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const s = Ps(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = s.app = {
      _uid: Gl++,
      _component: o,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: bi,
      get config() {
        return s.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? p.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : d && I(d.install) ? (r.add(d), d.install(h, ...u)) : I(d) ? (r.add(d), d(h, ...u)) : p.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return s.mixins.includes(d) ? p.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), h;
      },
      component(d, u) {
        return p.NODE_ENV !== "production" && bo(d, s.config), u ? (p.NODE_ENV !== "production" && s.components[d] && O(`Component "${d}" has already been registered in target app.`), s.components[d] = u, h) : s.components[d];
      },
      directive(d, u) {
        return p.NODE_ENV !== "production" && Ns(d), u ? (p.NODE_ENV !== "production" && s.directives[d] && O(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, h) : s.directives[d];
      },
      mount(d, u, _) {
        if (f)
          p.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const x = h._ceVNode || Te(o, i);
          return x.appContext = s, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), p.NODE_ENV !== "production" && (s.reload = () => {
            const S = ct(x);
            S.el = null, e(S, d, _);
          }), e(x, d, _), f = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = x.component, fl(h, bi)), Uo(x.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (Ke(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, al(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return p.NODE_ENV !== "production" && d in s.provides && (k(s.provides, d) ? O(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : O(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = u, h;
      },
      runWithContext(d) {
        const u = Vt;
        Vt = h;
        try {
          return d();
        } finally {
          Vt = u;
        }
      }
    };
    return h;
  };
}
let Vt = null;
const zl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${Ne(t)}Modifiers`];
function Jl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || G;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(dt(Ee(t)) in u)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${dt(Ee(t))}" prop.`
        );
      else {
        const _ = d[t];
        I(_) && (_(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const s = t.startsWith("update:"), r = s && zl(o, t.slice(7));
  if (r && (r.trim && (i = n.map((d) => X(d) ? d.trim() : d)), r.number && (i = n.map(ar))), p.NODE_ENV !== "production" && _l(e, t, i), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[dt(d)] && O(
      `Event "${d}" is emitted in component ${rn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = dt(t)] || // also try camelCase event handler (#2249)
  o[l = dt(Ee(t))];
  !f && s && (f = o[l = dt(Ne(t))]), f && Ke(
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
    e.emitted[l] = !0, Ke(
      h,
      e,
      6,
      i
    );
  }
}
const Yl = /* @__PURE__ */ new WeakMap();
function $s(e, t, n = !1) {
  const o = n ? Yl : t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let r = {}, l = !1;
  if (!I(e)) {
    const f = (h) => {
      const d = $s(h, t, !0);
      d && (l = !0, Y(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (q(e) && o.set(e, null), null) : ($(s) ? s.forEach((f) => r[f] = null) : Y(r, s), q(e) && o.set(e, r), r);
}
function Bn(e, t) {
  return !e || !Qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, Ne(t)) || k(e, t));
}
let go = !1;
function Pn() {
  go = !0;
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
    renderCache: d,
    props: u,
    data: _,
    setupState: x,
    ctx: S,
    inheritAttrs: D
  } = e, C = Sn(e);
  let H, M;
  p.NODE_ENV !== "production" && (go = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = i || o, Z = p.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(T, {
        get(be, le, pe) {
          return O(
            `Property '${String(
              le
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(be, le, pe);
        }
      }) : T;
      H = Ve(
        h.call(
          Z,
          T,
          d,
          p.NODE_ENV !== "production" ? We(u) : u,
          x,
          _,
          S
        )
      ), M = l;
    } else {
      const T = t;
      p.NODE_ENV !== "production" && l === u && Pn(), H = Ve(
        T.length > 1 ? T(
          p.NODE_ENV !== "production" ? We(u) : u,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return Pn(), We(l);
            },
            slots: r,
            emit: f
          } : { attrs: l, slots: r, emit: f }
        ) : T(
          p.NODE_ENV !== "production" ? We(u) : u,
          null
        )
      ), M = t.props ? l : Xl(l);
    }
  } catch (T) {
    Kt.length = 0, tn(T, e, 1), H = Te(we);
  }
  let F = H, ee;
  if (p.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([F, ee] = As(H)), M && D !== !1) {
    const T = Object.keys(M), { shapeFlag: Z } = F;
    if (T.length) {
      if (Z & 7)
        s && T.some(vn) && (M = Zl(
          M,
          s
        )), F = ct(F, M, !1, !0);
      else if (p.NODE_ENV !== "production" && !go && F.type !== we) {
        const be = Object.keys(l), le = [], pe = [];
        for (let Ge = 0, Qe = be.length; Ge < Qe; Ge++) {
          const De = be[Ge];
          Qt(De) ? vn(De) || le.push(De[2].toLowerCase() + De.slice(3)) : pe.push(De);
        }
        pe.length && O(
          `Extraneous non-props attributes (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), le.length && O(
          `Extraneous non-emits event listeners (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !fi(F) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), F = ct(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !fi(F) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Io(F, n.transition)), p.NODE_ENV !== "production" && ee ? ee(F) : H = F, Sn(C), H;
}
const As = (e) => {
  const t = e.children, n = e.dynamicChildren, o = jo(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return As(o);
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
    if (Wn(i)) {
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
const Xl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Zl = (e, t) => {
  const n = {};
  for (const o in e)
    (!vn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, fi = (e) => e.shapeFlag & 7 || e.type === we;
function Ql(e, t, n) {
  const { props: o, children: i, component: s } = e, { props: r, children: l, patchFlag: f } = t, h = s.emitsOptions;
  if (p.NODE_ENV !== "production" && (i || l) && Se || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? ai(o, r, h) : !!r;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const _ = d[u];
        if (r[_] !== o[_] && !Bn(h, _))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? ai(o, r, h) : !0 : !!r;
  return !1;
}
function ai(e, t, n) {
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
function ec({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Is = {}, Rs = () => Object.create(Is), Ms = (e) => Object.getPrototypeOf(e) === Is;
function tc(e, t, n, o = !1) {
  const i = {}, s = Rs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fs(e, t, i, s);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  p.NODE_ENV !== "production" && Hs(t || {}, i, e), n ? e.props = o ? i : Br(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function nc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function oc(e, t, n, o) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: r }
  } = e, l = j(i), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && nc(e)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let _ = d[u];
        if (Bn(e.emitsOptions, _))
          continue;
        const x = t[_];
        if (f)
          if (k(s, _))
            x !== s[_] && (s[_] = x, h = !0);
          else {
            const S = Ee(_);
            i[S] = _o(
              f,
              l,
              S,
              x,
              e,
              !1
            );
          }
        else
          x !== s[_] && (s[_] = x, h = !0);
      }
    }
  } else {
    Fs(e, t, i, s) && (h = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !k(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ne(u)) === u || !k(t, d))) && (f ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[u] = _o(
        f,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (s !== l)
      for (const u in s)
        (!t || !k(t, u)) && (delete s[u], h = !0);
  }
  h && Ue(e.attrs, "set", ""), p.NODE_ENV !== "production" && Hs(t || {}, i, e);
}
function Fs(e, t, n, o) {
  const [i, s] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let f in t) {
      if (Lt(f))
        continue;
      const h = t[f];
      let d;
      i && k(i, d = Ee(f)) ? !s || !s.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Bn(e.emitsOptions, f) || (!(f in o) || h !== o[f]) && (o[f] = h, r = !0);
    }
  if (s) {
    const f = j(n), h = l || G;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = _o(
        i,
        f,
        u,
        h[u],
        e,
        !k(h, u)
      );
    }
  }
  return r;
}
function _o(e, t, n, o, i, s) {
  const r = e[n];
  if (r != null) {
    const l = k(r, "default");
    if (l && o === void 0) {
      const f = r.default;
      if (r.type !== Function && !r.skipFactory && I(f)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const d = sn(i);
          o = h[n] = f.call(
            null,
            t
          ), d();
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
const ic = /* @__PURE__ */ new WeakMap();
function js(e, t, n = !1) {
  const o = n ? ic : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const s = e.props, r = {}, l = [];
  let f = !1;
  if (!I(e)) {
    const d = (u) => {
      f = !0;
      const [_, x] = js(u, t, !0);
      Y(r, _), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !f)
    return q(e) && o.set(e, xt), xt;
  if ($(s))
    for (let d = 0; d < s.length; d++) {
      p.NODE_ENV !== "production" && !X(s[d]) && O("props must be strings when using array syntax.", s[d]);
      const u = Ee(s[d]);
      ui(u) && (r[u] = G);
    }
  else if (s) {
    p.NODE_ENV !== "production" && !q(s) && O("invalid props options", s);
    for (const d in s) {
      const u = Ee(d);
      if (ui(u)) {
        const _ = s[d], x = r[u] = $(_) || I(_) ? { type: _ } : Y({}, _), S = x.type;
        let D = !1, C = !0;
        if ($(S))
          for (let H = 0; H < S.length; ++H) {
            const M = S[H], F = I(M) && M.name;
            if (F === "Boolean") {
              D = !0;
              break;
            } else F === "String" && (C = !1);
          }
        else
          D = I(S) && S.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = D, x[
          1
          /* shouldCastTrue */
        ] = C, (D || k(x, "default")) && l.push(u);
      }
    }
  }
  const h = [r, l];
  return q(e) && o.set(e, h), h;
}
function ui(e) {
  return e[0] !== "$" && !Lt(e) ? !0 : (p.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function sc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Hs(e, t, n) {
  const o = j(t), i = n.propsOptions[0], s = Object.keys(e).map((r) => Ee(r));
  for (const r in i) {
    let l = i[r];
    l != null && rc(
      r,
      o[r],
      l,
      p.NODE_ENV !== "production" ? We(o) : o,
      !s.includes(r)
    );
  }
}
function rc(e, t, n, o, i) {
  const { type: s, required: r, validator: l, skipCheck: f } = n;
  if (r && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (s != null && s !== !0 && !f) {
      let h = !1;
      const d = $(s) ? s : [s], u = [];
      for (let _ = 0; _ < d.length && !h; _++) {
        const { valid: x, expectedType: S } = cc(t, d[_]);
        u.push(S || ""), h = x;
      }
      if (!h) {
        O(fc(e, t, u));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const lc = /* @__PURE__ */ Xe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function cc(e, t) {
  let n;
  const o = sc(t);
  if (o === "null")
    n = e === null;
  else if (lc(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function fc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Fn).join(" | ")}`;
  const i = n[0], s = wo(t), r = di(t, i), l = di(t, s);
  return n.length === 1 && pi(i) && !ac(i, s) && (o += ` with value ${r}`), o += `, got ${s} `, pi(s) && (o += `with value ${l}.`), o;
}
function di(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function pi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ac(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ho = (e) => e === "_" || e === "_ctx" || e === "$stable", Lo = (e) => $(e) ? e.map(Ve) : [Ve(e)], uc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ml((...i) => (p.NODE_ENV !== "production" && ne && !(n === null && ve) && !(n && n.root !== ne.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Lo(t(...i))), n);
  return o._c = !1, o;
}, Ls = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Ho(i)) continue;
    const s = e[i];
    if (I(s))
      t[i] = uc(i, s, o);
    else if (s != null) {
      p.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Lo(s);
      t[i] = () => r;
    }
  }
}, ks = (e, t) => {
  p.NODE_ENV !== "production" && !Mo(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Lo(t);
  e.slots.default = () => n;
}, mo = (e, t, n) => {
  for (const o in t)
    (n || !Ho(o)) && (e[o] = t[o]);
}, dc = (e, t, n) => {
  const o = e.slots = Rs();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (mo(o, t, n), n && On(o, "_", i, !0)) : Ls(t, o);
  } else t && ks(e, t);
}, pc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let s = !0, r = G;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && Se ? (mo(i, t, n), Ue(e, "set", "$slots")) : n && l === 1 ? s = !1 : mo(i, t, n) : (s = !t.$stable, Ls(t, i)), r = t;
  } else t && (ks(e, t), r = { default: 1 });
  if (s)
    for (const l in i)
      !Ho(l) && r[l] == null && delete i[l];
};
let Mt, Ye;
function vt(e, t) {
  e.appContext.config.performance && $n() && Ye.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && hl(e, t, $n() ? Ye.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && $n()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", i = `<${rn(e, e.type)}> ${t}`;
    Ye.mark(o), Ye.measure(i, n, o), Ye.clearMeasures(i), Ye.clearMarks(n), Ye.clearMarks(o);
  }
  p.NODE_ENV !== "production" && gl(e, t, $n() ? Ye.now() : Date.now());
}
function $n() {
  return Mt !== void 0 || (typeof window < "u" && window.performance ? (Mt = !0, Ye = window.performance) : Mt = !1), Mt;
}
function hc() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ye = bc;
function gc(e) {
  return _c(e);
}
function _c(e, t) {
  hc();
  const n = en();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && ms(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: s,
    createElement: r,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: d,
    parentNode: u,
    nextSibling: _,
    setScopeId: x = ie,
    insertStaticContent: S
  } = e, D = (c, a, g, y = null, E = null, m = null, w = void 0, N = null, v = p.NODE_ENV !== "production" && Se ? !1 : !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !Ft(c, a) && (y = cn(c), tt(c, E, m, !0), c = null), a.patchFlag === -2 && (v = !1, a.dynamicChildren = null);
    const { type: b, ref: A, shapeFlag: V } = a;
    switch (b) {
      case on:
        C(c, a, g, y);
        break;
      case we:
        H(c, a, g, y);
        break;
      case bn:
        c == null ? M(a, g, y, w) : p.NODE_ENV !== "production" && F(c, a, g, w);
        break;
      case re:
        ln(
          c,
          a,
          g,
          y,
          E,
          m,
          w,
          N,
          v
        );
        break;
      default:
        V & 1 ? Z(
          c,
          a,
          g,
          y,
          E,
          m,
          w,
          N,
          v
        ) : V & 6 ? Wo(
          c,
          a,
          g,
          y,
          E,
          m,
          w,
          N,
          v
        ) : V & 64 || V & 128 ? b.process(
          c,
          a,
          g,
          y,
          E,
          m,
          w,
          N,
          v,
          $t
        ) : p.NODE_ENV !== "production" && O("Invalid VNode type:", b, `(${typeof b})`);
    }
    A != null && E ? Bt(A, c && c.ref, m, a || c, !a) : A == null && c && c.ref != null && Bt(c.ref, null, m, c, !0);
  }, C = (c, a, g, y) => {
    if (c == null)
      o(
        a.el = l(a.children),
        g,
        y
      );
    else {
      const E = a.el = c.el;
      if (a.children !== c.children)
        if (p.NODE_ENV !== "production" && Se && a.patchFlag === -1 && "__elIndex" in c) {
          const m = g.childNodes, w = l(a.children), N = m[a.__elIndex = c.__elIndex];
          o(w, g, N), i(N);
        } else
          h(E, a.children);
    }
  }, H = (c, a, g, y) => {
    c == null ? o(
      a.el = f(a.children || ""),
      g,
      y
    ) : a.el = c.el;
  }, M = (c, a, g, y) => {
    [c.el, c.anchor] = S(
      c.children,
      a,
      g,
      y,
      c.el,
      c.anchor
    );
  }, F = (c, a, g, y) => {
    if (a.children !== c.children) {
      const E = _(c.anchor);
      T(c), [a.el, a.anchor] = S(
        a.children,
        g,
        E,
        y
      );
    } else
      a.el = c.el, a.anchor = c.anchor;
  }, ee = ({ el: c, anchor: a }, g, y) => {
    let E;
    for (; c && c !== a; )
      E = _(c), o(c, g, y), c = E;
    o(a, g, y);
  }, T = ({ el: c, anchor: a }) => {
    let g;
    for (; c && c !== a; )
      g = _(c), i(c), c = g;
    i(a);
  }, Z = (c, a, g, y, E, m, w, N, v) => {
    if (a.type === "svg" ? w = "svg" : a.type === "math" && (w = "mathml"), c == null)
      be(
        a,
        g,
        y,
        E,
        m,
        w,
        N,
        v
      );
    else {
      const b = c.el && c.el._isVueCE ? c.el : null;
      try {
        b && b._beginPatch(), Ge(
          c,
          a,
          E,
          m,
          w,
          N,
          v
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, be = (c, a, g, y, E, m, w, N) => {
    let v, b;
    const { props: A, shapeFlag: V, transition: P, dirs: R } = c;
    if (v = c.el = r(
      c.type,
      m,
      A && A.is,
      A
    ), V & 8 ? d(v, c.children) : V & 16 && pe(
      c.children,
      v,
      null,
      y,
      E,
      no(c, m),
      w,
      N
    ), R && at(c, null, y, "created"), le(v, c, c.scopeId, w, y), A) {
      for (const J in A)
        J !== "value" && !Lt(J) && s(v, J, null, A[J], m, y);
      "value" in A && s(v, "value", null, A.value, m), (b = A.onVnodeBeforeMount) && Le(b, y, c);
    }
    p.NODE_ENV !== "production" && (On(v, "__vnode", c, !0), On(v, "__vueParentComponent", y, !0)), R && at(c, null, y, "beforeMount");
    const B = mc(E, P);
    B && P.beforeEnter(v), o(v, a, g), ((b = A && A.onVnodeMounted) || B || R) && ye(() => {
      b && Le(b, y, c), B && P.enter(v), R && at(c, null, y, "mounted");
    }, E);
  }, le = (c, a, g, y, E) => {
    if (g && x(c, g), y)
      for (let m = 0; m < y.length; m++)
        x(c, y[m]);
    if (E) {
      let m = E.subTree;
      if (p.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && (m = jo(m.children) || m), a === m || Ws(m.type) && (m.ssContent === a || m.ssFallback === a)) {
        const w = E.vnode;
        le(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          E.parent
        );
      }
    }
  }, pe = (c, a, g, y, E, m, w, N, v = 0) => {
    for (let b = v; b < c.length; b++) {
      const A = c[b] = N ? it(c[b]) : Ve(c[b]);
      D(
        null,
        A,
        a,
        g,
        y,
        E,
        m,
        w,
        N
      );
    }
  }, Ge = (c, a, g, y, E, m, w) => {
    const N = a.el = c.el;
    p.NODE_ENV !== "production" && (N.__vnode = a);
    let { patchFlag: v, dynamicChildren: b, dirs: A } = a;
    v |= c.patchFlag & 16;
    const V = c.props || G, P = a.props || G;
    let R;
    if (g && ut(g, !1), (R = P.onVnodeBeforeUpdate) && Le(R, g, a, c), A && at(a, c, g, "beforeUpdate"), g && ut(g, !0), p.NODE_ENV !== "production" && Se && (v = 0, w = !1, b = null), (V.innerHTML && P.innerHTML == null || V.textContent && P.textContent == null) && d(N, ""), b ? (Qe(
      c.dynamicChildren,
      b,
      N,
      g,
      y,
      no(a, E),
      m
    ), p.NODE_ENV !== "production" && En(c, a)) : w || Me(
      c,
      a,
      N,
      null,
      g,
      y,
      no(a, E),
      m,
      !1
    ), v > 0) {
      if (v & 16)
        De(N, V, P, g, E);
      else if (v & 2 && V.class !== P.class && s(N, "class", null, P.class, E), v & 4 && s(N, "style", V.style, P.style, E), v & 8) {
        const B = a.dynamicProps;
        for (let J = 0; J < B.length; J++) {
          const K = B[J], ge = V[K], _e = P[K];
          (_e !== ge || K === "value") && s(N, K, ge, _e, E, g);
        }
      }
      v & 1 && c.children !== a.children && d(N, a.children);
    } else !w && b == null && De(N, V, P, g, E);
    ((R = P.onVnodeUpdated) || A) && ye(() => {
      R && Le(R, g, a, c), A && at(a, c, g, "updated");
    }, y);
  }, Qe = (c, a, g, y, E, m, w) => {
    for (let N = 0; N < a.length; N++) {
      const v = c[N], b = a[N], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(v, b) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? u(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      D(
        v,
        b,
        A,
        null,
        y,
        E,
        m,
        w,
        !0
      );
    }
  }, De = (c, a, g, y, E) => {
    if (a !== g) {
      if (a !== G)
        for (const m in a)
          !Lt(m) && !(m in g) && s(
            c,
            m,
            a[m],
            null,
            E,
            y
          );
      for (const m in g) {
        if (Lt(m)) continue;
        const w = g[m], N = a[m];
        w !== N && m !== "value" && s(c, m, N, w, E, y);
      }
      "value" in g && s(c, "value", a.value, g.value, E);
    }
  }, ln = (c, a, g, y, E, m, w, N, v) => {
    const b = a.el = c ? c.el : l(""), A = a.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: P, slotScopeIds: R } = a;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Se || V & 2048) && (V = 0, v = !1, P = null), R && (N = N ? N.concat(R) : R), c == null ? (o(b, g, y), o(A, g, y), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      g,
      A,
      E,
      m,
      w,
      N,
      v
    )) : V > 0 && V & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === P.length ? (Qe(
      c.dynamicChildren,
      P,
      g,
      E,
      m,
      w,
      N
    ), p.NODE_ENV !== "production" ? En(c, a) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (a.key != null || E && a === E.subTree) && En(
        c,
        a,
        !0
        /* shallow */
      )
    )) : Me(
      c,
      a,
      g,
      A,
      E,
      m,
      w,
      N,
      v
    );
  }, Wo = (c, a, g, y, E, m, w, N, v) => {
    a.slotScopeIds = N, c == null ? a.shapeFlag & 512 ? E.ctx.activate(
      a,
      g,
      y,
      w,
      v
    ) : et(
      a,
      g,
      y,
      E,
      m,
      w,
      v
    ) : he(c, a, v);
  }, et = (c, a, g, y, E, m, w) => {
    const N = c.component = Sc(
      c,
      y,
      E
    );
    if (p.NODE_ENV !== "production" && N.type.__hmrId && sl(N), p.NODE_ENV !== "production" && (hn(c), vt(N, "mount")), Mo(c) && (N.ctx.renderer = $t), p.NODE_ENV !== "production" && vt(N, "init"), Tc(N, !1, w), p.NODE_ENV !== "production" && Ot(N, "init"), p.NODE_ENV !== "production" && Se && (c.el = null), N.asyncDep) {
      if (E && E.registerDep(N, U, w), !c.el) {
        const v = N.subTree = Te(we);
        H(null, v, a, g), c.placeholder = v.el;
      }
    } else
      U(
        N,
        c,
        a,
        g,
        E,
        m,
        w
      );
    p.NODE_ENV !== "production" && (gn(), Ot(N, "mount"));
  }, he = (c, a, g) => {
    const y = a.component = c.component;
    if (Ql(c, a, g))
      if (y.asyncDep && !y.asyncResolved) {
        p.NODE_ENV !== "production" && hn(a), L(y, a, g), p.NODE_ENV !== "production" && gn();
        return;
      } else
        y.next = a, y.update();
    else
      a.el = c.el, y.vnode = a;
  }, U = (c, a, g, y, E, m, w) => {
    const N = () => {
      if (c.isMounted) {
        let { next: V, bu: P, u: R, parent: B, vnode: J } = c;
        {
          const je = Us(c);
          if (je) {
            V && (V.el = J.el, L(c, V, w)), je.asyncDep.then(() => {
              c.isUnmounted || N();
            });
            return;
          }
        }
        let K = V, ge;
        p.NODE_ENV !== "production" && hn(V || c.vnode), ut(c, !1), V ? (V.el = J.el, L(c, V, w)) : V = J, P && It(P), (ge = V.props && V.props.onVnodeBeforeUpdate) && Le(ge, B, V, J), ut(c, !0), p.NODE_ENV !== "production" && vt(c, "render");
        const _e = ci(c);
        p.NODE_ENV !== "production" && Ot(c, "render");
        const Fe = c.subTree;
        c.subTree = _e, p.NODE_ENV !== "production" && vt(c, "patch"), D(
          Fe,
          _e,
          // parent may have changed if it's in a teleport
          u(Fe.el),
          // anchor may have changed if it's in a fragment
          cn(Fe),
          c,
          E,
          m
        ), p.NODE_ENV !== "production" && Ot(c, "patch"), V.el = _e.el, K === null && ec(c, _e.el), R && ye(R, E), (ge = V.props && V.props.onVnodeUpdated) && ye(
          () => Le(ge, B, V, J),
          E
        ), p.NODE_ENV !== "production" && Es(c), p.NODE_ENV !== "production" && gn();
      } else {
        let V;
        const { el: P, props: R } = a, { bm: B, m: J, parent: K, root: ge, type: _e } = c, Fe = Wt(a);
        ut(c, !1), B && It(B), !Fe && (V = R && R.onVnodeBeforeMount) && Le(V, K, a), ut(c, !0);
        {
          ge.ce && // @ts-expect-error _def is private
          ge.ce._def.shadowRoot !== !1 && ge.ce._injectChildStyle(_e), p.NODE_ENV !== "production" && vt(c, "render");
          const je = c.subTree = ci(c);
          p.NODE_ENV !== "production" && Ot(c, "render"), p.NODE_ENV !== "production" && vt(c, "patch"), D(
            null,
            je,
            g,
            y,
            c,
            E,
            m
          ), p.NODE_ENV !== "production" && Ot(c, "patch"), a.el = je.el;
        }
        if (J && ye(J, E), !Fe && (V = R && R.onVnodeMounted)) {
          const je = a;
          ye(
            () => Le(V, K, je),
            E
          );
        }
        (a.shapeFlag & 256 || K && Wt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && ye(c.a, E), c.isMounted = !0, p.NODE_ENV !== "production" && ul(c), a = g = y = null;
      }
    };
    c.scope.on();
    const v = c.effect = new Wi(N);
    c.scope.off();
    const b = c.update = v.run.bind(v), A = c.job = v.runIfDirty.bind(v);
    A.i = c, A.id = c.uid, v.scheduler = () => kn(A), ut(c, !0), p.NODE_ENV !== "production" && (v.onTrack = c.rtc ? (V) => It(c.rtc, V) : void 0, v.onTrigger = c.rtg ? (V) => It(c.rtg, V) : void 0), b();
  }, L = (c, a, g) => {
    a.component = c;
    const y = c.vnode.props;
    c.vnode = a, c.next = null, oc(c, a.props, y, g), pc(c, a.children, g), $e(), ei(c), Ae();
  }, Me = (c, a, g, y, E, m, w, N, v = !1) => {
    const b = c && c.children, A = c ? c.shapeFlag : 0, V = a.children, { patchFlag: P, shapeFlag: R } = a;
    if (P > 0) {
      if (P & 128) {
        Tt(
          b,
          V,
          g,
          y,
          E,
          m,
          w,
          N,
          v
        );
        return;
      } else if (P & 256) {
        Kn(
          b,
          V,
          g,
          y,
          E,
          m,
          w,
          N,
          v
        );
        return;
      }
    }
    R & 8 ? (A & 16 && Pt(b, E, m), V !== b && d(g, V)) : A & 16 ? R & 16 ? Tt(
      b,
      V,
      g,
      y,
      E,
      m,
      w,
      N,
      v
    ) : Pt(b, E, m, !0) : (A & 8 && d(g, ""), R & 16 && pe(
      V,
      g,
      y,
      E,
      m,
      w,
      N,
      v
    ));
  }, Kn = (c, a, g, y, E, m, w, N, v) => {
    c = c || xt, a = a || xt;
    const b = c.length, A = a.length, V = Math.min(b, A);
    let P;
    for (P = 0; P < V; P++) {
      const R = a[P] = v ? it(a[P]) : Ve(a[P]);
      D(
        c[P],
        R,
        g,
        null,
        E,
        m,
        w,
        N,
        v
      );
    }
    b > A ? Pt(
      c,
      E,
      m,
      !0,
      !1,
      V
    ) : pe(
      a,
      g,
      y,
      E,
      m,
      w,
      N,
      v,
      V
    );
  }, Tt = (c, a, g, y, E, m, w, N, v) => {
    let b = 0;
    const A = a.length;
    let V = c.length - 1, P = A - 1;
    for (; b <= V && b <= P; ) {
      const R = c[b], B = a[b] = v ? it(a[b]) : Ve(a[b]);
      if (Ft(R, B))
        D(
          R,
          B,
          g,
          null,
          E,
          m,
          w,
          N,
          v
        );
      else
        break;
      b++;
    }
    for (; b <= V && b <= P; ) {
      const R = c[V], B = a[P] = v ? it(a[P]) : Ve(a[P]);
      if (Ft(R, B))
        D(
          R,
          B,
          g,
          null,
          E,
          m,
          w,
          N,
          v
        );
      else
        break;
      V--, P--;
    }
    if (b > V) {
      if (b <= P) {
        const R = P + 1, B = R < A ? a[R].el : y;
        for (; b <= P; )
          D(
            null,
            a[b] = v ? it(a[b]) : Ve(a[b]),
            g,
            B,
            E,
            m,
            w,
            N,
            v
          ), b++;
      }
    } else if (b > P)
      for (; b <= V; )
        tt(c[b], E, m, !0), b++;
    else {
      const R = b, B = b, J = /* @__PURE__ */ new Map();
      for (b = B; b <= P; b++) {
        const fe = a[b] = v ? it(a[b]) : Ve(a[b]);
        fe.key != null && (p.NODE_ENV !== "production" && J.has(fe.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(fe.key),
          "Make sure keys are unique."
        ), J.set(fe.key, b));
      }
      let K, ge = 0;
      const _e = P - B + 1;
      let Fe = !1, je = 0;
      const At = new Array(_e);
      for (b = 0; b < _e; b++) At[b] = 0;
      for (b = R; b <= V; b++) {
        const fe = c[b];
        if (ge >= _e) {
          tt(fe, E, m, !0);
          continue;
        }
        let He;
        if (fe.key != null)
          He = J.get(fe.key);
        else
          for (K = B; K <= P; K++)
            if (At[K - B] === 0 && Ft(fe, a[K])) {
              He = K;
              break;
            }
        He === void 0 ? tt(fe, E, m, !0) : (At[He - B] = b + 1, He >= je ? je = He : Fe = !0, D(
          fe,
          a[He],
          g,
          null,
          E,
          m,
          w,
          N,
          v
        ), ge++);
      }
      const Go = Fe ? Ec(At) : xt;
      for (K = Go.length - 1, b = _e - 1; b >= 0; b--) {
        const fe = B + b, He = a[fe], qo = a[fe + 1], zo = fe + 1 < A ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          qo.el || Bs(qo)
        ) : y;
        At[b] === 0 ? D(
          null,
          He,
          g,
          zo,
          E,
          m,
          w,
          N,
          v
        ) : Fe && (K < 0 || b !== Go[K] ? yt(He, g, zo, 2) : K--);
      }
    }
  }, yt = (c, a, g, y, E = null) => {
    const { el: m, type: w, transition: N, children: v, shapeFlag: b } = c;
    if (b & 6) {
      yt(c.component.subTree, a, g, y);
      return;
    }
    if (b & 128) {
      c.suspense.move(a, g, y);
      return;
    }
    if (b & 64) {
      w.move(c, a, g, $t);
      return;
    }
    if (w === re) {
      o(m, a, g);
      for (let V = 0; V < v.length; V++)
        yt(v[V], a, g, y);
      o(c.anchor, a, g);
      return;
    }
    if (w === bn) {
      ee(c, a, g);
      return;
    }
    if (y !== 2 && b & 1 && N)
      if (y === 0)
        N.beforeEnter(m), o(m, a, g), ye(() => N.enter(m), E);
      else {
        const { leave: V, delayLeave: P, afterLeave: R } = N, B = () => {
          c.ctx.isUnmounted ? i(m) : o(m, a, g);
        }, J = () => {
          m._isLeaving && m[wl](
            !0
            /* cancelled */
          ), V(m, () => {
            B(), R && R();
          });
        };
        P ? P(m, B, J) : J();
      }
    else
      o(m, a, g);
  }, tt = (c, a, g, y = !1, E = !1) => {
    const {
      type: m,
      props: w,
      ref: N,
      children: v,
      dynamicChildren: b,
      shapeFlag: A,
      patchFlag: V,
      dirs: P,
      cacheIndex: R
    } = c;
    if (V === -2 && (E = !1), N != null && ($e(), Bt(N, null, g, c, !0), Ae()), R != null && (a.renderCache[R] = void 0), A & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const B = A & 1 && P, J = !Wt(c);
    let K;
    if (J && (K = w && w.onVnodeBeforeUnmount) && Le(K, a, c), A & 6)
      sr(c.component, g, y);
    else {
      if (A & 128) {
        c.suspense.unmount(g, y);
        return;
      }
      B && at(c, null, a, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        a,
        g,
        $t,
        y
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== re || V > 0 && V & 64) ? Pt(
        b,
        a,
        g,
        !1,
        !0
      ) : (m === re && V & 384 || !E && A & 16) && Pt(v, a, g), y && Gn(c);
    }
    (J && (K = w && w.onVnodeUnmounted) || B) && ye(() => {
      K && Le(K, a, c), B && at(c, null, a, "unmounted");
    }, g);
  }, Gn = (c) => {
    const { type: a, el: g, anchor: y, transition: E } = c;
    if (a === re) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((w) => {
        w.type === we ? i(w.el) : Gn(w);
      }) : ir(g, y);
      return;
    }
    if (a === bn) {
      T(c);
      return;
    }
    const m = () => {
      i(g), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: w, delayLeave: N } = E, v = () => w(g, m);
      N ? N(c.el, m, v) : v();
    } else
      m();
  }, ir = (c, a) => {
    let g;
    for (; c !== a; )
      g = _(c), i(c), c = g;
    i(a);
  }, sr = (c, a, g) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && rl(c);
    const { bum: y, scope: E, job: m, subTree: w, um: N, m: v, a: b } = c;
    hi(v), hi(b), y && It(y), E.stop(), m && (m.flags |= 8, tt(w, c, a, g)), N && ye(N, a), ye(() => {
      c.isUnmounted = !0;
    }, a), p.NODE_ENV !== "production" && pl(c);
  }, Pt = (c, a, g, y = !1, E = !1, m = 0) => {
    for (let w = m; w < c.length; w++)
      tt(c[w], a, g, y, E);
  }, cn = (c) => {
    if (c.shapeFlag & 6)
      return cn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = _(c.anchor || c.el), g = a && a[vl];
    return g ? _(g) : a;
  };
  let qn = !1;
  const Ko = (c, a, g) => {
    let y;
    c == null ? a._vnode && (tt(a._vnode, null, null, !0), y = a._vnode.component) : D(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      g
    ), a._vnode = c, qn || (qn = !0, ei(y), hs(), qn = !1);
  }, $t = {
    p: D,
    um: tt,
    m: yt,
    r: Gn,
    mt: et,
    mc: pe,
    pc: Me,
    pbc: Qe,
    n: cn,
    o: e
  };
  return {
    render: Ko,
    hydrate: void 0,
    createApp: ql(Ko)
  };
}
function no({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function En(e, t, n = !1) {
  const o = e.children, i = t.children;
  if ($(o) && $(i))
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = it(i[s]), l.el = r.el), !n && l.patchFlag !== -2 && En(r, l)), l.type === on && (l.patchFlag !== -1 ? l.el = r.el : l.__elIndex = s + // take fragment start anchor into account
      (e.type === re ? 1 : 0)), l.type === we && !l.el && (l.el = r.el), p.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Ec(e) {
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
function Us(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Us(t);
}
function hi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Bs(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Bs(t.subTree) : null;
}
const Ws = (e) => e.__isSuspense;
function bc(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : ps(e);
}
const re = /* @__PURE__ */ Symbol.for("v-fgt"), on = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), bn = /* @__PURE__ */ Symbol.for("v-stc"), Kt = [];
let Oe = null;
function te(e = !1) {
  Kt.push(Oe = e ? null : []);
}
function yc() {
  Kt.pop(), Oe = Kt[Kt.length - 1] || null;
}
let Yt = 1;
function gi(e, t = !1) {
  Yt += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Ks(e) {
  return e.dynamicChildren = Yt > 0 ? Oe || xt : null, yc(), Yt > 0 && Oe && Oe.push(e), e;
}
function se(e, t, n, o, i, s) {
  return Ks(
    ze(
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
function Nc(e, t, n, o, i) {
  return Ks(
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
function Wn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = _n.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const vc = (...e) => qs(
  ...e
), Gs = ({ key: e }) => e ?? null, yn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || Q(e) || I(e) ? { i: ve, r: e, k: t, f: !!n } : e : null);
function ze(e, t = null, n = null, o = 0, i = null, s = e === re ? 0 : 1, r = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Gs(t),
    ref: t && yn(t),
    scopeId: ys,
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
  return l ? (ko(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= X(n) ? 8 : 16), p.NODE_ENV !== "production" && f.key !== f.key && O("VNode created with invalid key (NaN). VNode type:", f.type), Yt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Oe.push(f), f;
}
const Te = p.NODE_ENV !== "production" ? vc : qs;
function qs(e, t = null, n = null, o = 0, i = null, s = !1) {
  if ((!e || e === Ml) && (p.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = we), Wn(e)) {
    const l = ct(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ko(l, n), Yt > 0 && !s && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (Qs(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: l, style: f } = t;
    l && !X(l) && (t.class = Gt(l)), q(f) && (wn(f) && !$(f) && (f = Y({}, f)), t.style = ht(f));
  }
  const r = X(e) ? 1 : Ws(e) ? 128 : Ol(e) ? 64 : q(e) ? 4 : I(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && r & 4 && wn(e) && (e = j(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ze(
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
function Oc(e) {
  return e ? wn(e) || Ms(e) ? Y({}, e) : e : null;
}
function ct(e, t, n = !1, o = !1) {
  const { props: i, ref: s, patchFlag: r, children: l, transition: f } = e, h = t ? xc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Gs(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? $(s) ? s.concat(yn(t)) : [s, yn(t)] : yn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && r === -1 && $(l) ? l.map(zs) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== re ? r === -1 ? 16 : r | 16 : r,
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
    d,
    f.clone(d)
  ), d;
}
function zs(e) {
  const t = ct(e);
  return $(e.children) && (t.children = e.children.map(zs)), t;
}
function wc(e = " ", t = 0) {
  return Te(on, null, e, t);
}
function pn(e = "", t = !1) {
  return t ? (te(), Nc(we, null, e)) : Te(we, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Te(we) : $(e) ? Te(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Wn(e) ? it(e) : Te(on, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
}
function ko(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ko(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Ms(t) ? t._ctx = ve : i === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: ve }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [wc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Gt([t.class, o.class]));
      else if (i === "style")
        t.style = ht([t.style, o.style]);
      else if (Qt(i)) {
        const s = t[i], r = o[i];
        r && s !== r && !($(s) && s.includes(r)) && (t[i] = s ? [].concat(s, r) : r);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Le(e, t, n, o = null) {
  Ke(e, t, 7, [
    n,
    o
  ]);
}
const Dc = Ps();
let Vc = 0;
function Sc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || Dc, s = {
    uid: Vc++,
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
    scope: new Or(
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
    propsOptions: js(o, i),
    emitsOptions: $s(o, i),
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
  return p.NODE_ENV !== "production" ? s.ctx = Fl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Jl.bind(null, s), e.ce && e.ce(s), s;
}
let ne = null;
const Js = () => ne || ve;
let An, Eo;
{
  const e = en(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (s) => {
      i.length > 1 ? i.forEach((r) => r(s)) : i[0](s);
    };
  };
  An = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ne = n
  ), Eo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xt = n
  );
}
const sn = (e) => {
  const t = ne;
  return An(e), e.scope.on(), () => {
    e.scope.off(), An(t);
  };
}, _i = () => {
  ne && ne.scope.off(), An(null);
}, Cc = /* @__PURE__ */ Xe("slot,component");
function bo(e, { isNativeTag: t }) {
  (Cc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ys(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Tc(e, t = !1, n = !1) {
  t && Eo(t);
  const { props: o, children: i } = e.vnode, s = Ys(e);
  tc(e, o, s, t), dc(e, i, n || t);
  const r = s ? Pc(e, t) : void 0;
  return t && Eo(!1), r;
}
function Pc(e, t) {
  const n = e.type;
  if (p.NODE_ENV !== "production") {
    if (n.name && bo(n.name, e.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let s = 0; s < i.length; s++)
        bo(i[s], e.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let s = 0; s < i.length; s++)
        Ns(i[s]);
    }
    n.compilerOptions && $c() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ss), p.NODE_ENV !== "production" && jl(e);
  const { setup: o } = n;
  if (o) {
    $e();
    const i = e.setupContext = o.length > 1 ? Ic(e) : null, s = sn(e), r = Ct(
      o,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? We(e.props) : e.props,
        i
      ]
    ), l = Oo(r);
    if (Ae(), s(), (l || e.sp) && !Wt(e) && ws(e), l) {
      if (r.then(_i, _i), t)
        return r.then((f) => {
          mi(e, f, t);
        }).catch((f) => {
          tn(f, e, 0);
        });
      if (e.asyncDep = r, p.NODE_ENV !== "production" && !e.suspense) {
        const f = rn(e, n);
        O(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      mi(e, r, t);
  } else
    Xs(e, t);
}
function mi(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (p.NODE_ENV !== "production" && Wn(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = cs(t), p.NODE_ENV !== "production" && Hl(e)) : p.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Xs(e, n);
}
const $c = () => !0;
function Xs(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ie);
  {
    const i = sn(e);
    $e();
    try {
      kl(e);
    } finally {
      Ae(), i();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === ie && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const Ei = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return Pn(), oe(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function Ac(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return oe(e, "get", "$slots"), t[n];
    }
  });
}
function Ic(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : Q(n) && (o = "ref")), o !== "object" && O(
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
        return o || (o = Ac(e));
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(cs(Wr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Et)
        return Et[n](e);
    },
    has(t, n) {
      return n in t || n in Et;
    }
  })) : e.proxy;
}
const Rc = /(?:^|[-_])\w/g, Mc = (e) => e.replace(Rc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Zs(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rn(e, t, n = !1) {
  let o = Zs(t);
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
  return o ? Mc(o) : n ? "App" : "Anonymous";
}
function Qs(e) {
  return I(e) && "__vccOpts" in e;
}
const Zt = (e, t) => {
  const n = Jr(e, t, Xt);
  if (p.NODE_ENV !== "production") {
    const o = Js();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Fc() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!q(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Q(u)) {
        $e();
        const _ = u.value;
        return Ae(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(_),
          ">"
        ];
      } else {
        if (lt(u))
          return [
            "div",
            {},
            ["span", e, de(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Ie(u) ? " (readonly)" : ""}`
          ];
        if (Ie(u))
          return [
            "div",
            {},
            ["span", e, de(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const _ = [];
    u.type.props && u.props && _.push(r("props", j(u.props))), u.setupState !== G && _.push(r("setup", u.setupState)), u.data !== G && _.push(r("data", j(u.data)));
    const x = f(u, "computed");
    x && _.push(r("computed", x));
    const S = f(u, "inject");
    return S && _.push(r("injected", S)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), _;
  }
  function r(u, _) {
    return _ = Y({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          l(_[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, _ = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : q(u) ? ["object", { object: _ ? j(u) : u }] : ["span", n, String(u)];
  }
  function f(u, _) {
    const x = u.type;
    if (I(x))
      return;
    const S = {};
    for (const D in u.ctx)
      h(x, D, _) && (S[D] = u.ctx[D]);
    return S;
  }
  function h(u, _, x) {
    const S = u[x];
    if ($(S) && S.includes(_) || q(S) && _ in S || u.extends && h(u.extends, _, x) || u.mixins && u.mixins.some((D) => h(D, _, x)))
      return !0;
  }
  function d(u) {
    return de(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const bi = "3.5.26", xe = p.NODE_ENV !== "production" ? O : ie;
var ce = {};
let yo;
const yi = typeof window < "u" && window.trustedTypes;
if (yi)
  try {
    yo = /* @__PURE__ */ yi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ce.NODE_ENV !== "production" && xe(`Error creating trusted types policy: ${e}`);
  }
const er = yo ? (e) => yo.createHTML(e) : (e) => e, jc = "http://www.w3.org/2000/svg", Hc = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, Ni = Je && /* @__PURE__ */ Je.createElement("template"), Lc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Je.createElementNS(jc, e) : t === "mathml" ? Je.createElementNS(Hc, e) : n ? Je.createElement(e, { is: n }) : Je.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
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
      Ni.innerHTML = er(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ni.content;
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
}, kc = /* @__PURE__ */ Symbol("_vtc");
function Uc(e, t, n) {
  const o = e[kc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vi = /* @__PURE__ */ Symbol("_vod"), Bc = /* @__PURE__ */ Symbol("_vsh"), Wc = /* @__PURE__ */ Symbol(ce.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Kc = /(?:^|;)\s*display\s*:/;
function Gc(e, t, n) {
  const o = e.style, i = X(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (X(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && Nn(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && Nn(o, r, "");
    for (const r in n)
      r === "display" && (s = !0), Nn(o, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = o[Wc];
      r && (n += ";" + r), o.cssText = n, s = Kc.test(n);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = s ? o.display : "", e[Bc] && (o.display = "none"));
}
const qc = /[^\\];\s*$/, Oi = /\s*!important$/;
function Nn(e, t, n) {
  if ($(n))
    n.forEach((o) => Nn(e, t, o));
  else if (n == null && (n = ""), ce.NODE_ENV !== "production" && qc.test(n) && xe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = zc(e, t);
    Oi.test(n) ? e.setProperty(
      Ne(o),
      n.replace(Oi, ""),
      "important"
    ) : e[o] = n;
  }
}
const wi = ["Webkit", "Moz", "ms"], oo = {};
function zc(e, t) {
  const n = oo[t];
  if (n)
    return n;
  let o = Ee(t);
  if (o !== "filter" && o in e)
    return oo[t] = o;
  o = Fn(o);
  for (let i = 0; i < wi.length; i++) {
    const s = wi[i] + o;
    if (s in e)
      return oo[t] = s;
  }
  return t;
}
const xi = "http://www.w3.org/1999/xlink";
function Di(e, t, n, o, i, s = vr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xi, t.slice(6, t.length)) : e.setAttributeNS(xi, t, n) : n == null || s && !Li(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : ft(n) ? String(n) : n
  );
}
function Vi(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? er(n) : n);
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
    l === "boolean" ? n = Li(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ce.NODE_ENV !== "production" && !r && xe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(i || t);
}
function Jc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Yc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Si = /* @__PURE__ */ Symbol("_vei");
function Xc(e, t, n, o, i = null) {
  const s = e[Si] || (e[Si] = {}), r = s[t];
  if (o && r)
    r.value = ce.NODE_ENV !== "production" ? Ti(o, t) : o;
  else {
    const [l, f] = Zc(t);
    if (o) {
      const h = s[t] = tf(
        ce.NODE_ENV !== "production" ? Ti(o, t) : o,
        i
      );
      Jc(e, l, h, f);
    } else r && (Yc(e, l, r, f), s[t] = void 0);
  }
}
const Ci = /(?:Once|Passive|Capture)$/;
function Zc(e) {
  let t;
  if (Ci.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ci); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
let io = 0;
const Qc = /* @__PURE__ */ Promise.resolve(), ef = () => io || (Qc.then(() => io = 0), io = Date.now());
function tf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ke(
      nf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = ef(), n;
}
function Ti(e, t) {
  return I(e) || $(e) ? e : (xe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ie);
}
function nf(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, of = (e, t, n, o, i, s) => {
  const r = i === "svg";
  t === "class" ? Uc(e, o, r) : t === "style" ? Gc(e, n, o) : Qt(t) ? vn(t) || Xc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : sf(e, t, o, r)) ? (Vi(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Di(e, t, o, r, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !X(o)) ? Vi(e, Ee(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Di(e, t, o, r));
};
function sf(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pi(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Pi(t) && X(n) ? !1 : t in e;
}
const $i = {};
// @__NO_SIDE_EFFECTS__
function rf(e, t, n) {
  let o = /* @__PURE__ */ Ro(e, t);
  Rn(o) && (o = Y({}, o, t));
  class i extends Bo {
    constructor(r) {
      super(o, r, n);
    }
  }
  return i.def = o, i;
}
const lf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Bo extends lf {
  constructor(t, n = {}, o = Ri) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Ri ? this._root = this.shadowRoot : (ce.NODE_ENV !== "production" && this.shadowRoot && xe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      Y({}, t.shadowRootOptions, {
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
      if (s && !$(s))
        for (const f in s) {
          const h = s[f];
          (h === Number || h && h.type === Number) && (f in this._props && (this._props[f] = Jo(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ee(f)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(r) : ce.NODE_ENV !== "production" && r && xe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ce.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        k(this, o) ? ce.NODE_ENV !== "production" && xe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ls(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = $(n) ? n : Object.keys(n || {});
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
    let o = n ? this.getAttribute(t) : $i;
    const i = Ee(t);
    n && this._numberProps && this._numberProps[i] && (o = Jo(o)), this._setProp(i, o, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === $i ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(Ne(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ne(t), n + "") : n || this.removeAttribute(Ne(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), uf(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Te(this._def, Y(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ce.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const i = (s, r) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            Rn(r[0]) ? Y({ detail: r }, r[0]) : { detail: r }
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
      if (o && s.setAttribute("nonce", o), s.textContent = t[i], this.shadowRoot.prepend(s), ce.NODE_ENV !== "production")
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
            const h = n + "-s", d = document.createTreeWalker(f, 1);
            f.setAttribute(h, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(h, "");
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
    if (ce.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const cf = ["ctrl", "shift", "alt", "meta"], ff = {
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
  exact: (e, t) => cf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ai = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = ((i, ...s) => {
    for (let r = 0; r < t.length; r++) {
      const l = ff[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, af = /* @__PURE__ */ Y({ patchProp: of }, Lc);
let Ii;
function tr() {
  return Ii || (Ii = gc(af));
}
const uf = ((...e) => {
  tr().render(...e);
}), Ri = ((...e) => {
  const t = tr().createApp(...e);
  ce.NODE_ENV !== "production" && (pf(t), hf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = gf(o);
    if (!i) return;
    const s = t._component;
    !I(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, df(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function df(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Er(t) || br(t) || yr(t),
    writable: !1
  });
}
function hf(e) {
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
function gf(e) {
  if (X(e)) {
    const t = document.querySelector(e);
    return ce.NODE_ENV !== "production" && !t && xe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ce.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var _f = {};
function mf() {
  Fc();
}
_f.NODE_ENV !== "production" && mf();
const Ef = {
  class: "viewer-area",
  ref: "viewerRef"
}, bf = {
  key: 0,
  class: "empty-state"
}, yf = {
  key: 1,
  class: "canvas-container"
}, Nf = ["src"], vf = {
  class: "overlay-layer",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none",
  style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }
}, Of = ["id", "cx", "cy", "r"], wf = ["stop-color", "stop-opacity"], xf = ["stop-color"], Df = ["points", "fill", "filter"], Vf = ["points", "fill", "fill-opacity", "data-entity-id", "data-entity-type", "style", "onClick"], Sf = ["title", "onClick"], Cf = /* @__PURE__ */ Ro({
  __name: "InteractiveFloorplan",
  props: {
    config: {},
    entityStates: {}
  },
  emits: ["entity-click", "entity-long-press"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = Zt(() => !!(n.config.imageBase64 || n.config.imageUrl)), s = Zt(() => n.config.imageUrl || n.config.imageBase64), r = rs(null);
    Ds(() => {
      const S = r.value;
      S && S.addEventListener("click", (D) => {
        const H = D.target.closest("[data-entity-id]");
        if (!H) return;
        const M = H.getAttribute("data-entity-id"), F = H.getAttribute("data-entity-type");
        M && F && (D.stopPropagation(), o("entity-click", M, F));
      });
    });
    function l(S, D) {
    }
    function f(S) {
      const D = n.entityStates[S.entityId] || { state: "off" }, { style: C } = S;
      if (S.type === "camera") {
        let ee;
        const T = C.colors;
        return D.state === "recording" ? ee = T.recordingColor || "#ef4444" : D.state === "streaming" ? ee = T.streamingColor || "#3b82f6" : ee = T.idleColor || "#6b7280", {
          color: ee,
          opacity: C.onOpacity
        };
      }
      const H = C.colors;
      // Gebruik shouldLightUp als centrale check: werkt voor light, switch, media_player etc.
      if (!D.shouldLightUp)
        return { color: H.offColor, opacity: 0 };
      let M = D.color || H.onColor, F = C.onOpacity;
      return D.brightness !== void 0 && (F = D.brightness / 255 * C.onOpacity), { color: M, opacity: F };
    }
    function h(S) {
      const { style: D, x: C, y: H } = S;
      const W = Math.max(D.width, 6);
      const V = Math.max(D.height, 6);
      return {
        left: `${C}%`,
        top: `${H}%`,
        width: `${W}%`,
        height: `${V}%`,
        transform: `translate(-50%, -50%) rotate(${D.rotation}deg)`,
        position: "absolute",
        zIndex: 1
      };
    }
    function d(S) {
      const { shape: H } = S;
      return {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        opacity: 0,
        borderRadius: H === "circle" ? "50%" : "4px",
        cursor: "pointer",
        boxShadow: "none",
        transition: "none"
      };
    }
    function u(S) {
      const { offsetX: D, offsetY: C, color: H } = S.labelConfig || {};
      return {
        transform: `translate(-50%, -50%) translate(${D || 0}%, ${C || 0}%)`,
        color: H || "#ffffff",
        pointerEvents: "auto",
        cursor: "pointer"
      };
    }
    function _(S) {
      return S ? S.map((D) => `${D.x} ${D.y}`).join(",") : "";
    }
    function x(S) {
      const D = n.entityStates[S.entityId];
      return S.type === "camera" && D?.state === "recording";
    }
    return (S, D) => (te(), se("div", Ef, [
      i.value ? (te(), se("div", yf, [
        ze("div", {
          class: "image-wrapper",
          ref_key: "imageWrapperRef",
          ref: r
        }, [
          ze("img", {
            src: s.value,
            alt: "Floorplan Base",
            draggable: "false"
          }, null, 8, Nf),
          (te(), se("svg", vf, [
            ze("defs", null, [
              (te(!0), se(re, null, dn(n.config.entities, (C) => (te(), se("radialGradient", {
                key: "grad-" + C.id,
                id: "grad-" + C.id,
                gradientUnits: "userSpaceOnUse",
                cx: C.x,
                cy: C.y,
                r: C.style.gradientRadius
              }, [
                ze("stop", {
                  offset: "0%",
                  "stop-color": f(C).color,
                  "stop-opacity": Math.max(0.3, f(C).opacity)
                }, null, 8, wf),
                ze("stop", {
                  offset: "100%",
                  "stop-color": f(C).color,
                  "stop-opacity": "0"
                }, null, 8, xf)
              ], 8, Of))), 128)),
              (te(!0), se(re, null, dn(n.config.entities, (C) => {
                const bv = C.style && C.style.edgeBlur > 0 ? C.style.edgeBlur : 0;
                return bv > 0 ? (te(), se("filter", {
                  key: "blur-" + C.id, id: "blur-" + C.id,
                  x: "-30%", y: "-30%", width: "160%", height: "160%",
                  filterUnits: "objectBoundingBox"
                }, [ze("feGaussianBlur", { in: "SourceGraphic", stdDeviation: String(bv) })])) : pn("", !0);
              }), 128))
            ]),
            (te(!0), se(re, null, dn(n.config.entities, (C) => (te(), se(re, {
              key: "poly-" + C.id
            }, [
              C.points && C.points.length > 0 ? (te(), se("polygon", {
                key: 0,
                points: _(C.points),
                fill: n.entityStates[C.entityId]?.shouldLightUp ? `url(#grad-${C.id})` : "transparent",
                stroke: "none",
                filter: (C.style && C.style.edgeBlur > 0) ? ("url(#blur-" + C.id + ")") : void 0,
                style: { "pointer-events": "none", transition: "fill-opacity 0.3s ease" }
              }, null, 8, Df)) : pn("", !0)
            ], 64))), 128)),
            (te(!0), se(re, null, dn(n.config.entities, (C) => (te(), se(re, {
              key: "shape-" + C.id
            }, [
              C.shapePoints && C.shapePoints.length > 0 ? (te(), se("polygon", {
                key: 0,
                points: _(C.shapePoints),
                fill: "transparent",
                "fill-opacity": 0,
                "data-entity-id": C.entityId,
                "data-entity-type": C.type,
                class: Gt({ "camera-recording": x(C), clickable: !0 }),
                style: ht({
                  cursor: "pointer",
                  "pointer-events": "all",
                  filter: "none",
                  transition: "none"
                }),
                onClick: (H) => { H.stopPropagation(); o("entity-click", C.entityId, C.type); }
              }, null, 14, Vf)) : pn("", !0)
            ], 64))), 128))
          ])),
          (te(!0), se(re, null, dn(n.config.entities, (C) => (te(), se(re, {
            key: C.id
          }, [
            !C.shapePoints || C.shapePoints.length === 0 ? (te(), se("div", {
              key: 0,
              class: "interactive-entity",
              style: ht(h(C)),
              title: C.label,
              onClick: (H) => { H.stopPropagation(); o("entity-click", C.entityId, C.type); }
            }, [
              ze("div", {
                class: Gt(["entity-shape", { "camera-recording": x(C) }]),
                style: ht(d(C))
              }, null, 6),
              C.labelConfig.show ? (te(), se("div", {
                key: 0,
                class: "entity-label",
                style: ht(u(C))
              }, Ui(C.label), 5)) : pn("", !0)
            ], 12, Sf)) : pn("", !0)
          ], 64))), 128))
        ], 512),
        n.config.overlayImages && n.config.overlayImages.length > 0
          ? (te(!0), se(re, null, dn(n.config.overlayImages, (ov) => (te(), se("img", {
              key: ov.id,
              src: ov.url,
              class: "fp-overlay-img",
              style: { position: "absolute", left: ov.x + "%", top: ov.y + "%", width: ov.width + "%", height: ov.height + "%", zIndex: ov.zIndex || 10 }
            }, null, 8, ["src", "style"]))), 128))
          : pn("", !0)
      ])) : (te(), se("div", bf, [...D[0] || (D[0] = [
        ze("p", null, "No floorplan loaded. Go to Editor to set up.", -1)
      ])]))
    ], 512));
  }
}), nr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Tf = /* @__PURE__ */ nr(Cf, [["__scopeId", "data-v-dffc8e25"]]), Pf = {
  key: 1,
  class: "error"
};
// ===== GLOBAL HASS BRIDGE =====
// Simpele globale reactive ref als brug tussen Custom Element en Vue setup.
// Dit omzeilt het WeakMap/onMounted timing-probleem volledig.
const _globalHassRef = rs(null);
let _globalHassCounter = rs(0);

const $f = /* @__PURE__ */ Ro({
  __name: "HaFloorplanCard.ce",
  props: {
    config: { type: [Object, String] },
    hass: { type: null }
  },
  setup(e) {
    const t = e, n = rs(null);
    const o = Zt(() => {
      if (!t.config) return null;
      let f = typeof t.config == "string" ? (() => { try { return JSON.parse(t.config); } catch(h) { console.error("Failed to parse floorplan config", h); return null; } })() : t.config;
      return f && f.imageBase64 ? { ...f, imageBase64: f.imageBase64.replace(/\s/g, "") } : f;
    });
    // entityStates computed: leest _globalHassRef en _globalHassCounter als reactive dependencies
    const i = Zt(() => {
      const f = {};
      // Lees _globalHassCounter.value om Vue te forceren deze computed te hertriggeren
      const _ver = _globalHassCounter.value;
      const currentHass = _globalHassRef.value;
      if (!o.value || !currentHass) return f;
      o.value.entities?.forEach((h) => {
        const d = currentHass.states?.[h.entityId];
        if (d) {
          let u = d.state, _, x;
          if (h.type === "light") {
            u == "on" && (d.attributes.rgb_color && (_ = `rgb(${d.attributes.rgb_color.join(",")})`), d.attributes.brightness !== void 0 && (x = d.attributes.brightness));
            // Detecteer het echte domain op basis van entityId voor mismatches (bijv. switch of media_player als type light)
            const _domain = h.entityId.split(".")[0];
            const _shouldLightUp = _domain === "media_player"
              ? !["off", "unavailable", "unknown", "idle"].includes(u)
              : _domain === "switch" ? u === "on"
              : u === "on";
            f[h.entityId] = { state: u, color: _, brightness: x, shouldLightUp: _shouldLightUp };
          } else if (h.type === "media_player") {
            f[h.entityId] = { state: u, shouldLightUp: !["off", "unavailable", "unknown"].includes(u) };
          } else if (h.type === "camera") {
            f[h.entityId] = { state: u, shouldLightUp: ["on", "recording", "streaming"].includes(u) };
          } else if (h.type === "switch") {
            f[h.entityId] = { state: u, shouldLightUp: u === "on" };
          } else {
            f[h.entityId] = { state: u, shouldLightUp: u === "on" };
          }
        } else {
          f[h.entityId] = { state: "off", shouldLightUp: false };
        }
      });
      return f;
    });
    function s(f, h, d) {
      const hassObj = _globalHassRef.value;
      if (hassObj?.callService) {
        try { hassObj.callService(f, h, {}, { entity_id: d.entity_id }); return; } catch(e1) {}
        try { hassObj.callService(f, h, d); return; } catch(e2) { console.error("[FloorplanCard] callService failed:", e2); }
      }
    }
    function r(f, h) {
      // Gebruik het werkelijke entity domain (voor de punt) als service domain,
      // niet het configuratie-type — voorkomt bijv. light.toggle op switch.* entities
      const _domain = f.includes(".") ? f.split(".")[0] : h;
      if (["light", "switch", "media_player"].includes(_domain)) s(_domain, "toggle", { entity_id: f });
      else if (h === "camera") { const d = i.value[f]?.state == "idle" ? "turn_on" : "turn_off"; s("homeassistant", d, { entity_id: f }); }
      else s("homeassistant", "toggle", { entity_id: f });
    }
    function l(f) {
      n.value?.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: f }, bubbles: !0, composed: !0 }));
    }
    return console.info("%c HA Floorplan Card %c v1.2.0-fixed ", "background: #333; color: #fff", "background: #0ea5e9; color: #fff"), (f, h) => o.value ? (te(), se("ha-card", {
      key: 0, ref_key: "cardRef", ref: n, class: "ha-card-wrapper"
    }, [
      Te(Tf, {
        config: o.value,
        "entity-states": i.value,
        onEntityClick: (f, h) => { r(f, h); },
        onEntityLongPress: l
      }, null, 8, ["config", "entity-states"])
    ], 512)) : (te(), se("div", Pf, " No Configuration Loaded "));
  }
}), Af = ':host{display:block!important;width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:border-box}ha-card{display:block!important;width:100%!important;margin:0!important;padding:0!important;background:none!important;box-shadow:none!important;border:none!important}.ha-card-wrapper{width:100%!important;display:block!important;padding:0!important;margin:0!important}.viewer-area{flex:1;background-color:transparent;display:block;position:relative;padding:0!important;margin:0!important;height:auto;width:100%!important}.empty-state{color:var(--color-text-secondary);font-size:1.2rem;padding:20px;text-align:center}.canvas-container{border-radius:0;overflow:hidden;position:relative;max-width:100%;max-height:100%}.image-wrapper{position:relative;display:block;width:100%;line-height:0;container-type:inline-size}.image-wrapper>img:first-child{width:100%;height:auto;display:block}.fp-overlay-img{position:absolute;pointer-events:none;object-fit:contain}.entity-label{position:absolute;top:50%;left:50%;background:#000000b3;color:#fff;padding:2px 4px;font-size:14px;font-size:1.5cqw;border-radius:4px;white-space:nowrap;pointer-events:none;line-height:1.2}.overlay-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.overlay-layer polygon{vector-effect:non-scaling-stroke}.overlay-layer polygon[style*="pointer-events: all"],.overlay-layer polygon.clickable{pointer-events:all!important}.interactive-entity{z-index:10}.error{padding:20px;color:red}@keyframes camera-recording-blink{0%,to{opacity:1}50%{opacity:.3}}.camera-recording{animation:camera-recording-blink 2s ease-in-out infinite}', If = /* @__PURE__*/ nr($f, [['styles', [Af]]]), No = /* @__PURE__ */ rf(If);
class or extends No {
  constructor() {
    super();
    // CRUCIAAL: Definieer de 'hass' property setter HIER, zodat wanneer
    // Vue CE's _resolveProps later Object.defineProperty aanroept,
    // we alsnog onze eigen hook kunnen draaien.
    // We slaan Vue's originele setter op en wrappen die.
    this._setupHassInterceptor();
  }
  _setupHassInterceptor() {
    const self = this;
    // Wacht tot Vue CE klaar is met _resolveProps door het in een microtask te doen
    // Maar HA kan hass al zetten voordat Vue klaar is, dus we moeten BEIDE gevallen afhandelen.
    // Oplossing: gebruik een Proxy-achtige aanpak met een polling check + direct set
    let _hassValue = null;
    
    // Bewaar eventuele bestaande descriptor (van Vue CE)
    const installInterceptor = () => {
      const existingDescriptor = Object.getOwnPropertyDescriptor(self, 'hass');
      const protoDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(self), 'hass');
      
      Object.defineProperty(self, 'hass', {
        get() {
          // Probeer Vue's getter als die bestaat
          if (existingDescriptor?.get) return existingDescriptor.get.call(self);
          return _hassValue;
        },
        set(val) {
          _hassValue = val;
          // Update de globale reactive ref voor Vue computed
          _globalHassRef.value = val;
          _globalHassCounter.value++;
          // Roep Vue's _setProp aan zodat Vue ook weet dat hass veranderd is
          try { self._setProp('hass', val, true, true); } catch(e) {}
        },
        configurable: true,
        enumerable: true
      });
    };
    
    // Installeer meteen
    installInterceptor();
    
    // EN herinstalleer na een microtask (nadat Vue CE _resolveProps heeft gedraaid)
    Promise.resolve().then(() => {
      installInterceptor();
      // En nog een keer na een korte delay voor als Vue CE later draait
      setTimeout(() => installInterceptor(), 50);
      setTimeout(() => installInterceptor(), 200);
    });
  }
  setConfig(t) {
    const cfg = t.floorplan_config || t.config || t;
    this.config = cfg;
  }
  // setHass als fallback methode (voor het geval HA het als methode aanroept)
  setHass(t) {
    this.hass = t;
  }
  getCardSize() {
    return 4;
  }
}
customElements.define("ha-floorplan-card", or);

console.info(
  "%c HA FLOORPLAN CARD %c v0.0.1 ",
  "color: white; background: #202020; font-weight: 700;",
  "color: #202020; background: #91eb61; font-weight: 700;"
);