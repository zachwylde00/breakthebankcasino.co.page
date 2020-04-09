function convertDigit2Farsi(n) {
    var t, r, i, u;
    if ($("#lang").val() == "fa" && typeof n != "undefined") {
        for (t = "", r = 0; r < n.length; r++)
            i = n.charCodeAt(r), i >= 48 && i <= 57 ? (u = i + 1728, t = t + String.fromCharCode(u)) : t = i == 46 ? t + String.fromCharCode(i + 1) : t + String.fromCharCode(i);
        return t
    }
    return n
}
!function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function ui(n) {
        var t = n.length,
                r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }

    function fi(n, t, r) {
        if (i.isFunction(t))
            return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
        if (t.nodeType)
            return i.grep(n, function(n) {
                return n === t !== r
            });
        if ("string" == typeof t) {
            if (ef.test(t))
                return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return et.call(t, n) >= 0 !== r
        })
    }

    function rr(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType)
            ;
        return n
    }

    function of(n) {
        var t = ei[n] = {};
        return i.each(n.match(c) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function ct() {
        u.removeEventListener("DOMContentLoaded", ct, !1);
        n.removeEventListener("load", ct, !1);
        i.ready()
    }

    function p() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = i.expando + Math.random()
    }

    function ur(n, t, r) {
        var u;
        if (void 0 === r && 1 === n.nodeType)
            if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
                } catch (f) {
                }
                e.set(n, t, r)
            } else
                r = void 0;
        return r
    }

    function at() {
        return !0
    }

    function g() {
        return !1
    }

    function sr() {
        try {
            return u.activeElement
        } catch (n) {
        }
    }

    function ar(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function bf(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function kf(n) {
        var t = pf.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function oi(n, t) {
        for (var i = 0, u = n.length; u > i; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function vr(n, t) {
        var u, c, f, s, h, l, a, o;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in o)
                    for (u = 0, c = o[f].length; c > u; u++)
                        i.event.add(t, f, o[f][u])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function o(n, t) {
        var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function df(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && fr.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue)
    }

    function yr(t, r) {
        var u = i(r.createElement(t)).appendTo(r.body),
                f = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(u[0]).display : i.css(u[0], "display");
        return u.detach(), f
    }

    function pr(n) {
        var r = u,
                t = si[n];
        return t || (t = yr(n, r), "none" !== t && t || (vt = (vt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = vt[0].contentDocument, r.write(), r.close(), t = yr(n, r), vt.detach()), si[n] = t), t
    }

    function rt(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || yt(n), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), hi.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 !== u ? u + "" : u
    }

    function br(n, t) {
        return {
            get: function() {
                return n() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function gr(n, t) {
        if (t in n)
            return t;
        for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--; )
            if (t = dr[i] + r, t in n)
                return t;
        return u
    }

    function nu(n, t, i) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function tu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2)
            "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function iu(n, t, r) {
        var o = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                e = yt(n),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= u || null == u) {
            if (u = rt(n, t, e), (0 > u || null == u) && (u = n.style[t]), hi.test(u))
                return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
    }

    function ru(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++)
            u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && it(u) && (o[f] = r.access(u, "olddisplay", pr(u.nodeName)))) : o[f] || (s = it(u), (e && "none" !== e || !s) && r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; h > f; f++)
            u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
        return n
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function fu() {
        return setTimeout(function() {
            nt = void 0
        }), nt = i.now()
    }

    function bt(n, t) {
        var r, u = 0,
                i = {
                    height: n
                };
        for (t = t ? 1 : 0; 4 > u; u += 2 - t)
            r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function eu(n, t, i) {
        for (var u, f = (ut[t] || []).concat(ut["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n))
                return u
    }

    function fe(n, t, u) {
        var f, l, p, a, o, w, y, c = this,
                v = {},
                s = n.style,
                h = n.nodeType && it(n),
                e = r.get(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
            o.unqueued || w()
        }), o.unqueued++, c.always(function() {
            c.always(function() {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], y = i.css(n, "display"), "none" === y && (y = pr(n.nodeName)), "inline" === y && "none" === i.css(n, "float") && (s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", c.always(function() {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (l = t[f], re.exec(l)) {
                if (delete t[f], p = p || "toggle" === l, l === (h ? "hide" : "show")) {
                    if ("show" !== l || !e || void 0 === e[f])
                        continue;
                    h = !0
                }
                v[f] = e && e[f] || i.style(n, f)
            }
        if (!i.isEmptyObject(v)) {
            e ? "hidden" in e && (h = e.hidden) : e = r.access(n, "fxshow", {});
            p && (e.hidden = !h);
            h ? i(n).show() : c.done(function() {
                i(n).hide()
            });
            c.done(function() {
                var t;
                r.remove(n, "fxshow");
                for (t in v)
                    i.style(n, t, v[t])
            });
            for (f in v)
                a = eu(h ? e[f] : 0, f, c), f in e || (e[f] = a.start, h && (a.end = a.start, a.start = "width" === f || "height" === f ? 1 : 0))
        }
    }

    function ee(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r], t[r] = e)
            } else
                t[f] = e
    }

    function ou(n, t, r) {
        var h, e, o = 0,
                l = wt.length,
                f = i.Deferred().always(function() {
            delete c.elem
        }),
                c = function() {
                    if (e)
                        return !1;
                    for (var s = nt || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++)
                        u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: nt || fu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                                r = t ? u.tweens.length : 0;
                        if (e)
                            return this;
                        for (e = !0; r > i; i++)
                            u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                s = u.props;
        for (ee(s, u.opts.specialEasing); l > o; o++)
            if (h = wt[o].call(u, n, s, u.opts))
                return h;
        return i.map(s, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function pu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                    e = t.toLowerCase().match(c) || [];
            if (i.isFunction(r))
                while (u = e[f++])
                    "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function wu(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
                o = n === ci;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function li(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function ae(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                "*" === r[0]; )
            r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0] in i)
            f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f)
            return (f !== r[0] && r.unshift(f), i[f])
    }

    function ve(n, t, i, r) {
        var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (f = o[e + " " + u] || o["* " + u], !f)
                        for (h in o)
                            if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                                break
                            }
                    if (f !== !0)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: f ? l : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }

    function ai(n, t, r, u) {
        var f;
        if (i.isArray(t))
            i.each(t, function(t, i) {
                r || pe.test(n) ? u(n, i) : ai(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== i.type(t))
            u(n, t);
        else
            for (f in t)
                ai(n + "[" + f + "]", t[f], r, u)
    }

    function ku(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
    }
    var k = [],
            a = k.slice,
            wi = k.concat,
            ii = k.push,
            et = k.indexOf,
            ot = {},
            nf = ot.toString,
            ri = ot.hasOwnProperty,
            tf = "".trim,
            f = {},
            u = n.document,
            bi = "2.1.0",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            rf = /^-ms-/,
            uf = /-([\da-z])/gi,
            ff = function(n, t) {
                return t.toUpperCase()
            },
            y, st, gi, nr, tr, ir, c, ei, ht, l, d, vt, si, oe, su, tt, hu, kt, cu, dt, gt, vi, ti, yi, pi, du, gu;
    i.fn = i.prototype = {
        jquery: bi,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                    t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ii,
        sort: k.sort,
        splice: k.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (e = arguments[u]))
                for (f in e)
                    r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (bi + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return null != n && n === n.window
        },
        isNumeric: function(n) {
            return n - parseFloat(n) >= 0
        },
        isPlainObject: function(n) {
            if ("object" !== i.type(n) || n.nodeType || i.isWindow(n))
                return !1;
            try {
                if (n.constructor && !ri.call(n.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[nf.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            var t, r = eval;
            n = i.trim(n);
            n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
        },
        camelCase: function(n) {
            return n.replace(rf, "ms-").replace(uf, ff)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                    f = n.length,
                    e = ui(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1)
                            break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1)
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : tf.call(n)
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ui(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ii.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : et.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; u > i; i++)
                n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
                u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                    e = n.length,
                    o = ui(n),
                    f = [];
            if (o)
                for (; e > r; r++)
                    u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n)
                    u = t(n[r], r, i), null != u && f.push(u);
            return wi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = a.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(a.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
        },
        now: Date.now,
        support: f
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ot["[object " + t + "]"] = t.toLowerCase()
    });
    y = function(n) {
        function u(n, t, i, u) {
            var w, h, c, v, k, y, d, a, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n)
                return i;
            if (1 !== (v = t.nodeType) && 9 !== v)
                return [];
            if (l && !u) {
                if (w = or.exec(n))
                    if (c = w[1]) {
                        if (9 === v) {
                            if (h = t.getElementById(c), !h || !h.parentNode)
                                return i;
                            if (h.id === c)
                                return i.push(h), i
                        } else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && et(t, h) && h.id === c)
                            return i.push(h), i
                    } else {
                        if (w[2])
                            return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((c = w[3]) && r.getElementsByClassName && t.getElementsByClassName)
                            return b.apply(i, t.getElementsByClassName(c)), i
                    }
                if (r.qsa && (!o || !o.test(n))) {
                    if (a = d = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = vt(n), (d = t.getAttribute("id")) ? a = d.replace(sr, "\\$&") : t.setAttribute("id", a), a = "[id='" + a + "'] ", k = y.length; k--; )
                            y[k] = a + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g)
                        try {
                            return b.apply(i, nt.querySelectorAll(g)), i
                        } catch (tt) {
                        } finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return vr(n.replace(lt, "$1"), t, i, u)
        }

        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function h(n) {
            return n[f] = !0, n
        }

        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--; )
                t.attrHandle[u[r]] = i
        }

        function pi(n, t) {
            var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }

        function hr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function tt(n) {
            return h(function(t) {
                return t = +t, h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }

        function wi() {
        }

        function vt(n, i) {
            var e, f, s, o, r, h, c, l = hi[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r; ) {
                (!e || (f = nr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = tr.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)
                    (f = at[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), r = r.slice(e.length));
                if (!e)
                    break
            }
            return i ? r.length : r ? u.error(n) : hi(n, h).slice(0)
        }

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++)
                i += n[t].value;
            return i
        }

        function ri(n, t, i) {
            var r = t.dir,
                    u = i && "parentNode" === r,
                    e = bi++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u)
                        return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e)
                                return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o))
                                return !0
                        }
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            } : n[0]
        }

        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
                (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function(f, e, o, s) {
                var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? k : pt(k, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                return n === s
            }, c, !0), a = ri(function(n) {
                return nt.call(s, n) > -1
            }, c, !0), e = [function(n, t, i) {
                    return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                }]; o > i; i++)
                if (u = t.relative[n[i].type])
                    e = [ri(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; o > r; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(lt, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function lr(n, i) {
            var r = i.length > 0,
                    f = n.length > 0,
                    o = function(o, s, h, c, l) {
                        var y, d, w, k = 0,
                                v = "0",
                                g = o && [],
                                p = [],
                                nt = ht,
                                tt = o || f && t.find.TAG("*", l),
                                it = a += null == nt ? 1 : Math.random() || .1,
                                rt = tt.length;
                        for (l && (ht = s !== e && s); v !== rt && null != (y = tt[v]); v++) {
                            if (f && y) {
                                for (d = 0; w = n[d++]; )
                                    if (w(y, s, h)) {
                                        c.push(y);
                                        break
                                    }
                                l && (a = it)
                            }
                            r && ((y = !w && y) && k--, o && g.push(y))
                        }
                        if (k += v, r && v !== k) {
                            for (d = 0; w = i[d++]; )
                                w(g, p, s, h);
                            if (o) {
                                if (k > 0)
                                    while (v--)
                                        g[v] || p[v] || (p[v] = di.call(c));
                                p = pt(p)
                            }
                            b.apply(c, p);
                            l && !o && p.length > 0 && k + i.length > 1 && u.uniqueSort(c)
                        }
                        return l && (a = it, ht = nt), g
                    };
            return r ? h(o) : o
        }

        function ar(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++)
                u(n, t[r], i);
            return i
        }

        function vr(n, i, u, f) {
            var s, e, o, c, a, h = vt(n);
            if (!f && 1 === h.length) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && r.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i)
                        return u;
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--; ) {
                    if (o = e[s], t.relative[c = o.type])
                        break;
                    if ((a = t.find[c]) && (f = a(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n)
                            return b.apply(u, f), u;
                        break
                    }
                }
            }
            return wt(n, h)(f, i, !l, u, gt.test(n) && ii(i.parentNode) || i), u
        }
        var it, r, t, st, oi, wt, ht, y, rt, p, e, v, l, o, g, ct, et, f = "sizzle" + -new Date,
                s = n.document,
                a = 0,
                bi = 0,
                si = ni(),
                hi = ni(),
                ci = ni(),
                bt = function(n, t) {
                    return n === t && (rt = !0), 0
                },
                ut = "undefined",
                li = -2147483648,
                ki = {}.hasOwnProperty,
                w = [],
                di = w.pop,
                gi = w.push,
                b = w.push,
                ai = w.slice,
                nt = w.indexOf || function(n) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] === n)
                            return t;
                    return -1
                },
                kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                i = "[\\x20\\t\\r\\n\\f]",
                ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = ft.replace("w", "w#"),
                yi = "\\[" + i + "*(" + ft + ")" + i + "*(?:([*^$|!~]?=)" + i + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + vi + ")|)|)" + i + "*\\]",
                dt = ":(" + ft + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + yi.replace(3, 8) + ")*)|.*)\\)|)",
                lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
                nr = new RegExp("^" + i + "*," + i + "*"),
                tr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
                ir = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
                rr = new RegExp(dt),
                ur = new RegExp("^" + vi + "$"),
                at = {
                    ID: new RegExp("^#(" + ft + ")"),
                    CLASS: new RegExp("^\\.(" + ft + ")"),
                    TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + yi),
                    PSEUDO: new RegExp("^" + dt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + kt + ")$", "i"),
                    needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
                },
        fr = /^(?:input|select|textarea|button)$/i,
                er = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                sr = /'|\\/g,
                k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
                d = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                };
        try {
            b.apply(w = ai.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch (yr) {
            b = {
                apply: w.length ? function(n, t) {
                    gi.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        r = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        p = u.setDocument = function(n) {
            var a, u = n ? n.ownerDocument || n : s,
                    h = u.defaultView;
            return u !== e && 9 === u.nodeType && u.documentElement ? (e = u, v = u.documentElement, l = !oi(u), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
                p()
            })), r.attributes = c(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), r.getElementsByTagName = c(function(n) {
                return n.appendChild(u.createComment("")), !n.getElementsByTagName("*").length
            }), r.getElementsByClassName = ot.test(u.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length
            }), r.getById = c(function(n) {
                return v.appendChild(n).id = f, !u.getElementsByName || !u.getElementsByName(f).length
            }), r.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ut && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = r.getElementsByTagName ? function(n, t) {
                if (typeof t.getElementsByTagName !== ut)
                    return t.getElementsByTagName(n)
            } : function(n, t) {
                var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = r.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== ut && l)
                    return t.getElementsByClassName(n)
            }, g = [], o = [], (r.qsa = ot.test(u.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select t=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[t^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function(n) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (r.matchesSelector = ot.test(ct = v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && c(function(n) {
                r.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                g.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), a = ot.test(v.compareDocumentPosition), et = a || ot.test(v.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }, bt = a ? function(n, t) {
                if (n === t)
                    return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !r.sortDetached && t.compareDocumentPosition(n) === i ? n === u || n.ownerDocument === s && et(s, n) ? -1 : t === u || t.ownerDocument === s && et(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1)
            } : function(n, t) {
                if (n === t)
                    return rt = !0, 0;
                var i, r = 0,
                        o = n.parentNode,
                        h = t.parentNode,
                        f = [n],
                        e = [t];
                if (!o || !h)
                    return n === u ? -1 : t === u ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                if (o === h)
                    return pi(n, t);
                for (i = n; i = i.parentNode; )
                    f.unshift(i);
                for (i = t; i = i.parentNode; )
                    e.unshift(i);
                while (f[r] === e[r])
                    r++;
                return r ? pi(f[r], e[r]) : f[r] === s ? -1 : e[r] === s ? 1 : 0
            }, u) : e
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(ir, "='$1']"), !(!r.matchesSelector || !l || g && g.test(t) || o && o.test(t)))
                try {
                    var i = ct.call(n, t);
                    if (i || r.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return i
                } catch (f) {
                }
            return u(t, e, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n), et(n, t)
        };
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
                    u = f && ki.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
            return void 0 !== u ? u : r.attributes || !l ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var u, f = [],
                    t = 0,
                    i = 0;
            if (rt = !r.detectDuplicates, y = !r.sortStable && n.slice(0), n.sort(bt), rt) {
                while (u = n[i++])
                    u === n[i] && (t = f.push(i));
                while (t--)
                    n.splice(f[t], 1)
            }
            return y = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                    u = 0,
                    t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[5] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] && void 0 !== n[4] ? n[2] = n[4] : t && rr.test(t) && (i = vt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                p = t.parentNode,
                                g = e && t.nodeName.toLowerCase(),
                                d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a)
                                l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t))
                                        break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--; )
                            u = nt.call(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = [],
                            r = [],
                            t = wt(n.replace(lt, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return ur.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === v
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return er.test(n.nodeName)
                },
                input: function(n) {
                    return fr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2)
                        n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
        radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
        })
            t.pseudos[it] = hr(it);
        for (it in {
        submit: !0,
                reset: !0
        })
            t.pseudos[it] = cr(it);
        return wi.prototype = t.filters = t.pseudos, t.setFilters = new wi, wt = u.compile = function(n, t) {
            var r, u = [],
                    e = [],
                    i = ci[n + " "];
            if (!i) {
                for (t || (t = vt(n)), r = t.length; r--; )
                    i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, lr(e, u))
            }
            return i
        }, r.sortStable = f.split("").sort(bt).join("") === f, r.detectDuplicates = !!rt, p(), r.sortDetached = c(function(n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"))
        }), c(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), r.attributes && c(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ti("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }), c(function(n) {
            return null == n.getAttribute("disabled")
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i)
                return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    var ki = i.expr.match.needsContext,
            di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ef = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, u = this.length,
                    r = [],
                    f = this;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (t = 0; u > t; t++)
                i.find(n, f[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(fi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(fi(this, n || [], !0))
        },
        is: function(n) {
            return !!fi(this, "string" == typeof n && ki.test(n) ? i(n) : n || [], !1).length
        }
    });
    gi = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    nr = i.fn.init = function(n, t) {
        var r, f;
        if (!n)
            return this;
        if ("string" == typeof n) {
            if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : gi.exec(n), !r || !r[1] && t)
                return !t || t.jquery ? (t || st).find(n) : this.constructor(t).find(n);
            if (r[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), di.test(r[1]) && i.isPlainObject(t))
                    for (r in t)
                        i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof st.ready ? st.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
    nr.prototype = i.fn;
    st = i(u);
    tr = /^(?:parents|prev(?:Until|All))/;
    ir = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                    (n = n[t]) && 9 !== n.nodeType; )
                if (1 === n.nodeType) {
                    if (f && i(n).is(r))
                        break;
                    u.push(n)
                }
            return u
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling)
                1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                    r = t.length;
            return this.filter(function() {
                for (var n = 0; r > n; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = ki.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? et.call(i(n), this[0]) : et.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return rr(n, "nextSibling")
        },
        prev: function(n) {
            return rr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (ir[n] || i.unique(f), tr.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    c = /\S+/g;
    ei = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ei[n] || of(n) : i.extend({}, n);
        var u, h, o, c, f, e, t = [],
                r = !n.once && [],
                l = function(i) {
                    for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                        if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                            u = !1;
                            break
                        }
                    o = !1;
                    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
                },
                s = {
                    add: function() {
                        if (t) {
                            var r = t.length;
                            !function e(r) {
                                i.each(r, function(r, u) {
                                    var f = i.type(u);
                                    "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                                })
                            }(arguments);
                            o ? f = t.length : u && (c = r, l(u))
                        }
                        return this
                    },
                    remove: function() {
                        return t && i.each(arguments, function(n, r) {
                            for (var u;
                                    (u = i.inArray(r, t, u)) > - 1; )
                                t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                    },
                    empty: function() {
                        return t = [], f = 0, this
                    },
                    disable: function() {
                        return t = r = u = void 0, this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return r = void 0, u || s.disable(), this
                    },
                    locked: function() {
                        return !r
                    },
                    fireWith: function(n, i) {
                        return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                ["notify", "progress", i.Callbacks("memory")]
            ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
            t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                        o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                    u = a.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? a.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++)
                    u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (ht.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready")))
        }
    });
    i.ready.promise = function(t) {
        return ht || (ht = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ct, !1), n.addEventListener("load", ct, !1))), ht.promise(t)
    };
    i.ready.promise();
    l = i.access = function(n, t, r, u, f, e, o) {
        var s = 0,
                c = n.length,
                h = null == r;
        if ("object" === i.type(r)) {
            f = !0;
            for (s in r)
                i.access(n, t, s, r[s], !0, e, o)
        } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
            return h.call(i(n), r)
        })), t))
            for (; c > s; s++)
                t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    i.acceptData = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };
    p.uid = 1;
    p.accepts = i.acceptData;
    p.prototype = {
        key: function(n) {
            if (!p.accepts(n))
                return 0;
            var r = {},
                    t = n[this.expando];
            if (!t) {
                t = p.uid++;
                try {
                    r[this.expando] = {
                        value: t
                    };
                    Object.defineProperties(n, r)
                } catch (u) {
                    r[this.expando] = t;
                    i.extend(n, r)
                }
            }
            return this.cache[t] || (this.cache[t] = {}), t
        },
        set: function(n, t, r) {
            var f, e = this.key(n),
                    u = this.cache[e];
            if ("string" == typeof t)
                u[t] = r;
            else if (i.isEmptyObject(u))
                i.extend(this.cache[e], t);
            else
                for (f in t)
                    u[f] = t[f];
            return u
        },
        get: function(n, t) {
            var i = this.cache[this.key(n)];
            return void 0 === t ? i : i[t]
        },
        access: function(n, t, r) {
            var u;
            return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t)
        },
        remove: function(n, t) {
            var u, r, f, o = this.key(n),
                    e = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else
                for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), (t in e) ? r = [t, f] : (r = f, r = (r in e) ? [r] : r.match(c) || [])), u = r.length; u--; )
                    delete e[r[u]]
        },
        hasData: function(n) {
            return !i.isEmptyObject(this.cache[n[this.expando]] || {})
        },
        discard: function(n) {
            n[this.expando] && delete this.cache[n[this.expando]]
        }
    };
    var r = new p,
            e = new p,
            sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            hf = /([A-Z])/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                    h = u && u.attributes;
            if (void 0 === n) {
                if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--; )
                        f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), ur(u, f, s[f]));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof n ? this.each(function() {
                e.set(this, n)
            }) : l(this, function(t) {
                var r, f = i.camelCase(n);
                if (u && void 0 === t) {
                    if ((r = e.get(u, n), void 0 !== r) || (r = e.get(u, f), void 0 !== r) || (r = ur(u, f, void 0), void 0 !== r))
                        return r
                } else
                    this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t);
                        -1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n)
                return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--; )
                u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            w = ["Top", "Right", "Bottom", "Left"],
            it = function(n, t) {
                return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
            },
            fr = /^(?:checkbox|radio)$/i;
    !function() {
        var t = u.createDocumentFragment(),
                n = t.appendChild(u.createElement("div"));
        n.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    d = "undefined";
    f.focusinBubbles = "onfocusin" in n;
    var cf = /^key/,
            lf = /^(?:mouse|contextmenu)|click/,
            er = /^(?:focusinfocus|focusoutblur)$/,
            or = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, h, s, l, o, k, g, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                    if (typeof i !== d && i.event.triggered !== t.type)
                        return i.event.dispatch.apply(n, arguments)
                }), t = (t || "").match(c) || [""], b = t.length; b--; )
                    w = or.exec(t[b]) || [], o = g = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                        type: o,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
            if (y && (v = y.events)) {
                for (t = (t || "").match(c) || [""], w = t.length; w--; )
                    if (h = or.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
                        for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--; )
                            s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
                    } else
                        for (o in v)
                            i.event.remove(n, o + t[w], u, f, !0);
                i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
            }
        },
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                    h = ri.call(t, "type") ? t.type : t,
                    y = ri.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !er.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, er.test(b + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                        (s = p[w++]) && !t.isPropagationStopped(); )
                    t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, s, e, u, t, h = [],
                    c = a.call(arguments),
                    l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
            if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, l), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped(); )
                    for (n.currentTarget = u.elem, s = 0;
                            (t = u.handlers[s++]) && !n.isImmediatePropagationStopped(); )
                        (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var e, u, f, o, h = [],
                    s = t.delegateCount,
                    r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r !== this; r = r.parentNode || this)
                    if (r.disabled !== !0 || "click" !== n.type) {
                        for (u = [], e = 0; s > e; e++)
                            o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var e, i, r, f = t.button;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
            }
        },
        fix: function(n) {
            if (n[i.expando])
                return n;
            var f, e, o, r = n.type,
                    s = n,
                    t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--; )
                e = o[f], n[e] = s[e];
            return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== sr() && this.focus)
                        return (this.focus(), !1)
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === sr() && this.blur)
                        return (this.blur(), !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i.nodeName(this, "input"))
                        return (this.click(), !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    };
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.getPreventDefault && n.getPreventDefault() ? at : g) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = at;
            n && n.preventDefault && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = at;
            n && n.stopPropagation && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = at;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    f.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                        f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                        f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var e, o;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in n)
                    this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1)
                u = g;
            else if (!u)
                return this;
            return 1 === f && (e = u, u = function(n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = g), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    var hr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            cr = /<([\w:]+)/,
            af = /<|&#?\w+;/,
            vf = /<(?:script|style|link)/i,
            yf = /checked\s*(?:[^=]|=\s*.checked.)/i,
            lr = /^$|\/(?:java|ecma)script/i,
            pf = /^true\/(.*)/,
            wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            h = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    i.extend({
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
            if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++)
                    df(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++)
                        vr(s[u], e[u]);
                else
                    vr(n, h);
            return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h
        },
        buildFragment: function(n, t, r, u) {
            for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
                if (f = n[c], f || 0 === f)
                    if ("object" === i.type(f))
                        i.merge(v, f.nodeType ? [f] : f);
                    else if (af.test(f)) {
                        for (e = e || s.appendChild(t.createElement("div")), y = (cr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(hr, "<$1><\/$2>") + l[2], a = l[0]; a--; )
                            e = e.lastChild;
                        i.merge(v, e.childNodes);
                        e = s.firstChild;
                        e.textContent = ""
                    } else
                        v.push(t.createTextNode(f));
            for (s.textContent = "", c = 0; f = v[c++]; )
                if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && oi(e), r))
                    for (a = 0; f = e[a++]; )
                        lr.test(f.type || "") && r.push(f);
            return s
        },
        cleanData: function(n) {
            for (var o, t, s, f, u, h, l = i.event.special, c = 0; void 0 !== (t = n[c]); c++) {
                if (i.acceptData(t) && (u = t[r.expando], u && (o = r.cache[u]))) {
                    if (s = Object.keys(o.events || {}), s.length)
                        for (h = 0; void 0 !== (f = s[h]); h++)
                            l[f] ? i.event.remove(t, f) : i.removeEvent(t, f, o.handle);
                    r.cache[u] && delete r.cache[u]
                }
                delete e.cache[t[e.expando]]
            }
        }
    });
    i.fn.extend({
        text: function(n) {
            return l(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ar(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ar(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++)
                t || 1 !== r.nodeType || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && oi(o(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++)
                1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return l(this, function(n) {
                var t = this[0] || {},
                        r = 0,
                        u = this.length;
                if (void 0 === n && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof n && !vf.test(n) && !h[(cr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(hr, "<$1><\/$2>");
                    try {
                        for (; u > r; r++)
                            t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {
                    }
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(o(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = wi.apply([], n);
            var h, v, s, c, u, y, e = 0,
                    l = this.length,
                    w = this,
                    b = l - 1,
                    a = n[0],
                    p = i.isFunction(a);
            if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a))
                return this.each(function(i) {
                    var r = w.eq(i);
                    p && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
            if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) {
                for (s = i.map(o(h, "script"), bf), c = s.length; l > e; e++)
                    u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
                if (c)
                    for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; c > e; e++)
                        u = s[e], lr.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++)
                u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    si = {};
    var wr = /^margin/,
            hi = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
            yt = function(n) {
                return n.ownerDocument.defaultView.getComputedStyle(n, null)
            };
    !function() {
        function h() {
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
            e.appendChild(r);
            var i = n.getComputedStyle(t, null);
            s = "1%" !== i.top;
            o = "4px" === i.width;
            e.removeChild(r)
        }
        var s, o, c = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                e = u.documentElement,
                r = u.createElement("div"),
                t = u.createElement("div");
        t.style.backgroundClip = "content-box";
        t.cloneNode(!0).style.backgroundClip = "";
        f.clearCloneStyle = "content-box" === t.style.backgroundClip;
        r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        r.appendChild(t);
        n.getComputedStyle && i.extend(f, {
            pixelPosition: function() {
                return h(), s
            },
            boxSizingReliable: function() {
                return null == o && h(), o
            },
            reliableMarginRight: function() {
                var f, i = t.appendChild(u.createElement("div"));
                return i.style.cssText = t.style.cssText = c, i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), t.innerHTML = "", f
            }
        })
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    };
    var gf = /^(none|table(?!-c[ea]).+)/,
            ne = new RegExp("^(" + lt + ")(.*)$", "i"),
            te = new RegExp("^([+-])=(" + lt + ")", "i"),
            ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
    kr = {
        letterSpacing: 0,
        fontWeight: 400
    },
    dr = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = rt(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, c, e, s = i.camelCase(t),
                        h = n.style;
                return t = i.cssProps[s] || (i.cssProps[s] = gr(h, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? e && "get" in e && void 0 !== (o = e.get(n, !1, u)) ? o : h[t] : (c = typeof r, "string" === c && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), c = "number"), null != r && r === r && ("number" !== c || i.cssNumber[s] || (r += "px"), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (h[t] = "inherit"), e && "set" in e && void 0 === (r = e.set(n, r, u)) || (h[t] = "", h[t] = r)), void 0)
            }
        },
        css: function(n, t, r, u) {
            var f, s, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = rt(n, t, u)), "normal" === f && t in kr && (f = kr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return 0 === n.offsetWidth && gf.test(i.css(n, "display")) ? i.swap(n, ie, function() {
                        return iu(n, t, u)
                    }) : iu(n, t, u)
            },
            set: function(n, r, u) {
                var f = u && yt(n);
                return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    i.cssHooks.marginRight = br(f.reliableMarginRight, function(n, t) {
        if (t)
            return i.swap(n, {
                display: "inline-block"
            }, rt, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        wr.test(n) || (i.cssHooks[n + t].set = nu)
    });
    i.fn.extend({
        css: function(n, t) {
            return l(this, function(n, t, r) {
                var f, e, o = {},
                        u = 0;
                if (i.isArray(t)) {
                    for (f = yt(n), e = t.length; e > u; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return ru(this, !0)
        },
        hide: function() {
            return ru(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                it(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = s.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    var nt, pt, re = /^(?:toggle|show|hide)$/,
            uu = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
            ue = /queueHooks$/,
            wt = [fe],
            ut = {
                "*": [function(n, t) {
                        var f = this.createTween(n, t),
                                s = f.cur(),
                                r = uu.exec(t),
                                e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                                u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n)),
                                o = 1,
                                h = 20;
                        if (u && u[3] !== e) {
                            e = e || u[3];
                            r = r || [];
                            u = +s || 1;
                            do
                                o = o || ".5", u /= o, i.style(f.elem, n, u + e);
                            while (o !== (o = f.cur() / s) && 1 !== o && --h)
                        }
                        return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
                    }]
            };
    i.Animation = i.extend(ou, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++)
                r = n[u], ut[r] = ut[r] || [], ut[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(it).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = ou(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                        t = null != n && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                if (t)
                    e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e)
                        e[t] && e[t].stop && ue.test(t) && f(e[t]);
                for (t = o.length; t--; )
                    o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--; )
                    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; s > t; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
                t = i.timers;
        for (nt = i.now(); n < t.length; n++)
            r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        nt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(pt);
        pt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
            var r = setTimeout(t, n);
            i.stop = function() {
                clearTimeout(r)
            }
        })
    },
            function() {
                var n = u.createElement("input"),
                        t = u.createElement("select"),
                        i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                t.disabled = !0;
                f.optDisabled = !i.disabled;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value
            }();
    tt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return l(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return typeof n.getAttribute === d ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                    f = t && t.match(c);
            if (f && 1 === n.nodeType)
                while (r = f[e++])
                    u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        }
    });
    su = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = tt[t] || i.find.attr;
        tt[t] = function(n, t, i) {
            var u, f;
            return i || (f = tt[t], tt[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, tt[t] = f), u
        }
    });
    hu = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return l(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e)
                return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1
                }
            }
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    kt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, h = "string" == typeof n && n,
                    e = 0,
                    l = this.length;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
            if (h)
                for (o = (n || "").match(c) || []; l > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : " ")) {
                        for (s = 0; u = o[s++]; )
                            r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n,
                    e = 0,
                    l = this.length;
            if (i.isFunction(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
            if (h)
                for (o = (n || "").match(c) || []; l > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(kt, " ") : "")) {
                        for (s = 0; u = o[s++]; )
                            while (r.indexOf(" " + u + " ") >= 0)
                                r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            } : function() {
                if ("string" === u)
                    for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++]; )
                        f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else
                    (u === d || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(kt, " ").indexOf(i) >= 0)
                    return !0;
            return !1
        }
    });
    cu = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
                        if (t = s[e], !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), u)
                                return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        r = f[o], (r.selected = i.inArray(i(r).val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    dt = i.now();
    gt = /\?/;
    i.parseJSON = function(n) {
        return JSON.parse(n + "")
    };
    i.parseXML = function(n) {
        var t, r;
        if (!n || "string" != typeof n)
            return null;
        try {
            r = new DOMParser;
            t = r.parseFromString(n, "text/xml")
        } catch (u) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t
    };
    var b, v, se = /#.*$/,
            lu = /([?&])_=[^&]*/,
            he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ce = /^(?:GET|HEAD)$/,
            le = /^\/\//,
            au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            vu = {},
            ci = {},
            yu = "*/".concat("*");
    try {
        v = location.href
    } catch (ge) {
        v = u.createElement("a");
        v.href = "";
        v = v.href
    }
    b = au.exec(v.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: v,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(b[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? li(li(n, i.ajaxSettings), t) : li(i.ajaxSettings, n)
        },
        ajaxPrefilter: pu(vu),
        ajaxTransport: pu(ci),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, b, y, w, c = t;
                2 !== e && (e = 2, d && clearTimeout(d), l = void 0, k = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = ae(r, u, s)), y = ve(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, b = y.error, v = !b)) : (b = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? nt.resolveWith(o, [it, c, u]) : nt.rejectWith(o, [u, c, b]), u.statusCode(p), p = void 0, a && g.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : b]), tt.fireWith(o, [u, c]), a && (g.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n, n = void 0);
            t = t || {};
            var l, f, k, y, d, s, a, h, r = i.ajaxSetup({}, t),
                    o = r.context || r,
                    g = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                    nt = i.Deferred(),
                    tt = i.Callbacks("once memory"),
                    p = r.statusCode || {},
                    it = {},
                    rt = {},
                    e = 0,
                    ut = "canceled",
                    u = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === e) {
                                if (!y)
                                    for (y = {}; t = he.exec(k); )
                                        y[t[1].toLowerCase()] = t[2];
                                t = y[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === e ? k : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return e || (r.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > e)
                                    for (t in n)
                                        p[t] = [p[t], n[t]];
                                else
                                    u.always(n[u.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ut;
                            return l && l.abort(t), w(0, t), this
                        }
                    };
            if (nt.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || v) + "").replace(se, "").replace(le, b[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (s = au.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === b[1] && s[2] === b[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (b[3] || ("http:" === b[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), 2 === e)
                return u;
            a = r.global;
            a && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !ce.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (gt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + dt++) : f + (gt.test(f) ? "&" : "?") + "_=" + dt++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
            for (h in r.headers)
                u.setRequestHeader(h, r.headers[h]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e))
                return u.abort();
            ut = "abort";
            for (h in {
            success: 1,
                    error: 1,
                    complete: 1
            })
                u[h](r[h]);
            if (l = wu(ci, r, t, u)) {
                u.readyState = 1;
                a && g.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (d = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    l.send(it, w)
                } catch (ft) {
                    if (!(2 > e))
                        throw ft;
                    w(-1, ft)
                }
            } else
                w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            } : function() {
                var t = i(this),
                        r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0
    };
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var ye = /%20/g,
            pe = /\[\]$/,
            bu = /\r?\n/g,
            we = /^(?:submit|button|image|reset|file)$/i,
            be = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
                f = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                f(this.name, this.value)
            });
        else
            for (r in n)
                ai(r, n[r], t, f);
        return u.join("&").replace(ye, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !fr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(bu, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(bu, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (n) {
        }
    };
    var ke = 0,
            ni = {},
            de = {
                0: 200,
                1223: 204
            },
    ft = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function() {
        for (var n in ni)
            ni[n]()
    }), f.cors = !!ft && "withCredentials" in ft, f.ajax = ft = !!ft, i.ajaxTransport(function(n) {
        var t;
        if (f.cors || ft && !n.crossDomain)
            return {
                send: function(i, r) {
                    var f, u = n.xhr(),
                            e = ++ke;
                    if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (f in n.xhrFields)
                            u[f] = n.xhrFields[f];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (f in i)
                        u.setRequestHeader(f, i[f]);
                    t = function(n) {
                        return function() {
                            t && (delete ni[e], t = u.onload = u.onerror = null, "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? {
                                text: u.responseText
                            } : void 0, u.getAllResponseHeaders()))
                        }
                    };
                    u.onload = t();
                    u.onerror = t("error");
                    t = ni[e] = t("abort");
                      u.send(n.hasContent && n.data || null)
                },
                abort: function() {
                    t && t()
                }
            }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        async: !0,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), vi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = vi.pop() || i.expando + "_" + dt++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return e || i.error(f + " was not called"), e[0]
            }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
                e = arguments
            }, u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback, vi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0
            }), "script")
    }), i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n)
            return null;
        "boolean" == typeof t && (r = t, t = !1);
        t = t || u;
        var f = di.exec(n),
                e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, yi = i.fn.load, i.fn.load = function(n, t, r) {
        if ("string" != typeof n && yi)
            return yi.apply(this, arguments);
        var u, o, s, f = this,
                e = n.indexOf(" ");
        return e >= 0 && (u = n.slice(e), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, s || [n.responseText, t, n])
        }), this
    }, i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, pi = n.document.documentElement, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var r, f, t = this[0],
                    u = {
                        top: 0,
                        left: 0
                    },
            e = t && t.ownerDocument;
            if (e)
                return r = e.documentElement, i.contains(r, t) ? (typeof t.getBoundingClientRect !== d && (u = t.getBoundingClientRect()), f = ku(e), {
                    top: u.top + f.pageYOffset - r.clientTop,
                    left: u.left + f.pageXOffset - r.clientLeft
                }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, u = this[0],
                        t = {
                            top: 0,
                            left: 0
                        };
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || pi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || pi
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var u = "pageYOffset" === r;
        i.fn[t] = function(i) {
            return l(this, function(t, i, f) {
                var e = ku(t);
                return void 0 === f ? e ? e[r] : t[i] : void(e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f)
            }, t, i, arguments.length, null)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = br(f.pixelPosition, function(n, r) {
            if (r)
                return (r = rt(n, t), hi.test(r) ? i(n).position()[t] + "px" : r)
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                return l(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }), i.fn.size = function() {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), du = n.jQuery, gu = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
    }, typeof t === d && (n.jQuery = n.$ = i), i
}),
        function(n) {
            function it(n, t, i) {
                switch (arguments.length) {
                    case 2:
                        return null != n ? n : t;
                    case 3:
                        return null != n ? n : null != t ? t : i;
                    default:
                        throw new Error("Implement me");
                }
            }

            function p(n, t) {
                return uf.call(n, t)
            }

            function ot() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function ri(n) {
                t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
            }

            function o(n, t) {
                var i = !0;
                return w(function() {
                    return i && (ri(n), i = !1), t.apply(this, arguments)
                }, t)
            }

            function dr(n, t) {
                br[n] || (ri(t), br[n] = !0)
            }

            function ui(n, t) {
                return function(i) {
                    return r(n.call(this, i), t)
                }
            }

            function gr(n, t) {
                return function(i) {
                    return this.localeData().ordinal(n.call(this, i), t)
                }
            }

            function nu(n, t) {
                var r, f, u = 12 * (t.year() - n.year()) + (t.month() - n.month()),
                        i = n.clone().add(u, "months");
                return 0 > t - i ? (r = n.clone().add(u - 1, "months"), f = (t - i) / (i - r)) : (r = n.clone().add(u + 1, "months"), f = (t - i) / (r - i)), -(u + f)
            }

            function tu(n, t, i) {
                var r;
                return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? (r = n.isPM(i), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
            }

            function fi() {
            }

            function rt(n, i) {
                i !== !1 && pi(n);
                ei(this, n);
                this._d = new Date(+n._d);
                ii === !1 && (ii = !0, t.updateOffset(this), ii = !1)
            }

            function st(n) {
                var i = li(n),
                        r = i.year || 0,
                        u = i.quarter || 0,
                        f = i.month || 0,
                        e = i.week || 0,
                        o = i.day || 0,
                        s = i.hour || 0,
                        h = i.minute || 0,
                        c = i.second || 0,
                        l = i.millisecond || 0;
                this._milliseconds = +l + 1e3 * c + 6e4 * h + 36e5 * s;
                this._days = +o + 7 * e;
                this._months = +f + 3 * u + 12 * r;
                this._data = {};
                this._locale = t.localeData();
                this._bubble()
            }

            function w(n, t) {
                for (var i in t)
                    p(t, i) && (n[i] = t[i]);
                return p(t, "toString") && (n.toString = t.toString), p(t, "valueOf") && (n.valueOf = t.valueOf), n
            }

            function ei(n, t) {
                var u, i, r;
                if ("undefined" != typeof t._isAMomentObject && (n._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (n._i = t._i), "undefined" != typeof t._f && (n._f = t._f), "undefined" != typeof t._l && (n._l = t._l), "undefined" != typeof t._strict && (n._strict = t._strict), "undefined" != typeof t._tzm && (n._tzm = t._tzm), "undefined" != typeof t._isUTC && (n._isUTC = t._isUTC), "undefined" != typeof t._offset && (n._offset = t._offset), "undefined" != typeof t._pf && (n._pf = t._pf), "undefined" != typeof t._locale && (n._locale = t._locale), ft.length > 0)
                    for (u in ft)
                        i = ft[u], r = t[i], "undefined" != typeof r && (n[i] = r);
                return n
            }

            function s(n) {
                return 0 > n ? Math.ceil(n) : Math.floor(n)
            }

            function r(n, t, i) {
                for (var r = "" + Math.abs(n), u = n >= 0; r.length < t; )
                    r = "0" + r;
                return (u ? i ? "+" : "" : "-") + r
            }

            function oi(n, t) {
                var i = {
                    milliseconds: 0,
                    months: 0
                };
                return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
            }

            function iu(n, t) {
                var i;
                return t = lt(t, n), n.isBefore(t) ? i = oi(n, t) : (i = oi(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i
            }

            function si(n, i) {
                return function(r, u) {
                    var f, e;
                    return null === u || isNaN(+u) || (dr(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period)."), e = r, r = u, u = e), r = "string" == typeof r ? +r : r, f = t.duration(r, u), hi(this, f, n), this
                }
            }

            function hi(n, i, r, u) {
                var o = i._milliseconds,
                        f = i._days,
                        e = i._months;
                u = null == u ? !0 : u;
                o && n._d.setTime(+n._d + o * r);
                f && rr(n, "Date", bt(n, "Date") + f * r);
                e && ir(n, bt(n, "Month") + e * r);
                u && t.updateOffset(n, f || e)
            }

            function ut(n) {
                return "[object Array]" === Object.prototype.toString.call(n)
            }

            function ht(n) {
                return "[object Date]" === Object.prototype.toString.call(n) || n instanceof Date
            }

            function ci(n, t, r) {
                for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), f = 0, u = 0; e > u; u++)
                    (r && n[u] !== t[u] || !r && i(n[u]) !== i(t[u])) && f++;
                return f + o
            }

            function f(n) {
                if (n) {
                    var t = n.toLowerCase().replace(/(.)s$/, "$1");
                    n = ne[n] || te[t] || t
                }
                return n
            }

            function li(n) {
                var i, t, r = {};
                for (t in n)
                    p(n, t) && (i = f(t), i && (r[i] = n[t]));
                return r
            }

            function ru(i) {
                var r, u;
                if (0 === i.indexOf("week"))
                    r = 7, u = "day";
                else {
                    if (0 !== i.indexOf("month"))
                        return;
                    r = 12;
                    u = "month"
                }
                t[i] = function(f, e) {
                    var o, s, c = t._locale[i],
                            h = [];
                    if ("number" == typeof f && (e = f, f = n), s = function(n) {
                        var i = t().utc().set(u, n);
                        return c.call(t._locale, i, f || "")
                    }, null != e)
                        return s(e);
                    for (o = 0; r > o; o++)
                        h.push(s(o));
                    return h
                }
            }

            function i(n) {
                var t = +n,
                        i = 0;
                return 0 !== t && isFinite(t) && (i = t >= 0 ? Math.floor(t) : Math.ceil(t)), i
            }

            function ct(n, t) {
                return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
            }

            function ai(n, i, r) {
                return b(t([n, 11, 31 + i - r]), i, r).week
            }

            function vi(n) {
                return yi(n) ? 366 : 365
            }

            function yi(n) {
                return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
            }

            function pi(n) {
                var t;
                n._a && -2 === n._pf.overflow && (t = n._a[a] < 0 || n._a[a] > 11 ? a : n._a[h] < 1 || n._a[h] > ct(n._a[l], n._a[a]) ? h : n._a[e] < 0 || n._a[e] > 24 || 24 === n._a[e] && (0 !== n._a[d] || 0 !== n._a[g] || 0 !== n._a[nt]) ? e : n._a[d] < 0 || n._a[d] > 59 ? d : n._a[g] < 0 || n._a[g] > 59 ? g : n._a[nt] < 0 || n._a[nt] > 999 ? nt : -1, n._pf._overflowDayOfYear && (l > t || t > h) && (t = h), n._pf.overflow = t)
            }

            function wi(t) {
                return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === n)), t._isValid
            }

            function bi(n) {
                return n ? n.toLowerCase().replace("_", "-") : n
            }

            function uu(n) {
                for (var i, t, f, r, u = 0; u < n.length; ) {
                    for (r = bi(n[u]).split("-"), i = r.length, t = bi(n[u + 1]), t = t ? t.split("-") : null; i > 0; ) {
                        if (f = ki(r.slice(0, i).join("-")))
                            return f;
                        if (t && t.length >= i && ci(r, t, !0) >= i - 1)
                            break;
                        i--
                    }
                    u++
                }
                return null
            }

            function ki(n) {
                var i = null;
                if (!tt[n] && sr)
                    try {
                        i = t.locale();
                        require("./locale/" + n);
                        t.locale(i)
                    } catch (r) {
                    }
                return tt[n]
            }

            function lt(n, i) {
                var r, u;
                return i._isUTC ? (r = i.clone(), u = (t.isMoment(n) || ht(n) ? +n : +t(n)) - +r, r._d.setTime(+r._d + u), t.updateOffset(r, !1), r) : t(n).local()
            }

            function fu(n) {
                return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
            }

            function eu(n) {
                for (var i = n.match(hr), t = 0, r = i.length; r > t; t++)
                    i[t] = v[i[t]] ? v[i[t]] : fu(i[t]);
                return function(u) {
                    var f = "";
                    for (t = 0; r > t; t++)
                        f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
                    return f
                }
            }

            function at(n, t) {
                return n.isValid() ? (t = di(t, n.localeData()), ti[t] || (ti[t] = eu(t)), ti[t](n)) : n.localeData().invalidDate()
            }

            function di(n, t) {
                function r(n) {
                    return t.longDateFormat(n) || n
                }
                var i = 5;
                for (et.lastIndex = 0; i >= 0 && et.test(n); )
                    n = n.replace(et, r), et.lastIndex = 0, i -= 1;
                return n
            }

            function ou(n, t) {
                var i = t._strict;
                switch (n) {
                    case "Q":
                        return lr;
                    case "DDDD":
                        return vr;
                    case "YYYY":
                    case "GGGG":
                    case "gggg":
                        return i ? wf : hf;
                    case "Y":
                    case "G":
                    case "g":
                        return kf;
                    case "YYYYYY":
                    case "YYYYY":
                    case "GGGGG":
                    case "ggggg":
                        return i ? bf : cf;
                    case "S":
                        if (i)
                            return lr;
                    case "SS":
                        if (i)
                            return ar;
                    case "SSS":
                        if (i)
                            return vr;
                    case "DDD":
                        return sf;
                    case "MMM":
                    case "MMMM":
                    case "dd":
                    case "ddd":
                    case "dddd":
                        return af;
                    case "a":
                    case "A":
                        return t._locale._meridiemParse;
                    case "x":
                        return yf;
                    case "X":
                        return pf;
                    case "Z":
                    case "ZZ":
                        return dt;
                    case "T":
                        return vf;
                    case "SSSS":
                        return lf;
                    case "MM":
                    case "DD":
                    case "YY":
                    case "GG":
                    case "gg":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "ss":
                    case "ww":
                    case "WW":
                        return i ? ar : cr;
                    case "M":
                    case "D":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "s":
                    case "w":
                    case "W":
                    case "e":
                    case "E":
                        return cr;
                    case "Do":
                        return i ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                    default:
                        return new RegExp(vu(au(n.replace("\\", "")), "i"))
                }
            }

            function vt(n) {
                n = n || "";
                var r = n.match(dt) || [],
                        f = r[r.length - 1] || [],
                        t = (f + "").match(gf) || ["-", 0, 0],
                        u = +(60 * t[1]) + i(t[2]);
                return "+" === t[0] ? u : -u
            }

            function su(n, r, u) {
                var o, f = u._a;
                switch (n) {
                    case "Q":
                        null != r && (f[a] = 3 * (i(r) - 1));
                        break;
                    case "M":
                    case "MM":
                        null != r && (f[a] = i(r) - 1);
                        break;
                    case "MMM":
                    case "MMMM":
                        o = u._locale.monthsParse(r, n, u._strict);
                        null != o ? f[a] = o : u._pf.invalidMonth = r;
                        break;
                    case "D":
                    case "DD":
                        null != r && (f[h] = i(r));
                        break;
                    case "Do":
                        null != r && (f[h] = i(parseInt(r.match(/\d{1,2}/)[0], 10)));
                        break;
                    case "DDD":
                    case "DDDD":
                        null != r && (u._dayOfYear = i(r));
                        break;
                    case "YY":
                        f[l] = t.parseTwoDigitYear(r);
                        break;
                    case "YYYY":
                    case "YYYYY":
                    case "YYYYYY":
                        f[l] = i(r);
                        break;
                    case "a":
                    case "A":
                        u._meridiem = r;
                        break;
                    case "h":
                    case "hh":
                        u._pf.bigHour = !0;
                    case "H":
                    case "HH":
                        f[e] = i(r);
                        break;
                    case "m":
                    case "mm":
                        f[d] = i(r);
                        break;
                    case "s":
                    case "ss":
                        f[g] = i(r);
                        break;
                    case "S":
                    case "SS":
                    case "SSS":
                    case "SSSS":
                        f[nt] = i(1e3 * ("0." + r));
                        break;
                    case "x":
                        u._d = new Date(i(r));
                        break;
                    case "X":
                        u._d = new Date(1e3 * parseFloat(r));
                        break;
                    case "Z":
                    case "ZZ":
                        u._useUTC = !0;
                        u._tzm = vt(r);
                        break;
                    case "dd":
                    case "ddd":
                    case "dddd":
                        o = u._locale.weekdaysParse(r);
                        null != o ? (u._w = u._w || {}, u._w.d = o) : u._pf.invalidWeekday = r;
                        break;
                    case "w":
                    case "ww":
                    case "W":
                    case "WW":
                    case "d":
                    case "e":
                    case "E":
                        n = n.substr(0, 1);
                    case "gggg":
                    case "GGGG":
                    case "GGGGG":
                        n = n.substr(0, 2);
                        r && (u._w = u._w || {}, u._w[n] = i(r));
                        break;
                    case "gg":
                    case "GG":
                        u._w = u._w || {};
                        u._w[n] = t.parseTwoDigitYear(r)
                }
            }

            function hu(n) {
                var i, o, f, u, r, e, s;
                i = n._w;
                null != i.GG || null != i.W || null != i.E ? (r = 1, e = 4, o = it(i.GG, n._a[l], b(t(), 1, 4).year), f = it(i.W, 1), u = it(i.E, 1)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = it(i.gg, n._a[l], b(t(), r, e).year), f = it(i.w, 1), null != i.d ? (u = i.d, r > u && ++f) : u = null != i.e ? i.e + r : r);
                s = tf(o, f, u, e, r);
                n._a[l] = s.year;
                n._dayOfYear = s.dayOfYear
            }

            function yt(n) {
                var t, i, r, u, f = [];
                if (!n._d) {
                    for (r = lu(n), n._w && null == n._a[h] && null == n._a[a] && hu(n), n._dayOfYear && (u = it(n._a[l], r[l]), n._dayOfYear > vi(u) && (n._pf._overflowDayOfYear = !0), i = wt(u, 0, n._dayOfYear), n._a[a] = i.getUTCMonth(), n._a[h] = i.getUTCDate()), t = 0; 3 > t && null == n._a[t]; ++t)
                        n._a[t] = f[t] = r[t];
                    for (; 7 > t; t++)
                        n._a[t] = f[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
                    24 === n._a[e] && 0 === n._a[d] && 0 === n._a[g] && 0 === n._a[nt] && (n._nextDay = !0, n._a[e] = 0);
                    n._d = (n._useUTC ? wt : ku).apply(null, f);
                    null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
                    n._nextDay && (n._a[e] = 24)
                }
            }

            function cu(n) {
                var t;
                n._d || (t = li(n._i), n._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], yt(n))
            }

            function lu(n) {
                var t = new Date;
                return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function pt(i) {
                if (i._f === t.ISO_8601)
                    return void gi(i);
                i._a = [];
                i._pf.empty = !0;
                for (var r, f, h, u = "" + i._i, l = u.length, c = 0, s = di(i._f, i._locale).match(hr) || [], o = 0; o < s.length; o++)
                    f = s[o], r = (u.match(ou(f, i)) || [])[0], r && (h = u.substr(0, u.indexOf(r)), h.length > 0 && i._pf.unusedInput.push(h), u = u.slice(u.indexOf(r) + r.length), c += r.length), v[f] ? (r ? i._pf.empty = !1 : i._pf.unusedTokens.push(f), su(f, r, i)) : i._strict && !r && i._pf.unusedTokens.push(f);
                i._pf.charsLeftOver = l - c;
                u.length > 0 && i._pf.unusedInput.push(u);
                i._pf.bigHour === !0 && i._a[e] <= 12 && (i._pf.bigHour = n);
                i._a[e] = tu(i._locale, i._a[e], i._meridiem);
                yt(i);
                pi(i)
            }

            function au(n) {
                return n.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
                    return t || i || r || u
                })
            }

            function vu(n) {
                return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function yu(n) {
                var t, f, u, r, i;
                if (0 === n._f.length)
                    return n._pf.invalidFormat = !0, void(n._d = new Date(NaN));
                for (r = 0; r < n._f.length; r++)
                    i = 0, t = ei({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._pf = ot(), t._f = n._f[r], pt(t), wi(t) && (i += t._pf.charsLeftOver, i += 10 * t._pf.unusedTokens.length, t._pf.score = i, (null == u || u > i) && (u = i, f = t));
                w(n, f || t)
            }

            function gi(n) {
                var t, i, r = n._i,
                        u = df.exec(r);
                if (u) {
                    for (n._pf.iso = !0, t = 0, i = gt.length; i > t; t++)
                        if (gt[t][1].exec(r)) {
                            n._f = gt[t][0] + (u[6] || " ");
                            break
                        }
                    for (t = 0, i = ni.length; i > t; t++)
                        if (ni[t][1].exec(r)) {
                            n._f += ni[t][0];
                            break
                        }
                    r.match(dt) && (n._f += "Z");
                    pt(n)
                } else
                    n._isValid = !1
            }

            function pu(n) {
                gi(n);
                n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n))
            }

            function wu(n, t) {
                for (var r = [], i = 0; i < n.length; ++i)
                    r.push(t(n[i], i));
                return r
            }

            function bu(i) {
                var u, r = i._i;
                r === n ? i._d = new Date : ht(r) ? i._d = new Date(+r) : null !== (u = ff.exec(r)) ? i._d = new Date(+u[1]) : "string" == typeof r ? pu(i) : ut(r) ? (i._a = wu(r.slice(0), function(n) {
                    return parseInt(n, 10)
                }), yt(i)) : "object" == typeof r ? cu(i) : "number" == typeof r ? i._d = new Date(r) : t.createFromInputFallback(i)
            }

            function ku(n, t, i, r, u, f, e) {
                var o = new Date(n, t, i, r, u, f, e);
                return 1970 > n && o.setFullYear(n), o
            }

            function wt(n) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return 1970 > n && t.setUTCFullYear(n), t
            }

            function du(n, t) {
                if ("string" == typeof n)
                    if (isNaN(n)) {
                        if (n = t.weekdaysParse(n), "number" != typeof n)
                            return null
                    } else
                        n = parseInt(n, 10);
                return n
            }

            function gu(n, t, i, r, u) {
                return u.relativeTime(t || 1, !!i, n, r)
            }

            function nf(n, i, r) {
                var u = t.duration(n).abs(),
                        c = k(u.as("s")),
                        e = k(u.as("m")),
                        o = k(u.as("h")),
                        s = k(u.as("d")),
                        h = k(u.as("M")),
                        l = k(u.as("y")),
                        f = c < y.s && ["s", c] || 1 === e && ["m"] || e < y.m && ["mm", e] || 1 === o && ["h"] || o < y.h && ["hh", o] || 1 === s && ["d"] || s < y.d && ["dd", s] || 1 === h && ["M"] || h < y.M && ["MM", h] || 1 === l && ["y"] || ["yy", l];
                return f[2] = i, f[3] = +n > 0, f[4] = r, gu.apply({}, f)
            }

            function b(n, i, r) {
                var f, e = r - i,
                        u = r - n.day();
                return u > e && (u -= 7), e - 7 > u && (u += 7), f = t(n).add(u, "d"), {
                    week: Math.ceil(f.dayOfYear() / 7),
                    year: f.year()
                }
            }

            function tf(n, t, i, r, u) {
                var o, e, f = wt(n, 0, 1).getUTCDay();
                return f = 0 === f ? 7 : f, i = null != i ? i : u, o = u - f + (f > r ? 7 : 0) - (u > f ? 7 : 0), e = 7 * (t - 1) + (i - u) + o + 1, {
                    year: e > 0 ? n : n - 1,
                    dayOfYear: e > 0 ? e : vi(n - 1) + e
                }
            }

            function nr(i) {
                var u, r = i._i,
                        f = i._f;
                return i._locale = i._locale || t.localeData(i._l), null === r || f === n && "" === r ? t.invalid({
                    nullInput: !0
                }) : ("string" == typeof r && (i._i = r = i._locale.preparse(r)), t.isMoment(r) ? new rt(r, !0) : (f ? ut(f) ? yu(i) : pt(i) : bu(i), u = new rt(i), u._nextDay && (u.add(1, "d"), u._nextDay = n), u))
            }

            function tr(n, i) {
                var u, r;
                if (1 === i.length && ut(i[0]) && (i = i[0]), !i.length)
                    return t();
                for (u = i[0], r = 1; r < i.length; ++r)
                    i[r][n](u) && (u = i[r]);
                return u
            }

            function ir(n, t) {
                var i;
                return "string" == typeof t && (t = n.localeData().monthsParse(t), "number" != typeof t) ? n : (i = Math.min(n.date(), ct(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n)
            }

            function bt(n, t) {
                return n._d["get" + (n._isUTC ? "UTC" : "") + t]()
            }

            function rr(n, t, i) {
                return "Month" === t ? ir(n, i) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
            }

            function c(n, i) {
                return function(r) {
                    return null != r ? (rr(this, n, r), t.updateOffset(this, i), this) : bt(this, n)
                }
            }

            function ur(n) {
                return 400 * n / 146097
            }

            function fr(n) {
                return 146097 * n / 400
            }

            function rf(n) {
                t.duration.fn[n] = function() {
                    return this._data[n]
                }
            }

            function er(n) {
                "undefined" == typeof ender && (or = kt.moment, kt.moment = n ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : t)
            }
            for (var t, or, u, kt = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, k = Math.round, uf = Object.prototype.hasOwnProperty, l = 0, a = 1, h = 2, e = 3, d = 4, g = 5, nt = 6, tt = {}, ft = [], sr = "undefined" != typeof module && module && module.exports, ff = /^\/?Date\((\-?\d+)/i, ef = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, of = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, hr = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, et = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cr = /\d\d?/, sf = /\d{1,3}/, hf = /\d{1,4}/, cf = /[+\-]?\d{1,6}/, lf = /\d+/, af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, dt = /Z|[\+\-]\d\d:?\d\d/gi, vf = /T/i, yf = /[\+\-]?\d+/, pf = /[\+\-]?\d+(\.\d{1,3})?/, lr = /\d/, ar = /\d\d/, vr = /\d{3}/, wf = /\d{4}/, bf = /[+-]?\d{6}/, kf = /[+-]?\d+/, df = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], ni = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], gf = /([\+\-]|\d\d)/gi, yr = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }), ne = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, te = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, ti = {}, y = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, pr = "DDD w W M D d".split(" "), wr = "M D H h m s w W".split(" "), v = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(n) {
                    return this.localeData().monthsShort(this, n)
                },
                MMMM: function(n) {
                    return this.localeData().months(this, n)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(n) {
                    return this.localeData().weekdaysMin(this, n)
                },
                ddd: function(n) {
                    return this.localeData().weekdaysShort(this, n)
                },
                dddd: function(n) {
                    return this.localeData().weekdays(this, n)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return r(this.year() % 100, 2)
                },
                YYYY: function() {
                    return r(this.year(), 4)
                },
                YYYYY: function() {
                    return r(this.year(), 5)
                },
                YYYYYY: function() {
                    var n = this.year(),
                            t = n >= 0 ? "+" : "-";
                    return t + r(Math.abs(n), 6)
                },
                gg: function() {
                    return r(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return r(this.weekYear(), 4)
                },
                ggggg: function() {
                    return r(this.weekYear(), 5)
                },
                GG: function() {
                    return r(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return r(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return r(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return i(this.milliseconds() / 100)
                },
                SS: function() {
                    return r(i(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return r(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return r(this.milliseconds(), 3)
                },
                Z: function() {
                    var n = this.utcOffset(),
                            t = "+";
                    return 0 > n && (n = -n, t = "-"), t + r(i(n / 60), 2) + ":" + r(i(n) % 60, 2)
                },
                ZZ: function() {
                    var n = this.utcOffset(),
                            t = "+";
                    return 0 > n && (n = -n, t = "-"), t + r(i(n / 60), 2) + r(i(n) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                x: function() {
                    return this.valueOf()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, br = {}, kr = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], ii = !1; pr.length; )
                u = pr.pop(), v[u + "o"] = gr(v[u], u);
            for (; wr.length; )
                u = wr.pop(), v[u + u] = ui(v[u], 2);
            for (v.DDDD = ui(v.DDD, 3), w(fi.prototype, {
            set: function(n) {
                var t;
                for (var i in n)
                    t = n[i], "function" == typeof t ? this[i] = t : this["_" + i] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
                    _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    months: function(n) {
                        return this._months[n.month()]
                    },
                    _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    monthsShort: function(n) {
                        return this._monthsShort[n.month()]
                    },
                    monthsParse: function(n, i, r) {
                        var u, f, e;
                        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), u = 0; 12 > u; u++)
                            if ((f = t.utc([2e3, u]), r && !this._longMonthsParse[u] && (this._longMonthsParse[u] = new RegExp("^" + this.months(f, "").replace(".", "") + "$", "i"), this._shortMonthsParse[u] = new RegExp("^" + this.monthsShort(f, "").replace(".", "") + "$", "i")), r || this._monthsParse[u] || (e = "^" + this.months(f, "") + "|^" + this.monthsShort(f, ""), this._monthsParse[u] = new RegExp(e.replace(".", ""), "i")), r && "MMMM" === i && this._longMonthsParse[u].test(n)) || r && "MMM" === i && this._shortMonthsParse[u].test(n) || !r && this._monthsParse[u].test(n))
                                return u
                    },
                    _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdays: function(n) {
                        return this._weekdays[n.day()]
                    },
                    _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysShort: function(n) {
                        return this._weekdaysShort[n.day()]
                    },
                    _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    weekdaysMin: function(n) {
                        return this._weekdaysMin[n.day()]
                    },
                    weekdaysParse: function(n) {
                        var i, r, u;
                        for (this._weekdaysParse || (this._weekdaysParse = []), i = 0; 7 > i; i++)
                            if (this._weekdaysParse[i] || (r = t([2e3, 1]).day(i), u = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(u.replace(".", ""), "i")), this._weekdaysParse[i].test(n))
                                return i
                    },
                    _longDateFormat: {
                    LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY LT",
                            LLLL: "dddd, MMMM D, YYYY LT"
                    },
                    longDateFormat: function(n) {
                        var t = this._longDateFormat[n];
                        return !t && this._longDateFormat[n.toUpperCase()] && (t = this._longDateFormat[n.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(n) {
                            return n.slice(1)
                        }), this._longDateFormat[n] = t), t
                    },
                    isPM: function(n) {
                        return "p" === (n + "").toLowerCase().charAt(0)
                    },
                    _meridiemParse: /[ap]\.?m?\.?/i,
                    meridiem: function(n, t, i) {
                        return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
                    },
                    _calendar: {
                    sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                    },
                    calendar: function(n, t, i) {
                        var r = this._calendar[n];
                        return "function" == typeof r ? r.apply(t, [i]) : r
                    },
                    _relativeTime: {
                    future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                    },
                    relativeTime: function(n, t, i, r) {
                        var u = this._relativeTime[i];
                        return "function" == typeof u ? u(n, t, i, r) : u.replace(/%d/i, n)
                    },
                    pastFuture: function(n, t) {
                        var i = this._relativeTime[n > 0 ? "future" : "past"];
                        return "function" == typeof i ? i(t) : i.replace(/%s/i, t)
                    },
                    ordinal: function(n) {
                        return this._ordinal.replace("%d", n)
                    },
                    _ordinal: "%d",
                    _ordinalParse: /\d{1,2}/,
                    preparse: function(n) {
                        return n
                    },
                    postformat: function(n) {
                        return n
                    },
                    week: function(n) {
                        return b(n, this._week.dow, this._week.doy).week
                    },
                    _week: {
                    dow: 0,
                            doy: 6
                    },
                    firstDayOfWeek: function() {
                        return this._week.dow
                    },
                    firstDayOfYear: function() {
                        return this._week.doy
                    },
                    _invalidDate: "Invalid date",
                    invalidDate: function() {
                        return this._invalidDate
                    }
            }), t = function(t, i, r, u) {
                var f;
                return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._i = t, f._f = i, f._l = r, f._strict = u, f._isUTC = !1, f._pf = ot(), nr(f)
            }, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) {
                n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
            }), t.min = function() {
                var n = [].slice.call(arguments, 0);
                return tr("isBefore", n)
            }, t.max = function() {
                var n = [].slice.call(arguments, 0);
                return tr("isAfter", n)
            }, t.utc = function(t, i, r, u) {
                var f;
                return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._useUTC = !0, f._isUTC = !0, f._l = r, f._i = t, f._f = i, f._strict = u, f._pf = ot(), nr(f).utc()
            }, t.unix = function(n) {
                return t(1e3 * n)
            }, t.duration = function(n, r) {
                var o, c, s, l, u = n,
                        f = null;
                return t.isDuration(n) ? u = {
                    ms: n._milliseconds,
                    d: n._days,
                    M: n._months
                } : "number" == typeof n ? (u = {}, r ? u[r] = n : u.milliseconds = n) : (f = ef.exec(n)) ? (o = "-" === f[1] ? -1 : 1, u = {
                    y: 0,
                    d: i(f[h]) * o,
                    h: i(f[e]) * o,
                    m: i(f[d]) * o,
                    s: i(f[g]) * o,
                    ms: i(f[nt]) * o
                }) : (f = of.exec(n)) ? (o = "-" === f[1] ? -1 : 1, s = function(n) {
                    var t = n && parseFloat(n.replace(",", "."));
                    return (isNaN(t) ? 0 : t) * o
                }, u = {
                    y: s(f[2]),
                    M: s(f[3]),
                    d: s(f[4]),
                    h: s(f[5]),
                    m: s(f[6]),
                    s: s(f[7]),
                    w: s(f[8])
                }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (l = iu(t(u.from), t(u.to)), u = {}, u.ms = l.milliseconds, u.M = l.months), c = new st(u), t.isDuration(n) && p(n, "_locale") && (c._locale = n._locale), c
            }, t.version = "2.9.0", t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.ISO_8601 = function() {
            }, t.momentProperties = ft, t.updateOffset = function() {
            }, t.relativeTimeThreshold = function(t, i) {
                return y[t] === n ? !1 : i === n ? y[t] : (y[t] = i, !0)
            }, t.lang = o("moment.lang is deprecated. Use moment.locale instead.", function(n, i) {
                return t.locale(n, i)
            }), t.locale = function(n, i) {
                var r;
                return n && (r = "undefined" != typeof i ? t.defineLocale(n, i) : t.localeData(n), r && (t.duration._locale = t._locale = r)), t._locale._abbr
            }, t.defineLocale = function(n, i) {
                return null !== i ? (i.abbr = n, tt[n] || (tt[n] = new fi), tt[n].set(i), t.locale(n), tt[n]) : (delete tt[n], null)
            }, t.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function(n) {
                return t.localeData(n)
            }), t.localeData = function(n) {
                var i;
                if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n)
                    return t._locale;
                if (!ut(n)) {
                    if (i = ki(n))
                        return i;
                    n = [n]
                }
                return uu(n)
            }, t.isMoment = function(n) {
                return n instanceof rt || null != n && p(n, "_isAMomentObject")
            }, t.isDuration = function(n) {
                return n instanceof st
            }, u = kr.length - 1; u >= 0; --u)
                ru(kr[u]);
            t.normalizeUnits = function(n) {
                return f(n)
            };
            t.invalid = function(n) {
                var i = t.utc(NaN);
                return null != n ? w(i._pf, n) : i._pf.userInvalidated = !0, i
            };
            t.parseZone = function() {
                return t.apply(null, arguments).parseZone()
            };
            t.parseTwoDigitYear = function(n) {
                return i(n) + (i(n) > 68 ? 1900 : 2e3)
            };
            t.isDate = ht;
            w(t.fn = rt.prototype, {
                clone: function() {
                    return t(this)
                },
                valueOf: function() {
                    return +this._d - 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var n = t(this).utc();
                    return 0 < n.year() && n.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : at(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : at(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var n = this;
                    return [n.year(), n.month(), n.date(), n.hours(), n.minutes(), n.seconds(), n.milliseconds()]
                },
                isValid: function() {
                    return wi(this)
                },
                isDSTShifted: function() {
                    return this._a ? this.isValid() && ci(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function() {
                    return w({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function(n) {
                    return this.utcOffset(0, n)
                },
                local: function(n) {
                    return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(this._dateUtcOffset(), "m")), this
                },
                format: function(n) {
                    var i = at(this, n || t.defaultFormat);
                    return this.localeData().postformat(i)
                },
                add: si(1, "add"),
                subtract: si(-1, "subtract"),
                diff: function(n, t, i) {
                    var r, u, e = lt(n, this),
                            o = 6e4 * (e.utcOffset() - this.utcOffset());
                    return t = f(t), "year" === t || "month" === t || "quarter" === t ? (u = nu(this, e), "quarter" === t ? u /= 3 : "year" === t && (u /= 12)) : (r = this - e, u = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - o) / 864e5 : "week" === t ? (r - o) / 6048e5 : r), i ? u : s(u)
                },
                from: function(n, i) {
                    return t.duration({
                        to: this,
                        from: n
                    }).locale(this.locale()).humanize(!i)
                },
                fromNow: function(n) {
                    return this.from(t(), n)
                },
                calendar: function(n) {
                    var r = n || t(),
                            u = lt(r, this).startOf("day"),
                            i = this.diff(u, "days", !0),
                            f = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
                    return this.format(this.localeData().calendar(f, this, t(r)))
                },
                isLeapYear: function() {
                    return yi(this.year())
                },
                isDST: function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                },
                day: function(n) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != n ? (n = du(n, this.localeData()), this.add(n - t, "d")) : t
                },
                month: c("Month", !0),
                startOf: function(n) {
                    switch (n = f(n)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === n ? this.weekday(0) : "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this
                },
                endOf: function(t) {
                    return t = f(t), t === n || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
                },
                isAfter: function(n, i) {
                    var r;
                    return i = f("undefined" != typeof i ? i : "millisecond"), "millisecond" === i ? (n = t.isMoment(n) ? n : t(n), +this > +n) : (r = t.isMoment(n) ? +n : +t(n), r < +this.clone().startOf(i))
                },
                isBefore: function(n, i) {
                    var r;
                    return i = f("undefined" != typeof i ? i : "millisecond"), "millisecond" === i ? (n = t.isMoment(n) ? n : t(n), +n > +this) : (r = t.isMoment(n) ? +n : +t(n), +this.clone().endOf(i) < r)
                },
                isBetween: function(n, t, i) {
                    return this.isAfter(n, i) && this.isBefore(t, i)
                },
                isSame: function(n, i) {
                    var r;
                    return i = f(i || "millisecond"), "millisecond" === i ? (n = t.isMoment(n) ? n : t(n), +this == +n) : (r = +t(n), +this.clone().startOf(i) <= r && r <= +this.clone().endOf(i))
                },
                min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(n) {
                    return n = t.apply(null, arguments), this > n ? this : n
                }),
                max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(n) {
                    return n = t.apply(null, arguments), n > this ? this : n
                }),
                zone: o("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(n, t) {
                    return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
                }),
                utcOffset: function(n, i) {
                    var r, u = this._offset || 0;
                    return null != n ? ("string" == typeof n && (n = vt(n)), Math.abs(n) < 16 && (n = 60 * n), !this._isUTC && i && (r = this._dateUtcOffset()), this._offset = n, this._isUTC = !0, null != r && this.add(r, "m"), u !== n && (!i || this._changeInProgress ? hi(this, t.duration(n - u, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? u : this._dateUtcOffset()
                },
                isLocal: function() {
                    return !this._isUTC
                },
                isUtcOffset: function() {
                    return this._isUTC
                },
                isUtc: function() {
                    return this._isUTC && 0 === this._offset
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(vt(this._i)), this
                },
                hasAlignedHourOffset: function(n) {
                    return n = n ? t(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0
                },
                daysInMonth: function() {
                    return ct(this.year(), this.month())
                },
                dayOfYear: function(n) {
                    var i = k((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                    return null == n ? i : this.add(n - i, "d")
                },
                quarter: function(n) {
                    return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
                },
                weekYear: function(n) {
                    var t = b(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                    return null == n ? t : this.add(n - t, "y")
                },
                isoWeekYear: function(n) {
                    var t = b(this, 1, 4).year;
                    return null == n ? t : this.add(n - t, "y")
                },
                week: function(n) {
                    var t = this.localeData().week(this);
                    return null == n ? t : this.add(7 * (n - t), "d")
                },
                isoWeek: function(n) {
                    var t = b(this, 1, 4).week;
                    return null == n ? t : this.add(7 * (n - t), "d")
                },
                weekday: function(n) {
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == n ? t : this.add(n - t, "d")
                },
                isoWeekday: function(n) {
                    return null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7)
                },
                isoWeeksInYear: function() {
                    return ai(this.year(), 1, 4)
                },
                weeksInYear: function() {
                    var n = this.localeData()._week;
                    return ai(this.year(), n.dow, n.doy)
                },
                get: function(n) {
                    return n = f(n), this[n]()
                },
                set: function(n, t) {
                    var i;
                    if ("object" == typeof n)
                        for (i in n)
                            this.set(i, n[i]);
                    else
                        n = f(n), "function" == typeof this[n] && this[n](t);
                    return this
                },
                locale: function(i) {
                    var r;
                    return i === n ? this._locale._abbr : (r = t.localeData(i), null != r && (this._locale = r), this)
                },
                lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                    return t === n ? this.localeData() : this.locale(t)
                }),
                localeData: function() {
                    return this._locale
                },
                _dateUtcOffset: function() {
                    return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
                }
            });
            t.fn.millisecond = t.fn.milliseconds = c("Milliseconds", !1);
            t.fn.second = t.fn.seconds = c("Seconds", !1);
            t.fn.minute = t.fn.minutes = c("Minutes", !1);
            t.fn.hour = t.fn.hours = c("Hours", !0);
            t.fn.date = c("Date", !0);
            t.fn.dates = o("dates accessor is deprecated. Use date instead.", c("Date", !0));
            t.fn.year = c("FullYear", !0);
            t.fn.years = o("years accessor is deprecated. Use year instead.", c("FullYear", !0));
            t.fn.days = t.fn.day;
            t.fn.months = t.fn.month;
            t.fn.weeks = t.fn.week;
            t.fn.isoWeeks = t.fn.isoWeek;
            t.fn.quarters = t.fn.quarter;
            t.fn.toJSON = t.fn.toISOString;
            t.fn.isUTC = t.fn.isUtc;
            w(t.duration.fn = st.prototype, {
                _bubble: function() {
                    var u, f, e, o = this._milliseconds,
                            t = this._days,
                            i = this._months,
                            n = this._data,
                            r = 0;
                    n.milliseconds = o % 1e3;
                    u = s(o / 1e3);
                    n.seconds = u % 60;
                    f = s(u / 60);
                    n.minutes = f % 60;
                    e = s(f / 60);
                    n.hours = e % 24;
                    t += s(e / 24);
                    r = s(ur(t));
                    t -= s(fr(r));
                    i += s(t / 30);
                    t %= 30;
                    r += s(i / 12);
                    i %= 12;
                    n.days = t;
                    n.months = i;
                    n.years = r
                },
                abs: function() {
                    return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
                },
                weeks: function() {
                    return s(this.days() / 7)
                },
                valueOf: function() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * i(this._months / 12)
                },
                humanize: function(n) {
                    var t = nf(this, !n, this.localeData());
                    return n && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
                },
                add: function(n, i) {
                    var r = t.duration(n, i);
                    return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
                },
                subtract: function(n, i) {
                    var r = t.duration(n, i);
                    return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
                },
                get: function(n) {
                    return n = f(n), this[n.toLowerCase() + "s"]()
                },
                as: function(n) {
                    var t, i;
                    if (n = f(n), "month" === n || "year" === n)
                        return t = this._days + this._milliseconds / 864e5, i = this._months + 12 * ur(t), "month" === n ? i : i / 12;
                    switch (t = this._days + Math.round(fr(this._months / 12)), n) {
                        case "week":
                            return t / 7 + this._milliseconds / 6048e5;
                        case "day":
                            return t + this._milliseconds / 864e5;
                        case "hour":
                            return 24 * t + this._milliseconds / 36e5;
                        case "minute":
                            return 1440 * t + this._milliseconds / 6e4;
                        case "second":
                            return 86400 * t + this._milliseconds / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + this._milliseconds;
                        default:
                            throw new Error("Unknown unit " + n);
                    }
                },
                lang: t.fn.lang,
                locale: t.fn.locale,
                toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                    return this.toISOString()
                }),
                toISOString: function() {
                    var r = Math.abs(this.years()),
                            u = Math.abs(this.months()),
                            f = Math.abs(this.days()),
                            n = Math.abs(this.hours()),
                            t = Math.abs(this.minutes()),
                            i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (u ? u + "M" : "") + (f ? f + "D" : "") + (n || t || i ? "T" : "") + (n ? n + "H" : "") + (t ? t + "M" : "") + (i ? i + "S" : "") : "P0D"
                },
                localeData: function() {
                    return this._locale
                },
                toJSON: function() {
                    return this.toISOString()
                }
            });
            t.duration.fn.toString = t.duration.fn.toISOString;
            for (u in yr)
                p(yr, u) && rf(u.toLowerCase());
            t.duration.fn.asMilliseconds = function() {
                return this.as("ms")
            };
            t.duration.fn.asSeconds = function() {
                return this.as("s")
            };
            t.duration.fn.asMinutes = function() {
                return this.as("m")
            };
            t.duration.fn.asHours = function() {
                return this.as("h")
            };
            t.duration.fn.asDays = function() {
                return this.as("d")
            };
            t.duration.fn.asWeeks = function() {
                return this.as("weeks")
            };
            t.duration.fn.asMonths = function() {
                return this.as("M")
            };
            t.duration.fn.asYears = function() {
                return this.as("y")
            };
            t.locale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(n) {
                    var t = n % 10,
                            r = 1 === i(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return n + r
                }
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("af", {
                    months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                    weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                    weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                    meridiemParse: /vm|nm/i,
                    isPM: function(n) {
                        return /^nm$/i.test(n)
                    },
                    meridiem: function(n, t, i) {
                        return 12 > n ? i ? "vm" : "VM" : i ? "nm" : "NM"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Vandag om] LT",
                        nextDay: "[Môre om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[Gister om] LT",
                        lastWeek: "[Laas] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oor %s",
                        past: "%s gelede",
                        s: "'n paar sekondes",
                        m: "'n minuut",
                        mm: "%d minute",
                        h: "'n uur",
                        hh: "%d ure",
                        d: "'n dag",
                        dd: "%d dae",
                        M: "'n maand",
                        MM: "%d maande",
                        y: "'n jaar",
                        yy: "%d jaar"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(n) {
                        return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ar-ma", {
                    months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                    weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                i = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                };
                return n.defineLocale("ar-sa", {
                    months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(n) {
                        return "م" === n
                    },
                    meridiem: function(n) {
                        return 12 > n ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    preparse: function(n) {
                        return n.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(n) {
                            return i[n]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ar-tn", {
                    months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[اليوم على الساعة] LT",
                        nextDay: "[غدا على الساعة] LT",
                        nextWeek: "dddd [على الساعة] LT",
                        lastDay: "[أمس على الساعة] LT",
                        lastWeek: "dddd [على الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "في %s",
                        past: "منذ %s",
                        s: "ثوان",
                        m: "دقيقة",
                        mm: "%d دقائق",
                        h: "ساعة",
                        hh: "%d ساعات",
                        d: "يوم",
                        dd: "%d أيام",
                        M: "شهر",
                        MM: "%d أشهر",
                        y: "سنة",
                        yy: "%d سنوات"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var u = {
                    1: "١",
                    2: "٢",
                    3: "٣",
                    4: "٤",
                    5: "٥",
                    6: "٦",
                    7: "٧",
                    8: "٨",
                    9: "٩",
                    0: "٠"
                },
                f = {
                    "١": "1",
                    "٢": "2",
                    "٣": "3",
                    "٤": "4",
                    "٥": "5",
                    "٦": "6",
                    "٧": "7",
                    "٨": "8",
                    "٩": "9",
                    "٠": "0"
                },
                i = function(n) {
                    return 0 === n ? 0 : 1 === n ? 1 : 2 === n ? 2 : n % 100 >= 3 && 10 >= n % 100 ? 3 : n % 100 >= 11 ? 4 : 5
                },
                        e = {
                            s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                            m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                            h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                            d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                            M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                            y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
                        },
                t = function(n) {
                    return function(t, r) {
                        var f = i(t),
                                u = e[n][i(t)];
                        return 2 === f && (u = u[r ? 0 : 1]), u.replace(/%d/i, t)
                    }
                },
                        r = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
                return n.defineLocale("ar", {
                    months: r,
                    monthsShort: r,
                    weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                    weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                    weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    meridiemParse: /ص|م/,
                    isPM: function(n) {
                        return "م" === n
                    },
                    meridiem: function(n) {
                        return 12 > n ? "ص" : "م"
                    },
                    calendar: {
                        sameDay: "[اليوم عند الساعة] LT",
                        nextDay: "[غدًا عند الساعة] LT",
                        nextWeek: "dddd [عند الساعة] LT",
                        lastDay: "[أمس عند الساعة] LT",
                        lastWeek: "dddd [عند الساعة] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "بعد %s",
                        past: "منذ %s",
                        s: t("s"),
                        m: t("m"),
                        mm: t("m"),
                        h: t("h"),
                        hh: t("h"),
                        d: t("d"),
                        dd: t("d"),
                        M: t("M"),
                        MM: t("M"),
                        y: t("y"),
                        yy: t("y")
                    },
                    preparse: function(n) {
                        return n.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(n) {
                            return f[n]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return u[n]
                        }).replace(/,/g, "،")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-üncü",
                    4: "-üncü",
                    100: "-üncü",
                    6: "-ncı",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-ıncı",
                    90: "-ıncı"
                };
                return n.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                    weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                    weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[sabah saat] LT",
                        nextWeek: "[gələn həftə] dddd [saat] LT",
                        lastDay: "[dünən] LT",
                        lastWeek: "[keçən həftə] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s əvvəl",
                        s: "birneçə saniyyə",
                        m: "bir dəqiqə",
                        mm: "%d dəqiqə",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    meridiemParse: /gecə|səhər|gündüz|axşam/,
                    isPM: function(n) {
                        return /^(gündüz|axşam)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "gecə" : 12 > n ? "səhər" : 17 > n ? "gündüz" : "axşam"
                    },
                    ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                    ordinal: function(n) {
                        if (0 === n)
                            return n + "-ıncı";
                        var i = n % 10,
                                r = n % 100 - i,
                                u = n >= 100 ? 100 : null;
                        return n + (t[i] || t[r] || t[u])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n, t) {
                    var i = n.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? i[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? i[1] : i[2]
                }

                function t(n, t, r) {
                    var u = {
                        mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                        hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                        dd: "дзень_дні_дзён",
                        MM: "месяц_месяцы_месяцаў",
                        yy: "год_гады_гадоў"
                    };
                    return "m" === r ? t ? "хвіліна" : "хвіліну" : "h" === r ? t ? "гадзіна" : "гадзіну" : n + " " + i(u[r], +n)
                }

                function r(n, t) {
                    var i = {
                        nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),
                        accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")
                    },
                    r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return i[r][n.month()]
                }

                function u(n, t) {
                    var i = {
                        nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                        accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")
                    },
                    r = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                    return i[r][n.day()]
                }
                return n.defineLocale("be", {
                    months: r,
                    monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                    weekdays: u,
                    weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., LT",
                        LLLL: "dddd, D MMMM YYYY г., LT"
                    },
                    calendar: {
                        sameDay: "[Сёння ў] LT",
                        nextDay: "[Заўтра ў] LT",
                        lastDay: "[Учора ў] LT",
                        nextWeek: function() {
                            return "[У] dddd [ў] LT"
                        },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[У мінулую] dddd [ў] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[У мінулы] dddd [ў] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "праз %s",
                        past: "%s таму",
                        s: "некалькі секунд",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "дзень",
                        dd: t,
                        M: "месяц",
                        MM: t,
                        y: "год",
                        yy: t
                    },
                    meridiemParse: /ночы|раніцы|дня|вечара/,
                    isPM: function(n) {
                        return /^(дня|вечара)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "ночы" : 12 > n ? "раніцы" : 17 > n ? "дня" : "вечара"
                    },
                    ordinalParse: /\d{1,2}-(і|ы|га)/,
                    ordinal: function(n, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return n % 10 != 2 && n % 10 != 3 || n % 100 == 12 || n % 100 == 13 ? n + "-ы" : n + "-і";
                            case "D":
                                return n + "-га";
                            default:
                                return n
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("bg", {
                    months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                    weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Днес в] LT",
                        nextDay: "[Утре в] LT",
                        nextWeek: "dddd [в] LT",
                        lastDay: "[Вчера в] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[В изминалата] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[В изминалия] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "след %s",
                        past: "преди %s",
                        s: "няколко секунди",
                        m: "минута",
                        mm: "%d минути",
                        h: "час",
                        hh: "%d часа",
                        d: "ден",
                        dd: "%d дни",
                        M: "месец",
                        MM: "%d месеца",
                        y: "година",
                        yy: "%d години"
                    },
                    ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(n) {
                        var t = n % 10,
                                i = n % 100;
                        return 0 === n ? n + "-ев" : 0 === i ? n + "-ен" : i > 10 && 20 > i ? n + "-ти" : 1 === t ? n + "-ви" : 2 === t ? n + "-ри" : 7 === t || 8 === t ? n + "-ми" : n + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "১",
                    2: "২",
                    3: "৩",
                    4: "৪",
                    5: "৫",
                    6: "৬",
                    7: "৭",
                    8: "৮",
                    9: "৯",
                    0: "০"
                },
                i = {
                    "১": "1",
                    "২": "2",
                    "৩": "3",
                    "৪": "4",
                    "৫": "5",
                    "৬": "6",
                    "৭": "7",
                    "৮": "8",
                    "৯": "9",
                    "০": "0"
                };
                return n.defineLocale("bn", {
                    months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                    monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
                    weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),
                    weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),
                    weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
                    longDateFormat: {
                        LT: "A h:mm সময়",
                        LTS: "A h:mm:ss সময়",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[আজ] LT",
                        nextDay: "[আগামীকাল] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[গতকাল] LT",
                        lastWeek: "[গত] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s পরে",
                        past: "%s আগে",
                        s: "কএক সেকেন্ড",
                        m: "এক মিনিট",
                        mm: "%d মিনিট",
                        h: "এক ঘন্টা",
                        hh: "%d ঘন্টা",
                        d: "এক দিন",
                        dd: "%d দিন",
                        M: "এক মাস",
                        MM: "%d মাস",
                        y: "এক বছর",
                        yy: "%d বছর"
                    },
                    preparse: function(n) {
                        return n.replace(/[১২৩৪৫৬৭৮৯০]/g, function(n) {
                            return i[n]
                        })
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        })
                    },
                    meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
                    isPM: function(n) {
                        return /^(দুপুর|বিকেল|রাত)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "রাত" : 10 > n ? "শকাল" : 17 > n ? "দুপুর" : 20 > n ? "বিকেল" : "রাত"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "༡",
                    2: "༢",
                    3: "༣",
                    4: "༤",
                    5: "༥",
                    6: "༦",
                    7: "༧",
                    8: "༨",
                    9: "༩",
                    0: "༠"
                },
                i = {
                    "༡": "1",
                    "༢": "2",
                    "༣": "3",
                    "༤": "4",
                    "༥": "5",
                    "༦": "6",
                    "༧": "7",
                    "༨": "8",
                    "༩": "9",
                    "༠": "0"
                };
                return n.defineLocale("bo", {
                    months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                    monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                    weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                    weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                    weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[དི་རིང] LT",
                        nextDay: "[སང་ཉིན] LT",
                        nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                        lastDay: "[ཁ་སང] LT",
                        lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s ལ་",
                        past: "%s སྔན་ལ",
                        s: "ལམ་སང",
                        m: "སྐར་མ་གཅིག",
                        mm: "%d སྐར་མ",
                        h: "ཆུ་ཚོད་གཅིག",
                        hh: "%d ཆུ་ཚོད",
                        d: "ཉིན་གཅིག",
                        dd: "%d ཉིན་",
                        M: "ཟླ་བ་གཅིག",
                        MM: "%d ཟླ་བ",
                        y: "ལོ་གཅིག",
                        yy: "%d ལོ"
                    },
                    preparse: function(n) {
                        return n.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(n) {
                            return i[n]
                        })
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        })
                    },
                    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                    isPM: function(n) {
                        return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "མཚན་མོ" : 10 > n ? "ཞོགས་ཀས" : 17 > n ? "ཉིན་གུང" : 20 > n ? "དགོང་དག" : "མཚན་མོ"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(t) {
                function i(n, t, i) {
                    return n + " " + f({
                        mm: "munutenn",
                        MM: "miz",
                        dd: "devezh"
                    }[i], n)
                }

                function u(n) {
                    switch (r(n)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return n + " bloaz";
                        default:
                            return n + " vloaz"
                    }
                }

                function r(n) {
                    return n > 9 ? r(n % 10) : n
                }

                function f(n, t) {
                    return 2 === t ? e(n) : n
                }

                function e(t) {
                    var i = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return i[t.charAt(0)] === n ? t : i[t.charAt(0)] + t.substring(1)
                }
                return t.defineLocale("br", {
                    months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    longDateFormat: {
                        LT: "h[e]mm A",
                        LTS: "h[e]mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [a viz] MMMM YYYY",
                        LLL: "D [a viz] MMMM YYYY LT",
                        LLLL: "dddd, D [a viz] MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hiziv da] LT",
                        nextDay: "[Warc'hoazh da] LT",
                        nextWeek: "dddd [da] LT",
                        lastDay: "[Dec'h da] LT",
                        lastWeek: "dddd [paset da] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s 'zo",
                        s: "un nebeud segondennoù",
                        m: "ur vunutenn",
                        mm: i,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: i,
                        M: "ur miz",
                        MM: i,
                        y: "ur bloaz",
                        yy: u
                    },
                    ordinalParse: /\d{1,2}(añ|vet)/,
                    ordinal: function(n) {
                        var t = 1 === n ? "añ" : "vet";
                        return n + t
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = n + " ";
                    switch (i) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return r + (1 === n ? "minuta" : 2 === n || 3 === n || 4 === n ? "minute" : "minuta");
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return r + (1 === n ? "sat" : 2 === n || 3 === n || 4 === n ? "sata" : "sati");
                        case "dd":
                            return r + (1 === n ? "dan" : "dana");
                        case "MM":
                            return r + (1 === n ? "mjesec" : 2 === n || 3 === n || 4 === n ? "mjeseca" : "mjeseci");
                        case "yy":
                            return r + (1 === n ? "godina" : 2 === n || 3 === n || 4 === n ? "godine" : "godina")
                    }
                }
                return n.defineLocale("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ca", {
                    months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextDay: function() {
                            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastDay: function() {
                            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "fa %s",
                        s: "uns segons",
                        m: "un minut",
                        mm: "%d minuts",
                        h: "una hora",
                        hh: "%d hores",
                        d: "un dia",
                        dd: "%d dies",
                        M: "un mes",
                        MM: "%d mesos",
                        y: "un any",
                        yy: "%d anys"
                    },
                    ordinalParse: /\d{1,2}(r|n|t|è|a)/,
                    ordinal: function(n, t) {
                        var i = 1 === n ? "r" : 2 === n ? "n" : 3 === n ? "r" : 4 === n ? "t" : "è";
                        return ("w" === t || "W" === t) && (i = "a"), n + i
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n) {
                    return n > 1 && 5 > n && 1 != ~~(n / 10)
                }

                function t(n, t, r, u) {
                    var f = n + " ";
                    switch (r) {
                        case "s":
                            return t || u ? "pár sekund" : "pár sekundami";
                        case "m":
                            return t ? "minuta" : u ? "minutu" : "minutou";
                        case "mm":
                            return t || u ? f + (i(n) ? "minuty" : "minut") : f + "minutami";
                        case "h":
                            return t ? "hodina" : u ? "hodinu" : "hodinou";
                        case "hh":
                            return t || u ? f + (i(n) ? "hodiny" : "hodin") : f + "hodinami";
                        case "d":
                            return t || u ? "den" : "dnem";
                        case "dd":
                            return t || u ? f + (i(n) ? "dny" : "dní") : f + "dny";
                        case "M":
                            return t || u ? "měsíc" : "měsícem";
                        case "MM":
                            return t || u ? f + (i(n) ? "měsíce" : "měsíců") : f + "měsíci";
                        case "y":
                            return t || u ? "rok" : "rokem";
                        case "yy":
                            return t || u ? f + (i(n) ? "roky" : "let") : f + "lety"
                    }
                }
                var r = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                        u = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
                return n.defineLocale("cs", {
                    months: r,
                    monthsShort: u,
                    monthsParse: function(n, t) {
                        for (var r = [], i = 0; 12 > i; i++)
                            r[i] = new RegExp("^" + n[i] + "$|^" + t[i] + "$", "i");
                        return r
                    }(r, u),
                    weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                    weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                    weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[zítra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v neděli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve středu v] LT";
                                case 4:
                                    return "[ve čtvrtek v] LT";
                                case 5:
                                    return "[v pátek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[včera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou neděli v] LT";
                                case 1:
                                case 2:
                                    return "[minulé] dddd [v] LT";
                                case 3:
                                    return "[minulou středu v] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "před %s",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("cv", {
                    months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
                    monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
                    weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
                    weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
                    weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD-MM-YYYY",
                        LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
                        LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
                        LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
                    },
                    calendar: {
                        sameDay: "[Паян] LT [сехетре]",
                        nextDay: "[Ыран] LT [сехетре]",
                        lastDay: "[Ĕнер] LT [сехетре]",
                        nextWeek: "[Çитес] dddd LT [сехетре]",
                        lastWeek: "[Иртнĕ] dddd LT [сехетре]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(n) {
                            var t = /сехет$/i.exec(n) ? "рен" : /çул$/i.exec(n) ? "тан" : "ран";
                            return n + t
                        },
                        past: "%s каялла",
                        s: "пĕр-ик çеккунт",
                        m: "пĕр минут",
                        mm: "%d минут",
                        h: "пĕр сехет",
                        hh: "%d сехет",
                        d: "пĕр кун",
                        dd: "%d кун",
                        M: "пĕр уйăх",
                        MM: "%d уйăх",
                        y: "пĕр çул",
                        yy: "%d çул"
                    },
                    ordinalParse: /\d{1,2}-мĕш/,
                    ordinal: "%d-мĕш",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("cy", {
                    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heddiw am] LT",
                        nextDay: "[Yfory am] LT",
                        nextWeek: "dddd [am] LT",
                        lastDay: "[Ddoe am] LT",
                        lastWeek: "dddd [diwethaf am] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "mewn %s",
                        past: "%s yn ôl",
                        s: "ychydig eiliadau",
                        m: "munud",
                        mm: "%d munud",
                        h: "awr",
                        hh: "%d awr",
                        d: "diwrnod",
                        dd: "%d diwrnod",
                        M: "mis",
                        MM: "%d mis",
                        y: "blwyddyn",
                        yy: "%d flynedd"
                    },
                    ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                    ordinal: function(n) {
                        var t = n,
                                i = "";
                        return t > 20 ? i = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), n + i
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("da", {
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd [d.] D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[I dag kl.] LT",
                        nextDay: "[I morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[I går kl.] LT",
                        lastWeek: "[sidste] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "få sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "et år",
                        yy: "%d år"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [n + " Tage", n + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [n + " Monate", n + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [n + " Jahre", n + " Jahren"]
                    };
                    return t ? r[i][0] : r[i][1]
                }
                return n.defineLocale("de-at", {
                    months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[Morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[Gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [n + " Tage", n + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [n + " Monate", n + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [n + " Jahre", n + " Jahren"]
                    };
                    return t ? r[i][0] : r[i][1]
                }
                return n.defineLocale("de", {
                    months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[Morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[Gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("el", {
                    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                    months: function(n, t) {
                        return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[n.month()] : this._monthsNominativeEl[n.month()]
                    },
                    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                    meridiem: function(n, t, i) {
                        return n > 11 ? i ? "μμ" : "ΜΜ" : i ? "πμ" : "ΠΜ"
                    },
                    isPM: function(n) {
                        return "μ" === (n + "").toLowerCase()[0]
                    },
                    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendarEl: {
                        sameDay: "[Σήμερα {}] LT",
                        nextDay: "[Αύριο {}] LT",
                        nextWeek: "dddd [{}] LT",
                        lastDay: "[Χθες {}] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 6:
                                    return "[το προηγούμενο] dddd [{}] LT";
                                default:
                                    return "[την προηγούμενη] dddd [{}] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    calendar: function(n, t) {
                        var i = this._calendarEl[n],
                                r = t && t.hours();
                        return "function" == typeof i && (i = i.apply(t)), i.replace("{}", r % 12 == 1 ? "στη" : "στις")
                    },
                    relativeTime: {
                        future: "σε %s",
                        past: "%s πριν",
                        s: "λίγα δευτερόλεπτα",
                        m: "ένα λεπτό",
                        mm: "%d λεπτά",
                        h: "μία ώρα",
                        hh: "%d ώρες",
                        d: "μία μέρα",
                        dd: "%d μέρες",
                        M: "ένας μήνας",
                        MM: "%d μήνες",
                        y: "ένας χρόνος",
                        yy: "%d χρόνια"
                    },
                    ordinalParse: /\d{1,2}η/,
                    ordinal: "%dη",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("en-au", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(n) {
                        var t = n % 10,
                                i = 1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return n + i
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("en-ca", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM, YYYY",
                        LLL: "D MMMM, YYYY LT",
                        LLLL: "dddd, D MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(n) {
                        var t = n % 10,
                                i = 1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return n + i
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("en-gb", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(n) {
                        var t = n % 10,
                                i = 1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                        return n + i
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("eo", {
                    months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                    weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
                    weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "D[-an de] MMMM, YYYY",
                        LLL: "D[-an de] MMMM, YYYY LT",
                        LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
                    },
                    meridiemParse: /[ap]\.t\.m/i,
                    isPM: function(n) {
                        return "p" === n.charAt(0).toLowerCase()
                    },
                    meridiem: function(n, t, i) {
                        return n > 11 ? i ? "p.t.m." : "P.T.M." : i ? "a.t.m." : "A.T.M."
                    },
                    calendar: {
                        sameDay: "[Hodiaŭ je] LT",
                        nextDay: "[Morgaŭ je] LT",
                        nextWeek: "dddd [je] LT",
                        lastDay: "[Hieraŭ je] LT",
                        lastWeek: "[pasinta] dddd [je] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "je %s",
                        past: "antaŭ %s",
                        s: "sekundoj",
                        m: "minuto",
                        mm: "%d minutoj",
                        h: "horo",
                        hh: "%d horoj",
                        d: "tago",
                        dd: "%d tagoj",
                        M: "monato",
                        MM: "%d monatoj",
                        y: "jaro",
                        yy: "%d jaroj"
                    },
                    ordinalParse: /\d{1,2}a/,
                    ordinal: "%da",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                        i = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
                return n.defineLocale("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(n, r) {
                        return /-MMM-/.test(r) ? i[n.month()] : t[n.month()]
                    },
                    weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                    weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un año",
                        yy: "%d años"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i, r) {
                    var u = {
                        s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                        m: ["ühe minuti", "üks minut"],
                        mm: [n + " minuti", n + " minutit"],
                        h: ["ühe tunni", "tund aega", "üks tund"],
                        hh: [n + " tunni", n + " tundi"],
                        d: ["ühe päeva", "üks päev"],
                        M: ["kuu aja", "kuu aega", "üks kuu"],
                        MM: [n + " kuu", n + " kuud"],
                        y: ["ühe aasta", "aasta", "üks aasta"],
                        yy: [n + " aasta", n + " aastat"]
                    };
                    return t ? u[i][2] ? u[i][2] : u[i][1] : r ? u[i][0] : u[i][1]
                }
                return n.defineLocale("et", {
                    months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                    monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Täna,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[Järgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s pärast",
                        past: "%s tagasi",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: "%d päeva",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("eu", {
                    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY[ko] MMMM[ren] D[a]",
                        LLL: "YYYY[ko] MMMM[ren] D[a] LT",
                        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
                        l: "YYYY-M-D",
                        ll: "YYYY[ko] MMM D[a]",
                        lll: "YYYY[ko] MMM D[a] LT",
                        llll: "ddd, YYYY[ko] MMM D[a] LT"
                    },
                    calendar: {
                        sameDay: "[gaur] LT[etan]",
                        nextDay: "[bihar] LT[etan]",
                        nextWeek: "dddd LT[etan]",
                        lastDay: "[atzo] LT[etan]",
                        lastWeek: "[aurreko] dddd LT[etan]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s barru",
                        past: "duela %s",
                        s: "segundo batzuk",
                        m: "minutu bat",
                        mm: "%d minutu",
                        h: "ordu bat",
                        hh: "%d ordu",
                        d: "egun bat",
                        dd: "%d egun",
                        M: "hilabete bat",
                        MM: "%d hilabete",
                        y: "urte bat",
                        yy: "%d urte"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "۱",
                    2: "۲",
                    3: "۳",
                    4: "۴",
                    5: "۵",
                    6: "۶",
                    7: "۷",
                    8: "۸",
                    9: "۹",
                    0: "۰"
                },
                i = {
                    "۱": "1",
                    "۲": "2",
                    "۳": "3",
                    "۴": "4",
                    "۵": "5",
                    "۶": "6",
                    "۷": "7",
                    "۸": "8",
                    "۹": "9",
                    "۰": "0"
                };
                return n.defineLocale("fa", {
                    months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                    weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                    weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    meridiemParse: /قبل از ظهر|بعد از ظهر/,
                    isPM: function(n) {
                        return /بعد از ظهر/.test(n)
                    },
                    meridiem: function(n) {
                        return 12 > n ? "قبل از ظهر" : "بعد از ظهر"
                    },
                    calendar: {
                        sameDay: "[امروز ساعت] LT",
                        nextDay: "[فردا ساعت] LT",
                        nextWeek: "dddd [ساعت] LT",
                        lastDay: "[دیروز ساعت] LT",
                        lastWeek: "dddd [پیش] [ساعت] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "در %s",
                        past: "%s پیش",
                        s: "چندین ثانیه",
                        m: "یک دقیقه",
                        mm: "%d دقیقه",
                        h: "یک ساعت",
                        hh: "%d ساعت",
                        d: "یک روز",
                        dd: "%d روز",
                        M: "یک ماه",
                        MM: "%d ماه",
                        y: "یک سال",
                        yy: "%d سال"
                    },
                    preparse: function(n) {
                        return n.replace(/[۰-۹]/g, function(n) {
                            return i[n]
                        }).replace(/،/g, ",")
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        }).replace(/,/g, "،")
                    },
                    ordinalParse: /\d{1,2}م/,
                    ordinal: "%dم",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i, u) {
                    var f = "";
                    switch (i) {
                        case "s":
                            return u ? "muutaman sekunnin" : "muutama sekunti";
                        case "m":
                            return u ? "minuutin" : "minuutti";
                        case "mm":
                            f = u ? "minuutin" : "minuuttia";
                            break;
                        case "h":
                            return u ? "tunnin" : "tunti";
                        case "hh":
                            f = u ? "tunnin" : "tuntia";
                            break;
                        case "d":
                            return u ? "päivän" : "päivä";
                        case "dd":
                            f = u ? "päivän" : "päivää";
                            break;
                        case "M":
                            return u ? "kuukauden" : "kuukausi";
                        case "MM":
                            f = u ? "kuukauden" : "kuukautta";
                            break;
                        case "y":
                            return u ? "vuoden" : "vuosi";
                        case "yy":
                            f = u ? "vuoden" : "vuotta"
                    }
                    return r(n, u) + " " + f
                }

                function r(n, t) {
                    return 10 > n ? t ? u[n] : i[n] : n
                }
                var i = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
                        u = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", i[7], i[8], i[9]];
                return n.defineLocale("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] LT",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] LT",
                        llll: "ddd, Do MMM YYYY, [klo] LT"
                    },
                    calendar: {
                        sameDay: "[tänään] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s päästä",
                        past: "%s sitten",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("fo", {
                    months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                    weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                    weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D. MMMM, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Í dag kl.] LT",
                        nextDay: "[Í morgin kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[Í gjár kl.] LT",
                        lastWeek: "[síðstu] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "um %s",
                        past: "%s síðani",
                        s: "fá sekund",
                        m: "ein minutt",
                        mm: "%d minuttir",
                        h: "ein tími",
                        hh: "%d tímar",
                        d: "ein dagur",
                        dd: "%d dagar",
                        M: "ein mánaði",
                        MM: "%d mánaðir",
                        y: "eitt ár",
                        yy: "%d ár"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("fr-ca", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Aujourd'hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinalParse: /\d{1,2}(er|)/,
                    ordinal: function(n) {
                        return n + (1 === n ? "er" : "")
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("fr", {
                    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Aujourd'hui à] LT",
                        nextDay: "[Demain à] LT",
                        nextWeek: "dddd [à] LT",
                        lastDay: "[Hier à] LT",
                        lastWeek: "dddd [dernier à] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinalParse: /\d{1,2}(er|)/,
                    ordinal: function(n) {
                        return n + (1 === n ? "er" : "")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                        i = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                return n.defineLocale("fy", {
                    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                    monthsShort: function(n, r) {
                        return /-MMM-/.test(r) ? i[n.month()] : t[n.month()]
                    },
                    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[hjoed om] LT",
                        nextDay: "[moarn om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[juster om] LT",
                        lastWeek: "[ôfrûne] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oer %s",
                        past: "%s lyn",
                        s: "in pear sekonden",
                        m: "ien minút",
                        mm: "%d minuten",
                        h: "ien oere",
                        hh: "%d oeren",
                        d: "ien dei",
                        dd: "%d dagen",
                        M: "ien moanne",
                        MM: "%d moannen",
                        y: "ien jier",
                        yy: "%d jierren"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(n) {
                        return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("gl", {
                    months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                    monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                    weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
                    weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
                    weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                        },
                        nextDay: function() {
                            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                        },
                        lastDay: function() {
                            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                        },
                        lastWeek: function() {
                            return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(n) {
                            return "uns segundos" === n ? "nuns segundos" : "en " + n
                        },
                        past: "hai %s",
                        s: "uns segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "unha hora",
                        hh: "%d horas",
                        d: "un día",
                        dd: "%d días",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un ano",
                        yy: "%d anos"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("he", {
                    months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                    monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                    weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                    weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                    weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [ב]MMMM YYYY",
                        LLL: "D [ב]MMMM YYYY LT",
                        LLLL: "dddd, D [ב]MMMM YYYY LT",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY LT",
                        llll: "ddd, D MMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[היום ב־]LT",
                        nextDay: "[מחר ב־]LT",
                        nextWeek: "dddd [בשעה] LT",
                        lastDay: "[אתמול ב־]LT",
                        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "בעוד %s",
                        past: "לפני %s",
                        s: "מספר שניות",
                        m: "דקה",
                        mm: "%d דקות",
                        h: "שעה",
                        hh: function(n) {
                            return 2 === n ? "שעתיים" : n + " שעות"
                        },
                        d: "יום",
                        dd: function(n) {
                            return 2 === n ? "יומיים" : n + " ימים"
                        },
                        M: "חודש",
                        MM: function(n) {
                            return 2 === n ? "חודשיים" : n + " חודשים"
                        },
                        y: "שנה",
                        yy: function(n) {
                            return 2 === n ? "שנתיים" : n % 10 == 0 && 10 !== n ? n + " שנה" : n + " שנים"
                        }
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                i = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
                return n.defineLocale("hi", {
                    months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                    monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm बजे",
                        LTS: "A h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[कल] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[कल] LT",
                        lastWeek: "[पिछले] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s में",
                        past: "%s पहले",
                        s: "कुछ ही क्षण",
                        m: "एक मिनट",
                        mm: "%d मिनट",
                        h: "एक घंटा",
                        hh: "%d घंटे",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महीने",
                        MM: "%d महीने",
                        y: "एक वर्ष",
                        yy: "%d वर्ष"
                    },
                    preparse: function(n) {
                        return n.replace(/[१२३४५६७८९०]/g, function(n) {
                            return i[n]
                        })
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        })
                    },
                    meridiemParse: /रात|सुबह|दोपहर|शाम/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "रात" === t ? 4 > n ? n : n + 12 : "सुबह" === t ? n : "दोपहर" === t ? n >= 10 ? n : n + 12 : "शाम" === t ? n + 12 : void 0
                    },
                    meridiem: function(n) {
                        return 4 > n ? "रात" : 10 > n ? "सुबह" : 17 > n ? "दोपहर" : 20 > n ? "शाम" : "रात"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = n + " ";
                    switch (i) {
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return r + (1 === n ? "minuta" : 2 === n || 3 === n || 4 === n ? "minute" : "minuta");
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return r + (1 === n ? "sat" : 2 === n || 3 === n || 4 === n ? "sata" : "sati");
                        case "dd":
                            return r + (1 === n ? "dan" : "dana");
                        case "MM":
                            return r + (1 === n ? "mjesec" : 2 === n || 3 === n || 4 === n ? "mjeseca" : "mjeseci");
                        case "yy":
                            return r + (1 === n ? "godina" : 2 === n || 3 === n || 4 === n ? "godine" : "godina")
                    }
                }
                return n.defineLocale("hr", {
                    months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                    monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[jučer u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[prošlu] dddd [u] LT";
                                case 6:
                                    return "[prošle] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prošli] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i, r) {
                    var u = n;
                    switch (i) {
                        case "s":
                            return r || t ? "néhány másodperc" : "néhány másodperce";
                        case "m":
                            return "egy" + (r || t ? " perc" : " perce");
                        case "mm":
                            return u + (r || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (r || t ? " óra" : " órája");
                        case "hh":
                            return u + (r || t ? " óra" : " órája");
                        case "d":
                            return "egy" + (r || t ? " nap" : " napja");
                        case "dd":
                            return u + (r || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (r || t ? " hónap" : " hónapja");
                        case "MM":
                            return u + (r || t ? " hónap" : " hónapja");
                        case "y":
                            return "egy" + (r || t ? " év" : " éve");
                        case "yy":
                            return u + (r || t ? " év" : " éve")
                    }
                    return ""
                }

                function i(n) {
                    return (n ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
                }
                var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
                return n.defineLocale("hu", {
                    months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                    monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                    weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D., LT",
                        LLLL: "YYYY. MMMM D., dddd LT"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(n) {
                        return "u" === n.charAt(1).toLowerCase()
                    },
                    meridiem: function(n, t, i) {
                        return 12 > n ? i === !0 ? "de" : "DE" : i === !0 ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return i.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return i.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s múlva",
                        past: "%s",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t) {
                    var i = {
                        nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
                        accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
                    },
                    r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return i[r][n.month()]
                }

                function i(n) {
                    var t = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
                    return t[n.month()]
                }

                function r(n) {
                    var t = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
                    return t[n.day()]
                }
                return n.defineLocale("hy-am", {
                    months: t,
                    monthsShort: i,
                    weekdays: r,
                    weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY թ.",
                        LLL: "D MMMM YYYY թ., LT",
                        LLLL: "dddd, D MMMM YYYY թ., LT"
                    },
                    calendar: {
                        sameDay: "[այսօր] LT",
                        nextDay: "[վաղը] LT",
                        lastDay: "[երեկ] LT",
                        nextWeek: function() {
                            return "dddd [օրը ժամը] LT"
                        },
                        lastWeek: function() {
                            return "[անցած] dddd [օրը ժամը] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s հետո",
                        past: "%s առաջ",
                        s: "մի քանի վայրկյան",
                        m: "րոպե",
                        mm: "%d րոպե",
                        h: "ժամ",
                        hh: "%d ժամ",
                        d: "օր",
                        dd: "%d օր",
                        M: "ամիս",
                        MM: "%d ամիս",
                        y: "տարի",
                        yy: "%d տարի"
                    },
                    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                    isPM: function(n) {
                        return /^(ցերեկվա|երեկոյան)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "գիշերվա" : 12 > n ? "առավոտվա" : 17 > n ? "ցերեկվա" : "երեկոյան"
                    },
                    ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                    ordinal: function(n, t) {
                        switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === n ? n + "-ին" : n + "-րդ";
                            default:
                                return n
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "LT.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    meridiemParse: /pagi|siang|sore|malam/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "pagi" === t ? n : "siang" === t ? n >= 11 ? n : n + 12 : "sore" === t || "malam" === t ? n + 12 : void 0
                    },
                    meridiem: function(n) {
                        return 11 > n ? "pagi" : 15 > n ? "siang" : 19 > n ? "sore" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Besok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kemarin pukul] LT",
                        lastWeek: "dddd [lalu pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n) {
                    return n % 100 == 11 ? !0 : n % 10 == 1 ? !1 : !0
                }

                function t(n, t, r, u) {
                    var f = n + " ";
                    switch (r) {
                        case "s":
                            return t || u ? "nokkrar sekúndur" : "nokkrum sekúndum";
                        case "m":
                            return t ? "mínúta" : "mínútu";
                        case "mm":
                            return i(n) ? f + (t || u ? "mínútur" : "mínútum") : t ? f + "mínúta" : f + "mínútu";
                        case "hh":
                            return i(n) ? f + (t || u ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
                        case "d":
                            return t ? "dagur" : u ? "dag" : "degi";
                        case "dd":
                            return i(n) ? t ? f + "dagar" : f + (u ? "daga" : "dögum") : t ? f + "dagur" : f + (u ? "dag" : "degi");
                        case "M":
                            return t ? "mánuður" : u ? "mánuð" : "mánuði";
                        case "MM":
                            return i(n) ? t ? f + "mánuðir" : f + (u ? "mánuði" : "mánuðum") : t ? f + "mánuður" : f + (u ? "mánuð" : "mánuði");
                        case "y":
                            return t || u ? "ár" : "ári";
                        case "yy":
                            return i(n) ? f + (t || u ? "ár" : "árum") : f + (t || u ? "ár" : "ári")
                    }
                }
                return n.defineLocale("is", {
                    months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                    weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                    weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                    weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] LT",
                        LLLL: "dddd, D. MMMM YYYY [kl.] LT"
                    },
                    calendar: {
                        sameDay: "[í dag kl.] LT",
                        nextDay: "[á morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[í gær kl.] LT",
                        lastWeek: "[síðasta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s síðan",
                        s: t,
                        m: t,
                        mm: t,
                        h: "klukkustund",
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                    weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                    weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(n) {
                            return (/^[0-9].+$/.test(n) ? "tra" : "in") + " " + n
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ja", {
                    months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                    weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                    weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                    longDateFormat: {
                        LT: "Ah時m分",
                        LTS: "LTs秒",
                        L: "YYYY/MM/DD",
                        LL: "YYYY年M月D日",
                        LLL: "YYYY年M月D日LT",
                        LLLL: "YYYY年M月D日LT dddd"
                    },
                    meridiemParse: /午前|午後/i,
                    isPM: function(n) {
                        return "午後" === n
                    },
                    meridiem: function(n) {
                        return 12 > n ? "午前" : "午後"
                    },
                    calendar: {
                        sameDay: "[今日] LT",
                        nextDay: "[明日] LT",
                        nextWeek: "[来週]dddd LT",
                        lastDay: "[昨日] LT",
                        lastWeek: "[前週]dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s後",
                        past: "%s前",
                        s: "数秒",
                        m: "1分",
                        mm: "%d分",
                        h: "1時間",
                        hh: "%d時間",
                        d: "1日",
                        dd: "%d日",
                        M: "1ヶ月",
                        MM: "%dヶ月",
                        y: "1年",
                        yy: "%d年"
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t) {
                    var i = {
                        nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                        accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                    },
                    r = /D[oD] *MMMM?/.test(t) ? "accusative" : "nominative";
                    return i[r][n.month()]
                }

                function i(n, t) {
                    var i = {
                        nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                        accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
                    },
                    r = /(წინა|შემდეგ)/.test(t) ? "accusative" : "nominative";
                    return i[r][n.day()]
                }
                return n.defineLocale("ka", {
                    months: t,
                    monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                    weekdays: i,
                    weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                    weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[დღეს] LT[-ზე]",
                        nextDay: "[ხვალ] LT[-ზე]",
                        lastDay: "[გუშინ] LT[-ზე]",
                        nextWeek: "[შემდეგ] dddd LT[-ზე]",
                        lastWeek: "[წინა] dddd LT-ზე",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(n) {
                            return /(წამი|წუთი|საათი|წელი)/.test(n) ? n.replace(/ი$/, "ში") : n + "ში"
                        },
                        past: function(n) {
                            return /(წამი|წუთი|საათი|დღე|თვე)/.test(n) ? n.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(n) ? n.replace(/წელი$/, "წლის წინ") : void 0
                        },
                        s: "რამდენიმე წამი",
                        m: "წუთი",
                        mm: "%d წუთი",
                        h: "საათი",
                        hh: "%d საათი",
                        d: "დღე",
                        dd: "%d დღე",
                        M: "თვე",
                        MM: "%d თვე",
                        y: "წელი",
                        yy: "%d წელი"
                    },
                    ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                    ordinal: function(n) {
                        return 0 === n ? n : 1 === n ? n + "-ლი" : 20 > n || 100 >= n && n % 20 == 0 || n % 100 == 0 ? "მე-" + n : n + "-ე"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("km", {
                    months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                    weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                    weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                    weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[ថ្ងៃនៈ ម៉ោង] LT",
                        nextDay: "[ស្អែក ម៉ោង] LT",
                        nextWeek: "dddd [ម៉ោង] LT",
                        lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                        lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sទៀត",
                        past: "%sមុន",
                        s: "ប៉ុន្មានវិនាទី",
                        m: "មួយនាទី",
                        mm: "%d នាទី",
                        h: "មួយម៉ោង",
                        hh: "%d ម៉ោង",
                        d: "មួយថ្ងៃ",
                        dd: "%d ថ្ងៃ",
                        M: "មួយខែ",
                        MM: "%d ខែ",
                        y: "មួយឆ្នាំ",
                        yy: "%d ឆ្នាំ"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ko", {
                    months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                    weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                    weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                    weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                    longDateFormat: {
                        LT: "A h시 m분",
                        LTS: "A h시 m분 s초",
                        L: "YYYY.MM.DD",
                        LL: "YYYY년 MMMM D일",
                        LLL: "YYYY년 MMMM D일 LT",
                        LLLL: "YYYY년 MMMM D일 dddd LT"
                    },
                    calendar: {
                        sameDay: "오늘 LT",
                        nextDay: "내일 LT",
                        nextWeek: "dddd LT",
                        lastDay: "어제 LT",
                        lastWeek: "지난주 dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s 후",
                        past: "%s 전",
                        s: "몇초",
                        ss: "%d초",
                        m: "일분",
                        mm: "%d분",
                        h: "한시간",
                        hh: "%d시간",
                        d: "하루",
                        dd: "%d일",
                        M: "한달",
                        MM: "%d달",
                        y: "일년",
                        yy: "%d년"
                    },
                    ordinalParse: /\d{1,2}일/,
                    ordinal: "%d일",
                    meridiemParse: /오전|오후/,
                    isPM: function(n) {
                        return "오후" === n
                    },
                    meridiem: function(n) {
                        return 12 > n ? "오전" : "오후"
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        M: ["ee Mount", "engem Mount"],
                        y: ["ee Joer", "engem Joer"]
                    };
                    return t ? r[i][0] : r[i][1]
                }

                function r(n) {
                    var t = n.substr(0, n.indexOf(" "));
                    return i(t) ? "a " + n : "an " + n
                }

                function u(n) {
                    var t = n.substr(0, n.indexOf(" "));
                    return i(t) ? "viru " + n : "virun " + n
                }

                function i(n) {
                    if (n = parseInt(n, 10), isNaN(n))
                        return !1;
                    if (0 > n)
                        return !0;
                    if (10 > n)
                        return n >= 4 && 7 >= n ? !0 : !1;
                    if (100 > n) {
                        var t = n % 10,
                                r = n / 10;
                        return i(0 === t ? r : t)
                    }
                    if (1e4 > n) {
                        for (; n >= 10; )
                            n /= 10;
                        return i(n)
                    }
                    return n /= 1e3, i(n)
                }
                return n.defineLocale("lb", {
                    months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        LTS: "H:mm:ss [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[Gëschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: {
                        future: r,
                        past: u,
                        s: "e puer Sekonnen",
                        m: t,
                        mm: "%d Minutten",
                        h: t,
                        hh: "%d Stonnen",
                        d: t,
                        dd: "%d Deeg",
                        M: t,
                        MM: "%d Méint",
                        y: t,
                        yy: "%d Joer"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function f(n, t, i, r) {
                    return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
                }

                function i(n, i, r, u) {
                    return i ? t(r)[0] : u ? t(r)[1] : t(r)[2]
                }

                function u(n) {
                    return n % 10 == 0 || n > 10 && 20 > n
                }

                function t(n) {
                    return o[n].split("_")
                }

                function r(n, r, f, e) {
                    var o = n + " ";
                    return 1 === n ? o + i(n, r, f[0], e) : r ? o + (u(n) ? t(f)[1] : t(f)[0]) : e ? o + t(f)[1] : o + (u(n) ? t(f)[1] : t(f)[2])
                }

                function e(n, t) {
                    var r = -1 === t.indexOf("dddd HH:mm"),
                            i = s[n.day()];
                    return r ? i : i.substring(0, i.length - 2) + "į"
                }
                var o = {
                    m: "minutė_minutės_minutę",
                    mm: "minutės_minučių_minutes",
                    h: "valanda_valandos_valandą",
                    hh: "valandos_valandų_valandas",
                    d: "diena_dienos_dieną",
                    dd: "dienos_dienų_dienas",
                    M: "mėnuo_mėnesio_mėnesį",
                    MM: "mėnesiai_mėnesių_mėnesius",
                    y: "metai_metų_metus",
                    yy: "metai_metų_metus"
                },
                s = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
                return n.defineLocale("lt", {
                    months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: e,
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
                    },
                    calendar: {
                        sameDay: "[Šiandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Praėjusį] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prieš %s",
                        s: f,
                        m: i,
                        mm: r,
                        h: i,
                        hh: r,
                        d: i,
                        dd: r,
                        M: i,
                        MM: r,
                        y: i,
                        yy: r
                    },
                    ordinalParse: /\d{1,2}-oji/,
                    ordinal: function(n) {
                        return n + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n, t, i) {
                    var r = n.split("_");
                    return i ? t % 10 == 1 && 11 !== t ? r[2] : r[3] : t % 10 == 1 && 11 !== t ? r[0] : r[1]
                }

                function t(n, t, u) {
                    return n + " " + i(r[u], n, t)
                }
                var r = {
                    mm: "minūti_minūtes_minūte_minūtes",
                    hh: "stundu_stundas_stunda_stundas",
                    dd: "dienu_dienas_diena_dienas",
                    MM: "mēnesi_mēnešus_mēnesis_mēneši",
                    yy: "gadu_gadus_gads_gadi"
                };
                return n.defineLocale("lv", {
                    months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, LT",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
                    },
                    calendar: {
                        sameDay: "[Šodien pulksten] LT",
                        nextDay: "[Rīt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pagājušā] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s vēlāk",
                        past: "%s agrāk",
                        s: "dažas sekundes",
                        m: "minūti",
                        mm: t,
                        h: "stundu",
                        hh: t,
                        d: "dienu",
                        dd: t,
                        M: "mēnesi",
                        MM: t,
                        y: "gadu",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("mk", {
                    months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                    monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                    weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                    weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                    weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Денес во] LT",
                        nextDay: "[Утре во] LT",
                        nextWeek: "dddd [во] LT",
                        lastDay: "[Вчера во] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[Во изминатата] dddd [во] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[Во изминатиот] dddd [во] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "после %s",
                        past: "пред %s",
                        s: "неколку секунди",
                        m: "минута",
                        mm: "%d минути",
                        h: "час",
                        hh: "%d часа",
                        d: "ден",
                        dd: "%d дена",
                        M: "месец",
                        MM: "%d месеци",
                        y: "година",
                        yy: "%d години"
                    },
                    ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                    ordinal: function(n) {
                        var t = n % 10,
                                i = n % 100;
                        return 0 === n ? n + "-ев" : 0 === i ? n + "-ен" : i > 10 && 20 > i ? n + "-ти" : 1 === t ? n + "-ви" : 2 === t ? n + "-ри" : 7 === t || 8 === t ? n + "-ми" : n + "-ти"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ml", {
                    months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                    monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                    weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                    weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                    weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -നു",
                        LTS: "A h:mm:ss -നു",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[ഇന്ന്] LT",
                        nextDay: "[നാളെ] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[ഇന്നലെ] LT",
                        lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s കഴിഞ്ഞ്",
                        past: "%s മുൻപ്",
                        s: "അൽപ നിമിഷങ്ങൾ",
                        m: "ഒരു മിനിറ്റ്",
                        mm: "%d മിനിറ്റ്",
                        h: "ഒരു മണിക്കൂർ",
                        hh: "%d മണിക്കൂർ",
                        d: "ഒരു ദിവസം",
                        dd: "%d ദിവസം",
                        M: "ഒരു മാസം",
                        MM: "%d മാസം",
                        y: "ഒരു വർഷം",
                        yy: "%d വർഷം"
                    },
                    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                    isPM: function(n) {
                        return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "രാത്രി" : 12 > n ? "രാവിലെ" : 17 > n ? "ഉച്ച കഴിഞ്ഞ്" : 20 > n ? "വൈകുന്നേരം" : "രാത്രി"
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                i = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
                return n.defineLocale("mr", {
                    months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                    weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                    weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                    weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                    longDateFormat: {
                        LT: "A h:mm वाजता",
                        LTS: "A h:mm:ss वाजता",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[उद्या] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[काल] LT",
                        lastWeek: "[मागील] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s नंतर",
                        past: "%s पूर्वी",
                        s: "सेकंद",
                        m: "एक मिनिट",
                        mm: "%d मिनिटे",
                        h: "एक तास",
                        hh: "%d तास",
                        d: "एक दिवस",
                        dd: "%d दिवस",
                        M: "एक महिना",
                        MM: "%d महिने",
                        y: "एक वर्ष",
                        yy: "%d वर्षे"
                    },
                    preparse: function(n) {
                        return n.replace(/[१२३४५६७८९०]/g, function(n) {
                            return i[n]
                        })
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        })
                    },
                    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "रात्री" === t ? 4 > n ? n : n + 12 : "सकाळी" === t ? n : "दुपारी" === t ? n >= 10 ? n : n + 12 : "सायंकाळी" === t ? n + 12 : void 0
                    },
                    meridiem: function(n) {
                        return 4 > n ? "रात्री" : 10 > n ? "सकाळी" : 17 > n ? "दुपारी" : 20 > n ? "सायंकाळी" : "रात्री"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ms-my", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "LT.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] LT",
                        LLLL: "dddd, D MMMM YYYY [pukul] LT"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "pagi" === t ? n : "tengahari" === t ? n >= 11 ? n : n + 12 : "petang" === t || "malam" === t ? n + 12 : void 0
                    },
                    meridiem: function(n) {
                        return 11 > n ? "pagi" : 15 > n ? "tengahari" : 19 > n ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "၁",
                    2: "၂",
                    3: "၃",
                    4: "၄",
                    5: "၅",
                    6: "၆",
                    7: "၇",
                    8: "၈",
                    9: "၉",
                    0: "၀"
                },
                i = {
                    "၁": "1",
                    "၂": "2",
                    "၃": "3",
                    "၄": "4",
                    "၅": "5",
                    "၆": "6",
                    "၇": "7",
                    "၈": "8",
                    "၉": "9",
                    "၀": "0"
                };
                return n.defineLocale("my", {
                    months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                    monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                    weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                    weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[ယနေ.] LT [မှာ]",
                        nextDay: "[မနက်ဖြန်] LT [မှာ]",
                        nextWeek: "dddd LT [မှာ]",
                        lastDay: "[မနေ.က] LT [မှာ]",
                        lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "လာမည့် %s မှာ",
                        past: "လွန်ခဲ့သော %s က",
                        s: "စက္ကန်.အနည်းငယ်",
                        m: "တစ်မိနစ်",
                        mm: "%d မိနစ်",
                        h: "တစ်နာရီ",
                        hh: "%d နာရီ",
                        d: "တစ်ရက်",
                        dd: "%d ရက်",
                        M: "တစ်လ",
                        MM: "%d လ",
                        y: "တစ်နှစ်",
                        yy: "%d နှစ်"
                    },
                    preparse: function(n) {
                        return n.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(n) {
                            return i[n]
                        })
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("nb", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                    weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
                    weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "H.mm",
                        LTS: "LT.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] LT",
                        LLLL: "dddd D. MMMM YYYY [kl.] LT"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[i går kl.] LT",
                        lastWeek: "[forrige] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "for %s siden",
                        s: "noen sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en måned",
                        MM: "%d måneder",
                        y: "ett år",
                        yy: "%d år"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "१",
                    2: "२",
                    3: "३",
                    4: "४",
                    5: "५",
                    6: "६",
                    7: "७",
                    8: "८",
                    9: "९",
                    0: "०"
                },
                i = {
                    "१": "1",
                    "२": "2",
                    "३": "3",
                    "४": "4",
                    "५": "5",
                    "६": "6",
                    "७": "7",
                    "८": "8",
                    "९": "9",
                    "०": "0"
                };
                return n.defineLocale("ne", {
                    months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                    monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                    weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                    weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                    weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
                    longDateFormat: {
                        LT: "Aको h:mm बजे",
                        LTS: "Aको h:mm:ss बजे",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    preparse: function(n) {
                        return n.replace(/[१२३४५६७८९०]/g, function(n) {
                            return i[n]
                        })
                    },
                    postformat: function(n) {
                        return n.replace(/\d/g, function(n) {
                            return t[n]
                        })
                    },
                    meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "राती" === t ? 3 > n ? n : n + 12 : "बिहान" === t ? n : "दिउँसो" === t ? n >= 10 ? n : n + 12 : "बेलुका" === t || "साँझ" === t ? n + 12 : void 0
                    },
                    meridiem: function(n) {
                        return 3 > n ? "राती" : 10 > n ? "बिहान" : 15 > n ? "दिउँसो" : 18 > n ? "बेलुका" : 20 > n ? "साँझ" : "राती"
                    },
                    calendar: {
                        sameDay: "[आज] LT",
                        nextDay: "[भोली] LT",
                        nextWeek: "[आउँदो] dddd[,] LT",
                        lastDay: "[हिजो] LT",
                        lastWeek: "[गएको] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%sमा",
                        past: "%s अगाडी",
                        s: "केही समय",
                        m: "एक मिनेट",
                        mm: "%d मिनेट",
                        h: "एक घण्टा",
                        hh: "%d घण्टा",
                        d: "एक दिन",
                        dd: "%d दिन",
                        M: "एक महिना",
                        MM: "%d महिना",
                        y: "एक बर्ष",
                        yy: "%d बर्ष"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                        i = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
                return n.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(n, r) {
                        return /-MMM-/.test(r) ? i[n.month()] : t[n.month()]
                    },
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "één minuut",
                        mm: "%d minuten",
                        h: "één uur",
                        hh: "%d uur",
                        d: "één dag",
                        dd: "%d dagen",
                        M: "één maand",
                        MM: "%d maanden",
                        y: "één jaar",
                        yy: "%d jaar"
                    },
                    ordinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(n) {
                        return n + (1 === n || 8 === n || n >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("nn", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                    weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                    weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[I dag klokka] LT",
                        nextDay: "[I morgon klokka] LT",
                        nextWeek: "dddd [klokka] LT",
                        lastDay: "[I går klokka] LT",
                        lastWeek: "[Føregåande] dddd [klokka] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "for %s sidan",
                        s: "nokre sekund",
                        m: "eit minutt",
                        mm: "%d minutt",
                        h: "ein time",
                        hh: "%d timar",
                        d: "ein dag",
                        dd: "%d dagar",
                        M: "ein månad",
                        MM: "%d månader",
                        y: "eit år",
                        yy: "%d år"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n) {
                    return 5 > n % 10 && n % 10 > 1 && ~~(n / 10) % 10 != 1
                }

                function t(n, t, r) {
                    var u = n + " ";
                    switch (r) {
                        case "m":
                            return t ? "minuta" : "minutę";
                        case "mm":
                            return u + (i(n) ? "minuty" : "minut");
                        case "h":
                            return t ? "godzina" : "godzinę";
                        case "hh":
                            return u + (i(n) ? "godziny" : "godzin");
                        case "MM":
                            return u + (i(n) ? "miesiące" : "miesięcy");
                        case "yy":
                            return u + (i(n) ? "lata" : "lat")
                    }
                }
                var r = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                        u = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
                return n.defineLocale("pl", {
                    months: function(n, t) {
                        return /D MMMM/.test(t) ? u[n.month()] : r[n.month()]
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                    weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                    weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                    weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Dziś o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: "[W] dddd [o] LT",
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zeszłą niedzielę o] LT";
                                case 3:
                                    return "[W zeszłą środę o] LT";
                                case 6:
                                    return "[W zeszłą sobotę o] LT";
                                default:
                                    return "[W zeszły] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "1 dzień",
                        dd: "%d dni",
                        M: "miesiąc",
                        MM: t,
                        y: "rok",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("pt-br", {
                    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                    weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [às] LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT"
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "%s atrás",
                        s: "segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº"
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("pt", {
                    months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                    weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY LT",
                        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hoje às] LT",
                        nextDay: "[Amanhã às] LT",
                        nextWeek: "dddd [às] LT",
                        lastDay: "[Ontem às] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "há %s",
                        s: "segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um mês",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    ordinalParse: /\d{1,2}º/,
                    ordinal: "%dº",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = " ";
                    return (n % 100 >= 20 || n >= 100 && n % 100 == 0) && (r = " de "), n + r + {
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    }[i]
                }
                return n.defineLocale("ro", {
                    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                    monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                    weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[azi la] LT",
                        nextDay: "[mâine la] LT",
                        nextWeek: "dddd [la] LT",
                        lastDay: "[ieri la] LT",
                        lastWeek: "[fosta] dddd [la] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "%s în urmă",
                        s: "câteva secunde",
                        m: "un minut",
                        mm: t,
                        h: "o oră",
                        hh: t,
                        d: "o zi",
                        dd: t,
                        M: "o lună",
                        MM: t,
                        y: "un an",
                        yy: t
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n, t) {
                    var i = n.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? i[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? i[1] : i[2]
                }

                function t(n, t, r) {
                    var u = {
                        mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                        hh: "час_часа_часов",
                        dd: "день_дня_дней",
                        MM: "месяц_месяца_месяцев",
                        yy: "год_года_лет"
                    };
                    return "m" === r ? t ? "минута" : "минуту" : n + " " + i(u[r], +n)
                }

                function r(n, t) {
                    var i = {
                        nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                        accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
                    },
                    r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return i[r][n.month()]
                }

                function u(n, t) {
                    var i = {
                        nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                        accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
                    },
                    r = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
                    return i[r][n.month()]
                }

                function f(n, t) {
                    var i = {
                        nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                        accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
                    },
                    r = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
                    return i[r][n.day()]
                }
                return n.defineLocale("ru", {
                    months: r,
                    monthsShort: u,
                    weekdays: f,
                    weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                    monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY г.",
                        LLL: "D MMMM YYYY г., LT",
                        LLLL: "dddd, D MMMM YYYY г., LT"
                    },
                    calendar: {
                        sameDay: "[Сегодня в] LT",
                        nextDay: "[Завтра в] LT",
                        lastDay: "[Вчера в] LT",
                        nextWeek: function() {
                            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
                        },
                        lastWeek: function(n) {
                            if (n.week() === this.week())
                                return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[В прошлое] dddd [в] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[В прошлый] dddd [в] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[В прошлую] dddd [в] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "через %s",
                        past: "%s назад",
                        s: "несколько секунд",
                        m: t,
                        mm: t,
                        h: "час",
                        hh: t,
                        d: "день",
                        dd: t,
                        M: "месяц",
                        MM: t,
                        y: "год",
                        yy: t
                    },
                    meridiemParse: /ночи|утра|дня|вечера/i,
                    isPM: function(n) {
                        return /^(дня|вечера)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "ночи" : 12 > n ? "утра" : 17 > n ? "дня" : "вечера"
                    },
                    ordinalParse: /\d{1,2}-(й|го|я)/,
                    ordinal: function(n, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return n + "-й";
                            case "D":
                                return n + "-го";
                            case "w":
                            case "W":
                                return n + "-я";
                            default:
                                return n
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function i(n) {
                    return n > 1 && 5 > n
                }

                function t(n, t, r, u) {
                    var f = n + " ";
                    switch (r) {
                        case "s":
                            return t || u ? "pár sekúnd" : "pár sekundami";
                        case "m":
                            return t ? "minúta" : u ? "minútu" : "minútou";
                        case "mm":
                            return t || u ? f + (i(n) ? "minúty" : "minút") : f + "minútami";
                        case "h":
                            return t ? "hodina" : u ? "hodinu" : "hodinou";
                        case "hh":
                            return t || u ? f + (i(n) ? "hodiny" : "hodín") : f + "hodinami";
                        case "d":
                            return t || u ? "deň" : "dňom";
                        case "dd":
                            return t || u ? f + (i(n) ? "dni" : "dní") : f + "dňami";
                        case "M":
                            return t || u ? "mesiac" : "mesiacom";
                        case "MM":
                            return t || u ? f + (i(n) ? "mesiace" : "mesiacov") : f + "mesiacmi";
                        case "y":
                            return t || u ? "rok" : "rokom";
                        case "yy":
                            return t || u ? f + (i(n) ? "roky" : "rokov") : f + "rokmi"
                    }
                }
                var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
                        u = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
                return n.defineLocale("sk", {
                    months: r,
                    monthsShort: u,
                    monthsParse: function(n, t) {
                        for (var r = [], i = 0; 12 > i; i++)
                            r[i] = new RegExp("^" + n[i] + "$|^" + t[i] + "$", "i");
                        return r
                    }(r, u),
                    weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo štvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[včera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulú nedeľu o] LT";
                                case 1:
                                case 2:
                                    return "[minulý] dddd [o] LT";
                                case 3:
                                    return "[minulú stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minulý] dddd [o] LT";
                                case 6:
                                    return "[minulú sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function t(n, t, i) {
                    var r = n + " ";
                    switch (i) {
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return r + (1 === n ? "minuta" : 2 === n ? "minuti" : 3 === n || 4 === n ? "minute" : "minut");
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return r + (1 === n ? "ura" : 2 === n ? "uri" : 3 === n || 4 === n ? "ure" : "ur");
                        case "dd":
                            return r + (1 === n ? "dan" : "dni");
                        case "MM":
                            return r + (1 === n ? "mesec" : 2 === n ? "meseca" : 3 === n || 4 === n ? "mesece" : "mesecev");
                        case "yy":
                            return r + (1 === n ? "leto" : 2 === n ? "leti" : 3 === n || 4 === n ? "leta" : "let")
                    }
                }
                return n.defineLocale("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[včeraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[prejšnja] dddd [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prejšnji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "čez %s",
                        past: "%s nazaj",
                        s: "nekaj sekund",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "en dan",
                        dd: t,
                        M: "en mesec",
                        MM: t,
                        y: "eno leto",
                        yy: t
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("sq", {
                    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                    weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                    weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                    weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                    meridiemParse: /PD|MD/,
                    isPM: function(n) {
                        return "M" === n.charAt(0)
                    },
                    meridiem: function(n) {
                        return 12 > n ? "PD" : "MD"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Sot në] LT",
                        nextDay: "[Nesër në] LT",
                        nextWeek: "dddd [në] LT",
                        lastDay: "[Dje në] LT",
                        lastWeek: "dddd [e kaluar në] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "në %s",
                        past: "%s më parë",
                        s: "disa sekonda",
                        m: "një minutë",
                        mm: "%d minuta",
                        h: "një orë",
                        hh: "%d orë",
                        d: "një ditë",
                        dd: "%d ditë",
                        M: "një muaj",
                        MM: "%d muaj",
                        y: "një vit",
                        yy: "%d vite"
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    words: {
                        m: ["један минут", "једне минуте"],
                        mm: ["минут", "минуте", "минута"],
                        h: ["један сат", "једног сата"],
                        hh: ["сат", "сата", "сати"],
                        dd: ["дан", "дана", "дана"],
                        MM: ["месец", "месеца", "месеци"],
                        yy: ["година", "године", "година"]
                    },
                    correctGrammaticalCase: function(n, t) {
                        return 1 === n ? t[0] : n >= 2 && 4 >= n ? t[1] : t[2]
                    },
                    translate: function(n, i, r) {
                        var u = t.words[r];
                        return 1 === r.length ? i ? u[0] : u[1] : n + " " + t.correctGrammaticalCase(n, u)
                    }
                };
                return n.defineLocale("sr-cyrl", {
                    months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                    monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
                    weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
                    weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
                    weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[данас у] LT",
                        nextDay: "[сутра у] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[у] [недељу] [у] LT";
                                case 3:
                                    return "[у] [среду] [у] LT";
                                case 6:
                                    return "[у] [суботу] [у] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[у] dddd [у] LT"
                            }
                        },
                        lastDay: "[јуче у] LT",
                        lastWeek: function() {
                            return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "пре %s",
                        s: "неколико секунди",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "дан",
                        dd: t.translate,
                        M: "месец",
                        MM: t.translate,
                        y: "годину",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    words: {
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(n, t) {
                        return 1 === n ? t[0] : n >= 2 && 4 >= n ? t[1] : t[2]
                    },
                    translate: function(n, i, r) {
                        var u = t.words[r];
                        return 1 === r.length ? i ? u[0] : u[1] : n + " " + t.correctGrammaticalCase(n, u)
                    }
                };
                return n.defineLocale("sr", {
                    months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
                    monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
                    weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
                    weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
                    weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "LT:ss",
                        L: "DD. MM. YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY LT",
                        LLLL: "dddd, D. MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[juče u] LT",
                        lastWeek: function() {
                            return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    ordinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("sv", {
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                    weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                    weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Idag] LT",
                        nextDay: "[Imorgon] LT",
                        lastDay: "[Igår] LT",
                        nextWeek: "dddd LT",
                        lastWeek: "[Förra] dddd[en] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "för %s sedan",
                        s: "några sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en månad",
                        MM: "%d månader",
                        y: "ett år",
                        yy: "%d år"
                    },
                    ordinalParse: /\d{1,2}(e|a)/,
                    ordinal: function(n) {
                        var t = n % 10,
                                i = 1 == ~~(n % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                        return n + i
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("ta", {
                    months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                    weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                    weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                    weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, LT",
                        LLLL: "dddd, D MMMM YYYY, LT"
                    },
                    calendar: {
                        sameDay: "[இன்று] LT",
                        nextDay: "[நாளை] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[நேற்று] LT",
                        lastWeek: "[கடந்த வாரம்] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s இல்",
                        past: "%s முன்",
                        s: "ஒரு சில விநாடிகள்",
                        m: "ஒரு நிமிடம்",
                        mm: "%d நிமிடங்கள்",
                        h: "ஒரு மணி நேரம்",
                        hh: "%d மணி நேரம்",
                        d: "ஒரு நாள்",
                        dd: "%d நாட்கள்",
                        M: "ஒரு மாதம்",
                        MM: "%d மாதங்கள்",
                        y: "ஒரு வருடம்",
                        yy: "%d ஆண்டுகள்"
                    },
                    ordinalParse: /\d{1,2}வது/,
                    ordinal: function(n) {
                        return n + "வது"
                    },
                    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                    meridiem: function(n) {
                        return 2 > n ? " யாமம்" : 6 > n ? " வைகறை" : 10 > n ? " காலை" : 14 > n ? " நண்பகல்" : 18 > n ? " எற்பாடு" : 22 > n ? " மாலை" : " யாமம்"
                    },
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "யாமம்" === t ? 2 > n ? n : n + 12 : "வைகறை" === t || "காலை" === t ? n : "நண்பகல்" === t && n >= 10 ? n : n + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("th", {
                    months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                    monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
                    weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                    weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                    weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                    longDateFormat: {
                        LT: "H นาฬิกา m นาที",
                        LTS: "LT s วินาที",
                        L: "YYYY/MM/DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY เวลา LT",
                        LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
                    },
                    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                    isPM: function(n) {
                        return "หลังเที่ยง" === n
                    },
                    meridiem: function(n) {
                        return 12 > n ? "ก่อนเที่ยง" : "หลังเที่ยง"
                    },
                    calendar: {
                        sameDay: "[วันนี้ เวลา] LT",
                        nextDay: "[พรุ่งนี้ เวลา] LT",
                        nextWeek: "dddd[หน้า เวลา] LT",
                        lastDay: "[เมื่อวานนี้ เวลา] LT",
                        lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "อีก %s",
                        past: "%sที่แล้ว",
                        s: "ไม่กี่วินาที",
                        m: "1 นาที",
                        mm: "%d นาที",
                        h: "1 ชั่วโมง",
                        hh: "%d ชั่วโมง",
                        d: "1 วัน",
                        dd: "%d วัน",
                        M: "1 เดือน",
                        MM: "%d เดือน",
                        y: "1 ปี",
                        yy: "%d ปี"
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("tl-ph", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY LT",
                        LLLL: "dddd, MMMM DD, YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Ngayon sa] LT",
                        nextDay: "[Bukas sa] LT",
                        nextWeek: "dddd [sa] LT",
                        lastDay: "[Kahapon sa] LT",
                        lastWeek: "dddd [huling linggo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
                    },
                    ordinalParse: /\d{1,2}/,
                    ordinal: function(n) {
                        return n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                return n.defineLocale("tr", {
                    months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                    monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd, D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[bugün saat] LT",
                        nextDay: "[yarın saat] LT",
                        nextWeek: "[haftaya] dddd [saat] LT",
                        lastDay: "[dün] LT",
                        lastWeek: "[geçen hafta] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s önce",
                        s: "birkaç saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir gün",
                        dd: "%d gün",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir yıl",
                        yy: "%d yıl"
                    },
                    ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                    ordinal: function(n) {
                        if (0 === n)
                            return n + "'ıncı";
                        var i = n % 10,
                                r = n % 100 - i,
                                u = n >= 100 ? 100 : null;
                        return n + (t[i] || t[r] || t[u])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("tzm-latn", {
                    months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[asdkh g] LT",
                        nextDay: "[aska g] LT",
                        nextWeek: "dddd [g] LT",
                        lastDay: "[assant g] LT",
                        lastWeek: "dddd [g] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dadkh s yan %s",
                        past: "yan %s",
                        s: "imik",
                        m: "minuḍ",
                        mm: "%d minuḍ",
                        h: "saɛa",
                        hh: "%d tassaɛin",
                        d: "ass",
                        dd: "%d ossan",
                        M: "ayowr",
                        MM: "%d iyyirn",
                        y: "asgas",
                        yy: "%d isgasn"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("tzm", {
                    months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                    weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "dddd D MMMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                        nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                        nextWeek: "dddd [ⴴ] LT",
                        lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                        lastWeek: "dddd [ⴴ] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                        past: "ⵢⴰⵏ %s",
                        s: "ⵉⵎⵉⴽ",
                        m: "ⵎⵉⵏⵓⴺ",
                        mm: "%d ⵎⵉⵏⵓⴺ",
                        h: "ⵙⴰⵄⴰ",
                        hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                        d: "ⴰⵙⵙ",
                        dd: "%d oⵙⵙⴰⵏ",
                        M: "ⴰⵢoⵓⵔ",
                        MM: "%d ⵉⵢⵢⵉⵔⵏ",
                        y: "ⴰⵙⴳⴰⵙ",
                        yy: "%d ⵉⵙⴳⴰⵙⵏ"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                function r(n, t) {
                    var i = n.split("_");
                    return t % 10 == 1 && t % 100 != 11 ? i[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? i[1] : i[2]
                }

                function t(n, t, i) {
                    return "m" === i ? t ? "хвилина" : "хвилину" : "h" === i ? t ? "година" : "годину" : n + " " + r({
                        mm: "хвилина_хвилини_хвилин",
                        hh: "година_години_годин",
                        dd: "день_дні_днів",
                        MM: "місяць_місяці_місяців",
                        yy: "рік_роки_років"
                    }[i], +n)
                }

                function u(n, t) {
                    var i = {
                        nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                        accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
                    },
                    r = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
                    return i[r][n.month()]
                }

                function f(n, t) {
                    var i = {
                        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                    },
                    r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                    return i[r][n.day()]
                }

                function i(n) {
                    return function() {
                        return n + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                    }
                }
                return n.defineLocale("uk", {
                    months: u,
                    monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                    weekdays: f,
                    weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY р.",
                        LLL: "D MMMM YYYY р., LT",
                        LLLL: "dddd, D MMMM YYYY р., LT"
                    },
                    calendar: {
                        sameDay: i("[Сьогодні "),
                        nextDay: i("[Завтра "),
                        lastDay: i("[Вчора "),
                        nextWeek: i("[У] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return i("[Минулої] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return i("[Минулого] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "за %s",
                        past: "%s тому",
                        s: "декілька секунд",
                        m: t,
                        mm: t,
                        h: "годину",
                        hh: t,
                        d: "день",
                        dd: t,
                        M: "місяць",
                        MM: t,
                        y: "рік",
                        yy: t
                    },
                    meridiemParse: /ночі|ранку|дня|вечора/,
                    isPM: function(n) {
                        return /^(дня|вечора)$/.test(n)
                    },
                    meridiem: function(n) {
                        return 4 > n ? "ночі" : 12 > n ? "ранку" : 17 > n ? "дня" : "вечора"
                    },
                    ordinalParse: /\d{1,2}-(й|го)/,
                    ordinal: function(n, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return n + "-й";
                            case "D":
                                return n + "-го";
                            default:
                                return n
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("uz", {
                    months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                    weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                    weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                    weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY LT",
                        LLLL: "D MMMM YYYY, dddd LT"
                    },
                    calendar: {
                        sameDay: "[Бугун соат] LT [да]",
                        nextDay: "[Эртага] LT [да]",
                        nextWeek: "dddd [куни соат] LT [да]",
                        lastDay: "[Кеча соат] LT [да]",
                        lastWeek: "[Утган] dddd [куни соат] LT [да]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Якин %s ичида",
                        past: "Бир неча %s олдин",
                        s: "фурсат",
                        m: "бир дакика",
                        mm: "%d дакика",
                        h: "бир соат",
                        hh: "%d соат",
                        d: "бир кун",
                        dd: "%d кун",
                        M: "бир ой",
                        MM: "%d ой",
                        y: "бир йил",
                        yy: "%d йил"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("vi", {
                    months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "LT:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [năm] YYYY",
                        LLL: "D MMMM [năm] YYYY LT",
                        LLLL: "dddd, D MMMM [năm] YYYY LT",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY LT",
                        llll: "ddd, D MMM YYYY LT"
                    },
                    calendar: {
                        sameDay: "[Hôm nay lúc] LT",
                        nextDay: "[Ngày mai lúc] LT",
                        nextWeek: "dddd [tuần tới lúc] LT",
                        lastDay: "[Hôm qua lúc] LT",
                        lastWeek: "dddd [tuần rồi lúc] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s tới",
                        past: "%s trước",
                        s: "vài giây",
                        m: "một phút",
                        mm: "%d phút",
                        h: "một giờ",
                        hh: "%d giờ",
                        d: "một ngày",
                        dd: "%d ngày",
                        M: "một tháng",
                        MM: "%d tháng",
                        y: "một năm",
                        yy: "%d năm"
                    },
                    ordinalParse: /\d{1,2}/,
                    ordinal: function(n) {
                        return n
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("zh-cn", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "Ah点mm",
                        LTS: "Ah点m分s秒",
                        L: "YYYY-MM-DD",
                        LL: "YYYY年MMMD日",
                        LLL: "YYYY年MMMD日LT",
                        LLLL: "YYYY年MMMD日ddddLT",
                        l: "YYYY-MM-DD",
                        ll: "YYYY年MMMD日",
                        lll: "YYYY年MMMD日LT",
                        llll: "YYYY年MMMD日ddddLT"
                    },
                    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "凌晨" === t || "早上" === t || "上午" === t ? n : "下午" === t || "晚上" === t ? n + 12 : n >= 11 ? n : n + 12
                    },
                    meridiem: function(n, t) {
                        var i = 100 * n + t;
                        return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: function() {
                            return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                        },
                        nextDay: function() {
                            return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                        },
                        lastDay: function() {
                            return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                        },
                        nextWeek: function() {
                            var i, t;
                            return i = n().startOf("week"), t = this.unix() - i.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
                        },
                        lastWeek: function() {
                            var i, t;
                            return i = n().startOf("week"), t = this.unix() < i.unix() ? "[上]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
                        },
                        sameElse: "LL"
                    },
                    ordinalParse: /\d{1,2}(日|月|周)/,
                    ordinal: function(n, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return n + "日";
                            case "M":
                                return n + "月";
                            case "w":
                            case "W":
                                return n + "周";
                            default:
                                return n
                        }
                    },
                    relativeTime: {
                        future: "%s内",
                        past: "%s前",
                        s: "几秒",
                        m: "1分钟",
                        mm: "%d分钟",
                        h: "1小时",
                        hh: "%d小时",
                        d: "1天",
                        dd: "%d天",
                        M: "1个月",
                        MM: "%d个月",
                        y: "1年",
                        yy: "%d年"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }),
                    function(n) {
                        n(t)
                    }(function(n) {
                return n.defineLocale("zh-tw", {
                    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                    weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                    longDateFormat: {
                        LT: "Ah點mm",
                        LTS: "Ah點m分s秒",
                        L: "YYYY年MMMD日",
                        LL: "YYYY年MMMD日",
                        LLL: "YYYY年MMMD日LT",
                        LLLL: "YYYY年MMMD日ddddLT",
                        l: "YYYY年MMMD日",
                        ll: "YYYY年MMMD日",
                        lll: "YYYY年MMMD日LT",
                        llll: "YYYY年MMMD日ddddLT"
                    },
                    meridiemParse: /早上|上午|中午|下午|晚上/,
                    meridiemHour: function(n, t) {
                        return 12 === n && (n = 0), "早上" === t || "上午" === t ? n : "中午" === t ? n >= 11 ? n : n + 12 : "下午" === t || "晚上" === t ? n + 12 : void 0
                    },
                    meridiem: function(n, t) {
                        var i = 100 * n + t;
                        return 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
                    },
                    calendar: {
                        sameDay: "[今天]LT",
                        nextDay: "[明天]LT",
                        nextWeek: "[下]ddddLT",
                        lastDay: "[昨天]LT",
                        lastWeek: "[上]ddddLT",
                        sameElse: "L"
                    },
                    ordinalParse: /\d{1,2}(日|月|週)/,
                    ordinal: function(n, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return n + "日";
                            case "M":
                                return n + "月";
                            case "w":
                            case "W":
                                return n + "週";
                            default:
                                return n
                        }
                    },
                    relativeTime: {
                        future: "%s內",
                        past: "%s前",
                        s: "幾秒",
                        m: "一分鐘",
                        mm: "%d分鐘",
                        h: "一小時",
                        hh: "%d小時",
                        d: "一天",
                        dd: "%d天",
                        M: "一個月",
                        MM: "%d個月",
                        y: "一年",
                        yy: "%d年"
                    }
                })
            });
            t.locale("en");
            sr ? module.exports = t : "function" == typeof define && define.amd ? (define(function(n, i, r) {
                return r.config && r.config() && r.config().noGlobal === !0 && (kt.moment = or), t
            }), er(!0)) : er()
        }.call(this),
        function(n) {
            function it(n, t, i) {
                switch (arguments.length) {
                    case 2:
                        return null != n ? n : t;
                    case 3:
                        return null != n ? n : null != t ? t : i;
                    default:
                        throw new Error("Implement me");
                }
            }

            function p(n, t) {
                return uf.call(n, t)
            }

            function ot() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1
                }
            }

            function ri(n) {
                t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n)
            }

            function o(n, t) {
                var i = !0;
                return w(function() {
                    return i && (ri(n), i = !1), t.apply(this, arguments)
                }, t)
            }

            function dr(n, t) {
                br[n] || (ri(t), br[n] = !0)
            }

            function ui(n, t) {
                return function(i) {
                    return r(n.call(this, i), t)
                }
            }

            function gr(n, t) {
                return function(i) {
                    return this.localeData().ordinal(n.call(this, i), t)
                }
            }

            function nu(n, t) {
                var r, f, u = 12 * (t.year() - n.year()) + (t.month() - n.month()),
                        i = n.clone().add(u, "months");
                return 0 > t - i ? (r = n.clone().add(u - 1, "months"), f = (t - i) / (i - r)) : (r = n.clone().add(u + 1, "months"), f = (t - i) / (r - i)), -(u + f)
            }

            function tu(n, t, i) {
                var r;
                return null == i ? t : null != n.meridiemHour ? n.meridiemHour(t, i) : null != n.isPM ? (r = n.isPM(i), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
            }

            function fi() {
            }

            function rt(n, i) {
                i !== !1 && pi(n);
                ei(this, n);
                this._d = new Date(+n._d);
                ii === !1 && (ii = !0, t.updateOffset(this), ii = !1)
            }

            function st(n) {
                var i = li(n),
                        r = i.year || 0,
                        u = i.quarter || 0,
                        f = i.month || 0,
                        e = i.week || 0,
                        o = i.day || 0,
                        s = i.hour || 0,
                        h = i.minute || 0,
                        c = i.second || 0,
                        l = i.millisecond || 0;
                this._milliseconds = +l + 1e3 * c + 6e4 * h + 36e5 * s;
                this._days = +o + 7 * e;
                this._months = +f + 3 * u + 12 * r;
                this._data = {};
                this._locale = t.localeData();
                this._bubble()
            }

            function w(n, t) {
                for (var i in t)
                    p(t, i) && (n[i] = t[i]);
                return p(t, "toString") && (n.toString = t.toString), p(t, "valueOf") && (n.valueOf = t.valueOf), n
            }

            function ei(n, t) {
                var u, i, r;
                if ("undefined" != typeof t._isAMomentObject && (n._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (n._i = t._i), "undefined" != typeof t._f && (n._f = t._f), "undefined" != typeof t._l && (n._l = t._l), "undefined" != typeof t._strict && (n._strict = t._strict), "undefined" != typeof t._tzm && (n._tzm = t._tzm), "undefined" != typeof t._isUTC && (n._isUTC = t._isUTC), "undefined" != typeof t._offset && (n._offset = t._offset), "undefined" != typeof t._pf && (n._pf = t._pf), "undefined" != typeof t._locale && (n._locale = t._locale), ft.length > 0)
                    for (u in ft)
                        i = ft[u], r = t[i], "undefined" != typeof r && (n[i] = r);
                return n
            }

            function s(n) {
                return 0 > n ? Math.ceil(n) : Math.floor(n)
            }

            function r(n, t, i) {
                for (var r = "" + Math.abs(n), u = n >= 0; r.length < t; )
                    r = "0" + r;
                return (u ? i ? "+" : "" : "-") + r
            }

            function oi(n, t) {
                var i = {
                    milliseconds: 0,
                    months: 0
                };
                return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
            }

            function iu(n, t) {
                var i;
                return t = lt(t, n), n.isBefore(t) ? i = oi(n, t) : (i = oi(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i
            }

            function si(n, i) {
                return function(r, u) {
                    var f, e;
                    return null === u || isNaN(+u) || (dr(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period)."), e = r, r = u, u = e), r = "string" == typeof r ? +r : r, f = t.duration(r, u), hi(this, f, n), this
                }
            }

            function hi(n, i, r, u) {
                var o = i._milliseconds,
                        f = i._days,
                        e = i._months;
                u = null == u ? !0 : u;
                o && n._d.setTime(+n._d + o * r);
                f && rr(n, "Date", bt(n, "Date") + f * r);
                e && ir(n, bt(n, "Month") + e * r);
                u && t.updateOffset(n, f || e)
            }

            function ut(n) {
                return "[object Array]" === Object.prototype.toString.call(n)
            }

            function ht(n) {
                return "[object Date]" === Object.prototype.toString.call(n) || n instanceof Date
            }

            function ci(n, t, r) {
                for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), f = 0, u = 0; e > u; u++)
                    (r && n[u] !== t[u] || !r && i(n[u]) !== i(t[u])) && f++;
                return f + o
            }

            function f(n) {
                if (n) {
                    var t = n.toLowerCase().replace(/(.)s$/, "$1");
                    n = ne[n] || te[t] || t
                }
                return n
            }

            function li(n) {
                var i, t, r = {};
                for (t in n)
                    p(n, t) && (i = f(t), i && (r[i] = n[t]));
                return r
            }

            function ru(i) {
                var r, u;
                if (0 === i.indexOf("week"))
                    r = 7, u = "day";
                else {
                    if (0 !== i.indexOf("month"))
                        return;
                    r = 12;
                    u = "month"
                }
                t[i] = function(f, e) {
                    var o, s, c = t._locale[i],
                            h = [];
                    if ("number" == typeof f && (e = f, f = n), s = function(n) {
                        var i = t().utc().set(u, n);
                        return c.call(t._locale, i, f || "")
                    }, null != e)
                        return s(e);
                    for (o = 0; r > o; o++)
                        h.push(s(o));
                    return h
                }
            }

            function i(n) {
                var t = +n,
                        i = 0;
                return 0 !== t && isFinite(t) && (i = t >= 0 ? Math.floor(t) : Math.ceil(t)), i
            }

            function ct(n, t) {
                return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
            }

            function ai(n, i, r) {
                return b(t([n, 11, 31 + i - r]), i, r).week
            }

            function vi(n) {
                return yi(n) ? 366 : 365
            }

            function yi(n) {
                return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
            }

            function pi(n) {
                var t;
                n._a && -2 === n._pf.overflow && (t = n._a[a] < 0 || n._a[a] > 11 ? a : n._a[h] < 1 || n._a[h] > ct(n._a[l], n._a[a]) ? h : n._a[e] < 0 || n._a[e] > 24 || 24 === n._a[e] && (0 !== n._a[d] || 0 !== n._a[g] || 0 !== n._a[nt]) ? e : n._a[d] < 0 || n._a[d] > 59 ? d : n._a[g] < 0 || n._a[g] > 59 ? g : n._a[nt] < 0 || n._a[nt] > 999 ? nt : -1, n._pf._overflowDayOfYear && (l > t || t > h) && (t = h), n._pf.overflow = t)
            }

            function wi(t) {
                return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && t._pf.bigHour === n)), t._isValid
            }

            function bi(n) {
                return n ? n.toLowerCase().replace("_", "-") : n
            }

            function uu(n) {
                for (var i, t, f, r, u = 0; u < n.length; ) {
                    for (r = bi(n[u]).split("-"), i = r.length, t = bi(n[u + 1]), t = t ? t.split("-") : null; i > 0; ) {
                        if (f = ki(r.slice(0, i).join("-")))
                            return f;
                        if (t && t.length >= i && ci(r, t, !0) >= i - 1)
                            break;
                        i--
                    }
                    u++
                }
                return null
            }

            function ki(n) {
                var i = null;
                if (!tt[n] && sr)
                    try {
                        i = t.locale();
                        require("./locale/" + n);
                        t.locale(i)
                    } catch (r) {
                    }
                return tt[n]
            }

            function lt(n, i) {
                var r, u;
                return i._isUTC ? (r = i.clone(), u = (t.isMoment(n) || ht(n) ? +n : +t(n)) - +r, r._d.setTime(+r._d + u), t.updateOffset(r, !1), r) : t(n).local()
            }

            function fu(n) {
                return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
            }

            function eu(n) {
                for (var i = n.match(hr), t = 0, r = i.length; r > t; t++)
                    i[t] = v[i[t]] ? v[i[t]] : fu(i[t]);
                return function(u) {
                    var f = "";
                    for (t = 0; r > t; t++)
                        f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
                    return f
                }
            }

            function at(n, t) {
                return n.isValid() ? (t = di(t, n.localeData()), ti[t] || (ti[t] = eu(t)), ti[t](n)) : n.localeData().invalidDate()
            }

            function di(n, t) {
                function r(n) {
                    return t.longDateFormat(n) || n
                }
                var i = 5;
                for (et.lastIndex = 0; i >= 0 && et.test(n); )
                    n = n.replace(et, r), et.lastIndex = 0, i -= 1;
                return n
            }

            function ou(n, t) {
                var i = t._strict;
                switch (n) {
                    case "Q":
                        return lr;
                    case "DDDD":
                        return vr;
                    case "YYYY":
                    case "GGGG":
                    case "gggg":
                        return i ? wf : hf;
                    case "Y":
                    case "G":
                    case "g":
                        return kf;
                    case "YYYYYY":
                    case "YYYYY":
                    case "GGGGG":
                    case "ggggg":
                        return i ? bf : cf;
                    case "S":
                        if (i)
                            return lr;
                    case "SS":
                        if (i)
                            return ar;
                    case "SSS":
                        if (i)
                            return vr;
                    case "DDD":
                        return sf;
                    case "MMM":
                    case "MMMM":
                    case "dd":
                    case "ddd":
                    case "dddd":
                        return af;
                    case "a":
                    case "A":
                        return t._locale._meridiemParse;
                    case "x":
                        return yf;
                    case "X":
                        return pf;
                    case "Z":
                    case "ZZ":
                        return dt;
                    case "T":
                        return vf;
                    case "SSSS":
                        return lf;
                    case "MM":
                    case "DD":
                    case "YY":
                    case "GG":
                    case "gg":
                    case "HH":
                    case "hh":
                    case "mm":
                    case "ss":
                    case "ww":
                    case "WW":
                        return i ? ar : cr;
                    case "M":
                    case "D":
                    case "d":
                    case "H":
                    case "h":
                    case "m":
                    case "s":
                    case "w":
                    case "W":
                    case "e":
                    case "E":
                        return cr;
                    case "Do":
                        return i ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                    default:
                        return new RegExp(vu(au(n.replace("\\", "")), "i"))
                }
            }

            function vt(n) {
                n = n || "";
                var r = n.match(dt) || [],
                        f = r[r.length - 1] || [],
                        t = (f + "").match(gf) || ["-", 0, 0],
                        u = +(60 * t[1]) + i(t[2]);
                return "+" === t[0] ? u : -u
            }

            function su(n, r, u) {
                var o, f = u._a;
                switch (n) {
                    case "Q":
                        null != r && (f[a] = 3 * (i(r) - 1));
                        break;
                    case "M":
                    case "MM":
                        null != r && (f[a] = i(r) - 1);
                        break;
                    case "MMM":
                    case "MMMM":
                        o = u._locale.monthsParse(r, n, u._strict);
                        null != o ? f[a] = o : u._pf.invalidMonth = r;
                        break;
                    case "D":
                    case "DD":
                        null != r && (f[h] = i(r));
                        break;
                    case "Do":
                        null != r && (f[h] = i(parseInt(r.match(/\d{1,2}/)[0], 10)));
                        break;
                    case "DDD":
                    case "DDDD":
                        null != r && (u._dayOfYear = i(r));
                        break;
                    case "YY":
                        f[l] = t.parseTwoDigitYear(r);
                        break;
                    case "YYYY":
                    case "YYYYY":
                    case "YYYYYY":
                        f[l] = i(r);
                        break;
                    case "a":
                    case "A":
                        u._meridiem = r;
                        break;
                    case "h":
                    case "hh":
                        u._pf.bigHour = !0;
                    case "H":
                    case "HH":
                        f[e] = i(r);
                        break;
                    case "m":
                    case "mm":
                        f[d] = i(r);
                        break;
                    case "s":
                    case "ss":
                        f[g] = i(r);
                        break;
                    case "S":
                    case "SS":
                    case "SSS":
                    case "SSSS":
                        f[nt] = i(1e3 * ("0." + r));
                        break;
                    case "x":
                        u._d = new Date(i(r));
                        break;
                    case "X":
                        u._d = new Date(1e3 * parseFloat(r));
                        break;
                    case "Z":
                    case "ZZ":
                        u._useUTC = !0;
                        u._tzm = vt(r);
                        break;
                    case "dd":
                    case "ddd":
                    case "dddd":
                        o = u._locale.weekdaysParse(r);
                        null != o ? (u._w = u._w || {}, u._w.d = o) : u._pf.invalidWeekday = r;
                        break;
                    case "w":
                    case "ww":
                    case "W":
                    case "WW":
                    case "d":
                    case "e":
                    case "E":
                        n = n.substr(0, 1);
                    case "gggg":
                    case "GGGG":
                    case "GGGGG":
                        n = n.substr(0, 2);
                        r && (u._w = u._w || {}, u._w[n] = i(r));
                        break;
                    case "gg":
                    case "GG":
                        u._w = u._w || {};
                        u._w[n] = t.parseTwoDigitYear(r)
                }
            }

            function hu(n) {
                var i, o, f, u, r, e, s;
                i = n._w;
                null != i.GG || null != i.W || null != i.E ? (r = 1, e = 4, o = it(i.GG, n._a[l], b(t(), 1, 4).year), f = it(i.W, 1), u = it(i.E, 1)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = it(i.gg, n._a[l], b(t(), r, e).year), f = it(i.w, 1), null != i.d ? (u = i.d, r > u && ++f) : u = null != i.e ? i.e + r : r);
                s = tf(o, f, u, e, r);
                n._a[l] = s.year;
                n._dayOfYear = s.dayOfYear
            }

            function yt(n) {
                var t, i, r, u, f = [];
                if (!n._d) {
                    for (r = lu(n), n._w && null == n._a[h] && null == n._a[a] && hu(n), n._dayOfYear && (u = it(n._a[l], r[l]), n._dayOfYear > vi(u) && (n._pf._overflowDayOfYear = !0), i = wt(u, 0, n._dayOfYear), n._a[a] = i.getUTCMonth(), n._a[h] = i.getUTCDate()), t = 0; 3 > t && null == n._a[t]; ++t)
                        n._a[t] = f[t] = r[t];
                    for (; 7 > t; t++)
                        n._a[t] = f[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
                    24 === n._a[e] && 0 === n._a[d] && 0 === n._a[g] && 0 === n._a[nt] && (n._nextDay = !0, n._a[e] = 0);
                    n._d = (n._useUTC ? wt : ku).apply(null, f);
                    null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
                    n._nextDay && (n._a[e] = 24)
                }
            }

            function cu(n) {
                var t;
                n._d || (t = li(n._i), n._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], yt(n))
            }

            function lu(n) {
                var t = new Date;
                return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function pt(i) {
                if (i._f === t.ISO_8601)
                    return void gi(i);
                i._a = [];
                i._pf.empty = !0;
                for (var r, f, h, u = "" + i._i, l = u.length, c = 0, s = di(i._f, i._locale).match(hr) || [], o = 0; o < s.length; o++)
                    f = s[o], r = (u.match(ou(f, i)) || [])[0], r && (h = u.substr(0, u.indexOf(r)), h.length > 0 && i._pf.unusedInput.push(h), u = u.slice(u.indexOf(r) + r.length), c += r.length), v[f] ? (r ? i._pf.empty = !1 : i._pf.unusedTokens.push(f), su(f, r, i)) : i._strict && !r && i._pf.unusedTokens.push(f);
                i._pf.charsLeftOver = l - c;
                u.length > 0 && i._pf.unusedInput.push(u);
                i._pf.bigHour === !0 && i._a[e] <= 12 && (i._pf.bigHour = n);
                i._a[e] = tu(i._locale, i._a[e], i._meridiem);
                yt(i);
                pi(i)
            }

            function au(n) {
                return n.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
                    return t || i || r || u
                })
            }

            function vu(n) {
                return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function yu(n) {
                var t, f, u, r, i;
                if (0 === n._f.length)
                    return n._pf.invalidFormat = !0, void(n._d = new Date(NaN));
                for (r = 0; r < n._f.length; r++)
                    i = 0, t = ei({}, n), null != n._useUTC && (t._useUTC = n._useUTC), t._pf = ot(), t._f = n._f[r], pt(t), wi(t) && (i += t._pf.charsLeftOver, i += 10 * t._pf.unusedTokens.length, t._pf.score = i, (null == u || u > i) && (u = i, f = t));
                w(n, f || t)
            }

            function gi(n) {
                var t, i, r = n._i,
                        u = df.exec(r);
                if (u) {
                    for (n._pf.iso = !0, t = 0, i = gt.length; i > t; t++)
                        if (gt[t][1].exec(r)) {
                            n._f = gt[t][0] + (u[6] || " ");
                            break
                        }
                    for (t = 0, i = ni.length; i > t; t++)
                        if (ni[t][1].exec(r)) {
                            n._f += ni[t][0];
                            break
                        }
                    r.match(dt) && (n._f += "Z");
                    pt(n)
                } else
                    n._isValid = !1
            }

            function pu(n) {
                gi(n);
                n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n))
            }

            function wu(n, t) {
                for (var r = [], i = 0; i < n.length; ++i)
                    r.push(t(n[i], i));
                return r
            }

            function bu(i) {
                var u, r = i._i;
                r === n ? i._d = new Date : ht(r) ? i._d = new Date(+r) : null !== (u = ff.exec(r)) ? i._d = new Date(+u[1]) : "string" == typeof r ? pu(i) : ut(r) ? (i._a = wu(r.slice(0), function(n) {
                    return parseInt(n, 10)
                }), yt(i)) : "object" == typeof r ? cu(i) : "number" == typeof r ? i._d = new Date(r) : t.createFromInputFallback(i)
            }

            function ku(n, t, i, r, u, f, e) {
                var o = new Date(n, t, i, r, u, f, e);
                return 1970 > n && o.setFullYear(n), o
            }

            function wt(n) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return 1970 > n && t.setUTCFullYear(n), t
            }

            function du(n, t) {
                if ("string" == typeof n)
                    if (isNaN(n)) {
                        if (n = t.weekdaysParse(n), "number" != typeof n)
                            return null
                    } else
                        n = parseInt(n, 10);
                return n
            }

            function gu(n, t, i, r, u) {
                return u.relativeTime(t || 1, !!i, n, r)
            }

            function nf(n, i, r) {
                var u = t.duration(n).abs(),
                        c = k(u.as("s")),
                        e = k(u.as("m")),
                        o = k(u.as("h")),
                        s = k(u.as("d")),
                        h = k(u.as("M")),
                        l = k(u.as("y")),
                        f = c < y.s && ["s", c] || 1 === e && ["m"] || e < y.m && ["mm", e] || 1 === o && ["h"] || o < y.h && ["hh", o] || 1 === s && ["d"] || s < y.d && ["dd", s] || 1 === h && ["M"] || h < y.M && ["MM", h] || 1 === l && ["y"] || ["yy", l];
                return f[2] = i, f[3] = +n > 0, f[4] = r, gu.apply({}, f)
            }

            function b(n, i, r) {
                var f, e = r - i,
                        u = r - n.day();
                return u > e && (u -= 7), e - 7 > u && (u += 7), f = t(n).add(u, "d"), {
                    week: Math.ceil(f.dayOfYear() / 7),
                    year: f.year()
                }
            }

            function tf(n, t, i, r, u) {
                var o, e, f = wt(n, 0, 1).getUTCDay();
                return f = 0 === f ? 7 : f, i = null != i ? i : u, o = u - f + (f > r ? 7 : 0) - (u > f ? 7 : 0), e = 7 * (t - 1) + (i - u) + o + 1, {
                    year: e > 0 ? n : n - 1,
                    dayOfYear: e > 0 ? e : vi(n - 1) + e
                }
            }

            function nr(i) {
                var u, r = i._i,
                        f = i._f;
                return i._locale = i._locale || t.localeData(i._l), null === r || f === n && "" === r ? t.invalid({
                    nullInput: !0
                }) : ("string" == typeof r && (i._i = r = i._locale.preparse(r)), t.isMoment(r) ? new rt(r, !0) : (f ? ut(f) ? yu(i) : pt(i) : bu(i), u = new rt(i), u._nextDay && (u.add(1, "d"), u._nextDay = n), u))
            }

            function tr(n, i) {
                var u, r;
                if (1 === i.length && ut(i[0]) && (i = i[0]), !i.length)
                    return t();
                for (u = i[0], r = 1; r < i.length; ++r)
                    i[r][n](u) && (u = i[r]);
                return u
            }

            function ir(n, t) {
                var i;
                return "string" == typeof t && (t = n.localeData().monthsParse(t), "number" != typeof t) ? n : (i = Math.min(n.date(), ct(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n)
            }

            function bt(n, t) {
                return n._d["get" + (n._isUTC ? "UTC" : "") + t]()
            }

            function rr(n, t, i) {
                return "Month" === t ? ir(n, i) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
            }

            function c(n, i) {
                return function(r) {
                    return null != r ? (rr(this, n, r), t.updateOffset(this, i), this) : bt(this, n)
                }
            }

            function ur(n) {
                return 400 * n / 146097
            }

            function fr(n) {
                return 146097 * n / 400
            }

            function rf(n) {
                t.duration.fn[n] = function() {
                    return this._data[n]
                }
            }

            function er(n) {
                "undefined" == typeof ender && (or = kt.moment, kt.moment = n ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : t)
            }
            for (var t, or, u, kt = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, k = Math.round, uf = Object.prototype.hasOwnProperty, l = 0, a = 1, h = 2, e = 3, d = 4, g = 5, nt = 6, tt = {}, ft = [], sr = "undefined" != typeof module && module && module.exports, ff = /^\/?Date\((\-?\d+)/i, ef = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, of = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, hr = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, et = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cr = /\d\d?/, sf = /\d{1,3}/, hf = /\d{1,4}/, cf = /[+\-]?\d{1,6}/, lf = /\d+/, af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, dt = /Z|[\+\-]\d\d:?\d\d/gi, vf = /T/i, yf = /[\+\-]?\d+/, pf = /[\+\-]?\d+(\.\d{1,3})?/, lr = /\d/, ar = /\d\d/, vr = /\d{3}/, wf = /\d{4}/, bf = /[+-]?\d{6}/, kf = /[+-]?\d+/, df = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gt = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], ni = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], gf = /([\+\-]|\d\d)/gi, yr = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }), ne = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, te = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, ti = {}, y = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, pr = "DDD w W M D d".split(" "), wr = "M D H h m s w W".split(" "), v = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(n) {
                    return this.localeData().monthsShort(this, n)
                },
                MMMM: function(n) {
                    return this.localeData().months(this, n)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(n) {
                    return this.localeData().weekdaysMin(this, n)
                },
                ddd: function(n) {
                    return this.localeData().weekdaysShort(this, n)
                },
                dddd: function(n) {
                    return this.localeData().weekdays(this, n)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return r(this.year() % 100, 2)
                },
                YYYY: function() {
                    return r(this.year(), 4)
                },
                YYYYY: function() {
                    return r(this.year(), 5)
                },
                YYYYYY: function() {
                    var n = this.year(),
                            t = n >= 0 ? "+" : "-";
                    return t + r(Math.abs(n), 6)
                },
                gg: function() {
                    return r(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return r(this.weekYear(), 4)
                },
                ggggg: function() {
                    return r(this.weekYear(), 5)
                },
                GG: function() {
                    return r(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return r(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return r(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return i(this.milliseconds() / 100)
                },
                SS: function() {
                    return r(i(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return r(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return r(this.milliseconds(), 3)
                },
                Z: function() {
                    var n = this.utcOffset(),
                            t = "+";
                    return 0 > n && (n = -n, t = "-"), t + r(i(n / 60), 2) + ":" + r(i(n) % 60, 2)
                },
                ZZ: function() {
                    var n = this.utcOffset(),
                            t = "+";
                    return 0 > n && (n = -n, t = "-"), t + r(i(n / 60), 2) + r(i(n) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                x: function() {
                    return this.valueOf()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, br = {}, kr = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], ii = !1; pr.length; )
                u = pr.pop(), v[u + "o"] = gr(v[u], u);
            for (; wr.length; )
                u = wr.pop(), v[u + u] = ui(v[u], 2);
            for (v.DDDD = ui(v.DDD, 3), w(fi.prototype, {
            set: function(n) {
                var t;
                for (var i in n)
                    t = n[i], "function" == typeof t ? this[i] = t : this["_" + i] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
                    _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    months: function(n) {
                        return this._months[n.month()]
                    },
                    _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    monthsShort: function(n) {
                        return this._monthsShort[n.month()]
                    },
                    monthsParse: function(n, i, r) {
                        var u, f, e;
                        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), u = 0; 12 > u; u++)
                            if ((f = t.utc([2e3, u]), r && !this._longMonthsParse[u] && (this._longMonthsParse[u] = new RegExp("^" + this.months(f, "").replace(".", "") + "$", "i"), this._shortMonthsParse[u] = new RegExp("^" + this.monthsShort(f, "").replace(".", "") + "$", "i")), r || this._monthsParse[u] || (e = "^" + this.months(f, "") + "|^" + this.monthsShort(f, ""), this._monthsParse[u] = new RegExp(e.replace(".", ""), "i")), r && "MMMM" === i && this._longMonthsParse[u].test(n)) || r && "MMM" === i && this._shortMonthsParse[u].test(n) || !r && this._monthsParse[u].test(n))
                                return u
                    },
                    _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdays: function(n) {
                        return this._weekdays[n.day()]
                    },
                    _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysShort: function(n) {
                        return this._weekdaysShort[n.day()]
                    },
                    _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    weekdaysMin: function(n) {
                        return this._weekdaysMin[n.day()]
                    },
                    weekdaysParse: function(n) {
                        var i, r, u;
                        for (this._weekdaysParse || (this._weekdaysParse = []), i = 0; 7 > i; i++)
                            if (this._weekdaysParse[i] || (r = t([2e3, 1]).day(i), u = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(u.replace(".", ""), "i")), this._weekdaysParse[i].test(n))
                                return i
                    },
                    _longDateFormat: {
                    LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY LT",
                            LLLL: "dddd, MMMM D, YYYY LT"
                    },
                    longDateFormat: function(n) {
                        var t = this._longDateFormat[n];
                        return !t && this._longDateFormat[n.toUpperCase()] && (t = this._longDateFormat[n.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(n) {
                            return n.slice(1)
                        }), this._longDateFormat[n] = t), t
                    },
                    isPM: function(n) {
                        return "p" === (n + "").toLowerCase().charAt(0)
                    },
                    _meridiemParse: /[ap]\.?m?\.?/i,
                    meridiem: function(n, t, i) {
                        return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
                    },
                    _calendar: {
                    sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                    },
                    calendar: function(n, t, i) {
                        var r = this._calendar[n];
                        return "function" == typeof r ? r.apply(t, [i]) : r
                    },
                    _relativeTime: {
                    future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                    },
                    relativeTime: function(n, t, i, r) {
                        var u = this._relativeTime[i];
                        return "function" == typeof u ? u(n, t, i, r) : u.replace(/%d/i, n)
                    },
                    pastFuture: function(n, t) {
                        var i = this._relativeTime[n > 0 ? "future" : "past"];
                        return "function" == typeof i ? i(t) : i.replace(/%s/i, t)
                    },
                    ordinal: function(n) {
                        return this._ordinal.replace("%d", n)
                    },
                    _ordinal: "%d",
                    _ordinalParse: /\d{1,2}/,
                    preparse: function(n) {
                        return n
                    },
                    postformat: function(n) {
                        return n
                    },
                    week: function(n) {
                        return b(n, this._week.dow, this._week.doy).week
                    },
                    _week: {
                    dow: 0,
                            doy: 6
                    },
                    firstDayOfWeek: function() {
                        return this._week.dow
                    },
                    firstDayOfYear: function() {
                        return this._week.doy
                    },
                    _invalidDate: "Invalid date",
                    invalidDate: function() {
                        return this._invalidDate
                    }
            }), t = function(t, i, r, u) {
                var f;
                return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._i = t, f._f = i, f._l = r, f._strict = u, f._isUTC = !1, f._pf = ot(), nr(f)
            }, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) {
                n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
            }), t.min = function() {
                var n = [].slice.call(arguments, 0);
                return tr("isBefore", n)
            }, t.max = function() {
                var n = [].slice.call(arguments, 0);
                return tr("isAfter", n)
            }, t.utc = function(t, i, r, u) {
                var f;
                return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._useUTC = !0, f._isUTC = !0, f._l = r, f._i = t, f._f = i, f._strict = u, f._pf = ot(), nr(f).utc()
            }, t.unix = function(n) {
                return t(1e3 * n)
            }, t.duration = function(n, r) {
                var o, c, s, l, u = n,
                        f = null;
                return t.isDuration(n) ? u = {
                    ms: n._milliseconds,
                    d: n._days,
                    M: n._months
                } : "number" == typeof n ? (u = {}, r ? u[r] = n : u.milliseconds = n) : (f = ef.exec(n)) ? (o = "-" === f[1] ? -1 : 1, u = {
                    y: 0,
                    d: i(f[h]) * o,
                    h: i(f[e]) * o,
                    m: i(f[d]) * o,
                    s: i(f[g]) * o,
                    ms: i(f[nt]) * o
                }) : (f = of.exec(n)) ? (o = "-" === f[1] ? -1 : 1, s = function(n) {
                    var t = n && parseFloat(n.replace(",", "."));
                    return (isNaN(t) ? 0 : t) * o
                }, u = {
                    y: s(f[2]),
                    M: s(f[3]),
                    d: s(f[4]),
                    h: s(f[5]),
                    m: s(f[6]),
                    s: s(f[7]),
                    w: s(f[8])
                }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (l = iu(t(u.from), t(u.to)), u = {}, u.ms = l.milliseconds, u.M = l.months), c = new st(u), t.isDuration(n) && p(n, "_locale") && (c._locale = n._locale), c
            }, t.version = "2.9.0", t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.ISO_8601 = function() {
            }, t.momentProperties = ft, t.updateOffset = function() {
            }, t.relativeTimeThreshold = function(t, i) {
                return y[t] === n ? !1 : i === n ? y[t] : (y[t] = i, !0)
            }, t.lang = o("moment.lang is deprecated. Use moment.locale instead.", function(n, i) {
                return t.locale(n, i)
            }), t.locale = function(n, i) {
                var r;
                return n && (r = "undefined" != typeof i ? t.defineLocale(n, i) : t.localeData(n), r && (t.duration._locale = t._locale = r)), t._locale._abbr
            }, t.defineLocale = function(n, i) {
                return null !== i ? (i.abbr = n, tt[n] || (tt[n] = new fi), tt[n].set(i), t.locale(n), tt[n]) : (delete tt[n], null)
            }, t.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function(n) {
                return t.localeData(n)
            }), t.localeData = function(n) {
                var i;
                if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n)
                    return t._locale;
                if (!ut(n)) {
                    if (i = ki(n))
                        return i;
                    n = [n]
                }
                return uu(n)
            }, t.isMoment = function(n) {
                return n instanceof rt || null != n && p(n, "_isAMomentObject")
            }, t.isDuration = function(n) {
                return n instanceof st
            }, u = kr.length - 1; u >= 0; --u)
                ru(kr[u]);
            t.normalizeUnits = function(n) {
                return f(n)
            };
            t.invalid = function(n) {
                var i = t.utc(NaN);
                return null != n ? w(i._pf, n) : i._pf.userInvalidated = !0, i
            };
            t.parseZone = function() {
                return t.apply(null, arguments).parseZone()
            };
            t.parseTwoDigitYear = function(n) {
                return i(n) + (i(n) > 68 ? 1900 : 2e3)
            };
            t.isDate = ht;
            w(t.fn = rt.prototype, {
                clone: function() {
                    return t(this)
                },
                valueOf: function() {
                    return +this._d - 6e4 * (this._offset || 0)
                },
                unix: function() {
                    return Math.floor(+this / 1e3)
                },
                toString: function() {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                },
                toDate: function() {
                    return this._offset ? new Date(+this) : this._d
                },
                toISOString: function() {
                    var n = t(this).utc();
                    return 0 < n.year() && n.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : at(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : at(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                },
                toArray: function() {
                    var n = this;
                    return [n.year(), n.month(), n.date(), n.hours(), n.minutes(), n.seconds(), n.milliseconds()]
                },
                isValid: function() {
                    return wi(this)
                },
                isDSTShifted: function() {
                    return this._a ? this.isValid() && ci(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
                },
                parsingFlags: function() {
                    return w({}, this._pf)
                },
                invalidAt: function() {
                    return this._pf.overflow
                },
                utc: function(n) {
                    return this.utcOffset(0, n)
                },
                local: function(n) {
                    return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(this._dateUtcOffset(), "m")), this
                },
                format: function(n) {
                    var i = at(this, n || t.defaultFormat);
                    return this.localeData().postformat(i)
                },
                add: si(1, "add"),
                subtract: si(-1, "subtract"),
                diff: function(n, t, i) {
                    var r, u, e = lt(n, this),
                            o = 6e4 * (e.utcOffset() - this.utcOffset());
                    return t = f(t), "year" === t || "month" === t || "quarter" === t ? (u = nu(this, e), "quarter" === t ? u /= 3 : "year" === t && (u /= 12)) : (r = this - e, u = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - o) / 864e5 : "week" === t ? (r - o) / 6048e5 : r), i ? u : s(u)
                },
                from: function(n, i) {
                    return t.duration({
                        to: this,
                        from: n
                    }).locale(this.locale()).humanize(!i)
                },
                fromNow: function(n) {
                    return this.from(t(), n)
                },
                calendar: function(n) {
                    var r = n || t(),
                            u = lt(r, this).startOf("day"),
                            i = this.diff(u, "days", !0),
                            f = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
                    return this.format(this.localeData().calendar(f, this, t(r)))
                },
                isLeapYear: function() {
                    return yi(this.year())
                },
                isDST: function() {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                },
                day: function(n) {
                    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != n ? (n = du(n, this.localeData()), this.add(n - t, "d")) : t
                },
                month: c("Month", !0),
                startOf: function(n) {
                    switch (n = f(n)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === n ? this.weekday(0) : "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this
                },
                endOf: function(t) {
                    return t = f(t), t === n || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
                },
                isAfter: function(n, i) {
                    var r;
                    return i = f("undefined" != typeof i ? i : "millisecond"), "millisecond" === i ? (n = t.isMoment(n) ? n : t(n), +this > +n) : (r = t.isMoment(n) ? +n : +t(n), r < +this.clone().startOf(i))
                },
                isBefore: function(n, i) {
                    var r;
                    return i = f("undefined" != typeof i ? i : "millisecond"), "millisecond" === i ? (n = t.isMoment(n) ? n : t(n), +n > +this) : (r = t.isMoment(n) ? +n : +t(n), +this.clone().endOf(i) < r)
                },
                isBetween: function(n, t, i) {
                    return this.isAfter(n, i) && this.isBefore(t, i)
                },
                isSame: function(n, i) {
                    var r;
                    return i = f(i || "millisecond"), "millisecond" === i ? (n = t.isMoment(n) ? n : t(n), +this == +n) : (r = +t(n), +this.clone().startOf(i) <= r && r <= +this.clone().endOf(i))
                },
                min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(n) {
                    return n = t.apply(null, arguments), this > n ? this : n
                }),
                max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(n) {
                    return n = t.apply(null, arguments), n > this ? this : n
                }),
                zone: o("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(n, t) {
                    return null != n ? ("string" != typeof n && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
                }),
                utcOffset: function(n, i) {
                    var r, u = this._offset || 0;
                    return null != n ? ("string" == typeof n && (n = vt(n)), Math.abs(n) < 16 && (n = 60 * n), !this._isUTC && i && (r = this._dateUtcOffset()), this._offset = n, this._isUTC = !0, null != r && this.add(r, "m"), u !== n && (!i || this._changeInProgress ? hi(this, t.duration(n - u, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? u : this._dateUtcOffset()
                },
                isLocal: function() {
                    return !this._isUTC
                },
                isUtcOffset: function() {
                    return this._isUTC
                },
                isUtc: function() {
                    return this._isUTC && 0 === this._offset
                },
                zoneAbbr: function() {
                    return this._isUTC ? "UTC" : ""
                },
                zoneName: function() {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                },
                parseZone: function() {
                    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(vt(this._i)), this
                },
                hasAlignedHourOffset: function(n) {
                    return n = n ? t(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0
                },
                daysInMonth: function() {
                    return ct(this.year(), this.month())
                },
                dayOfYear: function(n) {
                    var i = k((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                    return null == n ? i : this.add(n - i, "d")
                },
                quarter: function(n) {
                    return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
                },
                weekYear: function(n) {
                    var t = b(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                    return null == n ? t : this.add(n - t, "y")
                },
                isoWeekYear: function(n) {
                    var t = b(this, 1, 4).year;
                    return null == n ? t : this.add(n - t, "y")
                },
                week: function(n) {
                    var t = this.localeData().week(this);
                    return null == n ? t : this.add(7 * (n - t), "d")
                },
                isoWeek: function(n) {
                    var t = b(this, 1, 4).week;
                    return null == n ? t : this.add(7 * (n - t), "d")
                },
                weekday: function(n) {
                    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == n ? t : this.add(n - t, "d")
                },
                isoWeekday: function(n) {
                    return null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7)
                },
                isoWeeksInYear: function() {
                    return ai(this.year(), 1, 4)
                },
                weeksInYear: function() {
                    var n = this.localeData()._week;
                    return ai(this.year(), n.dow, n.doy)
                },
                get: function(n) {
                    return n = f(n), this[n]()
                },
                set: function(n, t) {
                    var i;
                    if ("object" == typeof n)
                        for (i in n)
                            this.set(i, n[i]);
                    else
                        n = f(n), "function" == typeof this[n] && this[n](t);
                    return this
                },
                locale: function(i) {
                    var r;
                    return i === n ? this._locale._abbr : (r = t.localeData(i), null != r && (this._locale = r), this)
                },
                lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                    return t === n ? this.localeData() : this.locale(t)
                }),
                localeData: function() {
                    return this._locale
                },
                _dateUtcOffset: function() {
                    return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
                }
            });
            t.fn.millisecond = t.fn.milliseconds = c("Milliseconds", !1);
            t.fn.second = t.fn.seconds = c("Seconds", !1);
            t.fn.minute = t.fn.minutes = c("Minutes", !1);
            t.fn.hour = t.fn.hours = c("Hours", !0);
            t.fn.date = c("Date", !0);
            t.fn.dates = o("dates accessor is deprecated. Use date instead.", c("Date", !0));
            t.fn.year = c("FullYear", !0);
            t.fn.years = o("years accessor is deprecated. Use year instead.", c("FullYear", !0));
            t.fn.days = t.fn.day;
            t.fn.months = t.fn.month;
            t.fn.weeks = t.fn.week;
            t.fn.isoWeeks = t.fn.isoWeek;
            t.fn.quarters = t.fn.quarter;
            t.fn.toJSON = t.fn.toISOString;
            t.fn.isUTC = t.fn.isUtc;
            w(t.duration.fn = st.prototype, {
                _bubble: function() {
                    var u, f, e, o = this._milliseconds,
                            t = this._days,
                            i = this._months,
                            n = this._data,
                            r = 0;
                    n.milliseconds = o % 1e3;
                    u = s(o / 1e3);
                    n.seconds = u % 60;
                    f = s(u / 60);
                    n.minutes = f % 60;
                    e = s(f / 60);
                    n.hours = e % 24;
                    t += s(e / 24);
                    r = s(ur(t));
                    t -= s(fr(r));
                    i += s(t / 30);
                    t %= 30;
                    r += s(i / 12);
                    i %= 12;
                    n.days = t;
                    n.months = i;
                    n.years = r
                },
                abs: function() {
                    return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
                },
                weeks: function() {
                    return s(this.days() / 7)
                },
                valueOf: function() {
                    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * i(this._months / 12)
                },
                humanize: function(n) {
                    var t = nf(this, !n, this.localeData());
                    return n && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
                },
                add: function(n, i) {
                    var r = t.duration(n, i);
                    return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
                },
                subtract: function(n, i) {
                    var r = t.duration(n, i);
                    return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
                },
                get: function(n) {
                    return n = f(n), this[n.toLowerCase() + "s"]()
                },
                as: function(n) {
                    var t, i;
                    if (n = f(n), "month" === n || "year" === n)
                        return t = this._days + this._milliseconds / 864e5, i = this._months + 12 * ur(t), "month" === n ? i : i / 12;
                    switch (t = this._days + Math.round(fr(this._months / 12)), n) {
                        case "week":
                            return t / 7 + this._milliseconds / 6048e5;
                        case "day":
                            return t + this._milliseconds / 864e5;
                        case "hour":
                            return 24 * t + this._milliseconds / 36e5;
                        case "minute":
                            return 1440 * t + this._milliseconds / 6e4;
                        case "second":
                            return 86400 * t + this._milliseconds / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + this._milliseconds;
                        default:
                            throw new Error("Unknown unit " + n);
                    }
                },
                lang: t.fn.lang,
                locale: t.fn.locale,
                toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                    return this.toISOString()
                }),
                toISOString: function() {
                    var r = Math.abs(this.years()),
                            u = Math.abs(this.months()),
                            f = Math.abs(this.days()),
                            n = Math.abs(this.hours()),
                            t = Math.abs(this.minutes()),
                            i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                    return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (u ? u + "M" : "") + (f ? f + "D" : "") + (n || t || i ? "T" : "") + (n ? n + "H" : "") + (t ? t + "M" : "") + (i ? i + "S" : "") : "P0D"
                },
                localeData: function() {
                    return this._locale
                },
                toJSON: function() {
                    return this.toISOString()
                }
            });
            t.duration.fn.toString = t.duration.fn.toISOString;
            for (u in yr)
                p(yr, u) && rf(u.toLowerCase());
            t.duration.fn.asMilliseconds = function() {
                return this.as("ms")
            };
            t.duration.fn.asSeconds = function() {
                return this.as("s")
            };
            t.duration.fn.asMinutes = function() {
                return this.as("m")
            };
            t.duration.fn.asHours = function() {
                return this.as("h")
            };
            t.duration.fn.asDays = function() {
                return this.as("d")
            };
            t.duration.fn.asWeeks = function() {
                return this.as("weeks")
            };
            t.duration.fn.asMonths = function() {
                return this.as("M")
            };
            t.duration.fn.asYears = function() {
                return this.as("y")
            };
            t.locale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(n) {
                    var t = n % 10,
                            r = 1 === i(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return n + r
                }
            });
            sr ? module.exports = t : "function" == typeof define && define.amd ? (define(function(n, i, r) {
                return r.config && r.config() && r.config().noGlobal === !0 && (kt.moment = or), t
            }), er(!0)) : er()
        }.call(this),
        function(n) {
            typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
        }(function(n) {
    function i(n) {
        return t.raw ? n : encodeURIComponent(n)
    }

    function f(n) {
        return t.raw ? n : decodeURIComponent(n)
    }

    function e(n) {
        return i(t.json ? JSON.stringify(n) : String(n))
    }

    function o(n) {
        n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            n = decodeURIComponent(n.replace(u, " "))
        } catch (i) {
            return
        }
        try {
            return t.json ? JSON.parse(n) : n
        } catch (i) {
        }
    }

    function r(i, r) {
        var u = t.raw ? i : o(i);
        return n.isFunction(r) ? r(u) : u
    }
    var u = /\+/g,
            t = n.cookie = function(u, o, s) {
                var y, a, h, v, c, p;
                if (o !== undefined && !n.isFunction(o))
                    return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setDate(a.getDate() + y)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
                for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
                    var w = v[c].split("="),
                            b = f(w.shift()),
                            l = w.join("=");
                    if (u && u === b) {
                        h = r(l, o);
                        break
                    }
                    u || (l = r(l)) === undefined || (h[b] = l)
                }
                return h
            };
    t.defaults = {};
    n.removeCookie = function(t, i) {
        return n.cookie(t) !== undefined ? (n.cookie(t, "", n.extend({}, i, {
            expires: -1
        })), !0) : !1
    }
}),
        function(n) {
            function t() {
                this.isField = !0;
                this.keyboardMode = this.hasLabel = this.cutOff = this.disabled = this.inFocus = this.down = !1;
                this.nativeTouch = !0;
                this.wrapperClass = "dropdown";
                this.onChange = null
            }
            t.prototype = {
                constructor: t,
                instances: {},
                init: function(t, i) {
                    var r = this;
                    n.extend(r, i);
                    r.$select = n(t);
                    r.id = t.id;
                    r.options = [];
                    r.$options = r.$select.find("option");
                    r.isTouch = "ontouchend" in document;
                    r.$select.removeClass(r.wrapperClass + " dropdown");
                    r.$select.is(":disabled") && (r.disabled = !0);
                    r.$options.length && (r.$options.each(function(t) {
                        var i = n(this);
                        i.is(":selected") && (r.selected = {
                            index: t,
                            title: i.text()
                        }, r.focusIndex = t);
                        i.hasClass("label") && 0 == t ? (r.hasLabel = !0, r.label = i.text(), i.attr("value", "")) : r.options.push({
                            domNode: i[0],
                            title: i.text(),
                            value: i.val(),
                            selected: i.is(":selected")
                        })
                    }), r.selected || (r.selected = {
                        index: 0,
                        title: r.$options.eq(0).text()
                    }, r.focusIndex = 0), r.render())
                },
                render: function() {
                    var t = this;
                    t.$container = t.$select.wrap('<div class="' + t.wrapperClass + (t.isTouch && t.nativeTouch ? " touch" : "") + (t.disabled ? " disabled" : "") + '"><span class="old"/><\/div>').parent().parent();
                    t.$active = n('<span class="selected">' + t.selected.title + "<\/span>").appendTo(t.$container);
                    t.$carat = n('<span class="carat"/>').appendTo(t.$container);
                    t.$scrollWrapper = n("<div><ul/><\/div>").appendTo(t.$container);
                    t.$dropDown = t.$scrollWrapper.find("ul");
                    t.$form = t.$container.closest("form");
                    n.each(t.options, function() {
                        t.$dropDown.append("<li" + (this.selected ? ' class="active"' : "") + ">" + this.title + "<\/li>")
                    });
                    t.$items = t.$dropDown.find("li");
                    t.cutOff && t.$items.length > t.cutOff && t.$container.addClass("scrollable");
                    t.getMaxHeight();
                    t.isTouch && t.nativeTouch ? t.bindTouchHandlers() : t.bindHandlers()
                },
                getMaxHeight: function() {
                    for (i = this.maxHeight = 0; i < this.$items.length; i++) {
                        var n = this.$items.eq(i);
                        if (this.maxHeight += n.outerHeight(), this.cutOff == i + 1)
                            break
                    }
                },
                bindTouchHandlers: function() {
                    var t = this;
                    t.$container.on("click.easyDropDown", function() {
                        t.$select.focus()
                    });
                    t.$select.on({
                        change: function() {
                            var i = n(this).find("option:selected"),
                                    r = i.text(),
                                    i = i.val();
                            t.$active.text(r);
                            "function" == typeof t.onChange && t.onChange.call(t.$select[0], {
                                title: r,
                                value: i
                            })
                        },
                        focus: function() {
                            t.$container.addClass("focus")
                        },
                        blur: function() {
                            t.$container.removeClass("focus")
                        }
                    })
                },
                bindHandlers: function() {
                    var t = this;
                    t.query = "";
                    t.$container.on({
                        "click.easyDropDown": function() {
                            t.down || t.disabled ? t.close() : t.open()
                        },
                        "mousemove.easyDropDown": function() {
                            t.keyboardMode && (t.keyboardMode = !1)
                        }
                    });
                    n("body").on("click.easyDropDown." + t.id, function(i) {
                        i = n(i.target);
                        var r = t.wrapperClass.split(" ").join(".");
                        !i.closest("." + r).length && t.down && t.close()
                    });
                    t.$items.on({
                        "click.easyDropDown": function() {
                            var i = n(this).index();
                            t.select(i);
                            t.$select.focus()
                        },
                        "mouseover.easyDropDown": function() {
                            if (!t.keyboardMode) {
                                var i = n(this);
                                i.addClass("focus").siblings().removeClass("focus");
                                t.focusIndex = i.index()
                            }
                        },
                        "mouseout.easyDropDown": function() {
                            t.keyboardMode || n(this).removeClass("focus")
                        }
                    });
                    t.$select.on({
                        "focus.easyDropDown": function() {
                            t.$container.addClass("focus");
                            t.inFocus = !0
                        },
                        "blur.easyDropDown": function() {
                            t.$container.removeClass("focus");
                            t.inFocus = !1
                        },
                        "keydown.easyDropDown": function(n) {
                            if (t.inFocus) {
                                t.keyboardMode = !0;
                                var i = n.keyCode;
                                if ((38 == i || 40 == i || 32 == i) && (n.preventDefault(), 38 == i ? (t.focusIndex--, t.focusIndex = 0 > t.focusIndex ? t.$items.length - 1 : t.focusIndex) : 40 == i && (t.focusIndex++, t.focusIndex = t.focusIndex > t.$items.length - 1 ? 0 : t.focusIndex), t.down || t.open(), t.$items.removeClass("focus").eq(t.focusIndex).addClass("focus"), t.cutOff && t.scrollToView(), t.query = ""), t.down)
                                    if (9 == i || 27 == i)
                                        t.close();
                                    else {
                                        if (13 == i)
                                            return n.preventDefault(), t.select(t.focusIndex), t.close(), !1;
                                        if (8 == i)
                                            return n.preventDefault(), t.query = t.query.slice(0, -1), t.search(), clearTimeout(t.resetQuery), !1;
                                        38 != i && 40 != i && (n = String.fromCharCode(i), t.query += n, t.search(), clearTimeout(t.resetQuery))
                                    }
                            }
                        },
                        "keyup.easyDropDown": function() {
                            t.resetQuery = setTimeout(function() {
                                t.query = ""
                            }, 1200)
                        }
                    });
                    t.$dropDown.on("scroll.easyDropDown", function() {
                        t.$dropDown[0].scrollTop >= t.$dropDown[0].scrollHeight - t.maxHeight ? t.$container.addClass("bottom") : t.$container.removeClass("bottom")
                    });
                    if (t.$form.length)
                        t.$form.on("reset.easyDropDown", function() {
                            t.$active.text(t.hasLabel ? t.label : t.options[0].title)
                        })
                },
                unbindHandlers: function() {
                    this.$container.add(this.$select).add(this.$items).add(this.$form).add(this.$dropDown).off(".easyDropDown");
                    n("body").off("." + this.id)
                },
                open: function() {
                    var n = window.scrollY || document.documentElement.scrollTop,
                            t = window.scrollX || document.documentElement.scrollLeft,
                            i = this.notInViewport(n);
                    this.closeAll();
                    this.getMaxHeight();
                    this.$select.focus();
                    window.scrollTo(t, n + i);
                    this.$container.addClass("open");
                    this.$scrollWrapper.css("height", this.maxHeight + "px");
                    this.down = !0
                },
                close: function() {
                    this.$container.removeClass("open");
                    this.$scrollWrapper.css("height", "0px");
                    this.focusIndex = this.selected.index;
                    this.query = "";
                    this.down = !1
                },
                closeAll: function() {
                    var n = Object.getPrototypeOf(this).instances;
                    for (var t in n)
                        n[t].close()
                },
                select: function(n) {
                    "string" == typeof n && (n = this.$select.find("option[value=" + n + "]").index() - 1);
                    var t = this.options[n],
                            r = this.hasLabel ? n + 1 : n;
                    this.$items.removeClass("active").eq(n).addClass("active");
                    this.$active.text(t.title);
                    this.$select.find("option").removeAttr("selected").eq(r).prop("selected", !0).parent().trigger("change");
                    this.selected = {
                        index: n,
                        title: t.title
                    };
                    this.focusIndex = i;
                    "function" == typeof this.onChange && this.onChange.call(this.$select[0], {
                        title: t.title,
                        value: t.value
                    })
                },
                search: function() {
                    var n = this,
                            r = function(t) {
                                n.focusIndex = t;
                                n.$items.removeClass("focus").eq(n.focusIndex).addClass("focus");
                                n.scrollToView()
                            },
                            t;
                    for (i = 0; i < n.options.length; i++)
                        if (t = n.options[i].title.toUpperCase(), 0 == t.indexOf(n.query)) {
                            r(i);
                            return
                        }
                    for (i = 0; i < n.options.length; i++)
                        if (t = n.options[i].title.toUpperCase(), -1 < t.indexOf(n.query)) {
                            r(i);
                            break
                        }
                },
                scrollToView: function() {
                    if (this.focusIndex >= this.cutOff) {
                        var n = this.$items.eq(this.focusIndex).outerHeight() * (this.focusIndex + 1) - this.maxHeight;
                        this.$dropDown.scrollTop(n)
                    }
                },
                notInViewport: function(n) {
                    var i = n + (window.innerHeight || document.documentElement.clientHeight),
                            t = this.$dropDown.offset().top + this.maxHeight;
                    return t >= n && t <= i ? 0 : t - i + 5
                },
                destroy: function() {
                    this.unbindHandlers();
                    this.$select.unwrap().siblings().remove();
                    this.$select.unwrap();
                    delete Object.getPrototypeOf(this).instances[this.$select[0].id]
                },
                disable: function() {
                    this.disabled = !0;
                    this.$container.addClass("disabled");
                    this.$select.attr("disabled", !0);
                    this.down || this.close()
                },
                enable: function() {
                    this.disabled = !1;
                    this.$container.removeClass("disabled");
                    this.$select.attr("disabled", !1)
                }
            };
            var r = function(n, i) {
                n.id = n.id ? n.id : "EasyDropDown" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase();
                var r = new t;
                r.instances[n.id] || (r.instances[n.id] = r, r.init(n, i))
            };
            n.fn.easyDropDown = function() {
                var n = arguments,
                        i = [],
                        u;
                return u = this.each(function() {
                    if (n && "string" == typeof n[0]) {
                        var u = t.prototype.instances[this.id][n[0]](n[1], n[2]);
                        u && i.push(u)
                    } else
                        r(this, n[0])
                }), i.length ? 1 < i.length ? i : i[0] : u
            };
            n(function() {
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(n) {
                    return n.__proto__
                } : function(n) {
                    return n.constructor.prototype
                });
                n("select.dropdown").each(function() {
                    var t = n(this).attr("data-settings");
                    settings = t ? n.parseJSON(t) : {};
                    r(this, settings)
                })
            })
        }(jQuery),
        function(n) {
            function t(t) {
                var i = n.formatCurrency.regions[t],
                        r;
                return i ? i : /(\w+)-(\w+)/g.test(t) ? (r = t.replace(/(\w+)-(\w+)/g, "$1"), n.formatCurrency.regions[r]) : null
            }

            function r(n) {
                switch (n.toLowerCase()) {
                    case "int":
                        return "Int";
                    case "float":
                        return "Float";
                    default:
                        throw "invalid parseType";
                }
            }

            function i(n) {
                if (n.symbol === "")
                    return new RegExp("[^\\d" + n.decimalSymbol + "-]", "g");
                var t = n.symbol.replace("$", "\\$").replace(".", "\\.");
                return new RegExp(t + "|[^\\d" + n.decimalSymbol + "-]", "g")
            }
            n.formatCurrency = {};
            n.formatCurrency.regions = [];
            n.formatCurrency.regions[""] = {
                symbol: "$",
                positiveFormat: "%s%n",
                negativeFormat: "(%s%n)",
                decimalSymbol: ".",
                digitGroupSymbol: ",",
                groupDigits: !0
            };
            n.fn.formatCurrency = function(r, u) {
                arguments.length == 1 && typeof r != "string" && (u = r, r = !1);
                var f = {
                    name: "formatCurrency",
                    colorize: !1,
                    region: "",
                    global: !0,
                    roundToDecimalPlace: 2,
                    eventOnDecimalsEntered: !1
                };
                return f = n.extend(f, n.formatCurrency.regions[""]), u = n.extend(f, u), u.region.length > 0 && (u = n.extend(u, t(u.region))), u.regex = i(u), this.each(function() {
                    var t, f, a, o, e;
                    if ($this = n(this), t = "0", t = $this[$this.is("input, select, textarea") ? "val" : "html"](), t.search("\\(") >= 0 && (t = "-" + t), t !== "" && (t !== "-" || u.roundToDecimalPlace !== -1)) {
                        if (isNaN(t)) {
                            if (t = t.replace(u.regex, ""), t === "" || t === "-" && u.roundToDecimalPlace === -1)
                                return;
                            u.decimalSymbol != "." && (t = t.replace(u.decimalSymbol, "."));
                            isNaN(t) && (t = "0")
                        }
                        var s = String(t).split("."),
                                c = t == Math.abs(t),
                                h = s.length > 1,
                                i = h ? s[1].toString() : "0",
                                l = i;
                        if (t = Math.abs(s[0]), t = isNaN(t) ? 0 : t, u.roundToDecimalPlace >= 0 && (i = parseFloat("1." + i), i = i.toFixed(u.roundToDecimalPlace), i.substring(0, 1) == "2" && (t = Number(t) + 1), i = i.substring(2)), t = String(t), u.groupDigits)
                            for (f = 0; f < Math.floor((t.length - (1 + f)) / 3); f++)
                                t = t.substring(0, t.length - (4 * f + 3)) + u.digitGroupSymbol + t.substring(t.length - (4 * f + 3));
                        (h && u.roundToDecimalPlace == -1 || u.roundToDecimalPlace > 0) && (t += u.decimalSymbol + i);
                        a = c ? u.positiveFormat : u.negativeFormat;
                        o = a.replace(/%s/g, u.symbol);
                        o = o.replace(/%n/g, t);
                        e = n([]);
                        e = r ? n(r) : $this;
                        e[e.is("input, select, textarea") ? "val" : "html"](o);
                        h && u.eventOnDecimalsEntered && l.length > u.roundToDecimalPlace && e.trigger("decimalsEntered", l);
                        u.colorize && e.css("color", c ? "black" : "red")
                    }
                })
            };
            n.fn.toNumber = function(r) {
                var u = n.extend({
                    name: "toNumber",
                    region: "",
                    global: !0
                }, n.formatCurrency.regions[""]);
                return r = jQuery.extend(u, r), r.region.length > 0 && (r = n.extend(r, t(r.region))), r.regex = i(r), this.each(function() {
                    var t = n(this).is("input, select, textarea") ? "val" : "html";
                    n(this)[t](n(this)[t]().replace("(", "(-").replace(r.regex, ""))
                })
            };
            n.fn.asNumber = function(u) {
                var o = n.extend({
                    name: "asNumber",
                    region: "",
                    parse: !0,
                    parseType: "Float",
                    global: !0
                }, n.formatCurrency.regions[""]),
                        e, f;
                return (u = jQuery.extend(o, u), u.region.length > 0 && (u = n.extend(u, t(u.region))), u.regex = i(u), u.parseType = r(u.parseType), e = n(this).is("input, select, textarea") ? "val" : "html", f = n(this)[e](), f = f ? f : "", f = f.replace("(", "(-"), f = f.replace(u.regex, ""), !u.parse) ? f : (f.length == 0 && (f = "0"), u.decimalSymbol != "." && (f = f.replace(u.decimalSymbol, ".")), window["parse" + u.parseType](f))
            }
        }(jQuery),
        function(n, t) {
            function r(t, r) {
                this.anchor = t;
                this.$anchor = n(t);
                this.options = n.extend({}, u, r, this.$anchor.data());
                this._defaults = u;
                this._name = i;
                this.init()
            }
            var i = "frosty",
                    u = {
                        attribute: "title",
                        classes: "tip",
                        content: "",
                        delay: 0,
                        hasArrow: !0,
                        html: !1,
                        offset: 10,
                        position: "top",
                        removeTitle: !0,
                        selector: !1,
                        smartReposition: !0,
                        trigger: "hover",
                        onHidden: function() {
                        },
                        onShown: function() {
                        }
                    };
            r.prototype = {
                init: function() {
                    this.rid = Math.random().toString(36).substr(2, 16);
                    this._createTip();
                    this._bindEvents()
                },
                _createTip: function() {
                    this.options.html ? this.tipContent = this.options.content : this.options.selector ? this.tipContent = n(this.options.selector).html() : (this.tipContent = this.$anchor.attr(this.options.attribute), this.options.attribute === "title" && this.options.removeTitle && (this.$anchor.attr("data-original-title", this.tipContent), this.$anchor.removeAttr("title")));
                    this.$el = n("<div />", {
                        "class": this.options.classes,
                        html: this.tipContent
                    }).css({
                        "z-index": "9999",
                        left: "-9999px",
                        position: "absolute"
                    });
                    this.$el.appendTo("body");
                    var t = this._getPosition();
                    t = this._checkOverflow(t);
                    this.$el.detach().css(t);
                    this.options.hasArrow && this._addArrowClass()
                },
                _bindEvents: function() {
                    switch (this.options.trigger) {
                        case "click":
                            this.$anchor.on("click." + i, n.proxy(this.toggle, this));
                            break;
                        case "manual":
                            break;
                        case "focus":
                            this.$anchor.on("focus." + i, n.proxy(this.show, this));
                            this.$anchor.on("blur." + i, n.proxy(this.hide, this));
                            break;
                        default:
                            this.$anchor.on("mouseenter." + i, n.proxy(this.show, this));
                            this.$anchor.on("mouseleave." + i, n.proxy(this.hide, this))
                    }
                    n(t).on("resize." + this.rid, n.proxy(this._setPosition, this))
                },
                _setState: function(n) {
                    this.state = n;
                    switch (n) {
                        case "visible":
                            this.$el.appendTo("body");
                            this._checkContent();
                            this._setPosition();
                            this.options.onShown.call(this);
                            this.$anchor.trigger("shown");
                            break;
                        case "hidden":
                            this.$el.detach();
                            this.options.onHidden.call(this);
                            this.$anchor.trigger("hidden")
                    }
                },
                _checkContent: function() {
                    this.options.selector && (this.tipContent = n(this.options.selector).html(), this.$el.html(this.tipContent))
                },
                _addArrowClass: function() {
                    switch (this.options.position) {
                        case "left":
                            this.$el.addClass("arrow-right");
                            break;
                        case "right":
                            this.$el.addClass("arrow-left");
                            break;
                        case "bottom":
                            this.$el.addClass("arrow-top");
                            break;
                        default:
                            this.$el.addClass("arrow-bottom")
                    }
                },
                _getPosition: function() {
                    var n = this.$anchor.offset();
                    switch (this.options.position) {
                        case "left":
                            n.left = n.left - this.$el.outerWidth() - this.options.offset;
                            n.top = n.top + this.$anchor.outerHeight() / 2 - this.$el.outerHeight() / 2;
                            break;
                        case "right":
                            n.left = n.left + this.$anchor.outerWidth() + this.options.offset;
                            n.top = n.top + this.$anchor.outerHeight() / 2 - this.$el.outerHeight() / 2;
                            break;
                        case "bottom":
                            n.top = n.top + this.$anchor.outerHeight() + this.options.offset;
                            n.left = n.left + this.$anchor.outerWidth() / 2 - this.$el.outerWidth() / 2;
                            break;
                        default:
                            n.top = n.top - this.$el.outerHeight() - this.options.offset;
                            n.left = n.left + this.$anchor.outerWidth() / 2 - this.$el.outerWidth() / 2
                    }
                    return n
                },
                _checkOverflow: function(i) {
                    if (!this.options.smartReposition)
                        return i;
                    var r = this.options.position;
                    return i.top < 0 && (this.options.position = "bottom"), i.top + this.$el.height() > n(t).height() && (this.options.position = "top"), i.left < 0 && (this.options.position = "right"), i.left + this.$el.width() > n(t).width() && (this.options.position = "left"), this.options.position !== r && (i = this._getPosition(), this.$el.attr("class", this.options.classes), this._addArrowClass()), i
                },
                _setPosition: function() {
                    var n = this._getPosition();
                    n = this._checkOverflow(n);
                    this.$el.css(n)
                },
                show: function() {
                    var t = this,
                            n = typeof this.options.delay == "object" ? parseInt(this.options.delay.show, 10) : parseInt(this.options.delay, 10);
                    clearTimeout(this.timeout);
                    this.timeout = n === 0 ? this._setState("visible") : setTimeout(function() {
                        t._setState("visible")
                    }, n)
                },
                hide: function() {
                    var t = this,
                            n = typeof this.options.delay == "object" ? parseInt(this.options.delay.hide, 10) : parseInt(this.options.delay, 10);
                    clearTimeout(this.timeout);
                    this.timeout = n === 0 ? this._setState("hidden") : setTimeout(function() {
                        t._setState("hidden")
                    }, n)
                },
                toggle: function() {
                    this.state === "visible" ? this.hide() : this.show()
                },
                addClass: function(n) {
                    typeof n == "string" && this.$el.addClass(n)
                },
                removeClass: function(n) {
                    typeof n == "string" && this.$el.removeClass(n)
                },
                destroy: function() {
                    n(t).off("resize." + this.rid);
                    this.$el.hide();
                    this.$anchor.removeData("plugin_" + i);
                    this.$anchor.off("." + i);
                    this.$el.remove()
                }
            };
            n.fn[i] = function(t, u) {
                if (typeof t == "string")
                    this.each(function() {
                        if (n.data(this, "plugin_" + i))
                            switch (t) {
                                case "show":
                                    n.data(this, "plugin_" + i).show();
                                    break;
                                case "hide":
                                    n.data(this, "plugin_" + i).hide();
                                    break;
                                case "toggle":
                                    n.data(this, "plugin_" + i).toggle();
                                    break;
                                case "addClass":
                                    n.data(this, "plugin_" + i).addClass(u);
                                    break;
                                case "removeClass":
                                    n.data(this, "plugin_" + i).removeClass(u);
                                    break;
                                case "destroy":
                                    n.data(this, "plugin_" + i).destroy()
                            }
                    });
                else
                    return this.each(function() {
                        n.data(this, "plugin_" + i) || n.data(this, "plugin_" + i, new r(this, t))
                    })
            }
        }(jQuery, window, document),
        function(n) {
            var t = function(t, i) {
                var u = n.extend({}, n.fn.nivoSlider.defaults, i),
                        r = {
                            currentSlide: 0,
                            currentImage: "",
                            totalSlides: 0,
                            running: !1,
                            paused: !1,
                            stop: !1,
                            controlNavEl: !1
                        },
                f = n(t),
                        e, s, v, o, h, l;
                if (f.data("nivo:vars", r).addClass("nivoSlider"), e = f.children(), e.each(function() {
                    var t = n(this),
                            i = "",
                            u, f;
                    t.is("img") || (t.is("a") && (t.addClass("nivo-imageLink"), i = t), t = t.find("img:first"));
                    u = u === 0 ? t.attr("width") : t.width();
                    f = f === 0 ? t.attr("height") : t.height();
                    i !== "" && i.css("display", "none");
                    t.css("display", "none");
                    r.totalSlides++
                }), u.randomStart && (u.startSlide = Math.floor(Math.random() * r.totalSlides)), u.startSlide > 0 && (u.startSlide >= r.totalSlides && (u.startSlide = r.totalSlides - 1), r.currentSlide = u.startSlide), r.currentImage = n(e[r.currentSlide]).is("img") ? n(e[r.currentSlide]) : n(e[r.currentSlide]).find("img:first"), n(e[r.currentSlide]).is("a") && n(e[r.currentSlide]).css("display", "block"), s = n("<img/>").addClass("nivo-main-image"), s.attr("src", r.currentImage.attr("src")).show(), f.append(s), n(window).resize(function() {
                    f.children("img").width(f.width());
                    s.attr("src", r.currentImage.attr("src"));
                    s.stop().height("auto");
                    n(".nivo-slice").remove();
                    n(".nivo-box").remove()
                }), f.append(n('<div class="nivo-caption"><\/div>')), v = function(t) {
                    var u = n(".nivo-caption", f),
                            i;
                    r.currentImage.attr("title") != "" && r.currentImage.attr("title") != undefined ? (i = r.currentImage.attr("title"), i.substr(0, 1) == "#" && (i = n(i).html()), u.css("display") == "block" ? setTimeout(function() {
                        u.html(i)
                    }, t.animSpeed) : (u.html(i), u.stop().fadeIn(t.animSpeed))) : u.stop().fadeOut(t.animSpeed)
                }, v(u), o = 0, !u.manualAdvance && e.length > 1 && (o = setInterval(function() {
                    a(f, e, u, !1)
                }, u.pauseTime)), u.directionNav) {
                    f.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + u.prevText + '<\/a><a class="nivo-nextNav">' + u.nextText + "<\/a><\/div>");
                    n(f).on("click", "a.nivo-prevNav", function() {
                        if (r.running)
                            return !1;
                        clearInterval(o);
                        o = "";
                        r.currentSlide -= 2;
                        a(f, e, u, "prev")
                    });
                    n(f).on("click", "a.nivo-nextNav", function() {
                        if (r.running)
                            return !1;
                        clearInterval(o);
                        o = "";
                        a(f, e, u, "next")
                    })
                }
                if (u.controlNav) {
                    for (r.controlNavEl = n('<div class="nivo-controlNav"><\/div>'), f.after(r.controlNavEl), h = 0; h < e.length; h++)
                        u.controlNavThumbs ? (r.controlNavEl.addClass("nivo-thumbs-enabled"), l = e.eq(h), l.is("img") || (l = l.find("img:first")), l.attr("data-thumb") && r.controlNavEl.append('<a class="nivo-control" rel="' + h + '"><img src="' + l.attr("data-thumb") + '" alt="" /><\/a>')) : r.controlNavEl.append('<a class="nivo-control" rel="' + h + '">' + (h + 1) + "<\/a>");
                    n("a:eq(" + r.currentSlide + ")", r.controlNavEl).addClass("active");
                    n("a", r.controlNavEl).bind("click", function() {
                        if (r.running || n(this).hasClass("active"))
                            return !1;
                        clearInterval(o);
                        o = "";
                        s.attr("src", r.currentImage.attr("src"));
                        r.currentSlide = n(this).attr("rel") - 1;
                        a(f, e, u, "control")
                    })
                }
                u.pauseOnHover && f.hover(function() {
                    r.paused = !0;
                    clearInterval(o);
                    o = ""
                }, function() {
                    r.paused = !1;
                    o !== "" || u.manualAdvance || (o = setInterval(function() {
                        a(f, e, u, !1)
                    }, u.pauseTime))
                });
                f.bind("nivo:animFinished", function() {
                    s.attr("src", r.currentImage.attr("src"));
                    r.running = !1;
                    n(e).each(function() {
                        n(this).is("a") && n(this).css("display", "none")
                    });
                    n(e[r.currentSlide]).is("a") && n(e[r.currentSlide]).css("display", "block");
                    o !== "" || r.paused || u.manualAdvance || (o = setInterval(function() {
                        a(f, e, u, !1)
                    }, u.pauseTime));
                    u.afterChange.call(this)
                });
                var c = function(t, i, r) {
                    var e, u, f;
                    for (n(r.currentImage).parent().is("a") && n(r.currentImage).parent().css("display", "block"), n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show(), e = n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height(), u = 0; u < i.slices; u++)
                        f = Math.round(t.width() / i.slices), u === i.slices - 1 ? t.append(n('<div class="nivo-slice" name="' + u + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (f + u * f - f) + 'px;" /><\/div>').css({
                            left: f * u + "px",
                            width: t.width() - f * u + "px",
                            height: e + "px",
                            opacity: "0",
                            overflow: "hidden"
                        })) : t.append(n('<div class="nivo-slice" name="' + u + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (f + u * f - f) + 'px;" /><\/div>').css({
                            left: f * u + "px",
                            width: f + "px",
                            height: e + "px",
                            opacity: "0",
                            overflow: "hidden"
                        }));
                    n(".nivo-slice", t).height(e);
                    s.stop().animate({
                        height: n(r.currentImage).height()
                    }, i.animSpeed)
                },
                        y = function(t, i, r) {
                            var e, o, f, u;
                            for (n(r.currentImage).parent().is("a") && n(r.currentImage).parent().css("display", "block"), n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show(), e = Math.round(t.width() / i.boxCols), o = Math.round(n('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / i.boxRows), f = 0; f < i.boxRows; f++)
                                for (u = 0; u < i.boxCols; u++)
                                    u === i.boxCols - 1 ? (t.append(n('<div class="nivo-box" name="' + u + '" rel="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * f + "px; left:-" + e * u + 'px;" /><\/div>').css({
                                        opacity: 0,
                                        left: e * u + "px",
                                        top: o * f + "px",
                                        width: t.width() - e * u + "px"
                                    })), n('.nivo-box[name="' + u + '"]', t).height(n('.nivo-box[name="' + u + '"] img', t).height() + "px")) : (t.append(n('<div class="nivo-box" name="' + u + '" rel="' + f + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * f + "px; left:-" + e * u + 'px;" /><\/div>').css({
                                        opacity: 0,
                                        left: e * u + "px",
                                        top: o * f + "px",
                                        width: e + "px"
                                    })), n('.nivo-box[name="' + u + '"]', t).height(n('.nivo-box[name="' + u + '"] img', t).height() + "px"));
                            s.stop().animate({
                                height: n(r.currentImage).height()
                            }, i.animSpeed)
                        },
                        a = function(t, i, r, u) {
                            var f = t.data("nivo:vars"),
                                    e, p, ut, it, k, rt;
                            if (f && f.currentSlide === f.totalSlides - 1 && r.lastSlide.call(this), (!f || f.stop) && !u)
                                return !1;
                            r.beforeChange.call(this);
                            u ? (u === "prev" && s.attr("src", f.currentImage.attr("src")), u === "next" && s.attr("src", f.currentImage.attr("src"))) : s.attr("src", f.currentImage.attr("src"));
                            f.currentSlide++;
                            f.currentSlide === f.totalSlides && (f.currentSlide = 0, r.slideshowEnd.call(this));
                            f.currentSlide < 0 && (f.currentSlide = f.totalSlides - 1);
                            f.currentImage = n(i[f.currentSlide]).is("img") ? n(i[f.currentSlide]) : n(i[f.currentSlide]).find("img:first");
                            r.controlNav && (n("a", f.controlNavEl).removeClass("active"), n("a:eq(" + f.currentSlide + ")", f.controlNavEl).addClass("active"));
                            v(r);
                            n(".nivo-slice", t).remove();
                            n(".nivo-box", t).remove();
                            e = r.effect;
                            p = "";
                            r.effect === "random" && (p = ["sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse"], e = p[Math.floor(Math.random() * (p.length + 1))], e === undefined && (e = "fade"));
                            r.effect.indexOf(",") !== -1 && (p = r.effect.split(","), e = p[Math.floor(Math.random() * p.length)], e === undefined && (e = "fade"));
                            f.currentImage.attr("data-transition") && (e = f.currentImage.attr("data-transition"));
                            f.running = !0;
                            var o = 0,
                                    h = 0,
                                    a = "",
                                    l = "",
                                    d = "",
                                    b = "";
                            if (e === "sliceDown" || e === "sliceDownRight" || e === "sliceDownLeft")
                                c(t, r, f), o = 0, h = 0, a = n(".nivo-slice", t), e === "sliceDownLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                                    var i = n(this);
                                    i.css({
                                        top: "0px"
                                    });
                                    h === r.slices - 1 ? setTimeout(function() {
                                        i.animate({
                                            opacity: "1.0"
                                        }, r.animSpeed, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + o) : setTimeout(function() {
                                        i.animate({
                                            opacity: "1.0"
                                        }, r.animSpeed)
                                    }, 100 + o);
                                    o += 50;
                                    h++
                                });
                            else if (e === "sliceUp" || e === "sliceUpRight" || e === "sliceUpLeft")
                                c(t, r, f), o = 0, h = 0, a = n(".nivo-slice", t), e === "sliceUpLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                                    var i = n(this);
                                    i.css({
                                        bottom: "0px"
                                    });
                                    h === r.slices - 1 ? setTimeout(function() {
                                        i.animate({
                                            opacity: "1.0"
                                        }, r.animSpeed, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + o) : setTimeout(function() {
                                        i.animate({
                                            opacity: "1.0"
                                        }, r.animSpeed)
                                    }, 100 + o);
                                    o += 50;
                                    h++
                                });
                            else if (e === "sliceUpDown" || e === "sliceUpDownRight" || e === "sliceUpDownLeft")
                                c(t, r, f), o = 0, h = 0, ut = 0, a = n(".nivo-slice", t), e === "sliceUpDownLeft" && (a = n(".nivo-slice", t)._reverse()), a.each(function() {
                                    var i = n(this);
                                    h === 0 ? (i.css("top", "0px"), h++) : (i.css("bottom", "0px"), h = 0);
                                    ut === r.slices - 1 ? setTimeout(function() {
                                        i.animate({
                                            opacity: "1.0"
                                        }, r.animSpeed, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + o) : setTimeout(function() {
                                        i.animate({
                                            opacity: "1.0"
                                        }, r.animSpeed)
                                    }, 100 + o);
                                    o += 50;
                                    ut++
                                });
                            else if (e === "fold")
                                c(t, r, f), o = 0, h = 0, n(".nivo-slice", t).each(function() {
                                    var i = n(this),
                                            u = i.width();
                                    i.css({
                                        top: "0px",
                                        width: "0px"
                                    });
                                    h === r.slices - 1 ? setTimeout(function() {
                                        i.animate({
                                            width: u,
                                            opacity: "1.0"
                                        }, r.animSpeed, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + o) : setTimeout(function() {
                                        i.animate({
                                            width: u,
                                            opacity: "1.0"
                                        }, r.animSpeed)
                                    }, 100 + o);
                                    o += 50;
                                    h++
                                });
                            else if (e === "fade")
                                c(t, r, f), l = n(".nivo-slice:first", t), l.css({
                                    width: t.width() + "px"
                                }), l.animate({
                                    opacity: "1.0"
                                }, r.animSpeed * 2, "", function() {
                                    t.trigger("nivo:animFinished")
                                });
                            else if (e === "slideInRight")
                                c(t, r, f), l = n(".nivo-slice:first", t), l.css({
                                    width: "0px",
                                    opacity: "1"
                                }), l.animate({
                                    width: t.width() + "px"
                                }, r.animSpeed * 2, "", function() {
                                    t.trigger("nivo:animFinished")
                                });
                            else if (e === "slideInLeft")
                                c(t, r, f), l = n(".nivo-slice:first", t), l.css({
                                    width: "0px",
                                    opacity: "1",
                                    left: "",
                                    right: "0px"
                                }), l.animate({
                                    width: t.width() + "px"
                                }, r.animSpeed * 2, "", function() {
                                    l.css({
                                        left: "0px",
                                        right: ""
                                    });
                                    t.trigger("nivo:animFinished")
                                });
                            else if (e === "boxRandom")
                                y(t, r, f), d = r.boxCols * r.boxRows, h = 0, o = 0, b = w(n(".nivo-box", t)), b.each(function() {
                                    var i = n(this);
                                    h === d - 1 ? setTimeout(function() {
                                        i.animate({
                                            opacity: "1"
                                        }, r.animSpeed, "", function() {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + o) : setTimeout(function() {
                                        i.animate({
                                            opacity: "1"
                                        }, r.animSpeed)
                                    }, 100 + o);
                                    o += 20;
                                    h++
                                });
                            else if (e === "boxRain" || e === "boxRainReverse" || e === "boxRainGrow" || e === "boxRainGrowReverse") {
                                y(t, r, f);
                                d = r.boxCols * r.boxRows;
                                h = 0;
                                o = 0;
                                var g = 0,
                                        nt = 0,
                                        tt = [];
                                for (tt[g] = [], b = n(".nivo-box", t), (e === "boxRainReverse" || e === "boxRainGrowReverse") && (b = n(".nivo-box", t)._reverse()), b.each(function() {
                                    tt[g][nt] = n(this);
                                    nt++;
                                    nt === r.boxCols && (g++, nt = 0, tt[g] = [])
                                }), it = 0; it < r.boxCols * 2; it++) {
                                    for (k = it, rt = 0; rt < r.boxRows; rt++)
                                        k >= 0 && k < r.boxCols && (function(i, u, f, o, s) {
                                            var h = n(tt[i][u]),
                                                    c = h.width(),
                                                    l = h.height();
                                            (e === "boxRainGrow" || e === "boxRainGrowReverse") && h.width(0).height(0);
                                            o === s - 1 ? setTimeout(function() {
                                                h.animate({
                                                    opacity: "1",
                                                    width: c,
                                                    height: l
                                                }, r.animSpeed / 1.3, "", function() {
                                                    t.trigger("nivo:animFinished")
                                                })
                                            }, 100 + f) : setTimeout(function() {
                                                h.animate({
                                                    opacity: "1",
                                                    width: c,
                                                    height: l
                                                }, r.animSpeed / 1.3)
                                            }, 100 + f)
                                        }(rt, k, o, h, d), h++), k--;
                                    o += 100
                                }
                            }
                        },
                        w = function(n) {
                            for (var i, r, t = n.length; t; i = parseInt(Math.random() * t, 10), r = n[--t], n[t] = n[i], n[i] = r)
                                ;
                            return n
                        },
                        p = function(n) {
                            this.console && typeof console.log != "undefined" && console.log(n)
                        };
                return this.stop = function() {
                    n(t).data("nivo:vars").stop || (n(t).data("nivo:vars").stop = !0, p("Stop Slider"))
                }, this.start = function() {
                    n(t).data("nivo:vars").stop && (n(t).data("nivo:vars").stop = !1, p("Start Slider"))
                }, u.afterLoad.call(this), this
            };
            n.fn.nivoSlider = function(i) {
                return this.each(function() {
                    var r = n(this),
                            u;
                    if (r.data("nivoslider"))
                        return r.data("nivoslider");
                    u = new t(this, i);
                    r.data("nivoslider", u)
                })
            };
            n.fn.nivoSlider.defaults = {
                effect: "random",
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 500,
                pauseTime: 3e3,
                startSlide: 0,
                directionNav: !0,
                controlNav: !0,
                controlNavThumbs: !1,
                pauseOnHover: !0,
                manualAdvance: !1,
                prevText: "Prev",
                nextText: "Next",
                randomStart: !1,
                beforeChange: function() {
                },
                afterChange: function() {
                },
                slideshowEnd: function() {
                },
                lastSlide: function() {
                },
                afterLoad: function() {
                }
            };
            n.fn._reverse = [].reverse
        }(jQuery),
        function(n) {
            n.fn.numeric = function(t, i) {
                typeof t == "boolean" && (t = {
                    decimal: t,
                    negative: !0,
                    decimalPlaces: -1
                });
                t = t || {};
                typeof t.negative == "undefined" && (t.negative = !0);
                var r = t.decimal === !1 ? "" : t.decimal || ".",
                        u = t.negative === !0 ? !0 : !1,
                        f = typeof t.decimalPlaces == "undefined" ? -1 : t.decimalPlaces;
                return i = typeof i == "function" ? i : function() {
                }, this.data("numeric.decimal", r).data("numeric.negative", u).data("numeric.callback", i).data("numeric.decimalPlaces", f).keypress(n.fn.numeric.keypress).keyup(n.fn.numeric.keyup).blur(n.fn.numeric.blur)
            };
            n.fn.numeric.keypress = function(t) {
                var u = n.data(this, "numeric.decimal"),
                        s = n.data(this, "numeric.negative"),
                        o = n.data(this, "numeric.decimalPlaces"),
                        i = t.charCode ? t.charCode : t.keyCode ? t.keyCode : 0,
                        r, f, e;
                if (i == 13 && this.nodeName.toLowerCase() == "input")
                    return !0;
                if (i == 13)
                    return !1;
                if ((r = !1, t.ctrlKey && i == 97 || t.ctrlKey && i == 65) || t.ctrlKey && i == 120 || t.ctrlKey && i == 88 || t.ctrlKey && i == 99 || t.ctrlKey && i == 67 || t.ctrlKey && i == 122 || t.ctrlKey && i == 90 || t.ctrlKey && i == 118 || t.ctrlKey && i == 86 || t.shiftKey && i == 45)
                    return !0;
                if (i < 48 || i > 57) {
                    if (f = n(this).val(), n.inArray("-", f.split("")) !== 0 && s && i == 45 && (f.length === 0 || parseInt(n.fn.getSelectionStart(this), 10) === 0))
                        return !0;
                    u && i == u.charCodeAt(0) && n.inArray(u, f.split("")) != -1 && (r = !1);
                    i != 8 && i != 9 && i != 13 && i != 35 && i != 36 && i != 37 && i != 39 && i != 46 ? r = !1 : typeof t.charCode != "undefined" && (t.keyCode == t.which && t.which !== 0 ? (r = !0, t.which == 46 && (r = !1)) : t.keyCode !== 0 && t.charCode === 0 && t.which === 0 && (r = !0));
                    u && i == u.charCodeAt(0) && (r = n.inArray(u, f.split("")) == -1 ? !0 : !1)
                } else
                    r = !0, u && o > 0 && (e = n.inArray(u, n(this).val().split("")), e >= 0 && n(this).val().length > e + o && (r = !1));
                return r
            };
            n.fn.numeric.keyup = function() {
                var t = n(this).val(),
                        c, l, i, o, a, s, v, f, p, u;
                if (t && t.length > 0) {
                    var h = n.fn.getSelectionStart(this),
                            e = n.fn.getSelectionEnd(this),
                            r = n.data(this, "numeric.decimal"),
                            w = n.data(this, "numeric.negative"),
                            y = n.data(this, "numeric.decimalPlaces");
                    for (r !== "" && r !== null && (u = n.inArray(r, t.split("")), u === 0 && (this.value = "0" + t, h++, e++), u == 1 && t.charAt(0) == "-" && (this.value = "-0" + t.substring(1), h++, e++), t = this.value), c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", r], l = t.length, i = l - 1; i >= 0; i--) {
                        for (o = t.charAt(i), i !== 0 && o == "-" ? t = t.substring(0, i) + t.substring(i + 1) : i !== 0 || w || o != "-" || (t = t.substring(1)), a = !1, s = 0; s < c.length; s++)
                            if (o == c[s]) {
                                a = !0;
                                break
                            }
                        a && o != " " || (t = t.substring(0, i) + t.substring(i + 1))
                    }
                    if (v = n.inArray(r, t.split("")), v > 0)
                        for (f = l - 1; f > v; f--)
                            p = t.charAt(f), p == r && (t = t.substring(0, f) + t.substring(f + 1));
                    r && y > 0 && (u = n.inArray(r, t.split("")), u >= 0 && (t = t.substring(0, u + y + 1), e = Math.min(t.length, e)));
                    this.value = t;
                    n.fn.setSelection(this, [h, e])
                }
            };
            n.fn.numeric.blur = function() {
                var r = n.data(this, "numeric.decimal"),
                        u = n.data(this, "numeric.callback"),
                        f = n.data(this, "numeric.negative"),
                        t = this.value,
                        i;
                t !== "" && (i = new RegExp(f ? "-?" : "^\\d+$|^\\d*" + r + "\\d+$"), i.exec(t) || u.apply(this))
            };
            n.fn.removeNumeric = function() {
                return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).data("numeric.decimalPlaces", null).unbind("keypress", n.fn.numeric.keypress).unbind("keyup", n.fn.numeric.keyup).unbind("blur", n.fn.numeric.blur)
            };
            n.fn.getSelectionStart = function(n) {
                if (n.type === "number")
                    return undefined;
                if (n.createTextRange && document.selection) {
                    var t = document.selection.createRange().duplicate();
                    return (t.moveEnd("character", n.value.length), t.text == "") ? n.value.length : Math.max(0, n.value.lastIndexOf(t.text))
                }
                try {
                    return n.selectionStart
                } catch (i) {
                    return 0
                }
            };
            n.fn.getSelectionEnd = function(n) {
                if (n.type === "number")
                    return undefined;
                if (n.createTextRange && document.selection) {
                    var t = document.selection.createRange().duplicate();
                    return t.moveStart("character", -n.value.length), t.text.length
                }
                return n.selectionEnd
            };
            n.fn.setSelection = function(n, t) {
                if (typeof t == "number" && (t = [t, t]), t && t.constructor == Array && t.length == 2)
                    if (n.type === "number")
                        n.focus();
                    else if (n.createTextRange) {
                        var i = n.createTextRange();
                        i.collapse(!0);
                        i.moveStart("character", t[0]);
                        i.moveEnd("character", t[1] - t[0]);
                        i.select()
                    } else {
                        n.focus();
                        try {
                            n.setSelectionRange && n.setSelectionRange(t[0], t[1])
                        } catch (r) {
                        }
                    }
            }
        }(jQuery),
        function() {
            "use strict";
            var c = this,
                    g = c.Chart,
                    t = function(t) {
                        var r, u;
                        this.canvas = t.canvas;
                        this.ctx = t;
                        var i = function(n, t) {
                            return n["offset" + t] ? n["offset" + t] : document.defaultView.getComputedStyle(n).getPropertyValue(t)
                        },
                                r = this.width = i(t.canvas, "Width"),
                                u = this.height = i(t.canvas, "Height");
                        return t.canvas.width = r, t.canvas.height = u, r = this.width = t.canvas.width, u = this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
                    };
            t.defaults = {
                global: {
                    animation: !0,
                    animationSteps: 60,
                    animationEasing: "easeOutQuart",
                    showScale: !0,
                    scaleOverride: !1,
                    scaleSteps: null,
                    scaleStepWidth: null,
                    scaleStartValue: null,
                    scaleLineColor: "rgba(0,0,0,.1)",
                    scaleLineWidth: 1,
                    scaleShowLabels: !0,
                    scaleLabel: "<%=value%>",
                    scaleIntegersOnly: !0,
                    scaleBeginAtZero: !1,
                    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    scaleFontSize: 12,
                    scaleFontStyle: "normal",
                    scaleFontColor: "#666",
                    responsive: !1,
                    maintainAspectRatio: !0,
                    showTooltips: !0,
                    customTooltips: !1,
                    tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
                    tooltipFillColor: "rgba(0,0,0,0.8)",
                    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipFontSize: 14,
                    tooltipFontStyle: "normal",
                    tooltipFontColor: "#fff",
                    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    tooltipTitleFontSize: 14,
                    tooltipTitleFontStyle: "bold",
                    tooltipTitleFontColor: "#fff",
                    tooltipYPadding: 6,
                    tooltipXPadding: 6,
                    tooltipCaretSize: 8,
                    tooltipCornerRadius: 6,
                    tooltipXOffset: 10,
                    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
                    multiTooltipTemplate: "<%= value %>",
                    multiTooltipKeyBackground: "#fff",
                    onAnimationProgress: function() {
                    },
                    onAnimationComplete: function() {
                    }
                }
            };
            t.types = {};
            var n = t.helpers = {},
                    i = n.each = function(n, t, i) {
                        var f = Array.prototype.slice.call(arguments, 3),
                                r, u;
                        if (n)
                            if (n.length === +n.length)
                                for (r = 0; r < n.length; r++)
                                    t.apply(i, [n[r], r].concat(f));
                            else
                                for (u in n)
                                    t.apply(i, [n[u], u].concat(f))
                    },
                    l = n.clone = function(n) {
                        var t = {};
                        return i(n, function(i, r) {
                            n.hasOwnProperty(r) && (t[r] = i)
                        }), t
                    },
                    r = n.extend = function(n) {
                        return i(Array.prototype.slice.call(arguments, 1), function(t) {
                            i(t, function(i, r) {
                                t.hasOwnProperty(r) && (n[r] = i)
                            })
                        }), n
                    },
                    nt = n.merge = function() {
                        var n = Array.prototype.slice.call(arguments, 0);
                        return n.unshift({}), r.apply(null, n)
                    },
                    tt = n.indexOf = function(n, t) {
                        if (Array.prototype.indexOf)
                            return n.indexOf(t);
                        for (var i = 0; i < n.length; i++)
                            if (n[i] === t)
                                return i;
                        return -1
                    },
                    p = (n.where = function(t, i) {
                        var r = [];
                        return n.each(t, function(n) {
                            i(n) && r.push(n)
                        }), r
                    }, n.findNextWhere = function(n, t, i) {
                        var r, u;
                        for (i || (i = - 1), r = i + 1; r < n.length; r++)
                            if (u = n[r], t(u))
                                return u
                    }, n.findPreviousWhere = function(n, t, i) {
                        var r, u;
                        for (i || (i = n.length), r = i - 1; r >= 0; r--)
                            if (u = n[r], t(u))
                                return u
                    }, n.inherits = function(n) {
                        var i = this,
                                t = n && n.hasOwnProperty("constructor") ? n.constructor : function() {
                            return i.apply(this, arguments)
                        },
                                u = function() {
                                    this.constructor = t
                                };
                        return u.prototype = i.prototype, t.prototype = new u, t.extend = p, n && r(t.prototype, n), t.__super__ = i.prototype, t
                    }),
                    a = n.noop = function() {
                    },
                    it = n.uid = function() {
                        var n = 0;
                        return function() {
                            return "chart-" + n++
                        }
                    }(),
                    rt = n.warn = function(n) {
                        window.console && "function" == typeof window.console.warn && console.warn(n)
                    },
                    ut = n.amd = "function" == typeof define && define.amd,
                    u = n.isNumber = function(n) {
                        return !isNaN(parseFloat(n)) && isFinite(n)
                    },
                    h = n.max = function(n) {
                        return Math.max.apply(Math, n)
                    },
                    o = n.min = function(n) {
                        return Math.min.apply(Math, n)
                    },
                    w = (n.cap = function(n, t, i) {
                        if (u(t)) {
                            if (n > t)
                                return t
                        } else if (u(i) && i > n)
                            return i;
                        return n
                    }, n.getDecimalPlaces = function(n) {
                        return n % 1 != 0 && u(n) ? n.toString().split(".")[1].length : 0
                    }),
                    v = n.radians = function(n) {
                        return n * (Math.PI / 180)
                    },
                    b = (n.getAngleFromPoint = function(n, t) {
                        var i = t.x - n.x,
                                r = t.y - n.y,
                                f = Math.sqrt(i * i + r * r),
                                u = 2 * Math.PI + Math.atan2(r, i);
                        return 0 > i && 0 > r && (u += 2 * Math.PI), {
                            angle: u,
                            distance: f
                        }
                    }, n.aliasPixel = function(n) {
                        return n % 2 == 0 ? 0 : .5
                    }),
                    ft = (n.splineCurve = function(n, t, i, r) {
                        var u = Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)),
                                f = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)),
                                e = r * u / (u + f),
                                o = r * f / (u + f);
                        return {
                            inner: {
                                x: t.x - e * (i.x - n.x),
                                y: t.y - e * (i.y - n.y)
                            },
                            outer: {
                                x: t.x + o * (i.x - n.x),
                                y: t.y + o * (i.y - n.y)
                            }
                        }
                    }, n.calculateOrderOfMagnitude = function(n) {
                        return Math.floor(Math.log(n) / Math.LN10)
                    }),
                    f = (n.calculateScaleRange = function(n, t, i, r, u) {
                        var w = 2,
                                v = Math.floor(t / (1.5 * i)),
                                y = w >= v,
                                c = h(n),
                                l = o(n);
                        c === l && (c += .5, l >= .5 && !r ? l -= .5 : c += .5);
                        for (var b = Math.abs(c - l), s = ft(b), k = Math.ceil(c / (1 * Math.pow(10, s))) * Math.pow(10, s), p = r ? 0 : Math.floor(l / (1 * Math.pow(10, s))) * Math.pow(10, s), a = k - p, f = Math.pow(10, s), e = Math.round(a / f);
                                (e > v || v > 2 * e) && !y; )
                            if (e > v)
                                f *= 2, e = Math.round(a / f), e % 1 != 0 && (y = !0);
                            else if (u && s >= 0) {
                                if (f / 2 % 1 != 0)
                                    break;
                                f /= 2;
                                e = Math.round(a / f)
                            } else
                                f /= 2, e = Math.round(a / f);
                        return y && (e = w, f = a / e), {
                            steps: e,
                            stepValue: f,
                            min: p,
                            max: p + e * f
                        }
                    }, n.template = function(n, t) {
                        function r(n, t) {
                            var r = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[n] = i[n];
                            return t ? r(t) : r
                        }
                        if (n instanceof Function)
                            return n(t);
                        var i = {};
                        return r(n, t)
                    }),
                    s = (n.generateLabels = function(n, t, r, u) {
                        var e = new Array(t);
                        return labelTemplateString && i(e, function(t, i) {
                            e[i] = f(n, {
                                value: r + u * (i + 1)
                            })
                        }), e
                    }, n.easingEffects = {
                        linear: function(n) {
                            return n
                        },
                        easeInQuad: function(n) {
                            return n * n
                        },
                        easeOutQuad: function(n) {
                            return -1 * n * (n - 2)
                        },
                        easeInOutQuad: function(n) {
                            return (n /= .5) < 1 ? .5 * n * n : -.5 * (--n * (n - 2) - 1)
                        },
                        easeInCubic: function(n) {
                            return n * n * n
                        },
                        easeOutCubic: function(n) {
                            return 1 * ((n = n / 1 - 1) * n * n + 1)
                        },
                        easeInOutCubic: function(n) {
                            return (n /= .5) < 1 ? .5 * n * n * n : .5 * ((n -= 2) * n * n + 2)
                        },
                        easeInQuart: function(n) {
                            return n * n * n * n
                        },
                        easeOutQuart: function(n) {
                            return -1 * ((n = n / 1 - 1) * n * n * n - 1)
                        },
                        easeInOutQuart: function(n) {
                            return (n /= .5) < 1 ? .5 * n * n * n * n : -.5 * ((n -= 2) * n * n * n - 2)
                        },
                        easeInQuint: function(n) {
                            return 1 * (n /= 1) * n * n * n * n
                        },
                        easeOutQuint: function(n) {
                            return 1 * ((n = n / 1 - 1) * n * n * n * n + 1)
                        },
                        easeInOutQuint: function(n) {
                            return (n /= .5) < 1 ? .5 * n * n * n * n * n : .5 * ((n -= 2) * n * n * n * n + 2)
                        },
                        easeInSine: function(n) {
                            return -1 * Math.cos(n / 1 * (Math.PI / 2)) + 1
                        },
                        easeOutSine: function(n) {
                            return 1 * Math.sin(n / 1 * (Math.PI / 2))
                        },
                        easeInOutSine: function(n) {
                            return -.5 * (Math.cos(Math.PI * n / 1) - 1)
                        },
                        easeInExpo: function(n) {
                            return 0 === n ? 1 : 1 * Math.pow(2, 10 * (n / 1 - 1))
                        },
                        easeOutExpo: function(n) {
                            return 1 === n ? 1 : 1 * (-Math.pow(2, -10 * n) + 1)
                        },
                        easeInOutExpo: function(n) {
                            return 0 === n ? 0 : 1 === n ? 1 : (n /= .5) < 1 ? .5 * Math.pow(2, 10 * (n - 1)) : .5 * (-Math.pow(2, -10 * --n) + 2)
                        },
                        easeInCirc: function(n) {
                            return n >= 1 ? n : -1 * (Math.sqrt(1 - (n /= 1) * n) - 1)
                        },
                        easeOutCirc: function(n) {
                            return 1 * Math.sqrt(1 - (n = n / 1 - 1) * n)
                        },
                        easeInOutCirc: function(n) {
                            return (n /= .5) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
                        },
                        easeInElastic: function(n) {
                            var r = 1.70158,
                                    t = 0,
                                    i = 1;
                            return 0 === n ? 0 : 1 == (n /= 1) ? 1 : (t || (t = .3), i < Math.abs(1) ? (i = 1, r = t / 4) : r = t / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (1 * n - r) * Math.PI / t)))
                        },
                        easeOutElastic: function(n) {
                            var r = 1.70158,
                                    t = 0,
                                    i = 1;
                            return 0 === n ? 0 : 1 == (n /= 1) ? 1 : (t || (t = .3), i < Math.abs(1) ? (i = 1, r = t / 4) : r = t / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * n) * Math.sin(2 * (1 * n - r) * Math.PI / t) + 1)
                        },
                        easeInOutElastic: function(n) {
                            var r = 1.70158,
                                    t = 0,
                                    i = 1;
                            return 0 === n ? 0 : 2 == (n /= .5) ? 1 : (t || (t = .3 * 1.5), i < Math.abs(1) ? (i = 1, r = t / 4) : r = t / (2 * Math.PI) * Math.asin(1 / i), 1 > n ? -.5 * i * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (1 * n - r) * Math.PI / t) : i * Math.pow(2, -10 * (n -= 1)) * Math.sin(2 * (1 * n - r) * Math.PI / t) * .5 + 1)
                        },
                        easeInBack: function(n) {
                            var t = 1.70158;
                            return 1 * (n /= 1) * n * ((t + 1) * n - t)
                        },
                        easeOutBack: function(n) {
                            var t = 1.70158;
                            return 1 * ((n = n / 1 - 1) * n * ((t + 1) * n + t) + 1)
                        },
                        easeInOutBack: function(n) {
                            var t = 1.70158;
                            return (n /= .5) < 1 ? .5 * n * n * (((t *= 1.525) + 1) * n - t) : .5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2)
                        },
                        easeInBounce: function(n) {
                            return 1 - s.easeOutBounce(1 - n)
                        },
                        easeOutBounce: function(n) {
                            return (n /= 1) < 1 / 2.75 ? 7.5625 * n * n : 2 / 2.75 > n ? 1 * (7.5625 * (n -= 1.5 / 2.75) * n + .75) : 2.5 / 2.75 > n ? 1 * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) : 1 * (7.5625 * (n -= 2.625 / 2.75) * n + .984375)
                        },
                        easeInOutBounce: function(n) {
                            return .5 > n ? .5 * s.easeInBounce(2 * n) : .5 * s.easeOutBounce(2 * n - 1) + .5
                        }
                    }),
                    k = n.requestAnimFrame = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(n) {
                            return window.setTimeout(n, 1e3 / 60)
                        }
                    }(),
                    et = n.cancelAnimFrame = function() {
                        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(n) {
                            return window.clearTimeout(n, 1e3 / 60)
                        }
                    }(),
                    ot = (n.animationLoop = function(n, t, i, r, u, f) {
                        var e = 0,
                                h = s[i] || s.linear,
                                o = function() {
                                    e++;
                                    var i = e / t,
                                            s = h(i);
                                    n.call(f, s, i, e);
                                    r.call(f, s, i);
                                    t > e ? f.animationFrame = k(o) : u.apply(f)
                                };
                        k(o)
                    }, n.getRelativePosition = function(n) {
                        var r, u, t = n.originalEvent || n,
                                f = n.currentTarget || n.srcElement,
                                i = f.getBoundingClientRect();
                        return t.touches ? (r = t.touches[0].clientX - i.left, u = t.touches[0].clientY - i.top) : (r = t.clientX - i.left, u = t.clientY - i.top), {
                            x: r,
                            y: u
                        }
                    }, n.addEvent = function(n, t, i) {
                        n.addEventListener ? n.addEventListener(t, i) : n.attachEvent ? n.attachEvent("on" + t, i) : n["on" + t] = i
                    }),
                    st = n.removeEvent = function(n, t, i) {
                        n.removeEventListener ? n.removeEventListener(t, i, !1) : n.detachEvent ? n.detachEvent("on" + t, i) : n["on" + t] = a
                    },
                    ht = (n.bindEvents = function(n, t, r) {
                        n.events || (n.events = {});
                        i(t, function(t) {
                            n.events[t] = function() {
                                r.apply(n, arguments)
                            };
                            ot(n.chart.canvas, t, n.events[t])
                        })
                    }, n.unbindEvents = function(n, t) {
                        i(t, function(t, i) {
                            st(n.chart.canvas, i, t)
                        })
                    }),
                    ct = n.getMaximumWidth = function(n) {
                        var t = n.parentNode;
                        return t.clientWidth
                    },
                    lt = n.getMaximumHeight = function(n) {
                        var t = n.parentNode;
                        return t.clientHeight
                    },
                    at = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(n) {
                        var t = n.ctx,
                                i = n.canvas.width,
                                r = n.canvas.height;
                        window.devicePixelRatio && (t.canvas.style.width = i + "px", t.canvas.style.height = r + "px", t.canvas.height = r * window.devicePixelRatio, t.canvas.width = i * window.devicePixelRatio, t.scale(window.devicePixelRatio, window.devicePixelRatio))
                    }),
                    vt = n.clear = function(n) {
                        n.ctx.clearRect(0, 0, n.width, n.height)
                    },
                    e = n.fontString = function(n, t, i) {
                        return t + " " + n + "px " + i
                    },
                    y = n.longestText = function(n, t, r) {
                        n.font = t;
                        var u = 0;
                        return i(r, function(t) {
                            var i = n.measureText(t).width;
                            u = i > u ? i : u
                        }), u
                    },
                    d = n.drawRoundedRectangle = function(n, t, i, r, u, f) {
                        n.beginPath();
                        n.moveTo(t + f, i);
                        n.lineTo(t + r - f, i);
                        n.quadraticCurveTo(t + r, i, t + r, i + f);
                        n.lineTo(t + r, i + u - f);
                        n.quadraticCurveTo(t + r, i + u, t + r - f, i + u);
                        n.lineTo(t + f, i + u);
                        n.quadraticCurveTo(t, i + u, t, i + u - f);
                        n.lineTo(t, i + f);
                        n.quadraticCurveTo(t, i, t + f, i);
                        n.closePath()
                    };
            t.instances = {};
            t.Type = function(n, i, r) {
                this.options = i;
                this.chart = r;
                this.id = it();
                t.instances[this.id] = this;
                i.responsive && this.resize();
                this.initialize.call(this, n)
            };
            r(t.Type.prototype, {
                initialize: function() {
                    return this
                },
                clear: function() {
                    return vt(this.chart), this
                },
                stop: function() {
                    return et(this.animationFrame), this
                },
                resize: function(n) {
                    this.stop();
                    var t = this.chart.canvas,
                            i = ct(this.chart.canvas),
                            r = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : lt(this.chart.canvas);
                    return t.width = this.chart.width = i, t.height = this.chart.height = r, at(this.chart), "function" == typeof n && n.apply(this, Array.prototype.slice.call(arguments, 1)), this
                },
                reflow: a,
                render: function(t) {
                    return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
                },
                generateLegend: function() {
                    return f(this.options.legendTemplate, this)
                },
                destroy: function() {
                    this.clear();
                    ht(this, this.events);
                    var n = this.chart.canvas;
                    n.width = this.chart.width;
                    n.height = this.chart.height;
                    n.style.removeProperty ? (n.style.removeProperty("width"), n.style.removeProperty("height")) : (n.style.removeAttribute("width"), n.style.removeAttribute("height"));
                    delete t.instances[this.id]
                },
                showTooltip: function(r, u) {
                    var c, l, e, s;
                    if ("undefined" == typeof this.activeElements && (this.activeElements = []), c = function(n) {
                        var t = !1;
                        return n.length !== this.activeElements.length ? t = !0 : (i(n, function(n, i) {
                            n !== this.activeElements[i] && (t = !0)
                        }, this), t)
                    }.call(this, r), c || u) {
                        if (this.activeElements = r, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), r.length > 0)
                            if (this.datasets && this.datasets.length > 1) {
                                for (s = this.datasets.length - 1; s >= 0 && (l = this.datasets[s].points || this.datasets[s].bars || this.datasets[s].segments, e = tt(l, r[0]), - 1 === e); s--)
                                    ;
                                var a = [],
                                        v = [],
                                        y = function() {
                                            var t, f, s, i, c, l = [],
                                                    r = [],
                                                    u = [];
                                            return n.each(this.datasets, function(n) {
                                                t = n.points || n.bars || n.segments;
                                                t[e] && t[e].hasValue() && l.push(t[e])
                                            }), n.each(l, function(t) {
                                                r.push(t.x);
                                                u.push(t.y);
                                                a.push(n.template(this.options.multiTooltipTemplate, t));
                                                v.push({
                                                    fill: t._saved.fillColor || t.fillColor,
                                                    stroke: t._saved.strokeColor || t.strokeColor
                                                })
                                            }, this), c = o(u), s = h(u), i = o(r), f = h(r), {
                                                x: i > this.chart.width / 2 ? i : f,
                                                y: (c + s) / 2
                                            }
                                        }.call(this, e);
                                new t.MultiTooltip({
                                    x: y.x,
                                    y: y.y,
                                    xPadding: this.options.tooltipXPadding,
                                    yPadding: this.options.tooltipYPadding,
                                    xOffset: this.options.tooltipXOffset,
                                    fillColor: this.options.tooltipFillColor,
                                    textColor: this.options.tooltipFontColor,
                                    fontFamily: this.options.tooltipFontFamily,
                                    fontStyle: this.options.tooltipFontStyle,
                                    fontSize: this.options.tooltipFontSize,
                                    titleTextColor: this.options.tooltipTitleFontColor,
                                    titleFontFamily: this.options.tooltipTitleFontFamily,
                                    titleFontStyle: this.options.tooltipTitleFontStyle,
                                    titleFontSize: this.options.tooltipTitleFontSize,
                                    cornerRadius: this.options.tooltipCornerRadius,
                                    labels: a,
                                    legendColors: v,
                                    legendColorBackground: this.options.multiTooltipKeyBackground,
                                    title: r[0].label,
                                    chart: this.chart,
                                    ctx: this.chart.ctx,
                                    custom: this.options.customTooltips
                                }).draw()
                            } else
                                i(r, function(n) {
                                    var i = n.tooltipPosition();
                                    new t.Tooltip({
                                        x: Math.round(i.x),
                                        y: Math.round(i.y),
                                        xPadding: this.options.tooltipXPadding,
                                        yPadding: this.options.tooltipYPadding,
                                        fillColor: this.options.tooltipFillColor,
                                        textColor: this.options.tooltipFontColor,
                                        fontFamily: this.options.tooltipFontFamily,
                                        fontStyle: this.options.tooltipFontStyle,
                                        fontSize: this.options.tooltipFontSize,
                                        caretHeight: this.options.tooltipCaretSize,
                                        cornerRadius: this.options.tooltipCornerRadius,
                                        text: f(this.options.tooltipTemplate, n),
                                        chart: this.chart,
                                        custom: this.options.customTooltips
                                    }).draw()
                                }, this);
                        return this
                    }
                },
                toBase64Image: function() {
                    return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                }
            });
            t.Type.extend = function(n) {
                var i = this,
                        u = function() {
                            return i.apply(this, arguments)
                        },
                        f, e;
                return (u.prototype = l(i.prototype), r(u.prototype, n), u.extend = t.Type.extend, n.name || i.prototype.name) ? (f = n.name || i.prototype.name, e = t.defaults[i.prototype.name] ? l(t.defaults[i.prototype.name]) : {}, t.defaults[f] = r(e, n.defaults), t.types[f] = u, t.prototype[f] = function(n, i) {
                    var r = nt(t.defaults.global, t.defaults[f], i || {});
                    return new u(n, r, this)
                }) : rt("Name not provided for this chart, so it hasn't been registered"), i
            };
            t.Element = function(n) {
                r(this, n);
                this.initialize.apply(this, arguments);
                this.save()
            };
            r(t.Element.prototype, {
                initialize: function() {
                },
                restore: function(n) {
                    return n ? i(n, function(n) {
                        this[n] = this._saved[n]
                    }, this) : r(this, this._saved), this
                },
                save: function() {
                    return this._saved = l(this), delete this._saved._saved, this
                },
                update: function(n) {
                    return i(n, function(n, t) {
                        this._saved[t] = this[t];
                        this[t] = n
                    }, this), this
                },
                transition: function(n, t) {
                    return i(n, function(n, i) {
                        this[i] = (n - this._saved[i]) * t + this._saved[i]
                    }, this), this
                },
                tooltipPosition: function() {
                    return {
                        x: this.x,
                        y: this.y
                    }
                },
                hasValue: function() {
                    return u(this.value)
                }
            });
            t.Element.extend = p;
            t.Point = t.Element.extend({
                display: !0,
                inRange: function(n, t) {
                    var i = this.hitDetectionRadius + this.radius;
                    return Math.pow(n - this.x, 2) + Math.pow(t - this.y, 2) < Math.pow(i, 2)
                },
                draw: function() {
                    if (this.display) {
                        var n = this.ctx;
                        n.beginPath();
                        n.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                        n.closePath();
                        n.strokeStyle = this.strokeColor;
                        n.lineWidth = this.strokeWidth;
                        n.fillStyle = this.fillColor;
                        n.fill();
                        n.stroke()
                    }
                }
            });
            t.Arc = t.Element.extend({
                inRange: function(t, i) {
                    var r = n.getAngleFromPoint(this, {
                        x: t,
                        y: i
                    }),
                            u = r.angle >= this.startAngle && r.angle <= this.endAngle,
                            f = r.distance >= this.innerRadius && r.distance <= this.outerRadius;
                    return u && f
                },
                tooltipPosition: function() {
                    var n = this.startAngle + (this.endAngle - this.startAngle) / 2,
                            t = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                    return {
                        x: this.x + Math.cos(n) * t,
                        y: this.y + Math.sin(n) * t
                    }
                },
                draw: function() {
                    var n = this.ctx;
                    n.beginPath();
                    n.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);
                    n.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0);
                    n.closePath();
                    n.strokeStyle = this.strokeColor;
                    n.lineWidth = this.strokeWidth;
                    n.fillStyle = this.fillColor;
                    n.fill();
                    n.lineJoin = "bevel";
                    this.showStroke && n.stroke()
                }
            });
            t.Rectangle = t.Element.extend({
                draw: function() {
                    var n = this.ctx,
                            f = this.width / 2,
                            t = this.x - f,
                            i = this.x + f,
                            r = this.base - (this.base - this.y),
                            u = this.strokeWidth / 2;
                    this.showStroke && (t += u, i -= u, r += u);
                    n.beginPath();
                    n.fillStyle = this.fillColor;
                    n.strokeStyle = this.strokeColor;
                    n.lineWidth = this.strokeWidth;
                    n.moveTo(t, this.base);
                    n.lineTo(t, r);
                    n.lineTo(i, r);
                    n.lineTo(i, this.base);
                    n.fill();
                    this.showStroke && n.stroke()
                },
                height: function() {
                    return this.base - this.y
                },
                inRange: function(n, t) {
                    return n >= this.x - this.width / 2 && n <= this.x + this.width / 2 && t >= this.y && t <= this.base
                }
            });
            t.Tooltip = t.Element.extend({
                draw: function() {
                    var n = this.chart.ctx,
                            r, u;
                    n.font = e(this.fontSize, this.fontStyle, this.fontFamily);
                    this.xAlign = "center";
                    this.yAlign = "above";
                    var t = this.caretPadding = 2,
                            i = n.measureText(this.text).width + 2 * this.xPadding,
                            f = this.fontSize + 2 * this.yPadding,
                            o = f + this.caretHeight + t;
                    if (this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below"), r = this.x - i / 2, u = this.y - o, n.fillStyle = this.fillColor, this.custom)
                        this.custom(this);
                    else {
                        switch (this.yAlign) {
                            case "above":
                                n.beginPath();
                                n.moveTo(this.x, this.y - t);
                                n.lineTo(this.x + this.caretHeight, this.y - (t + this.caretHeight));
                                n.lineTo(this.x - this.caretHeight, this.y - (t + this.caretHeight));
                                n.closePath();
                                n.fill();
                                break;
                            case "below":
                                u = this.y + t + this.caretHeight;
                                n.beginPath();
                                n.moveTo(this.x, this.y + t);
                                n.lineTo(this.x + this.caretHeight, this.y + t + this.caretHeight);
                                n.lineTo(this.x - this.caretHeight, this.y + t + this.caretHeight);
                                n.closePath();
                                n.fill()
                        }
                        switch (this.xAlign) {
                            case "left":
                                r = this.x - i + (this.cornerRadius + this.caretHeight);
                                break;
                            case "right":
                                r = this.x - (this.cornerRadius + this.caretHeight)
                        }
                        d(n, r, u, i, f, this.cornerRadius);
                        n.fill();
                        n.fillStyle = this.textColor;
                        n.textAlign = "center";
                        n.textBaseline = "middle";
                        n.fillText(this.text, r + i / 2, u + f / 2)
                    }
                }
            });
            t.MultiTooltip = t.Element.extend({
                initialize: function() {
                    var n;
                    this.font = e(this.fontSize, this.fontStyle, this.fontFamily);
                    this.titleFont = e(this.titleFontSize, this.titleFontStyle, this.titleFontFamily);
                    this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize;
                    this.ctx.font = this.titleFont;
                    var t = this.ctx.measureText(this.title).width,
                            i = y(this.ctx, this.font, this.labels) + this.fontSize + 3,
                            r = h([i, t]);
                    this.width = r + 2 * this.xPadding;
                    n = this.height / 2;
                    this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n);
                    this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
                },
                getLineHeight: function(n) {
                    var t = this.y - this.height / 2 + this.yPadding,
                            i = n - 1;
                    return 0 === n ? t + this.titleFontSize / 2 : t + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
                },
                draw: function() {
                    if (this.custom)
                        this.custom(this);
                    else {
                        d(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                        var t = this.ctx;
                        t.fillStyle = this.fillColor;
                        t.fill();
                        t.closePath();
                        t.textAlign = "left";
                        t.textBaseline = "middle";
                        t.fillStyle = this.titleTextColor;
                        t.font = this.titleFont;
                        t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0));
                        t.font = this.font;
                        n.each(this.labels, function(n, i) {
                            t.fillStyle = this.textColor;
                            t.fillText(n, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1));
                            t.fillStyle = this.legendColorBackground;
                            t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
                            t.fillStyle = this.legendColors[i].fill;
                            t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                        }, this)
                    }
                }
            });
            t.Scale = t.Element.extend({
                initialize: function() {
                    this.fit()
                },
                buildYLabels: function() {
                    this.yLabels = [];
                    for (var t = w(this.stepValue), n = 0; n <= this.steps; n++)
                        this.yLabels.push(f(this.templateString, {
                            value: (this.min + n * this.stepValue).toFixed(t)
                        }));
                    this.yLabelWidth = this.display && this.showLabels ? y(this.ctx, this.font, this.yLabels) : 0
                },
                addXLabel: function(n) {
                    this.xLabels.push(n);
                    this.valuesCount++;
                    this.fit()
                },
                removeXLabel: function() {
                    this.xLabels.shift();
                    this.valuesCount--;
                    this.fit()
                },
                fit: function() {
                    this.startPoint = this.display ? this.fontSize : 0;
                    this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height;
                    this.startPoint += this.padding;
                    this.endPoint -= this.padding;
                    var t, n = this.endPoint - this.startPoint;
                    for (this.calculateYRange(n), this.buildYLabels(), this.calculateXLabelRotation(); n > this.endPoint - this.startPoint; )
                        n = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(n), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
                },
                calculateXLabelRotation: function() {
                    var r, e, n, u, t, i, f;
                    if (this.ctx.font = this.font, n = this.ctx.measureText(this.xLabels[0]).width, u = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width, this.xScalePaddingRight = u / 2 + 3, this.xScalePaddingLeft = n / 2 > this.yLabelWidth + 10 ? n / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                        for (i = y(this.ctx, this.font, this.xLabels), this.xLabelWidth = i, f = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > f && 0 === this.xLabelRotation || this.xLabelWidth > f && this.xLabelRotation <= 90 && this.xLabelRotation > 0; )
                            t = Math.cos(v(this.xLabelRotation)), r = t * n, e = t * u, r + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = r + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = t * i;
                        this.xLabelRotation > 0 && (this.endPoint -= Math.sin(v(this.xLabelRotation)) * i + 3)
                    } else
                        this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
                },
                calculateYRange: a,
                drawingArea: function() {
                    return this.startPoint - this.endPoint
                },
                calculateY: function(n) {
                    var t = this.drawingArea() / (this.min - this.max);
                    return this.endPoint - t * (n - this.min)
                },
                calculateX: function(n) {
                    var r = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                            t = r / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                            i = t * n + this.xScalePaddingLeft;
                    return this.offsetGridLines && (i += t / 2), Math.round(i)
                },
                update: function(t) {
                    n.extend(this, t);
                    this.fit()
                },
                draw: function() {
                    var t = this.ctx,
                            u = (this.endPoint - this.startPoint) / this.steps,
                            r = Math.round(this.xScalePaddingLeft);
                    this.display && (t.fillStyle = this.textColor, t.font = this.font, i(this.yLabels, function(i, f) {
                        var s = this.endPoint - u * f,
                                e = Math.round(s),
                                o = this.showHorizontalLines;
                        t.textAlign = "right";
                        t.textBaseline = "middle";
                        this.showLabels && t.fillText(i, r - 10, s);
                        0 !== f || o || (o = !0);
                        o && t.beginPath();
                        f > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor);
                        e += n.aliasPixel(t.lineWidth);
                        o && (t.moveTo(r, e), t.lineTo(this.width, e), t.stroke(), t.closePath());
                        t.lineWidth = this.lineWidth;
                        t.strokeStyle = this.lineColor;
                        t.beginPath();
                        t.moveTo(r - 5, e);
                        t.lineTo(r, e);
                        t.stroke();
                        t.closePath()
                    }, this), i(this.xLabels, function(n, i) {
                        var e = this.calculateX(i) + b(this.lineWidth),
                                r = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth),
                                f = this.xLabelRotation > 0,
                                u = this.showVerticalLines;
                        0 !== i || u || (u = !0);
                        u && t.beginPath();
                        i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor);
                        u && (t.moveTo(r, this.endPoint), t.lineTo(r, this.startPoint - 3), t.stroke(), t.closePath());
                        t.lineWidth = this.lineWidth;
                        t.strokeStyle = this.lineColor;
                        t.beginPath();
                        t.moveTo(r, this.endPoint);
                        t.lineTo(r, this.endPoint + 5);
                        t.stroke();
                        t.closePath();
                        t.save();
                        t.translate(e, f ? this.endPoint + 12 : this.endPoint + 8);
                        t.rotate(-1 * v(this.xLabelRotation));
                        t.font = this.font;
                        t.textAlign = f ? "right" : "center";
                        t.textBaseline = f ? "middle" : "top";
                        t.fillText(n, 0, 0);
                        t.restore()
                    }, this))
                }
            });
            t.RadialScale = t.Element.extend({
                initialize: function() {
                    this.size = o([this.height, this.width]);
                    this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
                },
                calculateCenterOffset: function(n) {
                    var t = this.drawingArea / (this.max - this.min);
                    return (n - this.min) * t
                },
                update: function() {
                    this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize();
                    this.buildYLabels()
                },
                buildYLabels: function() {
                    this.yLabels = [];
                    for (var t = w(this.stepValue), n = 0; n <= this.steps; n++)
                        this.yLabels.push(f(this.templateString, {
                            value: (this.min + n * this.stepValue).toFixed(t)
                        }))
                },
                getCircumference: function() {
                    return 2 * Math.PI / this.valuesCount
                },
                setScaleSize: function() {
                    var t, n, i, h, a, y, v, p, w, b, r, s, k = o([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                            c = this.width,
                            l = 0;
                    for (this.ctx.font = e(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), n = 0; n < this.valuesCount; n++)
                        t = this.getPointPosition(n, k), i = this.ctx.measureText(f(this.templateString, {
                            value: this.labels[n]
                        })).width + 5, 0 === n || n === this.valuesCount / 2 ? (h = i / 2, t.x + h > c && (c = t.x + h, a = n), t.x - h < l && (l = t.x - h, v = n)) : n < this.valuesCount / 2 ? t.x + i > c && (c = t.x + i, a = n) : n > this.valuesCount / 2 && t.x - i < l && (l = t.x - i, v = n);
                    w = l;
                    b = Math.ceil(c - this.width);
                    y = this.getIndexAngle(a);
                    p = this.getIndexAngle(v);
                    r = b / Math.sin(y + Math.PI / 2);
                    s = w / Math.sin(p + Math.PI / 2);
                    r = u(r) ? r : 0;
                    s = u(s) ? s : 0;
                    this.drawingArea = k - (s + r) / 2;
                    this.setCenterPoint(s, r)
                },
                setCenterPoint: function(n, t) {
                    var i = this.width - t - this.drawingArea,
                            r = n + this.drawingArea;
                    this.xCenter = (r + i) / 2;
                    this.yCenter = this.height / 2
                },
                getIndexAngle: function(n) {
                    var t = 2 * Math.PI / this.valuesCount;
                    return n * t - Math.PI / 2
                },
                getPointPosition: function(n, t) {
                    var i = this.getIndexAngle(n);
                    return {
                        x: Math.cos(i) * t + this.xCenter,
                        y: Math.sin(i) * t + this.yCenter
                    }
                },
                draw: function() {
                    var n, t, u, f;
                    if (this.display && (n = this.ctx, i(this.yLabels, function(t, i) {
                        var r, f, o, u, s;
                        if (i > 0) {
                            if (f = i * (this.drawingArea / this.steps), o = this.yCenter - f, this.lineWidth > 0)
                                if (n.strokeStyle = this.lineColor, n.lineWidth = this.lineWidth, this.lineArc)
                                    n.beginPath(), n.arc(this.xCenter, this.yCenter, f, 0, 2 * Math.PI), n.closePath(), n.stroke();
                                else {
                                    for (n.beginPath(), u = 0; u < this.valuesCount; u++)
                                        r = this.getPointPosition(u, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === u ? n.moveTo(r.x, r.y) : n.lineTo(r.x, r.y);
                                    n.closePath();
                                    n.stroke()
                                }
                            this.showLabels && ((n.font = e(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) && (s = n.measureText(t).width, n.fillStyle = this.backdropColor, n.fillRect(this.xCenter - s / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, s + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)), n.textAlign = "center", n.textBaseline = "middle", n.fillStyle = this.fontColor, n.fillText(t, this.xCenter, o))
                        }
                    }, this), !this.lineArc))
                        for (n.lineWidth = this.angleLineWidth, n.strokeStyle = this.angleLineColor, t = this.valuesCount - 1; t >= 0; t--) {
                            this.angleLineWidth > 0 && (u = this.getPointPosition(t, this.calculateCenterOffset(this.max)), n.beginPath(), n.moveTo(this.xCenter, this.yCenter), n.lineTo(u.x, u.y), n.stroke(), n.closePath());
                            f = this.getPointPosition(t, this.calculateCenterOffset(this.max) + 5);
                            n.font = e(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);
                            n.fillStyle = this.pointLabelFontColor;
                            var s = this.labels.length,
                                    o = this.labels.length / 2,
                                    r = o / 2,
                                    h = r > t || t > s - r,
                                    c = t === r || t === s - r;
                            n.textAlign = 0 === t ? "center" : t === o ? "center" : o > t ? "left" : "right";
                            n.textBaseline = c ? "middle" : h ? "bottom" : "top";
                            n.fillText(this.labels[t], f.x, f.y)
                        }
                }
            });
            n.addEvent(window, "resize", function() {
                var n;
                return function() {
                    clearTimeout(n);
                    n = setTimeout(function() {
                        i(t.instances, function(n) {
                            n.options.responsive && n.resize(n.render, !0)
                        })
                    }, 50)
                }
            }());
            ut ? define(function() {
                return t
            }) : "object" == typeof module && module.exports && (module.exports = t);
            c.Chart = t;
            t.noConflict = function() {
                return c.Chart = g, t
            }
        }.call(this),
        function() {
            "use strict";
            var i = this,
                    t = i.Chart,
                    n = t.helpers;
            t.Type.extend({
                name: "Bar",
                defaults: {
                    scaleBeginAtZero: !0,
                    scaleShowGridLines: !0,
                    scaleGridLineColor: "rgba(0,0,0,.05)",
                    scaleGridLineWidth: 1,
                    scaleShowHorizontalLines: !0,
                    scaleShowVerticalLines: !0,
                    barShowStroke: !0,
                    barStrokeWidth: 2,
                    barValueSpacing: 5,
                    barDatasetSpacing: 1,
                    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><\/span><%if(datasets[i].label){%><%=datasets[i].label%><%}%><\/li><%}%><\/ul>'
                },
                initialize: function(i) {
                    var r = this.options;
                    this.ScaleClass = t.Scale.extend({
                        offsetGridLines: !0,
                        calculateBarX: function(n, t, i) {
                            var f = this.calculateBaseWidth(),
                                    e = this.calculateX(i) - f / 2,
                                    u = this.calculateBarWidth(n);
                            return e + u * t + t * r.barDatasetSpacing + u / 2
                        },
                        calculateBaseWidth: function() {
                            return this.calculateX(1) - this.calculateX(0) - 2 * r.barValueSpacing
                        },
                        calculateBarWidth: function(n) {
                            var t = this.calculateBaseWidth() - (n - 1) * r.barDatasetSpacing;
                            return t / n
                        }
                    });
                    this.datasets = [];
                    this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(t) {
                        var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                        this.eachBars(function(n) {
                            n.restore(["fillColor", "strokeColor"])
                        });
                        n.each(i, function(n) {
                            n.fillColor = n.highlightFill;
                            n.strokeColor = n.highlightStroke
                        });
                        this.showTooltip(i)
                    });
                    this.BarClass = t.Rectangle.extend({
                        strokeWidth: this.options.barStrokeWidth,
                        showStroke: this.options.barShowStroke,
                        ctx: this.chart.ctx
                    });
                    n.each(i.datasets, function(t) {
                        var r = {
                            label: t.label || null,
                            fillColor: t.fillColor,
                            strokeColor: t.strokeColor,
                            bars: []
                        };
                        this.datasets.push(r);
                        n.each(t.data, function(n, u) {
                            r.bars.push(new this.BarClass({
                                value: n,
                                label: i.labels[u],
                                datasetLabel: t.label,
                                strokeColor: t.strokeColor,
                                fillColor: t.fillColor,
                                highlightFill: t.highlightFill || t.fillColor,
                                highlightStroke: t.highlightStroke || t.strokeColor
                            }))
                        }, this)
                    }, this);
                    this.buildScale(i.labels);
                    this.BarClass.prototype.base = this.scale.endPoint;
                    this.eachBars(function(t, i, r) {
                        n.extend(t, {
                            width: this.scale.calculateBarWidth(this.datasets.length),
                            x: this.scale.calculateBarX(this.datasets.length, r, i),
                            y: this.scale.endPoint
                        });
                        t.save()
                    }, this);
                    this.render()
                },
                update: function() {
                    this.scale.update();
                    n.each(this.activeElements, function(n) {
                        n.restore(["fillColor", "strokeColor"])
                    });
                    this.eachBars(function(n) {
                        n.save()
                    });
                    this.render()
                },
                eachBars: function(t) {
                    n.each(this.datasets, function(i, r) {
                        n.each(i.bars, t, this, r)
                    }, this)
                },
                getBarsAtEvent: function(t) {
                    for (var i, u = [], f = n.getRelativePosition(t), e = function(n) {
                        u.push(n.bars[i])
                    }, r = 0; r < this.datasets.length; r++)
                        for (i = 0; i < this.datasets[r].bars.length; i++)
                            if (this.datasets[r].bars[i].inRange(f.x, f.y))
                                return n.each(this.datasets, e), u;
                    return u
                },
                buildScale: function(t) {
                    var r = this,
                            u = function() {
                                var n = [];
                                return r.eachBars(function(t) {
                                    n.push(t.value)
                                }), n
                            },
                            i = {
                                templateString: this.options.scaleLabel,
                                height: this.chart.height,
                                width: this.chart.width,
                                ctx: this.chart.ctx,
                                textColor: this.options.scaleFontColor,
                                fontSize: this.options.scaleFontSize,
                                fontStyle: this.options.scaleFontStyle,
                                fontFamily: this.options.scaleFontFamily,
                                valuesCount: t.length,
                                beginAtZero: this.options.scaleBeginAtZero,
                                integersOnly: this.options.scaleIntegersOnly,
                                calculateYRange: function(t) {
                                    var i = n.calculateScaleRange(u(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                                    n.extend(this, i)
                                },
                                xLabels: t,
                                font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                                lineWidth: this.options.scaleLineWidth,
                                lineColor: this.options.scaleLineColor,
                                showHorizontalLines: this.options.scaleShowHorizontalLines,
                                showVerticalLines: this.options.scaleShowVerticalLines,
                                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                                showLabels: this.options.scaleShowLabels,
                                display: this.options.showScale
                            };
                    this.options.scaleOverride && n.extend(i, {
                        calculateYRange: n.noop,
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    });
                    this.scale = new this.ScaleClass(i)
                },
                addData: function(t, i) {
                    n.each(t, function(n, t) {
                        this.datasets[t].bars.push(new this.BarClass({
                            value: n,
                            label: i,
                            x: this.scale.calculateBarX(this.datasets.length, t, this.scale.valuesCount + 1),
                            y: this.scale.endPoint,
                            width: this.scale.calculateBarWidth(this.datasets.length),
                            base: this.scale.endPoint,
                            strokeColor: this.datasets[t].strokeColor,
                            fillColor: this.datasets[t].fillColor
                        }))
                    }, this);
                    this.scale.addXLabel(i);
                    this.update()
                },
                removeData: function() {
                    this.scale.removeXLabel();
                    n.each(this.datasets, function(n) {
                        n.bars.shift()
                    }, this);
                    this.update()
                },
                reflow: function() {
                    n.extend(this.BarClass.prototype, {
                        y: this.scale.endPoint,
                        base: this.scale.endPoint
                    });
                    var t = n.extend({
                        height: this.chart.height,
                        width: this.chart.width
                    });
                    this.scale.update(t)
                },
                draw: function(t) {
                    var i = t || 1;
                    this.clear();
                    this.chart.ctx;
                    this.scale.draw(i);
                    n.each(this.datasets, function(t, r) {
                        n.each(t.bars, function(n, t) {
                            n.hasValue() && (n.base = this.scale.endPoint, n.transition({
                                x: this.scale.calculateBarX(this.datasets.length, r, t),
                                y: this.scale.calculateY(n.value),
                                width: this.scale.calculateBarWidth(this.datasets.length)
                            }, i).draw())
                        }, this)
                    }, this)
                }
            })
        }.call(this),
        function() {
            "use strict";
            var r = this,
                    t = r.Chart,
                    n = t.helpers,
                    i = {
                        segmentShowStroke: !0,
                        segmentStrokeColor: "#fff",
                        segmentStrokeWidth: 2,
                        percentageInnerCutout: 50,
                        animationSteps: 100,
                        animationEasing: "easeOutBounce",
                        animateRotate: !0,
                        animateScale: !1,
                        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><\/span><%if(segments[i].label){%><%=segments[i].label%><%}%><\/li><%}%><\/ul>'
                    };
            t.Type.extend({
                name: "Doughnut",
                defaults: i,
                initialize: function(i) {
                    this.segments = [];
                    this.outerRadius = (n.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2;
                    this.SegmentArc = t.Arc.extend({
                        ctx: this.chart.ctx,
                        x: this.chart.width / 2,
                        y: this.chart.height / 2
                    });
                    this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(t) {
                        var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                        n.each(this.segments, function(n) {
                            n.restore(["fillColor"])
                        });
                        n.each(i, function(n) {
                            n.fillColor = n.highlightColor
                        });
                        this.showTooltip(i)
                    });
                    this.calculateTotal(i);
                    n.each(i, function(n, t) {
                        this.addData(n, t, !0)
                    }, this);
                    this.render()
                },
                getSegmentsAtEvent: function(t) {
                    var i = [],
                            r = n.getRelativePosition(t);
                    return n.each(this.segments, function(n) {
                        n.inRange(r.x, r.y) && i.push(n)
                    }, this), i
                },
                addData: function(n, t, i) {
                    var r = t || this.segments.length;
                    this.segments.splice(r, 0, new this.SegmentArc({
                        value: n.value,
                        outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                        innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                        fillColor: n.color,
                        highlightColor: n.highlight || n.color,
                        showStroke: this.options.segmentShowStroke,
                        strokeWidth: this.options.segmentStrokeWidth,
                        strokeColor: this.options.segmentStrokeColor,
                        startAngle: 1.5 * Math.PI,
                        circumference: this.options.animateRotate ? 0 : this.calculateCircumference(n.value),
                        label: n.label
                    }));
                    i || (this.reflow(), this.update())
                },
                calculateCircumference: function(n) {
                    return 2 * Math.PI * (Math.abs(n) / this.total)
                },
                calculateTotal: function(t) {
                    this.total = 0;
                    n.each(t, function(n) {
                        this.total += Math.abs(n.value)
                    }, this)
                },
                update: function() {
                    this.calculateTotal(this.segments);
                    n.each(this.activeElements, function(n) {
                        n.restore(["fillColor"])
                    });
                    n.each(this.segments, function(n) {
                        n.save()
                    });
                    this.render()
                },
                removeData: function(t) {
                    var i = n.isNumber(t) ? t : this.segments.length - 1;
                    this.segments.splice(i, 1);
                    this.reflow();
                    this.update()
                },
                reflow: function() {
                    n.extend(this.SegmentArc.prototype, {
                        x: this.chart.width / 2,
                        y: this.chart.height / 2
                    });
                    this.outerRadius = (n.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2;
                    n.each(this.segments, function(n) {
                        n.update({
                            outerRadius: this.outerRadius,
                            innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                        })
                    }, this)
                },
                draw: function(t) {
                    var i = t ? t : 1;
                    this.clear();
                    n.each(this.segments, function(n, t) {
                        n.transition({
                            circumference: this.calculateCircumference(n.value),
                            outerRadius: this.outerRadius,
                            innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                        }, i);
                        n.endAngle = n.startAngle + n.circumference;
                        n.draw();
                        0 === t && (n.startAngle = 1.5 * Math.PI);
                        t < this.segments.length - 1 && (this.segments[t + 1].startAngle = n.endAngle)
                    }, this)
                }
            });
            t.types.Doughnut.extend({
                name: "Pie",
                defaults: n.merge(i, {
                    percentageInnerCutout: 0
                })
            })
        }.call(this),
        function() {
            "use strict";
            var i = this,
                    t = i.Chart,
                    n = t.helpers;
            t.Type.extend({
                name: "Line",
                defaults: {
                    scaleShowGridLines: !0,
                    scaleGridLineColor: "rgba(0,0,0,.05)",
                    scaleGridLineWidth: 1,
                    scaleShowHorizontalLines: !0,
                    scaleShowVerticalLines: !0,
                    bezierCurve: !0,
                    bezierCurveTension: .4,
                    pointDot: !0,
                    pointDotRadius: 4,
                    pointDotStrokeWidth: 1,
                    pointHitDetectionRadius: 20,
                    datasetStroke: !0,
                    datasetStrokeWidth: 2,
                    datasetFill: !0,
                    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><\/span><%if(datasets[i].label){%><%=datasets[i].label%><%}%><\/li><%}%><\/ul>'
                },
                initialize: function(i) {
                    this.PointClass = t.Point.extend({
                        strokeWidth: this.options.pointDotStrokeWidth,
                        radius: this.options.pointDotRadius,
                        display: this.options.pointDot,
                        hitDetectionRadius: this.options.pointHitDetectionRadius,
                        ctx: this.chart.ctx,
                        inRange: function(n) {
                            return Math.pow(n - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                        }
                    });
                    this.datasets = [];
                    this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(t) {
                        var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                        this.eachPoints(function(n) {
                            n.restore(["fillColor", "strokeColor"])
                        });
                        n.each(i, function(n) {
                            n.fillColor = n.highlightFill;
                            n.strokeColor = n.highlightStroke
                        });
                        this.showTooltip(i)
                    });
                    n.each(i.datasets, function(t) {
                        var r = {
                            label: t.label || null,
                            fillColor: t.fillColor,
                            strokeColor: t.strokeColor,
                            pointColor: t.pointColor,
                            pointStrokeColor: t.pointStrokeColor,
                            points: []
                        };
                        this.datasets.push(r);
                        n.each(t.data, function(n, u) {
                            r.points.push(new this.PointClass({
                                value: n,
                                label: i.labels[u],
                                datasetLabel: t.label,
                                strokeColor: t.pointStrokeColor,
                                fillColor: t.pointColor,
                                highlightFill: t.pointHighlightFill || t.pointColor,
                                highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                            }))
                        }, this);
                        this.buildScale(i.labels);
                        this.eachPoints(function(t, i) {
                            n.extend(t, {
                                x: this.scale.calculateX(i),
                                y: this.scale.endPoint
                            });
                            t.save()
                        }, this)
                    }, this);
                    this.render()
                },
                update: function() {
                    this.scale.update();
                    n.each(this.activeElements, function(n) {
                        n.restore(["fillColor", "strokeColor"])
                    });
                    this.eachPoints(function(n) {
                        n.save()
                    });
                    this.render()
                },
                eachPoints: function(t) {
                    n.each(this.datasets, function(i) {
                        n.each(i.points, t, this)
                    }, this)
                },
                getPointsAtEvent: function(t) {
                    var i = [],
                            r = n.getRelativePosition(t);
                    return n.each(this.datasets, function(t) {
                        n.each(t.points, function(n) {
                            n.inRange(r.x, r.y) && i.push(n)
                        })
                    }, this), i
                },
                buildScale: function(i) {
                    var u = this,
                            f = function() {
                                var n = [];
                                return u.eachPoints(function(t) {
                                    n.push(t.value)
                                }), n
                            },
                            r = {
                                templateString: this.options.scaleLabel,
                                height: this.chart.height,
                                width: this.chart.width,
                                ctx: this.chart.ctx,
                                textColor: this.options.scaleFontColor,
                                fontSize: this.options.scaleFontSize,
                                fontStyle: this.options.scaleFontStyle,
                                fontFamily: this.options.scaleFontFamily,
                                valuesCount: i.length,
                                beginAtZero: this.options.scaleBeginAtZero,
                                integersOnly: this.options.scaleIntegersOnly,
                                calculateYRange: function(t) {
                                    var i = n.calculateScaleRange(f(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                                    n.extend(this, i)
                                },
                                xLabels: i,
                                font: n.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                                lineWidth: this.options.scaleLineWidth,
                                lineColor: this.options.scaleLineColor,
                                showHorizontalLines: this.options.scaleShowHorizontalLines,
                                showVerticalLines: this.options.scaleShowVerticalLines,
                                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                                showLabels: this.options.scaleShowLabels,
                                display: this.options.showScale
                            };
                    this.options.scaleOverride && n.extend(r, {
                        calculateYRange: n.noop,
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    });
                    this.scale = new t.Scale(r)
                },
                addData: function(t, i) {
                    n.each(t, function(n, t) {
                        this.datasets[t].points.push(new this.PointClass({
                            value: n,
                            label: i,
                            x: this.scale.calculateX(this.scale.valuesCount + 1),
                            y: this.scale.endPoint,
                            strokeColor: this.datasets[t].pointStrokeColor,
                            fillColor: this.datasets[t].pointColor
                        }))
                    }, this);
                    this.scale.addXLabel(i);
                    this.update()
                },
                removeData: function() {
                    this.scale.removeXLabel();
                    n.each(this.datasets, function(n) {
                        n.points.shift()
                    }, this);
                    this.update()
                },
                reflow: function() {
                    var t = n.extend({
                        height: this.chart.height,
                        width: this.chart.width
                    });
                    this.scale.update(t)
                },
                draw: function(t) {
                    var u = t || 1;
                    this.clear();
                    var i = this.chart.ctx,
                            r = function(n) {
                                return null !== n.value
                            },
                            e = function(t, i, u) {
                                return n.findNextWhere(i, r, u) || t
                            },
                            f = function(t, i, u) {
                                return n.findPreviousWhere(i, r, u) || t
                            };
                    this.scale.draw(u);
                    n.each(this.datasets, function(t) {
                        var o = n.where(t.points, r);
                        n.each(t.points, function(n, t) {
                            n.hasValue() && n.transition({
                                y: this.scale.calculateY(n.value),
                                x: this.scale.calculateX(t)
                            }, u)
                        }, this);
                        this.options.bezierCurve && n.each(o, function(t, i) {
                            var r = i > 0 && i < o.length - 1 ? this.options.bezierCurveTension : 0;
                            t.controlPoints = n.splineCurve(f(t, o, i), t, e(t, o, i), r);
                            t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint);
                            t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                        }, this);
                        i.lineWidth = this.options.datasetStrokeWidth;
                        i.strokeStyle = t.strokeColor;
                        i.beginPath();
                        n.each(o, function(n, t) {
                            if (0 === t)
                                i.moveTo(n.x, n.y);
                            else if (this.options.bezierCurve) {
                                var r = f(n, o, t);
                                i.bezierCurveTo(r.controlPoints.outer.x, r.controlPoints.outer.y, n.controlPoints.inner.x, n.controlPoints.inner.y, n.x, n.y)
                            } else
                                i.lineTo(n.x, n.y)
                        }, this);
                        i.stroke();
                        this.options.datasetFill && o.length > 0 && (i.lineTo(o[o.length - 1].x, this.scale.endPoint), i.lineTo(o[0].x, this.scale.endPoint), i.fillStyle = t.fillColor, i.closePath(), i.fill());
                        n.each(o, function(n) {
                            n.draw()
                        })
                    }, this)
                }
            })
        }.call(this),
        function() {
            "use strict";
            var i = this,
                    t = i.Chart,
                    n = t.helpers;
            t.Type.extend({
                name: "PolarArea",
                defaults: {
                    scaleShowLabelBackdrop: !0,
                    scaleBackdropColor: "rgba(255,255,255,0.75)",
                    scaleBeginAtZero: !0,
                    scaleBackdropPaddingY: 2,
                    scaleBackdropPaddingX: 2,
                    scaleShowLine: !0,
                    segmentShowStroke: !0,
                    segmentStrokeColor: "#fff",
                    segmentStrokeWidth: 2,
                    animationSteps: 100,
                    animationEasing: "easeOutBounce",
                    animateRotate: !0,
                    animateScale: !1,
                    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><\/span><%if(segments[i].label){%><%=segments[i].label%><%}%><\/li><%}%><\/ul>'
                },
                initialize: function(i) {
                    this.segments = [];
                    this.SegmentArc = t.Arc.extend({
                        showStroke: this.options.segmentShowStroke,
                        strokeWidth: this.options.segmentStrokeWidth,
                        strokeColor: this.options.segmentStrokeColor,
                        ctx: this.chart.ctx,
                        innerRadius: 0,
                        x: this.chart.width / 2,
                        y: this.chart.height / 2
                    });
                    this.scale = new t.RadialScale({
                        display: this.options.showScale,
                        fontStyle: this.options.scaleFontStyle,
                        fontSize: this.options.scaleFontSize,
                        fontFamily: this.options.scaleFontFamily,
                        fontColor: this.options.scaleFontColor,
                        showLabels: this.options.scaleShowLabels,
                        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                        backdropColor: this.options.scaleBackdropColor,
                        backdropPaddingY: this.options.scaleBackdropPaddingY,
                        backdropPaddingX: this.options.scaleBackdropPaddingX,
                        lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                        lineColor: this.options.scaleLineColor,
                        lineArc: !0,
                        width: this.chart.width,
                        height: this.chart.height,
                        xCenter: this.chart.width / 2,
                        yCenter: this.chart.height / 2,
                        ctx: this.chart.ctx,
                        templateString: this.options.scaleLabel,
                        valuesCount: i.length
                    });
                    this.updateScaleRange(i);
                    this.scale.update();
                    n.each(i, function(n, t) {
                        this.addData(n, t, !0)
                    }, this);
                    this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(t) {
                        var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                        n.each(this.segments, function(n) {
                            n.restore(["fillColor"])
                        });
                        n.each(i, function(n) {
                            n.fillColor = n.highlightColor
                        });
                        this.showTooltip(i)
                    });
                    this.render()
                },
                getSegmentsAtEvent: function(t) {
                    var i = [],
                            r = n.getRelativePosition(t);
                    return n.each(this.segments, function(n) {
                        n.inRange(r.x, r.y) && i.push(n)
                    }, this), i
                },
                addData: function(n, t, i) {
                    var r = t || this.segments.length;
                    this.segments.splice(r, 0, new this.SegmentArc({
                        fillColor: n.color,
                        highlightColor: n.highlight || n.color,
                        label: n.label,
                        value: n.value,
                        outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(n.value),
                        circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                        startAngle: 1.5 * Math.PI
                    }));
                    i || (this.reflow(), this.update())
                },
                removeData: function(t) {
                    var i = n.isNumber(t) ? t : this.segments.length - 1;
                    this.segments.splice(i, 1);
                    this.reflow();
                    this.update()
                },
                calculateTotal: function(t) {
                    this.total = 0;
                    n.each(t, function(n) {
                        this.total += n.value
                    }, this);
                    this.scale.valuesCount = this.segments.length
                },
                updateScaleRange: function(t) {
                    var i = [],
                            r;
                    n.each(t, function(n) {
                        i.push(n.value)
                    });
                    r = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : n.calculateScaleRange(i, n.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                    n.extend(this.scale, r, {
                        size: n.min([this.chart.width, this.chart.height]),
                        xCenter: this.chart.width / 2,
                        yCenter: this.chart.height / 2
                    })
                },
                update: function() {
                    this.calculateTotal(this.segments);
                    n.each(this.segments, function(n) {
                        n.save()
                    });
                    this.reflow();
                    this.render()
                },
                reflow: function() {
                    n.extend(this.SegmentArc.prototype, {
                        x: this.chart.width / 2,
                        y: this.chart.height / 2
                    });
                    this.updateScaleRange(this.segments);
                    this.scale.update();
                    n.extend(this.scale, {
                        xCenter: this.chart.width / 2,
                        yCenter: this.chart.height / 2
                    });
                    n.each(this.segments, function(n) {
                        n.update({
                            outerRadius: this.scale.calculateCenterOffset(n.value)
                        })
                    }, this)
                },
                draw: function(t) {
                    var i = t || 1;
                    this.clear();
                    n.each(this.segments, function(n, t) {
                        n.transition({
                            circumference: this.scale.getCircumference(),
                            outerRadius: this.scale.calculateCenterOffset(n.value)
                        }, i);
                        n.endAngle = n.startAngle + n.circumference;
                        0 === t && (n.startAngle = 1.5 * Math.PI);
                        t < this.segments.length - 1 && (this.segments[t + 1].startAngle = n.endAngle);
                        n.draw()
                    }, this);
                    this.scale.draw()
                }
            })
        }.call(this),
        function() {
            "use strict";
            var i = this,
                    t = i.Chart,
                    n = t.helpers;
            t.Type.extend({
                name: "Radar",
                defaults: {
                    scaleShowLine: !0,
                    angleShowLineOut: !0,
                    scaleShowLabels: !1,
                    scaleBeginAtZero: !0,
                    angleLineColor: "rgba(0,0,0,.1)",
                    angleLineWidth: 1,
                    pointLabelFontFamily: "'Arial'",
                    pointLabelFontStyle: "normal",
                    pointLabelFontSize: 10,
                    pointLabelFontColor: "#666",
                    pointDot: !0,
                    pointDotRadius: 3,
                    pointDotStrokeWidth: 1,
                    pointHitDetectionRadius: 20,
                    datasetStroke: !0,
                    datasetStrokeWidth: 2,
                    datasetFill: !0,
                    legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><\/span><%if(datasets[i].label){%><%=datasets[i].label%><%}%><\/li><%}%><\/ul>'
                },
                initialize: function(i) {
                    this.PointClass = t.Point.extend({
                        strokeWidth: this.options.pointDotStrokeWidth,
                        radius: this.options.pointDotRadius,
                        display: this.options.pointDot,
                        hitDetectionRadius: this.options.pointHitDetectionRadius,
                        ctx: this.chart.ctx
                    });
                    this.datasets = [];
                    this.buildScale(i);
                    this.options.showTooltips && n.bindEvents(this, this.options.tooltipEvents, function(t) {
                        var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                        this.eachPoints(function(n) {
                            n.restore(["fillColor", "strokeColor"])
                        });
                        n.each(i, function(n) {
                            n.fillColor = n.highlightFill;
                            n.strokeColor = n.highlightStroke
                        });
                        this.showTooltip(i)
                    });
                    n.each(i.datasets, function(t) {
                        var r = {
                            label: t.label || null,
                            fillColor: t.fillColor,
                            strokeColor: t.strokeColor,
                            pointColor: t.pointColor,
                            pointStrokeColor: t.pointStrokeColor,
                            points: []
                        };
                        this.datasets.push(r);
                        n.each(t.data, function(n, u) {
                            var f;
                            this.scale.animation || (f = this.scale.getPointPosition(u, this.scale.calculateCenterOffset(n)));
                            r.points.push(new this.PointClass({
                                value: n,
                                label: i.labels[u],
                                datasetLabel: t.label,
                                x: this.options.animation ? this.scale.xCenter : f.x,
                                y: this.options.animation ? this.scale.yCenter : f.y,
                                strokeColor: t.pointStrokeColor,
                                fillColor: t.pointColor,
                                highlightFill: t.pointHighlightFill || t.pointColor,
                                highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                            }))
                        }, this)
                    }, this);
                    this.render()
                },
                eachPoints: function(t) {
                    n.each(this.datasets, function(i) {
                        n.each(i.points, t, this)
                    }, this)
                },
                getPointsAtEvent: function(t) {
                    var f = n.getRelativePosition(t),
                            r = n.getAngleFromPoint({
                                x: this.scale.xCenter,
                                y: this.scale.yCenter
                            }, f),
                            e = 2 * Math.PI / this.scale.valuesCount,
                            i = Math.round((r.angle - 1.5 * Math.PI) / e),
                            u = [];
                    return (i >= this.scale.valuesCount || 0 > i) && (i = 0), r.distance <= this.scale.drawingArea && n.each(this.datasets, function(n) {
                        u.push(n.points[i])
                    }), u
                },
                buildScale: function(n) {
                    this.scale = new t.RadialScale({
                        display: this.options.showScale,
                        fontStyle: this.options.scaleFontStyle,
                        fontSize: this.options.scaleFontSize,
                        fontFamily: this.options.scaleFontFamily,
                        fontColor: this.options.scaleFontColor,
                        showLabels: this.options.scaleShowLabels,
                        showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                        backdropColor: this.options.scaleBackdropColor,
                        backdropPaddingY: this.options.scaleBackdropPaddingY,
                        backdropPaddingX: this.options.scaleBackdropPaddingX,
                        lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                        lineColor: this.options.scaleLineColor,
                        angleLineColor: this.options.angleLineColor,
                        angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                        pointLabelFontColor: this.options.pointLabelFontColor,
                        pointLabelFontSize: this.options.pointLabelFontSize,
                        pointLabelFontFamily: this.options.pointLabelFontFamily,
                        pointLabelFontStyle: this.options.pointLabelFontStyle,
                        height: this.chart.height,
                        width: this.chart.width,
                        xCenter: this.chart.width / 2,
                        yCenter: this.chart.height / 2,
                        ctx: this.chart.ctx,
                        templateString: this.options.scaleLabel,
                        labels: n.labels,
                        valuesCount: n.datasets[0].data.length
                    });
                    this.scale.setScaleSize();
                    this.updateScaleRange(n.datasets);
                    this.scale.buildYLabels()
                },
                updateScaleRange: function(t) {
                    var i = function() {
                        var i = [];
                        return n.each(t, function(t) {
                            t.data ? i = i.concat(t.data) : n.each(t.points, function(n) {
                                i.push(n.value)
                            })
                        }), i
                    }(),
                            r = this.options.scaleOverride ? {
                                steps: this.options.scaleSteps,
                                stepValue: this.options.scaleStepWidth,
                                min: this.options.scaleStartValue,
                                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                            } : n.calculateScaleRange(i, n.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                    n.extend(this.scale, r)
                },
                addData: function(t, i) {
                    this.scale.valuesCount++;
                    n.each(t, function(n, t) {
                        var r = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(n));
                        this.datasets[t].points.push(new this.PointClass({
                            value: n,
                            label: i,
                            x: r.x,
                            y: r.y,
                            strokeColor: this.datasets[t].pointStrokeColor,
                            fillColor: this.datasets[t].pointColor
                        }))
                    }, this);
                    this.scale.labels.push(i);
                    this.reflow();
                    this.update()
                },
                removeData: function() {
                    this.scale.valuesCount--;
                    this.scale.labels.shift();
                    n.each(this.datasets, function(n) {
                        n.points.shift()
                    }, this);
                    this.reflow();
                    this.update()
                },
                update: function() {
                    this.eachPoints(function(n) {
                        n.save()
                    });
                    this.reflow();
                    this.render()
                },
                reflow: function() {
                    n.extend(this.scale, {
                        width: this.chart.width,
                        height: this.chart.height,
                        size: n.min([this.chart.width, this.chart.height]),
                        xCenter: this.chart.width / 2,
                        yCenter: this.chart.height / 2
                    });
                    this.updateScaleRange(this.datasets);
                    this.scale.setScaleSize();
                    this.scale.buildYLabels()
                },
                draw: function(t) {
                    var r = t || 1,
                            i = this.chart.ctx;
                    this.clear();
                    this.scale.draw();
                    n.each(this.datasets, function(t) {
                        n.each(t.points, function(n, t) {
                            n.hasValue() && n.transition(this.scale.getPointPosition(t, this.scale.calculateCenterOffset(n.value)), r)
                        }, this);
                        i.lineWidth = this.options.datasetStrokeWidth;
                        i.strokeStyle = t.strokeColor;
                        i.beginPath();
                        n.each(t.points, function(n, t) {
                            0 === t ? i.moveTo(n.x, n.y) : i.lineTo(n.x, n.y)
                        }, this);
                        i.closePath();
                        i.stroke();
                        i.fillStyle = t.fillColor;
                        i.fill();
                        n.each(t.points, function(n) {
                            n.hasValue() && n.draw()
                        })
                    }, this)
                }
            })
        }.call(this),
        function(n) {
            var t = function(n) {
                return n.split("").reverse().join("")
            },
                    i = {
                        numberStep: function(t, i) {
                            var r = Math.floor(t);
                            n(i.elem).text(r)
                        }
                    },
            r = function(n) {
                var t = n.elem;
                t.nodeType && t.parentNode && (t = t._animateNumberSetter, t || (t = i.numberStep), t(n.now, n))
            };
            n.Tween && n.Tween.propHooks ? n.Tween.propHooks.number = {
                set: r
            } : n.fx.step.number = r;
            n.animateNumber = {
                numberStepFactories: {
                    append: function(t) {
                        return function(i, r) {
                            var u = Math.floor(i);
                            n(r.elem).prop("number", i).text(u + t)
                        }
                    },
                    separator: function(i, r) {
                        return i = i || " ", r = r || 3,
                                function(u, f) {
                                    var e = Math.floor(u).toString(),
                                            v = n(f.elem);
                                    if (e.length > r) {
                                        for (var o = e, s = r, y = o.split("").reverse(), e = [], c, l, h, a = 0, p = Math.ceil(o.length / s); a < p; a++) {
                                            for (c = "", h = 0; h < s; h++) {
                                                if (l = a * s + h, l === o.length)
                                                    break;
                                                c += y[l]
                                            }
                                            e.push(c)
                                        }
                                        o = e.length - 1;
                                        s = t(e[o]);
                                        e[o] = t(parseInt(s, 10).toString());
                                        e = e.join(i);
                                        e = t(e)
                                    }
                                    v.prop("number", u).text(e)
                                }
                    }
                }
            };
            n.fn.animateNumber = function() {
                for (var s, f, t = arguments[0], r = n.extend({}, i, t), e = n(this), o = [r], u = 1, h = arguments.length; u < h; u++)
                    o.push(arguments[u]);
                return t.numberStep && (s = this.each(function() {
                    this._animateNumberSetter = t.numberStep
                }), f = r.complete, r.complete = function() {
                    s.each(function() {
                        delete this._animateNumberSetter
                    });
                    f && f.apply(this, arguments)
                }), e.animate.apply(e, o)
            }
        }(jQuery);