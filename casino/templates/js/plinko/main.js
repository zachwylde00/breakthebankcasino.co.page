(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        e = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() {
            for (var c, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], k = 0, d = b.length, e = {}; k < d; k++)
                if ((c = b[k]) && c[1] in a) {
                    for (k = 0; k < c.length; k++) e[b[0][k]] =
                        c[k];
                    return e
                }
            return false
        }(),
        f = {
            change: d.fullscreenchange,
            error: d.fullscreenerror
        },
        g = {
            request: function(c) {
                var h = d.requestFullscreen;
                c = c || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) c[h]();
                else c[h](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[d.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(c, b) {
                var h = f[c];
                h && a.addEventListener(h, b, false)
            },
            off: function(c,
                b) {
                var h = f[c];
                h && a.removeEventListener(h, b, false)
            },
            raw: d
        };
    d ? (Object.defineProperties(g, {
        isFullscreen: {
            get: function() {
                return !!a[d.fullscreenElement]
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return a[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: true,
            get: function() {
                return !!a[d.fullscreenEnabled]
            }
        }
    }), e ? module.exports = g : window.screenfull = g) : e ? module.exports = false : window.screenfull = false
})();
var s_iScaleFactor = 1,
    s_iOffsetX, s_iOffsetY, s_bIsIphone = false;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var e = a.toLowerCase(),
        b = window.document,
        d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var f = b.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var g = b.createElement("div");
        g.id = "vpw-test-d";
        g.style.cssText = "position:absolute;top:-1000px";
        g.innerHTML = "<style>@media(" + e + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
        f.appendChild(g);
        d.insertBefore(f, b.head);
        a = 7 == g["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(f)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = true); a.length;)
        if (navigator.platform === a.pop()) return true;
    return s_bIsIphone = false
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var e = getSize("Width");
        _checkOrientation(e, a);
        var b = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH),
            d = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var g = a - b;
            b += g;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else d < e && (g = e - d, d += g, b += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - b / 2;
        var h = e / 2 - d / 2,
            c = CANVAS_WIDTH / d;
        if (h * c < -EDGEBOARD_X || g * c < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, g = (a - b) / 2, h = (e - d) / 2, c = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * h * c;
        s_iOffsetY = -1 * g * c;
        0 <= g && (s_iOffsetY = 0);
        0 <= h && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", s_iScaleFactor =
            2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g ? $("#canvas").css("top", g + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", h + "px");
        fullscreenHandler()
    }
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var e = getSize("Width");
        _checkOrientation(e, a);
        var b = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH),
            d = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var g = a - b;
            b += g;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else d < e && (g = e - d, d += g, b += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - b / 2;
        var h = e / 2 - d / 2,
            c = CANVAS_WIDTH / d;
        if (h * c < -EDGEBOARD_X || g * c < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, g = (a - b) / 2, h = (e - d) / 2, c = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * h * c;
        s_iOffsetY = -1 * g * c;
        0 <= g && (s_iOffsetY = 0);
        0 <= h && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", s_iScaleFactor =
            2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g ? $("#canvas").css("top", g + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", h + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, e) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function playSound(a, e, b) {
    return false === DISABLE_SOUND_MOBILE || false === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(e), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, e) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].volume(e)
}

function setMute(a, e) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].mute(e)
}

function fadeSound(a, e, b, d) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].fade(e, b, d)
}

function soundPlaying(a) {
    if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) return s_aSounds[a].playing()
}

function createBitmap(a, e, b) {
    var d = new createjs.Bitmap(a),
        f = new createjs.Shape;
    e && b ? f.graphics.beginFill("#fff").drawRect(0, 0, e, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = f;
    return d
}

function createSprite(a, e, b, d, f, g) {
    a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
    e = new createjs.Shape;
    e.graphics.beginFill("#000000").drawRect(-b, -d, f, g);
    a.hitArea = e;
    return a
}

function pad(a, e, b) {
    a += "";
    return a.length >= e ? a : Array(e - a.length + 1).join(b || "0") + a
}

function randomFloatBetween(a, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (e - a), e))
}

function rotateVector2D(a, e) {
    var b = e.getX() * Math.cos(a) + e.getY() * Math.sin(a),
        d = e.getX() * -Math.sin(a) + e.getY() * Math.cos(a);
    e.set(b, d)
}

function tweenVectorsOnX(a, e, b) {
    return a + b * (e - a)
}

function shuffle(a) {
    for (var e = a.length, b, d; 0 !== e;) d = Math.floor(Math.random() * e), --e, b = a[e], a[e] = a[d], a[d] = b;
    return a
}

function bubbleSort(a) {
    do {
        var e = false;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (e = a[b], a[b] = a[b + 1], a[b + 1] = e, e = true)
    } while (e)
}

function compare(a, e) {
    return a.index > e.index ? -1 : a.index < e.index ? 1 : 0
}

function easeLinear(a, e, b, d) {
    return b * a / d + e
}

function easeInQuad(a, e, b, d) {
    return b * (a /= d) * a + e
}

function easeInSine(a, e, b, d) {
    return -b * Math.cos(a / d * (Math.PI / 2)) + b + e
}

function easeInCubic(a, e, b, d) {
    return b * (a /= d) * a * a + e
}

function getTrajectoryPoint(a, e) {
    var b = new createjs.Point,
        d = (1 - a) * (1 - a),
        f = a * a;
    b.x = d * e.start.x + 2 * (1 - a) * a * e.traj.x + f * e.end.x;
    b.y = d * e.start.y + 2 * (1 - a) * a * e.traj.y + f * e.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var e = Math.floor(a / 60);
    a = parseFloat(a - 60 * e);
    var b = "";
    b = 10 > e ? b + ("0" + e + ":") : b + (e + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, e) {
    var b = getBounds(a, .9);
    var d = getBounds(e, .98);
    return calculateIntersection(b, d)
}

function calculateIntersection(a, e) {
    var b, d, f, g;
    var c = a.x + (b = a.width / 2);
    var h = a.y + (d = a.height / 2);
    var k = e.x + (f = e.width / 2);
    var m = e.y + (g = e.height / 2);
    c = Math.abs(c - k) - (b + f);
    h = Math.abs(h - m) - (d + g);
    return 0 > c && 0 > h ? (c = Math.min(Math.min(a.width, e.width), -c), h = Math.min(Math.min(a.height, e.height), -h), {
        x: Math.max(a.x, e.x),
        y: Math.max(a.y, e.y),
        width: c,
        height: h,
        rect1: a,
        rect2: e
    }) : null
}

function getBounds(a, e) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children,
            f = d.length,
            g;
        for (g = 0; g < f; g++) {
            var c = getBounds(d[g], 1);
            c.x < b.x && (b.x = c.x);
            c.y < b.y && (b.y = c.y);
            c.x + c.width > b.x2 && (b.x2 = c.x + c.width);
            c.y + c.height > b.y2 && (b.y2 = c.y + c.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            f =
                a.sourceRect || a.image;
            g = f.width * e;
            var h = f.height * e
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                f = a.spriteSheet.getFrame(a.currentFrame);
                g = f.rect.width;
                h = f.rect.height;
                d = f.regX;
                var k = f.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        d = d || 0;
        g = g || 0;
        k = k || 0;
        h = h || 0;
        b.regX = d;
        b.regY = k;
        f = a.localToGlobal(0 - d, 0 - k);
        c = a.localToGlobal(g - d, h - k);
        g = a.localToGlobal(g - d, 0 - k);
        d = a.localToGlobal(0 - d, h - k);
        b.x =
            Math.min(Math.min(Math.min(f.x, c.x), g.x), d.x);
        b.y = Math.min(Math.min(Math.min(f.y, c.y), g.y), d.y);
        b.width = Math.max(Math.max(Math.max(f.x, c.x), g.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(f.y, c.y), g.y), d.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, false)
}

function shuffle(a) {
    for (var e = a.length, b, d; 0 < e;) d = Math.floor(Math.random() * e), e--, b = a[e], a[e] = a[d], a[d] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = false;
        this.element.addEventListener("touchmove", this, false);
        this.element.addEventListener("touchend", this, false)
    },
    onTouchMove: function(a) {
        this.moved = true
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, false);
        this.element.removeEventListener("touchend",
            this, false);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            a.dispatchEvent(e)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var e = "hidden";
    e in document ? document.addEventListener("visibilitychange", a) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (e = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var e = window.location.search.substring(1).split("&"), b = 0; b < e.length; b++) {
        var d = e[b].split("=");
        if (d[0] == a) return d[1]
    }
}
String.prototype.format = function() {
    for (var a = this, e = arguments.length; e--;) a = a.replace(new RegExp("\\{" + e + "\\}", "gm"), arguments[e]);
    return a
};

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? true : false, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}

