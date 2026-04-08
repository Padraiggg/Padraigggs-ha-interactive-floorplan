var zl = {};
// @__NO_SIDE_EFFECTS__
function Pe(A) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const t of A.split(",")) e[t] = 1;
  return (t) => t in e;
}
const aA = zl.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ut = zl.NODE_ENV !== "production" ? Object.freeze([]) : [], vA = () => {
}, Zl = () => !1, wo = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // uppercase letter
(A.charCodeAt(2) > 122 || A.charCodeAt(2) < 97), rn = (A) => A.startsWith("onUpdate:"), CA = Object.assign, Hi = (A, e) => {
  const t = A.indexOf(e);
  t > -1 && A.splice(t, 1);
}, ec = Object.prototype.hasOwnProperty, oA = (A, e) => ec.call(A, e), G = Array.isArray, ut = (A) => Uo(A) === "[object Map]", Yt = (A) => Uo(A) === "[object Set]", wr = (A) => Uo(A) === "[object Date]", q = (A) => typeof A == "function", EA = (A) => typeof A == "string", Fe = (A) => typeof A == "symbol", lA = (A) => A !== null && typeof A == "object", Pi = (A) => (lA(A) || q(A)) && q(A.then) && q(A.catch), $l = Object.prototype.toString, Uo = (A) => $l.call(A), Yi = (A) => Uo(A).slice(8, -1), yn = (A) => Uo(A) === "[object Object]", vn = (A) => EA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, so = /* @__PURE__ */ Pe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tc = /* @__PURE__ */ Pe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), bn = (A) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((t) => e[t] || (e[t] = A(t)));
}, oc = /-\w/g, ZA = bn(
  (A) => A.replace(oc, (e) => e.slice(1).toUpperCase())
), nc = /\B([A-Z])/g, ee = bn(
  (A) => A.replace(nc, "-$1").toLowerCase()
), Jn = bn((A) => A.charAt(0).toUpperCase() + A.slice(1)), it = bn(
  (A) => A ? `on${Jn(A)}` : ""
), Ze = (A, e) => !Object.is(A, e), yt = (A, ...e) => {
  for (let t = 0; t < A.length; t++)
    A[t](...e);
}, sn = (A, e, t, o = !1) => {
  Object.defineProperty(A, e, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: t
  });
}, xn = (A) => {
  const e = parseFloat(A);
  return isNaN(e) ? A : e;
}, Ur = (A) => {
  const e = EA(A) ? Number(A) : NaN;
  return isNaN(e) ? A : e;
};
let Fr;
const Fo = () => Fr || (Fr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xe(A) {
  if (G(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++) {
      const o = A[t], n = EA(o) ? lc(o) : xe(o);
      if (n)
        for (const i in n)
          e[i] = n[i];
    }
    return e;
  } else if (EA(A) || lA(A))
    return A;
}
const ic = /;(?![^(]*\))/g, rc = /:([^]+)/, sc = /\/\*[^]*?\*\//g;
function lc(A) {
  const e = {};
  return A.replace(sc, "").split(ic).forEach((t) => {
    if (t) {
      const o = t.split(rc);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function Ot(A) {
  let e = "";
  if (EA(A))
    e = A;
  else if (G(A))
    for (let t = 0; t < A.length; t++) {
      const o = Ot(A[t]);
      o && (e += o + " ");
    }
  else if (lA(A))
    for (const t in A)
      A[t] && (e += t + " ");
  return e.trim();
}
const uc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ac = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Sc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", cc = /* @__PURE__ */ Pe(uc), kc = /* @__PURE__ */ Pe(ac), fc = /* @__PURE__ */ Pe(Sc), gc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dc = /* @__PURE__ */ Pe(gc);
function Au(A) {
  return !!A || A === "";
}
function pc(A, e) {
  if (A.length !== e.length) return !1;
  let t = !0;
  for (let o = 0; t && o < A.length; o++)
    t = Ko(A[o], e[o]);
  return t;
}
function Ko(A, e) {
  if (A === e) return !0;
  let t = wr(A), o = wr(e);
  if (t || o)
    return t && o ? A.getTime() === e.getTime() : !1;
  if (t = Fe(A), o = Fe(e), t || o)
    return A === e;
  if (t = G(A), o = G(e), t || o)
    return t && o ? pc(A, e) : !1;
  if (t = lA(A), o = lA(e), t || o) {
    if (!t || !o)
      return !1;
    const n = Object.keys(A).length, i = Object.keys(e).length;
    if (n !== i)
      return !1;
    for (const r in A) {
      const s = A.hasOwnProperty(r), l = e.hasOwnProperty(r);
      if (s && !l || !s && l || !Ko(A[r], e[r]))
        return !1;
    }
  }
  return String(A) === String(e);
}
function ji(A, e) {
  return A.findIndex((t) => Ko(t, e));
}
const eu = (A) => !!(A && A.__v_isRef === !0), te = (A) => EA(A) ? A : A == null ? "" : G(A) || lA(A) && (A.toString === $l || !q(A.toString)) ? eu(A) ? te(A.value) : JSON.stringify(A, tu, 2) : String(A), tu = (A, e) => eu(e) ? tu(A, e.value) : ut(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (t, [o, n], i) => (t[Gn(o, i) + " =>"] = n, t),
    {}
  )
} : Yt(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((t) => Gn(t))
} : Fe(e) ? Gn(e) : lA(e) && !G(e) && !yn(e) ? String(e) : e, Gn = (A, e = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fe(A) ? `Symbol(${(t = A.description) != null ? t : e})` : A
  );
};
var SA = {};
function se(A, ...e) {
  console.warn(`[Vue warn] ${A}`, ...e);
}
let NA;
class ou {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = NA, !e && NA && (this.index = (NA.scopes || (NA.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++)
          this.scopes[e].pause();
      for (e = 0, t = this.effects.length; e < t; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, t;
      if (this.scopes)
        for (e = 0, t = this.scopes.length; e < t; e++)
          this.scopes[e].resume();
      for (e = 0, t = this.effects.length; e < t; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = NA;
      try {
        return NA = this, e();
      } finally {
        NA = t;
      }
    } else SA.NODE_ENV !== "production" && se("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = NA, NA = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (NA = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let t, o;
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].stop();
      for (this.effects.length = 0, t = 0, o = this.cleanups.length; t < o; t++)
        this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function nu(A) {
  return new ou(A);
}
function iu() {
  return NA;
}
function Cc(A, e = !1) {
  NA ? NA.cleanups.push(A) : SA.NODE_ENV !== "production" && !e && se(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let uA;
const Wn = /* @__PURE__ */ new WeakSet();
class ru {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, NA && NA.active && NA.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Wn.has(this) && (Wn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Kr(this), uu(this);
    const e = uA, t = ke;
    uA = this, ke = !0;
    try {
      return this.fn();
    } finally {
      SA.NODE_ENV !== "production" && uA !== this && se(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), au(this), uA = e, ke = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        _i(e);
      this.deps = this.depsTail = void 0, Kr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Wn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ci(this) && this.run();
  }
  get dirty() {
    return ci(this);
  }
}
let su = 0, lo, uo;
function lu(A, e = !1) {
  if (A.flags |= 8, e) {
    A.next = uo, uo = A;
    return;
  }
  A.next = lo, lo = A;
}
function Gi() {
  su++;
}
function Wi() {
  if (--su > 0)
    return;
  if (uo) {
    let e = uo;
    for (uo = void 0; e; ) {
      const t = e.next;
      e.next = void 0, e.flags &= -9, e = t;
    }
  }
  let A;
  for (; lo; ) {
    let e = lo;
    for (lo = void 0; e; ) {
      const t = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (o) {
          A || (A = o);
        }
      e = t;
    }
  }
  if (A) throw A;
}
function uu(A) {
  for (let e = A.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function au(A) {
  let e, t = A.depsTail, o = t;
  for (; o; ) {
    const n = o.prevDep;
    o.version === -1 ? (o === t && (t = n), _i(o), Ec(o)) : e = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = n;
  }
  A.deps = e, A.depsTail = t;
}
function ci(A) {
  for (let e = A.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Su(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!A._dirty;
}
function Su(A) {
  if (A.flags & 4 && !(A.flags & 16) || (A.flags &= -17, A.globalVersion === go) || (A.globalVersion = go, !A.isSSR && A.flags & 128 && (!A.deps && !A._dirty || !ci(A))))
    return;
  A.flags |= 2;
  const e = A.dep, t = uA, o = ke;
  uA = A, ke = !0;
  try {
    uu(A);
    const n = A.fn(A._value);
    (e.version === 0 || Ze(n, A._value)) && (A.flags |= 128, A._value = n, e.version++);
  } catch (n) {
    throw e.version++, n;
  } finally {
    uA = t, ke = o, au(A), A.flags &= -3;
  }
}
function _i(A, e = !1) {
  const { dep: t, prevSub: o, nextSub: n } = A;
  if (o && (o.nextSub = n, A.prevSub = void 0), n && (n.prevSub = o, A.nextSub = void 0), SA.NODE_ENV !== "production" && t.subsHead === A && (t.subsHead = n), t.subs === A && (t.subs = o, !o && t.computed)) {
    t.computed.flags &= -5;
    for (let i = t.computed.deps; i; i = i.nextDep)
      _i(i, !0);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function Ec(A) {
  const { prevDep: e, nextDep: t } = A;
  e && (e.nextDep = t, A.prevDep = void 0), t && (t.prevDep = e, A.nextDep = void 0);
}
let ke = !0;
const cu = [];
function ge() {
  cu.push(ke), ke = !1;
}
function de() {
  const A = cu.pop();
  ke = A === void 0 ? !0 : A;
}
function Kr(A) {
  const { cleanup: e } = A;
  if (A.cleanup = void 0, e) {
    const t = uA;
    uA = void 0;
    try {
      e();
    } finally {
      uA = t;
    }
  }
}
let go = 0;
class hc {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, SA.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!uA || !ke || uA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== uA)
      t = this.activeLink = new hc(uA, this), uA.deps ? (t.prevDep = uA.depsTail, uA.depsTail.nextDep = t, uA.depsTail = t) : uA.deps = uA.depsTail = t, ku(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const o = t.nextDep;
      o.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = o), t.prevDep = uA.depsTail, t.nextDep = void 0, uA.depsTail.nextDep = t, uA.depsTail = t, uA.deps === t && (uA.deps = o);
    }
    return SA.NODE_ENV !== "production" && uA.onTrack && uA.onTrack(
      CA(
        {
          effect: uA
        },
        e
      )
    ), t;
  }
  trigger(e) {
    this.version++, go++, this.notify(e);
  }
  notify(e) {
    Gi();
    try {
      if (SA.NODE_ENV !== "production")
        for (let t = this.subsHead; t; t = t.nextSub)
          t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(
            CA(
              {
                effect: t.sub
              },
              e
            )
          );
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Wi();
    }
  }
}
function ku(A) {
  if (A.dep.sc++, A.sub.flags & 4) {
    const e = A.dep.computed;
    if (e && !A.dep.subs) {
      e.flags |= 20;
      for (let o = e.deps; o; o = o.nextDep)
        ku(o);
    }
    const t = A.dep.subs;
    t !== A && (A.prevSub = t, t && (t.nextSub = A)), SA.NODE_ENV !== "production" && A.dep.subsHead === void 0 && (A.dep.subsHead = A), A.dep.subs = A;
  }
}
const ln = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ Symbol(
  SA.NODE_ENV !== "production" ? "Object iterate" : ""
), ki = /* @__PURE__ */ Symbol(
  SA.NODE_ENV !== "production" ? "Map keys iterate" : ""
), po = /* @__PURE__ */ Symbol(
  SA.NODE_ENV !== "production" ? "Array iterate" : ""
);
function yA(A, e, t) {
  if (ke && uA) {
    let o = ln.get(A);
    o || ln.set(A, o = /* @__PURE__ */ new Map());
    let n = o.get(t);
    n || (o.set(t, n = new Xi()), n.map = o, n.key = t), SA.NODE_ENV !== "production" ? n.track({
      target: A,
      type: e,
      key: t
    }) : n.track();
  }
}
function ve(A, e, t, o, n, i) {
  const r = ln.get(A);
  if (!r) {
    go++;
    return;
  }
  const s = (l) => {
    l && (SA.NODE_ENV !== "production" ? l.trigger({
      target: A,
      type: e,
      key: t,
      newValue: o,
      oldValue: n,
      oldTarget: i
    }) : l.trigger());
  };
  if (Gi(), e === "clear")
    r.forEach(s);
  else {
    const l = G(A), a = l && vn(t);
    if (l && t === "length") {
      const S = Number(o);
      r.forEach((u, f) => {
        (f === "length" || f === po || !Fe(f) && f >= S) && s(u);
      });
    } else
      switch ((t !== void 0 || r.has(void 0)) && s(r.get(t)), a && s(r.get(po)), e) {
        case "add":
          l ? a && s(r.get("length")) : (s(r.get(at)), ut(A) && s(r.get(ki)));
          break;
        case "delete":
          l || (s(r.get(at)), ut(A) && s(r.get(ki)));
          break;
        case "set":
          ut(A) && s(r.get(at));
          break;
      }
  }
  Wi();
}
function Qc(A, e) {
  const t = ln.get(A);
  return t && t.get(e);
}
function ht(A) {
  const e = Z(A);
  return e === A ? e : (yA(e, "iterate", po), MA(A) ? e : e.map(Ce));
}
function Dn(A) {
  return yA(A = Z(A), "iterate", po), A;
}
function je(A, e) {
  return pe(A) ? fe(A) ? Tt(Ce(e)) : Tt(e) : Ce(e);
}
const Bc = {
  __proto__: null,
  [Symbol.iterator]() {
    return _n(this, Symbol.iterator, (A) => je(this, A));
  },
  concat(...A) {
    return ht(this).concat(
      ...A.map((e) => G(e) ? ht(e) : e)
    );
  },
  entries() {
    return _n(this, "entries", (A) => (A[1] = je(this, A[1]), A));
  },
  every(A, e) {
    return Oe(this, "every", A, e, void 0, arguments);
  },
  filter(A, e) {
    return Oe(
      this,
      "filter",
      A,
      e,
      (t) => t.map((o) => je(this, o)),
      arguments
    );
  },
  find(A, e) {
    return Oe(
      this,
      "find",
      A,
      e,
      (t) => je(this, t),
      arguments
    );
  },
  findIndex(A, e) {
    return Oe(this, "findIndex", A, e, void 0, arguments);
  },
  findLast(A, e) {
    return Oe(
      this,
      "findLast",
      A,
      e,
      (t) => je(this, t),
      arguments
    );
  },
  findLastIndex(A, e) {
    return Oe(this, "findLastIndex", A, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(A, e) {
    return Oe(this, "forEach", A, e, void 0, arguments);
  },
  includes(...A) {
    return Xn(this, "includes", A);
  },
  indexOf(...A) {
    return Xn(this, "indexOf", A);
  },
  join(A) {
    return ht(this).join(A);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...A) {
    return Xn(this, "lastIndexOf", A);
  },
  map(A, e) {
    return Oe(this, "map", A, e, void 0, arguments);
  },
  pop() {
    return $t(this, "pop");
  },
  push(...A) {
    return $t(this, "push", A);
  },
  reduce(A, ...e) {
    return Or(this, "reduce", A, e);
  },
  reduceRight(A, ...e) {
    return Or(this, "reduceRight", A, e);
  },
  shift() {
    return $t(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(A, e) {
    return Oe(this, "some", A, e, void 0, arguments);
  },
  splice(...A) {
    return $t(this, "splice", A);
  },
  toReversed() {
    return ht(this).toReversed();
  },
  toSorted(A) {
    return ht(this).toSorted(A);
  },
  toSpliced(...A) {
    return ht(this).toSpliced(...A);
  },
  unshift(...A) {
    return $t(this, "unshift", A);
  },
  values() {
    return _n(this, "values", (A) => je(this, A));
  }
};
function _n(A, e, t) {
  const o = Dn(A), n = o[e]();
  return o !== A && !MA(A) && (n._next = n.next, n.next = () => {
    const i = n._next();
    return i.done || (i.value = t(i.value)), i;
  }), n;
}
const Ic = Array.prototype;
function Oe(A, e, t, o, n, i) {
  const r = Dn(A), s = r !== A && !MA(A), l = r[e];
  if (l !== Ic[e]) {
    const u = l.apply(A, i);
    return s ? Ce(u) : u;
  }
  let a = t;
  r !== A && (s ? a = function(u, f) {
    return t.call(this, je(A, u), f, A);
  } : t.length > 2 && (a = function(u, f) {
    return t.call(this, u, f, A);
  }));
  const S = l.call(r, a, o);
  return s && n ? n(S) : S;
}
function Or(A, e, t, o) {
  const n = Dn(A);
  let i = t;
  return n !== A && (MA(A) ? t.length > 3 && (i = function(r, s, l) {
    return t.call(this, r, s, l, A);
  }) : i = function(r, s, l) {
    return t.call(this, r, je(A, s), l, A);
  }), n[e](i, ...o);
}
function Xn(A, e, t) {
  const o = Z(A);
  yA(o, "iterate", po);
  const n = o[e](...t);
  return (n === -1 || n === !1) && Nt(t[0]) ? (t[0] = Z(t[0]), o[e](...t)) : n;
}
function $t(A, e, t = []) {
  ge(), Gi();
  const o = Z(A)[e].apply(A, t);
  return Wi(), de(), o;
}
const mc = /* @__PURE__ */ Pe("__proto__,__v_isRef,__isVue"), fu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(Fe)
);
function yc(A) {
  Fe(A) || (A = String(A));
  const e = Z(this);
  return yA(e, "has", A), e.hasOwnProperty(A);
}
class gu {
  constructor(e = !1, t = !1) {
    this._isReadonly = e, this._isShallow = t;
  }
  get(e, t, o) {
    if (t === "__v_skip") return e.__v_skip;
    const n = this._isReadonly, i = this._isShallow;
    if (t === "__v_isReactive")
      return !n;
    if (t === "__v_isReadonly")
      return n;
    if (t === "__v_isShallow")
      return i;
    if (t === "__v_raw")
      return o === (n ? i ? Qu : hu : i ? Eu : Cu).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
    const r = G(e);
    if (!n) {
      let l;
      if (r && (l = Bc[t]))
        return l;
      if (t === "hasOwnProperty")
        return yc;
    }
    const s = Reflect.get(
      e,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      kA(e) ? e : o
    );
    if ((Fe(t) ? fu.has(t) : mc(t)) || (n || yA(e, "get", t), i))
      return s;
    if (kA(s)) {
      const l = r && vn(t) ? s : s.value;
      return n && lA(l) ? gi(l) : l;
    }
    return lA(s) ? n ? gi(s) : Un(s) : s;
  }
}
class du extends gu {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, o, n) {
    let i = e[t];
    const r = G(e) && vn(t);
    if (!this._isShallow) {
      const a = pe(i);
      if (!MA(o) && !pe(o) && (i = Z(i), o = Z(o)), !r && kA(i) && !kA(o))
        return a ? (SA.NODE_ENV !== "production" && se(
          `Set operation on key "${String(t)}" failed: target is readonly.`,
          e[t]
        ), !0) : (i.value = o, !0);
    }
    const s = r ? Number(t) < e.length : oA(e, t), l = Reflect.set(
      e,
      t,
      o,
      kA(e) ? e : n
    );
    return e === Z(n) && (s ? Ze(o, i) && ve(e, "set", t, o, i) : ve(e, "add", t, o)), l;
  }
  deleteProperty(e, t) {
    const o = oA(e, t), n = e[t], i = Reflect.deleteProperty(e, t);
    return i && o && ve(e, "delete", t, void 0, n), i;
  }
  has(e, t) {
    const o = Reflect.has(e, t);
    return (!Fe(t) || !fu.has(t)) && yA(e, "has", t), o;
  }
  ownKeys(e) {
    return yA(
      e,
      "iterate",
      G(e) ? "length" : at
    ), Reflect.ownKeys(e);
  }
}
class pu extends gu {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return SA.NODE_ENV !== "production" && se(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, t) {
    return SA.NODE_ENV !== "production" && se(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const vc = /* @__PURE__ */ new du(), bc = /* @__PURE__ */ new pu(), Jc = /* @__PURE__ */ new du(!0), xc = /* @__PURE__ */ new pu(!0), fi = (A) => A, Ho = (A) => Reflect.getPrototypeOf(A);
function Dc(A, e, t) {
  return function(...o) {
    const n = this.__v_raw, i = Z(n), r = ut(i), s = A === "entries" || A === Symbol.iterator && r, l = A === "keys" && r, a = n[A](...o), S = t ? fi : e ? Tt : Ce;
    return !e && yA(
      i,
      "iterate",
      l ? ki : at
    ), {
      // iterator protocol
      next() {
        const { value: u, done: f } = a.next();
        return f ? { value: u, done: f } : {
          value: s ? [S(u[0]), S(u[1])] : S(u),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Po(A) {
  return function(...e) {
    if (SA.NODE_ENV !== "production") {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      se(
        `${Jn(A)} operation ${t}failed: target is readonly.`,
        Z(this)
      );
    }
    return A === "delete" ? !1 : A === "clear" ? void 0 : this;
  };
}
function wc(A, e) {
  const t = {
    get(n) {
      const i = this.__v_raw, r = Z(i), s = Z(n);
      A || (Ze(n, s) && yA(r, "get", n), yA(r, "get", s));
      const { has: l } = Ho(r), a = e ? fi : A ? Tt : Ce;
      if (l.call(r, n))
        return a(i.get(n));
      if (l.call(r, s))
        return a(i.get(s));
      i !== r && i.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !A && yA(Z(n), "iterate", at), n.size;
    },
    has(n) {
      const i = this.__v_raw, r = Z(i), s = Z(n);
      return A || (Ze(n, s) && yA(r, "has", n), yA(r, "has", s)), n === s ? i.has(n) : i.has(n) || i.has(s);
    },
    forEach(n, i) {
      const r = this, s = r.__v_raw, l = Z(s), a = e ? fi : A ? Tt : Ce;
      return !A && yA(l, "iterate", at), s.forEach((S, u) => n.call(i, a(S), a(u), r));
    }
  };
  return CA(
    t,
    A ? {
      add: Po("add"),
      set: Po("set"),
      delete: Po("delete"),
      clear: Po("clear")
    } : {
      add(n) {
        !e && !MA(n) && !pe(n) && (n = Z(n));
        const i = Z(this);
        return Ho(i).has.call(i, n) || (i.add(n), ve(i, "add", n, n)), this;
      },
      set(n, i) {
        !e && !MA(i) && !pe(i) && (i = Z(i));
        const r = Z(this), { has: s, get: l } = Ho(r);
        let a = s.call(r, n);
        a ? SA.NODE_ENV !== "production" && Nr(r, s, n) : (n = Z(n), a = s.call(r, n));
        const S = l.call(r, n);
        return r.set(n, i), a ? Ze(i, S) && ve(r, "set", n, i, S) : ve(r, "add", n, i), this;
      },
      delete(n) {
        const i = Z(this), { has: r, get: s } = Ho(i);
        let l = r.call(i, n);
        l ? SA.NODE_ENV !== "production" && Nr(i, r, n) : (n = Z(n), l = r.call(i, n));
        const a = s ? s.call(i, n) : void 0, S = i.delete(n);
        return l && ve(i, "delete", n, void 0, a), S;
      },
      clear() {
        const n = Z(this), i = n.size !== 0, r = SA.NODE_ENV !== "production" ? ut(n) ? new Map(n) : new Set(n) : void 0, s = n.clear();
        return i && ve(
          n,
          "clear",
          void 0,
          void 0,
          r
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    t[n] = Dc(n, A, e);
  }), t;
}
function wn(A, e) {
  const t = wc(A, e);
  return (o, n, i) => n === "__v_isReactive" ? !A : n === "__v_isReadonly" ? A : n === "__v_raw" ? o : Reflect.get(
    oA(t, n) && n in o ? t : o,
    n,
    i
  );
}
const Uc = {
  get: /* @__PURE__ */ wn(!1, !1)
}, Fc = {
  get: /* @__PURE__ */ wn(!1, !0)
}, Kc = {
  get: /* @__PURE__ */ wn(!0, !1)
}, Oc = {
  get: /* @__PURE__ */ wn(!0, !0)
};
function Nr(A, e, t) {
  const o = Z(t);
  if (o !== t && e.call(A, o)) {
    const n = Yi(A);
    se(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Cu = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), hu = /* @__PURE__ */ new WeakMap(), Qu = /* @__PURE__ */ new WeakMap();
function Nc(A) {
  switch (A) {
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
function Tc(A) {
  return A.__v_skip || !Object.isExtensible(A) ? 0 : Nc(Yi(A));
}
function Un(A) {
  return pe(A) ? A : Fn(
    A,
    !1,
    vc,
    Uc,
    Cu
  );
}
function Mc(A) {
  return Fn(
    A,
    !1,
    Jc,
    Fc,
    Eu
  );
}
function gi(A) {
  return Fn(
    A,
    !0,
    bc,
    Kc,
    hu
  );
}
function De(A) {
  return Fn(
    A,
    !0,
    xc,
    Oc,
    Qu
  );
}
function Fn(A, e, t, o, n) {
  if (!lA(A))
    return SA.NODE_ENV !== "production" && se(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        A
      )}`
    ), A;
  if (A.__v_raw && !(e && A.__v_isReactive))
    return A;
  const i = Tc(A);
  if (i === 0)
    return A;
  const r = n.get(A);
  if (r)
    return r;
  const s = new Proxy(
    A,
    i === 2 ? o : t
  );
  return n.set(A, s), s;
}
function fe(A) {
  return pe(A) ? fe(A.__v_raw) : !!(A && A.__v_isReactive);
}
function pe(A) {
  return !!(A && A.__v_isReadonly);
}
function MA(A) {
  return !!(A && A.__v_isShallow);
}
function Nt(A) {
  return A ? !!A.__v_raw : !1;
}
function Z(A) {
  const e = A && A.__v_raw;
  return e ? Z(e) : A;
}
function Xe(A) {
  return !oA(A, "__v_skip") && Object.isExtensible(A) && sn(A, "__v_skip", !0), A;
}
const Ce = (A) => lA(A) ? Un(A) : A, Tt = (A) => lA(A) ? gi(A) : A;
function kA(A) {
  return A ? A.__v_isRef === !0 : !1;
}
function gA(A) {
  return Rc(A, !1);
}
function Rc(A, e) {
  return kA(A) ? A : new Vc(A, e);
}
class Vc {
  constructor(e, t) {
    this.dep = new Xi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : Z(e), this._value = t ? e : Ce(e), this.__v_isShallow = t;
  }
  get value() {
    return SA.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const t = this._rawValue, o = this.__v_isShallow || MA(e) || pe(e);
    e = o ? e : Z(e), Ze(e, t) && (this._rawValue = e, this._value = o ? e : Ce(e), SA.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: t
    }) : this.dep.trigger());
  }
}
function HA(A) {
  return kA(A) ? A.value : A;
}
const Lc = {
  get: (A, e, t) => e === "__v_raw" ? A : HA(Reflect.get(A, e, t)),
  set: (A, e, t, o) => {
    const n = A[e];
    return kA(n) && !kA(t) ? (n.value = t, !0) : Reflect.set(A, e, t, o);
  }
};
function Bu(A) {
  return fe(A) ? A : new Proxy(A, Lc);
}
function Tr(A) {
  SA.NODE_ENV !== "production" && !Nt(A) && se("toRefs() expects a reactive object but received a plain one.");
  const e = G(A) ? new Array(A.length) : {};
  for (const t in A)
    e[t] = Iu(A, t);
  return e;
}
class Hc {
  constructor(e, t, o) {
    this._object = e, this._key = t, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0, this._raw = Z(e);
    let n = !0, i = e;
    if (!G(e) || !vn(String(t)))
      do
        n = !Nt(i) || MA(i);
      while (n && (i = i.__v_raw));
    this._shallow = n;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = HA(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && kA(this._raw[this._key])) {
      const t = this._object[this._key];
      if (kA(t)) {
        t.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    return Qc(this._raw, this._key);
  }
}
class Pc {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function qn(A, e, t) {
  return kA(A) ? A : q(A) ? new Pc(A) : lA(A) && arguments.length > 1 ? Iu(A, e, t) : gA(A);
}
function Iu(A, e, t) {
  return new Hc(A, e, t);
}
class Yc {
  constructor(e, t, o) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new Xi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = go - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    uA !== this)
      return lu(this, !0), !0;
  }
  get value() {
    const e = SA.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Su(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : SA.NODE_ENV !== "production" && se("Write operation failed: computed value is readonly");
  }
}
function jc(A, e, t = !1) {
  let o, n;
  return q(A) ? o = A : (o = A.get, n = A.set), new Yc(o, n, t);
}
const Yo = {}, un = /* @__PURE__ */ new WeakMap();
let rt;
function Gc(A, e = !1, t = rt) {
  if (t) {
    let o = un.get(t);
    o || un.set(t, o = []), o.push(A);
  } else SA.NODE_ENV !== "production" && !e && se(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Wc(A, e, t = aA) {
  const { immediate: o, deep: n, once: i, scheduler: r, augmentJob: s, call: l } = t, a = (Q) => {
    (t.onWarn || se)(
      "Invalid watch source: ",
      Q,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, S = (Q) => n ? Q : MA(Q) || n === !1 || n === 0 ? Re(Q, 1) : Re(Q);
  let u, f, k, p, B = !1, J = !1;
  if (kA(A) ? (f = () => A.value, B = MA(A)) : fe(A) ? (f = () => S(A), B = !0) : G(A) ? (J = !0, B = A.some((Q) => fe(Q) || MA(Q)), f = () => A.map((Q) => {
    if (kA(Q))
      return Q.value;
    if (fe(Q))
      return S(Q);
    if (q(Q))
      return l ? l(Q, 2) : Q();
    SA.NODE_ENV !== "production" && a(Q);
  })) : q(A) ? e ? f = l ? () => l(A, 2) : A : f = () => {
    if (k) {
      ge();
      try {
        k();
      } finally {
        de();
      }
    }
    const Q = rt;
    rt = u;
    try {
      return l ? l(A, 3, [p]) : A(p);
    } finally {
      rt = Q;
    }
  } : (f = vA, SA.NODE_ENV !== "production" && a(A)), e && n) {
    const Q = f, R = n === !0 ? 1 / 0 : n;
    f = () => Re(Q(), R);
  }
  const C = iu(), h = () => {
    u.stop(), C && C.active && Hi(C.effects, u);
  };
  if (i && e) {
    const Q = e;
    e = (...R) => {
      Q(...R), h();
    };
  }
  let I = J ? new Array(A.length).fill(Yo) : Yo;
  const g = (Q) => {
    if (!(!(u.flags & 1) || !u.dirty && !Q))
      if (e) {
        const R = u.run();
        if (n || B || (J ? R.some((m, y) => Ze(m, I[y])) : Ze(R, I))) {
          k && k();
          const m = rt;
          rt = u;
          try {
            const y = [
              R,
              // pass undefined as the old value when it's changed for the first time
              I === Yo ? void 0 : J && I[0] === Yo ? [] : I,
              p
            ];
            I = R, l ? l(e, 3, y) : (
              // @ts-expect-error
              e(...y)
            );
          } finally {
            rt = m;
          }
        }
      } else
        u.run();
  };
  return s && s(g), u = new ru(f), u.scheduler = r ? () => r(g, !1) : g, p = (Q) => Gc(Q, !1, u), k = u.onStop = () => {
    const Q = un.get(u);
    if (Q) {
      if (l)
        l(Q, 4);
      else
        for (const R of Q) R();
      un.delete(u);
    }
  }, SA.NODE_ENV !== "production" && (u.onTrack = t.onTrack, u.onTrigger = t.onTrigger), e ? o ? g(!0) : I = u.run() : r ? r(g.bind(null, !0), !0) : u.run(), h.pause = u.pause.bind(u), h.resume = u.resume.bind(u), h.stop = h, h;
}
function Re(A, e = 1 / 0, t) {
  if (e <= 0 || !lA(A) || A.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(A) || 0) >= e))
    return A;
  if (t.set(A, e), e--, kA(A))
    Re(A.value, e, t);
  else if (G(A))
    for (let o = 0; o < A.length; o++)
      Re(A[o], e, t);
  else if (Yt(A) || ut(A))
    A.forEach((o) => {
      Re(o, e, t);
    });
  else if (yn(A)) {
    for (const o in A)
      Re(A[o], e, t);
    for (const o of Object.getOwnPropertySymbols(A))
      Object.prototype.propertyIsEnumerable.call(A, o) && Re(A[o], e, t);
  }
  return A;
}
var E = {};
const St = [];
function Go(A) {
  St.push(A);
}
function Wo() {
  St.pop();
}
let zn = !1;
function M(A, ...e) {
  if (zn) return;
  zn = !0, ge();
  const t = St.length ? St[St.length - 1].component : null, o = t && t.appContext.config.warnHandler, n = _c();
  if (o)
    jt(
      o,
      t,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        A + e.map((i) => {
          var r, s;
          return (s = (r = i.toString) == null ? void 0 : r.call(i)) != null ? s : JSON.stringify(i);
        }).join(""),
        t && t.proxy,
        n.map(
          ({ vnode: i }) => `at <${Ro(t, i.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const i = [`[Vue warn]: ${A}`, ...e];
    n.length && i.push(`
`, ...Xc(n)), console.warn(...i);
  }
  de(), zn = !1;
}
function _c() {
  let A = St[St.length - 1];
  if (!A)
    return [];
  const e = [];
  for (; A; ) {
    const t = e[0];
    t && t.vnode === A ? t.recurseCount++ : e.push({
      vnode: A,
      recurseCount: 0
    });
    const o = A.component && A.component.parent;
    A = o && o.vnode;
  }
  return e;
}
function Xc(A) {
  const e = [];
  return A.forEach((t, o) => {
    e.push(...o === 0 ? [] : [`
`], ...qc(t));
  }), e;
}
function qc({ vnode: A, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", o = A.component ? A.component.parent == null : !1, n = ` at <${Ro(
    A.component,
    A.type,
    o
  )}`, i = ">" + t;
  return A.props ? [n, ...zc(A.props), i] : [n + i];
}
function zc(A) {
  const e = [], t = Object.keys(A);
  return t.slice(0, 3).forEach((o) => {
    e.push(...mu(o, A[o]));
  }), t.length > 3 && e.push(" ..."), e;
}
function mu(A, e, t) {
  return EA(e) ? (e = JSON.stringify(e), t ? e : [`${A}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${A}=${e}`] : kA(e) ? (e = mu(A, Z(e.value), !0), t ? e : [`${A}=Ref<`, e, ">"]) : q(e) ? [`${A}=fn${e.name ? `<${e.name}>` : ""}`] : (e = Z(e), t ? e : [`${A}=`, e]);
}
const qi = {
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
function jt(A, e, t, o) {
  try {
    return o ? A(...o) : A();
  } catch (n) {
    Oo(n, e, t);
  }
}
function Ke(A, e, t, o) {
  if (q(A)) {
    const n = jt(A, e, t, o);
    return n && Pi(n) && n.catch((i) => {
      Oo(i, e, t);
    }), n;
  }
  if (G(A)) {
    const n = [];
    for (let i = 0; i < A.length; i++)
      n.push(Ke(A[i], e, t, o));
    return n;
  } else E.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof A}`
  );
}
function Oo(A, e, t, o = !0) {
  const n = e ? e.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || aA;
  if (e) {
    let s = e.parent;
    const l = e.proxy, a = E.NODE_ENV !== "production" ? qi[t] : `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; s; ) {
      const S = s.ec;
      if (S) {
        for (let u = 0; u < S.length; u++)
          if (S[u](A, l, a) === !1)
            return;
      }
      s = s.parent;
    }
    if (i) {
      ge(), jt(i, null, 10, [
        A,
        l,
        a
      ]), de();
      return;
    }
  }
  Zc(A, t, n, o, r);
}
function Zc(A, e, t, o = !0, n = !1) {
  if (E.NODE_ENV !== "production") {
    const i = qi[e];
    if (t && Go(t), M(`Unhandled error${i ? ` during execution of ${i}` : ""}`), t && Wo(), o)
      throw A;
    console.error(A);
  } else {
    if (n)
      throw A;
    console.error(A);
  }
}
const PA = [];
let ye = -1;
const Ft = [];
let Ge = null, vt = 0;
const yu = /* @__PURE__ */ Promise.resolve();
let an = null;
const $c = 100;
function Co(A) {
  const e = an || yu;
  return A ? e.then(this ? A.bind(this) : A) : e;
}
function Ak(A) {
  let e = ye + 1, t = PA.length;
  for (; e < t; ) {
    const o = e + t >>> 1, n = PA[o], i = Eo(n);
    i < A || i === A && n.flags & 2 ? e = o + 1 : t = o;
  }
  return e;
}
function Kn(A) {
  if (!(A.flags & 1)) {
    const e = Eo(A), t = PA[PA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(A.flags & 2) && e >= Eo(t) ? PA.push(A) : PA.splice(Ak(e), 0, A), A.flags |= 1, vu();
  }
}
function vu() {
  an || (an = yu.then(xu));
}
function bu(A) {
  G(A) ? Ft.push(...A) : Ge && A.id === -1 ? Ge.splice(vt + 1, 0, A) : A.flags & 1 || (Ft.push(A), A.flags |= 1), vu();
}
function Mr(A, e, t = ye + 1) {
  for (E.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < PA.length; t++) {
    const o = PA[t];
    if (o && o.flags & 2) {
      if (A && o.id !== A.uid || E.NODE_ENV !== "production" && zi(e, o))
        continue;
      PA.splice(t, 1), t--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Ju(A) {
  if (Ft.length) {
    const e = [...new Set(Ft)].sort(
      (t, o) => Eo(t) - Eo(o)
    );
    if (Ft.length = 0, Ge) {
      Ge.push(...e);
      return;
    }
    for (Ge = e, E.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map()), vt = 0; vt < Ge.length; vt++) {
      const t = Ge[vt];
      E.NODE_ENV !== "production" && zi(A, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    Ge = null, vt = 0;
  }
}
const Eo = (A) => A.id == null ? A.flags & 2 ? -1 : 1 / 0 : A.id;
function xu(A) {
  E.NODE_ENV !== "production" && (A = A || /* @__PURE__ */ new Map());
  const e = E.NODE_ENV !== "production" ? (t) => zi(A, t) : vA;
  try {
    for (ye = 0; ye < PA.length; ye++) {
      const t = PA[ye];
      if (t && !(t.flags & 8)) {
        if (E.NODE_ENV !== "production" && e(t))
          continue;
        t.flags & 4 && (t.flags &= -2), jt(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; ye < PA.length; ye++) {
      const t = PA[ye];
      t && (t.flags &= -2);
    }
    ye = -1, PA.length = 0, Ju(A), an = null, (PA.length || Ft.length) && xu(A);
  }
}
function zi(A, e) {
  const t = A.get(e) || 0;
  if (t > $c) {
    const o = e.i, n = o && ka(o.type);
    return Oo(
      `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return A.set(e, t + 1), !1;
}
let Se = !1;
const _o = /* @__PURE__ */ new Map();
E.NODE_ENV !== "production" && (Fo().__VUE_HMR_RUNTIME__ = {
  createRecord: Zn(Du),
  rerender: Zn(ok),
  reload: Zn(nk)
});
const gt = /* @__PURE__ */ new Map();
function ek(A) {
  const e = A.type.__hmrId;
  let t = gt.get(e);
  t || (Du(e, A.type), t = gt.get(e)), t.instances.add(A);
}
function tk(A) {
  gt.get(A.type.__hmrId).instances.delete(A);
}
function Du(A, e) {
  return gt.has(A) ? !1 : (gt.set(A, {
    initialDef: Sn(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Sn(A) {
  return fa(A) ? A.__vccOpts : A;
}
function ok(A, e) {
  const t = gt.get(A);
  t && (t.initialDef.render = e, [...t.instances].forEach((o) => {
    e && (o.render = e, Sn(o.type).render = e), o.renderCache = [], Se = !0, o.job.flags & 8 || o.update(), Se = !1;
  }));
}
function nk(A, e) {
  const t = gt.get(A);
  if (!t) return;
  e = Sn(e), Rr(t.initialDef, e);
  const o = [...t.instances];
  for (let n = 0; n < o.length; n++) {
    const i = o[n], r = Sn(i.type);
    let s = _o.get(r);
    s || (r !== t.initialDef && Rr(r, e), _o.set(r, s = /* @__PURE__ */ new Set())), s.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (s.add(i), i.ceReload(e.styles), s.delete(i)) : i.parent ? Kn(() => {
      i.job.flags & 8 || (Se = !0, i.parent.update(), Se = !1, s.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  bu(() => {
    _o.clear();
  });
}
function Rr(A, e) {
  CA(A, e);
  for (const t in A)
    t !== "__file" && !(t in e) && delete A[t];
}
function Zn(A) {
  return (e, t) => {
    try {
      return A(e, t);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let be, to = [], di = !1;
function No(A, ...e) {
  be ? be.emit(A, ...e) : di || to.push({ event: A, args: e });
}
function wu(A, e) {
  var t, o;
  be = A, be ? (be.enabled = !0, to.forEach(({ event: n, args: i }) => be.emit(n, ...i)), to = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (t = window.navigator) == null ? void 0 : t.userAgent) != null && o.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    wu(i, e);
  }), setTimeout(() => {
    be || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, di = !0, to = []);
  }, 3e3)) : (di = !0, to = []);
}
function ik(A, e) {
  No("app:init", A, e, {
    Fragment: QA,
    Text: To,
    Comment: ne,
    Static: qo
  });
}
function rk(A) {
  No("app:unmount", A);
}
const sk = /* @__PURE__ */ Zi(
  "component:added"
  /* COMPONENT_ADDED */
), Uu = /* @__PURE__ */ Zi(
  "component:updated"
  /* COMPONENT_UPDATED */
), lk = /* @__PURE__ */ Zi(
  "component:removed"
  /* COMPONENT_REMOVED */
), uk = (A) => {
  be && typeof be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !be.cleanupBuffer(A) && lk(A);
};
// @__NO_SIDE_EFFECTS__
function Zi(A) {
  return (e) => {
    No(
      A,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const ak = /* @__PURE__ */ Fu(
  "perf:start"
  /* PERFORMANCE_START */
), Sk = /* @__PURE__ */ Fu(
  "perf:end"
  /* PERFORMANCE_END */
);
function Fu(A) {
  return (e, t, o) => {
    No(A, e.appContext.app, e.uid, e, t, o);
  };
}
function ck(A, e, t) {
  No(
    "component:emit",
    A.appContext.app,
    A,
    e,
    t
  );
}
let GA = null, Ku = null;
function cn(A) {
  const e = GA;
  return GA = A, Ku = A && A.type.__scopeId || null, e;
}
function kk(A, e = GA, t) {
  if (!e || A._n)
    return A;
  const o = (...n) => {
    o._d && $r(-1);
    const i = cn(e);
    let r;
    try {
      r = A(...n);
    } finally {
      cn(i), o._d && $r(1);
    }
    return E.NODE_ENV !== "production" && Uu(e), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ou(A) {
  tc(A) && M("Do not use built-in directive ids as custom directive id: " + A);
}
function IA(A, e) {
  if (GA === null)
    return E.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), A;
  const t = Rn(GA), o = A.dirs || (A.dirs = []);
  for (let n = 0; n < e.length; n++) {
    let [i, r, s, l = aA] = e[n];
    i && (q(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Re(r), o.push({
      dir: i,
      instance: t,
      value: r,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return A;
}
function ot(A, e, t, o) {
  const n = A.dirs, i = e && e.dirs;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    i && (s.oldValue = i[r].value);
    let l = s.dir[o];
    l && (ge(), Ke(l, t, 8, [
      A.el,
      s,
      A,
      e
    ]), de());
  }
}
function fk(A, e) {
  if (E.NODE_ENV !== "production" && (!mA || mA.isMounted) && M("provide() can only be used inside setup()."), mA) {
    let t = mA.provides;
    const o = mA.parent && mA.parent.provides;
    o === t && (t = mA.provides = Object.create(o)), t[A] = e;
  }
}
function ao(A, e, t = !1) {
  const o = Mn();
  if (o || kt) {
    let n = kt ? kt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (n && A in n)
      return n[A];
    if (arguments.length > 1)
      return t && q(e) ? e.call(o && o.proxy) : e;
    E.NODE_ENV !== "production" && M(`injection "${String(A)}" not found.`);
  } else E.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
function gk() {
  return !!(Mn() || kt);
}
const dk = /* @__PURE__ */ Symbol.for("v-scx"), pk = () => {
  {
    const A = ao(dk);
    return A || E.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), A;
  }
};
function Kt(A, e, t) {
  return E.NODE_ENV !== "production" && !q(e) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Nu(A, e, t);
}
function Nu(A, e, t = aA) {
  const { immediate: o, deep: n, flush: i, once: r } = t;
  E.NODE_ENV !== "production" && !e && (o !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const s = CA({}, t);
  E.NODE_ENV !== "production" && (s.onWarn = M);
  const l = e && o || !e && i !== "post";
  let a;
  if (Qo) {
    if (i === "sync") {
      const k = pk();
      a = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!l) {
      const k = () => {
      };
      return k.stop = vA, k.resume = vA, k.pause = vA, k;
    }
  }
  const S = mA;
  s.call = (k, p, B) => Ke(k, S, p, B);
  let u = !1;
  i === "post" ? s.scheduler = (k) => {
    $A(k, S && S.suspense);
  } : i !== "sync" && (u = !0, s.scheduler = (k, p) => {
    p ? k() : Kn(k);
  }), s.augmentJob = (k) => {
    e && (k.flags |= 4), u && (k.flags |= 2, S && (k.id = S.uid, k.i = S));
  };
  const f = Wc(A, e, s);
  return Qo && (a ? a.push(f) : l && f()), f;
}
function Ck(A, e, t) {
  const o = this.proxy, n = EA(A) ? A.includes(".") ? Tu(o, A) : () => o[A] : A.bind(o, o);
  let i;
  q(e) ? i = e : (i = e.handler, t = e);
  const r = Mo(this), s = Nu(n, i.bind(o), t);
  return r(), s;
}
function Tu(A, e) {
  const t = e.split(".");
  return () => {
    let o = A;
    for (let n = 0; n < t.length && o; n++)
      o = o[t[n]];
    return o;
  };
}
const Ek = /* @__PURE__ */ Symbol("_vte"), hk = (A) => A.__isTeleport, Qk = /* @__PURE__ */ Symbol("_leaveCb");
function $i(A, e) {
  A.shapeFlag & 6 && A.component ? (A.transition = e, $i(A.component.subTree, e)) : A.shapeFlag & 128 ? (A.ssContent.transition = e.clone(A.ssContent), A.ssFallback.transition = e.clone(A.ssFallback)) : A.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Ct(A, e) {
  return q(A) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    CA({ name: A.name }, e, { setup: A })
  ) : A;
}
function Mu(A) {
  A.ids = [A.ids[0] + A.ids[2]++ + "-", 0, 0];
}
const Vr = /* @__PURE__ */ new WeakSet(), kn = /* @__PURE__ */ new WeakMap();
function So(A, e, t, o, n = !1) {
  if (G(A)) {
    A.forEach(
      (B, J) => So(
        B,
        e && (G(e) ? e[J] : e),
        t,
        o,
        n
      )
    );
    return;
  }
  if (co(o) && !n) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && So(A, e, t, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Rn(o.component) : o.el, r = n ? null : i, { i: s, r: l } = A;
  if (E.NODE_ENV !== "production" && !s) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = e && e.r, S = s.refs === aA ? s.refs = {} : s.refs, u = s.setupState, f = Z(u), k = u === aA ? Zl : (B) => E.NODE_ENV !== "production" && (oA(f, B) && !kA(f[B]) && M(
    `Template ref "${B}" used on a non-ref value. It will not work in the production build.`
  ), Vr.has(f[B])) ? !1 : oA(f, B), p = (B) => E.NODE_ENV === "production" || !Vr.has(B);
  if (a != null && a !== l) {
    if (Lr(e), EA(a))
      S[a] = null, k(a) && (u[a] = null);
    else if (kA(a)) {
      p(a) && (a.value = null);
      const B = e;
      B.k && (S[B.k] = null);
    }
  }
  if (q(l))
    jt(l, s, 12, [r, S]);
  else {
    const B = EA(l), J = kA(l);
    if (B || J) {
      const C = () => {
        if (A.f) {
          const h = B ? k(l) ? u[l] : S[l] : p(l) || !A.k ? l.value : S[A.k];
          if (n)
            G(h) && Hi(h, i);
          else if (G(h))
            h.includes(i) || h.push(i);
          else if (B)
            S[l] = [i], k(l) && (u[l] = S[l]);
          else {
            const I = [i];
            p(l) && (l.value = I), A.k && (S[A.k] = I);
          }
        } else B ? (S[l] = r, k(l) && (u[l] = r)) : J ? (p(l) && (l.value = r), A.k && (S[A.k] = r)) : E.NODE_ENV !== "production" && M("Invalid template ref type:", l, `(${typeof l})`);
      };
      if (r) {
        const h = () => {
          C(), kn.delete(A);
        };
        h.id = -1, kn.set(A, h), $A(h, t);
      } else
        Lr(A), C();
    } else E.NODE_ENV !== "production" && M("Invalid template ref type:", l, `(${typeof l})`);
  }
}
function Lr(A) {
  const e = kn.get(A);
  e && (e.flags |= 8, kn.delete(A));
}
Fo().requestIdleCallback;
Fo().cancelIdleCallback;
const co = (A) => !!A.type.__asyncLoader, Ar = (A) => A.type.__isKeepAlive;
function Bk(A, e) {
  Ru(A, "a", e);
}
function Ik(A, e) {
  Ru(A, "da", e);
}
function Ru(A, e, t = mA) {
  const o = A.__wdc || (A.__wdc = () => {
    let n = t;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return A();
  });
  if (On(e, o, t), t) {
    let n = t.parent;
    for (; n && n.parent; )
      Ar(n.parent.vnode) && mk(o, e, t, n), n = n.parent;
  }
}
function mk(A, e, t, o) {
  const n = On(
    e,
    A,
    o,
    !0
    /* prepend */
  );
  Lu(() => {
    Hi(o[e], n);
  }, t);
}
function On(A, e, t = mA, o = !1) {
  if (t) {
    const n = t[A] || (t[A] = []), i = e.__weh || (e.__weh = (...r) => {
      ge();
      const s = Mo(t), l = Ke(e, t, A, r);
      return s(), de(), l;
    });
    return o ? n.unshift(i) : n.push(i), i;
  } else if (E.NODE_ENV !== "production") {
    const n = it(qi[A].replace(/ hook$/, ""));
    M(
      `${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ye = (A) => (e, t = mA) => {
  (!Qo || A === "sp") && On(A, (...o) => e(...o), t);
}, yk = Ye("bm"), Vu = Ye("m"), vk = Ye(
  "bu"
), bk = Ye("u"), Jk = Ye(
  "bum"
), Lu = Ye("um"), xk = Ye(
  "sp"
), Dk = Ye("rtg"), wk = Ye("rtc");
function Uk(A, e = mA) {
  On("ec", A, e);
}
const Fk = /* @__PURE__ */ Symbol.for("v-ndc");
function Je(A, e, t, o) {
  let n;
  const i = t, r = G(A);
  if (r || EA(A)) {
    const s = r && fe(A);
    let l = !1, a = !1;
    s && (l = !MA(A), a = pe(A), A = Dn(A)), n = new Array(A.length);
    for (let S = 0, u = A.length; S < u; S++)
      n[S] = e(
        l ? a ? Tt(Ce(A[S])) : Ce(A[S]) : A[S],
        S,
        void 0,
        i
      );
  } else if (typeof A == "number") {
    E.NODE_ENV !== "production" && !Number.isInteger(A) && M(`The v-for range expect an integer value but got ${A}.`), n = new Array(A);
    for (let s = 0; s < A; s++)
      n[s] = e(s + 1, s, void 0, i);
  } else if (lA(A))
    if (A[Symbol.iterator])
      n = Array.from(
        A,
        (s, l) => e(s, l, void 0, i)
      );
    else {
      const s = Object.keys(A);
      n = new Array(s.length);
      for (let l = 0, a = s.length; l < a; l++) {
        const S = s[l];
        n[l] = e(A[S], S, l, i);
      }
    }
  else
    n = [];
  return n;
}
const pi = (A) => A ? Sa(A) ? Rn(A) : pi(A.parent) : null, ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ CA(/* @__PURE__ */ Object.create(null), {
    $: (A) => A,
    $el: (A) => A.vnode.el,
    $data: (A) => A.data,
    $props: (A) => E.NODE_ENV !== "production" ? De(A.props) : A.props,
    $attrs: (A) => E.NODE_ENV !== "production" ? De(A.attrs) : A.attrs,
    $slots: (A) => E.NODE_ENV !== "production" ? De(A.slots) : A.slots,
    $refs: (A) => E.NODE_ENV !== "production" ? De(A.refs) : A.refs,
    $parent: (A) => pi(A.parent),
    $root: (A) => pi(A.root),
    $host: (A) => A.ce,
    $emit: (A) => A.emit,
    $options: (A) => Yu(A),
    $forceUpdate: (A) => A.f || (A.f = () => {
      Kn(A.update);
    }),
    $nextTick: (A) => A.n || (A.n = Co.bind(A.proxy)),
    $watch: (A) => Ck.bind(A)
  })
), er = (A) => A === "_" || A === "$", $n = (A, e) => A !== aA && !A.__isScriptSetup && oA(A, e), Hu = {
  get({ _: A }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: t, setupState: o, data: n, props: i, accessCache: r, type: s, appContext: l } = A;
    if (E.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    if (e[0] !== "$") {
      const f = r[e];
      if (f !== void 0)
        switch (f) {
          case 1:
            return o[e];
          case 2:
            return n[e];
          case 4:
            return t[e];
          case 3:
            return i[e];
        }
      else {
        if ($n(o, e))
          return r[e] = 1, o[e];
        if (n !== aA && oA(n, e))
          return r[e] = 2, n[e];
        if (oA(i, e))
          return r[e] = 3, i[e];
        if (t !== aA && oA(t, e))
          return r[e] = 4, t[e];
        Ci && (r[e] = 0);
      }
    }
    const a = ct[e];
    let S, u;
    if (a)
      return e === "$attrs" ? (yA(A.attrs, "get", ""), E.NODE_ENV !== "production" && gn()) : E.NODE_ENV !== "production" && e === "$slots" && yA(A, "get", e), a(A);
    if (
      // css module (injected by vue-loader)
      (S = s.__cssModules) && (S = S[e])
    )
      return S;
    if (t !== aA && oA(t, e))
      return r[e] = 4, t[e];
    if (
      // global properties
      u = l.config.globalProperties, oA(u, e)
    )
      return u[e];
    E.NODE_ENV !== "production" && GA && (!EA(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (n !== aA && er(e[0]) && oA(n, e) ? M(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : A === GA && M(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: A }, e, t) {
    const { data: o, setupState: n, ctx: i } = A;
    return $n(n, e) ? (n[e] = t, !0) : E.NODE_ENV !== "production" && n.__isScriptSetup && oA(n, e) ? (M(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : o !== aA && oA(o, e) ? (o[e] = t, !0) : oA(A.props, e) ? (E.NODE_ENV !== "production" && M(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in A ? (E.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (E.NODE_ENV !== "production" && e in A.appContext.config.globalProperties ? Object.defineProperty(i, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : i[e] = t, !0);
  },
  has({
    _: { data: A, setupState: e, accessCache: t, ctx: o, appContext: n, props: i, type: r }
  }, s) {
    let l;
    return !!(t[s] || A !== aA && s[0] !== "$" && oA(A, s) || $n(e, s) || oA(i, s) || oA(o, s) || oA(ct, s) || oA(n.config.globalProperties, s) || (l = r.__cssModules) && l[s]);
  },
  defineProperty(A, e, t) {
    return t.get != null ? A._.accessCache[e] = 0 : oA(t, "value") && this.set(A, e, t.value, null), Reflect.defineProperty(A, e, t);
  }
};
E.NODE_ENV !== "production" && (Hu.ownKeys = (A) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(A)));
function Kk(A) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => A
  }), Object.keys(ct).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => ct[t](A),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: vA
    });
  }), e;
}
function Ok(A) {
  const {
    ctx: e,
    propsOptions: [t]
  } = A;
  t && Object.keys(t).forEach((o) => {
    Object.defineProperty(e, o, {
      enumerable: !0,
      configurable: !0,
      get: () => A.props[o],
      set: vA
    });
  });
}
function Nk(A) {
  const { ctx: e, setupState: t } = A;
  Object.keys(Z(t)).forEach((o) => {
    if (!t.__isScriptSetup) {
      if (er(o[0])) {
        M(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, o, {
        enumerable: !0,
        configurable: !0,
        get: () => t[o],
        set: vA
      });
    }
  });
}
function Hr(A) {
  return G(A) ? A.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : A;
}
function Tk() {
  const A = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    A[t] ? M(`${e} property "${t}" is already defined in ${A[t]}.`) : A[t] = e;
  };
}
let Ci = !0;
function Mk(A) {
  const e = Yu(A), t = A.proxy, o = A.ctx;
  Ci = !1, e.beforeCreate && Pr(e.beforeCreate, A, "bc");
  const {
    // state
    data: n,
    computed: i,
    methods: r,
    watch: s,
    provide: l,
    inject: a,
    // lifecycle
    created: S,
    beforeMount: u,
    mounted: f,
    beforeUpdate: k,
    updated: p,
    activated: B,
    deactivated: J,
    beforeDestroy: C,
    beforeUnmount: h,
    destroyed: I,
    unmounted: g,
    render: Q,
    renderTracked: R,
    renderTriggered: m,
    errorCaptured: y,
    serverPrefetch: L,
    // public API
    expose: O,
    inheritAttrs: D,
    // assets
    components: j,
    directives: rA,
    filters: hA
  } = e, pA = E.NODE_ENV !== "production" ? Tk() : null;
  if (E.NODE_ENV !== "production") {
    const [P] = A.propsOptions;
    if (P)
      for (const z in P)
        pA("Props", z);
  }
  if (a && Rk(a, o, pA), r)
    for (const P in r) {
      const z = r[P];
      q(z) ? (E.NODE_ENV !== "production" ? Object.defineProperty(o, P, {
        value: z.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[P] = z.bind(t), E.NODE_ENV !== "production" && pA("Methods", P)) : E.NODE_ENV !== "production" && M(
        `Method "${P}" has type "${typeof z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (n) {
    E.NODE_ENV !== "production" && !q(n) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const P = n.call(t, t);
    if (E.NODE_ENV !== "production" && Pi(P) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !lA(P))
      E.NODE_ENV !== "production" && M("data() should return an object.");
    else if (A.data = Un(P), E.NODE_ENV !== "production")
      for (const z in P)
        pA("Data", z), er(z[0]) || Object.defineProperty(o, z, {
          configurable: !0,
          enumerable: !0,
          get: () => P[z],
          set: vA
        });
  }
  if (Ci = !0, i)
    for (const P in i) {
      const z = i[P], nA = q(z) ? z.bind(t, t) : q(z.get) ? z.get.bind(t, t) : vA;
      E.NODE_ENV !== "production" && nA === vA && M(`Computed property "${P}" has no getter.`);
      const Ee = !q(z) && q(z.set) ? z.set.bind(t) : E.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${P}" is readonly.`
        );
      } : vA, WA = FA({
        get: nA,
        set: Ee
      });
      Object.defineProperty(o, P, {
        enumerable: !0,
        configurable: !0,
        get: () => WA.value,
        set: (xA) => WA.value = xA
      }), E.NODE_ENV !== "production" && pA("Computed", P);
    }
  if (s)
    for (const P in s)
      Pu(s[P], o, t, P);
  if (l) {
    const P = q(l) ? l.call(t) : l;
    Reflect.ownKeys(P).forEach((z) => {
      fk(z, P[z]);
    });
  }
  S && Pr(S, A, "c");
  function sA(P, z) {
    G(z) ? z.forEach((nA) => P(nA.bind(t))) : z && P(z.bind(t));
  }
  if (sA(yk, u), sA(Vu, f), sA(vk, k), sA(bk, p), sA(Bk, B), sA(Ik, J), sA(Uk, y), sA(wk, R), sA(Dk, m), sA(Jk, h), sA(Lu, g), sA(xk, L), G(O))
    if (O.length) {
      const P = A.exposed || (A.exposed = {});
      O.forEach((z) => {
        Object.defineProperty(P, z, {
          get: () => t[z],
          set: (nA) => t[z] = nA,
          enumerable: !0
        });
      });
    } else A.exposed || (A.exposed = {});
  Q && A.render === vA && (A.render = Q), D != null && (A.inheritAttrs = D), j && (A.components = j), rA && (A.directives = rA), L && Mu(A);
}
function Rk(A, e, t = vA) {
  G(A) && (A = Ei(A));
  for (const o in A) {
    const n = A[o];
    let i;
    lA(n) ? "default" in n ? i = ao(
      n.from || o,
      n.default,
      !0
    ) : i = ao(n.from || o) : i = ao(n), kA(i) ? Object.defineProperty(e, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : e[o] = i, E.NODE_ENV !== "production" && t("Inject", o);
  }
}
function Pr(A, e, t) {
  Ke(
    G(A) ? A.map((o) => o.bind(e.proxy)) : A.bind(e.proxy),
    e,
    t
  );
}
function Pu(A, e, t, o) {
  let n = o.includes(".") ? Tu(t, o) : () => t[o];
  if (EA(A)) {
    const i = e[A];
    q(i) ? Kt(n, i) : E.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${A}"`, i);
  } else if (q(A))
    Kt(n, A.bind(t));
  else if (lA(A))
    if (G(A))
      A.forEach((i) => Pu(i, e, t, o));
    else {
      const i = q(A.handler) ? A.handler.bind(t) : e[A.handler];
      q(i) ? Kt(n, i, A) : E.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${A.handler}"`, i);
    }
  else E.NODE_ENV !== "production" && M(`Invalid watch option: "${o}"`, A);
}
function Yu(A) {
  const e = A.type, { mixins: t, extends: o } = e, {
    mixins: n,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = A.appContext, s = i.get(e);
  let l;
  return s ? l = s : !n.length && !t && !o ? l = e : (l = {}, n.length && n.forEach(
    (a) => fn(l, a, r, !0)
  ), fn(l, e, r)), lA(e) && i.set(e, l), l;
}
function fn(A, e, t, o = !1) {
  const { mixins: n, extends: i } = e;
  i && fn(A, i, t, !0), n && n.forEach(
    (r) => fn(A, r, t, !0)
  );
  for (const r in e)
    if (o && r === "expose")
      E.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const s = Vk[r] || t && t[r];
      A[r] = s ? s(A[r], e[r]) : e[r];
    }
  return A;
}
const Vk = {
  data: Yr,
  props: jr,
  emits: jr,
  // objects
  methods: oo,
  computed: oo,
  // lifecycle
  beforeCreate: LA,
  created: LA,
  beforeMount: LA,
  mounted: LA,
  beforeUpdate: LA,
  updated: LA,
  beforeDestroy: LA,
  beforeUnmount: LA,
  destroyed: LA,
  unmounted: LA,
  activated: LA,
  deactivated: LA,
  errorCaptured: LA,
  serverPrefetch: LA,
  // assets
  components: oo,
  directives: oo,
  // watch
  watch: Hk,
  // provide / inject
  provide: Yr,
  inject: Lk
};
function Yr(A, e) {
  return e ? A ? function() {
    return CA(
      q(A) ? A.call(this, this) : A,
      q(e) ? e.call(this, this) : e
    );
  } : e : A;
}
function Lk(A, e) {
  return oo(Ei(A), Ei(e));
}
function Ei(A) {
  if (G(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++)
      e[A[t]] = A[t];
    return e;
  }
  return A;
}
function LA(A, e) {
  return A ? [...new Set([].concat(A, e))] : e;
}
function oo(A, e) {
  return A ? CA(/* @__PURE__ */ Object.create(null), A, e) : e;
}
function jr(A, e) {
  return A ? G(A) && G(e) ? [.../* @__PURE__ */ new Set([...A, ...e])] : CA(
    /* @__PURE__ */ Object.create(null),
    Hr(A),
    Hr(e ?? {})
  ) : e;
}
function Hk(A, e) {
  if (!A) return e;
  if (!e) return A;
  const t = CA(/* @__PURE__ */ Object.create(null), A);
  for (const o in e)
    t[o] = LA(A[o], e[o]);
  return t;
}
function ju() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
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
let Pk = 0;
function Yk(A, e) {
  return function(o, n = null) {
    q(o) || (o = CA({}, o)), n != null && !lA(n) && (E.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), n = null);
    const i = ju(), r = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const a = i.app = {
      _uid: Pk++,
      _component: o,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: os,
      get config() {
        return i.config;
      },
      set config(S) {
        E.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(S, ...u) {
        return r.has(S) ? E.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : S && q(S.install) ? (r.add(S), S.install(a, ...u)) : q(S) ? (r.add(S), S(a, ...u)) : E.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(S) {
        return i.mixins.includes(S) ? E.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (S.name ? `: ${S.name}` : "")
        ) : i.mixins.push(S), a;
      },
      component(S, u) {
        return E.NODE_ENV !== "production" && mi(S, i.config), u ? (E.NODE_ENV !== "production" && i.components[S] && M(`Component "${S}" has already been registered in target app.`), i.components[S] = u, a) : i.components[S];
      },
      directive(S, u) {
        return E.NODE_ENV !== "production" && Ou(S), u ? (E.NODE_ENV !== "production" && i.directives[S] && M(`Directive "${S}" has already been registered in target app.`), i.directives[S] = u, a) : i.directives[S];
      },
      mount(S, u, f) {
        if (l)
          E.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          E.NODE_ENV !== "production" && S.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const k = a._ceVNode || ie(o, n);
          return k.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), E.NODE_ENV !== "production" && (i.reload = () => {
            const p = At(k);
            p.el = null, A(p, S, f);
          }), A(k, S, f), l = !0, a._container = S, S.__vue_app__ = a, E.NODE_ENV !== "production" && (a._instance = k.component, ik(a, os)), Rn(k.component);
        }
      },
      onUnmount(S) {
        E.NODE_ENV !== "production" && typeof S != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof S}`
        ), s.push(S);
      },
      unmount() {
        l ? (Ke(
          s,
          a._instance,
          16
        ), A(null, a._container), E.NODE_ENV !== "production" && (a._instance = null, rk(a)), delete a._container.__vue_app__) : E.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(S, u) {
        return E.NODE_ENV !== "production" && S in i.provides && (oA(i.provides, S) ? M(
          `App already provides property with key "${String(S)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(S)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[S] = u, a;
      },
      runWithContext(S) {
        const u = kt;
        kt = a;
        try {
          return S();
        } finally {
          kt = u;
        }
      }
    };
    return a;
  };
}
let kt = null;
const jk = (A, e) => e === "modelValue" || e === "model-value" ? A.modelModifiers : A[`${e}Modifiers`] || A[`${ZA(e)}Modifiers`] || A[`${ee(e)}Modifiers`];
function Gk(A, e, ...t) {
  if (A.isUnmounted) return;
  const o = A.vnode.props || aA;
  if (E.NODE_ENV !== "production") {
    const {
      emitsOptions: S,
      propsOptions: [u]
    } = A;
    if (S)
      if (!(e in S))
        (!u || !(it(ZA(e)) in u)) && M(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${it(ZA(e))}" prop.`
        );
      else {
        const f = S[e];
        q(f) && (f(...t) || M(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let n = t;
  const i = e.startsWith("update:"), r = i && jk(o, e.slice(7));
  if (r && (r.trim && (n = t.map((S) => EA(S) ? S.trim() : S)), r.number && (n = t.map(xn))), E.NODE_ENV !== "production" && ck(A, e, n), E.NODE_ENV !== "production") {
    const S = e.toLowerCase();
    S !== e && o[it(S)] && M(
      `Event "${S}" is emitted in component ${Ro(
        A,
        A.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ee(
        e
      )}" instead of "${e}".`
    );
  }
  let s, l = o[s = it(e)] || // also try camelCase event handler (#2249)
  o[s = it(ZA(e))];
  !l && i && (l = o[s = it(ee(e))]), l && Ke(
    l,
    A,
    6,
    n
  );
  const a = o[s + "Once"];
  if (a) {
    if (!A.emitted)
      A.emitted = {};
    else if (A.emitted[s])
      return;
    A.emitted[s] = !0, Ke(
      a,
      A,
      6,
      n
    );
  }
}
const Wk = /* @__PURE__ */ new WeakMap();
function Gu(A, e, t = !1) {
  const o = t ? Wk : e.emitsCache, n = o.get(A);
  if (n !== void 0)
    return n;
  const i = A.emits;
  let r = {}, s = !1;
  if (!q(A)) {
    const l = (a) => {
      const S = Gu(a, e, !0);
      S && (s = !0, CA(r, S));
    };
    !t && e.mixins.length && e.mixins.forEach(l), A.extends && l(A.extends), A.mixins && A.mixins.forEach(l);
  }
  return !i && !s ? (lA(A) && o.set(A, null), null) : (G(i) ? i.forEach((l) => r[l] = null) : CA(r, i), lA(A) && o.set(A, r), r);
}
function Nn(A, e) {
  return !A || !wo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), oA(A, e[0].toLowerCase() + e.slice(1)) || oA(A, ee(e)) || oA(A, e));
}
let hi = !1;
function gn() {
  hi = !0;
}
function Gr(A) {
  const {
    type: e,
    vnode: t,
    proxy: o,
    withProxy: n,
    propsOptions: [i],
    slots: r,
    attrs: s,
    emit: l,
    render: a,
    renderCache: S,
    props: u,
    data: f,
    setupState: k,
    ctx: p,
    inheritAttrs: B
  } = A, J = cn(A);
  let C, h;
  E.NODE_ENV !== "production" && (hi = !1);
  try {
    if (t.shapeFlag & 4) {
      const Q = n || o, R = E.NODE_ENV !== "production" && k.__isScriptSetup ? new Proxy(Q, {
        get(m, y, L) {
          return M(
            `Property '${String(
              y
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(m, y, L);
        }
      }) : Q;
      C = ae(
        a.call(
          R,
          Q,
          S,
          E.NODE_ENV !== "production" ? De(u) : u,
          k,
          f,
          p
        )
      ), h = s;
    } else {
      const Q = e;
      E.NODE_ENV !== "production" && s === u && gn(), C = ae(
        Q.length > 1 ? Q(
          E.NODE_ENV !== "production" ? De(u) : u,
          E.NODE_ENV !== "production" ? {
            get attrs() {
              return gn(), De(s);
            },
            slots: r,
            emit: l
          } : { attrs: s, slots: r, emit: l }
        ) : Q(
          E.NODE_ENV !== "production" ? De(u) : u,
          null
        )
      ), h = e.props ? s : _k(s);
    }
  } catch (Q) {
    ko.length = 0, Oo(Q, A, 1), C = ie(ne);
  }
  let I = C, g;
  if (E.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([I, g] = Wu(C)), h && B !== !1) {
    const Q = Object.keys(h), { shapeFlag: R } = I;
    if (Q.length) {
      if (R & 7)
        i && Q.some(rn) && (h = Xk(
          h,
          i
        )), I = At(I, h, !1, !0);
      else if (E.NODE_ENV !== "production" && !hi && I.type !== ne) {
        const m = Object.keys(s), y = [], L = [];
        for (let O = 0, D = m.length; O < D; O++) {
          const j = m[O];
          wo(j) ? rn(j) || y.push(j[2].toLowerCase() + j.slice(3)) : L.push(j);
        }
        L.length && M(
          `Extraneous non-props attributes (${L.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), y.length && M(
          `Extraneous non-emits event listeners (${y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (E.NODE_ENV !== "production" && !Wr(I) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), I = At(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(t.dirs) : t.dirs), t.transition && (E.NODE_ENV !== "production" && !Wr(I) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), $i(I, t.transition)), E.NODE_ENV !== "production" && g ? g(I) : C = I, cn(J), C;
}
const Wu = (A) => {
  const e = A.children, t = A.dynamicChildren, o = tr(e, !1);
  if (o) {
    if (E.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Wu(o);
  } else return [A, void 0];
  const n = e.indexOf(o), i = t ? t.indexOf(o) : -1, r = (s) => {
    e[n] = s, t && (i > -1 ? t[i] = s : s.patchFlag > 0 && (A.dynamicChildren = [...t, s]));
  };
  return [ae(o), r];
};
function tr(A, e = !0) {
  let t;
  for (let o = 0; o < A.length; o++) {
    const n = A[o];
    if (Tn(n)) {
      if (n.type !== ne || n.children === "v-if") {
        if (t)
          return;
        if (t = n, E.NODE_ENV !== "production" && e && t.patchFlag > 0 && t.patchFlag & 2048)
          return tr(t.children);
      }
    } else
      return;
  }
  return t;
}
const _k = (A) => {
  let e;
  for (const t in A)
    (t === "class" || t === "style" || wo(t)) && ((e || (e = {}))[t] = A[t]);
  return e;
}, Xk = (A, e) => {
  const t = {};
  for (const o in A)
    (!rn(o) || !(o.slice(9) in e)) && (t[o] = A[o]);
  return t;
}, Wr = (A) => A.shapeFlag & 7 || A.type === ne;
function qk(A, e, t) {
  const { props: o, children: n, component: i } = A, { props: r, children: s, patchFlag: l } = e, a = i.emitsOptions;
  if (E.NODE_ENV !== "production" && (n || s) && Se || e.dirs || e.transition)
    return !0;
  if (t && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? _r(o, r, a) : !!r;
    if (l & 8) {
      const S = e.dynamicProps;
      for (let u = 0; u < S.length; u++) {
        const f = S[u];
        if (r[f] !== o[f] && !Nn(a, f))
          return !0;
      }
    }
  } else
    return (n || s) && (!s || !s.$stable) ? !0 : o === r ? !1 : o ? r ? _r(o, r, a) : !0 : !!r;
  return !1;
}
function _r(A, e, t) {
  const o = Object.keys(e);
  if (o.length !== Object.keys(A).length)
    return !0;
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (e[i] !== A[i] && !Nn(t, i))
      return !0;
  }
  return !1;
}
function zk({ vnode: A, parent: e }, t) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === A && (o.el = A.el), o === A)
      (A = e.vnode).el = t, e = e.parent;
    else
      break;
  }
}
const _u = {}, Xu = () => Object.create(_u), qu = (A) => Object.getPrototypeOf(A) === _u;
function Zk(A, e, t, o = !1) {
  const n = {}, i = Xu();
  A.propsDefaults = /* @__PURE__ */ Object.create(null), zu(A, e, n, i);
  for (const r in A.propsOptions[0])
    r in n || (n[r] = void 0);
  E.NODE_ENV !== "production" && $u(e || {}, n, A), t ? A.props = o ? n : Mc(n) : A.type.props ? A.props = n : A.props = i, A.attrs = i;
}
function $k(A) {
  for (; A; ) {
    if (A.type.__hmrId) return !0;
    A = A.parent;
  }
}
function Af(A, e, t, o) {
  const {
    props: n,
    attrs: i,
    vnode: { patchFlag: r }
  } = A, s = Z(n), [l] = A.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(E.NODE_ENV !== "production" && $k(A)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const S = A.vnode.dynamicProps;
      for (let u = 0; u < S.length; u++) {
        let f = S[u];
        if (Nn(A.emitsOptions, f))
          continue;
        const k = e[f];
        if (l)
          if (oA(i, f))
            k !== i[f] && (i[f] = k, a = !0);
          else {
            const p = ZA(f);
            n[p] = Qi(
              l,
              s,
              p,
              k,
              A,
              !1
            );
          }
        else
          k !== i[f] && (i[f] = k, a = !0);
      }
    }
  } else {
    zu(A, e, n, i) && (a = !0);
    let S;
    for (const u in s)
      (!e || // for camelCase
      !oA(e, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((S = ee(u)) === u || !oA(e, S))) && (l ? t && // for camelCase
      (t[u] !== void 0 || // for kebab-case
      t[S] !== void 0) && (n[u] = Qi(
        l,
        s,
        u,
        void 0,
        A,
        !0
      )) : delete n[u]);
    if (i !== s)
      for (const u in i)
        (!e || !oA(e, u)) && (delete i[u], a = !0);
  }
  a && ve(A.attrs, "set", ""), E.NODE_ENV !== "production" && $u(e || {}, n, A);
}
function zu(A, e, t, o) {
  const [n, i] = A.propsOptions;
  let r = !1, s;
  if (e)
    for (let l in e) {
      if (so(l))
        continue;
      const a = e[l];
      let S;
      n && oA(n, S = ZA(l)) ? !i || !i.includes(S) ? t[S] = a : (s || (s = {}))[S] = a : Nn(A.emitsOptions, l) || (!(l in o) || a !== o[l]) && (o[l] = a, r = !0);
    }
  if (i) {
    const l = Z(t), a = s || aA;
    for (let S = 0; S < i.length; S++) {
      const u = i[S];
      t[u] = Qi(
        n,
        l,
        u,
        a[u],
        A,
        !oA(a, u)
      );
    }
  }
  return r;
}
function Qi(A, e, t, o, n, i) {
  const r = A[t];
  if (r != null) {
    const s = oA(r, "default");
    if (s && o === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && q(l)) {
        const { propsDefaults: a } = n;
        if (t in a)
          o = a[t];
        else {
          const S = Mo(n);
          o = a[t] = l.call(
            null,
            e
          ), S();
        }
      } else
        o = l;
      n.ce && n.ce._setProp(t, o);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !s ? o = !1 : r[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ee(t)) && (o = !0));
  }
  return o;
}
const ef = /* @__PURE__ */ new WeakMap();
function Zu(A, e, t = !1) {
  const o = t ? ef : e.propsCache, n = o.get(A);
  if (n)
    return n;
  const i = A.props, r = {}, s = [];
  let l = !1;
  if (!q(A)) {
    const S = (u) => {
      l = !0;
      const [f, k] = Zu(u, e, !0);
      CA(r, f), k && s.push(...k);
    };
    !t && e.mixins.length && e.mixins.forEach(S), A.extends && S(A.extends), A.mixins && A.mixins.forEach(S);
  }
  if (!i && !l)
    return lA(A) && o.set(A, Ut), Ut;
  if (G(i))
    for (let S = 0; S < i.length; S++) {
      E.NODE_ENV !== "production" && !EA(i[S]) && M("props must be strings when using array syntax.", i[S]);
      const u = ZA(i[S]);
      Xr(u) && (r[u] = aA);
    }
  else if (i) {
    E.NODE_ENV !== "production" && !lA(i) && M("invalid props options", i);
    for (const S in i) {
      const u = ZA(S);
      if (Xr(u)) {
        const f = i[S], k = r[u] = G(f) || q(f) ? { type: f } : CA({}, f), p = k.type;
        let B = !1, J = !0;
        if (G(p))
          for (let C = 0; C < p.length; ++C) {
            const h = p[C], I = q(h) && h.name;
            if (I === "Boolean") {
              B = !0;
              break;
            } else I === "String" && (J = !1);
          }
        else
          B = q(p) && p.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = B, k[
          1
          /* shouldCastTrue */
        ] = J, (B || oA(k, "default")) && s.push(u);
      }
    }
  }
  const a = [r, s];
  return lA(A) && o.set(A, a), a;
}
function Xr(A) {
  return A[0] !== "$" && !so(A) ? !0 : (E.NODE_ENV !== "production" && M(`Invalid prop name: "${A}" is a reserved property.`), !1);
}
function tf(A) {
  return A === null ? "null" : typeof A == "function" ? A.name || "" : typeof A == "object" && A.constructor && A.constructor.name || "";
}
function $u(A, e, t) {
  const o = Z(e), n = t.propsOptions[0], i = Object.keys(A).map((r) => ZA(r));
  for (const r in n) {
    let s = n[r];
    s != null && of(
      r,
      o[r],
      s,
      E.NODE_ENV !== "production" ? De(o) : o,
      !i.includes(r)
    );
  }
}
function of(A, e, t, o, n) {
  const { type: i, required: r, validator: s, skipCheck: l } = t;
  if (r && n) {
    M('Missing required prop: "' + A + '"');
    return;
  }
  if (!(e == null && !r)) {
    if (i != null && i !== !0 && !l) {
      let a = !1;
      const S = G(i) ? i : [i], u = [];
      for (let f = 0; f < S.length && !a; f++) {
        const { valid: k, expectedType: p } = rf(e, S[f]);
        u.push(p || ""), a = k;
      }
      if (!a) {
        M(sf(A, e, u));
        return;
      }
    }
    s && !s(e, o) && M('Invalid prop: custom validator check failed for prop "' + A + '".');
  }
}
const nf = /* @__PURE__ */ Pe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function rf(A, e) {
  let t;
  const o = tf(e);
  if (o === "null")
    t = A === null;
  else if (nf(o)) {
    const n = typeof A;
    t = n === o.toLowerCase(), !t && n === "object" && (t = A instanceof e);
  } else o === "Object" ? t = lA(A) : o === "Array" ? t = G(A) : t = A instanceof e;
  return {
    valid: t,
    expectedType: o
  };
}
function sf(A, e, t) {
  if (t.length === 0)
    return `Prop type [] for prop "${A}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${A}". Expected ${t.map(Jn).join(" | ")}`;
  const n = t[0], i = Yi(e), r = qr(e, n), s = qr(e, i);
  return t.length === 1 && zr(n) && !lf(n, i) && (o += ` with value ${r}`), o += `, got ${i} `, zr(i) && (o += `with value ${s}.`), o;
}
function qr(A, e) {
  return e === "String" ? `"${A}"` : e === "Number" ? `${Number(A)}` : `${A}`;
}
function zr(A) {
  return ["string", "number", "boolean"].some((t) => A.toLowerCase() === t);
}
function lf(...A) {
  return A.some((e) => e.toLowerCase() === "boolean");
}
const or = (A) => A === "_" || A === "_ctx" || A === "$stable", nr = (A) => G(A) ? A.map(ae) : [ae(A)], uf = (A, e, t) => {
  if (e._n)
    return e;
  const o = kk((...n) => (E.NODE_ENV !== "production" && mA && !(t === null && GA) && !(t && t.root !== mA.root) && M(
    `Slot "${A}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), nr(e(...n))), t);
  return o._c = !1, o;
}, Aa = (A, e, t) => {
  const o = A._ctx;
  for (const n in A) {
    if (or(n)) continue;
    const i = A[n];
    if (q(i))
      e[n] = uf(n, i, o);
    else if (i != null) {
      E.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${n}". Prefer function slots for better performance.`
      );
      const r = nr(i);
      e[n] = () => r;
    }
  }
}, ea = (A, e) => {
  E.NODE_ENV !== "production" && !Ar(A.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = nr(e);
  A.slots.default = () => t;
}, Bi = (A, e, t) => {
  for (const o in e)
    (t || !or(o)) && (A[o] = e[o]);
}, af = (A, e, t) => {
  const o = A.slots = Xu();
  if (A.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (Bi(o, e, t), t && sn(o, "_", n, !0)) : Aa(e, o);
  } else e && ea(A, e);
}, Sf = (A, e, t) => {
  const { vnode: o, slots: n } = A;
  let i = !0, r = aA;
  if (o.shapeFlag & 32) {
    const s = e._;
    s ? E.NODE_ENV !== "production" && Se ? (Bi(n, e, t), ve(A, "set", "$slots")) : t && s === 1 ? i = !1 : Bi(n, e, t) : (i = !e.$stable, Aa(e, n)), r = e;
  } else e && (ea(A, e), r = { default: 1 });
  if (i)
    for (const s in n)
      !or(s) && r[s] == null && delete n[s];
};
let Ao, Me;
function Qt(A, e) {
  A.appContext.config.performance && dn() && Me.mark(`vue-${e}-${A.uid}`), E.NODE_ENV !== "production" && ak(A, e, dn() ? Me.now() : Date.now());
}
function Bt(A, e) {
  if (A.appContext.config.performance && dn()) {
    const t = `vue-${e}-${A.uid}`, o = t + ":end", n = `<${Ro(A, A.type)}> ${e}`;
    Me.mark(o), Me.measure(n, t, o), Me.clearMeasures(n), Me.clearMarks(t), Me.clearMarks(o);
  }
  E.NODE_ENV !== "production" && Sk(A, e, dn() ? Me.now() : Date.now());
}
function dn() {
  return Ao !== void 0 || (typeof window < "u" && window.performance ? (Ao = !0, Me = window.performance) : Ao = !1), Ao;
}
function cf() {
  const A = [];
  if (E.NODE_ENV !== "production" && A.length) {
    const e = A.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${A.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const $A = pf;
function kf(A) {
  return ff(A);
}
function ff(A, e) {
  cf();
  const t = Fo();
  t.__VUE__ = !0, E.NODE_ENV !== "production" && wu(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: o,
    remove: n,
    patchProp: i,
    createElement: r,
    createText: s,
    createComment: l,
    setText: a,
    setElementText: S,
    parentNode: u,
    nextSibling: f,
    setScopeId: k = vA,
    insertStaticContent: p
  } = A, B = (c, d, v, K = null, w = null, x = null, V = void 0, N = null, T = E.NODE_ENV !== "production" && Se ? !1 : !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !eo(c, d) && (K = Lo(c), _A(c, w, x, !0), c = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: F, ref: X, shapeFlag: H } = d;
    switch (F) {
      case To:
        J(c, d, v, K);
        break;
      case ne:
        C(c, d, v, K);
        break;
      case qo:
        c == null ? h(d, v, K, V) : E.NODE_ENV !== "production" && I(c, d, v, V);
        break;
      case QA:
        rA(
          c,
          d,
          v,
          K,
          w,
          x,
          V,
          N,
          T
        );
        break;
      default:
        H & 1 ? R(
          c,
          d,
          v,
          K,
          w,
          x,
          V,
          N,
          T
        ) : H & 6 ? hA(
          c,
          d,
          v,
          K,
          w,
          x,
          V,
          N,
          T
        ) : H & 64 || H & 128 ? F.process(
          c,
          d,
          v,
          K,
          w,
          x,
          V,
          N,
          T,
          zt
        ) : E.NODE_ENV !== "production" && M("Invalid VNode type:", F, `(${typeof F})`);
    }
    X != null && w ? So(X, c && c.ref, x, d || c, !d) : X == null && c && c.ref != null && So(c.ref, null, x, c, !0);
  }, J = (c, d, v, K) => {
    if (c == null)
      o(
        d.el = s(d.children),
        v,
        K
      );
    else {
      const w = d.el = c.el;
      if (d.children !== c.children)
        if (E.NODE_ENV !== "production" && Se && d.patchFlag === -1 && "__elIndex" in c) {
          const x = v.childNodes, V = s(d.children), N = x[d.__elIndex = c.__elIndex];
          o(V, v, N), n(N);
        } else
          a(w, d.children);
    }
  }, C = (c, d, v, K) => {
    c == null ? o(
      d.el = l(d.children || ""),
      v,
      K
    ) : d.el = c.el;
  }, h = (c, d, v, K) => {
    [c.el, c.anchor] = p(
      c.children,
      d,
      v,
      K,
      c.el,
      c.anchor
    );
  }, I = (c, d, v, K) => {
    if (d.children !== c.children) {
      const w = f(c.anchor);
      Q(c), [d.el, d.anchor] = p(
        d.children,
        v,
        w,
        K
      );
    } else
      d.el = c.el, d.anchor = c.anchor;
  }, g = ({ el: c, anchor: d }, v, K) => {
    let w;
    for (; c && c !== d; )
      w = f(c), o(c, v, K), c = w;
    o(d, v, K);
  }, Q = ({ el: c, anchor: d }) => {
    let v;
    for (; c && c !== d; )
      v = f(c), n(c), c = v;
    n(d);
  }, R = (c, d, v, K, w, x, V, N, T) => {
    if (d.type === "svg" ? V = "svg" : d.type === "math" && (V = "mathml"), c == null)
      m(
        d,
        v,
        K,
        w,
        x,
        V,
        N,
        T
      );
    else {
      const F = c.el && c.el._isVueCE ? c.el : null;
      try {
        F && F._beginPatch(), O(
          c,
          d,
          w,
          x,
          V,
          N,
          T
        );
      } finally {
        F && F._endPatch();
      }
    }
  }, m = (c, d, v, K, w, x, V, N) => {
    let T, F;
    const { props: X, shapeFlag: H, transition: _, dirs: $ } = c;
    if (T = c.el = r(
      c.type,
      x,
      X && X.is,
      X
    ), H & 8 ? S(T, c.children) : H & 16 && L(
      c.children,
      T,
      null,
      K,
      w,
      Ai(c, x),
      V,
      N
    ), $ && ot(c, null, K, "created"), y(T, c, c.scopeId, V, K), X) {
      for (const fA in X)
        fA !== "value" && !so(fA) && i(T, fA, null, X[fA], x, K);
      "value" in X && i(T, "value", null, X.value, x), (F = X.onVnodeBeforeMount) && Ie(F, K, c);
    }
    E.NODE_ENV !== "production" && (sn(T, "__vnode", c, !0), sn(T, "__vueParentComponent", K, !0)), $ && ot(c, null, K, "beforeMount");
    const iA = gf(w, _);
    iA && _.beforeEnter(T), o(T, d, v), ((F = X && X.onVnodeMounted) || iA || $) && $A(() => {
      F && Ie(F, K, c), iA && _.enter(T), $ && ot(c, null, K, "mounted");
    }, w);
  }, y = (c, d, v, K, w) => {
    if (v && k(c, v), K)
      for (let x = 0; x < K.length; x++)
        k(c, K[x]);
    if (w) {
      let x = w.subTree;
      if (E.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && (x = tr(x.children) || x), d === x || na(x.type) && (x.ssContent === d || x.ssFallback === d)) {
        const V = w.vnode;
        y(
          c,
          V,
          V.scopeId,
          V.slotScopeIds,
          w.parent
        );
      }
    }
  }, L = (c, d, v, K, w, x, V, N, T = 0) => {
    for (let F = T; F < c.length; F++) {
      const X = c[F] = N ? We(c[F]) : ae(c[F]);
      B(
        null,
        X,
        d,
        v,
        K,
        w,
        x,
        V,
        N
      );
    }
  }, O = (c, d, v, K, w, x, V) => {
    const N = d.el = c.el;
    E.NODE_ENV !== "production" && (N.__vnode = d);
    let { patchFlag: T, dynamicChildren: F, dirs: X } = d;
    T |= c.patchFlag & 16;
    const H = c.props || aA, _ = d.props || aA;
    let $;
    if (v && nt(v, !1), ($ = _.onVnodeBeforeUpdate) && Ie($, v, d, c), X && ot(d, c, v, "beforeUpdate"), v && nt(v, !0), E.NODE_ENV !== "production" && Se && (T = 0, V = !1, F = null), (H.innerHTML && _.innerHTML == null || H.textContent && _.textContent == null) && S(N, ""), F ? (D(
      c.dynamicChildren,
      F,
      N,
      v,
      K,
      Ai(d, w),
      x
    ), E.NODE_ENV !== "production" && Xo(c, d)) : V || nA(
      c,
      d,
      N,
      null,
      v,
      K,
      Ai(d, w),
      x,
      !1
    ), T > 0) {
      if (T & 16)
        j(N, H, _, v, w);
      else if (T & 2 && H.class !== _.class && i(N, "class", null, _.class, w), T & 4 && i(N, "style", H.style, _.style, w), T & 8) {
        const iA = d.dynamicProps;
        for (let fA = 0; fA < iA.length; fA++) {
          const cA = iA[fA], XA = H[cA], qA = _[cA];
          (qA !== XA || cA === "value") && i(N, cA, XA, qA, w, v);
        }
      }
      T & 1 && c.children !== d.children && S(N, d.children);
    } else !V && F == null && j(N, H, _, v, w);
    (($ = _.onVnodeUpdated) || X) && $A(() => {
      $ && Ie($, v, d, c), X && ot(d, c, v, "updated");
    }, K);
  }, D = (c, d, v, K, w, x, V) => {
    for (let N = 0; N < d.length; N++) {
      const T = c[N], F = d[N], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === QA || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !eo(T, F) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? u(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      B(
        T,
        F,
        X,
        null,
        K,
        w,
        x,
        V,
        !0
      );
    }
  }, j = (c, d, v, K, w) => {
    if (d !== v) {
      if (d !== aA)
        for (const x in d)
          !so(x) && !(x in v) && i(
            c,
            x,
            d[x],
            null,
            w,
            K
          );
      for (const x in v) {
        if (so(x)) continue;
        const V = v[x], N = d[x];
        V !== N && x !== "value" && i(c, x, N, V, w, K);
      }
      "value" in v && i(c, "value", d.value, v.value, w);
    }
  }, rA = (c, d, v, K, w, x, V, N, T) => {
    const F = d.el = c ? c.el : s(""), X = d.anchor = c ? c.anchor : s("");
    let { patchFlag: H, dynamicChildren: _, slotScopeIds: $ } = d;
    E.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Se || H & 2048) && (H = 0, T = !1, _ = null), $ && (N = N ? N.concat($) : $), c == null ? (o(F, v, K), o(X, v, K), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      X,
      w,
      x,
      V,
      N,
      T
    )) : H > 0 && H & 64 && _ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === _.length ? (D(
      c.dynamicChildren,
      _,
      v,
      w,
      x,
      V,
      N
    ), E.NODE_ENV !== "production" ? Xo(c, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || w && d === w.subTree) && Xo(
        c,
        d,
        !0
        /* shallow */
      )
    )) : nA(
      c,
      d,
      v,
      X,
      w,
      x,
      V,
      N,
      T
    );
  }, hA = (c, d, v, K, w, x, V, N, T) => {
    d.slotScopeIds = N, c == null ? d.shapeFlag & 512 ? w.ctx.activate(
      d,
      v,
      K,
      V,
      T
    ) : pA(
      d,
      v,
      K,
      w,
      x,
      V,
      T
    ) : sA(c, d, T);
  }, pA = (c, d, v, K, w, x, V) => {
    const N = c.component = mf(
      c,
      K,
      w
    );
    if (E.NODE_ENV !== "production" && N.type.__hmrId && ek(N), E.NODE_ENV !== "production" && (Go(c), Qt(N, "mount")), Ar(c) && (N.ctx.renderer = zt), E.NODE_ENV !== "production" && Qt(N, "init"), vf(N, !1, V), E.NODE_ENV !== "production" && Bt(N, "init"), E.NODE_ENV !== "production" && Se && (c.el = null), N.asyncDep) {
      if (w && w.registerDep(N, P, V), !c.el) {
        const T = N.subTree = ie(ne);
        C(null, T, d, v), c.placeholder = T.el;
      }
    } else
      P(
        N,
        c,
        d,
        v,
        w,
        x,
        V
      );
    E.NODE_ENV !== "production" && (Wo(), Bt(N, "mount"));
  }, sA = (c, d, v) => {
    const K = d.component = c.component;
    if (qk(c, d, v))
      if (K.asyncDep && !K.asyncResolved) {
        E.NODE_ENV !== "production" && Go(d), z(K, d, v), E.NODE_ENV !== "production" && Wo();
        return;
      } else
        K.next = d, K.update();
    else
      d.el = c.el, K.vnode = d;
  }, P = (c, d, v, K, w, x, V) => {
    const N = () => {
      if (c.isMounted) {
        let { next: H, bu: _, u: $, parent: iA, vnode: fA } = c;
        {
          const Qe = ta(c);
          if (Qe) {
            H && (H.el = fA.el, z(c, H, V)), Qe.asyncDep.then(() => {
              c.isUnmounted || N();
            });
            return;
          }
        }
        let cA = H, XA;
        E.NODE_ENV !== "production" && Go(H || c.vnode), nt(c, !1), H ? (H.el = fA.el, z(c, H, V)) : H = fA, _ && yt(_), (XA = H.props && H.props.onVnodeBeforeUpdate) && Ie(XA, iA, H, fA), nt(c, !0), E.NODE_ENV !== "production" && Qt(c, "render");
        const qA = Gr(c);
        E.NODE_ENV !== "production" && Bt(c, "render");
        const he = c.subTree;
        c.subTree = qA, E.NODE_ENV !== "production" && Qt(c, "patch"), B(
          he,
          qA,
          // parent may have changed if it's in a teleport
          u(he.el),
          // anchor may have changed if it's in a fragment
          Lo(he),
          c,
          w,
          x
        ), E.NODE_ENV !== "production" && Bt(c, "patch"), H.el = qA.el, cA === null && zk(c, qA.el), $ && $A($, w), (XA = H.props && H.props.onVnodeUpdated) && $A(
          () => Ie(XA, iA, H, fA),
          w
        ), E.NODE_ENV !== "production" && Uu(c), E.NODE_ENV !== "production" && Wo();
      } else {
        let H;
        const { el: _, props: $ } = d, { bm: iA, m: fA, parent: cA, root: XA, type: qA } = c, he = co(d);
        nt(c, !1), iA && yt(iA), !he && (H = $ && $.onVnodeBeforeMount) && Ie(H, cA, d), nt(c, !0);
        {
          XA.ce && // @ts-expect-error _def is private
          XA.ce._def.shadowRoot !== !1 && XA.ce._injectChildStyle(qA), E.NODE_ENV !== "production" && Qt(c, "render");
          const Qe = c.subTree = Gr(c);
          E.NODE_ENV !== "production" && Bt(c, "render"), E.NODE_ENV !== "production" && Qt(c, "patch"), B(
            null,
            Qe,
            v,
            K,
            c,
            w,
            x
          ), E.NODE_ENV !== "production" && Bt(c, "patch"), d.el = Qe.el;
        }
        if (fA && $A(fA, w), !he && (H = $ && $.onVnodeMounted)) {
          const Qe = d;
          $A(
            () => Ie(H, cA, Qe),
            w
          );
        }
        (d.shapeFlag & 256 || cA && co(cA.vnode) && cA.vnode.shapeFlag & 256) && c.a && $A(c.a, w), c.isMounted = !0, E.NODE_ENV !== "production" && sk(c), d = v = K = null;
      }
    };
    c.scope.on();
    const T = c.effect = new ru(N);
    c.scope.off();
    const F = c.update = T.run.bind(T), X = c.job = T.runIfDirty.bind(T);
    X.i = c, X.id = c.uid, T.scheduler = () => Kn(X), nt(c, !0), E.NODE_ENV !== "production" && (T.onTrack = c.rtc ? (H) => yt(c.rtc, H) : void 0, T.onTrigger = c.rtg ? (H) => yt(c.rtg, H) : void 0), F();
  }, z = (c, d, v) => {
    d.component = c;
    const K = c.vnode.props;
    c.vnode = d, c.next = null, Af(c, d.props, K, v), Sf(c, d.children, v), ge(), Mr(c), de();
  }, nA = (c, d, v, K, w, x, V, N, T = !1) => {
    const F = c && c.children, X = c ? c.shapeFlag : 0, H = d.children, { patchFlag: _, shapeFlag: $ } = d;
    if (_ > 0) {
      if (_ & 128) {
        WA(
          F,
          H,
          v,
          K,
          w,
          x,
          V,
          N,
          T
        );
        return;
      } else if (_ & 256) {
        Ee(
          F,
          H,
          v,
          K,
          w,
          x,
          V,
          N,
          T
        );
        return;
      }
    }
    $ & 8 ? (X & 16 && qt(F, w, x), H !== F && S(v, H)) : X & 16 ? $ & 16 ? WA(
      F,
      H,
      v,
      K,
      w,
      x,
      V,
      N,
      T
    ) : qt(F, w, x, !0) : (X & 8 && S(v, ""), $ & 16 && L(
      H,
      v,
      K,
      w,
      x,
      V,
      N,
      T
    ));
  }, Ee = (c, d, v, K, w, x, V, N, T) => {
    c = c || Ut, d = d || Ut;
    const F = c.length, X = d.length, H = Math.min(F, X);
    let _;
    for (_ = 0; _ < H; _++) {
      const $ = d[_] = T ? We(d[_]) : ae(d[_]);
      B(
        c[_],
        $,
        v,
        null,
        w,
        x,
        V,
        N,
        T
      );
    }
    F > X ? qt(
      c,
      w,
      x,
      !0,
      !1,
      H
    ) : L(
      d,
      v,
      K,
      w,
      x,
      V,
      N,
      T,
      H
    );
  }, WA = (c, d, v, K, w, x, V, N, T) => {
    let F = 0;
    const X = d.length;
    let H = c.length - 1, _ = X - 1;
    for (; F <= H && F <= _; ) {
      const $ = c[F], iA = d[F] = T ? We(d[F]) : ae(d[F]);
      if (eo($, iA))
        B(
          $,
          iA,
          v,
          null,
          w,
          x,
          V,
          N,
          T
        );
      else
        break;
      F++;
    }
    for (; F <= H && F <= _; ) {
      const $ = c[H], iA = d[_] = T ? We(d[_]) : ae(d[_]);
      if (eo($, iA))
        B(
          $,
          iA,
          v,
          null,
          w,
          x,
          V,
          N,
          T
        );
      else
        break;
      H--, _--;
    }
    if (F > H) {
      if (F <= _) {
        const $ = _ + 1, iA = $ < X ? d[$].el : K;
        for (; F <= _; )
          B(
            null,
            d[F] = T ? We(d[F]) : ae(d[F]),
            v,
            iA,
            w,
            x,
            V,
            N,
            T
          ), F++;
      }
    } else if (F > _)
      for (; F <= H; )
        _A(c[F], w, x, !0), F++;
    else {
      const $ = F, iA = F, fA = /* @__PURE__ */ new Map();
      for (F = iA; F <= _; F++) {
        const VA = d[F] = T ? We(d[F]) : ae(d[F]);
        VA.key != null && (E.NODE_ENV !== "production" && fA.has(VA.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(VA.key),
          "Make sure keys are unique."
        ), fA.set(VA.key, F));
      }
      let cA, XA = 0;
      const qA = _ - iA + 1;
      let he = !1, Qe = 0;
      const Zt = new Array(qA);
      for (F = 0; F < qA; F++) Zt[F] = 0;
      for (F = $; F <= H; F++) {
        const VA = c[F];
        if (XA >= qA) {
          _A(VA, w, x, !0);
          continue;
        }
        let Be;
        if (VA.key != null)
          Be = fA.get(VA.key);
        else
          for (cA = iA; cA <= _; cA++)
            if (Zt[cA - iA] === 0 && eo(VA, d[cA])) {
              Be = cA;
              break;
            }
        Be === void 0 ? _A(VA, w, x, !0) : (Zt[Be - iA] = F + 1, Be >= Qe ? Qe = Be : he = !0, B(
          VA,
          d[Be],
          v,
          null,
          w,
          x,
          V,
          N,
          T
        ), XA++);
      }
      const Jr = he ? df(Zt) : Ut;
      for (cA = Jr.length - 1, F = qA - 1; F >= 0; F--) {
        const VA = iA + F, Be = d[VA], xr = d[VA + 1], Dr = VA + 1 < X ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xr.el || oa(xr)
        ) : K;
        Zt[F] === 0 ? B(
          null,
          Be,
          v,
          Dr,
          w,
          x,
          V,
          N,
          T
        ) : he && (cA < 0 || F !== Jr[cA] ? xA(Be, v, Dr, 2) : cA--);
      }
    }
  }, xA = (c, d, v, K, w = null) => {
    const { el: x, type: V, transition: N, children: T, shapeFlag: F } = c;
    if (F & 6) {
      xA(c.component.subTree, d, v, K);
      return;
    }
    if (F & 128) {
      c.suspense.move(d, v, K);
      return;
    }
    if (F & 64) {
      V.move(c, d, v, zt);
      return;
    }
    if (V === QA) {
      o(x, d, v);
      for (let H = 0; H < T.length; H++)
        xA(T[H], d, v, K);
      o(c.anchor, d, v);
      return;
    }
    if (V === qo) {
      g(c, d, v);
      return;
    }
    if (K !== 2 && F & 1 && N)
      if (K === 0)
        N.beforeEnter(x), o(x, d, v), $A(() => N.enter(x), w);
      else {
        const { leave: H, delayLeave: _, afterLeave: $ } = N, iA = () => {
          c.ctx.isUnmounted ? n(x) : o(x, d, v);
        }, fA = () => {
          x._isLeaving && x[Qk](
            !0
            /* cancelled */
          ), H(x, () => {
            iA(), $ && $();
          });
        };
        _ ? _(x, iA, fA) : fA();
      }
    else
      o(x, d, v);
  }, _A = (c, d, v, K = !1, w = !1) => {
    const {
      type: x,
      props: V,
      ref: N,
      children: T,
      dynamicChildren: F,
      shapeFlag: X,
      patchFlag: H,
      dirs: _,
      cacheIndex: $
    } = c;
    if (H === -2 && (w = !1), N != null && (ge(), So(N, null, v, c, !0), de()), $ != null && (d.renderCache[$] = void 0), X & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const iA = X & 1 && _, fA = !co(c);
    let cA;
    if (fA && (cA = V && V.onVnodeBeforeUnmount) && Ie(cA, d, c), X & 6)
      Ac(c.component, v, K);
    else {
      if (X & 128) {
        c.suspense.unmount(v, K);
        return;
      }
      iA && ot(c, null, d, "beforeUnmount"), X & 64 ? c.type.remove(
        c,
        d,
        v,
        zt,
        K
      ) : F && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !F.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== QA || H > 0 && H & 64) ? qt(
        F,
        d,
        v,
        !1,
        !0
      ) : (x === QA && H & 384 || !w && X & 16) && qt(T, d, v), K && Et(c);
    }
    (fA && (cA = V && V.onVnodeUnmounted) || iA) && $A(() => {
      cA && Ie(cA, d, c), iA && ot(c, null, d, "unmounted");
    }, v);
  }, Et = (c) => {
    const { type: d, el: v, anchor: K, transition: w } = c;
    if (d === QA) {
      E.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && w && !w.persisted ? c.children.forEach((V) => {
        V.type === ne ? n(V.el) : Et(V);
      }) : Xt(v, K);
      return;
    }
    if (d === qo) {
      Q(c);
      return;
    }
    const x = () => {
      n(v), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (c.shapeFlag & 1 && w && !w.persisted) {
      const { leave: V, delayLeave: N } = w, T = () => V(v, x);
      N ? N(c.el, x, T) : T();
    } else
      x();
  }, Xt = (c, d) => {
    let v;
    for (; c !== d; )
      v = f(c), n(c), c = v;
    n(d);
  }, Ac = (c, d, v) => {
    E.NODE_ENV !== "production" && c.type.__hmrId && tk(c);
    const { bum: K, scope: w, job: x, subTree: V, um: N, m: T, a: F } = c;
    Zr(T), Zr(F), K && yt(K), w.stop(), x && (x.flags |= 8, _A(V, c, d, v)), N && $A(N, d), $A(() => {
      c.isUnmounted = !0;
    }, d), E.NODE_ENV !== "production" && uk(c);
  }, qt = (c, d, v, K = !1, w = !1, x = 0) => {
    for (let V = x; V < c.length; V++)
      _A(c[V], d, v, K, w);
  }, Lo = (c) => {
    if (c.shapeFlag & 6)
      return Lo(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = f(c.anchor || c.el), v = d && d[Ek];
    return v ? f(v) : d;
  };
  let jn = !1;
  const br = (c, d, v) => {
    let K;
    c == null ? d._vnode && (_A(d._vnode, null, null, !0), K = d._vnode.component) : B(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = c, jn || (jn = !0, Mr(K), Ju(), jn = !1);
  }, zt = {
    p: B,
    um: _A,
    m: xA,
    r: Et,
    mt: pA,
    mc: L,
    pc: nA,
    pbc: D,
    n: Lo,
    o: A
  };
  return {
    render: br,
    hydrate: void 0,
    createApp: Yk(br)
  };
}
function Ai({ type: A, props: e }, t) {
  return t === "svg" && A === "foreignObject" || t === "mathml" && A === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function nt({ effect: A, job: e }, t) {
  t ? (A.flags |= 32, e.flags |= 4) : (A.flags &= -33, e.flags &= -5);
}
function gf(A, e) {
  return (!A || A && !A.pendingBranch) && e && !e.persisted;
}
function Xo(A, e, t = !1) {
  const o = A.children, n = e.children;
  if (G(o) && G(n))
    for (let i = 0; i < o.length; i++) {
      const r = o[i];
      let s = n[i];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = n[i] = We(n[i]), s.el = r.el), !t && s.patchFlag !== -2 && Xo(r, s)), s.type === To && (s.patchFlag !== -1 ? s.el = r.el : s.__elIndex = i + // take fragment start anchor into account
      (A.type === QA ? 1 : 0)), s.type === ne && !s.el && (s.el = r.el), E.NODE_ENV !== "production" && s.el && (s.el.__vnode = s);
    }
}
function df(A) {
  const e = A.slice(), t = [0];
  let o, n, i, r, s;
  const l = A.length;
  for (o = 0; o < l; o++) {
    const a = A[o];
    if (a !== 0) {
      if (n = t[t.length - 1], A[n] < a) {
        e[o] = n, t.push(o);
        continue;
      }
      for (i = 0, r = t.length - 1; i < r; )
        s = i + r >> 1, A[t[s]] < a ? i = s + 1 : r = s;
      a < A[t[i]] && (i > 0 && (e[o] = t[i - 1]), t[i] = o);
    }
  }
  for (i = t.length, r = t[i - 1]; i-- > 0; )
    t[i] = r, r = e[r];
  return t;
}
function ta(A) {
  const e = A.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : ta(e);
}
function Zr(A) {
  if (A)
    for (let e = 0; e < A.length; e++)
      A[e].flags |= 8;
}
function oa(A) {
  if (A.placeholder)
    return A.placeholder;
  const e = A.component;
  return e ? oa(e.subTree) : null;
}
const na = (A) => A.__isSuspense;
function pf(A, e) {
  e && e.pendingBranch ? G(A) ? e.effects.push(...A) : e.effects.push(A) : bu(A);
}
const QA = /* @__PURE__ */ Symbol.for("v-fgt"), To = /* @__PURE__ */ Symbol.for("v-txt"), ne = /* @__PURE__ */ Symbol.for("v-cmt"), qo = /* @__PURE__ */ Symbol.for("v-stc"), ko = [];
let oe = null;
function AA(A = !1) {
  ko.push(oe = A ? null : []);
}
function Cf() {
  ko.pop(), oe = ko[ko.length - 1] || null;
}
let ho = 1;
function $r(A, e = !1) {
  ho += A, A < 0 && oe && e && (oe.hasOnce = !0);
}
function ia(A) {
  return A.dynamicChildren = ho > 0 ? oe || Ut : null, Cf(), ho > 0 && oe && oe.push(A), A;
}
function eA(A, e, t, o, n, i) {
  return ia(
    b(
      A,
      e,
      t,
      o,
      n,
      i,
      !0
    )
  );
}
function ra(A, e, t, o, n) {
  return ia(
    ie(
      A,
      e,
      t,
      o,
      n,
      !0
    )
  );
}
function Tn(A) {
  return A ? A.__v_isVNode === !0 : !1;
}
function eo(A, e) {
  if (E.NODE_ENV !== "production" && e.shapeFlag & 6 && A.component) {
    const t = _o.get(e.type);
    if (t && t.has(A.component))
      return A.shapeFlag &= -257, e.shapeFlag &= -513, !1;
  }
  return A.type === e.type && A.key === e.key;
}
const Ef = (...A) => la(
  ...A
), sa = ({ key: A }) => A ?? null, zo = ({
  ref: A,
  ref_key: e,
  ref_for: t
}) => (typeof A == "number" && (A = "" + A), A != null ? EA(A) || kA(A) || q(A) ? { i: GA, r: A, k: e, f: !!t } : A : null);
function b(A, e = null, t = null, o = 0, n = null, i = A === QA ? 0 : 1, r = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: e,
    key: e && sa(e),
    ref: e && zo(e),
    scopeId: Ku,
    slotScopeIds: null,
    children: t,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: GA
  };
  return s ? (ir(l, t), i & 128 && A.normalize(l)) : t && (l.shapeFlag |= EA(t) ? 8 : 16), E.NODE_ENV !== "production" && l.key !== l.key && M("VNode created with invalid key (NaN). VNode type:", l.type), ho > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && oe.push(l), l;
}
const ie = E.NODE_ENV !== "production" ? Ef : la;
function la(A, e = null, t = null, o = 0, n = null, i = !1) {
  if ((!A || A === Fk) && (E.NODE_ENV !== "production" && !A && M(`Invalid vnode type when creating vnode: ${A}.`), A = ne), Tn(A)) {
    const s = At(
      A,
      e,
      !0
      /* mergeRef: true */
    );
    return t && ir(s, t), ho > 0 && !i && oe && (s.shapeFlag & 6 ? oe[oe.indexOf(A)] = s : oe.push(s)), s.patchFlag = -2, s;
  }
  if (fa(A) && (A = A.__vccOpts), e) {
    e = hf(e);
    let { class: s, style: l } = e;
    s && !EA(s) && (e.class = Ot(s)), lA(l) && (Nt(l) && !G(l) && (l = CA({}, l)), e.style = xe(l));
  }
  const r = EA(A) ? 1 : na(A) ? 128 : hk(A) ? 64 : lA(A) ? 4 : q(A) ? 2 : 0;
  return E.NODE_ENV !== "production" && r & 4 && Nt(A) && (A = Z(A), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    A
  )), b(
    A,
    e,
    t,
    o,
    n,
    r,
    i,
    !0
  );
}
function hf(A) {
  return A ? Nt(A) || qu(A) ? CA({}, A) : A : null;
}
function At(A, e, t = !1, o = !1) {
  const { props: n, ref: i, patchFlag: r, children: s, transition: l } = A, a = e ? Qf(n || {}, e) : n, S = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A.type,
    props: a,
    key: a && sa(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && i ? G(i) ? i.concat(zo(e)) : [i, zo(e)] : zo(e)
    ) : i,
    scopeId: A.scopeId,
    slotScopeIds: A.slotScopeIds,
    children: E.NODE_ENV !== "production" && r === -1 && G(s) ? s.map(ua) : s,
    target: A.target,
    targetStart: A.targetStart,
    targetAnchor: A.targetAnchor,
    staticCount: A.staticCount,
    shapeFlag: A.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && A.type !== QA ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: A.dynamicProps,
    dynamicChildren: A.dynamicChildren,
    appContext: A.appContext,
    dirs: A.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: A.component,
    suspense: A.suspense,
    ssContent: A.ssContent && At(A.ssContent),
    ssFallback: A.ssFallback && At(A.ssFallback),
    placeholder: A.placeholder,
    el: A.el,
    anchor: A.anchor,
    ctx: A.ctx,
    ce: A.ce
  };
  return l && o && $i(
    S,
    l.clone(S)
  ), S;
}
function ua(A) {
  const e = At(A);
  return G(A.children) && (e.children = A.children.map(ua)), e;
}
function aa(A = " ", e = 0) {
  return ie(To, null, A, e);
}
function ce(A = "", e = !1) {
  return e ? (AA(), ra(ne, null, A)) : ie(ne, null, A);
}
function ae(A) {
  return A == null || typeof A == "boolean" ? ie(ne) : G(A) ? ie(
    QA,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : Tn(A) ? We(A) : ie(To, null, String(A));
}
function We(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : At(A);
}
function ir(A, e) {
  let t = 0;
  const { shapeFlag: o } = A;
  if (e == null)
    e = null;
  else if (G(e))
    t = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), ir(A, n()), n._c && (n._d = !0));
      return;
    } else {
      t = 32;
      const n = e._;
      !n && !qu(e) ? e._ctx = GA : n === 3 && GA && (GA.slots._ === 1 ? e._ = 1 : (e._ = 2, A.patchFlag |= 1024));
    }
  else q(e) ? (e = { default: e, _ctx: GA }, t = 32) : (e = String(e), o & 64 ? (t = 16, e = [aa(e)]) : t = 8);
  A.children = e, A.shapeFlag |= t;
}
function Qf(...A) {
  const e = {};
  for (let t = 0; t < A.length; t++) {
    const o = A[t];
    for (const n in o)
      if (n === "class")
        e.class !== o.class && (e.class = Ot([e.class, o.class]));
      else if (n === "style")
        e.style = xe([e.style, o.style]);
      else if (wo(n)) {
        const i = e[n], r = o[n];
        r && i !== r && !(G(i) && i.includes(r)) && (e[n] = i ? [].concat(i, r) : r);
      } else n !== "" && (e[n] = o[n]);
  }
  return e;
}
function Ie(A, e, t, o = null) {
  Ke(A, e, 7, [
    t,
    o
  ]);
}
const Bf = ju();
let If = 0;
function mf(A, e, t) {
  const o = A.type, n = (e ? e.appContext : A.appContext) || Bf, i = {
    uid: If++,
    vnode: A,
    type: o,
    parent: e,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ou(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(n.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zu(o, n),
    emitsOptions: Gu(o, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: aA,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: aA,
    data: aA,
    props: aA,
    attrs: aA,
    slots: aA,
    refs: aA,
    setupState: aA,
    setupContext: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
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
  return E.NODE_ENV !== "production" ? i.ctx = Kk(i) : i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = Gk.bind(null, i), A.ce && A.ce(i), i;
}
let mA = null;
const Mn = () => mA || GA;
let pn, Ii;
{
  const A = Fo(), e = (t, o) => {
    let n;
    return (n = A[t]) || (n = A[t] = []), n.push(o), (i) => {
      n.length > 1 ? n.forEach((r) => r(i)) : n[0](i);
    };
  };
  pn = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => mA = t
  ), Ii = e(
    "__VUE_SSR_SETTERS__",
    (t) => Qo = t
  );
}
const Mo = (A) => {
  const e = mA;
  return pn(A), A.scope.on(), () => {
    A.scope.off(), pn(e);
  };
}, As = () => {
  mA && mA.scope.off(), pn(null);
}, yf = /* @__PURE__ */ Pe("slot,component");
function mi(A, { isNativeTag: e }) {
  (yf(A) || e(A)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + A
  );
}
function Sa(A) {
  return A.vnode.shapeFlag & 4;
}
let Qo = !1;
function vf(A, e = !1, t = !1) {
  e && Ii(e);
  const { props: o, children: n } = A.vnode, i = Sa(A);
  Zk(A, o, i, e), af(A, n, t || e);
  const r = i ? bf(A, e) : void 0;
  return e && Ii(!1), r;
}
function bf(A, e) {
  const t = A.type;
  if (E.NODE_ENV !== "production") {
    if (t.name && mi(t.name, A.appContext.config), t.components) {
      const n = Object.keys(t.components);
      for (let i = 0; i < n.length; i++)
        mi(n[i], A.appContext.config);
    }
    if (t.directives) {
      const n = Object.keys(t.directives);
      for (let i = 0; i < n.length; i++)
        Ou(n[i]);
    }
    t.compilerOptions && Jf() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  A.accessCache = /* @__PURE__ */ Object.create(null), A.proxy = new Proxy(A.ctx, Hu), E.NODE_ENV !== "production" && Ok(A);
  const { setup: o } = t;
  if (o) {
    ge();
    const n = A.setupContext = o.length > 1 ? Df(A) : null, i = Mo(A), r = jt(
      o,
      A,
      0,
      [
        E.NODE_ENV !== "production" ? De(A.props) : A.props,
        n
      ]
    ), s = Pi(r);
    if (de(), i(), (s || A.sp) && !co(A) && Mu(A), s) {
      if (r.then(As, As), e)
        return r.then((l) => {
          es(A, l, e);
        }).catch((l) => {
          Oo(l, A, 0);
        });
      if (A.asyncDep = r, E.NODE_ENV !== "production" && !A.suspense) {
        const l = Ro(A, t);
        M(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      es(A, r, e);
  } else
    ca(A, e);
}
function es(A, e, t) {
  q(e) ? A.type.__ssrInlineRender ? A.ssrRender = e : A.render = e : lA(e) ? (E.NODE_ENV !== "production" && Tn(e) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), E.NODE_ENV !== "production" && (A.devtoolsRawSetupState = e), A.setupState = Bu(e), E.NODE_ENV !== "production" && Nk(A)) : E.NODE_ENV !== "production" && e !== void 0 && M(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), ca(A, t);
}
const Jf = () => !0;
function ca(A, e, t) {
  const o = A.type;
  A.render || (A.render = o.render || vA);
  {
    const n = Mo(A);
    ge();
    try {
      Mk(A);
    } finally {
      de(), n();
    }
  }
  E.NODE_ENV !== "production" && !o.render && A.render === vA && !e && (o.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", o));
}
const ts = E.NODE_ENV !== "production" ? {
  get(A, e) {
    return gn(), yA(A, "get", ""), A[e];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(A, e) {
    return yA(A, "get", ""), A[e];
  }
};
function xf(A) {
  return new Proxy(A.slots, {
    get(e, t) {
      return yA(A, "get", "$slots"), e[t];
    }
  });
}
function Df(A) {
  const e = (t) => {
    if (E.NODE_ENV !== "production" && (A.exposed && M("expose() should be called only once per setup()."), t != null)) {
      let o = typeof t;
      o === "object" && (G(t) ? o = "array" : kA(t) && (o = "ref")), o !== "object" && M(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    A.exposed = t || {};
  };
  if (E.NODE_ENV !== "production") {
    let t, o;
    return Object.freeze({
      get attrs() {
        return t || (t = new Proxy(A.attrs, ts));
      },
      get slots() {
        return o || (o = xf(A));
      },
      get emit() {
        return (n, ...i) => A.emit(n, ...i);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(A.attrs, ts),
      slots: A.slots,
      emit: A.emit,
      expose: e
    };
}
function Rn(A) {
  return A.exposed ? A.exposeProxy || (A.exposeProxy = new Proxy(Bu(Xe(A.exposed)), {
    get(e, t) {
      if (t in e)
        return e[t];
      if (t in ct)
        return ct[t](A);
    },
    has(e, t) {
      return t in e || t in ct;
    }
  })) : A.proxy;
}
const wf = /(?:^|[-_])\w/g, Uf = (A) => A.replace(wf, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ka(A, e = !0) {
  return q(A) ? A.displayName || A.name : A.name || e && A.__name;
}
function Ro(A, e, t = !1) {
  let o = ka(e);
  if (!o && e.__file) {
    const n = e.__file.match(/([^/\\]+)\.\w+$/);
    n && (o = n[1]);
  }
  if (!o && A) {
    const n = (i) => {
      for (const r in i)
        if (i[r] === e)
          return r;
    };
    o = n(A.components) || A.parent && n(
      A.parent.type.components
    ) || n(A.appContext.components);
  }
  return o ? Uf(o) : t ? "App" : "Anonymous";
}
function fa(A) {
  return q(A) && "__vccOpts" in A;
}
const FA = (A, e) => {
  const t = jc(A, e, Qo);
  if (E.NODE_ENV !== "production") {
    const o = Mn();
    o && o.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function Ff() {
  if (E.NODE_ENV === "production" || typeof window > "u")
    return;
  const A = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, n = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!lA(u))
        return null;
      if (u.__isVue)
        return ["div", A, "VueInstance"];
      if (kA(u)) {
        ge();
        const f = u.value;
        return de(), [
          "div",
          {},
          ["span", A, S(u)],
          "<",
          s(f),
          ">"
        ];
      } else {
        if (fe(u))
          return [
            "div",
            {},
            ["span", A, MA(u) ? "ShallowReactive" : "Reactive"],
            "<",
            s(u),
            `>${pe(u) ? " (readonly)" : ""}`
          ];
        if (pe(u))
          return [
            "div",
            {},
            ["span", A, MA(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            s(u),
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
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const f = [];
    u.type.props && u.props && f.push(r("props", Z(u.props))), u.setupState !== aA && f.push(r("setup", u.setupState)), u.data !== aA && f.push(r("data", Z(u.data)));
    const k = l(u, "computed");
    k && f.push(r("computed", k));
    const p = l(u, "inject");
    return p && f.push(r("injected", p)), f.push([
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
    ]), f;
  }
  function r(u, f) {
    return f = CA({}, f), Object.keys(f).length ? [
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
        ...Object.keys(f).map((k) => [
          "div",
          {},
          ["span", o, k + ": "],
          s(f[k], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function s(u, f = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", t, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : lA(u) ? ["object", { object: f ? Z(u) : u }] : ["span", t, String(u)];
  }
  function l(u, f) {
    const k = u.type;
    if (q(k))
      return;
    const p = {};
    for (const B in u.ctx)
      a(k, B, f) && (p[B] = u.ctx[B]);
    return p;
  }
  function a(u, f, k) {
    const p = u[k];
    if (G(p) && p.includes(f) || lA(p) && f in p || u.extends && a(u.extends, f, k) || u.mixins && u.mixins.some((B) => a(B, f, k)))
      return !0;
  }
  function S(u) {
    return MA(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
const os = "3.5.26", re = E.NODE_ENV !== "production" ? M : vA;
var UA = {};
let yi;
const ns = typeof window < "u" && window.trustedTypes;
if (ns)
  try {
    yi = /* @__PURE__ */ ns.createPolicy("vue", {
      createHTML: (A) => A
    });
  } catch (A) {
    UA.NODE_ENV !== "production" && re(`Error creating trusted types policy: ${A}`);
  }
const ga = yi ? (A) => yi.createHTML(A) : (A) => A, Kf = "http://www.w3.org/2000/svg", Of = "http://www.w3.org/1998/Math/MathML", Te = typeof document < "u" ? document : null, is = Te && /* @__PURE__ */ Te.createElement("template"), Nf = {
  insert: (A, e, t) => {
    e.insertBefore(A, t || null);
  },
  remove: (A) => {
    const e = A.parentNode;
    e && e.removeChild(A);
  },
  createElement: (A, e, t, o) => {
    const n = e === "svg" ? Te.createElementNS(Kf, A) : e === "mathml" ? Te.createElementNS(Of, A) : t ? Te.createElement(A, { is: t }) : Te.createElement(A);
    return A === "select" && o && o.multiple != null && n.setAttribute("multiple", o.multiple), n;
  },
  createText: (A) => Te.createTextNode(A),
  createComment: (A) => Te.createComment(A),
  setText: (A, e) => {
    A.nodeValue = e;
  },
  setElementText: (A, e) => {
    A.textContent = e;
  },
  parentNode: (A) => A.parentNode,
  nextSibling: (A) => A.nextSibling,
  querySelector: (A) => Te.querySelector(A),
  setScopeId(A, e) {
    A.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(A, e, t, o, n, i) {
    const r = t ? t.previousSibling : e.lastChild;
    if (n && (n === i || n.nextSibling))
      for (; e.insertBefore(n.cloneNode(!0), t), !(n === i || !(n = n.nextSibling)); )
        ;
    else {
      is.innerHTML = ga(
        o === "svg" ? `<svg>${A}</svg>` : o === "mathml" ? `<math>${A}</math>` : A
      );
      const s = is.content;
      if (o === "svg" || o === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      e.insertBefore(s, t);
    }
    return [
      // first
      r ? r.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
}, Tf = /* @__PURE__ */ Symbol("_vtc");
function Mf(A, e, t) {
  const o = A[Tf];
  o && (e = (e ? [e, ...o] : [...o]).join(" ")), e == null ? A.removeAttribute("class") : t ? A.setAttribute("class", e) : A.className = e;
}
const rs = /* @__PURE__ */ Symbol("_vod"), Rf = /* @__PURE__ */ Symbol("_vsh"), Vf = /* @__PURE__ */ Symbol(UA.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Lf = /(?:^|;)\s*display\s*:/;
function Hf(A, e, t) {
  const o = A.style, n = EA(t);
  let i = !1;
  if (t && !n) {
    if (e)
      if (EA(e))
        for (const r of e.split(";")) {
          const s = r.slice(0, r.indexOf(":")).trim();
          t[s] == null && Zo(o, s, "");
        }
      else
        for (const r in e)
          t[r] == null && Zo(o, r, "");
    for (const r in t)
      r === "display" && (i = !0), Zo(o, r, t[r]);
  } else if (n) {
    if (e !== t) {
      const r = o[Vf];
      r && (t += ";" + r), o.cssText = t, i = Lf.test(t);
    }
  } else e && A.removeAttribute("style");
  rs in A && (A[rs] = i ? o.display : "", A[Rf] && (o.display = "none"));
}
const Pf = /[^\\];\s*$/, ss = /\s*!important$/;
function Zo(A, e, t) {
  if (G(t))
    t.forEach((o) => Zo(A, e, o));
  else if (t == null && (t = ""), UA.NODE_ENV !== "production" && Pf.test(t) && re(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    A.setProperty(e, t);
  else {
    const o = Yf(A, e);
    ss.test(t) ? A.setProperty(
      ee(o),
      t.replace(ss, ""),
      "important"
    ) : A[o] = t;
  }
}
const ls = ["Webkit", "Moz", "ms"], ei = {};
function Yf(A, e) {
  const t = ei[e];
  if (t)
    return t;
  let o = ZA(e);
  if (o !== "filter" && o in A)
    return ei[e] = o;
  o = Jn(o);
  for (let n = 0; n < ls.length; n++) {
    const i = ls[n] + o;
    if (i in A)
      return ei[e] = i;
  }
  return e;
}
const us = "http://www.w3.org/1999/xlink";
function as(A, e, t, o, n, i = dc(e)) {
  o && e.startsWith("xlink:") ? t == null ? A.removeAttributeNS(us, e.slice(6, e.length)) : A.setAttributeNS(us, e, t) : t == null || i && !Au(t) ? A.removeAttribute(e) : A.setAttribute(
    e,
    i ? "" : Fe(t) ? String(t) : t
  );
}
function Ss(A, e, t, o, n) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (A[e] = e === "innerHTML" ? ga(t) : t);
    return;
  }
  const i = A.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const s = i === "OPTION" ? A.getAttribute("value") || "" : A.value, l = t == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      A.type === "checkbox" ? "on" : ""
    ) : String(t);
    (s !== l || !("_value" in A)) && (A.value = l), t == null && A.removeAttribute(e), A._value = t;
    return;
  }
  let r = !1;
  if (t === "" || t == null) {
    const s = typeof A[e];
    s === "boolean" ? t = Au(t) : t == null && s === "string" ? (t = "", r = !0) : s === "number" && (t = 0, r = !0);
  }
  try {
    A[e] = t;
  } catch (s) {
    UA.NODE_ENV !== "production" && !r && re(
      `Failed setting prop "${e}" on <${i.toLowerCase()}>: value ${t} is invalid.`,
      s
    );
  }
  r && A.removeAttribute(n || e);
}
function _e(A, e, t, o) {
  A.addEventListener(e, t, o);
}
function jf(A, e, t, o) {
  A.removeEventListener(e, t, o);
}
const cs = /* @__PURE__ */ Symbol("_vei");
function Gf(A, e, t, o, n = null) {
  const i = A[cs] || (A[cs] = {}), r = i[e];
  if (o && r)
    r.value = UA.NODE_ENV !== "production" ? fs(o, e) : o;
  else {
    const [s, l] = Wf(e);
    if (o) {
      const a = i[e] = qf(
        UA.NODE_ENV !== "production" ? fs(o, e) : o,
        n
      );
      _e(A, s, a, l);
    } else r && (jf(A, s, r, l), i[e] = void 0);
  }
}
const ks = /(?:Once|Passive|Capture)$/;
function Wf(A) {
  let e;
  if (ks.test(A)) {
    e = {};
    let o;
    for (; o = A.match(ks); )
      A = A.slice(0, A.length - o[0].length), e[o[0].toLowerCase()] = !0;
  }
  return [A[2] === ":" ? A.slice(3) : ee(A.slice(2)), e];
}
let ti = 0;
const _f = /* @__PURE__ */ Promise.resolve(), Xf = () => ti || (_f.then(() => ti = 0), ti = Date.now());
function qf(A, e) {
  const t = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= t.attached)
      return;
    Ke(
      zf(o, t.value),
      e,
      5,
      [o]
    );
  };
  return t.value = A, t.attached = Xf(), t;
}
function fs(A, e) {
  return q(A) || G(A) ? A : (re(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof A}.`
  ), vA);
}
function zf(A, e) {
  if (G(e)) {
    const t = A.stopImmediatePropagation;
    return A.stopImmediatePropagation = () => {
      t.call(A), A._stopped = !0;
    }, e.map(
      (o) => (n) => !n._stopped && o && o(n)
    );
  } else
    return e;
}
const gs = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // lowercase letter
A.charCodeAt(2) > 96 && A.charCodeAt(2) < 123, Zf = (A, e, t, o, n, i) => {
  const r = n === "svg";
  e === "class" ? Mf(A, o, r) : e === "style" ? Hf(A, t, o) : wo(e) ? rn(e) || Gf(A, e, t, o, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : $f(A, e, o, r)) ? (Ss(A, e, o), !A.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && as(A, e, o, r, i, e !== "value")) : /* #11081 force set props for possible async custom element */ A._isVueCE && (/[A-Z]/.test(e) || !EA(o)) ? Ss(A, ZA(e), o, i, e) : (e === "true-value" ? A._trueValue = o : e === "false-value" && (A._falseValue = o), as(A, e, o, r));
};
function $f(A, e, t, o) {
  if (o)
    return !!(e === "innerHTML" || e === "textContent" || e in A && gs(e) && q(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && A.tagName === "IFRAME" || e === "form" || e === "list" && A.tagName === "INPUT" || e === "type" && A.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const n = A.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return gs(e) && EA(t) ? !1 : e in A;
}
const ds = {};
// @__NO_SIDE_EFFECTS__
function da(A, e, t) {
  let o = /* @__PURE__ */ Ct(A, e);
  yn(o) && (o = CA({}, o, e));
  class n extends rr {
    constructor(r) {
      super(o, r, t);
    }
  }
  return n.def = o, n;
}
const Ag = typeof HTMLElement < "u" ? HTMLElement : class {
};
class rr extends Ag {
  constructor(e, t = {}, o = Is) {
    super(), this._def = e, this._props = t, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Is ? this._root = this.shadowRoot : (UA.NODE_ENV !== "production" && this.shadowRoot && re(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), e.shadowRoot !== !1 ? (this.attachShadow(
      CA({}, e.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && (e.parentNode || e.host); )
      if (e instanceof rr) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._inheritParentContext(e));
  }
  _inheritParentContext(e = this._parent) {
    e && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      e._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Co(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(e) {
    for (const t of e)
      this._setAttr(t.attributeName);
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
    const e = (o, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: r } = o;
      let s;
      if (i && !G(i))
        for (const l in i) {
          const a = i[l];
          (a === Number || a && a.type === Number) && (l in this._props && (this._props[l] = Ur(this._props[l])), (s || (s = /* @__PURE__ */ Object.create(null)))[ZA(l)] = !0);
        }
      this._numberProps = s, this._resolveProps(o), this.shadowRoot ? this._applyStyles(r) : UA.NODE_ENV !== "production" && r && re(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, t = this._def.__asyncLoader;
    t ? this._pendingResolve = t().then((o) => {
      o.configureApp = this._def.configureApp, e(this._def = o, !0);
    }) : e(this._def);
  }
  _mount(e) {
    UA.NODE_ENV !== "production" && !e.name && (e.name = "VueElement"), this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const t = this._instance && this._instance.exposed;
    if (t)
      for (const o in t)
        oA(this, o) ? UA.NODE_ENV !== "production" && re(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => HA(t[o])
        });
  }
  _resolveProps(e) {
    const { props: t } = e, o = G(t) ? t : Object.keys(t || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && o.includes(n) && this._setProp(n, this[n]);
    for (const n of o.map(ZA))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(i) {
          this._setProp(n, i, !0, !this._patching);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const t = this.hasAttribute(e);
    let o = t ? this.getAttribute(e) : ds;
    const n = ZA(e);
    t && this._numberProps && this._numberProps[n] && (o = Ur(o)), this._setProp(n, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, t, o = !0, n = !1) {
    if (t !== this._props[e] && (this._dirty = !0, t === ds ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), n && this._instance && this._update(), o)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), t === !0 ? this.setAttribute(ee(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(ee(e), t + "") : t || this.removeAttribute(ee(e)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), rg(e, this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const t = ie(this._def, CA(e, this._props));
    return this._instance || (t.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, UA.NODE_ENV !== "production" && (o.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const n = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            yn(r[0]) ? CA({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      o.emit = (i, ...r) => {
        n(i, r), ee(i) !== i && n(ee(i), r);
      }, this._setParent();
    }), t;
  }
  _applyStyles(e, t) {
    if (!e) return;
    if (t) {
      if (t === this._def || this._styleChildren.has(t))
        return;
      this._styleChildren.add(t);
    }
    const o = this._nonce;
    for (let n = e.length - 1; n >= 0; n--) {
      const i = document.createElement("style");
      if (o && i.setAttribute("nonce", o), i.textContent = e[n], this.shadowRoot.prepend(i), UA.NODE_ENV !== "production")
        if (t) {
          if (t.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(t.__hmrId);
            r || this._childStyles.set(t.__hmrId, r = []), r.push(i);
          }
        } else
          (this._styles || (this._styles = [])).push(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let t;
    for (; t = this.firstChild; ) {
      const o = t.nodeType === 1 && t.getAttribute("slot") || "default";
      (e[o] || (e[o] = [])).push(t), this.removeChild(t);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = this._getSlots(), t = this._instance.type.__scopeId;
    for (let o = 0; o < e.length; o++) {
      const n = e[o], i = n.getAttribute("name") || "default", r = this._slots[i], s = n.parentNode;
      if (r)
        for (const l of r) {
          if (t && l.nodeType === 1) {
            const a = t + "-s", S = document.createTreeWalker(l, 1);
            l.setAttribute(a, "");
            let u;
            for (; u = S.nextNode(); )
              u.setAttribute(a, "");
          }
          s.insertBefore(l, n);
        }
      else
        for (; n.firstChild; ) s.insertBefore(n.firstChild, n);
      s.removeChild(n);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const e = [this];
    this._teleportTargets && e.push(...this._teleportTargets);
    const t = /* @__PURE__ */ new Set();
    for (const o of e) {
      const n = o.querySelectorAll("slot");
      for (let i = 0; i < n.length; i++)
        t.add(n[i]);
    }
    return Array.from(t);
  }
  /**
   * @internal
   */
  _injectChildStyle(e) {
    this._applyStyles(e.styles, e);
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
  _removeChildStyle(e) {
    if (UA.NODE_ENV !== "production" && (this._styleChildren.delete(e), this._childStyles && e.__hmrId)) {
      const t = this._childStyles.get(e.__hmrId);
      t && (t.forEach((o) => this._root.removeChild(o)), t.length = 0);
    }
  }
}
const Mt = (A) => {
  const e = A.props["onUpdate:modelValue"] || !1;
  return G(e) ? (t) => yt(e, t) : e;
};
function eg(A) {
  A.target.composing = !0;
}
function ps(A) {
  const e = A.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Le = /* @__PURE__ */ Symbol("_assign");
function Cs(A, e, t) {
  return e && (A = A.trim()), t && (A = xn(A)), A;
}
const OA = {
  created(A, { modifiers: { lazy: e, trim: t, number: o } }, n) {
    A[Le] = Mt(n);
    const i = o || n.props && n.props.type === "number";
    _e(A, e ? "change" : "input", (r) => {
      r.target.composing || A[Le](Cs(A.value, t, i));
    }), (t || i) && _e(A, "change", () => {
      A.value = Cs(A.value, t, i);
    }), e || (_e(A, "compositionstart", eg), _e(A, "compositionend", ps), _e(A, "change", ps));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: e }) {
    A.value = e ?? "";
  },
  beforeUpdate(A, { value: e, oldValue: t, modifiers: { lazy: o, trim: n, number: i } }, r) {
    if (A[Le] = Mt(r), A.composing) return;
    const s = (i || A.type === "number") && !/^0\d/.test(A.value) ? xn(A.value) : A.value, l = e ?? "";
    s !== l && (document.activeElement === A && A.type !== "range" && (o && e === t || n && A.value.trim() === l) || (A.value = l));
  }
}, tg = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(A, e, t) {
    A[Le] = Mt(t), _e(A, "change", () => {
      const o = A._modelValue, n = Bo(A), i = A.checked, r = A[Le];
      if (G(o)) {
        const s = ji(o, n), l = s !== -1;
        if (i && !l)
          r(o.concat(n));
        else if (!i && l) {
          const a = [...o];
          a.splice(s, 1), r(a);
        }
      } else if (Yt(o)) {
        const s = new Set(o);
        i ? s.add(n) : s.delete(n), r(s);
      } else
        r(pa(A, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Es,
  beforeUpdate(A, e, t) {
    A[Le] = Mt(t), Es(A, e, t);
  }
};
function Es(A, { value: e, oldValue: t }, o) {
  A._modelValue = e;
  let n;
  if (G(e))
    n = ji(e, o.props.value) > -1;
  else if (Yt(e))
    n = e.has(o.props.value);
  else {
    if (e === t) return;
    n = Ko(e, pa(A, !0));
  }
  A.checked !== n && (A.checked = n);
}
const hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(A, { value: e, modifiers: { number: t } }, o) {
    const n = Yt(e);
    _e(A, "change", () => {
      const i = Array.prototype.filter.call(A.options, (r) => r.selected).map(
        (r) => t ? xn(Bo(r)) : Bo(r)
      );
      A[Le](
        A.multiple ? n ? new Set(i) : i : i[0]
      ), A._assigning = !0, Co(() => {
        A._assigning = !1;
      });
    }), A[Le] = Mt(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(A, { value: e }) {
    Qs(A, e);
  },
  beforeUpdate(A, e, t) {
    A[Le] = Mt(t);
  },
  updated(A, { value: e }) {
    A._assigning || Qs(A, e);
  }
};
function Qs(A, e) {
  const t = A.multiple, o = G(e);
  if (t && !o && !Yt(e)) {
    UA.NODE_ENV !== "production" && re(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8, -1)}.`
    );
    return;
  }
  for (let n = 0, i = A.options.length; n < i; n++) {
    const r = A.options[n], s = Bo(r);
    if (t)
      if (o) {
        const l = typeof s;
        l === "string" || l === "number" ? r.selected = e.some((a) => String(a) === String(s)) : r.selected = ji(e, s) > -1;
      } else
        r.selected = e.has(s);
    else if (Ko(Bo(r), e)) {
      A.selectedIndex !== n && (A.selectedIndex = n);
      return;
    }
  }
  !t && A.selectedIndex !== -1 && (A.selectedIndex = -1);
}
function Bo(A) {
  return "_value" in A ? A._value : A.value;
}
function pa(A, e) {
  const t = e ? "_trueValue" : "_falseValue";
  return t in A ? A[t] : e;
}
const og = ["ctrl", "shift", "alt", "meta"], ng = {
  stop: (A) => A.stopPropagation(),
  prevent: (A) => A.preventDefault(),
  self: (A) => A.target !== A.currentTarget,
  ctrl: (A) => !A.ctrlKey,
  shift: (A) => !A.shiftKey,
  alt: (A) => !A.altKey,
  meta: (A) => !A.metaKey,
  left: (A) => "button" in A && A.button !== 0,
  middle: (A) => "button" in A && A.button !== 1,
  right: (A) => "button" in A && A.button !== 2,
  exact: (A, e) => og.some((t) => A[`${t}Key`] && !e.includes(t))
}, Ve = (A, e) => {
  const t = A._withMods || (A._withMods = {}), o = e.join(".");
  return t[o] || (t[o] = ((n, ...i) => {
    for (let r = 0; r < e.length; r++) {
      const s = ng[e[r]];
      if (s && s(n, e)) return;
    }
    return A(n, ...i);
  }));
}, ig = /* @__PURE__ */ CA({ patchProp: Zf }, Nf);
let Bs;
function Ca() {
  return Bs || (Bs = kf(ig));
}
const rg = ((...A) => {
  Ca().render(...A);
}), Is = ((...A) => {
  const e = Ca().createApp(...A);
  UA.NODE_ENV !== "production" && (lg(e), ug(e));
  const { mount: t } = e;
  return e.mount = (o) => {
    const n = ag(o);
    if (!n) return;
    const i = e._component;
    !q(i) && !i.render && !i.template && (i.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const r = t(n, !1, sg(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), r;
  }, e;
});
function sg(A) {
  if (A instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && A instanceof MathMLElement)
    return "mathml";
}
function lg(A) {
  Object.defineProperty(A.config, "isNativeTag", {
    value: (e) => cc(e) || kc(e) || fc(e),
    writable: !1
  });
}
function ug(A) {
  {
    const e = A.config.isCustomElement;
    Object.defineProperty(A.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        re(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = A.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(A.config, "compilerOptions", {
      get() {
        return re(o), t;
      },
      set() {
        re(o);
      }
    });
  }
}
function ag(A) {
  if (EA(A)) {
    const e = document.querySelector(A);
    return UA.NODE_ENV !== "production" && !e && re(
      `Failed to mount app: mount target selector "${A}" returned null.`
    ), e;
  }
  return UA.NODE_ENV !== "production" && window.ShadowRoot && A instanceof window.ShadowRoot && A.mode === "closed" && re(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), A;
}
var Sg = {};
function cg() {
  Ff();
}
Sg.NODE_ENV !== "production" && cg();
const kg = { class: "viewer-area" }, fg = {
  key: 0,
  class: "empty-state"
}, gg = {
  key: 1,
  class: "canvas-container"
}, dg = { class: "image-wrapper" }, pg = ["src"], Cg = {
  class: "overlay-layer",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, Eg = ["id", "cx", "cy", "r"], hg = ["stop-color", "stop-opacity"], Qg = ["stop-color"], Bg = ["id"], Ig = ["stdDeviation"], mg = ["points", "fill", "filter", "onPointerdown", "onPointerup"], yg = ["onPointerdown", "onPointerup", "title"], vg = ["onPointerdown", "onPointerup"], bg = ["src"], Jg = /* @__PURE__ */ Ct({
  __name: "InteractiveFloorplan",
  props: {
    config: {},
    entityStates: {}
  },
  emits: ["entity-click", "entity-long-press"],
  setup(A, { emit: e }) {
    const t = A, o = e, n = FA(() => t.config.imageBase64 || t.config.imageUrl || ""), i = FA(() => !!n.value), r = gA(null), s = gA(!1), l = gA({ x: 0, y: 0 });
    function a(h, I) {
      h.button === 0 && (s.value = !1, l.value = { x: h.clientX, y: h.clientY }, r.value = window.setTimeout(() => {
        s.value = !0, o("entity-long-press", I.entityId);
      }, 500));
    }
    function S(h, I) {
      if (r.value && (clearTimeout(r.value), r.value = null), !s.value) {
        const g = Math.abs(h.clientX - l.value.x), Q = Math.abs(h.clientY - l.value.y);
        g < 10 && Q < 10 && o("entity-click", I.entityId, I.type);
      }
      s.value = !1;
    }
    function u() {
      r.value && (clearTimeout(r.value), r.value = null);
    }
    function f(h) {
      const I = t.entityStates[h.entityId] || { state: "off" }, { style: g } = h;
      if (h.type === "camera") {
        let y;
        const L = g.colors;
        return I.state === "recording" ? y = L.recordingColor || "#ef4444" : I.state === "streaming" ? y = L.streamingColor || "#3b82f6" : y = L.idleColor || "#6b7280", {
          color: y,
          opacity: g.onOpacity
        };
      }
      const Q = g.colors;
      if (I.state == "off")
        return {
          color: Q.offColor,
          opacity: g.offOpacity
        };
      let R = I.color || Q.onColor, m = g.onOpacity;
      return I.brightness !== void 0 && (m = I.brightness / 255 * g.onOpacity), { color: R, opacity: m };
    }
    function k(h) {
      const { style: I, x: g, y: Q } = h;
      return {
        left: `${g}%`,
        top: `${Q}%`,
        width: `${I.width}%`,
        height: `${I.height}%`,
        transform: `translate(-50%, -50%) rotate(${I.rotation}deg)`,
        position: "absolute",
        zIndex: 1
      };
    }
    function p(h) {
      const { color: I, opacity: g } = f(h), { shape: Q } = h, R = t.entityStates[h.entityId] || { state: "off" };
      let m = g;
      if (R.state == "on" && R.brightness !== void 0) {
        const O = h.style.onOpacity;
        m = 0.3 + R.brightness / 255 * (O - 0.3);
      }
      const y = h.style.dotOpacity !== void 0 && h.style.dotOpacity !== null ? h.style.dotOpacity : m;
      return {
        width: "100%",
        height: "100%",
        backgroundColor: y === 0 ? "transparent" : I,
        opacity: y,
        borderRadius: Q === "circle" ? "50%" : "4px",
        cursor: "pointer",
        boxShadow: y === 0 || R.state !== "on" ? "none" : `0 0 15px ${I}`,
        transition: "all 0.3s ease"
      };
    }
    function B(h) {
      const { offsetX: I, offsetY: g, color: Q } = h.labelConfig || {};
      return {
        transform: `translate(-50%, -50%) translate(${I || 0}%, ${g || 0}%)`,
        color: Q || "#ffffff",
        pointerEvents: "auto",
        cursor: "pointer"
      };
    }
    function J(h) {
      return h ? h.map((I) => `${I.x} ${I.y}`).join(",") : "";
    }
    function C(h) {
      const I = t.entityStates[h.entityId];
      return h.type === "camera" && I?.state === "recording";
    }
    return (h, I) => (AA(), eA("div", kg, [
      i.value ? (AA(), eA("div", gg, [
        b("div", dg, [
          b("img", {
            src: n.value,
            alt: "Floorplan Base",
            draggable: "false"
          }, null, 8, pg),
          (AA(), eA("svg", Cg, [
            b("defs", null, [
              (AA(!0), eA(QA, null, Je(t.config.entities, (g) => (AA(), eA("radialGradient", {
                key: "grad-" + g.id,
                id: "grad-" + g.id,
                gradientUnits: "userSpaceOnUse",
                cx: g.x,
                cy: g.y,
                r: g.style.gradientRadius
              }, [
                b("stop", {
                  offset: "0%",
                  "stop-color": f(g).color,
                  "stop-opacity": Math.max(0.3, f(g).opacity)
                }, null, 8, hg),
                b("stop", {
                  offset: "100%",
                  "stop-color": f(g).color,
                  "stop-opacity": "0"
                }, null, 8, Qg)
              ], 8, Eg))), 128)),
              (AA(!0), eA(QA, null, Je(t.config.entities, (g) => (AA(), eA(QA, {
                key: "blur-" + g.id
              }, [
                g.style.edgeBlur && g.style.edgeBlur > 0 ? (AA(), eA("filter", {
                  key: 0,
                  id: "blur-" + g.id
                }, [
                  b("feGaussianBlur", {
                    stdDeviation: g.style.edgeBlur
                  }, null, 8, Ig)
                ], 8, Bg)) : ce("", !0)
              ], 64))), 128))
            ]),
            (AA(!0), eA(QA, null, Je(t.config.entities, (g) => (AA(), eA("polygon", {
              key: "poly-" + g.id,
              points: J(g.points),
              fill: t.entityStates[g.entityId]?.shouldLightUp ? `url(#grad-${g.id})` : "transparent",
              filter: g.style.edgeBlur && g.style.edgeBlur > 0 ? `url(#blur-${g.id})` : void 0,
              stroke: "none",
              class: Ot({ clickable: !0 }),
              style: { "pointer-events": "all", transition: "fill-opacity 0.3s ease" },
              onPointerdown: (Q) => a(Q, g),
              onPointerup: (Q) => S(Q, g),
              onPointerleave: I[0] || (I[0] = (Q) => u())
            }, null, 40, mg))), 128))
          ])),
          (AA(!0), eA(QA, null, Je(t.config.entities, (g) => (AA(), eA("div", {
            key: g.id,
            class: "interactive-entity",
            style: xe(k(g)),
            onPointerdown: (Q) => a(Q, g),
            onPointerup: (Q) => S(Q, g),
            onPointerleave: I[2] || (I[2] = (Q) => u()),
            title: g.label
          }, [
            b("div", {
              class: Ot(["entity-shape", { "camera-recording": C(g) }]),
              style: xe(p(g))
            }, null, 6),
            g.labelConfig.show ? (AA(), eA("div", {
              key: 0,
              class: "entity-label",
              style: xe(B(g)),
              onPointerdown: Ve((Q) => a(Q, g), ["stop"]),
              onPointerup: Ve((Q) => S(Q, g), ["stop"]),
              onPointerleave: I[1] || (I[1] = Ve((Q) => u(), ["stop"]))
            }, te(g.label), 45, vg)) : ce("", !0)
          ], 44, yg))), 128)),
          (AA(!0), eA(QA, null, Je(t.config.overlayImages || [], (g, Q) => (AA(), eA("img", {
            key: "overlay-" + Q,
            src: g.url || g.src,
            class: "fp-overlay-img",
            style: xe({
              left: g.x + "%",
              top: g.y + "%",
              width: g.width + "%",
              height: g.height + "%",
              transform: `rotate(${g.rotation || 0}deg)`,
              opacity: g.opacity ?? 1
            }),
            draggable: "false"
          }, null, 12, bg))), 128))
        ])
      ])) : (AA(), eA("div", fg, [...I[3] || (I[3] = [
        b("p", null, "No floorplan loaded. Go to Editor to set up.", -1)
      ])]))
    ]));
  }
}), Gt = (A, e) => {
  const t = A.__vccOpts || A;
  for (const [o, n] of e)
    t[o] = n;
  return t;
}, xg = /* @__PURE__ */ Gt(Jg, [["__scopeId", "data-v-2388864e"]]);
function Dg(A) {
  if (A.style?.colors || !A.style)
    return A;
  const e = { ...A.style };
  return A.type === "camera" ? (e.cameraIdleColor || e.cameraRecordingColor || e.cameraStreamingColor) && (e.colors = {
    idleColor: e.cameraIdleColor || "#6b7280",
    recordingColor: e.cameraRecordingColor || "#ef4444",
    streamingColor: e.cameraStreamingColor || "#3b82f6"
  }, delete e.cameraIdleColor, delete e.cameraRecordingColor, delete e.cameraStreamingColor) : (e.onColor || e.offColor) && (e.colors = {
    onColor: e.onColor || "#facc15",
    offColor: e.offColor || "#94a3b8"
  }, delete e.onColor, delete e.offColor), { ...A, style: e };
}
function sr(A) {
  return A = { ...A }, A.imageUrl && !A.imageBase64 && (A.imageBase64 = ""), A.overlayImages && Array.isArray(A.overlayImages) && (A.overlayImages = A.overlayImages.map((e) => e.url && !e.src ? { ...e, src: e.url } : e)), !A.entities || !Array.isArray(A.entities) || (A.entities = A.entities.map((e) => Dg({ ...e, style: e.style ? { ...e.style } : void 0 }))), A;
}
function Ea(A) {
  return !A.entities || !Array.isArray(A.entities) ? !1 : A.entities.some((e) => {
    if (!e.style) return !1;
    const t = !!(e.style.onColor || e.style.offColor), o = !!(e.style.cameraIdleColor || e.style.cameraRecordingColor || e.style.cameraStreamingColor), n = !!e.style.colors;
    return (t || o) && !n;
  });
}
const wg = {
  key: 1,
  class: "error"
}, Ug = /* @__PURE__ */ Ct({
  __name: "HaFloorplanCard.ce",
  props: {
    config: { type: [Object, String] },
    hass: { type: null }
  },
  setup(A) {
    const e = A, t = gA(null), o = FA(() => {
      if (!e.config) return null;
      let s = null;
      if (typeof e.config == "string")
        try {
          s = JSON.parse(e.config);
        } catch (l) {
          return console.error("Failed to parse floorplan config", l), null;
        }
      else
        s = { ...e.config };
      return s = sr(s), s && s.imageBase64 ? {
        ...s,
        imageBase64: s.imageBase64.replace(/\s/g, "")
      } : s;
    }), n = FA(() => {
      const s = {};
      return !o.value || !e.hass || o.value.entities?.forEach((l) => {
        const a = e.hass.states[l.entityId];
        if (a) {
          let S = a.state, u, f;
          if (l.type === "light") {
            S == "on" && (a.attributes.rgb_color && (u = `rgb(${a.attributes.rgb_color.join(",")})`), a.attributes.brightness !== void 0 && (f = a.attributes.brightness));
            const k = l.entityId.split(".")[0], p = k === "media_player" ? !["off", "unavailable", "unknown", "idle"].includes(S) : S === "on";
            s[l.entityId] = { state: S, color: u, brightness: f, shouldLightUp: p };
          } else if (l.type === "media_player") {
            const k = !["off", "unavailable", "unknown"].includes(S);
            s[l.entityId] = { state: S, shouldLightUp: k };
          } else if (l.type === "camera") {
            const k = ["on", "recording", "streaming"].includes(S);
            s[l.entityId] = { state: S, shouldLightUp: k };
          } else l.type === "switch" ? s[l.entityId] = { state: S, shouldLightUp: S === "on" } : s[l.entityId] = { state: S, shouldLightUp: S === "on" };
        } else
          s[l.entityId] = { state: "off", shouldLightUp: !1 };
      }), s;
    });
    function i(s, l) {
      if (!e.hass || !s) return;
      const a = s.includes(".") ? s.split(".")[0] ?? l : l;
      if (["light", "switch", "media_player"].includes(a))
        e.hass.callService(a, "toggle", {
          entity_id: s
        });
      else if (l === "camera") {
        const S = n.value[s]?.state == "idle" ? "turn_on" : "turn_off";
        e.hass.callService("homeassistant", S, {
          entity_id: s
        });
      } else
        e.hass.callService("homeassistant", "toggle", {
          entity_id: s
        });
    }
    function r(s) {
      const l = new CustomEvent("hass-more-info", {
        detail: { entityId: s },
        bubbles: !0,
        composed: !0
      });
      t.value && t.value.dispatchEvent(l);
    }
    return console.info("%c HA Floorplan Card %c v1.1.7 ", "background: #333; color: #fff", "background: #0ea5e9; color: #fff"), (s, l) => o.value ? (AA(), eA("ha-card", {
      key: 0,
      ref_key: "cardRef",
      ref: t,
      class: "ha-card-wrapper"
    }, [
      ie(xg, {
        config: o.value,
        "entity-states": n.value,
        onEntityClick: i,
        onEntityLongPress: r
      }, null, 8, ["config", "entity-states"])
    ], 512)) : (AA(), eA("div", wg, " No Configuration Loaded "));
  }
}), Fg = ':host{display:block!important;width:100%!important;height:auto!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:border-box}ha-card{display:block!important;width:100%!important;height:auto!important;overflow:visible!important;margin:0!important;padding:0!important;background:none!important;box-shadow:none!important;border:none!important}.ha-card-wrapper{width:100%!important;display:block!important;padding:0!important;margin:0!important}.viewer-area{flex:1;background-color:transparent;display:block;position:relative;padding:0!important;margin:0!important;height:auto;width:100%!important}.empty-state{color:var(--color-text-secondary);font-size:1.2rem;padding:20px;text-align:center}.canvas-container{border-radius:0;overflow:hidden;position:relative;max-width:100%;height:auto}.image-wrapper{position:relative;display:block;width:100%;line-height:0;container-type:inline-size}.image-wrapper>img:first-child{width:100%;height:auto;display:block;object-fit:contain;aspect-ratio:auto}.entity-label{position:absolute;top:50%;left:50%;background:#000000b3;color:#fff;padding:2px 4px;font-size:14px;font-size:1.5cqw;border-radius:4px;white-space:nowrap;pointer-events:none;line-height:1.2}.overlay-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.overlay-layer polygon{vector-effect:non-scaling-stroke}.overlay-layer polygon[style*="pointer-events: all"],.overlay-layer polygon.clickable{pointer-events:all!important}.fp-overlay-img{position:absolute;pointer-events:none;object-fit:contain}.interactive-entity{z-index:10}.error{padding:20px;color:red}@keyframes camera-recording-blink{0%,to{opacity:1}50%{opacity:.3}}.camera-recording{animation:camera-recording-blink 2s ease-in-out infinite}', Kg = /* @__PURE__ */ Gt(Ug, [["styles", [Fg]]]);
var Og = Object.create, ha = Object.defineProperty, Ng = Object.getOwnPropertyDescriptor, lr = Object.getOwnPropertyNames, Tg = Object.getPrototypeOf, Mg = Object.prototype.hasOwnProperty, Rg = (A, e) => function() {
  return A && (e = (0, A[lr(A)[0]])(A = 0)), e;
}, Vg = (A, e) => function() {
  return e || (0, A[lr(A)[0]])((e = { exports: {} }).exports, e), e.exports;
}, Lg = (A, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of lr(e))
      !Mg.call(A, n) && n !== t && ha(A, n, { get: () => e[n], enumerable: !(o = Ng(e, n)) || o.enumerable });
  return A;
}, Hg = (A, e, t) => (t = A != null ? Og(Tg(A)) : {}, Lg(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ha(t, "default", { value: A, enumerable: !0 }),
  A
)), Vo = Rg({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Pg = Vg({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(A, e) {
    Vo(), e.exports = o;
    function t(i) {
      return i instanceof Buffer ? Buffer.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
    }
    function o(i) {
      if (i = i || {}, i.circles) return n(i);
      const r = /* @__PURE__ */ new Map();
      if (r.set(Date, (u) => new Date(u)), r.set(Map, (u, f) => new Map(l(Array.from(u), f))), r.set(Set, (u, f) => new Set(l(Array.from(u), f))), i.constructorHandlers)
        for (const u of i.constructorHandlers)
          r.set(u[0], u[1]);
      let s = null;
      return i.proto ? S : a;
      function l(u, f) {
        const k = Object.keys(u), p = new Array(k.length);
        for (let B = 0; B < k.length; B++) {
          const J = k[B], C = u[J];
          typeof C != "object" || C === null ? p[J] = C : C.constructor !== Object && (s = r.get(C.constructor)) ? p[J] = s(C, f) : ArrayBuffer.isView(C) ? p[J] = t(C) : p[J] = f(C);
        }
        return p;
      }
      function a(u) {
        if (typeof u != "object" || u === null) return u;
        if (Array.isArray(u)) return l(u, a);
        if (u.constructor !== Object && (s = r.get(u.constructor)))
          return s(u, a);
        const f = {};
        for (const k in u) {
          if (Object.hasOwnProperty.call(u, k) === !1) continue;
          const p = u[k];
          typeof p != "object" || p === null ? f[k] = p : p.constructor !== Object && (s = r.get(p.constructor)) ? f[k] = s(p, a) : ArrayBuffer.isView(p) ? f[k] = t(p) : f[k] = a(p);
        }
        return f;
      }
      function S(u) {
        if (typeof u != "object" || u === null) return u;
        if (Array.isArray(u)) return l(u, S);
        if (u.constructor !== Object && (s = r.get(u.constructor)))
          return s(u, S);
        const f = {};
        for (const k in u) {
          const p = u[k];
          typeof p != "object" || p === null ? f[k] = p : p.constructor !== Object && (s = r.get(p.constructor)) ? f[k] = s(p, S) : ArrayBuffer.isView(p) ? f[k] = t(p) : f[k] = S(p);
        }
        return f;
      }
    }
    function n(i) {
      const r = [], s = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (k) => new Date(k)), l.set(Map, (k, p) => new Map(S(Array.from(k), p))), l.set(Set, (k, p) => new Set(S(Array.from(k), p))), i.constructorHandlers)
        for (const k of i.constructorHandlers)
          l.set(k[0], k[1]);
      let a = null;
      return i.proto ? f : u;
      function S(k, p) {
        const B = Object.keys(k), J = new Array(B.length);
        for (let C = 0; C < B.length; C++) {
          const h = B[C], I = k[h];
          if (typeof I != "object" || I === null)
            J[h] = I;
          else if (I.constructor !== Object && (a = l.get(I.constructor)))
            J[h] = a(I, p);
          else if (ArrayBuffer.isView(I))
            J[h] = t(I);
          else {
            const g = r.indexOf(I);
            g !== -1 ? J[h] = s[g] : J[h] = p(I);
          }
        }
        return J;
      }
      function u(k) {
        if (typeof k != "object" || k === null) return k;
        if (Array.isArray(k)) return S(k, u);
        if (k.constructor !== Object && (a = l.get(k.constructor)))
          return a(k, u);
        const p = {};
        r.push(k), s.push(p);
        for (const B in k) {
          if (Object.hasOwnProperty.call(k, B) === !1) continue;
          const J = k[B];
          if (typeof J != "object" || J === null)
            p[B] = J;
          else if (J.constructor !== Object && (a = l.get(J.constructor)))
            p[B] = a(J, u);
          else if (ArrayBuffer.isView(J))
            p[B] = t(J);
          else {
            const C = r.indexOf(J);
            C !== -1 ? p[B] = s[C] : p[B] = u(J);
          }
        }
        return r.pop(), s.pop(), p;
      }
      function f(k) {
        if (typeof k != "object" || k === null) return k;
        if (Array.isArray(k)) return S(k, f);
        if (k.constructor !== Object && (a = l.get(k.constructor)))
          return a(k, f);
        const p = {};
        r.push(k), s.push(p);
        for (const B in k) {
          const J = k[B];
          if (typeof J != "object" || J === null)
            p[B] = J;
          else if (J.constructor !== Object && (a = l.get(J.constructor)))
            p[B] = a(J, f);
          else if (ArrayBuffer.isView(J))
            p[B] = t(J);
          else {
            const C = r.indexOf(J);
            C !== -1 ? p[B] = s[C] : p[B] = f(J);
          }
        }
        return r.pop(), s.pop(), p;
      }
    }
  }
});
Vo();
Vo();
Vo();
var Qa = typeof navigator < "u", Y = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof Y.chrome < "u" && Y.chrome.devtools;
Qa && (Y.self, Y.top);
var ms;
typeof navigator < "u" && ((ms = navigator.userAgent) == null || ms.toLowerCase().includes("electron"));
Vo();
var Yg = Hg(Pg()), jg = /(?:^|[-_/])(\w)/g;
function Gg(A, e) {
  return e ? e.toUpperCase() : "";
}
function Wg(A) {
  return A && `${A}`.replace(jg, Gg);
}
function _g(A, e) {
  let t = A.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  t.endsWith(`index${e}`) && (t = t.replace(`/index${e}`, e));
  const o = t.lastIndexOf("/"), n = t.substring(o + 1);
  {
    const i = n.lastIndexOf(e);
    return n.substring(0, i);
  }
}
var ys = (0, Yg.default)({ circles: !0 });
const Xg = {
  trailing: !0
};
function Rt(A, e = 25, t = {}) {
  if (t = { ...Xg, ...t }, !Number.isFinite(e))
    throw new TypeError("Expected `wait` to be a finite number");
  let o, n, i = [], r, s;
  const l = (a, S) => (r = qg(A, a, S), r.finally(() => {
    if (r = null, t.trailing && s && !n) {
      const u = l(a, s);
      return s = null, u;
    }
  }), r);
  return function(...a) {
    return r ? (t.trailing && (s = a), r) : new Promise((S) => {
      const u = !n && t.leading;
      clearTimeout(n), n = setTimeout(() => {
        n = null;
        const f = t.leading ? o : l(this, a);
        for (const k of i)
          k(f);
        i = [];
      }, e), u ? (o = l(this, a), S(o)) : i.push(S);
    });
  };
}
async function qg(A, e, t) {
  return await A.apply(e, t);
}
function vi(A, e = {}, t) {
  for (const o in A) {
    const n = A[o], i = t ? `${t}:${o}` : o;
    typeof n == "object" && n !== null ? vi(n, e, i) : typeof n == "function" && (e[i] = n);
  }
  return e;
}
const zg = { run: (A) => A() }, Zg = () => zg, Ba = typeof console.createTask < "u" ? console.createTask : Zg;
function $g(A, e) {
  const t = e.shift(), o = Ba(t);
  return A.reduce(
    (n, i) => n.then(() => o.run(() => i(...e))),
    Promise.resolve()
  );
}
function Ad(A, e) {
  const t = e.shift(), o = Ba(t);
  return Promise.all(A.map((n) => o.run(() => n(...e))));
}
function oi(A, e) {
  for (const t of [...A])
    t(e);
}
class ed {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(e, t, o = {}) {
    if (!e || typeof t != "function")
      return () => {
      };
    const n = e;
    let i;
    for (; this._deprecatedHooks[e]; )
      i = this._deprecatedHooks[e], e = i.to;
    if (i && !o.allowDeprecated) {
      let r = i.message;
      r || (r = `${n} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(r) || (console.warn(r), this._deprecatedMessages.add(r));
    }
    if (!t.name)
      try {
        Object.defineProperty(t, "name", {
          get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
      t && (this.removeHook(e, t), t = void 0);
    };
  }
  hookOnce(e, t) {
    let o, n = (...i) => (typeof o == "function" && o(), o = void 0, n = void 0, t(...i));
    return o = this.hook(e, n), o;
  }
  removeHook(e, t) {
    if (this._hooks[e]) {
      const o = this._hooks[e].indexOf(t);
      o !== -1 && this._hooks[e].splice(o, 1), this._hooks[e].length === 0 && delete this._hooks[e];
    }
  }
  deprecateHook(e, t) {
    this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
    const o = this._hooks[e] || [];
    delete this._hooks[e];
    for (const n of o)
      this.hook(e, n);
  }
  deprecateHooks(e) {
    Object.assign(this._deprecatedHooks, e);
    for (const t in e)
      this.deprecateHook(t, e[t]);
  }
  addHooks(e) {
    const t = vi(e), o = Object.keys(t).map(
      (n) => this.hook(n, t[n])
    );
    return () => {
      for (const n of o.splice(0, o.length))
        n();
    };
  }
  removeHooks(e) {
    const t = vi(e);
    for (const o in t)
      this.removeHook(o, t[o]);
  }
  removeAllHooks() {
    for (const e in this._hooks)
      delete this._hooks[e];
  }
  callHook(e, ...t) {
    return t.unshift(e), this.callHookWith($g, e, ...t);
  }
  callHookParallel(e, ...t) {
    return t.unshift(e), this.callHookWith(Ad, e, ...t);
  }
  callHookWith(e, t, ...o) {
    const n = this._before || this._after ? { name: t, args: o, context: {} } : void 0;
    this._before && oi(this._before, n);
    const i = e(
      t in this._hooks ? [...this._hooks[t]] : [],
      o
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && n && oi(this._after, n);
    }) : (this._after && n && oi(this._after, n), i);
  }
  beforeEach(e) {
    return this._before = this._before || [], this._before.push(e), () => {
      if (this._before !== void 0) {
        const t = this._before.indexOf(e);
        t !== -1 && this._before.splice(t, 1);
      }
    };
  }
  afterEach(e) {
    return this._after = this._after || [], this._after.push(e), () => {
      if (this._after !== void 0) {
        const t = this._after.indexOf(e);
        t !== -1 && this._after.splice(t, 1);
      }
    };
  }
}
function Ia() {
  return new ed();
}
var td = Object.create, ma = Object.defineProperty, od = Object.getOwnPropertyDescriptor, ur = Object.getOwnPropertyNames, nd = Object.getPrototypeOf, id = Object.prototype.hasOwnProperty, rd = (A, e) => function() {
  return A && (e = (0, A[ur(A)[0]])(A = 0)), e;
}, ya = (A, e) => function() {
  return e || (0, A[ur(A)[0]])((e = { exports: {} }).exports, e), e.exports;
}, sd = (A, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of ur(e))
      !id.call(A, n) && n !== t && ma(A, n, { get: () => e[n], enumerable: !(o = od(e, n)) || o.enumerable });
  return A;
}, ld = (A, e, t) => (t = A != null ? td(nd(A)) : {}, sd(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ma(t, "default", { value: A, enumerable: !0 }),
  A
)), U = rd({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), ud = ya({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(A, e) {
    U(), (function(t) {
      var o = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, n = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], i = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, r = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, s = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), a = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), S = [".", "!", "~", "*", "'", "(", ")"].join(""), u = function(J, C) {
        var h = "-", I = "", g = "", Q = !0, R = {}, m, y, L, O, D, j, rA, hA, pA, sA, P, z, nA, Ee, WA = "";
        if (typeof J != "string")
          return "";
        if (typeof C == "string" && (h = C), rA = s.en, hA = r.en, typeof C == "object") {
          m = C.maintainCase || !1, R = C.custom && typeof C.custom == "object" ? C.custom : R, L = +C.truncate > 1 && C.truncate || !1, O = C.uric || !1, D = C.uricNoSlash || !1, j = C.mark || !1, Q = !(C.symbols === !1 || C.lang === !1), h = C.separator || h, O && (WA += l), D && (WA += a), j && (WA += S), rA = C.lang && s[C.lang] && Q ? s[C.lang] : Q ? s.en : {}, hA = C.lang && r[C.lang] ? r[C.lang] : C.lang === !1 || C.lang === !0 ? {} : r.en, C.titleCase && typeof C.titleCase.length == "number" && Array.prototype.toString.call(C.titleCase) ? (C.titleCase.forEach(function(xA) {
            R[xA + ""] = xA + "";
          }), y = !0) : y = !!C.titleCase, C.custom && typeof C.custom.length == "number" && Array.prototype.toString.call(C.custom) && C.custom.forEach(function(xA) {
            R[xA + ""] = xA + "";
          }), Object.keys(R).forEach(function(xA) {
            var _A;
            xA.length > 1 ? _A = new RegExp("\\b" + k(xA) + "\\b", "gi") : _A = new RegExp(k(xA), "gi"), J = J.replace(_A, R[xA]);
          });
          for (P in R)
            WA += P;
        }
        for (WA += h, WA = k(WA), J = J.replace(/(^\s+|\s+$)/g, ""), nA = !1, Ee = !1, sA = 0, z = J.length; sA < z; sA++)
          P = J[sA], p(P, R) ? nA = !1 : hA[P] ? (P = nA && hA[P].match(/[A-Za-z0-9]/) ? " " + hA[P] : hA[P], nA = !1) : P in o ? (sA + 1 < z && n.indexOf(J[sA + 1]) >= 0 ? (g += P, P = "") : Ee === !0 ? (P = i[g] + o[P], g = "") : P = nA && o[P].match(/[A-Za-z0-9]/) ? " " + o[P] : o[P], nA = !1, Ee = !1) : P in i ? (g += P, P = "", sA === z - 1 && (P = i[g]), Ee = !0) : /* process symbol chars */ rA[P] && !(O && l.indexOf(P) !== -1) && !(D && a.indexOf(P) !== -1) ? (P = nA || I.substr(-1).match(/[A-Za-z0-9]/) ? h + rA[P] : rA[P], P += J[sA + 1] !== void 0 && J[sA + 1].match(/[A-Za-z0-9]/) ? h : "", nA = !0) : (Ee === !0 ? (P = i[g] + P, g = "", Ee = !1) : nA && (/[A-Za-z0-9]/.test(P) || I.substr(-1).match(/A-Za-z0-9]/)) && (P = " " + P), nA = !1), I += P.replace(new RegExp("[^\\w\\s" + WA + "_-]", "g"), h);
        return y && (I = I.replace(/(\w)(\S*)/g, function(xA, _A, Et) {
          var Xt = _A.toUpperCase() + (Et !== null ? Et : "");
          return Object.keys(R).indexOf(Xt.toLowerCase()) < 0 ? Xt : Xt.toLowerCase();
        })), I = I.replace(/\s+/g, h).replace(new RegExp("\\" + h + "+", "g"), h).replace(new RegExp("(^\\" + h + "+|\\" + h + "+$)", "g"), ""), L && I.length > L && (pA = I.charAt(L) === h, I = I.slice(0, L), pA || (I = I.slice(0, I.lastIndexOf(h)))), !m && !y && (I = I.toLowerCase()), I;
      }, f = function(J) {
        return function(h) {
          return u(h, J);
        };
      }, k = function(J) {
        return J.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, p = function(B, J) {
        for (var C in J)
          if (J[C] === B)
            return !0;
      };
      if (typeof e < "u" && e.exports)
        e.exports = u, e.exports.createSlug = f;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return u;
        });
      else
        try {
          if (t.getSlug || t.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          t.getSlug = u, t.createSlug = f;
        } catch {
        }
    })(A);
  }
}), ad = ya({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(A, e) {
    U(), e.exports = ud();
  }
});
U();
U();
U();
U();
U();
U();
U();
U();
function Sd(A) {
  var e;
  const t = A.name || A._componentTag || A.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || A.__name;
  return t === "index" && ((e = A.__file) != null && e.endsWith("index.vue")) ? "" : t;
}
function cd(A) {
  const e = A.__file;
  if (e)
    return Wg(_g(e, ".vue"));
}
function vs(A, e) {
  return A.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = e, e;
}
function ar(A) {
  if (A.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return A.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (A.root)
    return A.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function va(A) {
  var e, t;
  const o = (e = A.subTree) == null ? void 0 : e.type, n = ar(A);
  return n ? ((t = n?.types) == null ? void 0 : t.Fragment) === o : !1;
}
function Vn(A) {
  var e, t, o;
  const n = Sd(A?.type || {});
  if (n)
    return n;
  if (A?.root === A)
    return "Root";
  for (const r in (t = (e = A.parent) == null ? void 0 : e.type) == null ? void 0 : t.components)
    if (A.parent.type.components[r] === A?.type)
      return vs(A, r);
  for (const r in (o = A.appContext) == null ? void 0 : o.components)
    if (A.appContext.components[r] === A?.type)
      return vs(A, r);
  const i = cd(A?.type || {});
  return i || "Anonymous Component";
}
function kd(A) {
  var e, t, o;
  const n = (o = (t = (e = A?.appContext) == null ? void 0 : e.app) == null ? void 0 : t.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? o : 0, i = A === A?.root ? "root" : A.uid;
  return `${n}:${i}`;
}
function bi(A, e) {
  return e = e || `${A.id}:root`, A.instanceMap.get(e) || A.instanceMap.get(":root");
}
function fd() {
  const A = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return A.right - A.left;
    },
    get height() {
      return A.bottom - A.top;
    }
  };
  return A;
}
var jo;
function gd(A) {
  return jo || (jo = document.createRange()), jo.selectNode(A), jo.getBoundingClientRect();
}
function dd(A) {
  const e = fd();
  if (!A.children)
    return e;
  for (let t = 0, o = A.children.length; t < o; t++) {
    const n = A.children[t];
    let i;
    if (n.component)
      i = dt(n.component);
    else if (n.el) {
      const r = n.el;
      r.nodeType === 1 || r.getBoundingClientRect ? i = r.getBoundingClientRect() : r.nodeType === 3 && r.data.trim() && (i = gd(r));
    }
    i && pd(e, i);
  }
  return e;
}
function pd(A, e) {
  return (!A.top || e.top < A.top) && (A.top = e.top), (!A.bottom || e.bottom > A.bottom) && (A.bottom = e.bottom), (!A.left || e.left < A.left) && (A.left = e.left), (!A.right || e.right > A.right) && (A.right = e.right), A;
}
var bs = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function dt(A) {
  const e = A.subTree.el;
  return typeof window > "u" ? bs : va(A) ? dd(A.subTree) : e?.nodeType === 1 ? e?.getBoundingClientRect() : A.subTree.component ? dt(A.subTree.component) : bs;
}
U();
function Sr(A) {
  return va(A) ? Cd(A.subTree) : A.subTree ? [A.subTree.el] : [];
}
function Cd(A) {
  if (!A.children)
    return [];
  const e = [];
  return A.children.forEach((t) => {
    t.component ? e.push(...Sr(t.component)) : t?.el && e.push(t.el);
  }), e;
}
var ba = "__vue-devtools-component-inspector__", Ja = "__vue-devtools-component-inspector__card__", xa = "__vue-devtools-component-inspector__name__", Da = "__vue-devtools-component-inspector__indicator__", wa = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, Ed = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, hd = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Wt() {
  return document.getElementById(ba);
}
function Qd() {
  return document.getElementById(Ja);
}
function Bd() {
  return document.getElementById(Da);
}
function Id() {
  return document.getElementById(xa);
}
function cr(A) {
  return {
    left: `${Math.round(A.left * 100) / 100}px`,
    top: `${Math.round(A.top * 100) / 100}px`,
    width: `${Math.round(A.width * 100) / 100}px`,
    height: `${Math.round(A.height * 100) / 100}px`
  };
}
function kr(A) {
  var e;
  const t = document.createElement("div");
  t.id = (e = A.elementId) != null ? e : ba, Object.assign(t.style, {
    ...wa,
    ...cr(A.bounds),
    ...A.style
  });
  const o = document.createElement("span");
  o.id = Ja, Object.assign(o.style, {
    ...Ed,
    top: A.bounds.top < 35 ? 0 : "-35px"
  });
  const n = document.createElement("span");
  n.id = xa, n.innerHTML = `&lt;${A.name}&gt;&nbsp;&nbsp;`;
  const i = document.createElement("i");
  return i.id = Da, i.innerHTML = `${Math.round(A.bounds.width * 100) / 100} x ${Math.round(A.bounds.height * 100) / 100}`, Object.assign(i.style, hd), o.appendChild(n), o.appendChild(i), t.appendChild(o), document.body.appendChild(t), t;
}
function fr(A) {
  const e = Wt(), t = Qd(), o = Id(), n = Bd();
  e && (Object.assign(e.style, {
    ...wa,
    ...cr(A.bounds)
  }), Object.assign(t.style, {
    top: A.bounds.top < 35 ? 0 : "-35px"
  }), o.innerHTML = `&lt;${A.name}&gt;&nbsp;&nbsp;`, n.innerHTML = `${Math.round(A.bounds.width * 100) / 100} x ${Math.round(A.bounds.height * 100) / 100}`);
}
function md(A) {
  const e = dt(A);
  if (!e.width && !e.height)
    return;
  const t = Vn(A);
  Wt() ? fr({ bounds: e, name: t }) : kr({ bounds: e, name: t });
}
function Ua() {
  const A = Wt();
  A && (A.style.display = "none");
}
var Ji = null;
function xi(A) {
  const e = A.target;
  if (e) {
    const t = e.__vueParentComponent;
    if (t && (Ji = t, t.vnode.el)) {
      const n = dt(t), i = Vn(t);
      Wt() ? fr({ bounds: n, name: i }) : kr({ bounds: n, name: i });
    }
  }
}
function yd(A, e) {
  if (A.preventDefault(), A.stopPropagation(), Ji) {
    const t = kd(Ji);
    e(t);
  }
}
var Cn = null;
function vd() {
  Ua(), window.removeEventListener("mouseover", xi), window.removeEventListener("click", Cn, !0), Cn = null;
}
function bd() {
  return window.addEventListener("mouseover", xi), new Promise((A) => {
    function e(t) {
      t.preventDefault(), t.stopPropagation(), yd(t, (o) => {
        window.removeEventListener("click", e, !0), Cn = null, window.removeEventListener("mouseover", xi);
        const n = Wt();
        n && (n.style.display = "none"), A(JSON.stringify({ id: o }));
      });
    }
    Cn = e, window.addEventListener("click", e, !0);
  });
}
function Jd(A) {
  const e = bi(YA.value, A.id);
  if (e) {
    const [t] = Sr(e);
    if (typeof t.scrollIntoView == "function")
      t.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const o = dt(e), n = document.createElement("div"), i = {
        ...cr(o),
        position: "absolute"
      };
      Object.assign(n.style, i), document.body.appendChild(n), n.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(n);
      }, 2e3);
    }
    setTimeout(() => {
      const o = dt(e);
      if (o.width || o.height) {
        const n = Vn(e), i = Wt();
        i ? fr({ ...A, name: n, bounds: o }) : kr({ ...A, name: n, bounds: o }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
U();
var Js, xs;
(xs = (Js = Y).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Js.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function xd(A) {
  let e = 0;
  const t = setInterval(() => {
    Y.__VUE_INSPECTOR__ && (clearInterval(t), e += 30, A()), e >= /* 5s */
    5e3 && clearInterval(t);
  }, 30);
}
function Dd() {
  const A = Y.__VUE_INSPECTOR__, e = A.openInEditor;
  A.openInEditor = async (...t) => {
    A.disable(), e(...t);
  };
}
function wd() {
  return new Promise((A) => {
    function e() {
      Dd(), A(Y.__VUE_INSPECTOR__);
    }
    Y.__VUE_INSPECTOR__ ? e() : xd(() => {
      e();
    });
  });
}
U();
U();
function Ud(A) {
  return !!(A && A.__v_isReadonly);
}
function Fa(A) {
  return Ud(A) ? Fa(A.__v_raw) : !!(A && A.__v_isReactive);
}
function ni(A) {
  return !!(A && A.__v_isRef === !0);
}
function no(A) {
  const e = A && A.__v_raw;
  return e ? no(e) : A;
}
var Fd = class {
  constructor() {
    this.refEditor = new Kd();
  }
  set(A, e, t, o) {
    const n = Array.isArray(e) ? e : e.split(".");
    for (; n.length > 1; ) {
      const s = n.shift();
      A instanceof Map ? A = A.get(s) : A instanceof Set ? A = Array.from(A.values())[s] : A = A[s], this.refEditor.isRef(A) && (A = this.refEditor.get(A));
    }
    const i = n[0], r = this.refEditor.get(A)[i];
    o ? o(A, i, t) : this.refEditor.isRef(r) ? this.refEditor.set(r, t) : A[i] = t;
  }
  get(A, e) {
    const t = Array.isArray(e) ? e : e.split(".");
    for (let o = 0; o < t.length; o++)
      if (A instanceof Map ? A = A.get(t[o]) : A = A[t[o]], this.refEditor.isRef(A) && (A = this.refEditor.get(A)), !A)
        return;
    return A;
  }
  has(A, e, t = !1) {
    if (typeof A > "u")
      return !1;
    const o = Array.isArray(e) ? e.slice() : e.split("."), n = t ? 2 : 1;
    for (; A && o.length > n; ) {
      const i = o.shift();
      A = A[i], this.refEditor.isRef(A) && (A = this.refEditor.get(A));
    }
    return A != null && Object.prototype.hasOwnProperty.call(A, o[0]);
  }
  createDefaultSetCallback(A) {
    return (e, t, o) => {
      if ((A.remove || A.newKey) && (Array.isArray(e) ? e.splice(t, 1) : no(e) instanceof Map ? e.delete(t) : no(e) instanceof Set ? e.delete(Array.from(e.values())[t]) : Reflect.deleteProperty(e, t)), !A.remove) {
        const n = e[A.newKey || t];
        this.refEditor.isRef(n) ? this.refEditor.set(n, o) : no(e) instanceof Map ? e.set(A.newKey || t, o) : no(e) instanceof Set ? e.add(o) : e[A.newKey || t] = o;
      }
    };
  }
}, Kd = class {
  set(A, e) {
    if (ni(A))
      A.value = e;
    else {
      if (A instanceof Set && Array.isArray(e)) {
        A.clear(), e.forEach((n) => A.add(n));
        return;
      }
      const t = Object.keys(e);
      if (A instanceof Map) {
        const n = new Set(A.keys());
        t.forEach((i) => {
          A.set(i, Reflect.get(e, i)), n.delete(i);
        }), n.forEach((i) => A.delete(i));
        return;
      }
      const o = new Set(Object.keys(A));
      t.forEach((n) => {
        Reflect.set(A, n, Reflect.get(e, n)), o.delete(n);
      }), o.forEach((n) => Reflect.deleteProperty(A, n));
    }
  }
  get(A) {
    return ni(A) ? A.value : A;
  }
  isRef(A) {
    return ni(A) || Fa(A);
  }
};
U();
U();
U();
var Od = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Nd() {
  if (typeof window > "u" || !Qa || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const A = typeof localStorage.getItem < "u" ? localStorage.getItem(Od) : null;
  return A ? JSON.parse(A) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
U();
U();
U();
var Ds, ws;
(ws = (Ds = Y).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ds.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var Td = new Proxy(Y.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(A, e, t) {
    return Reflect.get(A, e, t);
  }
});
function Md(A, e) {
  bA.timelineLayersState[e.id] = !1, Td.push({
    ...A,
    descriptorId: e.id,
    appRecord: ar(e.app)
  });
}
var Us, Fs;
(Fs = (Us = Y).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Us.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var gr = new Proxy(Y.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(A, e, t) {
    return Reflect.get(A, e, t);
  }
}), Ka = Rt(() => {
  _t.hooks.callHook("sendInspectorToClient", Oa());
});
function Rd(A, e) {
  var t, o;
  gr.push({
    options: A,
    descriptor: e,
    treeFilterPlaceholder: (t = A.treeFilterPlaceholder) != null ? t : "Search tree...",
    stateFilterPlaceholder: (o = A.stateFilterPlaceholder) != null ? o : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: ar(e.app)
  }), Ka();
}
function Oa() {
  return gr.filter((A) => A.descriptor.app === YA.value.app).filter((A) => A.descriptor.id !== "components").map((A) => {
    var e;
    const t = A.descriptor, o = A.options;
    return {
      id: o.id,
      label: o.label,
      logo: t.logo,
      icon: `custom-ic-baseline-${(e = o?.icon) == null ? void 0 : e.replace(/_/g, "-")}`,
      packageName: t.packageName,
      homepage: t.homepage,
      pluginId: t.id
    };
  });
}
function $o(A, e) {
  return gr.find((t) => t.options.id === A && (e ? t.descriptor.app === e : !0));
}
function Vd() {
  const A = Ia();
  A.hook("addInspector", ({ inspector: o, plugin: n }) => {
    Rd(o, n.descriptor);
  });
  const e = Rt(async ({ inspectorId: o, plugin: n }) => {
    var i;
    if (!o || !((i = n?.descriptor) != null && i.app) || bA.highPerfModeEnabled)
      return;
    const r = $o(o, n.descriptor.app), s = {
      app: n.descriptor.app,
      inspectorId: o,
      filter: r?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((l) => {
      A.callHookWith(
        async (a) => {
          await Promise.all(a.map((S) => S(s))), l();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), A.callHookWith(
      async (l) => {
        await Promise.all(l.map((a) => a({
          inspectorId: o,
          rootNodes: s.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  A.hook("sendInspectorTree", e);
  const t = Rt(async ({ inspectorId: o, plugin: n }) => {
    var i;
    if (!o || !((i = n?.descriptor) != null && i.app) || bA.highPerfModeEnabled)
      return;
    const r = $o(o, n.descriptor.app), s = {
      app: n.descriptor.app,
      inspectorId: o,
      nodeId: r?.selectedNodeId || "",
      state: null
    }, l = {
      currentTab: `custom-inspector:${o}`
    };
    s.nodeId && await new Promise((a) => {
      A.callHookWith(
        async (S) => {
          await Promise.all(S.map((u) => u(s, l))), a();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), A.callHookWith(
      async (a) => {
        await Promise.all(a.map((S) => S({
          inspectorId: o,
          nodeId: s.nodeId,
          state: s.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return A.hook("sendInspectorState", t), A.hook("customInspectorSelectNode", ({ inspectorId: o, nodeId: n, plugin: i }) => {
    const r = $o(o, i.descriptor.app);
    r && (r.selectedNodeId = n);
  }), A.hook("timelineLayerAdded", ({ options: o, plugin: n }) => {
    Md(o, n.descriptor);
  }), A.hook("timelineEventAdded", ({ options: o, plugin: n }) => {
    var i;
    const r = ["performance", "component-event", "keyboard", "mouse"];
    bA.highPerfModeEnabled || !((i = bA.timelineLayersState) != null && i[n.descriptor.id]) && !r.includes(o.layerId) || A.callHookWith(
      async (s) => {
        await Promise.all(s.map((l) => l(o)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), A.hook("getComponentInstances", async ({ app: o }) => {
    const n = o.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!n)
      return null;
    const i = n.id.toString();
    return [...n.instanceMap].filter(([s]) => s.split(":")[0] === i).map(([, s]) => s);
  }), A.hook("getComponentBounds", async ({ instance: o }) => dt(o)), A.hook("getComponentName", ({ instance: o }) => Vn(o)), A.hook("componentHighlight", ({ uid: o }) => {
    const n = YA.value.instanceMap.get(o);
    n && md(n);
  }), A.hook("componentUnhighlight", () => {
    Ua();
  }), A;
}
var Ks, Os;
(Os = (Ks = Y).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Ks.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Ns, Ts;
(Ts = (Ns = Y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Ns.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Ms, Rs;
(Rs = (Ms = Y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Ms.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Vs, Ls;
(Ls = (Vs = Y).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Vs.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Hs, Ps;
(Ps = (Hs = Y).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Hs.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var lt = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Ld() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: Nd()
  };
}
var Ys, js;
(js = (Ys = Y)[lt]) != null || (Ys[lt] = Ld());
var Hd = Rt((A) => {
  _t.hooks.callHook("devtoolsStateUpdated", { state: A });
});
Rt((A, e) => {
  _t.hooks.callHook("devtoolsConnectedUpdated", { state: A, oldState: e });
});
var Ln = new Proxy(Y.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(A, e, t) {
    return e === "value" ? Y.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : Y.__VUE_DEVTOOLS_KIT_APP_RECORDS__[e];
  }
}), YA = new Proxy(Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(A, e, t) {
    return e === "value" ? Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : e === "id" ? Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[e];
  }
});
function Na() {
  Hd({
    ...Y[lt],
    appRecords: Ln.value,
    activeAppRecordId: YA.id,
    tabs: Y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: Y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Pd(A) {
  Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = A, Na();
}
function Yd(A) {
  Y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = A, Na();
}
var bA = new Proxy(Y[lt], {
  get(A, e) {
    return e === "appRecords" ? Ln : e === "activeAppRecordId" ? YA.id : e === "tabs" ? Y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : e === "commands" ? Y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : Y[lt][e];
  },
  deleteProperty(A, e) {
    return delete A[e], !0;
  },
  set(A, e, t) {
    return { ...Y[lt] }, A[e] = t, Y[lt][e] = t, !0;
  }
});
function jd(A = {}) {
  var e, t, o;
  const { file: n, host: i, baseUrl: r = window.location.origin, line: s = 0, column: l = 0 } = A;
  if (n) {
    if (i === "chrome-extension") {
      const a = n.replace(/\\/g, "\\\\"), S = (t = (e = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : e.openInEditorHost) != null ? t : "/";
      fetch(`${S}__open-in-editor?file=${encodeURI(n)}`).then((u) => {
        if (!u.ok) {
          const f = `Opening component ${a} failed`;
          console.log(`%c${f}`, "color:red");
        }
      });
    } else if (bA.vitePluginDetected) {
      const a = (o = Y.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? o : r;
      Y.__VUE_INSPECTOR__.openInEditor(a, n, s, l);
    }
  }
}
U();
U();
U();
U();
U();
var Gs, Ws;
(Ws = (Gs = Y).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Gs.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var dr = new Proxy(Y.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(A, e, t) {
    return Reflect.get(A, e, t);
  }
});
function Di(A) {
  const e = {};
  return Object.keys(A).forEach((t) => {
    e[t] = A[t].defaultValue;
  }), e;
}
function pr(A) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${A}__`;
}
function Gd(A) {
  var e, t, o;
  const n = (t = (e = dr.find((i) => {
    var r;
    return i[0].id === A && !!((r = i[0]) != null && r.settings);
  })) == null ? void 0 : e[0]) != null ? t : null;
  return (o = n?.settings) != null ? o : null;
}
function Ta(A, e) {
  var t, o, n;
  const i = pr(A);
  if (i) {
    const r = localStorage.getItem(i);
    if (r)
      return JSON.parse(r);
  }
  if (A) {
    const r = (o = (t = dr.find((s) => s[0].id === A)) == null ? void 0 : t[0]) != null ? o : null;
    return Di((n = r?.settings) != null ? n : {});
  }
  return Di(e);
}
function Wd(A, e) {
  const t = pr(A);
  localStorage.getItem(t) || localStorage.setItem(t, JSON.stringify(Di(e)));
}
function _d(A, e, t) {
  const o = pr(A), n = localStorage.getItem(o), i = JSON.parse(n || "{}"), r = {
    ...i,
    [e]: t
  };
  localStorage.setItem(o, JSON.stringify(r)), _t.hooks.callHookWith(
    (s) => {
      s.forEach((l) => l({
        pluginId: A,
        key: e,
        oldValue: i[e],
        newValue: t,
        settings: r
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
var _s, Xs, Ae = (Xs = (_s = Y).__VUE_DEVTOOLS_HOOK) != null ? Xs : _s.__VUE_DEVTOOLS_HOOK = Ia(), Xd = {
  vueAppInit(A) {
    Ae.hook("app:init", A);
  },
  vueAppUnmount(A) {
    Ae.hook("app:unmount", A);
  },
  vueAppConnected(A) {
    Ae.hook("app:connected", A);
  },
  componentAdded(A) {
    return Ae.hook("component:added", A);
  },
  componentEmit(A) {
    return Ae.hook("component:emit", A);
  },
  componentUpdated(A) {
    return Ae.hook("component:updated", A);
  },
  componentRemoved(A) {
    return Ae.hook("component:removed", A);
  },
  setupDevtoolsPlugin(A) {
    Ae.hook("devtools-plugin:setup", A);
  },
  perfStart(A) {
    return Ae.hook("perf:start", A);
  },
  perfEnd(A) {
    return Ae.hook("perf:end", A);
  }
}, Ma = {
  on: Xd,
  setupDevToolsPlugin(A, e) {
    return Ae.callHook("devtools-plugin:setup", A, e);
  }
}, qd = class {
  constructor({ plugin: A, ctx: e }) {
    this.hooks = e.hooks, this.plugin = A;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (A) => {
        this.hooks.hook("visitComponentTree", A);
      },
      inspectComponent: (A) => {
        this.hooks.hook("inspectComponent", A);
      },
      editComponentState: (A) => {
        this.hooks.hook("editComponentState", A);
      },
      // custom inspector
      getInspectorTree: (A) => {
        this.hooks.hook("getInspectorTree", A);
      },
      getInspectorState: (A) => {
        this.hooks.hook("getInspectorState", A);
      },
      editInspectorState: (A) => {
        this.hooks.hook("editInspectorState", A);
      },
      // timeline
      inspectTimelineEvent: (A) => {
        this.hooks.hook("inspectTimelineEvent", A);
      },
      timelineCleared: (A) => {
        this.hooks.hook("timelineCleared", A);
      },
      // settings
      setPluginSettings: (A) => {
        this.hooks.hook("setPluginSettings", A);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(A) {
    var e;
    if (bA.highPerfModeEnabled)
      return;
    const t = Oa().find((o) => o.packageName === this.plugin.descriptor.packageName);
    if (t?.id) {
      if (A) {
        const o = [
          A.appContext.app,
          A.uid,
          (e = A.parent) == null ? void 0 : e.uid,
          A
        ];
        Ae.callHook("component:updated", ...o);
      } else
        Ae.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: t.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(A) {
    this.hooks.callHook("addInspector", { inspector: A, plugin: this.plugin }), this.plugin.descriptor.settings && Wd(A.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(A) {
    bA.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: A, plugin: this.plugin });
  }
  sendInspectorState(A) {
    bA.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: A, plugin: this.plugin });
  }
  selectInspectorNode(A, e) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: A, nodeId: e, plugin: this.plugin });
  }
  visitComponentTree(A) {
    return this.hooks.callHook("visitComponentTree", A);
  }
  // timeline
  now() {
    return bA.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(A) {
    this.hooks.callHook("timelineLayerAdded", { options: A, plugin: this.plugin });
  }
  addTimelineEvent(A) {
    bA.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: A, plugin: this.plugin });
  }
  // settings
  getSettings(A) {
    return Ta(A ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(A) {
    return this.hooks.callHook("getComponentInstances", { app: A });
  }
  getComponentBounds(A) {
    return this.hooks.callHook("getComponentBounds", { instance: A });
  }
  getComponentName(A) {
    return this.hooks.callHook("getComponentName", { instance: A });
  }
  highlightElement(A) {
    const e = A.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: e });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, zd = qd;
U();
U();
U();
U();
var Zd = "__vue_devtool_undefined__", $d = "__vue_devtool_infinity__", Ap = "__vue_devtool_negative_infinity__", ep = "__vue_devtool_nan__";
U();
U();
var tp = {
  [Zd]: "undefined",
  [ep]: "NaN",
  [$d]: "Infinity",
  [Ap]: "-Infinity"
};
Object.entries(tp).reduce((A, [e, t]) => (A[t] = e, A), {});
U();
U();
U();
U();
U();
var qs, zs;
(zs = (qs = Y).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (qs.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Ra(A, e) {
  return Ma.setupDevToolsPlugin(A, e);
}
function op(A, e) {
  const [t, o] = A;
  if (t.app !== e)
    return;
  const n = new zd({
    plugin: {
      setupFn: o,
      descriptor: t
    },
    ctx: _t
  });
  t.packageName === "vuex" && n.on.editInspectorState((i) => {
    n.sendInspectorState(i.inspectorId);
  }), o(n);
}
function Va(A, e) {
  Y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(A) || bA.highPerfModeEnabled && !e?.inspectingComponent || (Y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(A), dr.forEach((t) => {
    op(t, A);
  }));
}
U();
U();
var Io = "__VUE_DEVTOOLS_ROUTER__", Vt = "__VUE_DEVTOOLS_ROUTER_INFO__", Zs, $s;
($s = (Zs = Y)[Vt]) != null || (Zs[Vt] = {
  currentRoute: null,
  routes: []
});
var Al, el;
(el = (Al = Y)[Io]) != null || (Al[Io] = {});
new Proxy(Y[Vt], {
  get(A, e) {
    return Y[Vt][e];
  }
});
new Proxy(Y[Io], {
  get(A, e) {
    if (e === "value")
      return Y[Io];
  }
});
function np(A) {
  const e = /* @__PURE__ */ new Map();
  return (A?.getRoutes() || []).filter((t) => !e.has(t.path) && e.set(t.path, 1));
}
function Cr(A) {
  return A.map((e) => {
    let { path: t, name: o, children: n, meta: i } = e;
    return n?.length && (n = Cr(n)), {
      path: t,
      name: o,
      children: n,
      meta: i
    };
  });
}
function ip(A) {
  if (A) {
    const { fullPath: e, hash: t, href: o, path: n, name: i, matched: r, params: s, query: l } = A;
    return {
      fullPath: e,
      hash: t,
      href: o,
      path: n,
      name: i,
      params: s,
      query: l,
      matched: Cr(r)
    };
  }
  return A;
}
function rp(A, e) {
  function t() {
    var o;
    const n = (o = A.app) == null ? void 0 : o.config.globalProperties.$router, i = ip(n?.currentRoute.value), r = Cr(np(n)), s = console.warn;
    console.warn = () => {
    }, Y[Vt] = {
      currentRoute: i ? ys(i) : {},
      routes: ys(r)
    }, Y[Io] = n, console.warn = s;
  }
  t(), Ma.on.componentUpdated(Rt(() => {
    var o;
    ((o = e.value) == null ? void 0 : o.app) === A.app && (t(), !bA.highPerfModeEnabled && _t.hooks.callHook("routerInfoUpdated", { state: Y[Vt] }));
  }, 200));
}
function sp(A) {
  return {
    // get inspector tree
    async getInspectorTree(e) {
      const t = {
        ...e,
        app: YA.value.app,
        rootNodes: []
      };
      return await new Promise((o) => {
        A.callHookWith(
          async (n) => {
            await Promise.all(n.map((i) => i(t))), o();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), t.rootNodes;
    },
    // get inspector state
    async getInspectorState(e) {
      const t = {
        ...e,
        app: YA.value.app,
        state: null
      }, o = {
        currentTab: `custom-inspector:${e.inspectorId}`
      };
      return await new Promise((n) => {
        A.callHookWith(
          async (i) => {
            await Promise.all(i.map((r) => r(t, o))), n();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), t.state;
    },
    // edit inspector state
    editInspectorState(e) {
      const t = new Fd(), o = {
        ...e,
        app: YA.value.app,
        set: (n, i = e.path, r = e.state.value, s) => {
          t.set(n, i, r, s || t.createDefaultSetCallback(e.state));
        }
      };
      A.callHookWith(
        (n) => {
          n.forEach((i) => i(o));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(e) {
      const t = $o(e);
      A.callHook("sendInspectorState", { inspectorId: e, plugin: {
        descriptor: t.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return bd();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return vd();
    },
    // get component render code
    getComponentRenderCode(e) {
      const t = bi(YA.value, e);
      if (t)
        return typeof t?.type != "function" ? t.render.toString() : t.type.toString();
    },
    // scroll to component
    scrollToComponent(e) {
      return Jd({ id: e });
    },
    // open in editor
    openInEditor: jd,
    // get vue inspector
    getVueInspector: wd,
    // toggle app
    toggleApp(e, t) {
      const o = Ln.value.find((n) => n.id === e);
      o && (Yd(e), Pd(o), rp(o, YA), Ka(), Va(o.app, t));
    },
    // inspect dom
    inspectDOM(e) {
      const t = bi(YA.value, e);
      if (t) {
        const [o] = Sr(t);
        o && (Y.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = o);
      }
    },
    updatePluginSettings(e, t, o) {
      _d(e, t, o);
    },
    getPluginSettings(e) {
      return {
        options: Gd(e),
        values: Ta(e)
      };
    }
  };
}
U();
var tl, ol;
(ol = (tl = Y).__VUE_DEVTOOLS_ENV__) != null || (tl.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var nl = Vd(), il, rl;
(rl = (il = Y).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (il.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: nl,
  get state() {
    return {
      ...bA,
      activeAppRecordId: YA.id,
      activeAppRecord: YA.value,
      appRecords: Ln.value
    };
  },
  api: sp(nl)
});
var _t = Y.__VUE_DEVTOOLS_KIT_CONTEXT__;
U();
ld(ad());
var sl, ll;
(ll = (sl = Y).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (sl.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
U();
U();
function lp(A) {
  bA.highPerfModeEnabled = A ?? !bA.highPerfModeEnabled, !A && YA.value && Va(YA.value.app);
}
U();
U();
U();
function up(A) {
  bA.devtoolsClientDetected = {
    ...bA.devtoolsClientDetected,
    ...A
  };
  const e = Object.values(bA.devtoolsClientDetected).some(Boolean);
  lp(!e);
}
var ul, al;
(al = (ul = Y).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (ul.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = up);
U();
U();
U();
U();
U();
U();
U();
var ap = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(A, e) {
    this.keyToValue.set(A, e), this.valueToKey.set(e, A);
  }
  getByKey(A) {
    return this.keyToValue.get(A);
  }
  getByValue(A) {
    return this.valueToKey.get(A);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, La = class {
  constructor(A) {
    this.generateIdentifier = A, this.kv = new ap();
  }
  register(A, e) {
    this.kv.getByValue(A) || (e || (e = this.generateIdentifier(A)), this.kv.set(e, A));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(A) {
    return this.kv.getByValue(A);
  }
  getValue(A) {
    return this.kv.getByKey(A);
  }
}, Sp = class extends La {
  constructor() {
    super((A) => A.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(A, e) {
    typeof e == "object" ? (e.allowProps && this.classToAllowedProps.set(A, e.allowProps), super.register(A, e.identifier)) : super.register(A, e);
  }
  getAllowedProps(A) {
    return this.classToAllowedProps.get(A);
  }
};
U();
U();
function cp(A) {
  if ("values" in Object)
    return Object.values(A);
  const e = [];
  for (const t in A)
    A.hasOwnProperty(t) && e.push(A[t]);
  return e;
}
function kp(A, e) {
  const t = cp(A);
  if ("find" in t)
    return t.find(e);
  const o = t;
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (e(i))
      return i;
  }
}
function Lt(A, e) {
  Object.entries(A).forEach(([t, o]) => e(o, t));
}
function An(A, e) {
  return A.indexOf(e) !== -1;
}
function Sl(A, e) {
  for (let t = 0; t < A.length; t++) {
    const o = A[t];
    if (e(o))
      return o;
  }
}
var fp = class {
  constructor() {
    this.transfomers = {};
  }
  register(A) {
    this.transfomers[A.name] = A;
  }
  findApplicable(A) {
    return kp(this.transfomers, (e) => e.isApplicable(A));
  }
  findByName(A) {
    return this.transfomers[A];
  }
};
U();
U();
var gp = (A) => Object.prototype.toString.call(A).slice(8, -1), Ha = (A) => typeof A > "u", dp = (A) => A === null, mo = (A) => typeof A != "object" || A === null || A === Object.prototype ? !1 : Object.getPrototypeOf(A) === null ? !0 : Object.getPrototypeOf(A) === Object.prototype, wi = (A) => mo(A) && Object.keys(A).length === 0, et = (A) => Array.isArray(A), pp = (A) => typeof A == "string", Cp = (A) => typeof A == "number" && !isNaN(A), Ep = (A) => typeof A == "boolean", hp = (A) => A instanceof RegExp, yo = (A) => A instanceof Map, vo = (A) => A instanceof Set, Pa = (A) => gp(A) === "Symbol", Qp = (A) => A instanceof Date && !isNaN(A.valueOf()), Bp = (A) => A instanceof Error, cl = (A) => typeof A == "number" && isNaN(A), Ip = (A) => Ep(A) || dp(A) || Ha(A) || Cp(A) || pp(A) || Pa(A), mp = (A) => typeof A == "bigint", yp = (A) => A === 1 / 0 || A === -1 / 0, vp = (A) => ArrayBuffer.isView(A) && !(A instanceof DataView), bp = (A) => A instanceof URL;
U();
var Ya = (A) => A.replace(/\./g, "\\."), ii = (A) => A.map(String).map(Ya).join("."), fo = (A) => {
  const e = [];
  let t = "";
  for (let n = 0; n < A.length; n++) {
    let i = A.charAt(n);
    if (i === "\\" && A.charAt(n + 1) === ".") {
      t += ".", n++;
      continue;
    }
    if (i === ".") {
      e.push(t), t = "";
      continue;
    }
    t += i;
  }
  const o = t;
  return e.push(o), e;
};
U();
function me(A, e, t, o) {
  return {
    isApplicable: A,
    annotation: e,
    transform: t,
    untransform: o
  };
}
var ja = [
  me(Ha, "undefined", () => null, () => {
  }),
  me(mp, "bigint", (A) => A.toString(), (A) => typeof BigInt < "u" ? BigInt(A) : (console.error("Please add a BigInt polyfill."), A)),
  me(Qp, "Date", (A) => A.toISOString(), (A) => new Date(A)),
  me(Bp, "Error", (A, e) => {
    const t = {
      name: A.name,
      message: A.message
    };
    return e.allowedErrorProps.forEach((o) => {
      t[o] = A[o];
    }), t;
  }, (A, e) => {
    const t = new Error(A.message);
    return t.name = A.name, t.stack = A.stack, e.allowedErrorProps.forEach((o) => {
      t[o] = A[o];
    }), t;
  }),
  me(hp, "regexp", (A) => "" + A, (A) => {
    const e = A.slice(1, A.lastIndexOf("/")), t = A.slice(A.lastIndexOf("/") + 1);
    return new RegExp(e, t);
  }),
  me(
    vo,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (A) => [...A.values()],
    (A) => new Set(A)
  ),
  me(yo, "map", (A) => [...A.entries()], (A) => new Map(A)),
  me((A) => cl(A) || yp(A), "number", (A) => cl(A) ? "NaN" : A > 0 ? "Infinity" : "-Infinity", Number),
  me((A) => A === 0 && 1 / A === -1 / 0, "number", () => "-0", Number),
  me(bp, "URL", (A) => A.toString(), (A) => new URL(A))
];
function Hn(A, e, t, o) {
  return {
    isApplicable: A,
    annotation: e,
    transform: t,
    untransform: o
  };
}
var Ga = Hn((A, e) => Pa(A) ? !!e.symbolRegistry.getIdentifier(A) : !1, (A, e) => ["symbol", e.symbolRegistry.getIdentifier(A)], (A) => A.description, (A, e, t) => {
  const o = t.symbolRegistry.getValue(e[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown symbol");
  return o;
}), Jp = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((A, e) => (A[e.name] = e, A), {}), Wa = Hn(vp, (A) => ["typed-array", A.constructor.name], (A) => [...A], (A, e) => {
  const t = Jp[e[1]];
  if (!t)
    throw new Error("Trying to deserialize unknown typed array");
  return new t(A);
});
function _a(A, e) {
  return A?.constructor ? !!e.classRegistry.getIdentifier(A.constructor) : !1;
}
var Xa = Hn(_a, (A, e) => ["class", e.classRegistry.getIdentifier(A.constructor)], (A, e) => {
  const t = e.classRegistry.getAllowedProps(A.constructor);
  if (!t)
    return { ...A };
  const o = {};
  return t.forEach((n) => {
    o[n] = A[n];
  }), o;
}, (A, e, t) => {
  const o = t.classRegistry.getValue(e[1]);
  if (!o)
    throw new Error(`Trying to deserialize unknown class '${e[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(o.prototype), A);
}), qa = Hn((A, e) => !!e.customTransformerRegistry.findApplicable(A), (A, e) => ["custom", e.customTransformerRegistry.findApplicable(A).name], (A, e) => e.customTransformerRegistry.findApplicable(A).serialize(A), (A, e, t) => {
  const o = t.customTransformerRegistry.findByName(e[1]);
  if (!o)
    throw new Error("Trying to deserialize unknown custom value");
  return o.deserialize(A);
}), xp = [Xa, Ga, qa, Wa], kl = (A, e) => {
  const t = Sl(xp, (n) => n.isApplicable(A, e));
  if (t)
    return {
      value: t.transform(A, e),
      type: t.annotation(A, e)
    };
  const o = Sl(ja, (n) => n.isApplicable(A, e));
  if (o)
    return {
      value: o.transform(A, e),
      type: o.annotation
    };
}, za = {};
ja.forEach((A) => {
  za[A.annotation] = A;
});
var Dp = (A, e, t) => {
  if (et(e))
    switch (e[0]) {
      case "symbol":
        return Ga.untransform(A, e, t);
      case "class":
        return Xa.untransform(A, e, t);
      case "custom":
        return qa.untransform(A, e, t);
      case "typed-array":
        return Wa.untransform(A, e, t);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    const o = za[e];
    if (!o)
      throw new Error("Unknown transformation: " + e);
    return o.untransform(A, t);
  }
};
U();
var Jt = (A, e) => {
  if (e > A.size)
    throw new Error("index out of bounds");
  const t = A.keys();
  for (; e > 0; )
    t.next(), e--;
  return t.next().value;
};
function Za(A) {
  if (An(A, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (An(A, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (An(A, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var wp = (A, e) => {
  Za(e);
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    if (vo(A))
      A = Jt(A, +o);
    else if (yo(A)) {
      const n = +o, i = +e[++t] == 0 ? "key" : "value", r = Jt(A, n);
      switch (i) {
        case "key":
          A = r;
          break;
        case "value":
          A = A.get(r);
          break;
      }
    } else
      A = A[o];
  }
  return A;
}, Ui = (A, e, t) => {
  if (Za(e), e.length === 0)
    return t(A);
  let o = A;
  for (let i = 0; i < e.length - 1; i++) {
    const r = e[i];
    if (et(o)) {
      const s = +r;
      o = o[s];
    } else if (mo(o))
      o = o[r];
    else if (vo(o)) {
      const s = +r;
      o = Jt(o, s);
    } else if (yo(o)) {
      if (i === e.length - 2)
        break;
      const l = +r, a = +e[++i] == 0 ? "key" : "value", S = Jt(o, l);
      switch (a) {
        case "key":
          o = S;
          break;
        case "value":
          o = o.get(S);
          break;
      }
    }
  }
  const n = e[e.length - 1];
  if (et(o) ? o[+n] = t(o[+n]) : mo(o) && (o[n] = t(o[n])), vo(o)) {
    const i = Jt(o, +n), r = t(i);
    i !== r && (o.delete(i), o.add(r));
  }
  if (yo(o)) {
    const i = +e[e.length - 2], r = Jt(o, i);
    switch (+n == 0 ? "key" : "value") {
      case "key": {
        const l = t(r);
        o.set(l, o.get(r)), l !== r && o.delete(r);
        break;
      }
      case "value": {
        o.set(r, t(o.get(r)));
        break;
      }
    }
  }
  return A;
};
function Fi(A, e, t = []) {
  if (!A)
    return;
  if (!et(A)) {
    Lt(A, (i, r) => Fi(i, e, [...t, ...fo(r)]));
    return;
  }
  const [o, n] = A;
  n && Lt(n, (i, r) => {
    Fi(i, e, [...t, ...fo(r)]);
  }), e(o, t);
}
function Up(A, e, t) {
  return Fi(e, (o, n) => {
    A = Ui(A, n, (i) => Dp(i, o, t));
  }), A;
}
function Fp(A, e) {
  function t(o, n) {
    const i = wp(A, fo(n));
    o.map(fo).forEach((r) => {
      A = Ui(A, r, () => i);
    });
  }
  if (et(e)) {
    const [o, n] = e;
    o.forEach((i) => {
      A = Ui(A, fo(i), () => A);
    }), n && Lt(n, t);
  } else
    Lt(e, t);
  return A;
}
var Kp = (A, e) => mo(A) || et(A) || yo(A) || vo(A) || _a(A, e);
function Op(A, e, t) {
  const o = t.get(A);
  o ? o.push(e) : t.set(A, [e]);
}
function Np(A, e) {
  const t = {};
  let o;
  return A.forEach((n) => {
    if (n.length <= 1)
      return;
    e || (n = n.map((s) => s.map(String)).sort((s, l) => s.length - l.length));
    const [i, ...r] = n;
    i.length === 0 ? o = r.map(ii) : t[ii(i)] = r.map(ii);
  }), o ? wi(t) ? [o] : [o, t] : wi(t) ? void 0 : t;
}
var $a = (A, e, t, o, n = [], i = [], r = /* @__PURE__ */ new Map()) => {
  var s;
  const l = Ip(A);
  if (!l) {
    Op(A, n, e);
    const p = r.get(A);
    if (p)
      return o ? {
        transformedValue: null
      } : p;
  }
  if (!Kp(A, t)) {
    const p = kl(A, t), B = p ? {
      transformedValue: p.value,
      annotations: [p.type]
    } : {
      transformedValue: A
    };
    return l || r.set(A, B), B;
  }
  if (An(i, A))
    return {
      transformedValue: null
    };
  const a = kl(A, t), S = (s = a?.value) != null ? s : A, u = et(S) ? [] : {}, f = {};
  Lt(S, (p, B) => {
    if (B === "__proto__" || B === "constructor" || B === "prototype")
      throw new Error(`Detected property ${B}. This is a prototype pollution risk, please remove it from your object.`);
    const J = $a(p, e, t, o, [...n, B], [...i, A], r);
    u[B] = J.transformedValue, et(J.annotations) ? f[B] = J.annotations : mo(J.annotations) && Lt(J.annotations, (C, h) => {
      f[Ya(B) + "." + h] = C;
    });
  });
  const k = wi(f) ? {
    transformedValue: u,
    annotations: a ? [a.type] : void 0
  } : {
    transformedValue: u,
    annotations: a ? [a.type, f] : f
  };
  return l || r.set(A, k), k;
};
U();
U();
function AS(A) {
  return Object.prototype.toString.call(A).slice(8, -1);
}
function fl(A) {
  return AS(A) === "Array";
}
function Tp(A) {
  if (AS(A) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(A);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Mp(A, e, t, o, n) {
  const i = {}.propertyIsEnumerable.call(o, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (A[e] = t), n && i === "nonenumerable" && Object.defineProperty(A, e, {
    value: t,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Ki(A, e = {}) {
  if (fl(A))
    return A.map((n) => Ki(n, e));
  if (!Tp(A))
    return A;
  const t = Object.getOwnPropertyNames(A), o = Object.getOwnPropertySymbols(A);
  return [...t, ...o].reduce((n, i) => {
    if (fl(e.props) && !e.props.includes(i))
      return n;
    const r = A[i], s = Ki(r, e);
    return Mp(n, i, s, A, e.nonenumerable), n;
  }, {});
}
var dA = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: A = !1 } = {}) {
    this.classRegistry = new Sp(), this.symbolRegistry = new La((e) => {
      var t;
      return (t = e.description) != null ? t : "";
    }), this.customTransformerRegistry = new fp(), this.allowedErrorProps = [], this.dedupe = A;
  }
  serialize(A) {
    const e = /* @__PURE__ */ new Map(), t = $a(A, e, this, this.dedupe), o = {
      json: t.transformedValue
    };
    t.annotations && (o.meta = {
      ...o.meta,
      values: t.annotations
    });
    const n = Np(e, this.dedupe);
    return n && (o.meta = {
      ...o.meta,
      referentialEqualities: n
    }), o;
  }
  deserialize(A) {
    const { json: e, meta: t } = A;
    let o = Ki(e);
    return t?.values && (o = Up(o, t.values, this)), t?.referentialEqualities && (o = Fp(o, t.referentialEqualities)), o;
  }
  stringify(A) {
    return JSON.stringify(this.serialize(A));
  }
  parse(A) {
    return this.deserialize(JSON.parse(A));
  }
  registerClass(A, e) {
    this.classRegistry.register(A, e);
  }
  registerSymbol(A, e) {
    this.symbolRegistry.register(A, e);
  }
  registerCustom(A, e) {
    this.customTransformerRegistry.register({
      name: e,
      ...A
    });
  }
  allowErrorProps(...A) {
    this.allowedErrorProps.push(...A);
  }
};
dA.defaultInstance = new dA();
dA.serialize = dA.defaultInstance.serialize.bind(dA.defaultInstance);
dA.deserialize = dA.defaultInstance.deserialize.bind(dA.defaultInstance);
dA.stringify = dA.defaultInstance.stringify.bind(dA.defaultInstance);
dA.parse = dA.defaultInstance.parse.bind(dA.defaultInstance);
dA.registerClass = dA.defaultInstance.registerClass.bind(dA.defaultInstance);
dA.registerSymbol = dA.defaultInstance.registerSymbol.bind(dA.defaultInstance);
dA.registerCustom = dA.defaultInstance.registerCustom.bind(dA.defaultInstance);
dA.allowErrorProps = dA.defaultInstance.allowErrorProps.bind(dA.defaultInstance);
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
U();
var gl, dl;
(dl = (gl = Y).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (gl.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var pl, Cl;
(Cl = (pl = Y).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (pl.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var El, hl;
(hl = (El = Y).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (El.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Ql, Bl;
(Bl = (Ql = Y).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (Ql.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Il, ml;
(ml = (Il = Y).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Il.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var yl, vl;
(vl = (yl = Y).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (yl.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
U();
U();
U();
U();
U();
U();
U();
var tA = {};
const qe = typeof window < "u";
let io;
const Ht = (A) => io = A, eS = tA.NODE_ENV !== "production" ? /* @__PURE__ */ Symbol("pinia") : (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function pt(A) {
  return A && typeof A == "object" && Object.prototype.toString.call(A) === "[object Object]" && typeof A.toJSON != "function";
}
var we;
(function(A) {
  A.direct = "direct", A.patchObject = "patch object", A.patchFunction = "patch function";
})(we || (we = {}));
const bl = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Rp(A, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(A.type) ? new Blob(["\uFEFF", A], { type: A.type }) : A;
}
function Er(A, e, t) {
  const o = new XMLHttpRequest();
  o.open("GET", A), o.responseType = "blob", o.onload = function() {
    nS(o.response, e, t);
  }, o.onerror = function() {
    console.error("could not download file");
  }, o.send();
}
function tS(A) {
  const e = new XMLHttpRequest();
  e.open("HEAD", A, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function en(A) {
  try {
    A.dispatchEvent(new MouseEvent("click"));
  } catch {
    const t = new MouseEvent("click", {
      bubbles: !0,
      cancelable: !0,
      view: window,
      detail: 0,
      screenX: 80,
      screenY: 20,
      clientX: 80,
      clientY: 20,
      ctrlKey: !1,
      altKey: !1,
      shiftKey: !1,
      metaKey: !1,
      button: 0,
      relatedTarget: null
    });
    A.dispatchEvent(t);
  }
}
const tn = typeof navigator == "object" ? navigator : { userAgent: "" }, oS = /Macintosh/.test(tn.userAgent) && /AppleWebKit/.test(tn.userAgent) && !/Safari/.test(tn.userAgent), nS = qe ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !oS ? Vp : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in tn ? Lp : (
      // Fallback to using FileReader and a popup
      Hp
    )
  )
) : () => {
};
function Vp(A, e = "download", t) {
  const o = document.createElement("a");
  o.download = e, o.rel = "noopener", typeof A == "string" ? (o.href = A, o.origin !== location.origin ? tS(o.href) ? Er(A, e, t) : (o.target = "_blank", en(o)) : en(o)) : (o.href = URL.createObjectURL(A), setTimeout(function() {
    URL.revokeObjectURL(o.href);
  }, 4e4), setTimeout(function() {
    en(o);
  }, 0));
}
function Lp(A, e = "download", t) {
  if (typeof A == "string")
    if (tS(A))
      Er(A, e, t);
    else {
      const o = document.createElement("a");
      o.href = A, o.target = "_blank", setTimeout(function() {
        en(o);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Rp(A, t), e);
}
function Hp(A, e, t, o) {
  if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof A == "string")
    return Er(A, e, t);
  const n = A.type === "application/octet-stream", i = /constructor/i.test(String(bl.HTMLElement)) || "safari" in bl, r = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((r || n && i || oS) && typeof FileReader < "u") {
    const s = new FileReader();
    s.onloadend = function() {
      let l = s.result;
      if (typeof l != "string")
        throw o = null, new Error("Wrong reader.result type");
      l = r ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = l : location.assign(l), o = null;
    }, s.readAsDataURL(A);
  } else {
    const s = URL.createObjectURL(A);
    o ? o.location.assign(s) : location.href = s, o = null, setTimeout(function() {
      URL.revokeObjectURL(s);
    }, 4e4);
  }
}
function DA(A, e) {
  const t = "🍍 " + A;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(t, e) : e === "error" ? console.error(t) : e === "warn" ? console.warn(t) : console.log(t);
}
function hr(A) {
  return "_a" in A && "install" in A;
}
function iS() {
  if (!("clipboard" in navigator))
    return DA("Your browser doesn't support the Clipboard API", "error"), !0;
}
function rS(A) {
  return A instanceof Error && A.message.toLowerCase().includes("document is not focused") ? (DA('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Pp(A) {
  if (!iS())
    try {
      await navigator.clipboard.writeText(JSON.stringify(A.state.value)), DA("Global state copied to clipboard.");
    } catch (e) {
      if (rS(e))
        return;
      DA("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function Yp(A) {
  if (!iS())
    try {
      sS(A, JSON.parse(await navigator.clipboard.readText())), DA("Global state pasted from clipboard.");
    } catch (e) {
      if (rS(e))
        return;
      DA("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function jp(A) {
  try {
    nS(new Blob([JSON.stringify(A.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    DA("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let Ne;
function Gp() {
  Ne || (Ne = document.createElement("input"), Ne.type = "file", Ne.accept = ".json");
  function A() {
    return new Promise((e, t) => {
      Ne.onchange = async () => {
        const o = Ne.files;
        if (!o)
          return e(null);
        const n = o.item(0);
        return e(n ? { text: await n.text(), file: n } : null);
      }, Ne.oncancel = () => e(null), Ne.onerror = t, Ne.click();
    });
  }
  return A;
}
async function Wp(A) {
  try {
    const t = await Gp()();
    if (!t)
      return;
    const { text: o, file: n } = t;
    sS(A, JSON.parse(o)), DA(`Global state imported from "${n.name}".`);
  } catch (e) {
    DA("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function sS(A, e) {
  for (const t in e) {
    const o = A.state.value[t];
    o ? Object.assign(o, e[t]) : A.state.value[t] = e[t];
  }
}
function ue(A) {
  return {
    _custom: {
      display: A
    }
  };
}
const lS = "🍍 Pinia (root)", on = "_root";
function _p(A) {
  return hr(A) ? {
    id: on,
    label: lS
  } : {
    id: A.$id,
    label: A.$id
  };
}
function Xp(A) {
  if (hr(A)) {
    const t = Array.from(A._s.keys()), o = A._s;
    return {
      state: t.map((i) => ({
        editable: !0,
        key: i,
        value: A.state.value[i]
      })),
      getters: t.filter((i) => o.get(i)._getters).map((i) => {
        const r = o.get(i);
        return {
          editable: !1,
          key: i,
          value: r._getters.reduce((s, l) => (s[l] = r[l], s), {})
        };
      })
    };
  }
  const e = {
    state: Object.keys(A.$state).map((t) => ({
      editable: !0,
      key: t,
      value: A.$state[t]
    }))
  };
  return A._getters && A._getters.length && (e.getters = A._getters.map((t) => ({
    editable: !1,
    key: t,
    value: A[t]
  }))), A._customProperties.size && (e.customProperties = Array.from(A._customProperties).map((t) => ({
    editable: !0,
    key: t,
    value: A[t]
  }))), e;
}
function qp(A) {
  return A ? Array.isArray(A) ? A.reduce((e, t) => (e.keys.push(t.key), e.operations.push(t.type), e.oldValue[t.key] = t.oldValue, e.newValue[t.key] = t.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: ue(A.type),
    key: ue(A.key),
    oldValue: A.oldValue,
    newValue: A.newValue
  } : {};
}
function zp(A) {
  switch (A) {
    case we.direct:
      return "mutation";
    case we.patchFunction:
      return "$patch";
    case we.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let xt = !0;
const nn = [], st = "pinia:mutations", TA = "pinia", { assign: Zp } = Object, En = (A) => "🍍 " + A;
function $p(A, e) {
  Ra({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: nn,
    app: A
  }, (t) => {
    typeof t.now != "function" && DA("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), t.addTimelineLayer({
      id: st,
      label: "Pinia 🍍",
      color: 15064968
    }), t.addInspector({
      id: TA,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Pp(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Yp(e), t.sendInspectorTree(TA), t.sendInspectorState(TA);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            jp(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Wp(e), t.sendInspectorTree(TA), t.sendInspectorState(TA);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (o) => {
            const n = e._s.get(o);
            n ? typeof n.$reset != "function" ? DA(`Cannot reset "${o}" store because it doesn't have a "$reset" method implemented.`, "warn") : (n.$reset(), DA(`Store "${o}" reset.`)) : DA(`Cannot reset "${o}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), t.on.inspectComponent((o) => {
      const n = o.componentInstance && o.componentInstance.proxy;
      if (n && n._pStores) {
        const i = o.componentInstance.proxy._pStores;
        Object.values(i).forEach((r) => {
          o.instanceData.state.push({
            type: En(r.$id),
            key: "state",
            editable: !0,
            value: r._isOptionsAPI ? {
              _custom: {
                value: Z(r.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => r.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(r.$state).reduce((s, l) => (s[l] = r.$state[l], s), {})
            )
          }), r._getters && r._getters.length && o.instanceData.state.push({
            type: En(r.$id),
            key: "getters",
            editable: !1,
            value: r._getters.reduce((s, l) => {
              try {
                s[l] = r[l];
              } catch (a) {
                s[l] = a;
              }
              return s;
            }, {})
          });
        });
      }
    }), t.on.getInspectorTree((o) => {
      if (o.app === A && o.inspectorId === TA) {
        let n = [e];
        n = n.concat(Array.from(e._s.values())), o.rootNodes = (o.filter ? n.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(o.filter.toLowerCase()) : lS.toLowerCase().includes(o.filter.toLowerCase())) : n).map(_p);
      }
    }), globalThis.$pinia = e, t.on.getInspectorState((o) => {
      if (o.app === A && o.inspectorId === TA) {
        const n = o.nodeId === on ? e : e._s.get(o.nodeId);
        if (!n)
          return;
        n && (o.nodeId !== on && (globalThis.$store = Z(n)), o.state = Xp(n));
      }
    }), t.on.editInspectorState((o) => {
      if (o.app === A && o.inspectorId === TA) {
        const n = o.nodeId === on ? e : e._s.get(o.nodeId);
        if (!n)
          return DA(`store "${o.nodeId}" not found`, "error");
        const { path: i } = o;
        hr(n) ? i.unshift("state") : (i.length !== 1 || !n._customProperties.has(i[0]) || i[0] in n.$state) && i.unshift("$state"), xt = !1, o.set(n, i, o.state.value), xt = !0;
      }
    }), t.on.editComponentState((o) => {
      if (o.type.startsWith("🍍")) {
        const n = o.type.replace(/^🍍\s*/, ""), i = e._s.get(n);
        if (!i)
          return DA(`store "${n}" not found`, "error");
        const { path: r } = o;
        if (r[0] !== "state")
          return DA(`Invalid path for store "${n}":
${r}
Only state can be modified.`);
        r[0] = "$state", xt = !1, o.set(i, r, o.state.value), xt = !0;
      }
    });
  });
}
function AC(A, e) {
  nn.includes(En(e.$id)) || nn.push(En(e.$id)), Ra({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: nn,
    app: A,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (t) => {
    const o = typeof t.now == "function" ? t.now.bind(t) : Date.now;
    e.$onAction(({ after: r, onError: s, name: l, args: a }) => {
      const S = uS++;
      t.addTimelineEvent({
        layerId: st,
        event: {
          time: o(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: ue(e.$id),
            action: ue(l),
            args: a
          },
          groupId: S
        }
      }), r((u) => {
        ze = void 0, t.addTimelineEvent({
          layerId: st,
          event: {
            time: o(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: ue(e.$id),
              action: ue(l),
              args: a,
              result: u
            },
            groupId: S
          }
        });
      }), s((u) => {
        ze = void 0, t.addTimelineEvent({
          layerId: st,
          event: {
            time: o(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: ue(e.$id),
              action: ue(l),
              args: a,
              error: u
            },
            groupId: S
          }
        });
      });
    }, !0), e._customProperties.forEach((r) => {
      Kt(() => HA(e[r]), (s, l) => {
        t.notifyComponentUpdate(), t.sendInspectorState(TA), xt && t.addTimelineEvent({
          layerId: st,
          event: {
            time: o(),
            title: "Change",
            subtitle: r,
            data: {
              newValue: s,
              oldValue: l
            },
            groupId: ze
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: r, type: s }, l) => {
      if (t.notifyComponentUpdate(), t.sendInspectorState(TA), !xt)
        return;
      const a = {
        time: o(),
        title: zp(s),
        data: Zp({ store: ue(e.$id) }, qp(r)),
        groupId: ze
      };
      s === we.patchFunction ? a.subtitle = "⤵️" : s === we.patchObject ? a.subtitle = "🧩" : r && !Array.isArray(r) && (a.subtitle = r.type), r && (a.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: r
        }
      }), t.addTimelineEvent({
        layerId: st,
        event: a
      });
    }, { detached: !0, flush: "sync" });
    const n = e._hotUpdate;
    e._hotUpdate = Xe((r) => {
      n(r), t.addTimelineEvent({
        layerId: st,
        event: {
          time: o(),
          title: "🔥 " + e.$id,
          subtitle: "HMR update",
          data: {
            store: ue(e.$id),
            info: ue("HMR update")
          }
        }
      }), t.notifyComponentUpdate(), t.sendInspectorTree(TA), t.sendInspectorState(TA);
    });
    const { $dispose: i } = e;
    e.$dispose = () => {
      i(), t.notifyComponentUpdate(), t.sendInspectorTree(TA), t.sendInspectorState(TA), t.getSettings().logStoreChanges && DA(`Disposed "${e.$id}" store 🗑`);
    }, t.notifyComponentUpdate(), t.sendInspectorTree(TA), t.sendInspectorState(TA), t.getSettings().logStoreChanges && DA(`"${e.$id}" store installed 🆕`);
  });
}
let uS = 0, ze;
function Jl(A, e, t) {
  const o = e.reduce((n, i) => (n[i] = Z(A)[i], n), {});
  for (const n in o)
    A[n] = function() {
      const i = uS, r = t ? new Proxy(A, {
        get(...l) {
          return ze = i, Reflect.get(...l);
        },
        set(...l) {
          return ze = i, Reflect.set(...l);
        }
      }) : A;
      ze = i;
      const s = o[n].apply(r, arguments);
      return ze = void 0, s;
    };
}
function eC({ app: A, store: e, options: t }) {
  if (!e.$id.startsWith("__hot:")) {
    if (e._isOptionsAPI = !!t.state, !e._p._testing) {
      Jl(e, Object.keys(t.actions), e._isOptionsAPI);
      const o = e._hotUpdate;
      Z(e)._hotUpdate = function(n) {
        o.apply(this, arguments), Jl(e, Object.keys(n._hmrPayload.actions), !!e._isOptionsAPI);
      };
    }
    AC(
      A,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      e
    );
  }
}
function tC() {
  const A = nu(!0), e = A.run(() => gA({}));
  let t = [], o = [];
  const n = Xe({
    install(i) {
      Ht(n), n._a = i, i.provide(eS, n), i.config.globalProperties.$pinia = n, tA.NODE_ENV !== "production" && tA.NODE_ENV !== "test" && qe && $p(i, n), o.forEach((r) => t.push(r)), o = [];
    },
    use(i) {
      return this._a ? t.push(i) : o.push(i), this;
    },
    _p: t,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: A,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return tA.NODE_ENV !== "production" && tA.NODE_ENV !== "test" && qe && typeof Proxy < "u" && n.use(eC), n;
}
function aS(A, e) {
  for (const t in e) {
    const o = e[t];
    if (!(t in A))
      continue;
    const n = A[t];
    pt(n) && pt(o) && !kA(o) && !fe(o) ? A[t] = aS(n, o) : A[t] = o;
  }
  return A;
}
const SS = () => {
};
function xl(A, e, t, o = SS) {
  A.add(e);
  const n = () => {
    A.delete(e) && o();
  };
  return !t && iu() && Cc(n), n;
}
function It(A, ...e) {
  A.forEach((t) => {
    t(...e);
  });
}
const oC = (A) => A(), Dl = /* @__PURE__ */ Symbol(), ri = /* @__PURE__ */ Symbol();
function Oi(A, e) {
  A instanceof Map && e instanceof Map ? e.forEach((t, o) => A.set(o, t)) : A instanceof Set && e instanceof Set && e.forEach(A.add, A);
  for (const t in e) {
    if (!e.hasOwnProperty(t))
      continue;
    const o = e[t], n = A[t];
    pt(n) && pt(o) && A.hasOwnProperty(t) && !kA(o) && !fe(o) ? A[t] = Oi(n, o) : A[t] = o;
  }
  return A;
}
const nC = tA.NODE_ENV !== "production" ? /* @__PURE__ */ Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function iC(A) {
  return !pt(A) || !Object.prototype.hasOwnProperty.call(A, nC);
}
const { assign: le } = Object;
function wl(A) {
  return !!(kA(A) && A.effect);
}
function Ul(A, e, t, o) {
  const { state: n, actions: i, getters: r } = e, s = t.state.value[A];
  let l;
  function a() {
    !s && (tA.NODE_ENV === "production" || !o) && (t.state.value[A] = n ? n() : {});
    const S = tA.NODE_ENV !== "production" && o ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Tr(gA(n ? n() : {}).value)
    ) : Tr(t.state.value[A]);
    return le(S, i, Object.keys(r || {}).reduce((u, f) => (tA.NODE_ENV !== "production" && f in S && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${A}".`), u[f] = Xe(FA(() => {
      Ht(t);
      const k = t._s.get(A);
      return r[f].call(k, k);
    })), u), {}));
  }
  return l = Ni(A, a, e, t, o, !0), l;
}
function Ni(A, e, t = {}, o, n, i) {
  let r;
  const s = le({ actions: {} }, t);
  if (tA.NODE_ENV !== "production" && !o._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  tA.NODE_ENV !== "production" && (l.onTrigger = (O) => {
    a ? k = O : a == !1 && !m._hotUpdating && (Array.isArray(k) ? k.push(O) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let a, S, u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), k;
  const p = o.state.value[A];
  !i && !p && (tA.NODE_ENV === "production" || !n) && (o.state.value[A] = {});
  const B = gA({});
  let J;
  function C(O) {
    let D;
    a = S = !1, tA.NODE_ENV !== "production" && (k = []), typeof O == "function" ? (O(o.state.value[A]), D = {
      type: we.patchFunction,
      storeId: A,
      events: k
    }) : (Oi(o.state.value[A], O), D = {
      type: we.patchObject,
      payload: O,
      storeId: A,
      events: k
    });
    const j = J = /* @__PURE__ */ Symbol();
    Co().then(() => {
      J === j && (a = !0);
    }), S = !0, It(u, D, o.state.value[A]);
  }
  const h = i ? function() {
    const { state: D } = t, j = D ? D() : {};
    this.$patch((rA) => {
      le(rA, j);
    });
  } : (
    /* istanbul ignore next */
    tA.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${A}" is built using the setup syntax and does not implement $reset().`);
    } : SS
  );
  function I() {
    r.stop(), u.clear(), f.clear(), o._s.delete(A);
  }
  const g = (O, D = "") => {
    if (Dl in O)
      return O[ri] = D, O;
    const j = function() {
      Ht(o);
      const rA = Array.from(arguments), hA = /* @__PURE__ */ new Set(), pA = /* @__PURE__ */ new Set();
      function sA(nA) {
        hA.add(nA);
      }
      function P(nA) {
        pA.add(nA);
      }
      It(f, {
        args: rA,
        name: j[ri],
        store: m,
        after: sA,
        onError: P
      });
      let z;
      try {
        z = O.apply(this && this.$id === A ? this : m, rA);
      } catch (nA) {
        throw It(pA, nA), nA;
      }
      return z instanceof Promise ? z.then((nA) => (It(hA, nA), nA)).catch((nA) => (It(pA, nA), Promise.reject(nA))) : (It(hA, z), z);
    };
    return j[Dl] = !0, j[ri] = D, j;
  }, Q = /* @__PURE__ */ Xe({
    actions: {},
    getters: {},
    state: [],
    hotState: B
  }), R = {
    _p: o,
    // _s: scope,
    $id: A,
    $onAction: xl.bind(null, f),
    $patch: C,
    $reset: h,
    $subscribe(O, D = {}) {
      const j = xl(u, O, D.detached, () => rA()), rA = r.run(() => Kt(() => o.state.value[A], (hA) => {
        (D.flush === "sync" ? S : a) && O({
          storeId: A,
          type: we.direct,
          events: k
        }, hA);
      }, le({}, l, D)));
      return j;
    },
    $dispose: I
  }, m = Un(tA.NODE_ENV !== "production" || tA.NODE_ENV !== "production" && tA.NODE_ENV !== "test" && qe ? le(
    {
      _hmrPayload: Q,
      _customProperties: Xe(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    R
    // must be added later
    // setupStore
  ) : R);
  o._s.set(A, m);
  const L = (o._a && o._a.runWithContext || oC)(() => o._e.run(() => (r = nu()).run(() => e({ action: g }))));
  for (const O in L) {
    const D = L[O];
    if (kA(D) && !wl(D) || fe(D))
      tA.NODE_ENV !== "production" && n ? B.value[O] = qn(L, O) : i || (p && iC(D) && (kA(D) ? D.value = p[O] : Oi(D, p[O])), o.state.value[A][O] = D), tA.NODE_ENV !== "production" && Q.state.push(O);
    else if (typeof D == "function") {
      const j = tA.NODE_ENV !== "production" && n ? D : g(D, O);
      L[O] = j, tA.NODE_ENV !== "production" && (Q.actions[O] = D), s.actions[O] = D;
    } else tA.NODE_ENV !== "production" && wl(D) && (Q.getters[O] = i ? (
      // @ts-expect-error
      t.getters[O]
    ) : D, qe && (L._getters || // @ts-expect-error: same
    (L._getters = Xe([]))).push(O));
  }
  if (le(m, L), le(Z(m), L), Object.defineProperty(m, "$state", {
    get: () => tA.NODE_ENV !== "production" && n ? B.value : o.state.value[A],
    set: (O) => {
      if (tA.NODE_ENV !== "production" && n)
        throw new Error("cannot set hotState");
      C((D) => {
        le(D, O);
      });
    }
  }), tA.NODE_ENV !== "production" && (m._hotUpdate = Xe((O) => {
    m._hotUpdating = !0, O._hmrPayload.state.forEach((D) => {
      if (D in m.$state) {
        const j = O.$state[D], rA = m.$state[D];
        typeof j == "object" && pt(j) && pt(rA) ? aS(j, rA) : O.$state[D] = rA;
      }
      m[D] = qn(O.$state, D);
    }), Object.keys(m.$state).forEach((D) => {
      D in O.$state || delete m[D];
    }), a = !1, S = !1, o.state.value[A] = qn(O._hmrPayload, "hotState"), S = !0, Co().then(() => {
      a = !0;
    });
    for (const D in O._hmrPayload.actions) {
      const j = O[D];
      m[D] = //
      g(j, D);
    }
    for (const D in O._hmrPayload.getters) {
      const j = O._hmrPayload.getters[D], rA = i ? (
        // special handling of options api
        FA(() => (Ht(o), j.call(m, m)))
      ) : j;
      m[D] = //
      rA;
    }
    Object.keys(m._hmrPayload.getters).forEach((D) => {
      D in O._hmrPayload.getters || delete m[D];
    }), Object.keys(m._hmrPayload.actions).forEach((D) => {
      D in O._hmrPayload.actions || delete m[D];
    }), m._hmrPayload = O._hmrPayload, m._getters = O._getters, m._hotUpdating = !1;
  })), tA.NODE_ENV !== "production" && tA.NODE_ENV !== "test" && qe) {
    const O = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((D) => {
      Object.defineProperty(m, D, le({ value: m[D] }, O));
    });
  }
  return o._p.forEach((O) => {
    if (tA.NODE_ENV !== "production" && tA.NODE_ENV !== "test" && qe) {
      const D = r.run(() => O({
        store: m,
        app: o._a,
        pinia: o,
        options: s
      }));
      Object.keys(D || {}).forEach((j) => m._customProperties.add(j)), le(m, D);
    } else
      le(m, r.run(() => O({
        store: m,
        app: o._a,
        pinia: o,
        options: s
      })));
  }), tA.NODE_ENV !== "production" && m.$state && typeof m.$state == "object" && typeof m.$state.constructor == "function" && !m.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${m.$id}".`), p && i && t.hydrate && t.hydrate(m.$state, p), a = !0, S = !0, m;
}
// @__NO_SIDE_EFFECTS__
function rC(A, e, t) {
  let o;
  const n = typeof e == "function";
  o = n ? t : e;
  function i(r, s) {
    const l = gk();
    if (r = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (tA.NODE_ENV === "test" && io && io._testing ? null : r) || (l ? ao(eS, null) : null), r && Ht(r), tA.NODE_ENV !== "production" && !io)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    r = io, r._s.has(A) || (n ? Ni(A, e, o, r) : Ul(A, o, r), tA.NODE_ENV !== "production" && (i._pinia = r));
    const a = r._s.get(A);
    if (tA.NODE_ENV !== "production" && s) {
      const S = "__hot:" + A, u = n ? Ni(S, e, o, r, !0) : Ul(S, le({}, o), r, !0);
      s._hotUpdate(u), delete r.state.value[S], r._s.delete(S);
    }
    if (tA.NODE_ENV !== "production" && qe) {
      const S = Mn();
      if (S && S.proxy && // avoid adding stores that are just built for hot module replacement
      !s) {
        const u = S.proxy, f = "_pStores" in u ? u._pStores : u._pStores = {};
        f[A] = a;
      }
    }
    return a;
  }
  return i.$id = A, i;
}
const wA = [];
for (let A = 0; A < 256; ++A)
  wA.push((A + 256).toString(16).slice(1));
function sC(A, e = 0) {
  return (wA[A[e + 0]] + wA[A[e + 1]] + wA[A[e + 2]] + wA[A[e + 3]] + "-" + wA[A[e + 4]] + wA[A[e + 5]] + "-" + wA[A[e + 6]] + wA[A[e + 7]] + "-" + wA[A[e + 8]] + wA[A[e + 9]] + "-" + wA[A[e + 10]] + wA[A[e + 11]] + wA[A[e + 12]] + wA[A[e + 13]] + wA[A[e + 14]] + wA[A[e + 15]]).toLowerCase();
}
let si;
const lC = new Uint8Array(16);
function uC() {
  if (!si) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    si = crypto.getRandomValues.bind(crypto);
  }
  return si(lC);
}
const aC = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Fl = { randomUUID: aC };
function SC(A, e, t) {
  A = A || {};
  const o = A.random ?? A.rng?.() ?? uC();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, sC(o);
}
function Kl(A, e, t) {
  return Fl.randomUUID && !A ? Fl.randomUUID() : SC(A);
}
const li = {
  id: "204eb15f-02a1-4928-a807-e452809bdc53",
  name: "Home",
  imageBase64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAgACAADAREAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB/MELAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAQAAAAAAAAAAAAoBQAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAACgAAGZAAAACAEABCgAAAAAAAAAAAAAABAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBQAAAKAAQAAAAAAAAAAAAFABQgALAAQAAAAAAAAAAAAAAAAAAAAAAEAKAAAAAQAAAAAAAAAAAAoAAMyIUAACAEABAAUAAAAAAAAAAAAAgASqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAoAAFABAAAAAAAAAAAAAAUAoABAACAAAAAAAAAAAAAAAAAAAAAEAAAKhQAABAAAAAAAAAAAAACgAGQAAABACAEAABQAAACFAAAAAAAIAACgAAAAAAAEABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAAAAAAAAAAAAAAAAAAACCKAAAKAAAQAAAAAAAAAAAAAAFAMgAAAQAEAIAACgAAABCgAAAAACAAAAoAAAAAAIAAAAUAAgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAEAAAAAAAAAAAAAAAAAAAAACCKAAABUKABAAAAAAAAAAAAAAAAUGQAABAAQAgAAAKAAAAAAAAACAAAAAFAAAAAAAIAAACgAgBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAEAAAAAAAAAAAAAAAAAAAAAACCBQAAAAAAAAAAAAAAAAAAAAAAAMwAACAAgBAAAACgAAAAAAAEAAAAAABQAAAAAACAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUAAAAAAAAAAAAAAAJFFQRQAAAAAAAAAAAAAAAAAAAAAABmAAQAAgBAAAAACgAAAAAEAAAAAAAAAKAAAAAACAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACgAAAAAAoQsAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAADIAAAAgAIAAAAACgAAAEAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAEAAAAAAAAAIAAAUAAAAAAFCCKAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAgAIAAAAAACgAEAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAACFAAAAAAAAAAAAAAAAKAACgAgAAAIAAAAAACAAAAoAAAAAABQhYAAAACAAAAAAAAAAAAAAAAAAAAEBQAAAAADIAAgAABAAAAAAAChIFAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAABAAAVCgQAoAAAAAKAAQAFAABQAAAAAQAAEAAAAAIAAAAUAAAAAAAFIAAAACAAAAAAAAAAAAAAAAAhQAAAQFAAAAABQAAAAAQAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAABAAAAAAAACgAAAoAAAAAAKAACgAEAAABACAAAAAgAAABQAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAgKAAAQAoAAAABQAAAACAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAIAAAAAAAACgAAFAAAAABQAAUAIUAACAAAgBAAAACAAAAoAAAAAAAAAAABAAAAAAAAAAAAAAAAAAACAoABACgAAAAFAAAABAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAgAAAAAAAAKAACgFAAAABQAAAAAAAAAQAEAIAAAACAAFAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAACAAoAAAAAAAAAAKACAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAABSAAAAAgAAAAAAAAKAACgoAKCFAAAAAAAAAAAAIEKICAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAIAAUAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAoAIAAACAAAAAAAAFAABQUFAAAABQAACFABAUhSAAEAIAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAKACAAAAgAAAAAAAKAACgoKAACgAAAAAAAAAAAgAIAQEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAACgAgAAAIAAAAAACgAAFAKUAFAAAAAAAAAQoAAAEAIELAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAABAAAAAACgAAAoBQUAoAAAAAAAAAAAAABAAQAhAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAgAAAAABQAAAUApQAUAAAAAAAAAAAAAAEABAQEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAACAAAAAAoAAAAKCgoBQAAAAUAgAAAAAAAAAIACAhAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAEAAAAAKAAAACgFBQCgAAAApT0TkNBAAAAAAAAACAAgIQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAIAAAAAUAAAAoAKCgFAAABQVPTX0zaU4jyjjAAAAAAAAAIAQEBAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAABAAAAAAAAUAAAFABQUAoQoAAFKekesbCApQcZ5BxgAAAAAAAAgICAgABAAAAAAAAAAAAAAAAAAhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AFCFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAABQUAFAKEKAAAAAAABAAQAgBAAAAAAAQAAAAAAAAAAoBAAAAAAAAAAAAAAAAAACgAAAAAAAAAAFIACAAAAAAgAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAoBQCgAqFAAAAAEAAABAQEAAAABAAAAAAAAAAAAACoUQAAAAAAAAAEBQAAAAAACgAAAAAAAAAAFBACAAAAAEABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAFAKAUAAApAAAAAAAQAgIAAAQAAAAAAAAAAAAAAAoABAAAAAAAACAAoAAAAAABQAAAAAAAAAAUEAIAAAAACAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAUAoBQAAAAAAAQAAAgIAAQAAAAAAAAAAAAAAAAoABAAAAAAAACAAoAAAAAABQAAAAAAAAACgEAIAAAAACFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUFAAAAKAACAICgCAEAAIAAAAAAAAAAAAAAAAAUAAJFAAAAAAAgAKAAAAAAACgAAAAAAAAAFBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAKAAAAAAAAAAAAAAAAAAACgAAAoAKAAEBSFAICgCAEAABAAAAAAAAAAAAAAAAAAUAAJFAAAAAAEAAKAAAAAAACgAAAAAAAAAFBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABQAAAAAAAAAAAAAAAAAAAAUAAAoAAKAAAAAQAAgAABAAAAAAAAAAAAAAAAAAEoUEEUAAAAAAQAAAoAAAAABQAAAAACAoAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAoAAAAAAAAAAAAAAAAAAAAKAAAAUAAAAAAAEAAAAIAAAAAAAAAAAAAAAAAACoAIFAAAAAAEAABQAAAAAAAUAAAAAhQAAAAACAAAAAAAAAAAAAAAAAAAAAAAAgKAAQAFQoAAgAAABQAAAAAAAAAAAAAAAAAAAAACgAAAAAoAAAIAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAgABQAAAAAAAAAUAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAABAAAAAAUAJFAAAAAAoAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAEigAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAoAAAAAAAAAKAAAAAAAAAACAAAAAAIUAAAAAAAAACFIUAAAEAAAAAKEAAEUAAAAAUAAICgAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACgAAAAAAAAAoAAAAAAAAAAIAAAAAAAAAAAAAAAAAQFAAABAAAAAUIAItIAAAAAAUBItCAFAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABAAAAAAAAAAAAAACAoAAAAAAAAAAAAAAASKAAKAAAAAAAAAAUAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAABAACgIBFAAAAAAAoAIChCgAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAgAAAAAAAAAAAAACRQKAAAAAAAAAAAAAAAQAoIAUAAAAAAAAAFAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAQAoBAAAAAAAAAUAEBQAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAEAAAAAAAAAAAAAQsABQAAAAAAAAAAAAAAAQqRQKAAAAAAUgAABQAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAgKAAAQAoBAAAAAAAAAUEAKAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAEAAAAAAAAAAAAIAAACgAAAAAAAAAAAAAAJFAAoAAAABQAQAAoAAAAQoAAAAAgAAAAAAAAAAAAAAAAAAAAICoCgAQAAAAAAAAAAAFIACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAABAAAAAAAAAAAAQAAAAAoCFAAAAAAAAAAEAKQAAoAAAAKAACAAoAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAEABQBAAAAAAAAAAAACkAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAgAAAAAAAAAABAAAAAAUIUAgABQCAoEAAABQCAAoAAABQAAAQAoAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAEAAKBAAAAAAAAAAAACggBQAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAgAAAAAAAAAABAAAAAACgEKQAAAApAAAAAUAgAKAAACgAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABAAAAAAAAAAACAAAAAFAACRQAAAAAAAAKACAAoAAAKAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAABQAQAAFIUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAABAAAAAAAAAAAQAAAAFAACFgAAAAAAAABQAQAoAAAKAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAgAAAAAAAAAAAIAAACgAIIoAAAAoAABAAVCwoAAAAKAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAEAAAAAAAAAAAAIAACgAAgAAAKAAAAQAFCFAAAAAoAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAQAAAAAAAAAAAAAAAAAAEABQAAAAQFAAQoAAAFAAKACAAAAAAAAAEAAKCAAAAAAAAAAAAAAAAAAAAAAAAAgKQAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFABQAACAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAABQAQAAAAAgBQAAAAAAAAAAAAAAAAAAAAAAUEAAAAAAAKAAQAAAAAAFAAAAAABAAAAAAAAAAAAAAAEKAAAAAAAAAAAAAAAAKAAUAAAEAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAACgAAgAAAAIAUAAAAAAAAAAAAAAAAAAAAAFAABAAAAACoUAACAAAAAAAFAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAoAAABAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAFAAABAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAgAAAAKAAACAAAAAAAFAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgA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SSSSQSSSSSSSSSSASSCSAkkSQSSSSSSSSSSQASSSSSQAAAAASQAAAAASSSSSSSSSSSSQACQWSQASSACSQAAAAAAAAAAAAASSgAAAAAAAAAAAAAAAAAAAAAAAAAAACC2ySSQACSSQASSSSSQACSSSAACSASSAAASSSSSQASSSSSAAAACSSSEAAACSSSSSSSSSSSSSAACSSAASCASSSAAAACAAAAAAACSSQAAAAAAAASSAAAAAAAAAAAAAAAAAAAACSSSSSSSAAASSSSQACSQSSSSQSSAAAACSSSSSSSSSSSAAAAmSSSQAAASSSSSSSSSSSSSSSACSAACSCASSSAAAAAgAAAAAASSSSAAAAAAASSSSQAASAAAAAAAAAAAACAAASSSSSSQAAASSSSSASSSCSSQCSQAAAACSSSSSSSSSSSAAAEySSSQgACSSSSSSSSSSSSSSSQCAAASQQCSSSQAAAAAAAAACSSSSSAAAAAAACSSSQACSAAAAAAAAAAAACAAASSSSSSQAAACSSSSSSSSSAASSQAAAAACSSSSSSSSSSSAAAmySSSSSSSSSSSSSSSSSSSSSSSQAAASQQCSSSSAAAAAAAACSSSSSSQAAAAAAASSSAAAAAAAAAAAAAAAAAAAACSSSSSAAAACSSSSSSSSSSSSQAACSQACSSSSSSSSSSQAAGQmSSSSSSSSSSSSSSSSSSSSSSSQAASSCASSSSSQAAAAAASSSSSSSSSQAAAAAACSAAAAAAAAAAAAAAAAAAAAACSSSSSSAASSSSSSSSSSSSSQAACSSQACSSSSQESSSSQACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQSASSSSSSAAAACSSSSSSSSSSSQAAAAAAAAAAAAAAAAAAAAAAAAAAAACSSSSSSSSSACSQACSSSSSQAAASSSQAASSSSQWySSSAASSSSSSSSSSSSSSSSSSSSASSSSSSSSSQCQCSSSSSSQAASSSSSSSSSSSSSSQAAAAAAAAAAAAAAAAAACAAAAAAAASSSSSSSSQCSQACSSACSSSAAACSSSQAASSSSSCiSSAACSSSSSSSSSSSSSSSSCSSSSCSSSSSQAASSACSSSSSSSA2SSSSSSSSSSSSSSQAAAAAAAAAAAAAAAACSSQgCSAAAASSAACSQASQCSSAACSSCSSAAASSSSQAASSSSSQSSAAASSSSSSSSSSSSSSSSQQSSSCQSSSSSSSSSAACSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAAASSQAAAACSSSSSSSSAACSASSSCSSASSAACSQACQSSAAASSSSQAACSSSSSSQAACSSSSSSSSSSSSSSSSSSASSCSSSSSSQAAAAASSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAACSSSSAAASSSSSSSSSAACQSSSSSQCSQCWSSASSASCSQAASSSSAAAAAAACSQAACSSSSSSSSSSSSSSSSSSASACCSCSSSSQAAAACSSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAASSSSSQAASSSSSSSSSAASCQCAASQAACSSSSSQCQCQSQAAASSQAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSASSAAASSSSSSSSAASSSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAASSQSSQAASSSSSSSSSAASSCSAQACSSSSSSSSSQSgSSQAAAAAAAAAAAAAAAACSSSSSSSSSSSSSSSSSSSSASSQASSSSSSSSSSCSSSSSSSSSSSSSSSSSSSSSSSSSQAAAAAAASSCQSQAASSSSSSSSQACQQQCQSSQAAAQACQQSSCQSCQAAAAAAACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSASSSQSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAAAAAAASSSQSQAASSSSSSSSAASCCCSSAAAAAAAAAAAASASCCQAAAAAACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSCSSSSCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAAAAAAASSAQSQAASSSSSSSAACQSQSQAAASSAAAAgAAACQSiCQAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAAAAAAACSSSSAACSSSSSSAAASCSQSASSSSSSQAAAAAACSCACQAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSCSSSSQSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAAASSSSAASSSSSSQAASQSQSQCSSSSSCQQAAAAACSCSCQACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSCSSSSCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAASQAAAAAASSAASSSSSSAAACSCCCQACSSQASAAAAAAAAASQQSQACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSCSSSACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQACSSAAAAAAAAACSSSSSAAASSCQQSAASSSCCCAAAAAAAAASQQSQACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQSSACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAASSAAAAAAAAASSSSSQAASSASCCQAACQCiQQSAAAAAAAACQQQSACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAAQSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAASQAAAAAASSSSSSSSAACSASCCQEAACAQCCyQAAAAAAAAAQSSSACSSSSSSSSSSSSSSSSSWQSSSSSSSSSSSSSSSSSSSSSQSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAACAAAAASSSSSSSSSQACSQSAQSAkgACQAQSCAACQCSQAEkSCCCQASSSSAACSSSSSSSSSSSQASSSSSSSSSSSSSSSSSSSSQySSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAAAAAACSSSSSSSSQAASQSQQSAEkkSASSQASAASASCQAAgSCQQQASSSSCSQSSSSSSSSSCSSASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAAAAAASSSSSSSSAAASQCSCQSAAQCQCCSCCQSASSQQSAAgCQSCCACSSSAAACSSSSSSSSU2SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSCSSSSSSSSSSSSSSQAAAAASSSSSSQAAASSCQASCQASSCQQSASAAQAQACSCAAACSASCQASSSSSSSQACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQAAACSSSSSSSSSSSSSSQAAACSSSSSQAAASSCSCSQSSSASQAaAQSAAACQSCQCASQSSwSQSAASSSSSSCSSASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAAAAACSSSSSSSSSSSSSSSQACSSSSSSAACSQCSCSACSSAQASISCAAAAAASCAACASSSSyGCCQACSSSSSCSSSASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQASSSAASSSSSSSSSSSSSSSSSSSSSSSAACSACSCQCSSQAQSAQSCSAASAQASASCACCGSyyQQQSQAASSSSASSSSCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSASAASSACSSSSSSSSSSSSSSSSSSSSSAACSASSCQCSSQCSQAaQQQQQSCQSASSCAAAASSySSCCQSQACSSSSSSSSQSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSQCQSSASAASSSSSSSSSSSSSSSSSSSSAACSASACQCSSSCQSSCQACCAQSAQKSCASQSCQCSSSSQQSQSQACSSSSCSSSCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSASCSSSCQCSSSSSSSSSSSSSSSSSSSQAASASASASSSSASACaQAACCSSSAQaASAAQASKCASSSSiQCQSQACSSSSACSASSSSSSSAACSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSAQSSSSCQCSSSSSSSSSSSSSSSSSSSAASQSAQASSSSASASQAAACQCCASASZSAQAACSCASSAS2SASCQCQACSSSSSACSSSSSQAAAAASSSSSSSSSSSSSSSSSSSSSSSSSSSSSQCCQSSSCQCSSSSSSSSSSSSSSSSSSQACQSAQCSSSSGCAAICAQACQQCQSACBQAQASQCSAQSCQSSSUCCQCQASSSSSSSSSSSSAASSSACSSSSSSSSSSSSSSSSSSSSSSSSSSSSQSCSSSSCQCSSSSSSSSSAASSSSSSSAASCQSCSSSSCCASIQASQAACAQQSAQYAQCCQAQSQAACCQASSQCQQCQACSSSSSSSSSQASAACSACSSSSSSSSSSSSSSSSSSSSSSSSSSSASSSSSQSACSSSSSSSSASSCSSSSSQACAQSCSSSSCCQQYCCSQSQSCCQQSAQTASSSSAQQCCCCAQQCSSSAQQSQASSSSSSSSSASASSQCQASSSSSSSSSSSSSSSSSSSSSSSSSSQAQSSSSQSACSSSSSSSQSSASSSSSSAAQSCASSSSQQAAQCCCSCQCQSCQSCSSDSCSQAAQQSASSASQACSSSACQSQACSSSSSSQCQSAEiQSAASSSSSSSSSSSSSSSSSSSSSSSSSQCQSSWSSSACSSSSSSSCSQSSSSSSAASCQQSSSSQACSKAAQSAQCQCQCQSCSAJCCQASASQQCCSSACCAAASSCCQSQACSSSSQAQSAAAAiCQAAAAAACSSAAAACSSSSSSSSSSSSACQSSSSCQASSSSSSSSSSASSSSSAASQSCCSQAQSSSZSAQAQSCAQCQAQSCSAJCSCSASCSSCAQCSAySAQCSQCCASQACSSQASCACWSQAQSQAAAAAAAAAAAAAASSSSSSSSSSSACQSSSQSAASSSSSSSCSQSSSSSAASASASSQAACQSLSSQAQSQSQSCQASSCCAbAQSSSQQAAAQQAAAQCCSASSQSCQSQAAAASCQSSSCSwCCSSAAAAAAASSSSQACSSSSSSSSSSACSCSQCQAASSSSSSSSSCSSSSQASASASCSSQQCSZQSACCQCSSQSSSCCASCAbAQSSaCCSSSCQCQCQSSAQCSSQSCQCSACSAQCWQCSCSCQSSSSSSSSSSAAASQASSSSSSSSSSACSSACSAAACSSSSSSQASSSSSASCSCSCSSQCQCKSCQQCSCCSCACSQCAAASCZCQaSSIQSQAASSQCCQCCAAAASQSCQCSSASCWQCSSSCgSQSSSSSSSACSSSQSACSSSSSSSSSAASSSSQAAASSSSSSSSSSSSSACASCQASSQCAQLQCACAACQACCAACQQQSSAABACSSSaCAAQQCCQCQSAACQQACSiQCSSSQCSQCSQASCQCSCSSSSQCSSSSSSCAASSSSSSSSSAAASSQAAASSSSSSSSSSSSSACQSCQCSSQSCQLQCAQCCSQAQCSAAAAQQCQQAbLASSTYSCSCCQASSQSAAS00AASiSSSSSSSQS2SAkiQSCSQSCSSSSSSSSASSQASSSSSSSSSAAAAAAAACSSSSSSSSSSSQAASCAQSSSQCQQJACQSAASASACSSAAAAQQCCSARbZAAAASCSQCCQQSQSQQCC0mACAAAAAAAASSSQAAESCASSASSSSSSSSSACQQAAySSSSSSSQAAAAAAASSSSSSSSSSSQAASCQQCSSQACQDQCQQSSSSCSSQSSAAAAQQCCQQQDZISQSSSSSQCACCASSQCSG0gQSSWSSWySWSSQAAASCQCSSSSSSQCQASSSQQAAGSSSSSSGEAAAAAAASSSSSSSSSSQACSAQSCSSSAGgRSSCQCCCAQQQSCSSAAACQQSSSAQARJCCSSQSQCSASCAASSCQSkw0AWySSSS2SSSQAAACQSASSSSSSQAAACSSSQAACSSSSSSSAAAAAAACSSSSSSSSSSACSASCCSWSSAgGQSQAAAQQQASAQSSQQAACQQSSSSQASRICQSQSQAQACQSSSPyCQkk0gAySSSSSSSSQAAAGSCQCSSSSSQAAACSSCQAACSSSQCyQAAAAAAAWSSSSSSSSSACSASAQSWSSQCACCQAQACQSCACASSSCAACSCCASEQSAAABaaQSASSQCCBQAbwKw0WiC0SCSSSSWySSQAAAEyQSgSSSSSSAAASSSCQAACSSSQAAAAAAAAAASSSSSSSSQACQCSASCSUSSCYSCKSSAQAQSAACCCSSSCCSSCASGYgASASQBZQQSASCCQSSbMiZiCCACSQCQQCSWySSAAAAAiSSQASSSSSAQASSQSQAACSSAAAAAAAAAAAASSSSSSSQACQCQCQASQAAAQSCSQAQQSCQSCAQASSSQCSQASCWYATmAAASSJSSQCSQCQQAm3MWkmACSASSACCSSWSSAAAAACSCWgASSSSQQASSQSAAAAAAAAAAAAAAAAAASSSSSSQACQCQSCSSQQAQQCQACAACSCQCCSASQACCQCQCQAT9QAQVwQACSRaSQQSCQSDFC8YA24QSSCASQASSS2SSQAAAACSQSygASSQAACSSCSQAAAAAAAAAAAAAAAAASSSSSQACSCQQCSSSSCCDQCDACSQACQCSCSAQSSASwACSCDSQGAQGVwQQSSCSQCSCSWpLJewC5SCQACQAASCAS2SSQAAAACSSSSWAAAAAAASSSSQAAAAACSSAAAACEEgASSSSQACSCQQCSSSSCCDAQCQSCQQSCCQASQQQCASBkwCCBrAWUwgEkzyQQACASCCASQwSCmATGKSACSQSSSAQQSSSSAAAACSSASWwAASAAACSCSSAAAASSSSAAAACSSEAySSAACSAQQCQAASAQSQSSSQCSSQSCCASSCAQQCoU36QQ9QQMWm2k2kiiSSACQAAAdkeswmzSlaCSAQCQCAASCSAASAAQAASSQASSSW2WwAASSSSQAASSSSSAAAGSSSQkySAACSCQCCSAAEQCBKCQSSQAQQAAQSQQAQSQAyGE39cFISS2mkm2m00oiAQASQSkmRaEjmSQ96CQASSAAQSQAASACACSQCSSWASWS2SSSSQCQSSSAASSSSQAAAySSSQgAAASQCSCCSSQCAQRCQASASAASSQASACSCCCCzW+/tv/AFMTABNJIlJtNNnkAgEEg3sApFPKsknaAEkEkAEEAAkkkAAkEkkgAkktgkkkAgAkkgEgkkkkkkkkAAAkkkkkkIAAEkEgEgEAEgAAkEEkkAggAkgAEkgEkEAEgiT57f7bbxSEklpNsBtNtptoEkAAr1u5UB8An/7/ABYIBBBJAJJJJIJYIAJJJABJJJBJAJJZJAJAJBJJJJJJIAAJJJJJJIAABJBIJAJJABJKINhJIAIBBBJhJJJAIIQIII/t6/332/tpGQQBaSTTTSbSaVYJJbCSOyDYJJP334IIJIJJAJJJJIBYAABJJIBJJJIAJJJJJJBIBIJJJJJJAABJJJJJJAABJBIIBIAABAJJMJIIJIBJJAIAAAAABBJJAHdl8tm+m9tkhnYJZSSabSTTTTOR/abOSYAKQAG+/pBAIAIAAJJAJAJSABBJJIBJJJLZJZJJJJIJAJBJJJJIAAJJJJJAAAAJBIIBIAAAAJJNhBJIABBIIAIIAAAJJIIbII4ftkklltttl6yZpSbTbaSSSSTFG21qXYBSQA3O1xDAIAIFBBJAIAABpIIJJJJJJJJJJJJJJBJBIJJJJAAAAAJJJJAAAAJAIIBIAABQBJEoIJJAAJJAIABJBJAJJIJDC4G50ttlaS0ttuTrk6bbabSbTaWS+fuTbIAQAAHO1wBAAAJlJAIAJIBBBBBBBIJBABJJJJJJAAJIJBIJJAAAAJJJJAAAAJIIBBJAABYbIFsJAJIIBBIIIAABIJ5AJAZgM9JcTUliTa1tts7S1yaZIZIaaVaJiEu+QAAJQgH+15JBIINpJAJJIAJBAJKYBIAJJJABJJJJAABJRIJBJAAAJJJIAAABJAJBBJJAAJIREpIJIAJAJBBIIJBAAx7RBa9II3OhBL/7fvlsEsTK6jSJKbIbabZBE325AAAL+gHu0JBIJIBJNAIABIIIJIABJBIRJJAABJJJAAJJIKBBJJJJJJAAAAJIAJBIJJJBJJbMpAIBAAJBBBIIIJBABk/4bbchADwlkyW//wDZZf7em2HWw00kU21wT7l8yACgW9ANztgCYASQSQCQASQQQQCACKCCASWSAASSQAAASSSQSCSSSSSAAACQASCSCSSSAQQDICSASCASQQSSCCCCCAaD5clcpSSXrJAEn/7LJdtt18hACQm2mm1rP9tsQAWSScAN99yCYAQSCSQCCACQCCQQCCSSCQSSQCSSAAAAASCQCCSSSQAAACQCQCQASSSCAAAYQCSSACQQAQSQSAAQASeARsB/86Ak1MqSfi2l+331v0PSC22k0230tv3vwASSScAP9/yQKQASSACSQSQQACCQASQQCAQQACSSAAAAASQSiQSSQAAASSCQSASSSACUmDKAASCAQAAACCSASQACCSCAG5CFujKm1vESCVEm+lN957KQQkn2mm3U/lAcgASSScAPfPyDYCAASSSACSQAASCAAASSQCQQASSSAAAAASSSwSCSAAASSCQSCSSSSAQSiaAQCAQQQQAASQQQQASCASQQt06SGmu2203NAXeU2pZJp62QS2km028i1SQQQAST+cB/vtSGIACASSAQQCDSSASASSASCSQAASQAASAACSSiQCSQAASSCSCCSSSSCSQCQCACQCACQQQACQSCSAQSQAAmtt2SgHcr022s+RYak7btrukwGk2k+24AQAACSACQf8B7rpSHAQSSCCCCASYCQSCASQACSQQACAAAASQAgSSwSASAACQCSCASSSSCAWySASCQQCASQAQCQQCCQQCDLCQQ31s3i0PwP9+m9baFEb5JLNUQG2k0nm6SQAACSAAAD8Pd7rSHKSQQSQSQQAASCSQASQACSASCCQQAACSAgCSSCQAACSCSCQSSSSAAUyQASACCSQQAQQSSQCSCACDZbIBwNhSSMOP9IO002yYSYdACA60Q3+kmnv4ACSSSSAAAAAPd7rSDKSAASCAQDQSSSASQSQAQQAQCACQAACSAAgSSQSQASQSASCSSSQCACKCSQQSAAACQAQQAQACCABLZLaZqX2ACyYkvutum039CDNyCQYFW/wDtpJJrEkkEkkkkgAADGa2AgQikAEAgkgEkgEEAkEgkggAkAkEkAgAAAAAABEgkAkggEkkktggggCggAAgAgEgAkAEAkkkgkkSy2S2dqFt0tfo4V7pqogghjSgLEkw7Ey/tppNqkmkgkkkkkAAAAjykgggkAEEgEgEgEkAEAkkAAkgkAkAgkgkAAABJJBEgkgkAkEtlpEAkGAgEEggAAgEAAAEAkgAAEyS2WWSWJ2JAvPrAdsE4kltLNt8n/wAi41+t/wD0m0qSSSQAACASQCABLQT8CCQAASCCQQCSCSACCCSQQSSSSSQQGQQAAAEgACSASAQCWWAAQSKSAQQCSAACSQAAAQASQAQfJJLZbbZ8lUg//v8ANpwTtMKUCa8AiwoGhjW3/wC7SpJJJBAJJIBIIBIJDNg5JJgABJJJBJABAJJJIAAJBIJIIBIBJIAAAQAAABJBILZIJAJBoIIBBJBBIABJIAABAABIJmklktttltn5mQO+33Zis2xuJIJ1ghA52AJ+9/8Av0qASSQQSSSSAAABSULZIACQQASSSSWAQAQQCSAACSCSQAASSCSSSAAkAACQCQW2CAASISCQACQQQSCQCSQAQQQQQAQ9bZLBbbJJfkMSJt+lkfdWiE2iP02SA0QSpLf/ALt5EkkkAkAAkkgggr2AWS2YEAgEkgggAEkkEEkgAAkEgkAggkkAgAkABIAAAkgklsgACUEEAggkAkAggAEEAAkkEgEgB7y2SyyWWWyRXETf9/j9ANNpJAMgtAgkgKWbLdNYgkkkkkEgAAAgUxSCNz4AEAAkkAEAAAEEAkAAAAkgEggAgAkAAgEAAAAAkkAkABAAgggggEEkAAgkkAkAgAEkEhkAiUW2WWW22S2W08A3/wD5bbTabbCpJALIpAAs7baT85JJJJIBJJJBEvxE3gcXIDcAJABJAAAJABBAAABJJIBAIIBBAAAAAIBJJJIIAIAAJIJIIBJAAJAABJJIIBAAJIHZABJ43v0slksktk4ht/8AsE22k0tTbaJQGiASZO2kk9qSCSQQASSAALQjd/LyUSLd1iSSSAACASQQQAAASSSQSACCCCAAQSCAASQAASCAKASACCSCSACACCSSAAACACSbVEQVZBftLJLZJLZJ63f/APBpJNJd2yW2SQNAAi7ZJJPaAgkkkAkkEgVICf7/AGJADt3+HIJIAAIBJABAAABJJABIJAAJBIAIBBABJJAJIBNBIAAJIJIABIAhJIAAJJJAJJCP++tVuikklllklk0yUv8A8y20sVbJTZbJCEAAb9kkk/4CCSSQCCQDLT0t39/9ndb/ALa8gkAkEkAAkEkgAEkkkAEEEEEEkEEkkgAkkHgGAAEEgkgEkkAkCEEkEAEkkgkkkHLtYCDTa2yy2SWy5k9vX/8ADSakktststloQJBl2SSX3gIJJgBJIIvYN6bfX/8A8tLoOSdEQCAAQASCSSQSCSCSSCSQCQSAAQQCACQAALCQSASCAAASQCABASQSCQAACSSQIVzekl98hZJZLbidDuzJ/gk0pJLTZJbYbUSQZbkn/l6QQYAAQSJRGQM23Zv/AFvbatAG7REEgEAAEEkkkAkkEAkSQkAAAgkEEgkEAgggkAkgkkEkAAAgAAkkEkAAAAAEEjepUKpOTMeSWWeJyIlBmb8oKQ2ySm2W2G1EgGWbJdp/kEAkkghQrfbDN/2bNxZP+loAH/WkkkAgEAEkkEkkEggkkAEgEEgEEkgAAAkEkAkgkkCkEggg2kkAEkgkggkEEj70LZHHSfim0lj7ssUjs/Z6SW22SW22yWxEgmSffJN7EAkgAhSN5fbLdv8A8daiQTjSXn2314AIBIABJJAJJAABBABIJJBJBAJACAAAIAAIBIIIsJJAJJpJBBBBJIJIJALSbG7Twckmowzn29R7bTNvEkttsEkttslMQAJkk3/TSxIABISg1DSWp+b37t19rLJBkP8A9v8A7gAgAgAEkgkgggEEAgEAgkAgEABIAgEggEgkgkmwgAggkkgEkAEkkkAAEG6JTNbTy2mdNPfcQfMiIyKW222wSSW36SwAEnWzb/tbkEkgoxsgooefbvqEDb6WvAX9f/7fSSEEkEgkkkAgAgkEUgEkEEkEkEEkEEkEgEEkgkSEkAkgkwgAkAkkkkgG8E3tGf8A9IlgA7W+YAidliRJRttsEkkkt6ksAAJutu/6XxBJLcktAJBFk2/dQ7aalDJux3//APtJuSCSSASQQSCSQACQACAQACCSQSQQSQCCSQCRaCSQCQASCASQCSSSSayCAImv8I+raQfXLgQAvJZBEE7bbBJJJLdJLSACP9JtmloCAAIQCCACAFP+0PM2kqLN/qd//wD7W0oFAkEkgggkgAgEkkCgEkAgAEgEEkgEgAgEgwyEkAkgEkgEkEkkkioEmUE0IGzuaUkGkSAgEiSSWTokWAASSSSSSS0gEj/yTbL+gkE3IgEEtNBbbGyEgk8ayX7r/wD/ANrKLIDmQSQCASQQCSASQCAQSQSCACCCASQSCQQCZQSQCQCAACSACQAQgCCASYOYJTbLAQCNSACbbLJZSayyBAJJJJJJLSASJtBNt9eSQBmyQC2vsh98JzUSKf8Abf8A73229ZQLCAVBBBIJJABABIAJJIBJIJBIBJIBBBJBJJJIAABIIIABJIBJBPlBJslkl1z3ZkllgKNkAtsttoNLSaAkkkkkkklpRBI+8kltl4JJ95hJXks3e3xlan/9t2+2w/2/1MBabBJHBJAABIJAABJJIABJABIJAJIBAIBIAJIAIAJJIJAJJAAJGFstlssklqr64baklr0lstlpIJBDSEQZkkkkkklhRBI39tsvuxAjC6XhVv1l8/wm280uln+39228oljTSRIFFBJABIBBBBJJAABJIIJJAJIBABJBAAABAIJJIIBAIBJINtkttlllsnA7MwTFtl5MllpJbIJIITaBOskkkANgBAI+9v332Qvn15T++s+20/5/tku/1n+2VslBbkrTTaIAsKAJIAJJBBBsJAIIJAJJAJABJIAIBIBBBJIBIJAJJAB1sklktBsinNErSRjYll5QlACTaeYJDCUDLfkkttspJAJ0al+2ACssjQfG7Bzbm/y/+ttm/wBkvxLbTpa0mmkwTAXFCCQAASQUFMiSSCQSCSSQQQSSSCSCASSQACSASSRfvJJJLISSQr7KKkAU0QSo2QSmG0meW0Em0kAPJbbaaWQAfEvPbCKwKaUlmyCE27/kJpZbd9/XiH9KdrY2uk2iYZJLCgSQAQRakn8yQQSCCSSSCCSSQCSQSQSQCCQSQRPbJJbZJaQCSDbLKWCCgSA0gQUm2m1c0220khUWpbaBaAQQd8tfQWWg66BJT9qm2rk37ZbLbJOiV9xA5bK9820mZZbbD2SCASE0k0k4yCQCCSSSACAASSCQQAASQSQAQNLJJLICTYmDARZJI+20wQSAiGmtvttv80m3kk20R7SDaEQSJP8AiBGjpJs2Sh0+YJusA62W22y/IP6wLa239f8AW7aYslktlxIBP5CbbRLZBABAAJIIAIIAIAJIBIAAJBI0lu/lFgAAJDAAIAYbaff9AF3z6+2/+/2+SabSTdCKdslhRBAUuxtDZbaKFiTSIvRb5INslttS34aUh1yll322fzTTMkttn/4IE5CaaZBMYBIBIBJIBAIJJABIBJAIIIKtttshaRJIEiZJJLSf+33/ANv9/tv/APLf/wC+2SaKRaOJJ9opRIIaKHLCBCTLRrSbEqfu8tmlttsv+DbAA31lv/8A/k9k2kJZJJvMVXPYm00SC0AAQAQSSASSCCAQAACAASZrJJbbAUmWQRA2md//AP8A33++32W7S3/SX/3/AMsg2UAgQSHKSAQAZTCUsWm2CCQnYkoYfwtPNLLbL+0xS3tt7Dtsk+vkkmkEZfs95s5rWWmwFCyQCSQCQCCACSAASACCCQ7bJbZICUw2C2mstv8Afb//AH33/wAkk0mkm28nvv8A6QkAokHUkAFkkgHlv/tvoggQS2RoFgvu7f2y2SgoTCfbfyprZJPrf5tJEg3C0Lj/AI9lpRID6IBJIABBJJBAIIJIJIBE/svltkIIC+6H23/22223fTSSbaDTTTSbSTTX3+81wAAIMrKIYJJhD/27aaIa6TlsNBUJT3NtkssbSJA/31tbaaTbe++2TSbTNrYdtkm9tqKeTZJJJAAIBBIABJAJJAGNvklkkhAO22//APt/91tv822kk9sm2k0222uV9Jtt5aSUSTJqCgQTzYN//wDpJNLrKmACpEp0Eg2aWNuYv/bW2dNpvLJLf79ttoRFppPi3bGqhu1gEgklAAEkgEkAAgEAqy2y22SEkAb7dNtpN5NLrJtptJJbNpJPZpNu3Xbtb+yBNJgCCEkkBW2Sbf7NJMfZKJu2pClSulX1wJRiy/6y77vZ7f8A22+/TSEILSbSd2yx98NhQBIBJAABAJIIIIIJPlllAANJD+32ySzSaTfbSTbSbSabTaTabWTTb8sBif2lpU2abBIfQJAMtv8A/si83v8ApNK0tNJ2U8HmNNAnSyyJ7b/7W7/b/fZpmogJJtptqbgFWmlgkBEkAAAkEEgAkA8yW2khsAp7b/5pP7XttNtbNpttNNJN/tJffJJ2TxsY+2z3XfpMEg1IMBy2ZP8A+K/+/wB/+2m302zZCyCzjf8A/wC/3W3239n22/8Av+mG0kiGkm2CIabLcAAkASQAACASU0QSjZaAAksi9tm2221bZZkm0m0tkknu22tsm99uknLdeNLONtt/v8QQQAaETXYgd81//vvt+2m20200kpSyJp/P/su/t/tJ9tv/AOzpAtNogNpJEAbi2kghIAEkAAAkAlNoSq0QgAtLN75ptpNPySW/pttJ/b/r/NN77dpfptt699ioL7b7f/8A3yvzRGzAHABP+/332+++6a7WSTzbdoKFllk+/wD/ALf7SXbf5/tZEAkghtJNkogyWkggAAEkAAAEkktNeQAEwgrf77JptpNrW22tptP/AG222+2f2232bTaWd+ubdRV23me2+/222z9qADBO23//AN9/t9nt20mh/vPsTLk/J9vt/wCfaf7/AHaVaJIIIIDSLJBA+XAAAAABJAAABJIJTRgJIIaf/wDv80mkm29ZLJvv57Zb9P8AbJTfff8A6STZCfGMDiiWOyb2+/8A/vv9vEAIw1/9/n9tt9v9vu+NyENyUmQuNZbbJbv9v99+l2SwCCQQWwCSf8CSSCAAACQAAASCASAKASGnvtvv222m229ZJZ9tLJbbbftv1Bv9t+0k53iAQeJGbiNm2u39tv8AfbvxEhZ//f7b/b/f7/8A/wBu0miGkiSBv5JJbb//APfWb7xBIkAkgkgmVMfEgkEAAAAkAAAkgEkkABrtv7bfb59pMplveW2G22yWUwSbRdANbbfpWZvccqlhxMOThNrlp9J7bftoAk2+XffNrb7ftrZbdstUgE3sEk+f/wCktvlltsW7aTRBIIJBIJz+AIABJIIAAAIBJJJBJDXe3X+2+7f7TSTSS0ktkktls629l9sFzf2TcCKh1zg8yElJLJSbzSSSf++7bWzJHMt7S6+2Sya5+xYAMgtkJBJICf8A/bJLLrNck2k0SQCCSQTrKQSSASSSAAAQASSQQSG3/wD/AG22+SSXaTaTSZstttktsqUtt0srTX3yYBsxvB6gXGYmg5xVmST22/8Au3v3aSK7Ikm/+n8l998iCTZJICSCCSbX5ZZZd6M03GmmSSTJYSuXCAQQQASSAAASACSSSQbF99/t8l8tm02km2CX7ZJBZLJ/bZPZAknt8168hWIkrOcSG6z2zbWk2/v/ANJLZNdknC5Jv7v9q76ykgkG2wkEkmAghhXy2zzxpJpkBouUSSQBqkgkkkgEkgAAkgAAEgkhWcxPd5tpt5JJttptN22yS2C2yWyT2JJJ7/P/AM/DkbWdUlwqjAk3FaaSTf8Au1+02mSRfb+ns/8Av/fUgkEEAggEAECkEQBbXbqNpNJkIkLdfSphcAkkg0gkAgAAkgAAAgEhHbALtJoAptpJtpJJb2a3e22y222ySLpJ79PDL5RCbF9yi0h12Rz+NtpJtptvNpNrkkmWtNLfc3zkiEAEkEAkAkgAEgFLfKSNNttAhh//AH/SApIJJIoJIIIAIJJAAABBAKG+JWSRATSTTaSRKXb2n/8AbpfbZLQL202+ktyfxbfvsMq21SkhG+rak0m2m22m2mmyASqkm1viLbIZABCCQQSQAACYQQPybb1km0QClnvu0SyAQQTQCSASQCQSSAAACCAAd+QEy0222n/kmSSWZZltvtkzLJSVt028mv8Azsr7pbU1CJeAJwNp0kdJNtNNttpvZEEmV5LbAwiXWQGEgAgE2C0EAEgh2ImdNpNkgf3/AHDcYIBJIoBJABJAJBJIAAABBAJP9oCbaSTS22SbJESNt/8AslSQBZAm/km02tpt3tmktSmhyi6Q4VFGyX82m02203tsvwCPVrcRLYZbSICQQSBabACQSQ0lWj9+32n/AGy/luAkkEg0EkEAEkEkkkgAAAAgglhkTNJtNpp7pNAG21atbbtMAO2AmeTdNpv94rS19t6hnDXjUAe2Ord7ppttpJN7bZq0kD73CWSwGSKAAgEEUEwgggkBtoZSRJSe2SWwswEgAgiEkAAEEkAkkkgAAEAkEAMsuuSNNtJtJtJuS7VtfJtNMgACSyWdNNt+7New/dRj+HDhP67cRDUTpptttJpfbbbbEhEfwS2SWiAAEAgAQEggAkkglv6+ySySXe6tDgkkkEAggkAAEkEkkkgAAAAEggFBFbf9tNtJNJtrW3dt75ttFsAAGS2VLpt//quSLSVQbaFlpXHehQcn7ZJpNJpPJ7b7IkNZWy222wAEkFgCwi0kkgAAkL/ra2SS7f8ATdBEBIIBIIJBJJIBIJZJAAABABBBIIX+/KaTSTSSS1tszX4yTbaAJJEMCSbSafaFf5aTUpJesib5Wlcx6HvSSSSTTTT32/8AE2qJbbZJCQCCQwBQZDKCACCAR/r9LbL/AKwNgA0EgggEEAkkkgEAgkkgAAAgAggBAkrfVJJJttpNbb/NttttpAEkGgQEAtppLQXItmJrQke2rS0/SVC7D5hJttPtptJff8ZNC2m2W0wAEkMGUEAEkgAgAA1yfbW27SoAS2EggkAkEEkkgAgkAAkkkAAkAEEkAEFJZttpJNNtpNpNtJtNIkkySk23+pJJP0GyQZ2vwhtVNIlVqWqCRk45NpJr5Ft/bb6Vi2Si2wwEkkkiyQiEAAAgEgklG72S341yUwgEEgkgAEkgAkAklkEkkgAEgAgkkikNpttP7b5NtNJNJpJNAkkmQEw9FpJttaCWnDBfehpWymHGR77121QqNprPYtv/AG3X+1tklssIALJIZsgJBBJAJBJIJXn0sugrtoJBHIBJAAJJABIBALJIJJIABJABBABIAaaX3+3/AMmm0m2222mCSSWSKQ2k080nsxJXzwFIFjISdTm8WAnZY5hu+GmQm1/k0v5ZLbZZDSQ2yCJaQSQCCQSSCQ2J9LD44aCQCAQSSAACSQCQSACSSyQSQEAQASCCSSQkk72//kkkkkmk0t3zCGUIVqk2mu+u9ugDQY9aKFVgV/H/AG0qwgS+8YhopJp5NNpqWW2yS00EBJgmUkEkkAAkkggJ/wDtr8uIIIJFIJJJJAJIBIIBJAJJZIJIABAABBBABAaWd71koTSSSbbT2UbjbTvSySTTaWzTbSkXITKja24I3473FldqNTo0RKTSWbbSbotkkMoEBADIIkpIJFkBJJBBK9etDWgBBBJhIJJJJJJAJBBJIABJLbJIAAAAAIJIJADe3O+sqTbbSbaS3r/VabfaSSya2e7aebVlfP4+y+25JHmSzVoaiiBuMCCSabbabMskllppAAAZAhAJENpJJBBBCZWpaeNnIJEJBJJJJJJBIIJAJAAJJJBJAAAAABBBABIbY1v1lrbTTb26Tkf0m7fbbSbX6/3TX/zNig00jbP32JURAslBTMN/YYJbSbbSSYkklkgoAADJNIAIJssBIAJJKAoQicg4IIhAJJJJJJIIBBIJJACBJJYJAAAAABIIIAAJa+30n2SSbf7ba5Ozou/bbTbdaWzaSW3RttqOOzL/APtSnoDEsCm4scTy0020m00JLbbZKSAC2AQSCCTLCCQCASMKFGSQCQDQCSSSSSSQCCCQSSSQAACSgQAAAAACQQSCSC/8tt/0kkkmk22QAl39ts0s/wBP7ZNNPZAWyyRiJNvbjj8YVu8AKYJJstJJJtNLCy2yWQEgEkgggAgEWAEEAAgEtftARkgkAgkkkkkAAEEEkEkkkgIAEkkkAAAAAEggggAlv9X7dJNtJJNpsgRfG7/dLLpP/dJNr7tCyEyPNI0ten/GdAUiTBtUHPpJNtNJCy2WW0ggEkEAgAAkAAEkAkkJqQGBokAAkEkkkkgAAkAEkkklMkJAAEgEkBAAAAEEEgkEv7m75SpNpJpJMgGoE7/5dJ9NpNJNp77JCWGQYWWuDgGYoXhVgBUs/pttbdpIGWiWW0AgEkEgkggkgAAgAAEeqRy5kgkAEkkkkkAAEggkkkkggkkkkgEokkAAAAEgkEgElf8Av30vSbabXvIBSoJ1rSSSb/6aaTT2/aRlZp1sd24AF6SIPj/k427bT227fAlttFlgAJBBIBIIBBJJIJIADyjt6IBABJJJJIIAABJAJJJJAJBJJIBJBIJIAAAAJAIAIILf2W83zTSabtpCDe36nTf7yc7zaTae3+SNsHEQd26JIuTX9/7tI/7TTf8AsnjLACDJKQSCASQACCCACQASSARmbmSSACSSSSSCAACQQSSQSQASQACSQSCSCSSAAASQSSQQE22/7vm00k/CQEmk2n28vm1s000m0tv8yI2rSCWJ2wR/xcl9gCHs0k1tsn+ZYALbSASCCCCQQQASQAAASS8iMACAASSSSSCSAASCASSQSAACSSSSSQSCQSSSAAASASCAAk0ttvsmm2tKQEElumNm92m2nv0k0mn/AMi98EUkEbcogZZvbllpbNtfffbbcSSmy0gAgmklEAACEEkkEklxAMkggAkkkkAAAkAEggEkkEgAAAAAAAEgEEgkkkgAAEgkEABrdzdN7JNtLkAltr9S9tNNtJJrtNtNf8nSf22ewH78Crt3NtNtLJpbbfb/ADHNllhJBAIIGdZABIIAAIAJIAQJIgBJJJIAAAIABBAAJJBIAIAAAAAABIIJBJJIAAAJBJMJCf8A51tmkmm6QS2kn3JVs00mmm/20mnvwYlL9/8AwD7/AF/See7TbVCTey3/ANt3cBJISAQCQCv0QQSCQSCSDKQgCCQCSSSAAAAAACCQAASQSACSSSAAAAAQQSCSQAAAAQACLQG3nIk22k26SSwW28pIummkkk1s2mlrk/c029v6Lhn8jin2029d2l+n/tvtggbMCASCTfvs6gSQQSSSbAESSCACSSAAAAAAASCAASSCQACSSSSSQAACCCCSQAAAACCSDSA80r/kkk2oSSQS22/DNt/2km2m021JdvkGSm96N+m9c3t/0xmD80u9/wD7/fqaSwAAkiP/AO/2CJBAABFpMAANABJJIAAASAABBICJJIJAAJJJJJJJAABBBBJIAAAABAJBhBe2zuSTabkIABbbaeIan2SbTTTSTT2/k8kSa+sUiT0b18mTwsMTS22/3+33bBgAJJBa2/8Av0GAQASaQeQSKACSSQAAAAAASQSASSQSQACSSSSSSSAASQSASSCAAASQQQQCv19G2k25FSSW2k2jy1Ps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mknf8gEEEEAkggBBABkAkAEkAkkAAAAAEkkkkkkkkkkkAAEkkkkAAAEgkAJAIkEkkkkgAAkkkkkkkAkkkkkkgEkkkkkkkkkkkkkkkkkkkkkkkkkkAAEgkEAgAEkkgEggCyk/kgEAAgEkgABIJMgkgEkgkkgAAAAJkkkkkkkkkkkkgAAkkkkAAAEgkgBJMkEgkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAEgggkAAkkkAEEEiEAkgkgkAkkgAAAEkEgEkgEkgAAAABskkkkkkkkkkkkkAAEkkkAAAEgkABJMgkgkkEkkkkkkkkkkEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAgkEEAAEkkgAgkk0gkAkEAkkgAAEkgAgEkAEkkAAAgINkkkkkkkkkkkkkkgAAkkgAAAEgkAIAMgkAkkEkkkkkkkkkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAEkgggAEAkkAEEAkgknggEkgAAAkkEgEkEkkkgAEkkJMkkkkkkkkkkkkkkkAAkkgAAAkgkhIAEgkAkkkkkkkkkkkkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAgkEEAAAAkAAggkEAkEEkkAAEkkEsEgEkkkkAAkkkJBMlJJMkkkkkkkkkkgAEkAAAAkkkgIAEkgAkkAEkkkkkkkkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAEEgggAAAAAAEAAgAEgkkgAEkgEkAkEkkAAAAAkkklJJNJJJkkkkkkkkkkkAAAAAAEkkEkkkkEgAkkkAEkkkkkkkkAkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAEgEEEgIAAAAAEkkEkAkkAAkgEkEkAkgAAAAAEkkkhJJJJJMkkkkkkkkkkkgAAAAAkkkgEkkkEgAkkkkgEkkkkkgAEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAEgggkAAAEkgAAAAAEkgAkgEgAkEkgAAAAAEkkkkhAAMkhkkkkkkkkkkkkkAAAAAskkkkAkkEkAkkkkkgkkkkgEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAkEEEkgAEkkgAAAAEkAEgEgEkEkkAAAAAAkkkkkhAAMkkkkkkkkkkkkkkkgAAAEkkkkkkgEEkgkkkkkgEkkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAEkggEkAAkkgAAkgAAAkEgEgEkgAAAAAAkkkkkkpAEkkkkkkkkkkkkkkkkkAAAAkkkkkkkgkkkkkkkkkEkggEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAgEEAkkAEkgAAEAAAEgkEgkkAAAAAAkkkkkkkkkIEkkkkkkkkkkkkkkkkkgAAAAAAAEkkkkklkkkkkkkkgoEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAAEggEgkBAkAAAAAAEkEggEgAAAAAEkkkkkkkkkkAEkkkkkkkkkgAkkkkkkkAAAAAAAAEkkgkkkkkkkgkkAkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAkEgkEkIAAAAAEkkgEEEgAAAEkkkkkkkkkkkkkIEkkkkkkkkkEgkkkkkkkAAAAAAAAAkkkEkkkkkkkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAAEgEAgEkkEkkkkkgEggkAAEkkkkkkkkkkkkkkkAAEkkkkkkkkkkEkkkkkkgAAAAAAAAkkkEkkkkkkgkEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAAEgkEgAkkkkkgEkkgggAEkkkkkkkkkkkkkkkkAAEkkkkkkkgkkEkkkkkkgAAAAAAAAkkEEkkkkkkggkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAEkkkkkkkkkkkkkkkkkgAAAEggEkkkAAAktkAkEgAkkkkkkkkkkkkkkkkkgAAMkkkkkkgkkkkkkkkkkAAAAAAAAEkkEkkkkkkkAkkkkkkkkkkkkkkkkkkkkkkkkkgEkkkEkkkkkkkkkkkkkkkkkkkAAAkAkEklssktgAkEkAEkkkkkkkkkkkkkkkkkgAAMkkkkkkkkkAEkkkkkkAAAAAAAAEkgEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgEkkkgEkkkkkkkkkkkkkkkkkkkgAAkAkkAAAAAEkAkAAEkkkkkkkkkkkkkkkkklIBMkkkkkkEkkkkkkkkkgAAAAAAkAEkkkkkkkkkkkkkkkkkkkkkkkkkkkkgkkkkkkgAgkkkkEkkkkkkkkkkkkkkkkkkkkAAAkgAkkkkkgEkgAAkkkkkkkkkkkkkkkkkkkJJskkkkkkEkkgkkkkkkkgAAAAAgAEkkkkkkkkkkkkkkkkkkkkkgkkkkkgkAAEklkgAkkkkgEkkkkkkkkkkkkkkkkkkkkkAAAEkkAAAAkkAAAEkkkkkkkkkkkkkkkkkkkkkkkkkkkgkkgAkkkkkkkkgAAAAAAEkkkkkkkkkkkkkkkkkkkkgAEkkkAEkkkkkgkskkkkkkEkkkkkkkkkkkkkkkkkkkkkkAAAAAkkkkgAAABkkkkkkkkkkkgEkkkkkkkkkkkkkkkgkkkAkkkkkkkkkAAAAAAEkkkkkkkkkkMkkkkkkkkkggkkkgEkkkkkBNJMkkkkkgkgNkkkkkkkkkkkkkkkkkkkkkkgAAAAAAAAAkkkkkkkkkkkkkgAkkkkkkkkkkkkkkkgEkkEkkkkkkkkkAAAAAAEkkkkkkkkkgkkkkkkkkkkgEgkkkkkkkkgtpgkkkkkkgBgtskkkkkkkkkkkkkkkkkkkkkkkkkgAAAAEkkkkkkkkkkkkkgkkkkkkkkkkkkkkkkhkkkEkkkkkkkkkgAAAAAEkkkgkkkkkkkkkkkkkkkkkAEkkkkAEkkEpMkkkkkkkAAkFkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAkkkkkkkkkkkkkkskEkkkkkkkkkkkkkkkkAkkkkkkkkkkkgAAAAAAkkgAkkkkkkkkkkkkkkkkkkkkkAEkgEkEkkkkkkkkkggEgkkkAEkkkkkkkkkkkkkkkkkkkkkkkAAAEkkkkkkkkkkkkhEkgkkkkkkkkkkkkkgAEMkEkkkkkgkkkgAAAAAAEgAAkkkkkkkkkkkkkkkkkkkkgkEkkEkAEkkkkkkkkgEkEkkkkEkkkkkkkkkkkkkkkkkkkkkkkAAAEkkkkkkkkkkkgkkkkAkkkkkkkkkkkkgAMkkEkkkkgAEkkAAAElAAAAAAkkkkkkkkkkkkkkkkkkkkgkJkkEkkkkkkkkkkkgkkEkkkAkkkkkkkkkkkkkkkkkkkkkkkkAAAEkkkkkkkkkkkEkkkkkAMkkkkkkkgAAEkEkkkkkkkAAAkkAAAkkAAAAAAkkkkkkkkkkkkkkkkkkkkgBtskEkkkkkkkkkkkkEkEkkkAkkkkkkkkkkkkkkkkkkkkkkkgAAAAkkkkkkkkkkkEkkkkkgIANJIANgEkkkgAkkkkkkgAAAEkAAAEkAAAAkkkkkkkkkkkkkkkkkkkkkkkFNtkEkkkkkkkkkkkkAkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAAkkkkkkkkkkkEkkkkkkAEEkkkkEkkkkkkkkEkkkAAAAAAAAAAAAAAkkkkkkkkkkkkkkkkkkkkkkkkkkAkEkkkkkkkkkkkgAAEkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAAEkkkkkkkkkkgkkkkkgEAMkkkkkkkkkEkkkEkkkAAAAAAAAAAAAAEkkkkkkkkkkkkkkkkkkkkkkkkkgAEkkkkkkgAEkkggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAAAEkkkkkkkkkkEkkkkgEkokkkkkkkkkgAEkEkkkAAAAAAAAAAAAAEkkkkkkkkkkkkkkkkkkkkkkkkkgkkkkkkkgEkkgAEAkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAAAAAkkkkkkkkkkkAkkkkEkpkkkkkAAEEkhEAkkkkAEkkAAAAAAAAAEkkkkkkkkkkkkkkkkkkkkkkkkkkEkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAAAAAEkkkkkkkkkkkAkkkkkgkkkkAkkkEkgokkkkkAkkkkAAAAAAAAkkkkkkkkkkkkkkkkkkkkkkkkkkkgEkkkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkAAAAAAAEkkkkkkkkkkkgAAkkAAEkgkkkkEgAlkkkkgAkAAkkAAAAAAAEkkAkkkkkkkkkkkkkkkkkkkkkkkkgkEkkgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAAAAAAEkkkkkkkkkkkkkkkkkAAEkkkkgEkkkkkkgEgkkgkgAAAAAAAAAAAEkkkkkkkkkkkkkkkkkkgAEkkgkgkgkkkkkkkkkkkkkkkkkkkkkkgEkkkkkkkAAEkkkkkkgAAAAAAEkkkkkkkkkkkkkkhEkkkkkkkkkkkkkkkkAEgkkkEgAAAAAAAAAAAAkkkkkkkkkkkkkkkkkkAAAkkkkkkkkkkkkkkkkkkkkkkkkkkkkgAAEkkkkkIAAAkkkkkkkgAAAAAEkkkkkkkkkkkkkkgkkkkkkkkkkkkkkkkgAkEkkkkkAAAAAAAAAA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",
  entities: [
    {
      id: "ab10bee0-172e-44bb-b62c-2e1a9ef5134e",
      entityId: "light.work_light",
      label: "Work",
      type: "light",
      x: 17.200016141724316,
      y: 28.56379007687497,
      points: [
        {
          x: 2.731512325116589,
          y: 33.44437041972019
        },
        {
          x: 28.952200318799054,
          y: 20.041968483283227
        },
        {
          x: 48.70967091059503,
          y: 32.18054518673957
        },
        {
          x: 49.1672218520986,
          y: 43.00466355762825
        },
        {
          x: 63.9906728847435,
          y: 41.205862758161224
        },
        {
          x: 68.07974011823813,
          y: 43.80258671132544
        },
        {
          x: 71.08594270486343,
          y: 45.436375749500336
        },
        {
          x: 67.62158560959361,
          y: 48.201199200532976
        },
        {
          x: 66.62225183211193,
          y: 58.52764823451032
        },
        {
          x: 48.16788807461692,
          y: 73.95069953364424
        },
        {
          x: 47.201865423051295,
          y: 64.12391738840772
        },
        {
          x: 40.43970686209194,
          y: 69.42038640906063
        },
        {
          x: 41.005996002664894,
          y: 76.38241172551632
        },
        {
          x: 11.29247168554297,
          y: 49.1672218520986
        },
        {
          x: 10.426382411725516,
          y: 49.566955363091274
        },
        {
          x: 6.482920037933053,
          y: 45.86872742680737
        },
        {
          x: 6.528980679546968,
          y: 44.4037308461026
        },
        {
          x: 5.19653564290473,
          y: 43.271152564956694
        }
      ],
      shape: "circle",
      style: {
        width: 2,
        height: 2,
        colors: {
          onColor: "#acb7c8",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        rotation: 0,
        edgeBlur: 0,
        gradientRadius: 25
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    },
    {
      id: "619b4fee-dc1f-4161-8b02-9080ed206be3",
      entityId: "media_player.living_room_tv",
      label: "TV",
      type: "media_player",
      x: 32.17953632896843,
      y: 56.84409112003374,
      points: [
        {
          x: 25.465587861423295,
          y: 52.06714957325316
        },
        {
          x: 34.24668590222151,
          y: 59.169508282722305
        },
        {
          x: 35.021488670527226,
          y: 64.33486007142713
        },
        {
          x: 63.30178971368616,
          y: 58.39470551441658
        },
        {
          x: 30.630939650128123,
          y: 36.82936179657392
        }
      ],
      shape: "circle",
      style: {
        width: 0,
        height: 0,
        colors: {
          onColor: "#13b6fb",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        rotation: 0,
        edgeBlur: 0,
        gradientRadius: 15
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    },
    {
      id: "69b6c574-393e-40cb-a4df-d56cd2dcaa9d",
      entityId: "light.livingroom_light",
      label: "Livingroom",
      type: "light",
      x: 38.50709227013188,
      y: 27.401585924416455,
      points: [
        {
          x: 2.1319120586275817,
          y: 33.8885187652676
        },
        {
          x: 28.952200318799054,
          y: 20.041968483283227
        },
        {
          x: 48.83880470531265,
          y: 32.18054518673957
        },
        {
          x: 49.1672218520986,
          y: 43.30446369087275
        },
        {
          x: 64.59312766086236,
          y: 41.607312201125886
        },
        {
          x: 69.0650677326227,
          y: 44.192760381967574
        },
        {
          x: 72.08527648234511,
          y: 44.59249389296025
        },
        {
          x: 67.68820786142572,
          y: 48.367754830113256
        },
        {
          x: 66.7999111703309,
          y: 58.58316677770375
        },
        {
          x: 48.32226952644216,
          y: 73.5033594963782
        },
        {
          x: 47.9348681422893,
          y: 65.10966283973285
        },
        {
          x: 47.1241394625805,
          y: 64.2238507661559
        },
        {
          x: 42.51124876414923,
          y: 67.69233873408527
        },
        {
          x: 41.994713585278745,
          y: 67.17580355521478
        },
        {
          x: 40.96164322753778,
          y: 67.95060632352052
        },
        {
          x: 41.21991081697302,
          y: 68.85454288654385
        },
        {
          x: 40.4451080486673,
          y: 69.37107806541434
        },
        {
          x: 41.0907770222554,
          y: 76.34430298016585
        },
        {
          x: 11.131736647767397,
          y: 49.22620608946551
        },
        {
          x: 10.227800084744052,
          y: 49.22620608946551
        },
        {
          x: 6.482920037933053,
          y: 45.997861221524985
        },
        {
          x: 6.484565844992228,
          y: 44.28159005107706
        },
        {
          x: 4.930046635576282,
          y: 42.94914501443482
        }
      ],
      shape: "circle",
      style: {
        width: 2,
        height: 2,
        colors: {
          onColor: "#acb7c8",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        edgeBlur: 0,
        gradientRadius: 30,
        rotation: 0
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    },
    {
      id: "c6c1c9dd-b8ef-4662-9167-0046605940d5",
      entityId: "light.bedroom_light",
      label: "Bedroom",
      type: "light",
      x: 40.57323298561372,
      y: 24.948043824781568,
      points: [
        {
          x: 29.946702198534307,
          y: 19.52031978680879
        },
        {
          x: 49.87187506305361,
          y: 9.194729727003088
        },
        {
          x: 69.24194427069672,
          y: 19.008898125542263
        },
        {
          x: 56.199431004217026,
          y: 27.144327192752364
        },
        {
          x: 55.812029620064166,
          y: 37.86243215431489
        },
        {
          x: 67.43407114465003,
          y: 43.286051532454955
        },
        {
          x: 62.785254534815685,
          y: 46.38526260567785
        },
        {
          x: 51.42148059966506,
          y: 40.96164322753778
        },
        {
          x: 51.42148059966506,
          y: 30.501805855410502
        },
        {
          x: 50.56628914057295,
          y: 29.913391072618257
        },
        {
          x: 48.83411059293804,
          y: 31.045969353764157
        }
      ],
      shape: "circle",
      style: {
        width: 2,
        height: 2,
        colors: {
          onColor: "#f4f2be",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        edgeBlur: 0,
        gradientRadius: 30,
        rotation: 0
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    },
    {
      id: "73318cfd-7624-4adc-9fe4-d8fee9e3e61c",
      entityId: "light.bathroom",
      label: "Bathroom",
      type: "light",
      x: 74.71685542971363,
      y: 23.084610259826793,
      points: [
        {
          x: 70.4197201865423,
          y: 19.38707528314457
        },
        {
          x: 80.4796802131912,
          y: 24.51698867421719
        },
        {
          x: 70.28647568287808,
          y: 32.04530313124583
        },
        {
          x: 66.15589606928715,
          y: 29.71352431712192
        },
        {
          x: 65.28980679546969,
          y: 30.179880079946702
        },
        {
          x: 64.35709526982012,
          y: 40.57295136575616
        },
        {
          x: 58.42771485676216,
          y: 46.96868754163891
        },
        {
          x: 52.298467688207865,
          y: 43.104596935376414
        },
        {
          x: 59.360426382411724,
          y: 37.9746835443038
        },
        {
          x: 60.066622251832115,
          y: 27.31512325116589
        },
        {
          x: 60.972684876748836,
          y: 26.782145236508992
        },
        {
          x: 59.85343104596935,
          y: 26.222518321119253
        }
      ],
      shape: "circle",
      style: {
        width: 2,
        height: 2,
        colors: {
          onColor: "#e6e4db",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        edgeBlur: 0,
        gradientRadius: 25,
        rotation: 0
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    },
    {
      id: "cd4094a9-b37d-4194-bc6a-3006603dc000",
      entityId: "light.kitchen",
      label: "Kitchen",
      type: "light",
      x: 76.58227848101265,
      y: 30.346435709527,
      points: [
        {
          x: 81.74550299800133,
          y: 24.98334443704197
        },
        {
          x: 98.00133244503664,
          y: 33.11125916055963
        },
        {
          x: 95.80279813457695,
          y: 42.704863424383745
        },
        {
          x: 80.4796802131912,
          y: 56.628914057295134
        },
        {
          x: 81.545636242505,
          y: 50.20652898067954
        },
        {
          x: 71.92538307794804,
          y: 44.50366422385076
        },
        {
          x: 71.17921385742838,
          y: 45.32978014656896
        },
        {
          x: 67.68820786142572,
          y: 48.16788807461692
        },
        {
          x: 66.4890073284477,
          y: 49.233844103930714
        },
        {
          x: 62.70486342438374,
          y: 46.8487674883411
        },
        {
          x: 62.22518321119254,
          y: 53.297801465689545
        },
        {
          x: 52.16522318454364,
          y: 45.36975349766822
        },
        {
          x: 67.50166555629579,
          y: 44.21052631578947
        },
        {
          x: 68.95403064623584,
          y: 44.303797468354425
        },
        {
          x: 70.48634243837442,
          y: 33.04463690872751
        },
        {
          x: 75.88274483677549,
          y: 29.047301798800802
        }
      ],
      shape: "circle",
      style: {
        width: 2,
        height: 2,
        colors: {
          onColor: "#e6e4db",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        edgeBlur: 0,
        gradientRadius: 25,
        rotation: 0
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    },
    {
      id: "929f9c59-c333-4d3d-9fcd-7be56dc8000f",
      entityId: "light.balcony",
      label: "Balcony",
      type: "light",
      x: 76.18254497002012,
      y: 49.66688874083943,
      points: [
        {
          x: 72.3251165889407,
          y: 45.836109260493004
        },
        {
          x: 80.74616922051966,
          y: 50.8327781479014
        },
        {
          x: 79.68021319120587,
          y: 57.295136575616255
        },
        {
          x: 78.1479013990673,
          y: 58.89407061958695
        },
        {
          x: 78.77415056628914,
          y: 59.56029313790806
        },
        {
          x: 52.71152564956696,
          y: 82.87808127914722
        },
        {
          x: 45.16988674217188,
          y: 76.34910059960026
        },
        {
          x: 44.57028647568288,
          y: 69.55363091272486
        },
        {
          x: 43.97068620919387,
          y: 68.55429713524317
        },
        {
          x: 48.23451032644903,
          y: 65.22318454363759
        },
        {
          x: 48.367754830113256,
          y: 73.81745502998001
        },
        {
          x: 38.70752831445703,
          y: 70.4197201865423
        },
        {
          x: 57.22851432378414,
          y: 56.895403064623586
        },
        {
          x: 67.48834110592938,
          y: 58.96069287141905
        },
        {
          x: 68.68754163890739,
          y: 48.900732844770154
        }
      ],
      shape: "circle",
      style: {
        width: 2,
        height: 2,
        colors: {
          onColor: "#b2962a",
          offColor: "#94a3b8"
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        edgeBlur: 0,
        gradientRadius: 30,
        rotation: 0
      },
      labelConfig: {
        show: !0,
        text: "New Entity",
        offsetX: 0,
        offsetY: 10,
        color: "#ffffff",
        fontSize: 14
      }
    }
  ]
}, Pn = /* @__PURE__ */ rC("floorplan", () => {
  const A = gA({
    ...li,
    id: li.id,
    entities: li.entities || []
  }), e = gA(null), t = gA({}), o = FA(() => A.value.entities), n = FA(
    () => A.value.entities.find((k) => k.id === e.value)
  );
  function i(k) {
    A.value.imageBase64 = k;
  }
  function r(k = "light", p = 50, B = 50) {
    const J = Kl(), C = {
      id: J,
      entityId: `entity.${J.substring(0, 4)}`,
      label: "New Entity",
      type: k,
      x: p,
      y: B,
      points: [],
      shape: "circle",
      style: {
        width: 5,
        // % relative to container width
        height: 5,
        colors: k === "camera" ? {
          idleColor: "#6b7280",
          recordingColor: "#ef4444",
          streamingColor: "#3b82f6"
        } : {
          onColor: "#facc15",
          // yellow-400
          offColor: "#94a3b8"
          // slate-400
        },
        onOpacity: 0.8,
        offOpacity: 0.3,
        gradientRadius: 30,
        edgeBlur: 0,
        rotation: 0
      },
      labelConfig: {
        show: !0,
        offsetX: 0,
        offsetY: 10,
        // px or %? Let's assume px for offset relative to center or bottom
        color: "#ffffff"
      }
    };
    A.value.entities.push(C), e.value = J, t.value[C.entityId] = { state: "off", brightness: 255 };
  }
  function s(k) {
    const p = A.value.entities.findIndex((B) => B.id === k);
    p !== -1 && (A.value.entities.splice(p, 1), e.value === k && (e.value = null));
  }
  function l(k, p) {
    const B = A.value.entities.find((J) => J.id === k);
    B && Object.assign(B, p);
  }
  function a(k, p) {
    const B = t.value[k] || { state: "off", brightness: 255 };
    let J = B;
    p === "camera" ? (B.state === "idle" ? J = { ...B, state: "streaming" } : B.state === "streaming" ? J = { ...B, state: "recording" } : J = { ...B, state: "idle" }, J.shouldLightUp = ["streaming", "recording"].includes(J.state)) : (J = { ...B, state: B.state === "off" ? "on" : "off" }, J.shouldLightUp = J.state === "on"), t.value[k] = J;
  }
  function S(k, p) {
    const B = t.value[k] || { state: "off", brightness: 255 };
    t.value[k] = { ...B, state: p };
  }
  function u(k) {
    A.value = k, t.value = {}, k.entities.forEach((p) => {
      t.value[p.entityId] = { state: "off", brightness: 255 };
    });
  }
  function f() {
    A.value = {
      id: Kl(),
      name: "New Floorplan",
      imageBase64: "",
      entities: []
    }, e.value = null, t.value = {};
  }
  return {
    config: A,
    entities: o,
    selectedEntityId: e,
    selectedEntity: n,
    entityStates: t,
    setBaseImage: i,
    addEntity: r,
    removeEntity: s,
    updateEntity: l,
    toggleEntityState: a,
    setEntityState: S,
    loadConfig: u,
    clearConfig: f
  };
}), cC = /* @__PURE__ */ Ct({
  __name: "EntityOverlay",
  props: {
    entity: {}
  },
  setup(A) {
    const e = A, t = Pn(), o = FA(() => t.selectedEntityId === e.entity.id), n = gA(!1), i = gA({ x: 0, y: 0 }), r = gA(!1), s = gA({ x: 0, y: 0 });
    function l(m) {
      m.stopPropagation(), t.selectedEntityId = e.entity.id, n.value = !0, i.value = { x: m.clientX, y: m.clientY }, window.addEventListener("mousemove", a), window.addEventListener("mouseup", S);
    }
    function a(m) {
      if (!n.value) return;
      const y = m.clientX - i.value.x, L = m.clientY - i.value.y, O = document.querySelector(".image-wrapper");
      if (!O) return;
      const D = O.getBoundingClientRect(), j = D.width, rA = D.height, hA = y / j * 100, pA = L / rA * 100;
      t.updateEntity(e.entity.id, {
        x: e.entity.x + hA,
        y: e.entity.y + pA
      }), i.value = { x: m.clientX, y: m.clientY };
    }
    function S() {
      n.value = !1, window.removeEventListener("mousemove", a), window.removeEventListener("mouseup", S);
    }
    function u(m) {
      m.stopPropagation(), t.selectedEntityId = e.entity.id;
      const y = m.touches[0];
      y && (n.value = !0, i.value = { x: y.clientX, y: y.clientY }, window.addEventListener("touchmove", f, { passive: !1 }), window.addEventListener("touchend", k));
    }
    function f(m) {
      if (!n.value) return;
      m.preventDefault();
      const y = m.touches[0];
      if (!y) return;
      const L = y.clientX - i.value.x, O = y.clientY - i.value.y, D = document.querySelector(".image-wrapper");
      if (!D) return;
      const j = D.getBoundingClientRect(), rA = j.width, hA = j.height, pA = L / rA * 100, sA = O / hA * 100;
      t.updateEntity(e.entity.id, {
        x: e.entity.x + pA,
        y: e.entity.y + sA
      }), i.value = { x: y.clientX, y: y.clientY };
    }
    function k() {
      n.value = !1, window.removeEventListener("touchmove", f), window.removeEventListener("touchend", k);
    }
    const p = gA(null);
    function B(m) {
      m.stopPropagation(), t.selectedEntityId = e.entity.id, r.value = !0, s.value = { x: m.clientX, y: m.clientY }, window.addEventListener("mousemove", J), window.addEventListener("mouseup", C);
    }
    function J(m) {
      if (!r.value || !p.value) return;
      const y = m.clientX - s.value.x, L = m.clientY - s.value.y, O = p.value.getBoundingClientRect(), D = O.width, j = O.height;
      if (D === 0 || j === 0) return;
      const rA = y / D * 100, hA = L / j * 100, pA = e.entity.labelConfig;
      t.updateEntity(e.entity.id, {
        labelConfig: {
          ...pA,
          offsetX: (pA.offsetX || 0) + rA,
          offsetY: (pA.offsetY || 0) + hA
        }
      }), s.value = { x: m.clientX, y: m.clientY };
    }
    function C() {
      r.value = !1, window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", C);
    }
    function h(m) {
      m.stopPropagation(), t.selectedEntityId = e.entity.id;
      const y = m.touches[0];
      y && (r.value = !0, s.value = { x: y.clientX, y: y.clientY }, window.addEventListener("touchmove", I, { passive: !1 }), window.addEventListener("touchend", g));
    }
    function I(m) {
      if (!r.value || !p.value) return;
      m.preventDefault();
      const y = m.touches[0];
      if (!y) return;
      const L = y.clientX - s.value.x, O = y.clientY - s.value.y, D = p.value.getBoundingClientRect(), j = D.width, rA = D.height;
      if (j === 0 || rA === 0) return;
      const hA = L / j * 100, pA = O / rA * 100, sA = e.entity.labelConfig;
      t.updateEntity(e.entity.id, {
        labelConfig: {
          ...sA,
          offsetX: (sA.offsetX || 0) + hA,
          offsetY: (sA.offsetY || 0) + pA
        }
      }), s.value = { x: y.clientX, y: y.clientY };
    }
    function g() {
      r.value = !1, window.removeEventListener("touchmove", I), window.removeEventListener("touchend", g);
    }
    const Q = FA(() => {
      const { shape: m, style: y, x: L, y: O } = e.entity;
      let D = "#94a3b8";
      const j = y.colors;
      return j && "offColor" in j && (D = j.offColor), {
        left: `${L}%`,
        top: `${O}%`,
        width: `${y.width}%`,
        height: `${y.height}%`,
        backgroundColor: D,
        opacity: y.offOpacity,
        transform: `translate(-50%, -50%) rotate(${y.rotation}deg)`,
        position: "absolute",
        border: o.value ? "2px solid var(--color-primary)" : "2px solid transparent",
        borderRadius: m === "circle" ? "50%" : "4px",
        // default for square/rect
        cursor: "move",
        zIndex: o.value ? 10 : 1
      };
    }), R = FA(() => {
      const { offsetX: m, offsetY: y, color: L } = e.entity.labelConfig || {};
      return {
        transform: `translate(-50%, -50%) translate(${m || 0}%, ${y || 0}%)`,
        color: L || "#ffffff"
      };
    });
    return (m, y) => (AA(), eA("div", {
      ref: "overlayRef",
      class: "entity-overlay",
      style: xe(Q.value),
      onMousedown: l,
      onTouchstart: u,
      onClick: y[1] || (y[1] = Ve(() => {
      }, ["stop"]))
    }, [
      A.entity.labelConfig.show ? (AA(), eA("div", {
        key: 0,
        ref_key: "labelRef",
        ref: p,
        class: "entity-label",
        style: xe(R.value),
        onMousedown: B,
        onTouchstart: h,
        onClick: y[0] || (y[0] = Ve(() => {
        }, ["stop"]))
      }, te(A.entity.label), 37)) : ce("", !0)
    ], 36));
  }
}), kC = /* @__PURE__ */ Gt(cC, [["__scopeId", "data-v-356fb32a"]]), fC = {
  key: 1,
  class: "canvas-container"
}, gC = { class: "zoom-controls" }, dC = { class: "zoom-level" }, pC = { class: "scroll-frame" }, CC = ["src"], EC = {
  class: "overlay-layer",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, hC = ["id", "cx", "cy", "r"], QC = ["stop-color", "stop-opacity"], BC = ["stop-color"], IC = ["points", "fill", "stroke"], mC = ["cx", "cy", "onMousedown", "onTouchstart"], yC = /* @__PURE__ */ Ct({
  __name: "CanvasArea",
  setup(A, { expose: e }) {
    const t = Pn(), o = gA(null), n = gA(!1), i = gA(1), r = FA(() => !!t.config.imageBase64);
    e({
      isDrawing: n
    });
    function s() {
      i.value = Math.min(i.value + 0.25, 5);
    }
    function l() {
      i.value = Math.max(i.value - 0.25, 0.5);
    }
    function a(R) {
      if (n.value && t.selectedEntityId) {
        const m = document.querySelector(".image-wrapper");
        if (!m) return;
        const y = m.getBoundingClientRect(), L = (R.clientX - y.left) / y.width * 100, O = (R.clientY - y.top) / y.height * 100, D = t.selectedEntity;
        if (D) {
          const j = [...D.points || [], { x: L, y: O }];
          t.updateEntity(D.id, { points: j });
        }
      } else
        t.selectedEntityId = null;
    }
    function S(R) {
      const m = R.target;
      if (m.files && m.files[0]) {
        const y = new FileReader();
        y.onload = (L) => {
          L.target?.result && t.setBaseImage(L.target.result);
        }, y.readAsDataURL(m.files[0]);
      }
    }
    function u() {
      o.value?.click();
    }
    function f(R) {
      if (R.preventDefault(), R.dataTransfer?.files && R.dataTransfer.files[0]) {
        const m = new FileReader();
        m.onload = (y) => {
          y.target?.result && t.setBaseImage(y.target.result);
        }, m.readAsDataURL(R.dataTransfer.files[0]);
      }
    }
    function k(R) {
      R.preventDefault();
    }
    const p = gA(null);
    function B(R) {
      return R ? R.map((m) => `${m.x} ${m.y}`).join(",") : "";
    }
    function J(R, m) {
      m.stopPropagation(), p.value = R, window.addEventListener("mousemove", C), window.addEventListener("mouseup", h);
    }
    function C(R) {
      if (p.value === null || !t.selectedEntity) return;
      const m = document.querySelector(".image-wrapper");
      if (!m) return;
      const y = m.getBoundingClientRect(), L = (R.clientX - y.left) / y.width * 100, O = (R.clientY - y.top) / y.height * 100, D = [...t.selectedEntity.points || []];
      D[p.value] && (D[p.value] = { x: L, y: O }, t.updateEntity(t.selectedEntity.id, { points: D }));
    }
    function h() {
      p.value = null, window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", h);
    }
    function I(R, m) {
      m.stopPropagation(), p.value = R, window.addEventListener("touchmove", g, { passive: !1 }), window.addEventListener("touchend", Q);
    }
    function g(R) {
      if (p.value === null || !t.selectedEntity) return;
      R.preventDefault();
      const m = document.querySelector(".image-wrapper");
      if (!m) return;
      const y = R.touches[0];
      if (!y) return;
      const L = m.getBoundingClientRect(), O = (y.clientX - L.left) / L.width * 100, D = (y.clientY - L.top) / L.height * 100, j = [...t.selectedEntity.points || []];
      j[p.value] && (j[p.value] = { x: O, y: D }, t.updateEntity(t.selectedEntity.id, { points: j }));
    }
    function Q() {
      p.value = null, window.removeEventListener("touchmove", g), window.removeEventListener("touchend", Q);
    }
    return (R, m) => (AA(), eA("div", {
      class: "canvas-area",
      onClick: Ve(a, ["self"]),
      onDrop: Ve(f, ["prevent"]),
      onDragover: Ve(k, ["prevent"])
    }, [
      r.value ? (AA(), eA("div", fC, [
        b("div", gC, [
          b("button", {
            class: "zoom-btn",
            onClick: l
          }, "-"),
          b("span", dC, te(Math.round(i.value * 100)) + "%", 1),
          b("button", {
            class: "zoom-btn",
            onClick: s
          }, "+")
        ]),
        b("div", pC, [
          b("div", {
            class: "image-wrapper",
            onClick: a,
            style: xe({ transform: `scale(${i.value})`, transformOrigin: "top left" })
          }, [
            b("img", {
              src: HA(t).config.imageBase64,
              alt: "Floorplan Base",
              draggable: "false"
            }, null, 8, CC),
            (AA(), eA("svg", EC, [
              b("defs", null, [
                (AA(!0), eA(QA, null, Je(HA(t).entities, (y) => (AA(), eA("radialGradient", {
                  key: "grad-" + y.id,
                  id: "grad-editor-" + y.id,
                  gradientUnits: "userSpaceOnUse",
                  cx: y.x,
                  cy: y.y,
                  r: y.style.gradientRadius
                }, [
                  b("stop", {
                    offset: "0%",
                    "stop-color": y.style.colors.onColor || "#facc15",
                    "stop-opacity": y.style.onOpacity
                  }, null, 8, QC),
                  b("stop", {
                    offset: "100%",
                    "stop-color": y.style.colors.onColor || "#facc15",
                    "stop-opacity": "0"
                  }, null, 8, BC)
                ], 8, hC))), 128))
              ]),
              (AA(!0), eA(QA, null, Je(HA(t).entities, (y) => (AA(), eA("polygon", {
                key: "poly-" + y.id,
                points: B(y.points),
                fill: `url(#grad-editor-${y.id})`,
                stroke: HA(t).selectedEntityId === y.id ? "var(--color-primary)" : "none",
                "stroke-width": "0.5",
                style: { "pointer-events": "none" }
              }, null, 8, IC))), 128)),
              (AA(!0), eA(QA, null, Je(HA(t).entities, (y) => (AA(), eA(QA, null, [
                HA(t).selectedEntityId === y.id ? (AA(!0), eA(QA, { key: 0 }, Je(y.points, (L, O) => (AA(), eA("circle", {
                  key: "point-" + y.id + "-" + O,
                  cx: L.x,
                  cy: L.y,
                  r: "0.4",
                  fill: "var(--color-primary)",
                  stroke: "white",
                  "stroke-width": "0.1",
                  style: { cursor: "grab", "pointer-events": "auto" },
                  onMousedown: (D) => J(O, D),
                  onTouchstart: (D) => I(O, D),
                  onClick: m[0] || (m[0] = Ve(() => {
                  }, ["stop"]))
                }, null, 40, mC))), 128)) : ce("", !0)
              ], 64))), 256))
            ])),
            (AA(!0), eA(QA, null, Je(HA(t).entities, (y) => (AA(), ra(kC, {
              key: y.id,
              entity: y
            }, null, 8, ["entity"]))), 128))
          ], 4)
        ])
      ])) : (AA(), eA("div", {
        key: 0,
        class: "upload-zone",
        onDrop: f,
        onDragover: k,
        onClick: u
      }, [
        m[1] || (m[1] = b("div", { class: "upload-content" }, [
          b("div", { class: "icon" }, "🖼️"),
          b("h3", null, "Upload Floorplan"),
          b("p", null, "Drag & drop an image here, or click to select")
        ], -1)),
        b("input", {
          ref_key: "fileInput",
          ref: o,
          type: "file",
          accept: "image/*",
          class: "hidden-input",
          onChange: S
        }, null, 544)
      ], 32))
    ], 32));
  }
}), vC = /* @__PURE__ */ Gt(yC, [["__scopeId", "data-v-f0ddfdbd"]]);
function cS(A) {
  return typeof A > "u" || A === null;
}
function bC(A) {
  return typeof A == "object" && A !== null;
}
function JC(A) {
  return Array.isArray(A) ? A : cS(A) ? [] : [A];
}
function xC(A, e) {
  var t, o, n, i;
  if (e)
    for (i = Object.keys(e), t = 0, o = i.length; t < o; t += 1)
      n = i[t], A[n] = e[n];
  return A;
}
function DC(A, e) {
  var t = "", o;
  for (o = 0; o < e; o += 1)
    t += A;
  return t;
}
function wC(A) {
  return A === 0 && Number.NEGATIVE_INFINITY === 1 / A;
}
var UC = cS, FC = bC, KC = JC, OC = DC, NC = wC, TC = xC, JA = {
  isNothing: UC,
  isObject: FC,
  toArray: KC,
  repeat: OC,
  isNegativeZero: NC,
  extend: TC
};
function kS(A, e) {
  var t = "", o = A.reason || "(unknown reason)";
  return A.mark ? (A.mark.name && (t += 'in "' + A.mark.name + '" '), t += "(" + (A.mark.line + 1) + ":" + (A.mark.column + 1) + ")", !e && A.mark.snippet && (t += `

` + A.mark.snippet), o + " " + t) : o;
}
function bo(A, e) {
  Error.call(this), this.name = "YAMLException", this.reason = A, this.mark = e, this.message = kS(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
bo.prototype = Object.create(Error.prototype);
bo.prototype.constructor = bo;
bo.prototype.toString = function(e) {
  return this.name + ": " + kS(this, e);
};
var jA = bo;
function ui(A, e, t, o, n) {
  var i = "", r = "", s = Math.floor(n / 2) - 1;
  return o - e > s && (i = " ... ", e = o - s + i.length), t - o > s && (r = " ...", t = o + s - r.length), {
    str: i + A.slice(e, t).replace(/\t/g, "→") + r,
    pos: o - e + i.length
    // relative position
  };
}
function ai(A, e) {
  return JA.repeat(" ", e - A.length) + A;
}
function MC(A, e) {
  if (e = Object.create(e || null), !A.buffer) return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var t = /\r?\n|\r|\0/g, o = [0], n = [], i, r = -1; i = t.exec(A.buffer); )
    n.push(i.index), o.push(i.index + i[0].length), A.position <= i.index && r < 0 && (r = o.length - 2);
  r < 0 && (r = o.length - 1);
  var s = "", l, a, S = Math.min(A.line + e.linesAfter, n.length).toString().length, u = e.maxLength - (e.indent + S + 3);
  for (l = 1; l <= e.linesBefore && !(r - l < 0); l++)
    a = ui(
      A.buffer,
      o[r - l],
      n[r - l],
      A.position - (o[r] - o[r - l]),
      u
    ), s = JA.repeat(" ", e.indent) + ai((A.line - l + 1).toString(), S) + " | " + a.str + `
` + s;
  for (a = ui(A.buffer, o[r], n[r], A.position, u), s += JA.repeat(" ", e.indent) + ai((A.line + 1).toString(), S) + " | " + a.str + `
`, s += JA.repeat("-", e.indent + S + 3 + a.pos) + `^
`, l = 1; l <= e.linesAfter && !(r + l >= n.length); l++)
    a = ui(
      A.buffer,
      o[r + l],
      n[r + l],
      A.position - (o[r] - o[r + l]),
      u
    ), s += JA.repeat(" ", e.indent) + ai((A.line + l + 1).toString(), S) + " | " + a.str + `
`;
  return s.replace(/\n$/, "");
}
var RC = MC, VC = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], LC = [
  "scalar",
  "sequence",
  "mapping"
];
function HC(A) {
  var e = {};
  return A !== null && Object.keys(A).forEach(function(t) {
    A[t].forEach(function(o) {
      e[String(o)] = t;
    });
  }), e;
}
function PC(A, e) {
  if (e = e || {}, Object.keys(e).forEach(function(t) {
    if (VC.indexOf(t) === -1)
      throw new jA('Unknown option "' + t + '" is met in definition of "' + A + '" YAML type.');
  }), this.options = e, this.tag = A, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return !0;
  }, this.construct = e.construct || function(t) {
    return t;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = HC(e.styleAliases || null), LC.indexOf(this.kind) === -1)
    throw new jA('Unknown kind "' + this.kind + '" is specified for "' + A + '" YAML type.');
}
var KA = PC;
function Ol(A, e) {
  var t = [];
  return A[e].forEach(function(o) {
    var n = t.length;
    t.forEach(function(i, r) {
      i.tag === o.tag && i.kind === o.kind && i.multi === o.multi && (n = r);
    }), t[n] = o;
  }), t;
}
function YC() {
  var A = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, t;
  function o(n) {
    n.multi ? (A.multi[n.kind].push(n), A.multi.fallback.push(n)) : A[n.kind][n.tag] = A.fallback[n.tag] = n;
  }
  for (e = 0, t = arguments.length; e < t; e += 1)
    arguments[e].forEach(o);
  return A;
}
function Ti(A) {
  return this.extend(A);
}
Ti.prototype.extend = function(e) {
  var t = [], o = [];
  if (e instanceof KA)
    o.push(e);
  else if (Array.isArray(e))
    o = o.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (t = t.concat(e.implicit)), e.explicit && (o = o.concat(e.explicit));
  else
    throw new jA("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  t.forEach(function(i) {
    if (!(i instanceof KA))
      throw new jA("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new jA("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new jA("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), o.forEach(function(i) {
    if (!(i instanceof KA))
      throw new jA("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(Ti.prototype);
  return n.implicit = (this.implicit || []).concat(t), n.explicit = (this.explicit || []).concat(o), n.compiledImplicit = Ol(n, "implicit"), n.compiledExplicit = Ol(n, "explicit"), n.compiledTypeMap = YC(n.compiledImplicit, n.compiledExplicit), n;
};
var fS = Ti, gS = new KA("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(A) {
    return A !== null ? A : "";
  }
}), dS = new KA("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(A) {
    return A !== null ? A : [];
  }
}), pS = new KA("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(A) {
    return A !== null ? A : {};
  }
}), CS = new fS({
  explicit: [
    gS,
    dS,
    pS
  ]
});
function jC(A) {
  if (A === null) return !0;
  var e = A.length;
  return e === 1 && A === "~" || e === 4 && (A === "null" || A === "Null" || A === "NULL");
}
function GC() {
  return null;
}
function WC(A) {
  return A === null;
}
var ES = new KA("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: jC,
  construct: GC,
  predicate: WC,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function _C(A) {
  if (A === null) return !1;
  var e = A.length;
  return e === 4 && (A === "true" || A === "True" || A === "TRUE") || e === 5 && (A === "false" || A === "False" || A === "FALSE");
}
function XC(A) {
  return A === "true" || A === "True" || A === "TRUE";
}
function qC(A) {
  return Object.prototype.toString.call(A) === "[object Boolean]";
}
var hS = new KA("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: _C,
  construct: XC,
  predicate: qC,
  represent: {
    lowercase: function(A) {
      return A ? "true" : "false";
    },
    uppercase: function(A) {
      return A ? "TRUE" : "FALSE";
    },
    camelcase: function(A) {
      return A ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function zC(A) {
  return 48 <= A && A <= 57 || 65 <= A && A <= 70 || 97 <= A && A <= 102;
}
function ZC(A) {
  return 48 <= A && A <= 55;
}
function $C(A) {
  return 48 <= A && A <= 57;
}
function AE(A) {
  if (A === null) return !1;
  var e = A.length, t = 0, o = !1, n;
  if (!e) return !1;
  if (n = A[t], (n === "-" || n === "+") && (n = A[++t]), n === "0") {
    if (t + 1 === e) return !0;
    if (n = A[++t], n === "b") {
      for (t++; t < e; t++)
        if (n = A[t], n !== "_") {
          if (n !== "0" && n !== "1") return !1;
          o = !0;
        }
      return o && n !== "_";
    }
    if (n === "x") {
      for (t++; t < e; t++)
        if (n = A[t], n !== "_") {
          if (!zC(A.charCodeAt(t))) return !1;
          o = !0;
        }
      return o && n !== "_";
    }
    if (n === "o") {
      for (t++; t < e; t++)
        if (n = A[t], n !== "_") {
          if (!ZC(A.charCodeAt(t))) return !1;
          o = !0;
        }
      return o && n !== "_";
    }
  }
  if (n === "_") return !1;
  for (; t < e; t++)
    if (n = A[t], n !== "_") {
      if (!$C(A.charCodeAt(t)))
        return !1;
      o = !0;
    }
  return !(!o || n === "_");
}
function eE(A) {
  var e = A, t = 1, o;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), o = e[0], (o === "-" || o === "+") && (o === "-" && (t = -1), e = e.slice(1), o = e[0]), e === "0") return 0;
  if (o === "0") {
    if (e[1] === "b") return t * parseInt(e.slice(2), 2);
    if (e[1] === "x") return t * parseInt(e.slice(2), 16);
    if (e[1] === "o") return t * parseInt(e.slice(2), 8);
  }
  return t * parseInt(e, 10);
}
function tE(A) {
  return Object.prototype.toString.call(A) === "[object Number]" && A % 1 === 0 && !JA.isNegativeZero(A);
}
var QS = new KA("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: AE,
  construct: eE,
  predicate: tE,
  represent: {
    binary: function(A) {
      return A >= 0 ? "0b" + A.toString(2) : "-0b" + A.toString(2).slice(1);
    },
    octal: function(A) {
      return A >= 0 ? "0o" + A.toString(8) : "-0o" + A.toString(8).slice(1);
    },
    decimal: function(A) {
      return A.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(A) {
      return A >= 0 ? "0x" + A.toString(16).toUpperCase() : "-0x" + A.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), oE = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function nE(A) {
  return !(A === null || !oE.test(A) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  A[A.length - 1] === "_");
}
function iE(A) {
  var e, t;
  return e = A.replace(/_/g, "").toLowerCase(), t = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? t === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : t * parseFloat(e, 10);
}
var rE = /^[-+]?[0-9]+e/;
function sE(A, e) {
  var t;
  if (isNaN(A))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === A)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === A)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (JA.isNegativeZero(A))
    return "-0.0";
  return t = A.toString(10), rE.test(t) ? t.replace("e", ".e") : t;
}
function lE(A) {
  return Object.prototype.toString.call(A) === "[object Number]" && (A % 1 !== 0 || JA.isNegativeZero(A));
}
var BS = new KA("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: nE,
  construct: iE,
  predicate: lE,
  represent: sE,
  defaultStyle: "lowercase"
}), IS = CS.extend({
  implicit: [
    ES,
    hS,
    QS,
    BS
  ]
}), mS = IS, yS = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), vS = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function uE(A) {
  return A === null ? !1 : yS.exec(A) !== null || vS.exec(A) !== null;
}
function aE(A) {
  var e, t, o, n, i, r, s, l = 0, a = null, S, u, f;
  if (e = yS.exec(A), e === null && (e = vS.exec(A)), e === null) throw new Error("Date resolve error");
  if (t = +e[1], o = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(t, o, n));
  if (i = +e[4], r = +e[5], s = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (S = +e[10], u = +(e[11] || 0), a = (S * 60 + u) * 6e4, e[9] === "-" && (a = -a)), f = new Date(Date.UTC(t, o, n, i, r, s, l)), a && f.setTime(f.getTime() - a), f;
}
function SE(A) {
  return A.toISOString();
}
var bS = new KA("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: uE,
  construct: aE,
  instanceOf: Date,
  represent: SE
});
function cE(A) {
  return A === "<<" || A === null;
}
var JS = new KA("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: cE
}), Qr = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function kE(A) {
  if (A === null) return !1;
  var e, t, o = 0, n = A.length, i = Qr;
  for (t = 0; t < n; t++)
    if (e = i.indexOf(A.charAt(t)), !(e > 64)) {
      if (e < 0) return !1;
      o += 6;
    }
  return o % 8 === 0;
}
function fE(A) {
  var e, t, o = A.replace(/[\r\n=]/g, ""), n = o.length, i = Qr, r = 0, s = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (s.push(r >> 16 & 255), s.push(r >> 8 & 255), s.push(r & 255)), r = r << 6 | i.indexOf(o.charAt(e));
  return t = n % 4 * 6, t === 0 ? (s.push(r >> 16 & 255), s.push(r >> 8 & 255), s.push(r & 255)) : t === 18 ? (s.push(r >> 10 & 255), s.push(r >> 2 & 255)) : t === 12 && s.push(r >> 4 & 255), new Uint8Array(s);
}
function gE(A) {
  var e = "", t = 0, o, n, i = A.length, r = Qr;
  for (o = 0; o < i; o++)
    o % 3 === 0 && o && (e += r[t >> 18 & 63], e += r[t >> 12 & 63], e += r[t >> 6 & 63], e += r[t & 63]), t = (t << 8) + A[o];
  return n = i % 3, n === 0 ? (e += r[t >> 18 & 63], e += r[t >> 12 & 63], e += r[t >> 6 & 63], e += r[t & 63]) : n === 2 ? (e += r[t >> 10 & 63], e += r[t >> 4 & 63], e += r[t << 2 & 63], e += r[64]) : n === 1 && (e += r[t >> 2 & 63], e += r[t << 4 & 63], e += r[64], e += r[64]), e;
}
function dE(A) {
  return Object.prototype.toString.call(A) === "[object Uint8Array]";
}
var xS = new KA("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: kE,
  construct: fE,
  predicate: dE,
  represent: gE
}), pE = Object.prototype.hasOwnProperty, CE = Object.prototype.toString;
function EE(A) {
  if (A === null) return !0;
  var e = [], t, o, n, i, r, s = A;
  for (t = 0, o = s.length; t < o; t += 1) {
    if (n = s[t], r = !1, CE.call(n) !== "[object Object]") return !1;
    for (i in n)
      if (pE.call(n, i))
        if (!r) r = !0;
        else return !1;
    if (!r) return !1;
    if (e.indexOf(i) === -1) e.push(i);
    else return !1;
  }
  return !0;
}
function hE(A) {
  return A !== null ? A : [];
}
var DS = new KA("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: EE,
  construct: hE
}), QE = Object.prototype.toString;
function BE(A) {
  if (A === null) return !0;
  var e, t, o, n, i, r = A;
  for (i = new Array(r.length), e = 0, t = r.length; e < t; e += 1) {
    if (o = r[e], QE.call(o) !== "[object Object]" || (n = Object.keys(o), n.length !== 1)) return !1;
    i[e] = [n[0], o[n[0]]];
  }
  return !0;
}
function IE(A) {
  if (A === null) return [];
  var e, t, o, n, i, r = A;
  for (i = new Array(r.length), e = 0, t = r.length; e < t; e += 1)
    o = r[e], n = Object.keys(o), i[e] = [n[0], o[n[0]]];
  return i;
}
var wS = new KA("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: BE,
  construct: IE
}), mE = Object.prototype.hasOwnProperty;
function yE(A) {
  if (A === null) return !0;
  var e, t = A;
  for (e in t)
    if (mE.call(t, e) && t[e] !== null)
      return !1;
  return !0;
}
function vE(A) {
  return A !== null ? A : {};
}
var US = new KA("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: yE,
  construct: vE
}), Br = mS.extend({
  implicit: [
    bS,
    JS
  ],
  explicit: [
    xS,
    DS,
    wS,
    US
  ]
}), tt = Object.prototype.hasOwnProperty, hn = 1, FS = 2, KS = 3, Qn = 4, Si = 1, bE = 2, Nl = 3, JE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, xE = /[\x85\u2028\u2029]/, DE = /[,\[\]\{\}]/, OS = /^(?:!|!!|![a-z\-]+!)$/i, NS = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Tl(A) {
  return Object.prototype.toString.call(A);
}
function Ue(A) {
  return A === 10 || A === 13;
}
function ft(A) {
  return A === 9 || A === 32;
}
function zA(A) {
  return A === 9 || A === 32 || A === 10 || A === 13;
}
function Dt(A) {
  return A === 44 || A === 91 || A === 93 || A === 123 || A === 125;
}
function wE(A) {
  var e;
  return 48 <= A && A <= 57 ? A - 48 : (e = A | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function UE(A) {
  return A === 120 ? 2 : A === 117 ? 4 : A === 85 ? 8 : 0;
}
function FE(A) {
  return 48 <= A && A <= 57 ? A - 48 : -1;
}
function Ml(A) {
  return A === 48 ? "\0" : A === 97 ? "\x07" : A === 98 ? "\b" : A === 116 || A === 9 ? "	" : A === 110 ? `
` : A === 118 ? "\v" : A === 102 ? "\f" : A === 114 ? "\r" : A === 101 ? "\x1B" : A === 32 ? " " : A === 34 ? '"' : A === 47 ? "/" : A === 92 ? "\\" : A === 78 ? "" : A === 95 ? " " : A === 76 ? "\u2028" : A === 80 ? "\u2029" : "";
}
function KE(A) {
  return A <= 65535 ? String.fromCharCode(A) : String.fromCharCode(
    (A - 65536 >> 10) + 55296,
    (A - 65536 & 1023) + 56320
  );
}
function TS(A, e, t) {
  e === "__proto__" ? Object.defineProperty(A, e, {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: t
  }) : A[e] = t;
}
var MS = new Array(256), RS = new Array(256);
for (var mt = 0; mt < 256; mt++)
  MS[mt] = Ml(mt) ? 1 : 0, RS[mt] = Ml(mt);
function OE(A, e) {
  this.input = A, this.filename = e.filename || null, this.schema = e.schema || Br, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = A.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function VS(A, e) {
  var t = {
    name: A.filename,
    buffer: A.input.slice(0, -1),
    // omit trailing \0
    position: A.position,
    line: A.line,
    column: A.position - A.lineStart
  };
  return t.snippet = RC(t), new jA(e, t);
}
function W(A, e) {
  throw VS(A, e);
}
function Bn(A, e) {
  A.onWarning && A.onWarning.call(null, VS(A, e));
}
var Rl = {
  YAML: function(e, t, o) {
    var n, i, r;
    e.version !== null && W(e, "duplication of %YAML directive"), o.length !== 1 && W(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(o[0]), n === null && W(e, "ill-formed argument of the YAML directive"), i = parseInt(n[1], 10), r = parseInt(n[2], 10), i !== 1 && W(e, "unacceptable YAML version of the document"), e.version = o[0], e.checkLineBreaks = r < 2, r !== 1 && r !== 2 && Bn(e, "unsupported YAML version of the document");
  },
  TAG: function(e, t, o) {
    var n, i;
    o.length !== 2 && W(e, "TAG directive accepts exactly two arguments"), n = o[0], i = o[1], OS.test(n) || W(e, "ill-formed tag handle (first argument) of the TAG directive"), tt.call(e.tagMap, n) && W(e, 'there is a previously declared suffix for "' + n + '" tag handle'), NS.test(i) || W(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      i = decodeURIComponent(i);
    } catch {
      W(e, "tag prefix is malformed: " + i);
    }
    e.tagMap[n] = i;
  }
};
function $e(A, e, t, o) {
  var n, i, r, s;
  if (e < t) {
    if (s = A.input.slice(e, t), o)
      for (n = 0, i = s.length; n < i; n += 1)
        r = s.charCodeAt(n), r === 9 || 32 <= r && r <= 1114111 || W(A, "expected valid JSON character");
    else JE.test(s) && W(A, "the stream contains non-printable characters");
    A.result += s;
  }
}
function Vl(A, e, t, o) {
  var n, i, r, s;
  for (JA.isObject(t) || W(A, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(t), r = 0, s = n.length; r < s; r += 1)
    i = n[r], tt.call(e, i) || (TS(e, i, t[i]), o[i] = !0);
}
function wt(A, e, t, o, n, i, r, s, l) {
  var a, S;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), a = 0, S = n.length; a < S; a += 1)
      Array.isArray(n[a]) && W(A, "nested arrays are not supported inside keys"), typeof n == "object" && Tl(n[a]) === "[object Object]" && (n[a] = "[object Object]");
  if (typeof n == "object" && Tl(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), o === "tag:yaml.org,2002:merge")
    if (Array.isArray(i))
      for (a = 0, S = i.length; a < S; a += 1)
        Vl(A, e, i[a], t);
    else
      Vl(A, e, i, t);
  else
    !A.json && !tt.call(t, n) && tt.call(e, n) && (A.line = r || A.line, A.lineStart = s || A.lineStart, A.position = l || A.position, W(A, "duplicated mapping key")), TS(e, n, i), delete t[n];
  return e;
}
function Ir(A) {
  var e;
  e = A.input.charCodeAt(A.position), e === 10 ? A.position++ : e === 13 ? (A.position++, A.input.charCodeAt(A.position) === 10 && A.position++) : W(A, "a line break is expected"), A.line += 1, A.lineStart = A.position, A.firstTabInLine = -1;
}
function BA(A, e, t) {
  for (var o = 0, n = A.input.charCodeAt(A.position); n !== 0; ) {
    for (; ft(n); )
      n === 9 && A.firstTabInLine === -1 && (A.firstTabInLine = A.position), n = A.input.charCodeAt(++A.position);
    if (e && n === 35)
      do
        n = A.input.charCodeAt(++A.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Ue(n))
      for (Ir(A), n = A.input.charCodeAt(A.position), o++, A.lineIndent = 0; n === 32; )
        A.lineIndent++, n = A.input.charCodeAt(++A.position);
    else
      break;
  }
  return t !== -1 && o !== 0 && A.lineIndent < t && Bn(A, "deficient indentation"), o;
}
function Yn(A) {
  var e = A.position, t;
  return t = A.input.charCodeAt(e), !!((t === 45 || t === 46) && t === A.input.charCodeAt(e + 1) && t === A.input.charCodeAt(e + 2) && (e += 3, t = A.input.charCodeAt(e), t === 0 || zA(t)));
}
function mr(A, e) {
  e === 1 ? A.result += " " : e > 1 && (A.result += JA.repeat(`
`, e - 1));
}
function NE(A, e, t) {
  var o, n, i, r, s, l, a, S, u = A.kind, f = A.result, k;
  if (k = A.input.charCodeAt(A.position), zA(k) || Dt(k) || k === 35 || k === 38 || k === 42 || k === 33 || k === 124 || k === 62 || k === 39 || k === 34 || k === 37 || k === 64 || k === 96 || (k === 63 || k === 45) && (n = A.input.charCodeAt(A.position + 1), zA(n) || t && Dt(n)))
    return !1;
  for (A.kind = "scalar", A.result = "", i = r = A.position, s = !1; k !== 0; ) {
    if (k === 58) {
      if (n = A.input.charCodeAt(A.position + 1), zA(n) || t && Dt(n))
        break;
    } else if (k === 35) {
      if (o = A.input.charCodeAt(A.position - 1), zA(o))
        break;
    } else {
      if (A.position === A.lineStart && Yn(A) || t && Dt(k))
        break;
      if (Ue(k))
        if (l = A.line, a = A.lineStart, S = A.lineIndent, BA(A, !1, -1), A.lineIndent >= e) {
          s = !0, k = A.input.charCodeAt(A.position);
          continue;
        } else {
          A.position = r, A.line = l, A.lineStart = a, A.lineIndent = S;
          break;
        }
    }
    s && ($e(A, i, r, !1), mr(A, A.line - l), i = r = A.position, s = !1), ft(k) || (r = A.position + 1), k = A.input.charCodeAt(++A.position);
  }
  return $e(A, i, r, !1), A.result ? !0 : (A.kind = u, A.result = f, !1);
}
function TE(A, e) {
  var t, o, n;
  if (t = A.input.charCodeAt(A.position), t !== 39)
    return !1;
  for (A.kind = "scalar", A.result = "", A.position++, o = n = A.position; (t = A.input.charCodeAt(A.position)) !== 0; )
    if (t === 39)
      if ($e(A, o, A.position, !0), t = A.input.charCodeAt(++A.position), t === 39)
        o = A.position, A.position++, n = A.position;
      else
        return !0;
    else Ue(t) ? ($e(A, o, n, !0), mr(A, BA(A, !1, e)), o = n = A.position) : A.position === A.lineStart && Yn(A) ? W(A, "unexpected end of the document within a single quoted scalar") : (A.position++, n = A.position);
  W(A, "unexpected end of the stream within a single quoted scalar");
}
function ME(A, e) {
  var t, o, n, i, r, s;
  if (s = A.input.charCodeAt(A.position), s !== 34)
    return !1;
  for (A.kind = "scalar", A.result = "", A.position++, t = o = A.position; (s = A.input.charCodeAt(A.position)) !== 0; ) {
    if (s === 34)
      return $e(A, t, A.position, !0), A.position++, !0;
    if (s === 92) {
      if ($e(A, t, A.position, !0), s = A.input.charCodeAt(++A.position), Ue(s))
        BA(A, !1, e);
      else if (s < 256 && MS[s])
        A.result += RS[s], A.position++;
      else if ((r = UE(s)) > 0) {
        for (n = r, i = 0; n > 0; n--)
          s = A.input.charCodeAt(++A.position), (r = wE(s)) >= 0 ? i = (i << 4) + r : W(A, "expected hexadecimal character");
        A.result += KE(i), A.position++;
      } else
        W(A, "unknown escape sequence");
      t = o = A.position;
    } else Ue(s) ? ($e(A, t, o, !0), mr(A, BA(A, !1, e)), t = o = A.position) : A.position === A.lineStart && Yn(A) ? W(A, "unexpected end of the document within a double quoted scalar") : (A.position++, o = A.position);
  }
  W(A, "unexpected end of the stream within a double quoted scalar");
}
function RE(A, e) {
  var t = !0, o, n, i, r = A.tag, s, l = A.anchor, a, S, u, f, k, p = /* @__PURE__ */ Object.create(null), B, J, C, h;
  if (h = A.input.charCodeAt(A.position), h === 91)
    S = 93, k = !1, s = [];
  else if (h === 123)
    S = 125, k = !0, s = {};
  else
    return !1;
  for (A.anchor !== null && (A.anchorMap[A.anchor] = s), h = A.input.charCodeAt(++A.position); h !== 0; ) {
    if (BA(A, !0, e), h = A.input.charCodeAt(A.position), h === S)
      return A.position++, A.tag = r, A.anchor = l, A.kind = k ? "mapping" : "sequence", A.result = s, !0;
    t ? h === 44 && W(A, "expected the node content, but found ','") : W(A, "missed comma between flow collection entries"), J = B = C = null, u = f = !1, h === 63 && (a = A.input.charCodeAt(A.position + 1), zA(a) && (u = f = !0, A.position++, BA(A, !0, e))), o = A.line, n = A.lineStart, i = A.position, Pt(A, e, hn, !1, !0), J = A.tag, B = A.result, BA(A, !0, e), h = A.input.charCodeAt(A.position), (f || A.line === o) && h === 58 && (u = !0, h = A.input.charCodeAt(++A.position), BA(A, !0, e), Pt(A, e, hn, !1, !0), C = A.result), k ? wt(A, s, p, J, B, C, o, n, i) : u ? s.push(wt(A, null, p, J, B, C, o, n, i)) : s.push(B), BA(A, !0, e), h = A.input.charCodeAt(A.position), h === 44 ? (t = !0, h = A.input.charCodeAt(++A.position)) : t = !1;
  }
  W(A, "unexpected end of the stream within a flow collection");
}
function VE(A, e) {
  var t, o, n = Si, i = !1, r = !1, s = e, l = 0, a = !1, S, u;
  if (u = A.input.charCodeAt(A.position), u === 124)
    o = !1;
  else if (u === 62)
    o = !0;
  else
    return !1;
  for (A.kind = "scalar", A.result = ""; u !== 0; )
    if (u = A.input.charCodeAt(++A.position), u === 43 || u === 45)
      Si === n ? n = u === 43 ? Nl : bE : W(A, "repeat of a chomping mode identifier");
    else if ((S = FE(u)) >= 0)
      S === 0 ? W(A, "bad explicit indentation width of a block scalar; it cannot be less than one") : r ? W(A, "repeat of an indentation width identifier") : (s = e + S - 1, r = !0);
    else
      break;
  if (ft(u)) {
    do
      u = A.input.charCodeAt(++A.position);
    while (ft(u));
    if (u === 35)
      do
        u = A.input.charCodeAt(++A.position);
      while (!Ue(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Ir(A), A.lineIndent = 0, u = A.input.charCodeAt(A.position); (!r || A.lineIndent < s) && u === 32; )
      A.lineIndent++, u = A.input.charCodeAt(++A.position);
    if (!r && A.lineIndent > s && (s = A.lineIndent), Ue(u)) {
      l++;
      continue;
    }
    if (A.lineIndent < s) {
      n === Nl ? A.result += JA.repeat(`
`, i ? 1 + l : l) : n === Si && i && (A.result += `
`);
      break;
    }
    for (o ? ft(u) ? (a = !0, A.result += JA.repeat(`
`, i ? 1 + l : l)) : a ? (a = !1, A.result += JA.repeat(`
`, l + 1)) : l === 0 ? i && (A.result += " ") : A.result += JA.repeat(`
`, l) : A.result += JA.repeat(`
`, i ? 1 + l : l), i = !0, r = !0, l = 0, t = A.position; !Ue(u) && u !== 0; )
      u = A.input.charCodeAt(++A.position);
    $e(A, t, A.position, !1);
  }
  return !0;
}
function Ll(A, e) {
  var t, o = A.tag, n = A.anchor, i = [], r, s = !1, l;
  if (A.firstTabInLine !== -1) return !1;
  for (A.anchor !== null && (A.anchorMap[A.anchor] = i), l = A.input.charCodeAt(A.position); l !== 0 && (A.firstTabInLine !== -1 && (A.position = A.firstTabInLine, W(A, "tab characters must not be used in indentation")), !(l !== 45 || (r = A.input.charCodeAt(A.position + 1), !zA(r)))); ) {
    if (s = !0, A.position++, BA(A, !0, -1) && A.lineIndent <= e) {
      i.push(null), l = A.input.charCodeAt(A.position);
      continue;
    }
    if (t = A.line, Pt(A, e, KS, !1, !0), i.push(A.result), BA(A, !0, -1), l = A.input.charCodeAt(A.position), (A.line === t || A.lineIndent > e) && l !== 0)
      W(A, "bad indentation of a sequence entry");
    else if (A.lineIndent < e)
      break;
  }
  return s ? (A.tag = o, A.anchor = n, A.kind = "sequence", A.result = i, !0) : !1;
}
function LE(A, e, t) {
  var o, n, i, r, s, l, a = A.tag, S = A.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), k = null, p = null, B = null, J = !1, C = !1, h;
  if (A.firstTabInLine !== -1) return !1;
  for (A.anchor !== null && (A.anchorMap[A.anchor] = u), h = A.input.charCodeAt(A.position); h !== 0; ) {
    if (!J && A.firstTabInLine !== -1 && (A.position = A.firstTabInLine, W(A, "tab characters must not be used in indentation")), o = A.input.charCodeAt(A.position + 1), i = A.line, (h === 63 || h === 58) && zA(o))
      h === 63 ? (J && (wt(A, u, f, k, p, null, r, s, l), k = p = B = null), C = !0, J = !0, n = !0) : J ? (J = !1, n = !0) : W(A, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), A.position += 1, h = o;
    else {
      if (r = A.line, s = A.lineStart, l = A.position, !Pt(A, t, FS, !1, !0))
        break;
      if (A.line === i) {
        for (h = A.input.charCodeAt(A.position); ft(h); )
          h = A.input.charCodeAt(++A.position);
        if (h === 58)
          h = A.input.charCodeAt(++A.position), zA(h) || W(A, "a whitespace character is expected after the key-value separator within a block mapping"), J && (wt(A, u, f, k, p, null, r, s, l), k = p = B = null), C = !0, J = !1, n = !1, k = A.tag, p = A.result;
        else if (C)
          W(A, "can not read an implicit mapping pair; a colon is missed");
        else
          return A.tag = a, A.anchor = S, !0;
      } else if (C)
        W(A, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return A.tag = a, A.anchor = S, !0;
    }
    if ((A.line === i || A.lineIndent > e) && (J && (r = A.line, s = A.lineStart, l = A.position), Pt(A, e, Qn, !0, n) && (J ? p = A.result : B = A.result), J || (wt(A, u, f, k, p, B, r, s, l), k = p = B = null), BA(A, !0, -1), h = A.input.charCodeAt(A.position)), (A.line === i || A.lineIndent > e) && h !== 0)
      W(A, "bad indentation of a mapping entry");
    else if (A.lineIndent < e)
      break;
  }
  return J && wt(A, u, f, k, p, null, r, s, l), C && (A.tag = a, A.anchor = S, A.kind = "mapping", A.result = u), C;
}
function HE(A) {
  var e, t = !1, o = !1, n, i, r;
  if (r = A.input.charCodeAt(A.position), r !== 33) return !1;
  if (A.tag !== null && W(A, "duplication of a tag property"), r = A.input.charCodeAt(++A.position), r === 60 ? (t = !0, r = A.input.charCodeAt(++A.position)) : r === 33 ? (o = !0, n = "!!", r = A.input.charCodeAt(++A.position)) : n = "!", e = A.position, t) {
    do
      r = A.input.charCodeAt(++A.position);
    while (r !== 0 && r !== 62);
    A.position < A.length ? (i = A.input.slice(e, A.position), r = A.input.charCodeAt(++A.position)) : W(A, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; r !== 0 && !zA(r); )
      r === 33 && (o ? W(A, "tag suffix cannot contain exclamation marks") : (n = A.input.slice(e - 1, A.position + 1), OS.test(n) || W(A, "named tag handle cannot contain such characters"), o = !0, e = A.position + 1)), r = A.input.charCodeAt(++A.position);
    i = A.input.slice(e, A.position), DE.test(i) && W(A, "tag suffix cannot contain flow indicator characters");
  }
  i && !NS.test(i) && W(A, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    W(A, "tag name is malformed: " + i);
  }
  return t ? A.tag = i : tt.call(A.tagMap, n) ? A.tag = A.tagMap[n] + i : n === "!" ? A.tag = "!" + i : n === "!!" ? A.tag = "tag:yaml.org,2002:" + i : W(A, 'undeclared tag handle "' + n + '"'), !0;
}
function PE(A) {
  var e, t;
  if (t = A.input.charCodeAt(A.position), t !== 38) return !1;
  for (A.anchor !== null && W(A, "duplication of an anchor property"), t = A.input.charCodeAt(++A.position), e = A.position; t !== 0 && !zA(t) && !Dt(t); )
    t = A.input.charCodeAt(++A.position);
  return A.position === e && W(A, "name of an anchor node must contain at least one character"), A.anchor = A.input.slice(e, A.position), !0;
}
function YE(A) {
  var e, t, o;
  if (o = A.input.charCodeAt(A.position), o !== 42) return !1;
  for (o = A.input.charCodeAt(++A.position), e = A.position; o !== 0 && !zA(o) && !Dt(o); )
    o = A.input.charCodeAt(++A.position);
  return A.position === e && W(A, "name of an alias node must contain at least one character"), t = A.input.slice(e, A.position), tt.call(A.anchorMap, t) || W(A, 'unidentified alias "' + t + '"'), A.result = A.anchorMap[t], BA(A, !0, -1), !0;
}
function Pt(A, e, t, o, n) {
  var i, r, s, l = 1, a = !1, S = !1, u, f, k, p, B, J;
  if (A.listener !== null && A.listener("open", A), A.tag = null, A.anchor = null, A.kind = null, A.result = null, i = r = s = Qn === t || KS === t, o && BA(A, !0, -1) && (a = !0, A.lineIndent > e ? l = 1 : A.lineIndent === e ? l = 0 : A.lineIndent < e && (l = -1)), l === 1)
    for (; HE(A) || PE(A); )
      BA(A, !0, -1) ? (a = !0, s = i, A.lineIndent > e ? l = 1 : A.lineIndent === e ? l = 0 : A.lineIndent < e && (l = -1)) : s = !1;
  if (s && (s = a || n), (l === 1 || Qn === t) && (hn === t || FS === t ? B = e : B = e + 1, J = A.position - A.lineStart, l === 1 ? s && (Ll(A, J) || LE(A, J, B)) || RE(A, B) ? S = !0 : (r && VE(A, B) || TE(A, B) || ME(A, B) ? S = !0 : YE(A) ? (S = !0, (A.tag !== null || A.anchor !== null) && W(A, "alias node should not have any properties")) : NE(A, B, hn === t) && (S = !0, A.tag === null && (A.tag = "?")), A.anchor !== null && (A.anchorMap[A.anchor] = A.result)) : l === 0 && (S = s && Ll(A, J))), A.tag === null)
    A.anchor !== null && (A.anchorMap[A.anchor] = A.result);
  else if (A.tag === "?") {
    for (A.result !== null && A.kind !== "scalar" && W(A, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + A.kind + '"'), u = 0, f = A.implicitTypes.length; u < f; u += 1)
      if (p = A.implicitTypes[u], p.resolve(A.result)) {
        A.result = p.construct(A.result), A.tag = p.tag, A.anchor !== null && (A.anchorMap[A.anchor] = A.result);
        break;
      }
  } else if (A.tag !== "!") {
    if (tt.call(A.typeMap[A.kind || "fallback"], A.tag))
      p = A.typeMap[A.kind || "fallback"][A.tag];
    else
      for (p = null, k = A.typeMap.multi[A.kind || "fallback"], u = 0, f = k.length; u < f; u += 1)
        if (A.tag.slice(0, k[u].tag.length) === k[u].tag) {
          p = k[u];
          break;
        }
    p || W(A, "unknown tag !<" + A.tag + ">"), A.result !== null && p.kind !== A.kind && W(A, "unacceptable node kind for !<" + A.tag + '> tag; it should be "' + p.kind + '", not "' + A.kind + '"'), p.resolve(A.result, A.tag) ? (A.result = p.construct(A.result, A.tag), A.anchor !== null && (A.anchorMap[A.anchor] = A.result)) : W(A, "cannot resolve a node with !<" + A.tag + "> explicit tag");
  }
  return A.listener !== null && A.listener("close", A), A.tag !== null || A.anchor !== null || S;
}
function jE(A) {
  var e = A.position, t, o, n, i = !1, r;
  for (A.version = null, A.checkLineBreaks = A.legacy, A.tagMap = /* @__PURE__ */ Object.create(null), A.anchorMap = /* @__PURE__ */ Object.create(null); (r = A.input.charCodeAt(A.position)) !== 0 && (BA(A, !0, -1), r = A.input.charCodeAt(A.position), !(A.lineIndent > 0 || r !== 37)); ) {
    for (i = !0, r = A.input.charCodeAt(++A.position), t = A.position; r !== 0 && !zA(r); )
      r = A.input.charCodeAt(++A.position);
    for (o = A.input.slice(t, A.position), n = [], o.length < 1 && W(A, "directive name must not be less than one character in length"); r !== 0; ) {
      for (; ft(r); )
        r = A.input.charCodeAt(++A.position);
      if (r === 35) {
        do
          r = A.input.charCodeAt(++A.position);
        while (r !== 0 && !Ue(r));
        break;
      }
      if (Ue(r)) break;
      for (t = A.position; r !== 0 && !zA(r); )
        r = A.input.charCodeAt(++A.position);
      n.push(A.input.slice(t, A.position));
    }
    r !== 0 && Ir(A), tt.call(Rl, o) ? Rl[o](A, o, n) : Bn(A, 'unknown document directive "' + o + '"');
  }
  if (BA(A, !0, -1), A.lineIndent === 0 && A.input.charCodeAt(A.position) === 45 && A.input.charCodeAt(A.position + 1) === 45 && A.input.charCodeAt(A.position + 2) === 45 ? (A.position += 3, BA(A, !0, -1)) : i && W(A, "directives end mark is expected"), Pt(A, A.lineIndent - 1, Qn, !1, !0), BA(A, !0, -1), A.checkLineBreaks && xE.test(A.input.slice(e, A.position)) && Bn(A, "non-ASCII line breaks are interpreted as content"), A.documents.push(A.result), A.position === A.lineStart && Yn(A)) {
    A.input.charCodeAt(A.position) === 46 && (A.position += 3, BA(A, !0, -1));
    return;
  }
  if (A.position < A.length - 1)
    W(A, "end of the stream or a document separator is expected");
  else
    return;
}
function LS(A, e) {
  A = String(A), e = e || {}, A.length !== 0 && (A.charCodeAt(A.length - 1) !== 10 && A.charCodeAt(A.length - 1) !== 13 && (A += `
`), A.charCodeAt(0) === 65279 && (A = A.slice(1)));
  var t = new OE(A, e), o = A.indexOf("\0");
  for (o !== -1 && (t.position = o, W(t, "null byte is not allowed in input")), t.input += "\0"; t.input.charCodeAt(t.position) === 32; )
    t.lineIndent += 1, t.position += 1;
  for (; t.position < t.length - 1; )
    jE(t);
  return t.documents;
}
function GE(A, e, t) {
  e !== null && typeof e == "object" && typeof t > "u" && (t = e, e = null);
  var o = LS(A, t);
  if (typeof e != "function")
    return o;
  for (var n = 0, i = o.length; n < i; n += 1)
    e(o[n]);
}
function WE(A, e) {
  var t = LS(A, e);
  if (t.length !== 0) {
    if (t.length === 1)
      return t[0];
    throw new jA("expected a single document in the stream, but found more");
  }
}
var _E = GE, XE = WE, HS = {
  loadAll: _E,
  load: XE
}, PS = Object.prototype.toString, YS = Object.prototype.hasOwnProperty, yr = 65279, qE = 9, Jo = 10, zE = 13, ZE = 32, $E = 33, Ah = 34, Mi = 35, eh = 37, th = 38, oh = 39, nh = 42, jS = 44, ih = 45, In = 58, rh = 61, sh = 62, lh = 63, uh = 64, GS = 91, WS = 93, ah = 96, _S = 123, Sh = 124, XS = 125, RA = {};
RA[0] = "\\0";
RA[7] = "\\a";
RA[8] = "\\b";
RA[9] = "\\t";
RA[10] = "\\n";
RA[11] = "\\v";
RA[12] = "\\f";
RA[13] = "\\r";
RA[27] = "\\e";
RA[34] = '\\"';
RA[92] = "\\\\";
RA[133] = "\\N";
RA[160] = "\\_";
RA[8232] = "\\L";
RA[8233] = "\\P";
var ch = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], kh = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function fh(A, e) {
  var t, o, n, i, r, s, l;
  if (e === null) return {};
  for (t = {}, o = Object.keys(e), n = 0, i = o.length; n < i; n += 1)
    r = o[n], s = String(e[r]), r.slice(0, 2) === "!!" && (r = "tag:yaml.org,2002:" + r.slice(2)), l = A.compiledTypeMap.fallback[r], l && YS.call(l.styleAliases, s) && (s = l.styleAliases[s]), t[r] = s;
  return t;
}
function gh(A) {
  var e, t, o;
  if (e = A.toString(16).toUpperCase(), A <= 255)
    t = "x", o = 2;
  else if (A <= 65535)
    t = "u", o = 4;
  else if (A <= 4294967295)
    t = "U", o = 8;
  else
    throw new jA("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + t + JA.repeat("0", o - e.length) + e;
}
var dh = 1, xo = 2;
function ph(A) {
  this.schema = A.schema || Br, this.indent = Math.max(1, A.indent || 2), this.noArrayIndent = A.noArrayIndent || !1, this.skipInvalid = A.skipInvalid || !1, this.flowLevel = JA.isNothing(A.flowLevel) ? -1 : A.flowLevel, this.styleMap = fh(this.schema, A.styles || null), this.sortKeys = A.sortKeys || !1, this.lineWidth = A.lineWidth || 80, this.noRefs = A.noRefs || !1, this.noCompatMode = A.noCompatMode || !1, this.condenseFlow = A.condenseFlow || !1, this.quotingType = A.quotingType === '"' ? xo : dh, this.forceQuotes = A.forceQuotes || !1, this.replacer = typeof A.replacer == "function" ? A.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function Hl(A, e) {
  for (var t = JA.repeat(" ", e), o = 0, n = -1, i = "", r, s = A.length; o < s; )
    n = A.indexOf(`
`, o), n === -1 ? (r = A.slice(o), o = s) : (r = A.slice(o, n + 1), o = n + 1), r.length && r !== `
` && (i += t), i += r;
  return i;
}
function Ri(A, e) {
  return `
` + JA.repeat(" ", A.indent * e);
}
function Ch(A, e) {
  var t, o, n;
  for (t = 0, o = A.implicitTypes.length; t < o; t += 1)
    if (n = A.implicitTypes[t], n.resolve(e))
      return !0;
  return !1;
}
function mn(A) {
  return A === ZE || A === qE;
}
function Do(A) {
  return 32 <= A && A <= 126 || 161 <= A && A <= 55295 && A !== 8232 && A !== 8233 || 57344 <= A && A <= 65533 && A !== yr || 65536 <= A && A <= 1114111;
}
function Pl(A) {
  return Do(A) && A !== yr && A !== zE && A !== Jo;
}
function Yl(A, e, t) {
  var o = Pl(A), n = o && !mn(A);
  return (
    // ns-plain-safe
    (t ? (
      // c = flow-in
      o
    ) : o && A !== jS && A !== GS && A !== WS && A !== _S && A !== XS) && A !== Mi && !(e === In && !n) || Pl(e) && !mn(e) && A === Mi || e === In && n
  );
}
function Eh(A) {
  return Do(A) && A !== yr && !mn(A) && A !== ih && A !== lh && A !== In && A !== jS && A !== GS && A !== WS && A !== _S && A !== XS && A !== Mi && A !== th && A !== nh && A !== $E && A !== Sh && A !== rh && A !== sh && A !== oh && A !== Ah && A !== eh && A !== uh && A !== ah;
}
function hh(A) {
  return !mn(A) && A !== In;
}
function ro(A, e) {
  var t = A.charCodeAt(e), o;
  return t >= 55296 && t <= 56319 && e + 1 < A.length && (o = A.charCodeAt(e + 1), o >= 56320 && o <= 57343) ? (t - 55296) * 1024 + o - 56320 + 65536 : t;
}
function qS(A) {
  var e = /^\n* /;
  return e.test(A);
}
var zS = 1, Vi = 2, ZS = 3, $S = 4, bt = 5;
function Qh(A, e, t, o, n, i, r, s) {
  var l, a = 0, S = null, u = !1, f = !1, k = o !== -1, p = -1, B = Eh(ro(A, 0)) && hh(ro(A, A.length - 1));
  if (e || r)
    for (l = 0; l < A.length; a >= 65536 ? l += 2 : l++) {
      if (a = ro(A, l), !Do(a))
        return bt;
      B = B && Yl(a, S, s), S = a;
    }
  else {
    for (l = 0; l < A.length; a >= 65536 ? l += 2 : l++) {
      if (a = ro(A, l), a === Jo)
        u = !0, k && (f = f || // Foldable line = too long, and not more-indented.
        l - p - 1 > o && A[p + 1] !== " ", p = l);
      else if (!Do(a))
        return bt;
      B = B && Yl(a, S, s), S = a;
    }
    f = f || k && l - p - 1 > o && A[p + 1] !== " ";
  }
  return !u && !f ? B && !r && !n(A) ? zS : i === xo ? bt : Vi : t > 9 && qS(A) ? bt : r ? i === xo ? bt : Vi : f ? $S : ZS;
}
function Bh(A, e, t, o, n) {
  A.dump = (function() {
    if (e.length === 0)
      return A.quotingType === xo ? '""' : "''";
    if (!A.noCompatMode && (ch.indexOf(e) !== -1 || kh.test(e)))
      return A.quotingType === xo ? '"' + e + '"' : "'" + e + "'";
    var i = A.indent * Math.max(1, t), r = A.lineWidth === -1 ? -1 : Math.max(Math.min(A.lineWidth, 40), A.lineWidth - i), s = o || A.flowLevel > -1 && t >= A.flowLevel;
    function l(a) {
      return Ch(A, a);
    }
    switch (Qh(
      e,
      s,
      A.indent,
      r,
      l,
      A.quotingType,
      A.forceQuotes && !o,
      n
    )) {
      case zS:
        return e;
      case Vi:
        return "'" + e.replace(/'/g, "''") + "'";
      case ZS:
        return "|" + jl(e, A.indent) + Gl(Hl(e, i));
      case $S:
        return ">" + jl(e, A.indent) + Gl(Hl(Ih(e, r), i));
      case bt:
        return '"' + mh(e) + '"';
      default:
        throw new jA("impossible error: invalid scalar style");
    }
  })();
}
function jl(A, e) {
  var t = qS(A) ? String(e) : "", o = A[A.length - 1] === `
`, n = o && (A[A.length - 2] === `
` || A === `
`), i = n ? "+" : o ? "" : "-";
  return t + i + `
`;
}
function Gl(A) {
  return A[A.length - 1] === `
` ? A.slice(0, -1) : A;
}
function Ih(A, e) {
  for (var t = /(\n+)([^\n]*)/g, o = (function() {
    var a = A.indexOf(`
`);
    return a = a !== -1 ? a : A.length, t.lastIndex = a, Wl(A.slice(0, a), e);
  })(), n = A[0] === `
` || A[0] === " ", i, r; r = t.exec(A); ) {
    var s = r[1], l = r[2];
    i = l[0] === " ", o += s + (!n && !i && l !== "" ? `
` : "") + Wl(l, e), n = i;
  }
  return o;
}
function Wl(A, e) {
  if (A === "" || A[0] === " ") return A;
  for (var t = / [^ ]/g, o, n = 0, i, r = 0, s = 0, l = ""; o = t.exec(A); )
    s = o.index, s - n > e && (i = r > n ? r : s, l += `
` + A.slice(n, i), n = i + 1), r = s;
  return l += `
`, A.length - n > e && r > n ? l += A.slice(n, r) + `
` + A.slice(r + 1) : l += A.slice(n), l.slice(1);
}
function mh(A) {
  for (var e = "", t = 0, o, n = 0; n < A.length; t >= 65536 ? n += 2 : n++)
    t = ro(A, n), o = RA[t], !o && Do(t) ? (e += A[n], t >= 65536 && (e += A[n + 1])) : e += o || gh(t);
  return e;
}
function yh(A, e, t) {
  var o = "", n = A.tag, i, r, s;
  for (i = 0, r = t.length; i < r; i += 1)
    s = t[i], A.replacer && (s = A.replacer.call(t, String(i), s)), (He(A, e, s, !1, !1) || typeof s > "u" && He(A, e, null, !1, !1)) && (o !== "" && (o += "," + (A.condenseFlow ? "" : " ")), o += A.dump);
  A.tag = n, A.dump = "[" + o + "]";
}
function _l(A, e, t, o) {
  var n = "", i = A.tag, r, s, l;
  for (r = 0, s = t.length; r < s; r += 1)
    l = t[r], A.replacer && (l = A.replacer.call(t, String(r), l)), (He(A, e + 1, l, !0, !0, !1, !0) || typeof l > "u" && He(A, e + 1, null, !0, !0, !1, !0)) && ((!o || n !== "") && (n += Ri(A, e)), A.dump && Jo === A.dump.charCodeAt(0) ? n += "-" : n += "- ", n += A.dump);
  A.tag = i, A.dump = n || "[]";
}
function vh(A, e, t) {
  var o = "", n = A.tag, i = Object.keys(t), r, s, l, a, S;
  for (r = 0, s = i.length; r < s; r += 1)
    S = "", o !== "" && (S += ", "), A.condenseFlow && (S += '"'), l = i[r], a = t[l], A.replacer && (a = A.replacer.call(t, l, a)), He(A, e, l, !1, !1) && (A.dump.length > 1024 && (S += "? "), S += A.dump + (A.condenseFlow ? '"' : "") + ":" + (A.condenseFlow ? "" : " "), He(A, e, a, !1, !1) && (S += A.dump, o += S));
  A.tag = n, A.dump = "{" + o + "}";
}
function bh(A, e, t, o) {
  var n = "", i = A.tag, r = Object.keys(t), s, l, a, S, u, f;
  if (A.sortKeys === !0)
    r.sort();
  else if (typeof A.sortKeys == "function")
    r.sort(A.sortKeys);
  else if (A.sortKeys)
    throw new jA("sortKeys must be a boolean or a function");
  for (s = 0, l = r.length; s < l; s += 1)
    f = "", (!o || n !== "") && (f += Ri(A, e)), a = r[s], S = t[a], A.replacer && (S = A.replacer.call(t, a, S)), He(A, e + 1, a, !0, !0, !0) && (u = A.tag !== null && A.tag !== "?" || A.dump && A.dump.length > 1024, u && (A.dump && Jo === A.dump.charCodeAt(0) ? f += "?" : f += "? "), f += A.dump, u && (f += Ri(A, e)), He(A, e + 1, S, !0, u) && (A.dump && Jo === A.dump.charCodeAt(0) ? f += ":" : f += ": ", f += A.dump, n += f));
  A.tag = i, A.dump = n || "{}";
}
function Xl(A, e, t) {
  var o, n, i, r, s, l;
  for (n = t ? A.explicitTypes : A.implicitTypes, i = 0, r = n.length; i < r; i += 1)
    if (s = n[i], (s.instanceOf || s.predicate) && (!s.instanceOf || typeof e == "object" && e instanceof s.instanceOf) && (!s.predicate || s.predicate(e))) {
      if (t ? s.multi && s.representName ? A.tag = s.representName(e) : A.tag = s.tag : A.tag = "?", s.represent) {
        if (l = A.styleMap[s.tag] || s.defaultStyle, PS.call(s.represent) === "[object Function]")
          o = s.represent(e, l);
        else if (YS.call(s.represent, l))
          o = s.represent[l](e, l);
        else
          throw new jA("!<" + s.tag + '> tag resolver accepts not "' + l + '" style');
        A.dump = o;
      }
      return !0;
    }
  return !1;
}
function He(A, e, t, o, n, i, r) {
  A.tag = null, A.dump = t, Xl(A, t, !1) || Xl(A, t, !0);
  var s = PS.call(A.dump), l = o, a;
  o && (o = A.flowLevel < 0 || A.flowLevel > e);
  var S = s === "[object Object]" || s === "[object Array]", u, f;
  if (S && (u = A.duplicates.indexOf(t), f = u !== -1), (A.tag !== null && A.tag !== "?" || f || A.indent !== 2 && e > 0) && (n = !1), f && A.usedDuplicates[u])
    A.dump = "*ref_" + u;
  else {
    if (S && f && !A.usedDuplicates[u] && (A.usedDuplicates[u] = !0), s === "[object Object]")
      o && Object.keys(A.dump).length !== 0 ? (bh(A, e, A.dump, n), f && (A.dump = "&ref_" + u + A.dump)) : (vh(A, e, A.dump), f && (A.dump = "&ref_" + u + " " + A.dump));
    else if (s === "[object Array]")
      o && A.dump.length !== 0 ? (A.noArrayIndent && !r && e > 0 ? _l(A, e - 1, A.dump, n) : _l(A, e, A.dump, n), f && (A.dump = "&ref_" + u + A.dump)) : (yh(A, e, A.dump), f && (A.dump = "&ref_" + u + " " + A.dump));
    else if (s === "[object String]")
      A.tag !== "?" && Bh(A, A.dump, e, i, l);
    else {
      if (s === "[object Undefined]")
        return !1;
      if (A.skipInvalid) return !1;
      throw new jA("unacceptable kind of an object to dump " + s);
    }
    A.tag !== null && A.tag !== "?" && (a = encodeURI(
      A.tag[0] === "!" ? A.tag.slice(1) : A.tag
    ).replace(/!/g, "%21"), A.tag[0] === "!" ? a = "!" + a : a.slice(0, 18) === "tag:yaml.org,2002:" ? a = "!!" + a.slice(18) : a = "!<" + a + ">", A.dump = a + " " + A.dump);
  }
  return !0;
}
function Jh(A, e) {
  var t = [], o = [], n, i;
  for (Li(A, t, o), n = 0, i = o.length; n < i; n += 1)
    e.duplicates.push(t[o[n]]);
  e.usedDuplicates = new Array(i);
}
function Li(A, e, t) {
  var o, n, i;
  if (A !== null && typeof A == "object")
    if (n = e.indexOf(A), n !== -1)
      t.indexOf(n) === -1 && t.push(n);
    else if (e.push(A), Array.isArray(A))
      for (n = 0, i = A.length; n < i; n += 1)
        Li(A[n], e, t);
    else
      for (o = Object.keys(A), n = 0, i = o.length; n < i; n += 1)
        Li(A[o[n]], e, t);
}
function xh(A, e) {
  e = e || {};
  var t = new ph(e);
  t.noRefs || Jh(A, t);
  var o = A;
  return t.replacer && (o = t.replacer.call({ "": o }, "", o)), He(t, 0, o, !0, !0) ? t.dump + `
` : "";
}
var Dh = xh, wh = {
  dump: Dh
};
function vr(A, e) {
  return function() {
    throw new Error("Function yaml." + A + " is removed in js-yaml 4. Use yaml." + e + " instead, which is now safe by default.");
  };
}
var Uh = KA, Fh = fS, Kh = CS, Oh = IS, Nh = mS, Th = Br, Mh = HS.load, Rh = HS.loadAll, Vh = wh.dump, Lh = jA, Hh = {
  binary: xS,
  float: BS,
  map: pS,
  null: ES,
  pairs: wS,
  set: US,
  timestamp: bS,
  bool: hS,
  int: QS,
  merge: JS,
  omap: DS,
  seq: dS,
  str: gS
}, Ph = vr("safeLoad", "load"), Yh = vr("safeLoadAll", "loadAll"), jh = vr("safeDump", "dump"), ql = {
  Type: Uh,
  Schema: Fh,
  FAILSAFE_SCHEMA: Kh,
  JSON_SCHEMA: Oh,
  CORE_SCHEMA: Nh,
  DEFAULT_SCHEMA: Th,
  load: Mh,
  loadAll: Rh,
  dump: Vh,
  YAMLException: Lh,
  types: Hh,
  safeLoad: Ph,
  safeLoadAll: Yh,
  safeDump: jh
};
const Gh = { class: "properties-panel glass-panel" }, Wh = { class: "panel-content" }, _h = {
  key: 0,
  class: "global-actions"
}, Xh = { class: "config-actions" }, qh = { class: "input-group" }, zh = { class: "input-group" }, Zh = { class: "io-actions" }, $h = {
  key: 1,
  class: "entity-properties"
}, AQ = { class: "header-row" }, eQ = { class: "scroll-area" }, tQ = { class: "input-group" }, oQ = { class: "input-group" }, nQ = { class: "input-group" }, iQ = {
  class: "id-input-row",
  style: { display: "flex", gap: "4px", "align-items": "center" }
}, rQ = {
  class: "prefix",
  style: { color: "var(--color-text-secondary)", "font-family": "monospace" }
}, sQ = ["value"], lQ = { class: "row" }, uQ = { class: "input-group" }, aQ = { class: "row" }, SQ = { class: "input-group" }, cQ = { class: "input-group" }, kQ = { class: "row" }, fQ = { class: "input-group" }, gQ = { class: "input-group" }, dQ = { key: 0 }, pQ = { class: "input-group" }, CQ = { class: "color-picker-row" }, EQ = { class: "input-group" }, hQ = { class: "color-picker-row" }, QQ = { key: 1 }, BQ = { class: "input-group" }, IQ = { class: "color-picker-row" }, mQ = { class: "input-group" }, yQ = { class: "color-picker-row" }, vQ = { class: "input-group" }, bQ = { class: "color-picker-row" }, JQ = { class: "input-group checkbox" }, xQ = { key: 2 }, DQ = { class: "hint small" }, wQ = { class: "input-group inline" }, UQ = { class: "panel-footer" }, FQ = /* @__PURE__ */ Ct({
  __name: "PropertiesPanel",
  props: {
    isDrawing: { type: Boolean }
  },
  emits: ["toggle-draw-mode"],
  setup(A) {
    const e = Pn(), t = FA(() => !!e.selectedEntityId), o = FA(() => e.selectedEntity);
    function n() {
      e.addEntity("light");
    }
    function i() {
      e.selectedEntityId && e.removeEntity(e.selectedEntityId);
    }
    function r(I, g) {
      const Q = `${g}.`;
      return I.startsWith(Q) ? I.slice(Q.length) : I;
    }
    function s(I, g) {
      const R = I.target.value, m = `${g.type}.`;
      g.entityId = `${m}${R}`;
    }
    function l() {
      const I = JSON.parse(JSON.stringify(e.config));
      I.imageBase64 && I.imageBase64.length > 80 && (I.imageBase64 = (I.imageBase64.match(/.{1,80}/g) || []).join(" "));
      const g = {
        type: "custom:ha-floorplan-card",
        config: I
      }, Q = ql.dump(g, {
        lineWidth: 80,
        noRefs: !0,
        quotingType: '"'
      }), R = I.name ? `${I.name.replace(/[^a-z0-9]/yi, "_").toLowerCase()}.yaml` : "floorplan-config.yaml";
      a(Q, R, "text/yaml");
    }
    function a(I, g, Q) {
      const R = new Blob([I], { type: Q }), m = URL.createObjectURL(R), y = document.createElement("a");
      y.setAttribute("href", m), y.setAttribute("download", g), document.body.appendChild(y), y.click(), y.remove(), URL.revokeObjectURL(m);
    }
    const S = gA(null);
    function u() {
      S.value?.click();
    }
    function f(I) {
      const g = I.target;
      if (g.files && g.files[0]) {
        const Q = new FileReader();
        Q.onload = (R) => {
          if (R.target?.result)
            try {
              const m = R.target.result, y = ql.load(m);
              let L = y;
              y && y.type === "custom:ha-floorplan-card" && y.config && (L = y.config), L && L.imageBase64 && (L.imageBase64 = L.imageBase64.replace(/\s/g, "")), Ea(L) && (console.log("Migrating configuration from old color format..."), L = sr(L)), L && L.id && L.entities ? e.loadConfig(L) : alert("Invalid configuration file: Missing id or entities");
            } catch (m) {
              console.error(m), alert("Error parsing configuration file");
            }
        }, Q.readAsText(g.files[0]);
      }
    }
    const k = gA(null);
    function p() {
      k.value?.click();
    }
    function B(I) {
      const g = I.target;
      if (g.files && g.files[0]) {
        const Q = new FileReader();
        Q.onload = (R) => {
          R.target?.result && e.setBaseImage(R.target.result);
        }, Q.readAsDataURL(g.files[0]);
      }
    }
    function J() {
      confirm("Are you sure you want to clear the entire floorplan config?") && e.clearConfig();
    }
    function C() {
      e.selectedEntityId && e.updateEntity(e.selectedEntityId, { points: [] });
    }
    const h = "v1.1.7";
    return (I, g) => (AA(), eA("div", Gh, [
      g[47] || (g[47] = b("div", { class: "panel-header" }, [
        b("h2", null, "Properties")
      ], -1)),
      b("div", Wh, [
        t.value ? o.value ? (AA(), eA("div", $h, [
          b("div", AQ, [
            b("h3", null, te(o.value.label), 1),
            b("button", {
              class: "icon-btn close",
              onClick: g[1] || (g[1] = (Q) => HA(e).selectedEntityId = null)
            }, "X")
          ]),
          b("div", eQ, [
            b("div", tQ, [
              g[26] || (g[26] = b("label", null, "Label", -1)),
              IA(b("input", {
                type: "text",
                "onUpdate:modelValue": g[2] || (g[2] = (Q) => o.value.label = Q)
              }, null, 512), [
                [OA, o.value.label]
              ])
            ]),
            b("div", oQ, [
              g[28] || (g[28] = b("label", null, "Type", -1)),
              IA(b("select", {
                "onUpdate:modelValue": g[3] || (g[3] = (Q) => o.value.type = Q)
              }, [...g[27] || (g[27] = [
                b("option", { value: "light" }, "Light", -1),
                b("option", { value: "switch" }, "Switch", -1),
                b("option", { value: "media_player" }, "Media Player", -1),
                b("option", { value: "camera" }, "Camera", -1)
              ])], 512), [
                [hs, o.value.type]
              ])
            ]),
            b("div", nQ, [
              g[29] || (g[29] = b("label", null, "Entity ID", -1)),
              b("div", iQ, [
                b("span", rQ, te(o.value.type) + ".", 1),
                b("input", {
                  type: "text",
                  value: r(o.value.entityId, o.value.type),
                  onInput: g[4] || (g[4] = (Q) => s(Q, o.value))
                }, null, 40, sQ)
              ])
            ]),
            g[45] || (g[45] = b("div", { class: "section-title" }, "Visuals", -1)),
            b("div", lQ, [
              b("div", uQ, [
                g[31] || (g[31] = b("label", null, "Shape", -1)),
                IA(b("select", {
                  "onUpdate:modelValue": g[5] || (g[5] = (Q) => o.value.shape = Q)
                }, [...g[30] || (g[30] = [
                  b("option", { value: "circle" }, "Circle", -1),
                  b("option", { value: "square" }, "Square", -1)
                ])], 512), [
                  [hs, o.value.shape]
                ])
              ])
            ]),
            b("div", aQ, [
              b("div", SQ, [
                g[32] || (g[32] = b("label", null, "Width (%)", -1)),
                IA(b("input", {
                  type: "number",
                  "onUpdate:modelValue": g[6] || (g[6] = (Q) => o.value.style.width = Q),
                  step: "0.1"
                }, null, 512), [
                  [OA, o.value.style.width]
                ])
              ]),
              b("div", cQ, [
                g[33] || (g[33] = b("label", null, "Height (%)", -1)),
                IA(b("input", {
                  type: "number",
                  "onUpdate:modelValue": g[7] || (g[7] = (Q) => o.value.style.height = Q),
                  step: "0.1"
                }, null, 512), [
                  [OA, o.value.style.height]
                ])
              ])
            ]),
            b("div", kQ, [
              b("div", fQ, [
                g[34] || (g[34] = b("label", null, "Spread Radius (%)", -1)),
                IA(b("input", {
                  type: "number",
                  "onUpdate:modelValue": g[8] || (g[8] = (Q) => o.value.style.gradientRadius = Q),
                  step: "1"
                }, null, 512), [
                  [OA, o.value.style.gradientRadius]
                ])
              ]),
              b("div", gQ, [
                g[35] || (g[35] = b("label", null, "Edge Blur", -1)),
                IA(b("input", {
                  type: "number",
                  "onUpdate:modelValue": g[9] || (g[9] = (Q) => o.value.style.edgeBlur = Q),
                  step: "0.1",
                  min: "0",
                  placeholder: "0"
                }, null, 512), [
                  [OA, o.value.style.edgeBlur]
                ])
              ])
            ]),
            o.value.type !== "camera" ? (AA(), eA("div", dQ, [
              g[38] || (g[38] = b("div", { class: "section-title" }, "Default Colors", -1)),
              b("div", pQ, [
                g[36] || (g[36] = b("label", null, "On Color", -1)),
                b("div", CQ, [
                  IA(b("input", {
                    type: "color",
                    "onUpdate:modelValue": g[10] || (g[10] = (Q) => o.value.style.colors.onColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.onColor]
                  ]),
                  IA(b("input", {
                    type: "text",
                    "onUpdate:modelValue": g[11] || (g[11] = (Q) => o.value.style.colors.onColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.onColor]
                  ])
                ])
              ]),
              b("div", EQ, [
                g[37] || (g[37] = b("label", null, "Off Color", -1)),
                b("div", hQ, [
                  IA(b("input", {
                    type: "color",
                    "onUpdate:modelValue": g[12] || (g[12] = (Q) => o.value.style.colors.offColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.offColor]
                  ]),
                  IA(b("input", {
                    type: "text",
                    "onUpdate:modelValue": g[13] || (g[13] = (Q) => o.value.style.colors.offColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.offColor]
                  ])
                ])
              ])
            ])) : ce("", !0),
            o.value.type === "camera" ? (AA(), eA("div", QQ, [
              g[42] || (g[42] = b("div", { class: "section-title" }, "Camera State Colors", -1)),
              b("div", BQ, [
                g[39] || (g[39] = b("label", null, "Idle/Off Color", -1)),
                b("div", IQ, [
                  IA(b("input", {
                    type: "color",
                    "onUpdate:modelValue": g[14] || (g[14] = (Q) => o.value.style.colors.idleColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.idleColor]
                  ]),
                  IA(b("input", {
                    type: "text",
                    "onUpdate:modelValue": g[15] || (g[15] = (Q) => o.value.style.colors.idleColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.idleColor]
                  ])
                ])
              ]),
              b("div", mQ, [
                g[40] || (g[40] = b("label", null, "Recording Color (Blinks)", -1)),
                b("div", yQ, [
                  IA(b("input", {
                    type: "color",
                    "onUpdate:modelValue": g[16] || (g[16] = (Q) => o.value.style.colors.recordingColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.recordingColor]
                  ]),
                  IA(b("input", {
                    type: "text",
                    "onUpdate:modelValue": g[17] || (g[17] = (Q) => o.value.style.colors.recordingColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.recordingColor]
                  ])
                ])
              ]),
              b("div", vQ, [
                g[41] || (g[41] = b("label", null, "Streaming Color", -1)),
                b("div", bQ, [
                  IA(b("input", {
                    type: "color",
                    "onUpdate:modelValue": g[18] || (g[18] = (Q) => o.value.style.colors.streamingColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.streamingColor]
                  ]),
                  IA(b("input", {
                    type: "text",
                    "onUpdate:modelValue": g[19] || (g[19] = (Q) => o.value.style.colors.streamingColor = Q)
                  }, null, 512), [
                    [OA, o.value.style.colors.streamingColor]
                  ])
                ])
              ])
            ])) : ce("", !0),
            g[46] || (g[46] = b("div", { class: "section-title" }, "Label Display", -1)),
            b("div", JQ, [
              b("label", null, [
                IA(b("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": g[20] || (g[20] = (Q) => o.value.labelConfig.show = Q)
                }, null, 512), [
                  [tg, o.value.labelConfig.show]
                ]),
                g[43] || (g[43] = aa(" Show Label ", -1))
              ])
            ]),
            ["light", "media_player", "camera"].includes(o.value.type) ? (AA(), eA("div", xQ, [
              g[44] || (g[44] = b("div", { class: "section-title" }, "Light Zone", -1)),
              b("p", DQ, te(A.isDrawing ? "Click on canvas to add points." : "Define a custom shape for light spread."), 1),
              b("div", wQ, [
                b("button", {
                  onClick: g[21] || (g[21] = (Q) => I.$emit("toggle-draw-mode")),
                  class: Ot({ active: A.isDrawing })
                }, te(A.isDrawing ? "Finish" : "Draw"), 3),
                o.value.points && o.value.points.length > 0 ? (AA(), eA("button", {
                  key: 0,
                  onClick: C,
                  class: "secondary"
                }, " Clear ")) : ce("", !0)
              ])
            ])) : ce("", !0),
            b("div", {
              class: "danger-actions",
              style: { "margin-top": "1rem" }
            }, [
              b("button", {
                class: "icon-btn danger",
                onClick: i
              }, "Remove Entity")
            ])
          ])
        ])) : ce("", !0) : (AA(), eA("div", _h, [
          g[25] || (g[25] = b("p", { class: "hint" }, "Select an entity to edit properties, or add new items.", -1)),
          b("div", { class: "button-group" }, [
            b("button", { onClick: n }, "Add Entity")
          ]),
          b("div", Xh, [
            g[24] || (g[24] = b("h3", null, "Global Config", -1)),
            b("div", qh, [
              g[22] || (g[22] = b("label", null, "Floorplan Name", -1)),
              IA(b("input", {
                type: "text",
                "onUpdate:modelValue": g[0] || (g[0] = (Q) => HA(e).config.name = Q)
              }, null, 512), [
                [OA, HA(e).config.name]
              ])
            ]),
            b("div", zh, [
              g[23] || (g[23] = b("label", null, "Floorplan Image", -1)),
              b("button", {
                class: "secondary small",
                onClick: p
              }, "Replace Image"),
              b("input", {
                ref_key: "replaceImageInput",
                ref: k,
                type: "file",
                accept: "image/*",
                class: "hidden-input",
                onChange: B
              }, null, 544)
            ]),
            b("div", Zh, [
              b("button", {
                class: "secondary",
                onClick: J,
                style: { color: "var(--color-danger)" }
              }, "Clear All"),
              b("button", {
                class: "secondary",
                onClick: l
              }, "Export YAML"),
              b("button", {
                class: "secondary",
                onClick: u
              }, "Import YAML"),
              b("input", {
                ref_key: "importInput",
                ref: S,
                type: "file",
                accept: ".yaml,.yml",
                class: "hidden-input",
                onChange: f
              }, null, 544)
            ])
          ])
        ]))
      ]),
      b("div", UQ, te(HA(h)), 1)
    ]));
  }
}), KQ = /* @__PURE__ */ Gt(FQ, [["__scopeId", "data-v-79b64b68"]]), OQ = { class: "editor-card" }, NQ = { class: "editor-toolbar" }, TQ = { class: "toolbar-actions" }, MQ = ["disabled"], RQ = ["disabled"], VQ = {
  key: 0,
  class: "status-bar success"
}, LQ = {
  key: 1,
  class: "status-bar error"
}, HQ = { class: "editor-layout" }, PQ = /* @__PURE__ */ Ct({
  __name: "HaFloorplanEditor.ce",
  props: {
    config: { type: null },
    hass: { type: null }
  },
  setup(A) {
    const e = tC();
    Ht(e);
    const t = Pn(), o = A, n = gA(null), i = gA(""), r = gA(""), s = gA(!1), l = gA(!1), a = FA(() => {
      const C = o.config?.dashboard || "lovelace", h = C.match(/^dashboard-[^/]+\/(.+)$/);
      return h ? h[1] : C;
    }), S = FA(() => o.config?.card_index ?? null);
    function u() {
      n.value && (n.value.isDrawing = !n.value.isDrawing);
    }
    function f(C) {
      const h = [];
      if (C.cards && Array.isArray(C.cards) && h.push(...C.cards), C.sections && Array.isArray(C.sections))
        for (const I of C.sections)
          I.cards && Array.isArray(I.cards) && h.push(...I.cards);
      return h;
    }
    function k(C) {
      if (!C) return null;
      if (C.type === "custom:ha-floorplan-card") {
        if (C.config) return C.config;
        const { type: h, ...I } = C;
        return I;
      }
      if (C.tabs && Array.isArray(C.tabs))
        for (const h of C.tabs) {
          const I = k(h.card);
          if (I) return I;
        }
      if (C.cards && Array.isArray(C.cards))
        for (const h of C.cards) {
          const I = k(h);
          if (I) return I;
        }
      return null;
    }
    function p(C, h) {
      if (!C) return !1;
      if (C.type === "custom:ha-floorplan-card")
        return C.config = h, delete C.entities, delete C.imageUrl, delete C.imageBase64, delete C.overlayImages, delete C.id, delete C.name, !0;
      if (C.tabs && Array.isArray(C.tabs)) {
        for (const I of C.tabs)
          if (p(I.card, h)) return !0;
      }
      if (C.cards && Array.isArray(C.cards)) {
        for (const I of C.cards)
          if (p(I, h)) return !0;
      }
      return !1;
    }
    async function B() {
      if (!o.hass) {
        r.value = "No Home Assistant connection available";
        return;
      }
      s.value = !0, i.value = "", r.value = "";
      try {
        const C = await o.hass.callWS({
          type: "lovelace/config",
          url_path: a.value === "lovelace" ? null : a.value
        });
        let h = null, I = -1, g = -1;
        if (C && C.views)
          A:
            for (let Q = 0; Q < C.views.length; Q++) {
              const R = C.views[Q], m = f(R);
              for (let y = 0; y < m.length; y++) {
                const L = k(m[y]);
                if (L)
                  if (S.value !== null) {
                    if (y === S.value && Q === 0) {
                      h = L, I = Q, g = y;
                      break A;
                    }
                  } else {
                    h = L, I = Q, g = y;
                    break A;
                  }
              }
            }
        h ? (h.imageBase64 && (h.imageBase64 = h.imageBase64.replace(/\s/g, "")), Ea(h) && (h = sr(h)), t.loadConfig(h), i.value = `Loaded from dashboard "${a.value}" (view ${I}, card ${g})`) : r.value = `No ha-floorplan-card found in dashboard "${a.value}"`;
      } catch (C) {
        r.value = `Failed to load: ${C.message || C}`, console.error("Load from HA failed:", C);
      } finally {
        s.value = !1;
      }
    }
    async function J() {
      if (!o.hass) {
        r.value = "No Home Assistant connection available";
        return;
      }
      l.value = !0, i.value = "", r.value = "";
      try {
        const C = a.value === "lovelace" ? null : a.value, h = await o.hass.callWS({
          type: "lovelace/config",
          url_path: C
        });
        if (!h || !h.views) {
          r.value = "Dashboard has no views";
          return;
        }
        let I = !1;
        const g = JSON.parse(JSON.stringify(t.config));
        A:
          for (let Q = 0; Q < h.views.length; Q++) {
            const R = h.views[Q], m = f(R);
            for (let y = 0; y < m.length; y++)
              if (!(S.value !== null && (y !== S.value || Q !== 0)) && p(m[y], g)) {
                I = !0;
                break A;
              }
          }
        if (!I) {
          r.value = "No ha-floorplan-card found to update. Add one to your dashboard first.";
          return;
        }
        await o.hass.callWS({
          type: "lovelace/config/save",
          url_path: C,
          config: h
        }), i.value = `Pushed to dashboard "${a.value}" successfully! Refresh the View tab to see changes.`;
      } catch (C) {
        r.value = `Failed to push: ${C.message || C}`, console.error("Push to HA failed:", C);
      } finally {
        l.value = !1;
      }
    }
    return Vu(() => {
      o.hass && B();
    }), Kt(() => o.hass, (C, h) => {
      C && !h && B();
    }), console.info("%c HA Floorplan Editor %c v1.1.7 ", "background: #333; color: #fff", "background: #10b981; color: #fff"), (C, h) => (AA(), eA("ha-card", OQ, [
      b("div", NQ, [
        h[0] || (h[0] = b("div", { class: "toolbar-left" }, [
          b("span", { class: "toolbar-title" }, "Floorplan Editor")
        ], -1)),
        b("div", TQ, [
          b("button", {
            class: "toolbar-btn",
            onClick: B,
            disabled: s.value || !A.hass,
            title: "Load config from HA dashboard"
          }, te(s.value ? "Loading..." : "📥 Load"), 9, MQ),
          b("button", {
            class: "toolbar-btn primary",
            onClick: J,
            disabled: l.value || !A.hass,
            title: "Push config to HA dashboard"
          }, te(l.value ? "Pushing..." : "📤 Push to HA"), 9, RQ)
        ])
      ]),
      i.value ? (AA(), eA("div", VQ, te(i.value), 1)) : ce("", !0),
      r.value ? (AA(), eA("div", LQ, te(r.value), 1)) : ce("", !0),
      b("div", HQ, [
        ie(vC, {
          ref_key: "canvasRef",
          ref: n
        }, null, 512),
        ie(KQ, {
          "is-drawing": n.value?.isDrawing || !1,
          onToggleDrawMode: u
        }, null, 8, ["is-drawing"])
      ])
    ]));
  }
}), YQ = ":host{display:block!important;width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:border-box}:host{--color-bg-primary: #1e293b;--color-bg-secondary: #0f172a;--color-text-primary: #e2e8f0;--color-text-secondary: #94a3b8;--color-text-accent: #38bdf8;--color-primary: #0ea5e9;--color-danger: #ef4444;--color-success: #10b981;--radius-sm: 6px;--radius-md: 10px;--radius-lg: 16px;--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, .6);font-family:Inter,system-ui,-apple-system,sans-serif;color:var(--color-text-primary)}ha-card{display:block!important;width:100%!important;margin:0!important;padding:0!important;background:var(--color-bg-primary)!important;box-shadow:none!important;border:none!important;overflow:hidden}.editor-card{display:flex!important;flex-direction:column;height:80vh;min-height:500px}.editor-toolbar{display:flex;justify-content:space-between;align-items:center;padding:.5rem 1rem;background:var(--color-bg-secondary);border-bottom:1px solid rgba(255,255,255,.1)}.toolbar-title{font-weight:700;font-size:1rem;color:var(--color-text-accent)}.toolbar-actions{display:flex;gap:.5rem}.toolbar-btn{padding:.4rem .8rem;border:1px solid rgba(255,255,255,.2);border-radius:var(--radius-sm);background:#ffffff0d;color:var(--color-text-primary);cursor:pointer;font-size:.85rem;transition:all .2s}.toolbar-btn:hover:not(:disabled){background:#ffffff1a}.toolbar-btn:disabled{opacity:.5;cursor:not-allowed}.toolbar-btn.primary{background:var(--color-primary);border-color:var(--color-primary);color:#fff}.toolbar-btn.primary:hover:not(:disabled){background:#0284c7}.status-bar{padding:.4rem 1rem;font-size:.8rem}.status-bar.success{background:#10b98126;color:var(--color-success)}.status-bar.error{background:#ef444426;color:var(--color-danger)}.editor-layout{display:flex;flex:1;overflow:hidden}@media(max-width:768px){.editor-layout{flex-direction:column}}.canvas-area{flex:1;background-color:var(--color-bg-secondary);display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;padding:2rem}.upload-zone{width:100%;max-width:500px;height:300px;border:2px dashed var(--color-text-secondary);border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer;transition:all .2s}.upload-zone:hover{border-color:var(--color-primary);background:#0ea5e90d}.upload-content{text-align:center;color:var(--color-text-secondary)}.upload-content .icon{font-size:3rem;margin-bottom:1rem}.canvas-container{box-shadow:var(--shadow-xl);border-radius:var(--radius-sm);overflow:hidden;position:relative;display:flex;flex-direction:column;width:100%;height:100%}.zoom-controls{position:absolute;top:10px;right:10px;z-index:100;background:#0009;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);padding:4px;border-radius:4px;display:flex;gap:8px;align-items:center;color:#fff}.zoom-btn{background:transparent;border:1px solid rgba(255,255,255,.3);color:#fff;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.zoom-btn:hover{background:#fff3}.scroll-frame{flex:1;overflow:auto;position:relative;padding:20px}.image-wrapper{position:relative;display:inline-block;line-height:0;cursor:crosshair;transition:transform .2s ease}.image-wrapper img{max-width:none;display:block;-webkit-user-select:none;user-select:none;width:100%}.overlay-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.overlay-layer polygon{vector-effect:non-scaling-stroke}.hidden-input{display:none}.properties-panel{width:300px;background-color:var(--color-bg-primary);border-left:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;height:100%;z-index:10}@media(max-width:768px){.properties-panel{width:100%;height:40%;border-left:none;border-top:1px solid rgba(255,255,255,.1)}}.panel-header{padding:1rem;border-bottom:1px solid rgba(255,255,255,.1)}.panel-header h2{margin:0;font-size:1.25rem}.panel-content{flex:1;overflow-y:auto;padding:1rem}.hint{color:var(--color-text-secondary);font-size:.9rem;margin-bottom:1.5rem}.hint.small{margin-bottom:.5rem;font-size:.8rem}.button-group{display:flex;flex-direction:column;gap:.5rem;margin-bottom:2rem}.input-group{margin-bottom:1rem}.input-group.inline{display:flex;gap:.5rem}.input-group label{display:block;font-size:.85rem;color:var(--color-text-secondary);margin-bottom:.25rem}.input-group.checkbox label{display:flex;align-items:center;gap:.5rem;color:var(--color-text-primary);cursor:pointer}.config-actions,.danger-actions{border-top:1px solid rgba(255,255,255,.1);padding-top:1rem}.header-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.icon-btn.close{background:transparent;color:var(--color-text-primary);padding:.5rem;font-size:1.5rem}.icon-btn.danger{background:transparent;color:var(--color-danger);padding:.2rem}.icon-btn.danger:hover{background:#ef44441a;border-color:var(--color-danger)}.section-title{font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;color:var(--color-text-accent);margin-top:1.5rem;margin-bottom:.5rem;font-weight:600}.row{display:flex;gap:.5rem}.color-picker-row{display:flex;gap:.5rem;align-items:center}.color-picker-row input[type=color]{border:none;width:30px;height:30px;padding:0;background:none;cursor:pointer}.io-actions{display:flex;gap:.5rem;margin-top:1rem}.io-actions button{flex:1;font-size:.85rem;padding:.5rem}button.active{background-color:var(--color-primary);color:#fff}.panel-footer{padding:.5rem;text-align:center;font-size:.7rem;color:var(--color-text-secondary);border-top:1px solid rgba(255,255,255,.1);margin-top:auto}.entity-dot{position:absolute;cursor:grab;z-index:10;border-radius:50%;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;touch-action:none}.entity-label{position:absolute;top:50%;left:50%;background:#000000b3;color:#fff;padding:2px 4px;font-size:14px;font-size:1.5cqw;border-radius:4px;white-space:nowrap;pointer-events:none;line-height:1.2}input[type=text],input[type=number],select{width:100%;padding:.5rem;border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,.15);background:#ffffff0d;color:var(--color-text-primary);font-size:.9rem}input[type=text]:focus,input[type=number]:focus,select:focus{outline:none;border-color:var(--color-primary)}button{padding:.6rem 1rem;border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,.15);background:#ffffff0d;color:var(--color-text-primary);cursor:pointer;font-size:.9rem;transition:all .15s}button:hover{background:#ffffff1a}button.secondary{background:transparent;border-color:#ffffff1a;font-size:.85rem}button.secondary:hover{background:#ffffff0d}h3{margin:0 0 .5rem;font-size:1.1rem}", jQ = /* @__PURE__ */ Gt(PQ, [["styles", [YQ]]]), GQ = /* @__PURE__ */ da(Kg);
class WQ extends GQ {
  setConfig(e) {
    e.floorplan_config ? this.config = e.floorplan_config : e.config ? this.config = e.config : this.config = e;
  }
  // HA calls setHass() to pass live entity states to the card
  setHass(e) {
    this.hass = e;
  }
  static getConfigElement() {
    return document.createElement("ha-floorplan-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:ha-floorplan-card",
      config: {
        id: "",
        name: "My Floorplan",
        imageBase64: "",
        entities: []
      }
    };
  }
  getCardSize() {
    return 6;
  }
}
customElements.define("ha-floorplan-card", WQ);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "ha-floorplan-card",
  name: "HA Interactive Floorplan",
  description: "Interactive floorplan with clickable lights, cameras, and climate controls",
  preview: !0
});
const _Q = /* @__PURE__ */ da(jQ);
class XQ extends _Q {
  setConfig(e) {
    this.config = e;
  }
  // HA calls setHass() to pass live hass object (needed for lovelace/config WS calls)
  setHass(e) {
    this.hass = e;
  }
  getCardSize() {
    return 12;
  }
}
customElements.define("ha-floorplan-editor", XQ);
console.info(
  "%c HA FLOORPLAN %c Card + Editor %c v1.1.7 ",
  "color: white; background: #202020; font-weight: 700;",
  "color: white; background: #555; font-weight: 700;",
  "color: #202020; background: #91eb61; font-weight: 700;"
);
