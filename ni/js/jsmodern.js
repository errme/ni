/*! jsModern v3.4.2 | (c) Frank Chao | MIT license */
!
function(c, r) {
    "function" === typeof define && define.amd ? define(["jquery"], r) : "undefined" !== typeof module && "object" === typeof exports ? module.exports = r(require("jquery")) : c.jsModern = r(c.jQuery)
} ("undefined" !== typeof window ? window: this,
function(c) {
    function r(a, b, f) {
        var e = f.type;
        f.type = b;
        c.event.dispatch.call(a, f);
        f.type = e
    }
    if ("undefined" === typeof jQuery) throw Error("jsModern's JavaScript requires jQuery");
    var I = c.fn.jquery.split("."),
    J = ~~I[0],
    K = ~~I[1];
    if (1 === J && 9 > K) throw Error("jsModern's JavaScript requires at least jQuery v1.9.0");
    if (!Array.isArray || !document.addEventListener || !1 in document.documentElement.style) throw Error("jsModern's JavaScript does not support of IE8-");
    var T = window.jsModern,
    v = navigator.userAgent.toLowerCase(),
    x = {},
    L = {};
    c("head");
    var E = c("html"),
    F = !!v.match("trident");
    c.event.special.tap = {
        setup: function() {
            var a = this,
            b = !1,
            f = 0;
            c(a).on("touchstart",
            function(b) {
                f = Date.now()
            }).on("touchmove",
            function(a) {
                b = !0
            }).on("touchend",
            function(e) { ! b && 300 > c.now() - f && (r(a, "tap", e), f = 0)
            })
        }
    };
    c.event.special.tapHold = {
        setup: function() {
            var a = this,
            b = 0,
            f = 0,
            e = 0,
            d = 0,
            g = !1,
            h;
            c(a).on("touchstart",
            function(c) {
                b = c.originalEvent.targetTouches[0].pageX;
                f = c.originalEvent.targetTouches[0].pageY;
                c.originalEvent.preventDefault();
                h = setTimeout(function() {
                    e = c.originalEvent.targetTouches[0].pageX;
                    d = c.originalEvent.targetTouches[0].pageY;
                    e !== b || d !== f || g || r(a, "tapHold", c)
                },
                750)
            }).on("touchmove",
            function(b) {
                g = !0
            }).on("touchend",
            function(b) {
                clearTimeout(h);
                b.originalEvent.preventDefault()
            })
        }
    };
    c.event.special.swipe = {
        setup: function() {
            var a = this,
            b = 0,
            f = 0;
            c(a).on("touchstart",
            function(a) {
                b = a.originalEvent.targetTouches[0].pageX;
                f = a.originalEvent.targetTouches[0].pageY
            }).on("touchmove",
            function(c) {
                var d = c.originalEvent.changedTouches[0].pageY;
                if (0 !== c.originalEvent.changedTouches[0].pageX - b || 0 !== d - f) c.originalEvent.preventDefault(),
                r(a, "swipe", c)
            })
        }
    };
    c.event.special.swipeLeft = {
        setup: function() {
            var a = this,
            b = 0;
            c(a).on("touchstart",
            function(a) {
                b = a.originalEvent.targetTouches[0].pageX
            }).on("touchmove",
            function(b) {
                b.originalEvent.preventDefault()
            }).on("touchend",
            function(f) { - 30 > f.originalEvent.changedTouches[0].pageX - b && r(a, "swipeLeft", f)
            })
        }
    };
    c.event.special.swipeRight = {
        setup: function() {
            var a = this,
            b = 0;
            c(a).on("touchstart",
            function(a) {
                b = a.originalEvent.targetTouches[0].pageX
            }).on("touchmove",
            function(b) {
                b.originalEvent.preventDefault()
            }).on("touchend",
            function(f) {
                30 < f.originalEvent.changedTouches[0].pageX - b && r(a, "swipeRight", f)
            })
        }
    };
    c.event.special.swipeUp = {
        setup: function() {
            var a = this,
            b = 0;
            c(a).on("touchstart",
            function(a) {
                b = a.originalEvent.targetTouches[0].pageY
            }).on("touchmove",
            function(b) {
                b.originalEvent.preventDefault()
            }).on("touchend",
            function(f) { - 30 > f.originalEvent.changedTouches[0].pageY - b && r(a, "swipeUp", f)
            })
        }
    };
    c.event.special.swipeDown = {
        setup: function() {
            var a = this,
            b = 0;
            c(a).on("touchstart",
            function(a) {
                b = a.originalEvent.targetTouches[0].pageY
            }).on("touchmove",
            function(b) {
                b.originalEvent.preventDefault()
            }).on("touchend",
            function(c) {
                30 < c.originalEvent.changedTouches[0].pageY - b && r(a, "swipeDown", c)
            })
        }
    };
    c.event.special.wheelUp = {
        setup: function() {
            var a = this;
            c(a).on("mousewheel DOMMouseScroll",
            function(b) {
                b = b || window.e;
                var c = b.originalEvent.wheelDelta || b.originalEvent.detail; - 300 !== c && -120 !== c && 3 !== c && r(a, "wheelUp", b)
            })
        }
    };
    c.event.special.wheelDown = {
        setup: function() {
            var a = this;
            c(a).on("mousewheel DOMMouseScroll",
            function(b) {
                b = b || window.e;
                var c = b.originalEvent.wheelDelta || b.originalEvent.detail; - 300 !== c && -120 !== c && 3 !== c || r(a, "wheelDown", b)
            })
        }
    };
    c.each("tap tapHold swipe swipeLeft swipeRight swipeRight swipeUp swipeDown wheelUp wheelDown".split(" "),
    function(a, b) {
        c.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    c.each(["animationBegin", "animationPause", "animationEnd", "removeAnimation"],
    function(a, b) {
        c.fn[b] = function(a) {
            return this.each(function() {
                function f(a) {
                    d.on("animationend webkitAnimationEnd",
                    function() {
                        d.css("animationPlayState", "").removeData("jsmodernAnimationRunning jsmodernAnimationPaused");
                        a && a.apply(g);
                        d.off("animationend webkitAnimationEnd")
                    })
                }
                var d = c(this),
                g = d[0];
                switch (b) {
                case "animationBegin":
                    if (a && x[a]) {
                        if (!d.data("jsmodernAnimationRunning") && !d.data("jsmodernAnimationPaused")) {
                            var h = d.prop("class");
                            h && c.each(x,
                            function(a, b) { - 1 < h.indexOf(b) && d.removeClass(b)
                            });
                            setTimeout(function() {
                                d.addClass(x[a]).css("animationPlayState", "running")
                            },
                            13)
                        }
                        d.data("jsmodernAnimationPaused") && d.css("animationPlayState", "running");
                        d.data({
                            jsmodernAnimationRunning: !0,
                            jsmodernAnimationName: x[a]
                        });
                        f()
                    }
                    break;
                case "animationPause":
                    d.data("jsmodernAnimationRunning") && d.css("animationPlayState", "paused").data("jsmodernAnimationPaused", !0).removeData("jsmodernAnimationRunning");
                    break;
                case "animationEnd":
                    f(a);
                    break;
                case "removeAnimation":
                    d.removeClass(d.data("jsmodernAnimationName")).removeData("jsmodernAnimationName")
                }
            })
        }
    });
    c.fn.extend({
        orientation:
        function(a) {
            if (this[0] === window) c(window).on("orientationchange",
            function() {
                var b = window.orientation;
                0 != b && 180 != b || !a.v() && c.noop;
                90 != b && -90 != b || !a.h() && c.noop
            });
            return this
        }
    });
    c.easing.easeInOutQuart = function(a, b, c, e, d) {
        return 1 > (b /= d / 2) ? e / 2 * b * b * b * b + c: -e / 2 * ((b -= 2) * b * b * b - 2) + c
    };
    var w = {
        isMobile: function() {
            return v.match(/(ios|iphone|ipod|ipad|mobile|android|symbianos|ucweb|mqqbrowser|iemobile|webos|windows phone|windows mobile|opera mini|opera mobl|nexus|series|nokia|blackberry|meego|playbook|fennec|tablet)/) && "ontouchend" in document ? !0 : !1
        },
        isIOS: function(a) {
            var b = w.isMobile() && v.match(/(ios|iphone|ipod|ipad)/) ? !0 : !1;
            if (0 == arguments.length) return b;
            if ("boolean" === c.type(a) && a) return b ? v.match(/os(.*)like mac os x/)[1].replace(/(_)/g, ".").trim() : !1
        },
        isAndroid: function(a) {
            var b = !w.isMobile() || w.isIOS() || v.match(/(windows|blackberry|symbianos|bb|meego|playbook|fennec|iemobile)/) ? !1 : !0;
            if (0 == arguments.length) return b;
            if ("boolean" === c.type(a) && a) {
                var f = v.indexOf("android"),
                f = v.substring(f + 7),
                e = f.indexOf(";");
                return b ? f.substring(0, e).trim() : !1
            }
        },
        time: function(a, b) {
            if (0 == arguments.length) return c.now();
            b = b || "-";
            a = new Date(a);
            var f = {
                yy: a.getFullYear(),
                mm: a.getMonth() + 1,
                dd: a.getDate(),
                h: a.getHours(),
                m: a.getMinutes(),
                s: a.getSeconds()
            },
            e;
            for (e in f) {
                var d = f[e];
                f[e] = 10 > d ? "0" + d: d
            }
            return f.yy + b + f.mm + b + f.dd + " " + f.h + ":" + f.m + ":" + f.s
        },
        random: function(a, b) {
            function f(a, b) {
                return Math.floor(Math.random() * (b - a + 1) + a)
            }
            var e = "",
            d = c.type(a),
            g = c.type(b);
            "number" === d && "number" === g && (e = f(a, b), e = Number(e));
            if ("number" === d && "boolean" === g && b) for (; e.length < a;) e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [f(0, 61)];
            if ("number" === d && "boolean" === g && !b) for (; e.length < a;) e += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [f(0, 51)];
            if (void 0 === b && "number" === d && Math.floor(a) === a && 0 < a) {
                for (; e.length < a;) e += "0123456789" [f(0, 9)];
                e = Number(e)
            }
            0 === arguments.length && (e = Math.random());
            return e
        },
        uuid: function() {
            for (var a = "",
            b = [], c = 0; 14 > c; c++) a += "abcdef" [w.random(0, 5)];
            a = (Math.random().toFixed(16).replace("0.", w.random(10, 99)) + a).split("");
            for (c = 0; 36 > c; c++) {
                var e = w.random(0, 31);
                b[c] = a[e];
                a.slice(e, 1)
            }
            b[8] = b[13] = b[18] = b[23] = "-";
            return b.join("")
        },
        unique: function(a) {
            if (Array.isArray(a)) {
                if (Array.from) a = Array.from(new Set(a));
                else {
                    for (var b = {},
                    f = [], e = 0, d = a.length; e < d; e++) {
                        var g = a[e],
                        h = c.type(g);
                        b[g + h] || (f.push(g), b[g + h] = !0)
                    }
                    a = f
                }
                return a
            }
        },
        session: function(a, b) {
            if (a && b) return sessionStorage.setItem(a, b),
            this;
            if (c.isPlainObject(a) && !b) return c.each(a,
            function(a, b) {
                sessionStorage.setItem(a, b)
            }),
            this;
            if ("string" === c.type(a) && !b) return sessionStorage.getItem(a)
        },
        removeSession: function(a) {
            a ? a.replace(/\s+/g, " ").trim().split(" ").forEach(function(a) {
                sessionStorage.removeItem(a)
            }) : sessionStorage.clear();
            return this
        },
        sessionKeys: function() {
            for (var a = [], b = 0, c = sessionStorage.length; b < c; b++) a.push(sessionStorage.key(b));
            return 0 < a.length ? a: null
        },
        sessionValues: function() {
            for (var a = [], b = 0, c = sessionStorage.length; b < c; b++) {
                var e = sessionStorage.key(b);
                a.push(sessionStorage.getItem(e))
            }
            return 0 < a.length ? a: null
        },
        local: function(a, b) {
            if (a && b) return localStorage.setItem(a, b),
            this;
            if (c.isPlainObject(a) && !b) return c.each(a,
            function(a, b) {
                localStorage.setItem(a, b)
            }),
            this;
            if ("string" === c.type(a) && !b) return localStorage.getItem(a)
        },
        removeLocal: function(a) {
            a ? a.replace(/\s+/g, " ").trim().split(" ").forEach(function(a) {
                localStorage.removeItem(a)
            }) : localStorage.clear();
            return this
        },
        localKeys: function() {
            for (var a = [], b = 0, c = localStorage.length; b < c; b++) a.push(localStorage.key(b));
            return 0 < a.length ? a: null
        },
        localValues: function() {
            for (var a = [], b = 0, c = localStorage.length; b < c; b++) {
                var e = localStorage.key(b);
                a.push(localStorage.getItem(e))
            }
            return 0 < a.length ? a: null
        },
        cookie: function(a, b, f) {
            var e = arguments.length;
            if (1 == e && "string" === c.type(a)) {
                var d = document.cookie.replace(/[=]/g, "; ").split("; "),
                g = "";
                c.each(d,
                function(b, c) {
                    c === a && (g = d[b + 1])
                });
                return "" !== g ? g: null
            }
            if (2 <= e) return document.cookie = a + "\x3d" + b + (3 == e ? ";expires\x3d" + f: ""),
            this;
            if (1 == e && c.isPlainObject(a)) return c.each(a,
            function(a, b) {
                document.cookie = a + "\x3d" + b
            }),
            this
        },
        removeCookie: function(a) {
            a ? a.replace(/\s+/g, " ").trim().split(" ").forEach(function(a) {
                document.cookie = a + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT;"
            }) : (a = document.cookie.replace(/[=]/g, "; ").split("; ")) && a.forEach(function(a) {
                document.cookie = a + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT;"
            });
            return this
        },
        ua: function() {
            return v
        },
        screen: function() {
            return [screen.width, screen.height]
        },
        filterChar: function(a, b) {
            if ("string" === c.type(a) && Array.isArray(b)) {
                var f = "~`!@#$%^\x26*()-_+\x3d|\\[]{};:\"'\x3c\x3e,./?".split("");
                b.forEach(function(b) {
                    a = a.replace( - 1 < f.indexOf(b) ? new RegExp("\\" + b, "g") : new RegExp(b, "g"), "")
                });
                return a
            }
        },
        noConflict: function() {
            window.jsModern = T;
            return w
        },
        toBase64: function(a, b) {
            var f = [],
            e = c.type(a);
            Array.isArray(a) || (a = [a]); (function g(h) {
                var k = new Image;
                k.src = h;
                k.onload = function() {
                    var m;
                    m = this.width;
                    var l = this.height,
                    n = h.substring(h.lastIndexOf(".") + 1).toLowerCase(),
                    p = document.createElement("canvas");
                    p.width = m;
                    p.height = l;
                    p.getContext("2d").drawImage(k, 0, 0, m, l);
                    m = p.toDataURL("image/" + ("png" === n ? "png": "jpeg"), 1);
                    f.push(m);
                    a.splice(0, 1);
                    0 < a.length ? g(a[0]) : c.isFunction(b) && b("string" === e ? f[0] : f)
                }
            })(a[0]);
            return this
        },
        animation: function(a, b, f) {
            if (a && b && !v.match("msie 9.0")) {
                var e = "",
                d = "",
                g;
                for (g in b) e += g + JSON.stringify(b[g]);
                e = e.replace(/(rgba|rgb)/gi,
                function(a, b) {
                    return b.toLowerCase()
                });
                e = e.replace(/\"\,/g, ";").replace(/\"/g, "").replace(/([A-Z])/g, "-$1").toLowerCase();
                e = e.replace(/-(x|y|z)/g,
                function(a, b) {
                    return b.toUpperCase()
                });
                e = e.replace(/(#[^;]+;)/g,
                function(a, b) {
                    return b.replace(/-/g, "")
                });
                d = "@-webkit-keyframes " + a + "{" + e + "}@keyframes " + a + "{" + e + "}";
                f = f ? f: "1s forwards";
                b = ".jsmodern-animation-" + w.uuid();
                d = '\x3cstyle data-type\x3d"jsmodern-create-animation" id\x3d"' + b.substring(1) + '"\x3e' + b + "{animation:" + a + " " + f + ";-webkit-animation:" + a + " " + f + "}" + d + "\x3c/style\x3e";
                c("head").append(d);
                x[a] = b.substring(1);
                return this
            }
        },
        removeAnimation: function(a) {
            a ? c.trim(a).replace(/\s+/g, " ").split(" ").forEach(function(a) {
                var b = x[a];
                b && (c("#" + b).remove(), delete x[a])
            }) : (c("style[data-type\x3d'jsmodern-create-animation']").remove(), x = {});
            return this
        },
        tmpl: function(a, b) {
            function f(a, b, c) {
                var d = new Function("data", "html", "var result \x3d [];with ( data ) { result.push('" + a.replace(/{{(.*?)}}/g, "',$1,'") + "');}return result.join('');");
                return c ?
                function() {
                    var c = "";
                    b.forEach(function(b) {
                        c += d(b, a)
                    });
                    return c
                } () : d(b, a)
            }
            if (2 == arguments.length && c.isPlainObject(b)) {
                var e = c("body"),
                d = w.random(10, !1).toLowerCase();
                L[d] = b.event;
                c(a).each(function() {
                    var a = b.data,
                    e = c(this).attr("jm-data");
                    e && (a = a[e.trim()]);
                    var k = b.template.replace(/[\n\r\t]/g, "").replace(/>(\s+)</g, "\x3e\x3c").trim().replace(/(\{\{)\s+/g, "{{").replace(/\s+(\}\})/g, "}}");
                    c("body").append('\x3csection id\x3d"jsmodern-tmpl-sandbox" style\x3d"display:none !important;"\x3e\x3c/section\x3e');
                    e = c("#jsmodern-tmpl-sandbox");
                    e.html(k);
                    var m = "";
                    e.find("[jm-for]").each(function() {
                        var b = c(this)[0].outerHTML,
                        d = c(this).attr("jm-for").replace(/\s+/g, " ").trim().split(" in "),
                        e = d[0],
                        d = a[d[1]];
                        0 > b.indexOf(e + ".") && !c.isPlainObject(d) && (d = d.map(function(a) {
                            return {
                                $: a
                            }
                        }), b = b.replace(new RegExp(e, "g"), e + ".$"));
                        b = b.replace(new RegExp(e + ".", "g"), "");
                        m = f(b, d, "for").replace(/ jm\-for=\"(.*?)\"/g, "");
                        c(this).replaceWith(m)
                    });
                    e.html(f(e.html(), a));
                    e.find("[jm-event]").attr("data-event", d);
                    if (k = b.css) e.find("*").each(function() {
                        c(this).attr(d, "")
                    }),
                    k = k.replace(/[\n\t\r]/g, "").trim().replace(/\}(\s+)/g, "}").replace(/(\s+)\{/g, "{").replace(/\{/g, "[" + d + "]{"),
                    c("head").append('\x3cstyle class\x3d"jsmodern-tmpl-style"\x3e' + k + "\x3c/style\x3e");
                    k = e.html().replace(/jm\-for=\"(.*?)\"/g, "");
                    c(this)[b.place || "append"](k);
                    e.remove()
                });
                e.find("[jm-event]").each(function() {
                    var a = c(this).attr("data-event"),
                    b = c(this).attr("jm-event");
                    if (a = L[a]) for (var d in a) b === d && a[d].call(this);
                    c(this).removeAttr("jm-event data-event")
                })
            }
            return this
        },
        fullScreenIn: function(a) {
            a = a || document.documentElement;
            a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullScreen && a.requestFullScreen();
            F && E.data("fullScreenIn", !0);
            return this
        },
        fullScreenOut: function(a) {
            a = a || document;
            a.webkitExitFullscreen ? a.webkitExitFullscreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen();
            F && E.removeData("fullScreenIn");
            return this
        },
        fullScreenToggle: function(a) {
            if (F) w[E.data("fullScreenIn") ? "fullScreenOut": "fullScreenIn"](a);
            else w[document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullScreen ? "fullScreenOut": "fullScreenIn"](a);
            return this
        },
        top: function(a, b) {
            var f, e;
            c.isPlainObject(b) && (f = b.time, e = b.distance);
            c.isNumeric(b) && 0 < b && (f = parseInt(b));
            var d = c(a).first();
            if (d.is(":hidden")) {
                var g = !!(1 === J && 11 > K);
                c(window).on("scroll",
                function() {
                    var a = c(window).scrollTop();
                    a > (e || 300) && (g ? d.show() : d.stop().fadeIn(100));
                    0 === a && (g ? d.hide() : d.stop().fadeOut(100))
                })
            }
            d.click(function() {
                c("html, body").stop().animate({
                    scrollTop: 0
                },
                f || 300)
            });
            return this
        },
        textBind: function(a, b) {
            function f(a) {
                c(b).each(function() {
                    var b = c(this);
                    "input" === b[0].nodeName.toLowerCase() ? b.val(a) : b.html(a)
                })
            }
            c(a).each(function() {
                var a = c(this);
                a.on("input",
                function() {
                    f(a.val())
                });
                v.match("msie 9.0") && setInterval(function() {
                    f(a.val())
                },
                13)
            });
            return this
        },
        marquee: function(a) {
            var b = 1E3 / 60;
            c(a).each(function() {
                var a = c(this),
                e = a.children(),
                d = 0;
                e.each(function() {
                    d += c(this).outerWidth(!0)
                });
                if (d > a.width()) {
                    a.css("overflow", "hidden");
                    w.isMobile() && a.addClass("jsmodern-select-none");
                    e.wrapAll('\x3csection class\x3d"jsmodern-marquee-inner"\x3e\x3csection class\x3d"jsmodern-marquee-default"\x3e\x3c/section\x3e\x3c/section\x3e').parent().width(d);
                    var e = a.find(".jsmodern-marquee-inner"),
                    g = a.find(".jsmodern-marquee-default");
                    g.after(g.clone(!0)).next().attr("class", "jsmodern-marquee-repeat");
                    e.width(2 * d);
                    var h = function() {
                        a.scrollLeft(a.scrollLeft() > g.width() ? 0 : a.scrollLeft() + 1)
                    },
                    k = setInterval(h, b);
                    a.on("mouseenter touchstart",
                    function() {
                        clearInterval(k)
                    }).on("mouseleave touchend",
                    function() {
                        k = setInterval(h, b)
                    })
                }
            });
            return this
        },
        share: function(a) {
            var b = encodeURIComponent(location.href),
            f = document.title,
            e = null;
            c(document).on("click",
            function(d) {
                d = d || window.event;
                d = c(d.target);
                var g = v.match("firefox");
                if (d.is(a.qrcode)) {
                    if (e) c("body").append(e);
                    else {
                        c("body").append('\x3csection class\x3d"jsmodern-share jsmodern-select-none" id\x3d"jsmodern-share"\x3e\x3cb\x3e\x3c/b\x3e\x3cp\x3e' + decodeURI("%E6%89%AB%E4%B8%80%E6%89%AB%E5%88%86%E4%BA%AB") + "\x3c/p\x3e\x3csection\x3e\x3c/section\x3e\x3c/section\x3e");
                        var h = c("#jsmodern-share").find("section"),
                        k = "jquery-qrcode-" + w.random(15, !1),
                        m = document.createElement("script");
                        m.src = "http://apps.bdimg.com/libs/jquery-qrcode/1.0.0/jquery.qrcode.min.js?" + +new Date;
                        m.type = "text/javascript";
                        m.id = k;
                        document.body.appendChild(m);
                        m.onload = function() {
                            h.qrcode({
                                render: "canvas",
                                text: decodeURIComponent(b),
                                width: h.width(),
                                height: h.height()
                            });
                            e = c("#jsmodern-share");
                            c("#" + k).remove()
                        }
                    }
                    c("#jsmodern-share").find("b").click(function() {
                        c(this).parent().remove()
                    })
                }
                d.is(a.qzone) && window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url\x3d" + b + "\x26title\x3d" + f);
                d.is(a.sina) &&
                function(a, c, d) {
                    function e() {
                        window.open(["http://v.t.sina.com.cn/share/share.php?", h].join(""), "mb") || (l.href = ["http://v.t.sina.com.cn/share/share.php?", h].join(""))
                    }
                    var l = c.location.href,
                    h = ["url\x3d", d(l), "\x26title\x3d", d(f), "\x26appkey\x3d2924220432\x26pic\x3d", d(b)].join("");
                    g ? setTimeout(e, 0) : e()
                } (screen, document, encodeURIComponent);
                d.is(a.douban) &&
                function() {
                    var a = document,
                    c = encodeURIComponent,
                    d = window.getSelection,
                    e = a.getSelection,
                    a = a.selection,
                    d = d ? d() : e ? e() : a ? a.createRange().text: "",
                    h = "https://www.douban.com/recommend/?url\x3d" + c(b) + "\x26title\x3d" + c(f) + "\x26sel\x3d" + c(d) + "\x26v\x3d1",
                    c = function() {
                        window.open(h, "douban") || (location.href = h + "\x26r\x3d1")
                    };
                    g ? setTimeout(c, 0) : c()
                } ();
                d.is(a.qq) && window.open("http://connect.qq.com/widget/shareqq/index.html?url\x3d" + b + "\x26title\x3d" + f + "\x26desc\x3d" + f)
            });
            return this
        },
        picture: function(a, b) {
            c(a).each(function() {
                function a(a) {
                    "fade" === k && (a = -1 == a ? u - 1 : a == u ? 0 : a, q.eq(a).stop().fadeIn(700).siblings().stop().fadeOut(700,
                    function() {
                        e(a);
                        d.data("cacheIndex", a)
                    }));
                    "slide" === k && (t.is(":animated") || t.stop().animate({
                        left: -(g * a + g) + "px"
                    },
                    700, "easeInOutQuart",
                    function() { - 1 === a && (t.css("left", "-" + g * u + "px"), a = u - 1);
                        a === u && (t.css("left", "-" + g + "px"), a = 0);
                        e(a);
                        d.data("cacheIndex", a)
                    }))
                }
                function e(a) {
                    A.eq(a).addClass("active").siblings().removeClass("active")
                }
                var d = c(this);
                d.find("a");
                var g = d.width(),
                h = d.height(),
                k = "slide",
                m = !0,
                l = !0,
                n = b.dotPosition || "center",
                p = !1;
                b && (k = b.type || "slide", m = b.arrow, l = b.dot, p = b.autoplay);
                d.addClass("jsmodern-picture-container").children().first().addClass("jsmodern-picture-inner").children().addClass("jsmodern-picture-part");
                d.on("selectstart",
                function() {
                    return ! 1
                }).data("cacheIndex", 0);
                var t = d.find(".jsmodern-picture-inner"),
                q = d.find(".jsmodern-picture-part"),
                z = d.find("img, a"),
                u = q.length;
                q.add(z).width(g).height(h);
                h = "";
                for (z = 0; z < u; z++) h += "\x3cb\x3e\x3c/b\x3e";
                t.after("\x3cdiv class\x3d'jsmodern-picture-dot'\x3e" + h + "\x3c/div\x3e");
                var z = d.find(".jsmodern-picture-dot"),
                A = z.find("b");
                A.first().addClass("active");
                z.addClass("jsmodern-picture-dot" + (n.match(/(left|center|right)/) ? n: "center"));
                d.append("\x3cb class\x3d'jsmodern-picture-prev'\x3e\x3c/b\x3e\x3cb class\x3d'jsmodern-picture-next'\x3e\x3c/b\x3e");
                n = d.find(".jsmodern-picture-prev");
                h = d.find(".jsmodern-picture-next");
                "boolean" !== typeof m || m || n.add(h).remove();
                "boolean" !== typeof l || l || z.remove();
                "fade" === k && (t.addClass("jsmodern-picture-fade"), q.first().show());
                "slide" === k && (q = t.find(".jsmodern-picture-part"), m = q.first(), l = q.last(), t.addClass("jsmodern-picture-slide").width(g * (u + 2)).append(m.clone(!0)).prepend(l.clone(!0)).css("left", -g + "px"));
                A.click(function() {
                    var b = c(this).index();
                    a(b);
                    d.data("cacheIndex", b)
                });
                n.click(function() {
                    var b = d.data("cacheIndex");
                    b--;
                    a(b)
                });
                h.click(function() {
                    var b = d.data("cacheIndex");
                    b++;
                    a(b)
                });
                w.isMobile() && d.swipeLeft(function() {
                    var b = d.data("cacheIndex");
                    b++;
                    a(b)
                }).swipeRight(function() {
                    var b = d.data("cacheIndex");
                    b--;
                    a(b)
                });
                if (p && "number" === typeof p) {
                    var r = setInterval(function() {
                        var b = d.data("cacheIndex");
                        b++;
                        a(b)
                    },
                    p);
                    d.on("mouseenter touchstart",
                    function() {
                        clearInterval(r)
                    }).on("mouseleave touchend",
                    function() {
                        r = setInterval(function() {
                            var b = d.data("cacheIndex");
                            b++;
                            a(b)
                        },
                        p)
                    })
                }
            });
            return this
        },
        video: function(a, b) {
            var f = !!v.match(/(msie|trident)/);
            c(a).each(function() {
                var a = c(this),
                d = a.find("video"),
                g = d[0],
                h = a.width(),
                k = a.height();
                if (w.isMobile()) d.attr("controls", "controls"),
                g.width = h,
                g.height = k,
                a.addClass("jsmodern-video"),
                d.on("ended",
                function() {
                    b && c.isFunction(b) && b.call(g)
                });
                else {
                    d.removeAttr("controls");
                    d.wrap('\x3csection class\x3d"jsmodern-video" style\x3d"width:' + h + "px;height:" + k + 'px;"\x3e\x3c/section\x3e').prop({
                        width: h,
                        height: k
                    });
                    var m = a.find(".videotime");
                    a.find(".videotime").append('\x3csection class\x3d"jsmodern-video-panel"\x3e\x3cb class\x3d"jsmodern-video-play"\x3e\x3c/b\x3e\x3cspan class\x3d"jsmodern-video-start"\x3e00:00\x3c/span\x3e\x3cspan\x3e/\x3c/span\x3e\x3cspan class\x3d"jsmodern-video-end"\x3e00:00\x3c/span\x3e\x3cdiv class\x3d"jsmodern-video-linebox"\x3e\x3cdiv class\x3d"jsmodern-video-pass"\x3e\x3c/div\x3e\x3cb class\x3d"jsmodern-video-linedot"\x3e\x3c/b\x3e\x3c/div\x3e\x3cb class\x3d"jsmodern-video-volume"\x3e\x3c/b\x3e\x3cdiv class\x3d"jsmodern-video-volumebox"\x3e\x3cdiv class\x3d"jsmodern-video-volumeline"\x3e\x3c/div\x3e\x3cb class\x3d"jsmodern-video-volumedot"\x3e\x3c/b\x3e\x3c/div\x3e\x3cb class\x3d"jsmodern-video-fullin"\x3e\x3c/b\x3e\x3c/section\x3e');
                    var l = a.find(".jsmodern-video-panel"),
                    n = l.find(".jsmodern-video-pass"),
                    a = l.find(".jsmodern-video-linebox"),
                    p = l.find(".jsmodern-video-linedot"),
                    t = l.find(".jsmodern-video-play"),
                    q = l.find(".jsmodern-video-volume"),
                    z = l.find(".jsmodern-video-volumebox"),
                    u = l.find(".jsmodern-video-volumeline"),
                    A = l.find(".jsmodern-video-volumedot"),
                    r = l.find(".jsmodern-video-start"),
                    v = l.find(".jsmodern-video-end"),
                    y = l.find(".jsmodern-video-fullin"),
                    x = a.width();
                    if (f) l.find("span").on("selectstart",
                    function() {
                        return ! 1
                    });
                    f && document.all && y.addClass("jsmodern-video-fullFalse");
                    var C = 0,
                    B;
                    d.on({
                        play: function() {
                            d.data("playState", "play");
                            t.addClass("jsmodern-video-pause");
                            m.on("mousemove",
                            function() {
                                C = 1;
                                l.stop().fadeIn(50)
                            });
                            B = setInterval(function() {
                                C ? l.stop().fadeIn(100) : (y.data("fullState") || y.hasClass("jsmodern-video-fullout")) && l.stop().fadeOut(100);
                                C = 0
                            },
                            2E3)
                        },
                        pause: function() {
                            d.data("playState", "pause");
                            t.removeClass("jsmodern-video-pause");
                            m.off("mousemove mouseenter mouseleave");
                            clearInterval(B)
                        },
                        ended: function() {
                            d.data("playState", "end");
                            t.removeClass("jsmodern-video-pause");
                            r.html("00:00");
                            n.width(0);
                            p.css("marginLeft", 0);
                            m.off("mousemove mouseenter mouseleave");
                            l.fadeIn(100);
                            clearInterval(B);
                            b && c.isFunction(b) && b.call(g)
                        }
                    });
                    var G = function(a) {
                        var b = parseInt(a / 60);
                        a = parseInt(a % 60);
                        return (10 > b ? "0" + b: b) + ":" + (10 > a ? "0" + a: a)
                    },
                    H;
                    d.on("durationchange",
                    function() {
                        var a = g.duration;
                        H = a;
                        v.html(G(a))
                    });
                    d.on("timeupdate",
                    function() {
                        var a;
                        isNaN(g.duration) || (a = g.currentTime, r.html(G(a)));
                        v.html().replace(":", "");
                        a = a / H * x;
                        n.width(a);
                        p.css("marginLeft", a + "px")
                    });
                    var M = function(a) {
                        a = parseInt(n.width()) / (a || x) * H;
                        r.html(G(a));
                        g.currentTime = a;
                        "play" === d.data("playState") ? g.play() : g.pause()
                    };
                    a.on("click",
                    function(a) {
                        a = a || window.event;
                        var b = c(this).offset().left;
                        n.width(a.pageX - b);
                        p.css("marginLeft", a.pageX - b + "px");
                        M()
                    });
                    p.on("mousedown",
                    function(a) {
                        var b = c(this),
                        d = c(this).parent().offset().left;
                        c(document).on("mousemove",
                        function(a) {
                            a = a || window.event;
                            var c = a.pageX - d;
                            a.preventDefault();
                            0 > c && (c = 0);
                            c > x && (c = x);
                            b.css("marginLeft", c + "px").siblings().width(c);
                            M()
                        });
                        c(document).mouseup(function() {
                            c(this).off("mousemove")
                        })
                    });
                    t.click(function() {
                        g.paused ? g.play() : g.pause()
                    });
                    g && (g.volume = .5);
                    q.click(function() {
                        g.muted ? (g.muted = !1, q.removeClass("jsmodern-video-muted"), A.css("marginLeft", q.data("left")), u.width(q.data("left"))) : (g.muted = !0, q.addClass("jsmodern-video-muted").data("left", A.css("marginLeft")), A.css("marginLeft", 0), u.width(0))
                    });
                    var D = z.width();
                    z.click(function(a) {
                        a = a || window.event;
                        var b = c(this).offset().left;
                        0 <= a.pageX - b && a.pageX - b <= D && (g.muted = !1, q.removeClass("jsmodern-video-muted"), u.width(a.pageX - b), A.css("marginLeft", a.pageX - b + "px"), g.volume = (a.pageX - b) / D)
                    });
                    A.on("mousedown",
                    function(a) {
                        var b = c(this),
                        d = b.parent().offset().left;
                        c(document).on("mousemove",
                        function(a) {
                            a = a || window.event;
                            var c = a.pageX - d;
                            a.preventDefault();
                            0 >= c && (c = 0, q.addClass("jsmodern-video-muted"), g.muted = !0);
                            c > D && (g.muted = !1, c = D);
                            0 < c && c <= D && (g.muted = !1, q.removeClass("jsmodern-video-muted"));
                            b.css("marginLeft", c + "px").siblings().width(c);
                            g.volume = c / D
                        })
                    });
                    c(document).mouseup(function() {
                        c(this).off("mousemove")
                    });
                    var N = screen.width,
                    O = screen.height,
                    P = function(a) {
                        a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullScreen && a.requestFullScreen()
                    },
                    Q = function() {
                        document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.oRequestFullscreen ? document.oCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                    },
                    R = function() {
                        m.width(N).height(O);
                        g.width = N;
                        g.height = O;
                        l.width(h).addClass("jsmodern-video-panelFull");
                        y.addClass("jsmodern-video-fullout")
                    },
                    S = function() {
                        m.width(h).height(k);
                        g.width = h;
                        g.height = k;
                        l.width(h).removeClass("jsmodern-video-panelFull");
                        y.removeClass("jsmodern-video-fullout")
                    };
                    y.click(function() {
                        y.hasClass("jsmodern-video-fullFalse") || (y.hasClass("jsmodern-video-fullout") ? Q() : (P(m[0]), f && y.data("fullState", !0)))
                    });
                    c(document).on("fullscreenChange webkitfullscreenchange mozfullscreenchange MSFullscreenChange",
                    function() {
                        f ? y.data("fullState") ? (R(), y.removeData("fullState")) : S() : document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen ? (P(m[0]), R()) : (Q(), S())
                    })
                }
            });
            return this
        },
        scrollBar: function(a, b) {
            if (w.isMobile()) c(a).css({
                overflowY: "auto",
                webkitOverflowScrolling: "touch"
            });
            else return c(a).each(function() {
                var a = c(this),
                e = a.children().first(),
                d = a.innerHeight(),
                g = e.outerHeight(!0),
                h = g + (parseInt(a.css("paddingTop")) + parseInt(a.css("paddingBottom")));
                if (h > a.innerHeight()) {
                    a.addClass("jsmodern-scrollBar-container").append('\x3csection class\x3d"jsmodern-scrollbar"\x3e\x3c/section\x3e');
                    "static" === a.css("position") && a.css("position", "relative");
                    e.addClass("jsmodern-scrollBar-inner").data("y", 0);
                    var k = a.find(".jsmodern-scrollbar");
                    k.data({
                        y: 0,
                        cacheY: 0
                    });
                    c("body").on("selectstart", ".jsmodern-scroll-noselect",
                    function() {
                        return ! 1
                    });
                    k.height(~~ (d * d / g));
                    b && (b = b.trim(), "." === b[0] ? k.addClass(b.substring(1)) : function() {
                        var a = k.attr("style");
                        k.attr("style", a + b)
                    } ());
                    var m = d - k.height();
                    k.on("mousedown",
                    function(b) {
                        var f = c(this);
                        b = b || window.event;
                        var g = b.pageY - f.position().top - k.data("y");
                        a.addClass("jsmodern-scroll-noselect");
                        e.add(f).css("transition", "0s");
                        c(document).on("mousemove",
                        function(a) {
                            a = a || window.event;
                            var b = a.pageY - g;
                            a.preventDefault();
                            0 > b && (b = 0);
                            b > m && (b = m);
                            f.css("transform", "translate(0, " + b + "px)").data("cacheY", b);
                            e.css("transform", "translate(0, -" + h / d * b + "px)")
                        })
                    });
                    c(document).mouseup(function() {
                        c(this).off("mousemove");
                        a.removeClass("jsmodern-scroll-noselect")
                    });
                    a.on("mousewheel DOMMouseScroll",
                    function(a) {
                        a = a || window.event;
                        var b = a.originalEvent.wheelDelta || a.originalEvent.detail,
                        b = -300 === b || -120 === b || 3 === b ? "down": "up";
                        k.data("cacheY");
                        a.preventDefault();
                        a = k.data("cacheY");
                        "down" === b ? (a += 60, a > m && (a = m)) : (a -= 60, 0 > a && (a = 0));
                        k.css({
                            transform: "translate(0, " + a + "px)",
                            transition: ".2s"
                        }).data("cacheY", a);
                        e.css({
                            transform: "translate(0, -" + h / d * a + "px)",
                            transition: ".2s"
                        })
                    })
                }
            }),
            this
        },
        lazyload: function(a) {
            function b(a, b) {
                a.attr("src", b).on("load",
                function() {
                    a.stop().animate({
                        opacity: a.data("lazyOpacity")
                    },
                    500,
                    function() {
                        c(this).removeAttr("jm-lazy").data("lazyload", !0)
                    })
                })
            }
            var f = c(window).height();
            c(a).each(function() {
                c(this).find("img").each(function() {
                    function a() {
                        var a = d[0].getBoundingClientRect();
                        f > a.top && b(d, g)
                    }
                    var d = c(this),
                    g = d.attr("jm-lazy");
                    d.data("lazyOpacity", d.css("opacity")).css("opacity", 0);
                    a();
                    c(window).on("scroll",
                    function() { ! d.data("lazyload") && a()
                    })
                })
            });
            return this
        },
        page: function(a, b) {
            a = c(document.querySelector(a));
            if (b && c.isPlainObject(b)) {
                var f = c(b.target),
                e = b.type,
                d = b.url,
                g = ~~b.total,
                h = ~~b.every,
                k = b.success,
                m = b.mobileMore || decodeURI("%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9A"),
                l = b.mobileNone || decodeURI("%E5%B7%B2%E6%97%A0%E6%9B%B4%E5%A4%9A%E6%95%B0%E6%8D%AE");
                b = b = "";
                var n = g / h,
                n = 1 <= n ? 0 < g % h ? ~~n + 1 : n: n;
                1 > n && (n = 1);
                for (var p = 1; p <= n; p++) b += '\x3ci class\x3d"jsmodern-page-every"\x3e' + p + "\x3c/i\x3e";
                b = '\x3csection class\x3d"jsmodern-page"\x3e\x3ci class\x3d"jsmodern-page-first"\x3e\x3cspan\x3e\u00ab\x3c/span\x3e\x3c/i\x3e\x3ci class\x3d"jsmodern-page-prev"\x3e\x3cspan\x3e\u2039\x3c/span\x3e\x3c/i\x3e' + ("\x3cdiv\x3e\x3cdiv\x3e" + b + "\x3c/div\x3e\x3c/div\x3e") + '\x3ci class\x3d"jsmodern-page-next"\x3e\x3cspan\x3e\u203a\x3c/span\x3e\x3c/i\x3e\x3ci class\x3d"jsmodern-page-last"\x3e\x3cspan\x3e\u00bb\x3c/span\x3e\x3c/i\x3e\x3c/section\x3e';
                a.addClass("jsmodern-page-content").append(b);
                b = a.find(".jsmodern-page");
                var t = b.find("div \x3e div"),
                q = b.find(".jsmodern-page-every"),
                z = b.find(".jsmodern-page-first"),
                u = b.find(".jsmodern-page-last"),
                A = b.find(".jsmodern-page-prev"),
                r = b.find(".jsmodern-page-next");
                f.data("index", 1);
                q.first().addClass("active");
                a.on("selectstart",
                function() {
                    return ! 1
                });
                var v = function(a) {
                    if (10 < n) {
                        var b = n - 10;
                        t.width(42 * n);
                        var c = parseInt(t.css("marginLeft"));
                        switch (a) {
                        case "next":
                            c > 42 * -b && t.stop().animate({
                                marginLeft: c - 42 + "px"
                            },
                            100);
                            break;
                        case "prev":
                            0 > c && t.stop().animate({
                                marginLeft: c + 42 + "px"
                            },
                            100);
                            break;
                        case "first":
                            t.stop().animate({
                                marginLeft:
                                0
                            },
                            100);
                            break;
                        case "last":
                            t.stop().animate({
                                marginLeft:
                                42 * -b + "px"
                            },
                            100)
                        }
                    }
                };
                v();
                if (w.isMobile()) {
                    f.css("height", "auto");
                    a.empty().html('\x3csection class\x3d"jsmodern-page-more jsmodern-select-none"\x3e' + m + "\x3c/section\x3e");
                    var y = a.find(".jsmodern-page-more");
                    y.data("index", 1);
                    g === h && y.html(l)
                }
                "local" === e && d && c.isFunction(d) && c.ajax(d("")).done(function(a) {
                    a = c.parseJSON(a);
                    var b = [],
                    d;
                    for (d in a) b.push(k(a[d]));
                    var e = "",
                    m = "";
                    for (a = 0; a < h; a++) e += b[a];
                    m = e;
                    f.html(e);
                    var p = function(a, d, k) {
                        e = "";
                        if (!t.is(":animated")) {
                            var l, u = f.data("index"),
                            p = function(a) {
                                for (var c = (a - 1) * h; c < a * h; c++) b[c] && (e += b[c]);
                                l = u
                            };
                            switch (a) {
                            case "first":
                                e = m;
                                l = 1;
                                break;
                            case "last":
                                for (d = (n - 1) * h; d < g; d++) e += b[d];
                                l = n;
                                break;
                            case "prev":
                                1 < u && (u--, p(u));
                                break;
                            case "next":
                                u < n && (u++, p(u));
                                break;
                            case "every":
                                u = c(d).index() + 1,
                                p(u)
                            }
                            k ? "" !== e && f.append(e).data("index", l) : "" !== e && f.html(e).data("index", l);
                            q.eq(l - 1).addClass("active").siblings().removeClass("active");
                            v(a)
                        }
                    };
                    z.click(function() {
                        p("first")
                    });
                    u.click(function() {
                        p("last")
                    });
                    A.click(function() {
                        p("prev")
                    });
                    r.click(function() {
                        p("next")
                    });
                    q.click(function() {
                        p("every", this)
                    });
                    w.isMobile() && y.tap(function() {
                        var a = c(this).data("index");
                        a++;
                        a <= n && (c(this).data("index", a), p("next", "", "more"));
                        a === n && c(this).html(l)
                    })
                });
                if ("ajax" === e && d && c.isFunction(d)) {
                    var x = {},
                    C = function(a) {
                        q.eq(a - 1).addClass("active").siblings().removeClass("active")
                    },
                    B = function(a, b) {
                        if (x[a]) f.html(x[a]);
                        else {
                            var e = "";
                            c.ajax(d(a)).done(function(d) {
                                d = c.parseJSON(d);
                                for (var g in d) e += k(d[g]);
                                x[a] = e;
                                b ? "" !== e && f.append(e) : "" !== e && f.html(e)
                            })
                        }
                        f.data("index", a)
                    };
                    B(1);
                    q.click(function() {
                        var a = c(this).index() + 1;
                        C(a);
                        B(a);
                        v("every")
                    });
                    A.click(function() {
                        var a = f.data("index") - 1;
                        0 < a && (C(a), B(a), v("prev"))
                    });
                    r.click(function() {
                        var a = f.data("index") + 1;
                        a < n + 1 && (C(a), B(a), v("next"))
                    });
                    z.click(function() {
                        C(1);
                        B(1);
                        v("first")
                    });
                    u.click(function() {
                        C(n);
                        B(n);
                        v("last")
                    });
                    w.isMobile() && y.tap(function() {
                        var a = c(this).data("index");
                        a++;
                        a <= n && (B(a, "more"), c(this).data("index", a));
                        a === n && c(this).html(l)
                    })
                }
            }
            return this
        },
        fullPage: function(a) {
            var b = c("body").children(),
            f = c(window).width(),
            e = c(window).height();
            if (0 < b.length) {
                var d = b.first();
                d.addClass("jsmodern-fullpage-container");
                var g = a.axis || "y",
                b = a.background,
                h = a.time || 800,
                k = a.callback,
                m = d.children(),
                l = m.length,
                n = [];
                m.addClass("jsmodern-fullpage-part").each(function(a) {
                    "y" === g && c(this).css("marginTop", a * e + "px");
                    "x" === g && c(this).css("marginLeft", a * f + "px");
                    n.push(c(this).html())
                });
                "x" === g && (d.width(f * l), m.width(f));
                "y" === g && d.height(e * l);
                b && Array.isArray(b) && c.each(b,
                function(a, b) {
                    m.eq(a).css("background", b)
                });
                var p;
                if (a.navigation) {
                    if ("boolean" === c.type(a.navigation)) {
                        a = "";
                        for (b = 0; b < l; b++) a += "\x3cb\x3e\x3c/b\x3e";
                        d.after('\x3cdiv class\x3d"jsmodern-fullpage-navigation jsmodern-fullpage-navigation-default jsmodern-fullpage-navigation-' + g + '"\x3e' + a + "\x3c/div\x3e")
                    } else a = c(a.navigation),
                    a.prev().is(".jsmodern-fullpage-container") && a.addClass("jsmodern-fullpage-navigation");
                    p = d.next();
                    var t = p.children();
                    t.first().addClass("active")
                }
                d.data("jsmodern_fullpage_index", 0);
                var q = function(a) {
                    if (!d.data("jsmodern_fullpage_animate")) {
                        var b = d.data("jsmodern_fullpage_index");
                        a ? (b++, b < l && r(b)) : (b--, -1 < b && r(b))
                    }
                },
                r = function(a) {
                    function b() {
                        d.data("jsmodern_fullpage_index", a);
                        if (Array.isArray(k) && k.length === l) {
                            var b = m.eq(a);
                            b.html(n[a]).siblings().html("");
                            var c = setTimeout(function() {
                                k[a].call(b);
                                clearTimeout(c)
                            },
                            0)
                        }
                        p && t.eq(a).addClass("active").siblings().removeClass("active");
                        d.removeData("jsmodern_fullpage_animate")
                    }
                    d.data("jsmodern_fullpage_animate", !0);
                    if (document.head.classList) {
                        d.css("transition-duration", h + "ms");
                        if ("x" === g) d.css({
                            transform: "translate3d(-" + f * a + "px, 0, 0)"
                        }).on("transitionend",
                        function() {
                            b()
                        });
                        if ("y" === g) d.css({
                            transform: "translate3d(0, -" + e * a + "px, 0)"
                        }).on("transitionend",
                        function() {
                            b()
                        })
                    } else "x" === g && d.stop().animate({
                        left: "-" + f * a + "px"
                    },
                    h, "easeInOutQuart",
                    function() {
                        b()
                    }),
                    "y" === g && d.stop().animate({
                        top: "-" + e * a + "px"
                    },
                    h, "easeInOutQuart",
                    function() {
                        b()
                    })
                };
                Array.isArray(k) && k.length === l && (a = m.eq(0), a.html(n[0]).siblings().html(""), k[0].call(a));
                c(document).on({
                    keyup: function(a) {
                        d.is(":animated") || (a = a || window.event, a = a.keyCode, "x" === g && (37 === a && q(), 39 === a && q(1)), "y" === g && (38 === a && q(), 40 === a && q(1)))
                    },
                    wheelUp: function() {
                        q()
                    },
                    wheelDown: function() {
                        q(1)
                    }
                });
                if ("x" === g) c(document).on({
                    swipeLeft: function() {
                        q(1)
                    },
                    swipeRight: function() {
                        q()
                    }
                });
                if ("y" === g) c(document).on({
                    swipeUp: function() {
                        q(1)
                    },
                    swipeDown: function() {
                        q()
                    }
                });
                t.click(function() {
                    if (!d.data("jsmodern_fullpage_animate")) {
                        var a = c(this).index();
                        r(a);
                        d.data("jsmodern_fullpage_animate", !0)
                    }
                })
            }
            return this
        },
        dialog: function(a) {
            var b = decodeURI("%E6%9D%A5%E8%87%AA%E7%BD%91%E9%A1%B5%E7%9A%84%E6%B6%88%E6%81%AF"),
            f = c.noop,
            e = c.noop,
            d = '\x3csection class\x3d"jsmodern-dialog-container"\x3e\x3csection class\x3d"jsmodern-dialog"\x3e\x3cp class\x3d"jsmodern-dialog-title"\x3e\x3c/p\x3e\x3cp class\x3d"jsmodern-dialog-content"\x3e\x3c/p\x3e\x3cspan class\x3d"jsmodern-dialog-sure"\x3e' + decodeURI("%E7%A1%AE%E5%AE%9A") + '\x3c/span\x3e\x3cspan class\x3d"jsmodern-dialog-cancel"\x3e' + decodeURI("%E5%8F%96%E6%B6%88") + "\x3c/span\x3e\x3c/section\x3e\x3c/section\x3e";
            if (!document.querySelector(".jsmodern-dialog-container")) {
                c("body").append(d);
                var g = c(".jsmodern-dialog-container"),
                h = g.find(".jsmodern-dialog"),
                d = g.find(".jsmodern-dialog-cancel"),
                k = g.find(".jsmodern-dialog-sure"),
                m = g.find(".jsmodern-dialog-content"),
                l = g.find(".jsmodern-dialog-title"),
                n = w.isMobile(),
                p = arguments,
                t = p.length;
                2 === t && (d.remove(), l.html(p[0]), m.html(p[1]));
                1 !== t || c.isPlainObject(p[0]) || (d.remove(), l.html(b), m.html(p[0]));
                c.isPlainObject(p[0]) && (l.html(a.title || b), m.html(a.content));
                b = c(window).height() - 70;
                h.outerHeight() > b && (h.height(b), m.css({
                    overflowY: "scroll",
                    height: b - l.height() - 53 + "px"
                }));
                n && (b = .85 * c(window).width() + "px", h.css({
                    width: b,
                    minWidth: b
                }).addClass("jsmodern-dialog-mobile"));
                g.stop().animate({
                    opacity: 1
                },
                300);
                h.stop().animate({
                    opacity: 1,
                    top: n ? "50%": "20px"
                },
                300);
                var q = function() {
                    h.stop().animate({
                        top: n ? "43%": "-20px",
                        opacity: 0
                    },
                    300);
                    g.delay(50).animate({
                        opacity: 0
                    },
                    300,
                    function() {
                        g.remove()
                    })
                },
                r = c.isPlainObject(a);
                k.click(function() {
                    r && (a.sure ? a.sure() : f());
                    q()
                });
                d.click(function() {
                    r && (a.cancel ? a.cancel() : e());
                    q()
                })
            }
            return this
        }
    };
    Object.freeze(w);
    return w
});