function extractRootDomain(a) {
    a = extractHostname(a);
    var e = a.split("."),
        b = e.length;
    2 < b && (a = e[b - 2] + "." + e[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            e = false;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    e = true;
                    break
                }
        } catch (b) {
            e = true
        }
        return {
            topFrame: a,
            err: e
        }
    },
    getBestPageUrl = function(a) {
        var e = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (f) {
                var d = window.location.ancestorOrigins;
                b = d[d.length - 1]
            }
        } catch (f) {
            b = e.document.referrer
        } else b = e.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function CSpriteLibrary() {
    var a, e, b, d, f, g;
    this.init = function(c, h, k) {
        b = e = 0;
        d = c;
        f = h;
        g = k;
        a = {}
    };
    this.addSprite = function(c, b) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: b,
            oSprite: new Image
        }, e++)
    };
    this.getSprite = function(c) {
        return a.hasOwnProperty(c) ? a[c].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f.call(g)
    };
    this._onSpriteLoaded = function() {
        d.call(g);
        ++b == e && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var c in a) a[c].oSprite.oSpriteLibrary = this, a[c].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[c].oSprite.src = a[c].szPath
    };
    this.getNumSprites = function() {
        return e
    }
}
var CANVAS_WIDTH = 1280,
    CANVAS_HEIGHT = 1920,
    EDGEBOARD_X = 150,
    EDGEBOARD_Y = 200,
    GAME_NAME = "plinko",
    PRIMARY_FONT = "MainFont",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = false,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    BOARD_ROW = 13,
    BOARD_COL = 7,
    BALL_RADIUS, NUM_INSERT_TUBE, CELL_SIZE = 140,
    CELL_PIVOT_FROM_CENTER = 90,
    BALL_FALL_MAX_ANGLE = .5,
    BALL_FALL_MAX_ROTATION = 80,
    BALL_FALL_ROTATION_ATTENUATION_FACTOR = 20,
    BALL_FALL_SPEED_INCREASE =
    .75,
    BALL_FALL_MAX_SPEED_LIMIT = 500,
    BASKET_LIT_ITERATION = 10,
    PRIZE, PRIZE_PROBABILITY, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, AD_SHOW_COUNTER;
TEXT_GAMEOVER = "موجودی حساب شما برای ادامه بازی کافی نیست";
TEXT_PLUS = " ";
TEXT_MIN = " ";
TEXT_CURRENCY = ' T ';

function CPreloader() {
    var a, e, b, d, f, g, c;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", self.images_location + "progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        c = new createjs.Container;
        s_oStage.addChild(c)
    };
    this.unload = function() {
        c.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(g).to({
                alpha: 1
            }, 500).call(function() {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        c.addChild(h);
        h = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(h);
        d.x = CANVAS_WIDTH / 2 - h.width / 2;
        d.y = CANVAS_HEIGHT - 470;
        c.addChild(d);
        a = h.width;
        e = h.height;
        f = new createjs.Shape;
        f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, 1, e);
        c.addChild(f);
        d.mask =
            f;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 425;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        c.addChild(b);
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = 0;
        c.addChild(g)
    };
    this.refreshLoader = function(c) {
        b.text = c + "%";
        f.graphics.clear();
        c = Math.floor(c * a / 100);
        f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, c, e)
    };
    this._init()
}

function CMain(a) {
    var e, b = 0,
        d = 0,
        f = STATE_LOADING,
        g, c;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = true;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        false === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
            return false
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = true);
        s_oSpriteLibrary = new CSpriteLibrary;
        g = new CPreloader;
    };
    this.preloaderReady = function() {
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || this._initSounds();
        this._loadImages();
        e = true
    };
    this.soundLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / d * 100));
        b === d && s_oMain._onPreloaderComplete()
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: self.sounds_location,
            filename: "press_button",
            loop: false,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: self.sounds_location,
            filename: "game_over",
            loop: false,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: self.sounds_location,
            filename: "ball_collision",
            loop: false,
            volume: 1,
            ingamename: "ball_collision"
        });
        a.push({
            path: self.sounds_location,
            filename: "ball_in_basket",
            loop: false,
            volume: 1,
            ingamename: "ball_in_basket"
        });
        a.push({
            path: self.sounds_location,
            filename: "ball_in_basket_negative",
            loop: false,
            volume: 1,
            ingamename: "ball_in_basket_negative"
        });
        d += a.length;
        s_aSounds = [];
        for (var c = 0; c < a.length; c++) s_aSounds[a[c].ingamename] = new Howl({
            src: [a[c].path + a[c].filename + ".mp3", a[c].path + a[c].filename + ".ogg"],
            autoplay: false,
            preload: true,
            loop: a[c].loop,
            volume: a[c].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("logo_game", self.images_location + "logo_game.png");
        s_oSpriteLibrary.addSprite("logo_menu", self.images_location + "logo_menu.png");
        s_oSpriteLibrary.addSprite("but_play", self.images_location + "but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("credits_panel", self.images_location + "credits_panel.png");
        s_oSpriteLibrary.addSprite("logo_tkstar", self.images_location + "logo_tkstar.png");
        s_oSpriteLibrary.addSprite("but_credits", self.images_location + "but_credits.png");
        s_oSpriteLibrary.addSprite("but_yes", self.images_location + "but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", self.images_location + "but_no.png");
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("bg_game", self.images_location + "bg_game.jpg");
        s_oSpriteLibrary.addSprite("side_right", self.images_location + "side_right.png");
        s_oSpriteLibrary.addSprite("side_left", self.images_location + "side_left.png");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_restart", self.images_location + "but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", self.images_location + "but_home.png");
        s_oSpriteLibrary.addSprite("but_settings",
            self.images_location + "but_settings.png");
        s_oSpriteLibrary.addSprite("but_plus", self.images_location + "but_plus.png");
        s_oSpriteLibrary.addSprite("but_min", self.images_location + "but_min.png");
        s_oSpriteLibrary.addSprite("bet_panel", self.images_location + "bet_panel.png");
        s_oSpriteLibrary.addSprite("ball", self.images_location + "ball.png");
        s_oSpriteLibrary.addSprite("stake", self.images_location + "stake.png");
        s_oSpriteLibrary.addSprite("ball_generator", self.images_location + "ball_generator.png");
        s_oSpriteLibrary.addSprite("holes_occluder", self.images_location + "holes_occluder.png");
        s_oSpriteLibrary.addSprite("hole_board_occluder", self.images_location + "hole_board_occluder.png");
        s_oSpriteLibrary.addSprite("basket_display", self.images_location + "basket_display.jpg");
        s_oSpriteLibrary.addSprite("hand_anim", self.images_location + "hand_anim.png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / d * 100));
        b === d && s_oMain._onPreloaderComplete()
    };
    this._onAllImagesLoaded = function() {};
    this._onPreloaderComplete = function() {
        g.unload();
        this.gotoMenu()
    };
    this.onAllPreloaderImagesLoaded =
        function() {
            this._loadImages()
        };
    this.gotoMenu = function() {
        new CMenu;
        f = STATE_MENU
    };
    this.gotoGame = function() {
        c = new CGame(h);
        f = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        e = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");
        Howler.mute(true)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        e = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");
        s_bAudioActive && Howler.mute(false)
    };
    this._update = function(a) {
        if (false !== e) {
            var b =
                (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && c.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var h = a;
    ENABLE_CREDITS = a.show_credits;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = true,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_bFullscreen = false,
    s_aSounds = [],
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oCanvas;

function CTextButton(a, e, b, d, f, g, c, h, k) {
    var m, l, n, q, p, t, w;
    this._init = function(a, c, b, h, d, e, k, f, g) {
        m = false;
        l = [];
        n = [];
        w = createBitmap(b);
        var z = Math.ceil(k / 20);
        t = new createjs.Text(h, "bold " + k + "px " + d, "#000000");
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        var r = t.getBounds();
        t.x = b.width / 2 + z;
        t.y = Math.floor(b.height / 2) + r.height / 3 + z - 7;
        p = new createjs.Text(h, "bold " + k + "px " + d, e);
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        r = p.getBounds();
        p.x = b.width / 2;
        p.y = Math.floor(b.height / 2) + r.height / 3 - 7;
        q = new createjs.Container;
        q.x = a;
        q.y = c;
        q.regX = b.width / 2;
        q.regY = b.height / 2;
        q.cursor = "pointer";
        f || (a = new createjs.SpriteSheet({
            images: [b],
            frames: {
                width: b.width / 2,
                height: b.height,
                regX: b.width / 2 / 2,
                regY: b.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        }), w = createSprite(a, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height), t.x = z, t.y = z + 17, p.x = 0, p.y = 17, q.regX = 0, q.regY = 0);
        q.addChild(w, t, p);
        g.addChild(q);
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown");
        q.off("pressup");
        k.removeChild(q)
    };
    this.setVisible = function(a) {
        q.visible =
            a
    };
    this.setClickable = function(a) {
        m = !a;
        a || (q.cursor = "arrow")
    };
    this._initListener = function() {
        oParent = this;
        q.on("mousedown", this.buttonDown);
        q.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        n[a] = c
    };
    this.buttonRelease = function() {
        m || (q.scaleX = 1, q.scaleY = 1, l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(n[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        m || (q.scaleX = .9, q.scaleY = .9, playSound("click", 1, false), l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
    };
    this.enable = function() {
        m = false;
        h || w.gotoAndStop("state_true")
    };
    this.disable = function() {
        m = true;
        h || w.gotoAndStop("state_false")
    };
    this.fadeOut = function() {
        this.setClickable(false);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 500)
    };
    this.fadeIn = function() {
        this.setClickable(true);
        createjs.Tween.get(q).to({
            alpha: 1
        }, 500)
    };
    this.hideShadow = function() {
        t.visible = false
    };
    this.setTextPosition = function(a, b) {
        var h = Math.ceil(c / 20);
        t.x = a + h;
        t.y = b + h;
        p.x = a;
        p.y = b
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.setX = function(a) {
        q.x = a
    };
    this.setY = function(a) {
        q.y = a
    };
    this.getButtonImage =
        function() {
            return q
        };
    this.getX = function() {
        return q.x
    };
    this.getY = function() {
        return q.y
    };
    this._init(a, e, b, d, f, g, c, h, k);
    return this
}

function CToggle(a, e, b, d, f) {
    var g, c, h, k, m, l, n;
    this._init = function(a, b, c, h, d) {
        m = [];
        l = [];
        var e = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        g = h;
        n = createSprite(e, "state_" + g, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        n.x = a;
        n.y = b;
        n.stop();
        d.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? n.off("mousedown", c) : (n.off("mousedown", c), n.off("mouseover", k));
        n.off("pressup", h);
        n.parent.removeChild(n)
    };
    this._initListener = function() {
        s_bMobile ? c = n.on("mousedown", this.buttonDown) : (c = n.on("mousedown", this.buttonDown), k = n.on("mouseover", this.buttonOver));
        h = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, c, b) {
        m[a] = c;
        l[a] = b
    };
    this.setActive = function(a) {
        g = a;
        n.gotoAndStop("state_" + g)
    };
    this.buttonRelease = function() {
        n.scaleX = 1;
        n.scaleY = 1;
        playSound("click", 1, false);
        g = !g;
        n.gotoAndStop("state_" + g);
        m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(l[ON_MOUSE_UP], g)
    };
    this.buttonDown = function() {
        n.scaleX = .9;
        n.scaleY =
            .9;
        m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, c) {
        n.x = a;
        n.y = c
    };
    this.getButtonImage = function() {
        return n
    };
    this._init(a, e, b, d, f)
}

function CGfxButton(a, e, b, d) {
    var f, g, c, h, k = [],
        m, l;
    this._init = function(a, b, d, e) {
        f = false;
        g = 1;
        c = [];
        h = [];
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        m.scaleX = m.scaleY = g;
        e.addChild(m);
        l = createBitmap(d);
        l.regX = d.width / 2;
        l.regY = d.height / 2;
        m.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? m.off("mousedown", this.buttonDown) : (m.off("mousedown", this.buttonDown), m.off("mouseover", this.buttonOver));
        m.off("pressup", this.buttonRelease);
        m.parent.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this.setClickable =
        function(a) {
            f = !a
        };
    this._initListener = function() {
        if (s_bMobile) m.on("mousedown", this.buttonDown);
        else m.on("mousedown", this.buttonDown), m.on("mouseover", this.buttonOver);
        m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        c[a] = b;
        h[a] = d
    };
    this.addEventListenerWithParams = function(a, b, d, e) {
        c[a] = b;
        h[a] = d;
        k = e
    };
    this.buttonRelease = function() {
        f || (m.scaleX = g, m.scaleY = g, c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(h[ON_MOUSE_UP], k))
    };
    this.buttonDown = function() {
        f || (m.scaleX = .9 * g, m.scaleY = .9 * g, playSound("click",
            1, false), c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], k))
    };
    this.buttonOver = function(a) {
        s_bMobile || f || (a.target.cursor = "pointer")
    };
    this.addText = function(a) {
        a = new createjs.Text(a, " 50px " + PRIMARY_FONT, "#ffffff");
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 200;
        m.addChild(a)
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(m).to({
            scaleX: 1.1 * g,
            scaleY: 1.1 * g
        }, 850, createjs.Ease.quadOut).to({
            scaleX: g,
            scaleY: g
        }, 650, createjs.Ease.quadIn).call(function() {
            n.pulseAnimation()
        })
    };
    this.trembleAnimation =
        function() {
            createjs.Tween.get(m).to({
                rotation: 5
            }, 75, createjs.Ease.quadOut).to({
                rotation: -5
            }, 140, createjs.Ease.quadIn).to({
                rotation: 0
            }, 75, createjs.Ease.quadIn).wait(750).call(function() {
                n.trebleAnimation()
            })
        };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.setX = function(a) {
        m.x = a
    };
    this.setY = function(a) {
        m.y = a
    };
    this.getButtonImage = function() {
        return m
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    this.getPos = function() {
        return {
            x: m.x,
            y: m.y
        }
    };
    var n = this;
    this._init(a, e, b, d);
    return this
}

function CMenu() {
    var a, e, b, d, f, g, c, h, k, m, l = null,
        n = null,
        q;
    this._init = function() {
        f = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(f);
        var asd = s_oSpriteLibrary.getSprite("bg_back");
        qwe = new CTextButton(CANVAS_WIDTH - asd.width / 4 - 160, 275, asd, ' ', PRIMARY_FONT, "#ffffff", 40, true, s_oStage);
        qwe.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        var p = s_oSpriteLibrary.getSprite("logo_menu"),
            t = createBitmap(p);
        t.regX = p.width / 2;
        t.regY = p.height / 2;
        t.x = CANVAS_WIDTH / 2;
        t.y = 500;
        s_oStage.addChild(t);
        p = s_oSpriteLibrary.getSprite("but_play");
        g = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 540, p, s_oStage);
        g.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        g.pulseAnimation();
        p = s_oSpriteLibrary.getSprite("but_credits");
        t = {
            x: p.width / 2 + 10,
            y: p.height / 2 + 10
        };
        var w = {
            x: t.x + p.width + 10,
            y: p.height / 2 + 10
        };
        b = t.x;
        d = t.y;
        ENABLE_CREDITS && (k = new CGfxButton(b, d, p, s_oStage), k.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this));
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), a = CANVAS_WIDTH - p.width / 4 - 10, e = p.height / 2 + 10, h = new CToggle(a, e, p, s_bAudioActive, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        p = window.document;
        var u = p.documentElement;
        l = u.requestFullscreen || u.mozRequestFullScreen ||
            u.webkitRequestFullScreen || u.msRequestFullscreen;
        n = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (l = false);
        l && screenfull.enabled && (q = ENABLE_CREDITS ? w : t, p = s_oSpriteLibrary.getSprite("but_fullscreen"), m = new CToggle(q.x, q.y, p, s_bFullscreen, s_oStage), m.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(c);
        createjs.Tween.get(c).to({
                alpha: 0
            },
            1E3).call(function() {
            c.visible = false
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        g.unload();
        g = null;
        c.visible = false;
        ENABLE_CREDITS && k.unload();
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) h.unload(), h = null;
        l && screenfull.enabled && m.unload();
        s_oStage.removeAllChildren();
        s_oMenu = f = null
    };
    this.refreshButtonPos = function(c, f) {
        ENABLE_CREDITS && k.setPosition(b + c, f + d);
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || h.setPosition(a - c, f + e);
        l && screenfull.enabled && m.setPosition(q.x + c, q.y + f)
    };
    this._onAudioToggle =
        function() {
            Howler.mute(s_bAudioActive);
            s_bAudioActive = !s_bAudioActive
        };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        l && screenfull.enabled && m.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? n.call(window.document) : l.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButPlayRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame();
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var e, b, d, f, g, c, h, k = null,
        m, l, n, q, p, t, w, u, x = null;
    this._init = function() {
        b = 1;
        d = START_BET / 1;
        f = START_CREDIT / 1;
        g = BANK_CASH;
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        a = s_oSpriteLibrary.getSprite("logo_game");
        var c = createBitmap(a);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = 250;
        q = new createjs.Container;
        s_oStage.addChild(q);
        p = new createjs.Container;
        s_oStage.addChild(p);
        t = new createjs.Container;
        s_oStage.addChild(t);
        w = new createjs.Container;
        s_oStage.addChild(w);
        this._setBoard();
        NUM_INSERT_TUBE = u[0].length;
        a = s_oSpriteLibrary.getSprite("side_left");
        a = createBitmap(a);
        a.x = 100;
        w.addChild(a);
        a = s_oSpriteLibrary.getSprite("side_right");
        c = createBitmap(a);
        c.regX = a.width;
        c.x = CANVAS_WIDTH - 100;
        w.addChild(c);
        BALL_RADIUS = s_oSpriteLibrary.getSprite("ball").height / 2;
        m = new CBallGenerator(t);
        l = new CInsertTubeController(t);
        n = new CScoreBasketController(q);
        this._initProbability();
        h = new CInterface(q);
        l.showSlots();
        $(s_oMain).trigger("start_level", 1)
    };
    this._setBoard = function() {
        var a = BOARD_ROW,
            c = BOARD_COL;
        u = [];
        for (var b = 0; b < a; b++) {
            u[b] = [];
            for (var h = 0; h < c - (b + 1) % 2; h++) u[b][h] = new CCell(0 === b % 2 ? h * CELL_SIZE : -CELL_SIZE / 2 + h * CELL_SIZE, b * CELL_SIZE / 2, p, b, h), b !== BOARD_ROW - 1 && (1 !== b % 2 || 0 !== h && h !== BOARD_COL - 1) || u[b][h].removeStake()
        }
        p.regX = p.getBounds().x + p.getBounds().width / 2;
        p.regY = p.getBounds().y + p.getBounds().height / 2;
        p.x = CANVAS_WIDTH / 2;
        p.y = CANVAS_HEIGHT / 2 - 29;
        new CGridMapping(u)
    };
    this._initProbability = function() {
        c = [];
        for (var a = 0; a < PRIZE_PROBABILITY.length; a++)
            for (var b = 0; b < PRIZE_PROBABILITY[a]; b++) c.push(a)
    };
    this.launch = function(a) {
        e = a;
        this._placeBet();
        this.setBall();
        l.hideSlots();
        m.shiftBallAnimation();
        a = s_oGame.getBallPivotCellPos(0, a);
        x.launchAnim(a)
    };
    this._placeBet = function() {
        f -= d;
        g += d;
        h.hideControls();
        h.refreshCredit(f / 1)
    };
    this.setBall = function() {
		if(this.checkEndGame()){
			x = m.getNextBall();
			var a = x.getPos();
			a = p.globalToLocal(a.x * s_iScaleFactor, a.y * s_iScaleFactor);
			p.addChild(x.getSprite());
			x.setPos(a)
		}
    };
    this.getFallPath = function() {
        var a =
            this._setEndCol();
        a = s_oGridMapping.getRandomPathFromColToCol(e, a);
        for (var b = 0; b < a.length; b++) u[a[b].row][a[b].col].highlight(true);
        a = this.getPathCopy(a);
        x.startPathAnim(a, 500);
        x = null
    };
    this.ballArrived = function(a) {
        PRIZE[a] * b >= d ? playSound("ball_in_basket", 1, false) : playSound("ball_in_basket_negative", 1, false);
        n.litBasket(a, PRIZE[a] * b / d);
        f += PRIZE[a] * b;
        g -= PRIZE[a] * b;
        $(s_oMain).trigger("save_score", [f]);
        l.showSlots();
        h.showControls();
        h.refreshCredit(f / 1);
        this.checkEndGame()
    };
    this.checkEndGame = function() {
		if(f < START_BET){
			this.gameOver();
			return false;
		}else{
			b > f / START_BET && (b = Math.floor(f / START_BET), d = (b * START_BET) / 1, h.refreshBet(d), n.refreshText(b))
			return true;
		}
    };
    this.modifyBonus = function(a) {
        "plus" === a ? b++ : b--;
        b > MAX_MULTIPLIER ? b = MAX_MULTIPLIER : 1 > b ? b = 1 : b > f / START_BET && (b = Math.floor(f / START_BET));
        d = (START_BET * b) / 1;
        h.refreshBet(d);
        n.refreshText(b)
    };
    this._setEndCol = function() {
        for (var a, h = [], d = 0; d < c.length; d++) a = PRIZE[c[d]] * b, a <= g && h.push({
            prize: a,
            index: d
        });
        return c[h[Math.floor(Math.random() * h.length)].index]
    };
    this.getBall =
        function() {
            return x
        };
    this.getBoard = function() {
        return u
    };
    this.getBallPivotCellPos = function(a, b) {
        return u[a][b].getCenterOfBallOnPivot()
    };
    this.getPathCopy = function(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
        return b
    };
    this.restartGame = function() {
        $(s_oMain).trigger("show_interlevel_ad");
        b = 1;
        d = START_BET / 1;
        f = START_CREDIT / 1;
        g = BANK_CASH;
        n.refreshText(b);
        h.refreshCredit(f);
        h.refreshBet(d);
        h.showControls()
    };
    this.unload = function() {
        h.unload();
        null !== k && k.unload();
        n.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("end_level", 1);
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {};
    this.gameOver = function() {
        h.hideControls();
        k = new CEndPanel(f)
    };
    this.getSlotPosition = function(a) {
        return l.getSlotPos(a)
    };
    this.sortChildren = function(a, b, c) {
        return a.y < b.y ? 1 : a.y > b.y ? -1 : 0
    };
    this.update = function() {
        p.sortChildren(this.sortChildren)
    };
    s_oGame = this;
    START_CREDIT = a.start_credit;
    START_BET =
        a.start_bet;
    MAX_MULTIPLIER = a.max_multiplier;
    BANK_CASH = a.bank_cash;
    PRIZE = a.prize;
    PRIZE_PROBABILITY = a.prize_probability;
    AD_SHOW_COUNTER = a.ad_show_counter;
    this._init()
}
var s_oGame;

function CInterface(a) {
    var e, b, d, f, g, c, h, k, m, l, n, q, p, t, w, u, x = null,
        z = null;
    this._init = function(a) {
        var r = s_oSpriteLibrary.getSprite("hand_anim"),
            y = r.width / 6,
            v = r.height / 4;
        r = new createjs.SpriteSheet({
            framerate: 20,
            images: [r],
            frames: [
                [1, 1, 256, 230, 0, 0, 0],
                [259, 1, 256, 230, 0, 0, 0],
                [517, 1, 256, 230, 0, 0, 0],
                [775, 1, 256, 230, 0, 0, 0],
                [1033, 1, 256, 230, 0, 0, 0],
                [1291, 1, 256, 230, 0, 0, 0],
                [1, 233, 256, 230, 0, 0, 0],
                [259, 233, 256, 230, 0, 0, 0],
                [517, 233, 256, 230, 0, 0, 0],
                [775, 233, 256, 230, 0, 0, 0],
                [1033, 233, 256, 230, 0, 0, 0],
                [1291, 233, 256, 230, 0, 0, 0],
                [1, 465, 256, 230, 0, 0, 0],
                [259, 465, 256, 230, 0, 0, 0],
                [517, 465, 256, 230, 0, 0, 0],
                [775, 465, 256, 230, 0, 0, 0],
                [1033, 465, 256, 230, 0, 0, 0],
                [1291, 465, 256, 230, 0, 0, 0],
                [1, 697, 256, 230, 0, 0, 0],
                [259, 697, 256, 230, 0, 0, 0],
                [517, 697, 256, 230, 0, 0, 0],
                [775, 697, 256, 230, 0, 0, 0]
            ],
            animations: {
                idle: [0, 21]
            }
        });
        n = 0;
        u = createSprite(r, "idle", y / 2, v / 2, y, v);
        r = s_oGame.getSlotPosition(n);
        u.x = r.x;
        u.y = r.y;
        u.regX = y / 2 - 30;
        u.regY = v / 2;
        u.on("animationend", this._moveHand);
        s_oStage.addChild(u);
        r = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - r.width / 2 - 10;
        c = r.height / 2 + 10;
        k = new CGfxButton(g, c, r, s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onExit, this);
        d = y = g - r.width - 10;
        f = r.height / 2 + 10;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) r = s_oSpriteLibrary.getSprite("audio_icon"), h = new CToggle(d, f, r, s_bAudioActive, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), y = d - r.width / 2 - 10;
        r = window.document;
        v = r.documentElement;
        x = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        z = r.exitFullscreen || r.mozCancelFullScreen ||
            r.webkitExitFullscreen || r.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (x = false);
        x && screenfull.enabled && (r = s_oSpriteLibrary.getSprite("but_fullscreen"), e = y, b = r.height / 2 + 10, m = new CToggle(e, b, r, s_bFullscreen, s_oStage), m.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        y = new createjs.Container;
        y.x = 854;
        y.y = 1650;
        a.addChild(y);
        r = s_oSpriteLibrary.getSprite("bet_panel");
        v = createBitmap(r);
        v.regX = r.width / 2;
        v.regY = r.height / 2;
        y.addChild(v);
        q = new createjs.Text(START_BET.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY, " 40px " +
            PRIMARY_FONT, "#ffffff");
        q.x = v.x;
        q.y = v.y - 2;
        q.textAlign = "center";
        q.textBaseline = "middle";
        q.lineWidth = 400;
        y.addChild(q);
        r = s_oSpriteLibrary.getSprite("but_plus");
        p = new CTextButton(160, 0, r, TEXT_PLUS, PRIMARY_FONT, "#0083ea", 80, false, y);
        p.enable();
        p.addEventListener(ON_MOUSE_UP, this._onButPlusRelease, this);
        p.setTextPosition(1, 26);
        p.hideShadow();
        r = s_oSpriteLibrary.getSprite("but_min");
        t = new CTextButton(-160, 0, r, TEXT_MIN, PRIMARY_FONT, "#0083ea", 80, false, y);
        t.enable();
        t.addEventListener(ON_MOUSE_UP, this._onButMinRelease,
            this);
        t.setTextPosition(2, 26);
        t.hideShadow();
        r = s_oSpriteLibrary.getSprite("credits_panel");
        v = createBitmap(r);
        v.regX = r.width / 2;
        v.regY = r.height / 2;
        v.x = 392;
        v.y = y.y;
        a.addChild(v);
        w = new createjs.Text(START_CREDIT.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY, " 36px " + PRIMARY_FONT, "#ffffff");
        w.x = v.x;
        w.y = v.y;
        w.textAlign = "center";
        w.textBaseline = "middle";
        w.lineWidth = 400;
        a.addChild(w);
        r = s_oSpriteLibrary.getSprite("but_settings");
        l = new CGUIExpandible(g, c, r, s_oStage);
        l.addButton(k);
        l.addButton(h);
        x && screenfull.enabled && l.addButton(m);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) h.unload(), h = null;
        k.unload();
        x && screenfull.enabled && m.unload();
        t.unload();
        p.unload();
        l.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, b) {
        l.refreshPos(a, b)
    };
    this.refreshBet = function(a) {
        q.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.refreshCredit = function(a) {
        w.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this._onButPlusRelease = function() {
        s_oGame.modifyBonus("plus")
    };
    this._onButMinRelease = function() {
        s_oGame.modifyBonus("min")
    };
    this.hideControls = function() {
        t.setVisible(false);
        p.setVisible(false);
        this.setHelpVisible(false)
    };
    this.showControls = function() {
        t.setVisible(true);
        p.setVisible(true);
        this.setHelpVisible(true)
    };
    this.setHelpVisible = function(a) {
        (u.visible = a) && u.gotoAndPlay("idle")
    };
    this._moveHand = function() {
        n++;
        n === NUM_INSERT_TUBE && (n = 0);
        var a = s_oGame.getSlotPosition(n);
        u.x = a.x;
        u.y = a.y
    };
    this._onButRestartRelease = function() {
        s_oGame.restartGame();
        $(s_oMain).trigger("restart_level", 1)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.resetFullscreenBut = function() {
        x && screenfull.enabled && m.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? z.call(window.document) : x.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CCreditsPanel() {
    var a, e, b, d, f;
    this._init = function() {
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        e.on("mousedown", function() {});
        s_oStage.addChild(e);
        createjs.Tween.get(e).to({
            alpha: .7
        }, 500);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var g = s_oSpriteLibrary.getSprite("msg_box"),
            c = createBitmap(g);
        c.regX = g.width / 2;
        c.regY = g.height / 2;
        b.addChild(c);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + g.height / 2;
        a = b.y;
        createjs.Tween.get(b).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.quartIn);
        g = new createjs.Text("طراحی توسط", " 50px " + PRIMARY_FONT, "#ffffff");
        g.y = -100;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.lineWidth = 300;
        b.addChild(g);
        g = new createjs.Text("http://www.tkstar.ir", " 50px " + PRIMARY_FONT, "#ffffff");
        g.y = 90;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.lineWidth = 300;
        b.addChild(g);
        g = s_oSpriteLibrary.getSprite("logo_tkstar");
        f = createBitmap(g);
        f.on("mousedown", this._onLogoButRelease);
        f.regX = g.width / 2;
        f.regY = g.height / 2;
        b.addChild(f);
        g = s_oSpriteLibrary.getSprite("but_exit");
        d = new CGfxButton(298, -200, g, b);
        d.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function() {
        d.setClickable(false);
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(b).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(e);
            s_oStage.removeChild(b);
            d.unload()
        });
        e.off("mousedown", function() {});
        f.off("mousedown", this._onLogoButRelease)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.tkstar.ir");
    };
    this._onMoreGamesReleased = function() {
        window.open("http://www.tkstar.ir");
    };
    this._init()
}

function CAreYouSurePanel(a, e) {
    var b, d, f, g, c;
    this._init = function(a, h) {
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = 0;
        g.on("mousedown", function() {});
        createjs.Tween.get(g).to({
            alpha: .7
        }, 500);
        c = new createjs.Container;
        var e = s_oSpriteLibrary.getSprite("msg_box"),
            k = createBitmap(e);
        k.regX = e.width / 2;
        k.regY = e.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT + e.height / 2;
        b = c.y;
        createjs.Tween.get(c).to({
            y: CANVAS_HEIGHT / 2 -
                40
        }, 500, createjs.Ease.quartIn);
        k = new createjs.Text(" ", " 60px " + PRIMARY_FONT, "#ffffff");
        k.y = -e.height / 2 + 160;
        k.textAlign = "center";
        k.textBaseline = "middle";
        k.lineWidth = 400;
        d = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes"), c);
        d.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        f = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_no"), c);
        f.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        f.pulseAnimation()
		this._onButYes();
    };
    this._onButYes = function() {
        f.setClickable(false);
        d.setClickable(false);
        createjs.Tween.get(g).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(c).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            a && a()
        })
    };
    this._onButNo = function() {
        f.setClickable(false);
        d.setClickable(false);
        createjs.Tween.get(g).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(c).to({
            y: b
        }, 400, createjs.Ease.backIn).call(function() {
            h.unload();
            e && e()
        })
    };
    this.unload = function() {
        f.unload();
        d.unload();
        s_oStage.removeChild(g);
        s_oStage.removeChild(c);
        g.off("mousedown", function() {})
    };
    var h = this;
    this._init(a, e)
}

function CEndPanel(a) {
    var e, b, d, f;
    this._init = function(a) {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        d.on("mousedown", function() {});
        s_oStage.addChild(d);
        createjs.Tween.get(d).to({
            alpha: .7
        }, 500);
        f = new createjs.Container;
        s_oStage.addChild(f);
        var c = s_oSpriteLibrary.getSprite("msg_box"),
            k = createBitmap(c);
        k.regX = c.width / 2;
        k.regY = c.height / 2;
        f.addChild(k);
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT + c.height / 2;
        createjs.Tween.get(f).to({
            y: CANVAS_HEIGHT / 2 -
                40
        }, 500, createjs.Ease.quartIn);
        k = new createjs.Text(TEXT_GAMEOVER, " 35px " + PRIMARY_FONT, "#ffffff");
        k.y = -c.height / 2 + 160;
        k.textAlign = "center";
        k.textBaseline = "middle";
        k.lineWidth = 400;
		k.lineHeight = 70;
        f.addChild(k);
        e = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_restart"), f);
        e.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        e.pulseAnimation();
        b = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_home"), f);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        $(s_oMain).trigger("save_score", a);
        $(s_oMain).trigger("share_event",
            a)
    };
    this.unload = function() {
        d.off("mousedown", function() {});
        s_oStage.removeChild(d);
        s_oStage.removeChild(f)
    };
    this._onRestart = function() {
        g.unload();
        $(s_oMain).trigger("recharge");
    };
    this._onExit = function() {
        $(s_oMain).trigger("show_interlevel_ad");
        g.unload();
        s_oGame.onExit()
    };
    var g = this;
    this._init(a);
    return this
}
var DIR_TOPRIGHT = "DIR_TOPRIGHT",
    DIR_BOTRIGHT = "DIR_BOTRIGHT",
    DIR_TOPLEFT = "DIR_TOPLEFT",
    DIR_BOTLEFT = "DIR_BOTLEFT",
    DIR_SELF = "DIR_SELF";

function CGridMapping(a) {
    var e, b, d, f, g;
    this._init = function(a) {
        e = BOARD_ROW;
        b = BOARD_COL;
        f = [];
        d = [];
        for (var c = 0; c < a.length; c++) {
            d[c] = [];
            for (var k = 0; k < a[c].length; k++) d[c][k] = []
        }
        this._buildMap();
        g = [];
        for (c = 0; c < a[0].length; c++) g[c] = this.getAllPathFrom({
            row: 0,
            col: c
        })
    };
    this._buildMap = function() {
        for (var b = 0; b < a.length; b++)
            for (var h = 0; h < a[b].length; h++) d[b][h][DIR_BOTRIGHT] = this._setNeighbor(b, h, DIR_BOTRIGHT), d[b][h][DIR_BOTLEFT] = this._setNeighbor(b, h, DIR_BOTLEFT), d[b][h][DIR_SELF] = this._setNeighbor(b, h, DIR_SELF)
    };
    this._setNeighbor = function(a, h, d) {
        var c = null;
        switch (d) {
            case DIR_TOPRIGHT:
                0 < a && h < b - a % 2 && (c = {
                    row: a - 1,
                    col: h + (a + 1) % 2
                });
                break;
            case DIR_BOTRIGHT:
                a < e - 1 && h + a % 2 < b && (c = {
                    row: a + 1,
                    col: h + (a + 1) % 2
                });
                break;
            case DIR_TOPLEFT:
                0 < a && 0 <= h - (a - 1) % 2 && (c = {
                    row: a - 1,
                    col: h - (a + 1) % 2
                });
                break;
            case DIR_BOTLEFT:
                a < e - 1 && h >= a % 2 && (c = {
                    row: a + 1,
                    col: h - a % 2
                });
                break;
            case DIR_SELF:
                c = {
                    row: a,
                    col: h
                }
        }
        return c
    };
    this._getNeighborByDir = function(a, b, e) {
        return d[a][b][e]
    };
    this._getAllNeighbor = function(a, b) {
        var c = [],
            h;
        for (h in d[a][b]) null !== d[a][b][h] &&
            c.push(d[a][b][h]);
        return c
    };
    this._getMainDiagonal = function(a, b, d) {
        var c = [],
            h = d[a][b].getColor();
        this._findInDirection(a, b, DIR_BOTRIGHT, c, 99, h, d);
        this._findInDirection(a, b, DIR_TOPLEFT, c, 99, h, d);
        return c
    };
    this._getSecondDiagonal = function(a, b, d) {
        var c = [],
            h = d[a][b].getColor();
        this._findInDirection(a, b, DIR_BOTLEFT, c, 99, h, d);
        this._findInDirection(a, b, DIR_TOPRIGHT, c, 99, h, d);
        return c
    };
    this._getRow = function(a, b, d) {
        var c = [],
            h = d[a][b].getColor();
        this._findInDirection(a, b, DIR_LEFT, c, 99, h, d);
        this._findInDirection(a,
            b, DIR_RIGHT, c, 99, h, d);
        return c
    };
    this._getCol = function(a, b, d) {
        var c = [],
            h = d[a][b].getColor();
        this._findInDirection(a, b, DIR_TOP, c, 99, h, d);
        this._findInDirection(a, b, DIR_BOT, c, 99, h, d);
        return c
    };
    this._getStraightByDirAndRadius = function(a, b, d, e, g) {
        var c = [];
        f = [];
        f.push({
            radius: e,
            direction: null
        });
        var h = g[a][b].getColor();
        this._findInDirection(a, b, d, c, e, h, g);
        return c
    };
    this._getStraightRowByRadius = function(a, b, d) {
        var c = [];
        f = [];
        f.push({
            radius: d,
            direction: null
        });
        this._findInDirection(a, b, DIR_LEFT, c, d);
        this._findInDirection(a,
            b, DIR_RIGHT, c, d);
        return c
    };
    this._getStraightColByRadius = function(a, b, d) {
        var c = [];
        f = [];
        f.push({
            radius: d,
            direction: null
        });
        this._findInDirection(a, b, DIR_TOP, c, d);
        this._findInDirection(a, b, DIR_BOT, c, d);
        return c
    };
    this._findInDirection = function(a, b, e, g, l, n, q) {
        --l;
        if (null !== d[a][b][e] && 0 <= l) {
            var c = d[a][b][e].row;
            a = d[a][b][e].col;
            n ? (b = q[c][a].getColor(), b !== n && (null === b ? (g.push({
                    row: c,
                    col: a
                }), f.push({
                    radius: l,
                    direction: e
                }), this._findInDirection(c, a, e, g, l, n, q)) : (g.push({
                    row: c,
                    col: a
                }), f.push({
                    radius: l,
                    direction: e
                })))) :
                (g.push({
                    row: c,
                    col: a
                }), f.push({
                    radius: l,
                    direction: e
                }), this._findInDirection(c, a, e, g, l, n, q))
        }
    };
    this.getAllPathFrom = function(a) {
        return this._findAllPathDFS(d[a.row][a.col], [], [])
    };
    this.getRandomPathFrom = function(a) {
        a = s_oGridMapping.getAllPathFrom(a);
        var b = [];
        0 < a.length && (b = a[Math.floor(Math.random() * (a.length - 1))]);
        return b
    };
    this.getAllPathFromTo = function(a, b) {
        for (var c = s_oGridMapping.getAllPathFrom(a), d = c.length - 1; 0 <= d; d--) {
            for (var e = false, h = 0; h < c[d].length; h++)
                if (c[d][h].row === b.row && c[d][h].col === b.col) {
                    e = true;
                    break
                }
            e || c.splice(d, 1)
        }
        return c
    };
    this.getRandomPathFromTo = function(a, b) {
        var c = s_oGridMapping.getAllPathFromTo(a, b),
            d = [];
        0 < c.length && (d = c[Math.floor(Math.random() * (c.length - 1))]);
        return d
    };
    this.getRandomPathFromCol = function(a) {
        a = g[a];
        return a[Math.floor(Math.random() * (a.length - 1))]
    };
    this.getRandomPathFromColToCol = function(a, b) {
        for (var c = [], e = d.length - 1, h = 0; h < g[a].length; h++) {
            var f = g[a][h];
            f[e].col === b && c.push(f)
        }
        e = [];
        0 < c.length && (e = c[Math.floor(Math.random() * (c.length - 1))]);
        return e
    };
    this._findAllPathDFS =
        function(a, b, d) {
            b = b.slice(0);
            var c = 0,
                e = this._getChildren(a),
                h = e.length;
            b.push(a[DIR_SELF]);
            if (0 === h) return d.push(b), d;
            for (c; c < h; c++) this._findAllPathDFS(e[c], b, d);
            return d
        };
    this._getChildren = function(a) {
        var b = [],
            c;
        for (c in a) null === a[c] || c !== DIR_BOTLEFT && c !== DIR_BOTRIGHT || b.push(d[a[c].row][a[c].col]);
        return b
    };
    this._init(a);
    s_oGridMapping = this
}
var s_oGridMapping;

function CCell(a, e, b, d, f, g) {
    var c, h, k;
    this._init = function(a, b, d, e, f, g) {
        c = new createjs.Container;
        c.x = a;
        c.y = b;
        c.alpha = 0;
        d.addChild(c);
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(255,255,255,0.51)").drawRect(-50, -50, 100, 100);
        h.visible = false;
        h.rotation = 45;
        c.addChild(h);
        e = s_oSpriteLibrary.getSprite("stake");
        k = createBitmap(e);
        k.regX = e.width / 2;
        k.x = a;
        k.y = b + 60;
        d.addChild(k)
    };
    this.unload = function() {
        b.removeChild(c)
    };
    this.getCenterPos = function() {
        return {
            x: a,
            y: e
        }
    };
    this.getPivotPos = function() {
        return {
            x: a,
            y: e + CELL_PIVOT_FROM_CENTER
        }
    };
    this.getCenterOfBallOnPivot = function() {
        return {
            x: a,
            y: e + CELL_PIVOT_FROM_CENTER - BALL_RADIUS
        }
    };
    this.checkBallOverlap = function(b) {
        var c = b.x - a;
        b = b.y - e;
        return c * c + b * b < BALL_RADIUS * BALL_RADIUS
    };
    this.removeStake = function() {
        k.visible = false
    };
    this.highlight = function(a) {
        h.visible = a
    };
    this._debug = function() {
        c.alpha = 1;
        var a = new createjs.Text(d + "," + f, "bold 30px Arial", "#000000");
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 200;
        a.outline = 4;
        c.addChild(a);
        var b = new createjs.Text(a.text, "bold 30px Arial", "#ffffff");
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.lineWidth = a.lineWidth;
        c.addChild(b)
    };
    this._init(a, e, b, d, f, g)
}

function CBall(a, e) {
    var b, d, f, g;
    this._init = function(a, c) {
        f = new createjs.Container;
        f.x = a.x;
        f.y = a.y;
        c.addChild(f);
        var d = s_oSpriteLibrary.getSprite("ball");
        g = createBitmap(d);
        g.regX = d.width / 2;
        g.regY = d.height / 2;
        f.addChild(g);
        b = d.height
    };
    this.unload = function() {
        f.parent.removeChild(f)
    };
    this.getPos = function() {
        return {
            x: f.x,
            y: f.y
        }
    };
    this.getSprite = function() {
        return f
    };
    this.resetPos = function() {
        f.x = a.x;
        f.y = a.y
    };
    this.setPos = function(a) {
        f.x = a.x;
        f.y = a.y
    };
    this.setPosToPivot = function() {
        f.regY = b / 2
    };
    this._getFallParams =
        function(a, b) {
            var c = s_oGame.getBallPivotCellPos(a[0].row, a[0].col);
            if (1 < a.length)
                if (s_oGame.getBallPivotCellPos(a[1].row, a[1].col).x > c.x) {
                    var e = Math.random() * BALL_FALL_MAX_ANGLE;
                    var h = "right"
                } else e = -Math.random() * BALL_FALL_MAX_ANGLE, h = "left";
            else e = -BALL_FALL_MAX_ANGLE + Math.random() * BALL_FALL_MAX_ANGLE * 2, h = "right";
            var k = new CVector2(0, -BALL_RADIUS);
            rotateVector2D(e, k);
            k.subtract(new CVector2(0, -BALL_RADIUS));
            var p = c.x - k.getX();
            k = c.y + k.getY();
            e *= BALL_FALL_ROTATION_ATTENUATION_FACTOR;
            c = c.x > f.x ? g.rotation +
                BALL_FALL_MAX_ROTATION - e : g.rotation - BALL_FALL_MAX_ROTATION - e;
            (f.x < p ? "right" : "left") === h ? (h = b * BALL_FALL_SPEED_INCREASE, h < BALL_FALL_MAX_SPEED_LIMIT && (h = BALL_FALL_MAX_SPEED_LIMIT)) : h = d;
            return {
                rotation: c,
                posx: p,
                posy: k,
                newtime: h
            }
        };
    this.launchAnim = function(a) {
        createjs.Tween.get(f).to({
            x: a.x
        }, 1E3, createjs.Ease.sineOut);
        createjs.Tween.get(f).to({
            y: a.y - 400
        }, 500, createjs.Ease.cubicOut).to({
            y: a.y
        }, 500, createjs.Ease.cubicIn).call(function() {
            s_oGame.getFallPath()
        })
    };
    this.startPathAnim = function(a, b) {
        d = b;
        this._jumpBall(a,
            b)
    };
    this._jumpBall = function(a, b) {
        playSound("ball_collision", 1, false);
        var d = a.splice(0, 1);
        if (1 === a.length) c._lastJumpBallAnim(a, b);
        else {
            d = s_oGame.getBallPivotCellPos(d[0].row, d[0].col);
            var e = s_oGame.getBallPivotCellPos(a[0].row, a[0].col);
            createjs.Tween.get(f).to({
                x: e.x
            }, b);
            createjs.Tween.get(f).to({
                y: d.y - 10
            }, b / 4, createjs.Ease.cubicOut).to({
                y: e.y
            }, 3 * b / 4, createjs.Ease.cubicIn).call(function() {
                c._jumpBall(a, b)
            })
        }
    };
    this._fallBall = function(a, b) {
        a.splice(0, 1);
        if (1 === a.length) c._lastFallBallAnim(a, b);
        else {
            var d =
                this._getFallParams(a, b);
            createjs.Tween.get(g).to({
                rotation: d.rotation
            }, b, createjs.Ease.sineIn);
            createjs.Tween.get(f, {
                override: true
            }).to({
                x: d.posx
            }, b, createjs.Ease.sineIn);
            createjs.Tween.get(f).to({
                y: d.posy
            }, b, createjs.Ease.cubicIn).call(function() {
                c._fallBall(a, d.newtime)
            })
        }
    };
    this.releaseBallAnim = function(a) {
        var b = s_oGame.getBoard()[0][a].getCenterOfBallOnPivot();
        createjs.Tween.get(f).to({
            y: b.y
        }, 500, createjs.Ease.sineIn).call(function() {
            s_oGame.launchBall(a)
        })
    };
    this._lastFallBallAnim = function(a, b) {
        var c =
            this._getFallParams(a, b),
            d = c.posy + 170;
        createjs.Tween.get(g).to({
            rotation: c.rotation
        }, b, createjs.Ease.sineIn);
        createjs.Tween.get(f, {
            override: true
        }).to({
            x: c.posx
        }, b, createjs.Ease.sineIn);
        createjs.Tween.get(f).to({
            y: d
        }, b, createjs.Ease.cubicIn).call(function() {
            createjs.Tween.get(f).to({
                y: d - 100
            }, b / 2, createjs.Ease.cubicOut).to({
                y: d
            }, b, createjs.Ease.bounceOut);
            s_oGame.ballArrived(a[0].col)
        })
    };
    this._lastJumpBallAnim = function(a, b) {
        var d = s_oGame.getBallPivotCellPos(a[0].row, a[0].col),
            e = d.y + 220;
        createjs.Tween.get(f, {
            override: true
        }).to({
            x: d.x
        }, b, createjs.Ease.sineIn);
        createjs.Tween.get(f).to({
            y: f.y - 10
        }, b / 4, createjs.Ease.cubicOut).to({
            y: e
        }, 3 * b / 4, createjs.Ease.cubicIn).call(function() {
            s_oGame.ballArrived(a[0].col);
            createjs.Tween.get(f).to({
                y: e - 100
            }, b / 2, createjs.Ease.cubicOut).to({
                y: e
            }, b, createjs.Ease.bounceOut).call(function() {
                createjs.Tween.get(f).to({
                    alpha: 0
                }, 3E3, createjs.Ease.cubicIn).call(function() {
                    c.unload()
                })
            })
        })
    };
    var c = this;
    this._init(a, e)
}

function CBallGenerator(a) {
    var e, b, d, f, g, c, h;
    this._init = function(a) {
        c = new createjs.Container;
        a.addChild(c);
        h = new createjs.Container;
        a.addChild(h);
        d = 3;
        f = 2 * BALL_RADIUS - 20;
        e = 182;
        b = 264;
        g = [];
        for (a = 0; a < d; a++) g[a] = new CBall({
            x: e - a * f,
            y: b
        }, c);
        a = s_oSpriteLibrary.getSprite("ball_generator");
        a = createBitmap(a);
        a.x = 0;
        a.y = 196;
        h.addChild(a)
    };
    this.unload = function() {
        a.removeChild(c);
        a.removeChild(h)
    };
    this.shiftBallAnimation = function() {
        g.splice(0, 1);
        var a = d - 1,
            h = {
                x: e - a * f,
                y: b
            };
        g[a] = new CBall(h, c);
        for (a = 0; 2 > a; a++) h = {
            x: e -
                a * f,
            y: b
        }, createjs.Tween.get(g[a].getSprite(), {
            override: true
        }).wait(200 * a).to({
            x: h.x
        }, 1E3, createjs.Ease.cubicIn)
    };
    this.getNextBall = function() {
        return g[0]
    };
    this._init(a)
}

function CInsertTubeController(a) {
    var e, b;
    this._init = function(a) {
        b = new createjs.Container;
        a.addChild(b);
        a = s_oSpriteLibrary.getSprite("holes_occluder");
        var d = createBitmap(a);
        d.regX = a.width / 2;
        d.regY = a.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = 408;
        b.addChild(d);
        a = s_oSpriteLibrary.getSprite("hole_board_occluder");
        d = [];
        for (var g = 0; g < NUM_INSERT_TUBE; g++) {
            d.push({
                x: 288 + 140 * g,
                y: 356
            });
            var c = createBitmap(a);
            c.regX = a.width / 2;
            c.regY = a.height / 2;
            c.x = d[g].x;
            c.y = d[g].y;
            b.addChild(c)
        }
        e = [];
        s_oSpriteLibrary.getSprite("bg_number");
        for (g = 0; g < NUM_INSERT_TUBE; g++) a = new CSlot(d[g].x, d[g].y + 20, 90, 100, b), a.addEventListenerWithParams(ON_MOUSE_UP, this._onSlot, this, g), e.push(a);
        this.hideSlots()
    };
    this.unload = function() {
        a.removeChild(b)
    };
    this.checkBallOverlap = function(a) {
        for (var b, d = 0; d < NUM_INSERT_TUBE; d++)
            if (b = e[d].checkOverlap(a)) return {
                pos: e[d].getPos(),
                index: d
            }
    };
    this.getSlotPos = function(a) {
        return e[a].getPos()
    };
    this.hideSlots = function() {
        for (var a = 0; a < NUM_INSERT_TUBE; a++) e[a].setVisible(false)
    };
    this.showSlots = function() {
        for (var a = 0; a <
            NUM_INSERT_TUBE; a++) e[a].setVisible(true)
    };
    this._onSlot = function(a) {
        s_oGame.launch(a)
    };
    this._init(a)
}

function CSlot(a, e, b, d, f) {
    var g, c, h, k, m = [],
        l, n;
    this._init = function(a, e, f) {
        g = false;
        c = 1;
        h = [];
        k = [];
        l = new createjs.Container;
        l.x = a;
        l.y = e;
        l.scaleX = l.scaleY = c;
        f.addChild(l);
        n = new createjs.Shape;
        n.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(-b / 2, -d / 2, b, d);
        l.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? l.off("mousedown", this.buttonDown) : (l.off("mousedown", this.buttonDown), l.off("mouseover", this.buttonOver));
        l.off("pressup", this.buttonRelease);
        l.parent.removeChild(l)
    };
    this.setVisible =
        function(a) {
            l.visible = a
        };
    this.setClickable = function(a) {
        g = !a
    };
    this._initListener = function() {
        if (s_bMobile) l.on("mousedown", this.buttonDown);
        else l.on("mousedown", this.buttonDown), l.on("mouseover", this.buttonOver);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        h[a] = b;
        k[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        h[a] = b;
        k[a] = c;
        m = d
    };
    this.buttonRelease = function() {
        g || (l.scaleX = c, l.scaleY = c, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(k[ON_MOUSE_UP], m))
    };
    this.buttonDown = function() {
        g ||
            (l.scaleX = .9 * c, l.scaleY = .9 * c, playSound("click", 1, false), h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], m))
    };
    this.buttonOver = function(a) {
        s_bMobile || g || (a.target.cursor = "pointer")
    };
    this.addText = function(a) {
        a = new createjs.Text(a, " 50px " + PRIMARY_FONT, "#ffffff");
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 200;
        l.addChild(a)
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(l).to({
            scaleX: 1.1 * c,
            scaleY: 1.1 * c
        }, 850, createjs.Ease.quadOut).to({
            scaleX: c,
            scaleY: c
        }, 650, createjs.Ease.quadIn).call(function() {
            q.pulseAnimation()
        })
    };
    this.trembleAnimation = function() {
        createjs.Tween.get(l).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            q.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        l.x = a;
        l.y = b
    };
    this.setX = function(a) {
        l.x = a
    };
    this.setY = function(a) {
        l.y = a
    };
    this.getButtonImage = function() {
        return l
    };
    this.getX = function() {
        return l.x
    };
    this.getY = function() {
        return l.y
    };
    this.getPos = function() {
        return {
            x: l.x,
            y: l.y
        }
    };
    var q = this;
    this._init(a,
        e, f);
    return this
}

function CScoreBasketController(a) {
    var e;
    this._init = function(a) {
        var b = new createjs.Container;
        b.y = 1472;
        a.addChild(b);
        var f = s_oSpriteLibrary.getSprite("basket_display");
        a = f.width / 4;
        var g = f.height;
        f = new createjs.SpriteSheet({
            images: [f],
            frames: {
                width: a,
                height: g,
                regX: a / 2,
                regY: g / 2
            },
            animations: {
                state_off: [0],
                state_green: [1],
                state_yellow: [2],
                state_red: [3]
            }
        });
        e = [];
        for (var c = 0; c < PRIZE.length; c++) e.push(new CBasket(290 + 140 * c, 0, b, f, a, g, PRIZE[c].toString()))
    };
    this.unload = function() {
        for (var a = 0; a < PRIZE.length; a++) e[a].unload()
    };
    this.litBasket = function(a, d) {
        e[a].lit(d)
    };
    this.refreshText = function(a) {
        for (var b = 0; b < PRIZE.length; b++) e[b].refreshText((a * PRIZE[b]).toString())
    };
    this._init(a)
}

function CBasket(a, e, b, d, f, g, c) {
    var h, k, m, l;
    this._init = function(a, b, c, d, e, f, g) {
        m = new createjs.Container;
        m.y = b;
        m.x = a;
        c.addChild(m);
        a = createSprite(d, "state_off", e / 2, f / 2, e, f);
        m.addChild(a);
        l = createSprite(d, "state_on", e / 2, f / 2, e, f);
        l.alpha = 0;
        m.addChild(l);
        d = this._verticalizeText(g);
        h = 30;
        k = new createjs.Text(d, " " + h + "px " + PRIMARY_FONT, "#ffffff");
        k.textAlign = "center";
        k.textBaseline = "middle";
        k.lineWidth = 200;
        m.addChild(k);
        this._setText(h)
    };
    this.unload = function() {
        b.removeChild(m)
    };
    this.refreshText = function(a) {
        a =
            this._verticalizeText(a);
        k.text = a;
        this._setText(h)
    };
    this._setText = function(a) {
        for (var b = a; k.getBounds().height > g - a;) b--, k.font = " " + b + "px " + PRIMARY_FONT;
        k.y = -k.getBounds().height / 2 + 10
    };
    this._verticalizeText = function(a) {
		return a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        for (var b = "", c = 0; c < a.length; c++) b = c !== a.length - 1 ? b + (a[c] + "\n") : b + a[c];
        return b
    };
    this.lit = function(a) {
        1 > a ? l.gotoAndPlay("state_red") : 4 >= a ? l.gotoAndPlay("state_yellow") : l.gotoAndPlay("state_green");
        n._recursiveLit(BASKET_LIT_ITERATION)
    };
    this._recursiveLit = function(a) {
        a--;
        0 > a || createjs.Tween.get(l).to({
                alpha: 1
            },
            100).to({
            alpha: 0
        }, 100).call(function() {
            n._recursiveLit(a)
        })
    };
    var n = this;
    this._init(a, e, b, d, f, g, c)
}

function CGUIExpandible(a, e, b, d) {
    var f, g, c, h, k, m, l, n;
    this._init = function(a, b, d, e) {
        h = [];
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        e.addChild(m);
        l = new createjs.Container;
        m.addChild(l);
        n = new createjs.Container;
        m.addChild(n);
        c = false;
        k = new CGfxButton(0, 0, d, n);
        k.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        g = f = 120
    };
    this.unload = function() {
        k.unload();
        d.removeChild(m)
    };
    this.refreshPos = function(b, c) {
        m.x = a - b;
        m.y = e + c
    };
    this.addButton = function(a) {
        a = a.getButtonImage();
        a.x = 0;
        a.y = 0;
        a.visible = 0;
        l.addChildAt(a, 0);
        h.push(a)
    };
    this._onMenu = function() {
        (c = !c) ? q._expand(): q._collapse()
    };
    this._expand = function() {
        for (var a = 0; a < h.length; a++) h[a].visible = true, createjs.Tween.get(h[a], {
            override: true
        }).wait(300 * a / 2).to({
            y: f + a * g
        }, 300, createjs.Ease.cubicOut)
    };
    this._collapse = function() {
        for (var a = 0; a < h.length; a++) {
            var b = h[h.length - 1 - a];
            createjs.Tween.get(b, {
                override: true
            }).wait(300 * a / 2).to({
                y: 0
            }, 300, createjs.Ease.cubicOut).call(function(a) {
                a.visible = false
            }, [b])
        }
    };
    var q = this;
    this._init(a, e, b, d)
};