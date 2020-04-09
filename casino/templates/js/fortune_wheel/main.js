(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, e = c.length, k = {}; d < e; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) k[c[0][d]] =
                        b[d];
                    return k
                }
            return false
        }(),
        k = {
            change: c.fullscreenchange,
            error: c.fullscreenerror
        },
        e = {
            request: function(d) {
                var f = c.requestFullscreen;
                d = d || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) d[f]();
                else d[f](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[c.exitFullscreen]()
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
            on: function(b, c) {
                var d = k[b];
                d && a.addEventListener(d, c, false)
            },
            off: function(b,
                c) {
                var d = k[b];
                d && a.removeEventListener(d, c, false)
            },
            raw: c
        };
    c ? (Object.defineProperties(e, {
        isFullscreen: {
            get: function() {
                return !!a[c.fullscreenElement]
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return a[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: true,
            get: function() {
                return !!a[c.fullscreenEnabled]
            }
        }
    }), d ? module.exports = e : window.screenfull = e) : d ? module.exports = false : window.screenfull = false
})();
var s_iScaleFactor = 1,
    s_bIsIphone = false,
    s_iOffsetX, s_iOffsetY;
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
    var d = a.toLowerCase(),
        b = window.document,
        c = b.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var k = b.createElement("body");
        k.id = "vpw-test-b";
        k.style.cssText = "overflow:scroll";
        var e = b.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + d + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        k.appendChild(e);
        c.insertBefore(k, b.head);
        a = 7 == e["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(k)
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

function isIOS() {
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return s_bIsIphone = true;
    return s_bIsIphone = false
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            c = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var k = a - b;
            b += k;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * k
        } else c < d && (k = d - c, c += k, b += CANVAS_HEIGHT / CANVAS_WIDTH * k);
        k = a / 2 - b / 2;
        var e = d / 2 - c / 2,
            h = CANVAS_WIDTH / c;
        if (e * h < -EDGEBOARD_X || k * h < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, k = (a - b) / 2, e = (d - c) / 2, h = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * e * h;
        s_iOffsetY = -1 * k * h;
        0 <= k && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", s_oStage.scaleX =
            s_oStage.scaleY = 2 * Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > k ? $("#canvas").css("top", k + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", e + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, d, b) {
    var c = new createjs.Bitmap(a),
        k = new createjs.Shape;
    d && b ? k.graphics.beginFill("#fff").drawRect(0, 0, d, b) : k.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = k;
    return c
}

function createSprite(a, d, b, c, k, e) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -c, k, e);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}

function rotateVector2D(a, d) {
    var b = d.getX() * Math.cos(a) + d.getY() * Math.sin(a),
        c = d.getX() * -Math.sin(a) + d.getY() * Math.cos(a);
    d.set(b, c)
}

function tweenVectorsOnX(a, d, b) {
    return a + b * (d - a)
}

function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
    return a
}

function bubbleSort(a) {
    do {
        var d = false;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (d = a[b], a[b] = a[b + 1], a[b + 1] = d, d = true)
    } while (d)
}

function compare(a, d) {
    return a.index > d.index ? -1 : a.index < d.index ? 1 : 0
}

function easeLinear(a, d, b, c) {
    return b * a / c + d
}

function easeInQuad(a, d, b, c) {
    return b * (a /= c) * a + d
}

function easeInSine(a, d, b, c) {
    return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
}

function easeInCubic(a, d, b, c) {
    return b * (a /= c) * a * a + d
}

function getTrajectoryPoint(a, d) {
    var b = new createjs.Point,
        c = (1 - a) * (1 - a),
        k = a * a;
    b.x = c * d.start.x + 2 * (1 - a) * a * d.traj.x + k * d.end.x;
    b.y = c * d.start.y + 2 * (1 - a) * a * d.traj.y + k * d.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d).toFixed(1);
    var b = "";
    b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, d) {
    var b = getBounds(a, .9);
    var c = getBounds(d, .98);
    return calculateIntersection(b, c)
}

function calculateIntersection(a, d) {
    var b, c, k, e;
    var h = a.x + (b = a.width / 2);
    var f = a.y + (c = a.height / 2);
    var l = d.x + (k = d.width / 2);
    var g = d.y + (e = d.height / 2);
    h = Math.abs(h - l) - (b + k);
    f = Math.abs(f - g) - (c + e);
    return 0 > h && 0 > f ? (h = Math.min(Math.min(a.width, d.width), -h), f = Math.min(Math.min(a.height, d.height), -f), {
        x: Math.max(a.x, d.x),
        y: Math.max(a.y, d.y),
        width: h,
        height: f,
        rect1: a,
        rect2: d
    }) : null
}

function getBounds(a, d) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var c = a.children,
            k = c.length,
            e;
        for (e = 0; e < k; e++) {
            var h = getBounds(c[e], 1);
            h.x < b.x && (b.x = h.x);
            h.y < b.y && (b.y = h.y);
            h.x + h.width > b.x2 && (b.x2 = h.x + h.width);
            h.y + h.height > b.y2 && (b.y2 = h.y + h.height)
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
            k =
                a.sourceRect || a.image;
            e = k.width * d;
            var f = k.height * d
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                k = a.spriteSheet.getFrame(a.currentFrame);
                e = k.rect.width;
                f = k.rect.height;
                c = k.regX;
                var l = k.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        c = c || 0;
        e = e || 0;
        l = l || 0;
        f = f || 0;
        b.regX = c;
        b.regY = l;
        k = a.localToGlobal(0 - c, 0 - l);
        h = a.localToGlobal(e - c, f - l);
        e = a.localToGlobal(e - c, 0 - l);
        c = a.localToGlobal(0 - c, f - l);
        b.x =
            Math.min(Math.min(Math.min(k.x, h.x), e.x), c.x);
        b.y = Math.min(Math.min(Math.min(k.y, h.y), e.y), c.y);
        b.width = Math.max(Math.max(Math.max(k.x, h.x), e.x), c.x) - b.x;
        b.height = Math.max(Math.max(Math.max(k.y, h.y), e.y), c.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, false)
}

function shuffle(a) {
    for (var d = a.length, b, c; 0 < d;) c = Math.floor(Math.random() * d), d--, b = a[d], a[d] = a[c], a[c] = b;
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
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", true, true);
            a.dispatchEvent(d)
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
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
        var c = d[b].split("=");
        if (c[0] == a) return c[1]
    }
}

function playSound(a, d, b) {
    return false === DISABLE_SOUND_MOBILE || false === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, d) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].volume(d)
}

function setMute(a, d) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[a].mute(d)
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && false !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? true : false, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
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
    var d = a.split("."),
        b = d.length;
    2 < b && (a = d[b - 2] + "." + d[b - 1]);
    return a
}
var getClosestTop = function() {
        var a = window,
            d = false;
        try {
            for (; a.parent.document !== a.document;)
                if (a.parent.document) a = a.parent;
                else {
                    d = true;
                    break
                }
        } catch (b) {
            d = true
        }
        return {
            topFrame: a,
            err: d
        }
    },
    getBestPageUrl = function(a) {
        var d = a.topFrame,
            b = "";
        if (a.err) try {
            try {
                b = window.top.location.href
            } catch (k) {
                var c = window.location.ancestorOrigins;
                b = c[c.length - 1]
            }
        } catch (k) {
            b = d.document.referrer
        } else b = d.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function CSpriteLibrary() {
    var a, d, b, c, k, e;
    this.init = function(h, f, l) {
        b = d = 0;
        c = h;
        k = f;
        e = l;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        k.call(e)
    };
    this._onSpriteLoaded = function() {
        c.call(e);
        ++b == d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1920,
    CANVAS_HEIGHT = 1080,
    EDGEBOARD_X = 256,
    EDGEBOARD_Y = 84,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = false,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    PRIMARY_FONT = "MainFont",
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    TIME_ANIM_IDLE, ANIM_IDLE1_TIMESPEED, ANIM_IDLE2_TIMESPEED, ANIM_IDLE3_TIMESPEED, ANIM_SPIN_TIMESPEED, TIME_ANIM_WIN, ANIM_WIN1_TIMESPEED, ANIM_WIN2_TIMESPEED, TIME_ANIM_LOSE, STATE_IDLE = 0,
    STATE_SPIN = 1,
    STATE_WIN = 2,
    STATE_LOSE = 3,
    LED_SPIN = 3,
    MIN_FAKE_SPIN = 3,
    WHEEL_SPIN_TIMESPEED = 2600,
    START_CREDIT, START_BET, BET_OFFSET, MAX_BET, WHEEL_SETTINGS, AD_SHOW_COUNTER = [],
    BANK_CASH, WIN_OCCURRENCE, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, SEGMENT_ROT = 18;
TEXT_GAMEOVER = "موجودی حساب شما برای ادامه بازی کافی نیست";
TEXT_PLAY = "PLAY";
TEXT_CREDITS = "موجودی شما";
TEXT_SPIN = "بچرخ";
TEXT_PLUS = "+";
TEXT_MIN = "-";
TEXT_CURRENCY = "T";
TEXT_ALERT = "";

function CPreloader() {
    var a, d, b, c, k, e, h;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", self.images_location + "progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        h = new createjs.Container;
        s_oStage.addChild(h)
    };
    this.unload = function() {
        h.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(e).to({
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
        var f = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        h.addChild(f);
        f = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(f);
        c.x = CANVAS_WIDTH / 2 - f.width / 2;
        c.y = CANVAS_HEIGHT - 170;
        h.addChild(c);
        a = f.width;
        d = f.height;
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, 1, d);
        h.addChild(k);
        c.mask =
            k;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 125;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        h.addChild(b);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        h.addChild(e)
    };
    this.refreshLoader = function(f) {
        b.text = f + "%";
        k.graphics.clear();
        f = Math.floor(f * a / 100);
        k.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, f, d)
    };
    this._init()
}

function CMain(a) {
    var d, b = 0,
        c = 0,
        k = STATE_LOADING,
        e, h;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        false === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return false
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = 30;
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = true);
        s_oSpriteLibrary = new CSpriteLibrary;
        e = new CPreloader
    };
    this.preloaderReady = function() {
        this._loadImages();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || this._initSounds();
        d = true
    };
    this.soundLoaded = function() {
        b++;
        e.refreshLoader(Math.floor(b / c * 100));
        b === c && (e.unload(), this.gotoMenu())
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: self.sounds_location,
            filename: "game_over",
            loop: false,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: self.sounds_location,
            filename: "click",
            loop: false,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: self.sounds_location,
            filename: "reel",
            loop: true,
            volume: 1,
            ingamename: "reel"
        });
        a.push({
            path: self.sounds_location,
            filename: "start_reel",
            loop: false,
            volume: 1,
            ingamename: "start_reel"
        });
        a.push({
            path: self.sounds_location,
            filename: "win",
            loop: false,
            volume: 1,
            ingamename: "win"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: false,
            preload: true,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_play", self.images_location + "but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", self.images_location + "bg_game.png");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("but_spin", self.images_location + "but_spin.png");
        s_oSpriteLibrary.addSprite("but_plus", self.images_location + "but_plus.png");
        s_oSpriteLibrary.addSprite("wheel", self.images_location + "wheel.png");
        s_oSpriteLibrary.addSprite("leds", self.images_location + "leds.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits", self.images_location + "but_credits.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        e.refreshLoader(Math.floor(b / c * 100));
        b === c && (e.unload(), this.gotoMenu())
    };
    this._onAllImagesLoaded = function() {};
    this.gotoMenu = function() {
        new CMenu;
        k = STATE_MENU
    };
    this.gotoGame = function(a) {
        s_bEasyMode = a;
        h = new CGame(f);
        k = STATE_GAME;
        $(s_oMain).trigger("game_start")
    };
    this.stopUpdate = function() {
        d = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display",
            "block");
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || Howler.mute(true)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");
        (false === DISABLE_SOUND_MOBILE || false === s_bMobile) && s_bAudioActive && Howler.mute(false)
    };
    this._update = function(a) {
        if (false !== d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            k === STATE_GAME &&
                h.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var f = a;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    SHOW_CREDITS = a.show_credits;
    this.initContainer()
}
var s_bMobile, s_bEasyMode, s_bAudioActive = true,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oCanvas, s_bFullscreen = false,
    s_aSounds;

function CTextButton(a, d, b, c, k, e, h, f, l) {
    var g, r, t, m, q, n, u;
    this._init = function(a, b, c, d, f, e, k, h, l) {
        g = false;
        r = [];
        t = [];
        u = createBitmap(c);
        var p = Math.ceil(k / 20);
        n = new createjs.Text(d, k + "px " + f, "#000000");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        var w = n.getBounds();
        n.x = c.width / 2 + p;
        n.y = Math.floor(c.height / 2) + w.height / 3 + p - 7;
        q = new createjs.Text(d, k + "px " + f, e);
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        w = q.getBounds();
        q.x = c.width / 2;
        q.y = Math.floor(c.height / 2) + w.height / 3 - 7;
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        m.regX = c.width / 2;
        m.regY = c.height / 2;
        m.cursor = "pointer";
        h || (a = new createjs.SpriteSheet({
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
        }), u = createSprite(a, "state_false", c.width / 2 / 2, c.height / 2, c.width / 2, c.height), n.x = p, n.y = p + 17, q.x = 0, q.y = 17, m.regX = 0, m.regY = 0);
        m.addChild(u, n, q);
        l.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown");
        m.off("pressup");
        l.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible =
            a
    };
    this._initListener = function() {
        m.on("mousedown", this.buttonDown);
        m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        r[a] = b;
        t[a] = c
    };
    this.buttonRelease = function() {
        g || (m.scaleX = 1, m.scaleY = 1, playSound("click", 1, false), r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(t[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        g || (m.scaleX = .9, m.scaleY = .9, r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN]))
    };
    this.enable = function() {
        g = false;
        f || u.gotoAndStop("state_true")
    };
    this.disable = function() {
        g = true;
        f || u.gotoAndStop("state_false")
    };
    this.setTextPosition = function(a, b) {
        var c = Math.ceil(h / 20);
        n.x = a + c;
        n.y = b + c;
        q.x = a;
        q.y = b
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
    this._init(a, d, b, c, k, e, h, f, l);
    return this
}

function CToggle(a, d, b, c, k) {
    var e, h, f, l;
    this._init = function(a, b, c, d) {
        h = [];
        f = [];
        var k = new createjs.SpriteSheet({
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
        e = d;
        l = createSprite(k, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        l.x = a;
        l.y = b;
        l.stop();
        l.cursor = "pointer";
        g.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", this.buttonDown);
        l.off("pressup", this.buttonRelease);
        g.removeChild(l)
    };
    this._initListener = function() {
        l.on("mousedown", this.buttonDown);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        h[a] = b;
        f[a] = c
    };
    this.setActive = function(a) {
        e = a;
        l.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        l.scaleX = 1;
        l.scaleY = 1;
        playSound("click", 1, false);
        e = !e;
        l.gotoAndStop("state_" + e);
        h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(f[ON_MOUSE_UP], e)
    };
    this.buttonDown = function() {
        l.scaleX = .9;
        l.scaleY = .9;
        h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a,
        b) {
        l.x = a;
        l.y = b
    };
    var g = k;
    this._init(a, d, b, c)
}

function CGfxButton(a, d, b) {
    var c, k, e;
    this._init = function(a, b, d) {
        c = [];
        k = [];
        e = createBitmap(d);
        e.x = a;
        e.y = b;
        e.regX = d.width / 2;
        e.regY = d.height / 2;
        e.cursor = "pointer";
        s_oStage.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", this.buttonDown);
        e.off("pressup", this.buttonRelease);
        s_oStage.removeChild(e)
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        c[a] =
            b;
        k[a] = d
    };
    this.buttonRelease = function() {
        e.scaleX = 1;
        e.scaleY = 1;
        playSound("click", 1, false);
        c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(k[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY = .9;
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this.setX = function(a) {
        e.x = a
    };
    this.setY = function(a) {
        e.y = a
    };
    this.getButtonImage = function() {
        return e
    };
    this.getX = function() {
        return e.x
    };
    this.getY = function() {
        return e.y
    };
    this._init(a, d, b);
    return this
}

function CMenu() {
    var a, d, b, c, k, e, h = null,
        f = null,
        l, g, r, t, m, q;
    this._init = function() {
        g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(g);
        var asdasd = s_oSpriteLibrary.getSprite("bg_back");
        qweqwe = new CTextButton(CANVAS_WIDTH - asdasd.width / 4 - 120, asdasd.height + 53, asdasd, ' ', PRIMARY_FONT, "#ffffff", 40, true, s_oStage);
        qweqwe.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        var n = s_oSpriteLibrary.getSprite("but_play");
        r = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 190, n, " ", PRIMARY_FONT, "#ffffff", 50, false, s_oStage);
        r.enable();
        r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        n = s_oSpriteLibrary.getSprite("but_credits");
        SHOW_CREDITS ? (a = CANVAS_WIDTH - n.height / 2 - 10, d = n.height / 2 + 10, q = new CGfxButton(a, d, n, s_oStage),
            q.addEventListener(ON_MOUSE_UP, this._onCredits, this), n = s_oSpriteLibrary.getSprite("audio_icon"), k = a - n.width / 2 - 10) : (n = s_oSpriteLibrary.getSprite("audio_icon"), k = CANVAS_WIDTH - n.height / 2 - 10);
        e = n.height / 2 + 10;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) m = new CToggle(k, e, n, s_bAudioActive, s_oStage), m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        n = window.document;
        var u = n.documentElement;
        h = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        f = n.exitFullscreen ||
            n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (h = false);
        h && screenfull.enabled && (n = s_oSpriteLibrary.getSprite("but_fullscreen"), b = n.width / 4 + 10, c = n.height / 2 + 10, l = new CToggle(b, c, n, s_bFullscreen, s_oStage), l.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        createjs.Tween.get(t).to({
            alpha: 0
        }, 1E3).call(function() {
            t.visible = false
        });
        this.refreshButtonPos(s_iOffsetX,
            s_iOffsetY)
    };
    this.unload = function() {
        r.unload();
        r = null;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) m.unload(), m = null;
        SHOW_CREDITS && (q.unload(), q = null);
        h && screenfull.enabled && l.unload();
        s_oStage.removeChild(g);
        s_oMenu = g = null
    };
    this.refreshButtonPos = function(f, g) {
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || m.setPosition(k - f, g + e);
        SHOW_CREDITS && q.setPosition(a - f, g + d);
        h && screenfull.enabled && l.setPosition(b + f, c + g)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        l.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? f.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButPlayRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame()
    };
    this._onCredits = function() {
		return;
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var d, b, c, k, e, h, f, l, g, r, t, m, q, n = null,
        u, v;
    this._init = function() {
        h = 1;
        c = b = 0;
        f = START_BET;
        l = START_CREDIT;
        g = -1;
        e = STATE_IDLE;
        r = 0;
        t = BANK_CASH;
        m = [];
        for (var a = 0, n = 0; n < WHEEL_SETTINGS.length; n++) a += WHEEL_SETTINGS[n].win_occurence;
        (d = true, u = new CWheel(1198, 540), a = createBitmap(s_oSpriteLibrary.getSprite("bg_game")), s_oStage.addChild(a), v = new CLeds(1198, 540), k = v.getState(), q = new CInterface, this._initProbability(), l < START_BET && this.gameOver());
    };
    this._initProbability = function() {
        for (var a = [], b = 0; b < WHEEL_SETTINGS.length; b++) a[b] = WHEEL_SETTINGS[b].win_occurence;
        for (b = 0; b < a.length; b++)
            for (var c = 0; c < a[b]; c++) m.push(b)
    };
    this.modifyBonus = function(a) {
        f = "plus" === a ? f + BET_OFFSET : f - BET_OFFSET;
        f = parseFloat(f);
        if (f > MAX_BET) f -=
            BET_OFFSET, h = 1;
        else if (f < START_BET) f += BET_OFFSET, h = 1;
        else if (f > l) {
            f -= BET_OFFSET;
            return
        }
        h = f / START_BET;
        h = h;
        q.refreshBet(f);
        u.clearText();
        u.setText(h)
    };
    this.tryShowAd = function() {
        r++;
        r === AD_SHOW_COUNTER && (r = 0, $(s_oMain).trigger("show_interlevel_ad"))
    };
    this.spinWheel = function() {
        q.disableSpin(true);
        e = STATE_SPIN;
        c = 0;
        this.setNewRound();
        q.refreshMoney(0);
        l -= f;
        t += f;
        l = parseFloat(l);
        t = parseFloat(t);
        q.refreshCredit(l);
        for (var a, b = [], d = 0; d < m.length; d++) a = WHEEL_SETTINGS[m[d]].prize *
            h, a <= t && b.push({
                prize: a,
                index: d
            });
        b = b[Math.floor(Math.random() * b.length)].index;
        g = m[b];
        a = MIN_FAKE_SPIN + Math.floor(3 * Math.random());
        d = SEGMENT_ROT - 3;
        d = -d / 2 + Math.random() * d;
        b = (360 - u.getDegree() + m[b] * SEGMENT_ROT + d) % 360;
        b = 360 * a + b;
        u.clearText();
        u.setText(h);
        u.spin(b, a);
        $(s_oMain).trigger("bet_placed", f)
    };
    this.setNewRound = function() {
        0 > g || (q.refreshCredit(l), q.clearMoneyPanel(), g = -1)
    };
    this.releaseWheel = function() {
        this.tryShowAd();
        q.disableSpin(false);
        q.refreshMoney(WHEEL_SETTINGS[g].prize * h);
        l += WHEEL_SETTINGS[g].prize *
            h;
        t -= WHEEL_SETTINGS[g].prize * h;
        $(s_oMain).trigger("save_score", [l]);
        q.refreshCredit(l);
        q.animWin();
        l < START_BET && this.gameOver();
        h > l / START_BET && (h = Math.floor(l / START_BET), f = h * START_BET, q.refreshBet(f));
        0 >= WHEEL_SETTINGS[g].prize ? (e = STATE_LOSE, playSound("game_over", 1, false)) : (e = STATE_WIN, playSound("win", 1, false))
    };
    this.getCurColor = function() {
        return u.getColor()
    };
    this.unload = function() {
        stopSound("reel");
        d = false;
        q.unload();
        null !== n && n.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit =
        function() {
            $(s_oMain).trigger("save_score", [l]);
            $(s_oMain).trigger("share_event", l);
            this.unload();
            s_oMain.gotoMenu()
        };
    this.gameOver = function() {
        n = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        n.show()
    };
    this._animLedIdle = function() {
        b += s_iTimeElaps;
        if (b > TIME_ANIM_IDLE) {
            b = 0;
            for (var a = Math.floor(Math.random() * v.getNumAnim()); a === k;) a = Math.floor(Math.random() * v.getNumAnim());
            v.changeAnim(a);
            k = a
        }
    };
    this._animLedSpin = function() {
        v.changeAnim(LED_SPIN);
        e = -1
    };
    this._animLedWin = function() {
        0 === c ? (v.changeAnim(4 +
            Math.round(Math.random())), v.setWinColor(this.getCurColor())) : c > TIME_ANIM_WIN && (b = TIME_ANIM_IDLE, e = STATE_IDLE, this.setNewRound(), c = 0);
        c += s_iTimeElaps
    };
    this._animLedLose = function() {
        0 === c ? (v.changeAnim(6), v.setWinColor(this.getCurColor())) : c > TIME_ANIM_LOSE && (b = TIME_ANIM_IDLE, e = STATE_IDLE, this.setNewRound(), c = 0);
        c += s_iTimeElaps
    };
    this.update = function() {
        if (d) switch (v.update(), e) {
            case STATE_IDLE:
                this._animLedIdle();
                break;
            case STATE_SPIN:
                this._animLedSpin();
                break;
            case STATE_WIN:
                this._animLedWin();
                break;
            case STATE_LOSE:
                this._animLedLose()
        }
    };
    s_oGame = this;
    WHEEL_SETTINGS = a.wheel_settings;
    START_CREDIT = a.start_credit;
    START_BET = a.start_bet;
    BET_OFFSET = a.bet_offset;
    MAX_BET = a.max_bet;
    TIME_ANIM_IDLE = a.anim_idle_change_frequency;
    ANIM_IDLE1_TIMESPEED = a.led_anim_idle1_timespeed;
    ANIM_IDLE2_TIMESPEED = a.led_anim_idle2_timespeed;
    ANIM_IDLE3_TIMESPEED = a.led_anim_idle3_timespeed;
    ANIM_SPIN_TIMESPEED = a.led_anim_spin_timespeed;
    TIME_ANIM_WIN = a.led_anim_win_duration;
    ANIM_WIN1_TIMESPEED = a.led_anim_win1_timespeed;
    ANIM_WIN2_TIMESPEED =
        a.led_anim_win2_timespeed;
    TIME_ANIM_LOSE = a.led_anim_lose_duration;
    AD_SHOW_COUNTER = a.ad_show_counter;
    BANK_CASH = a.bank_cash;
    ENABLE_FULLSCREEN = a.fullscreen;
    this._init()
}
var s_oGame;

function CVector2(a, d) {
    var b, c;
    this._init = function(a, d) {
        b = a;
        c = d
    };
    this.add = function(a, d) {
        b += a;
        c += d
    };
    this.addV = function(a) {
        b += a.getX();
        c += a.getY()
    };
    this.scalarDivision = function(a) {
        b /= a;
        c /= a
    };
    this.subV = function(a) {
        b -= a.getX();
        c -= a.getY()
    };
    this.scalarProduct = function(a) {
        b *= a;
        c *= a
    };
    this.invert = function() {
        b *= -1;
        c *= -1
    };
    this.dotProduct = function(a) {
        return b * a.getX() + c * a.getY()
    };
    this.set = function(a, d) {
        b = a;
        c = d
    };
    this.setV = function(a) {
        b = a.getX();
        c = a.getY()
    };
    this.length = function() {
        return Math.sqrt(b * b + c * c)
    };
    this.length2 =
        function() {
            return b * b + c * c
        };
    this.normalize = function() {
        var a = this.length();
        0 < a && (b /= a, c /= a)
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(b, c);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = b;
        b = -c;
        c = a
    };
    this.rot90CW = function() {
        var a = b;
        b = c;
        c = -a
    };
    this.getRotCCW = function(a) {
        a.set(b, c);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(b, c);
        a.rot90CW()
    };
    this.ceil = function() {
        b = Math.ceil(b);
        c = Math.ceil(c)
    };
    this.round = function() {
        b = Math.round(b);
        c = Math.round(c)
    };
    this.toString = function() {
        return "Vector2: " + b + ", " +
            c
    };
    this.print = function() {
        trace("Vector2: " + b + ", " + c)
    };
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return c
    };
    this._init(a, d)
}

function CFormatText(a, d, b, c) {
    var k, e, h, f;
    this._init = function(a, b, c, d) {
        k = 0;
        f = new createjs.Container;
        f.x = a;
        f.y = b;
        d.addChild(f);
        a = 60;
        b = a / 20;
        for (d = 0; d < c.length; d++) {
            var g = "37px";
            h = new createjs.Text;
            h.text = c[d];
            h.font = g + " " + PRIMARY_FONT;
            h.color = "#1b1b1b";
            h.textAlign = "left";
            h.textBaseline = "middle";
            h.x = k;
            h.y = 4;
            f.addChild(h);
            k += h.getMeasuredWidth() + b;
            a -= 9
        }
        f.cache(0, -f.getBounds().height / 2, f.getBounds().width, f.getBounds().height)
    };
    this.unload = function() {
        c.removeChild(f)
    };
    this.rotateText = function(a) {
        f.rotation = a
    };
    this._init(a, d, b, c)
}

function CInterface() {
    var a, d, b, c, k, e, h = null,
        f = null,
        l, g, r, t, m, q, n, u, v, w, z, x;
    this._init = function() {
        z = this;
        n = 0;
        var p = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - p.height / 2 - 10;
        c = p.height / 2 + 10;
        r = new CGfxButton(b, c, p, true);
        r.addEventListener(ON_MOUSE_UP, this._onExit, this);
        a = CANVAS_WIDTH - p.width / 2 - 100;
        d = p.height / 2 + 10;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), g = new CToggle(a, d, p, s_bAudioActive, s_oStage), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        p = window.document;
        var y = p.documentElement;
        h = y.requestFullscreen || y.mozRequestFullScreen || y.webkitRequestFullScreen || y.msRequestFullscreen;
        f = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (h = false);
        h && screenfull.enabled && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), k = p.width / 4 + 10, e = p.height / 2 + 10, l = new CToggle(k, e, p, s_bFullscreen, s_oStage), l.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        p = s_oSpriteLibrary.getSprite("but_spin");
        t = new CTextButton(500, CANVAS_HEIGHT - 190, p, " ", PRIMARY_FONT, "#ffffff", 50, false, s_oStage);
        t.enable();
        t.addEventListener(ON_MOUSE_UP, this._onButSpinRelease, this);
        p = s_oSpriteLibrary.getSprite("but_plus");
        m = new CTextButton(650, CANVAS_HEIGHT - 320, p, TEXT_PLUS, PRIMARY_FONT, "#ffffff", 70, false, s_oStage);
        m.enable();
        m.addEventListener(ON_MOUSE_UP, this._onButPlusRelease, this);
        p = s_oSpriteLibrary.getSprite("but_plus");
        q = new CTextButton(350, CANVAS_HEIGHT - 320, p, TEXT_MIN, PRIMARY_FONT, "#ffffff", 70, false, s_oStage);
        q.enable();
        q.addEventListener(ON_MOUSE_UP, this._onButMinRelease, this);
        p = new createjs.Text(TEXT_CREDITS, "50px " + PRIMARY_FONT, "#000000");
        p.x = 500;
        p.y = 204;
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.lineWidth = 400;
        s_oStage.addChild(p);
        p = new createjs.Text(TEXT_CREDITS, "50px " + PRIMARY_FONT, "#ffffff");
        p.x = 500;
        p.y = 200;
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.lineWidth = 400;
        s_oStage.addChild(p);
        u = new createjs.Text(START_CREDIT.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "50px " + PRIMARY_FONT, "#ffffff");
        u.x = 500;
        u.y = 340;
        u.textAlign =
            "center";
        u.textBaseline = "alphabetic";
        u.lineWidth = 400;
        s_oStage.addChild(u);
        v = new createjs.Text("0".toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "50px " + PRIMARY_FONT, "#ffffff");
        v.x = 480;
        v.y = 550;
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.lineWidth = 400;
        s_oStage.addChild(v);
        x = new createjs.Text("0".toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "50px " + PRIMARY_FONT, "yellow");
        x.x = 480;
        x.y = 550;
        x.textAlign = "center";
        x.textBaseline = "alphabetic";
        x.lineWidth = 400;
        x.alpha = n;
        s_oStage.addChild(x);
        w = new createjs.Text(START_BET.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ","), "40px " + PRIMARY_FONT, "#ffffff");
        w.x =
            500;
        w.y = 775;
        w.textAlign = "center";
        w.textBaseline = "alphabetic";
        w.lineWidth = 400;
        s_oStage.addChild(w);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) g.unload(), g = null;
        r.unload();
        t.unload();
        h && screenfull.enabled && l.unload();
        s_oInterface = null
    };
    this.refreshCredit = function(a) {
        u.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY
    };
    this.clearMoneyPanel = function() {
        x.alpha = 0;
        createjs.Tween.removeTweens(x)
    };
    this.refreshMoney = function(a) {
        v.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY;
        x.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY
    };
    this.refreshBet = function(a) {
        w.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY
    };
    this.animWin = function() {
        n = 1 === n ? 0 : 1;
        createjs.Tween.get(x).to({
            alpha: n
        }, 150, createjs.Ease.cubicOut).call(function() {
            z.animWin()
        })
    };
    this._onButSpinRelease = function() {
        s_oGame.spinWheel()
    };
    this._onButPlusRelease = function() {
        s_oGame.modifyBonus("plus")
    };
    this._onButMinRelease = function() {
        s_oGame.modifyBonus("min")
    };
    this.disableSpin = function(a) {
        true === a ? (t.disable(), m.disable(), q.disable()) : (t.enable(), m.enable(), q.enable())
    };
    this.refreshButtonPos = function(f, t) {
        r.setPosition(b - f, t + c);
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || g.setPosition(a - f, t + d);
        h && screenfull.enabled && l.setPosition(k + f, e + t)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        l.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? f.call(window.document) : h.call(window.document.documentElement);
        sizeHandler()
    };
    this._onExit = function() {
        $(s_oMain).trigger("end_session");
        s_oGame.onExit()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;
function CEndPanel(a) {
    var d, b, c, k;
    this._init = function(a) {
        d = createBitmap(a);
        d.x = 0;
        d.y = 0;
        c = new createjs.Text("", "30px " + PRIMARY_FONT, "#000");
        c.x = CANVAS_WIDTH / 2 + 3;
        c.y = CANVAS_HEIGHT / 2 - 50;
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.lineWidth = 800;
        k = new createjs.Text("", "30px " + PRIMARY_FONT, "#ffffff");
        k.x = CANVAS_WIDTH / 2;
        k.y = CANVAS_HEIGHT / 2 - 53;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineWidth = 800;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = false;
        b.addChild(d, c, k);
        s_oStage.addChild(b)
    };
    this.unload =
        function() {
            b.off("mousedown", this._onExit)
        };
    this._initListener = function() {
        b.on("mousedown", function(){
			$(s_oMain).trigger("recharge");
		})
    };
    this.show = function() {
        playSound("game_over", 1, false);
        $(s_oMain).trigger("show_interlevel_ad");
        c.text = TEXT_GAMEOVER;
        k.text = TEXT_GAMEOVER;
        b.visible = true;
        var a = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            a._initListener()
        })
    };
    this._onExit = function() {
        b.off("mousedown", this._onExit);
        s_oStage.removeChild(b);
        $(s_oMain).trigger("end_session");
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CWheel(a, d) {
    var b, c, k, e, h;
    this._init = function(a, d) {
        b = [];
        c = [];
        k = [];
        for (var f = 0; f < WHEEL_SETTINGS.length; f++) k[f] = WHEEL_SETTINGS[f].prize;
        this._initColors();
        f = s_oSpriteLibrary.getSprite("wheel");
        h = new createjs.Container;
        h.x = a;
        h.y = d;
        s_oStage.addChild(h);
        e = createBitmap(f);
        e.regX = f.width / 2;
        e.regY = f.height / 2;
        h.addChild(e);
        e.cache(0, 0, f.width, f.height);
        this.setText(1)
    };
    this.unload = function() {
        s_oStage.removeChild(h)
    };
    this._initColors = function() {
        for (var a = 0; 9 > a; a++) c[0] = "violet";
        for (a = 351; 360 >= a; a++) c[a] = "violet";
        for (var b = 0; 4 > b; b++) for (a = 9 + b * SEGMENT_ROT * 5; a < 27 + b * SEGMENT_ROT * 5; a++) c[a] = "blue";
        for (b = 0; 4 > b; b++) for (a = 27 + b * SEGMENT_ROT * 5; a < 45 + b * SEGMENT_ROT * 5; a++) c[a] = "green";
        for (b = 0; 4 > b; b++) for (a = 45 + b * SEGMENT_ROT * 5; a < 63 + b * SEGMENT_ROT * 5; a++) c[a] = "yellow";
        for (b = 0; 4 > b; b++) for (a = 63 + b * SEGMENT_ROT * 5; a < 81 + b * SEGMENT_ROT * 5; a++) c[a] = "red";
        for (b = 0; 3 > b; b++) for (a = 81 + b * SEGMENT_ROT * 5; a <= 99 + b * SEGMENT_ROT * 5; a++) c[a] = "violet";
        for (a = 315; 333 >= a; a++) c[a] = "white"
    };
    this.setText = function(a) {
        for (var c = new CVector2(-355, 3), d = SEGMENT_ROT,
                e = Math.PI * SEGMENT_ROT / 180, f = 0; f < k.length; f++) {
            var m = (k[f] * a);
            b[f] = new CFormatText(c.getX(), c.getY(), m.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ","), h);
			b[f].fontSize = "10px";
            b[f].rotateText(-d * f);
            rotateVector2D(e, c)
        }
    };
    this.clearText = function() {
        for (var a = 0; a < k.length; a++) b[a].unload()
    };
    this.spin = function(a, b) {
        playSound("start_reel", 1, false);
        playSound("reel", .1, true);
        createjs.Tween.get(h).to({
            rotation: h.rotation + a
        }, WHEEL_SPIN_TIMESPEED * b, createjs.Ease.quartOut).call(function() {
            h.rotation %= 360;
            s_oGame.releaseWheel();
            false !== DISABLE_SOUND_MOBILE && false !==
                s_bMobile || stopSound("reel")
        })
    };
    this.getDegree = function() {
        return h.rotation
    };
    this.getColor = function() {
        return c[Math.round(h.rotation)]
    };
    this._init(a, d)
}

function CLeds(a, d) {
    var b, c, k, e, h, f, l, g, r;
    this._init = function(a, b) {
        h = 3;
        k = Math.floor(Math.random() * h);
        e = 0;
        g = [];
        r = new createjs.Container;
        r.x = a;
        r.y = b;
        s_oStage.addChild(r);
        var c = {
            images: [s_oSpriteLibrary.getSprite("leds")],
            frames: {
                width: 90,
                height: 90,
                regX: 45,
                regY: 45
            },
            animations: {
                off: [0],
                white: [1],
                green: [2],
                blue: [3],
                violet: [4],
                red: [5],
                yellow: [6]
            }
        };
        c = new createjs.SpriteSheet(c);
        for (var d = new CVector2(-427, 0), f = 360 / WHEEL_SETTINGS.length * Math.PI / 180, l = 0; l < WHEEL_SETTINGS.length; l++) g[l] = createSprite(c, "off",
            0, 0, 90, 90), g[l].x = d.getX(), g[l].y = d.getY(), rotateVector2D(f, d), r.addChild(g[l]);
        g[0].visible = false
    };
    this.unload = function() {
        s_oStage.removeChild(r)
    };
    this.setWinColor = function(a) {
        b = a
    };
    this.getState = function() {
        return k
    };
    this.getNumAnim = function() {
        return h
    };
    this.changeAnim = function(a) {
        e = 0;
        k = a;
        for (a = 0; a < g.length; a++) g[a].gotoAndStop("off")
    };
    this.animIdle0 = function() {
        e += s_iTimeElaps;
        if (0 <= e && e < ANIM_IDLE1_TIMESPEED / 2)
            for (var a = 0; a < g.length; a++) 0 === a % 2 ? g[a].gotoAndStop("white") : g[a].gotoAndStop("off");
        else if (e >=
            ANIM_IDLE1_TIMESPEED / 2 && e < ANIM_IDLE1_TIMESPEED)
            for (a = 0; a < g.length; a++) 0 === a % 2 ? g[a].gotoAndStop("off") : g[a].gotoAndStop("white");
        else e = 0
    };
    this.animIdle1 = function() {
        0 === e && (f = 0, g[f].gotoAndStop("white"), g[g.length / 4].gotoAndStop("white"), g[g.length / 2].gotoAndStop("white"), g[3 * g.length / 4].gotoAndStop("white"));
        e += s_iTimeElaps;
        e > ANIM_IDLE2_TIMESPEED && (f === g.length / 4 && (f = 0, e = 1), 0 === f ? (g[g.length - 1].gotoAndStop("off"), g[0].gotoAndStop("white"), g[g.length / 4 - 1].gotoAndStop("off"), g[g.length / 4].gotoAndStop("white"),
            g[g.length / 2 - 1].gotoAndStop("off"), g[g.length / 2].gotoAndStop("white"), g[3 * g.length / 4 - 1].gotoAndStop("off"), g[3 * g.length / 4].gotoAndStop("white")) : (g[f - 1].gotoAndStop("off"), g[f].gotoAndStop("white"), g[g.length / 4 + f - 1].gotoAndStop("off"), g[g.length / 4 + f].gotoAndStop("white"), g[g.length / 2 + f - 1].gotoAndStop("off"), g[g.length / 2 + f].gotoAndStop("white"), g[3 * g.length / 4 + f - 1].gotoAndStop("off"), g[3 * g.length / 4 + f].gotoAndStop("white")), f++, e = 1)
    };
    this.animIdle2 = function() {
        0 === e && (f = 0, l = g.length / 2, g[f].gotoAndStop("white"),
            g[l].gotoAndStop("white"));
        e += s_iTimeElaps;
        e > ANIM_IDLE3_TIMESPEED && (f === g.length / 2 && (f = 0, l = g.length / 2, e = 1), 0 === f ? (g[g.length - 1].gotoAndStop("off"), g[1].gotoAndStop("off"), g[0].gotoAndStop("white"), g[g.length / 2 + 1].gotoAndStop("off"), g[g.length / 2 - 1].gotoAndStop("off"), g[g.length / 2].gotoAndStop("white")) : (g[f - 1].gotoAndStop("off"), g[f].gotoAndStop("white"), 1 !== f && g[g.length - f + 1].gotoAndStop("off"), g[g.length - f].gotoAndStop("white"), g[l + 1].gotoAndStop("off"), g[l].gotoAndStop("white"), g[g.length - l - 1].gotoAndStop("off"),
            0 !== l && g[g.length - l].gotoAndStop("white")), f++, l--, e = 1)
    };
    this.animSpin0 = function() {
        0 === e && (f = Math.floor(Math.random() * g.length), g[f].gotoAndStop("white"));
        e += s_iTimeElaps;
        e > ANIM_SPIN_TIMESPEED && (0 > f && (f = g.length - 1, e = 1), f === g.length - 1 ? (g[0].gotoAndStop("off"), g[g.length - 1].gotoAndStop("white")) : (g[f + 1].gotoAndStop("off"), g[f].gotoAndStop("white")), f--, e = 1)
    };
    this.animWin0 = function() {
        e += s_iTimeElaps;
        if (0 <= e && e < ANIM_WIN1_TIMESPEED / 2)
            for (var a = 0; a < g.length; a++) 0 === a % 2 ? g[a].gotoAndStop(b) : g[a].gotoAndStop("off");
        else if (e >= ANIM_WIN1_TIMESPEED / 2 && e < ANIM_WIN1_TIMESPEED)
            for (a = 0; a < g.length; a++) 0 === a % 2 ? g[a].gotoAndStop("off") : g[a].gotoAndStop(b);
        else e = 0
    };
    this.animWin1 = function() {
        0 === e && (f = 0, l = g.length / 2, c = b, g[f].gotoAndStop(c), g[l].gotoAndStop(c));
        e += s_iTimeElaps;
        e > ANIM_WIN2_TIMESPEED && (f > g.length / 4 && (f = 0, l = g.length / 2, e = 1, c = c === b ? "off" : b), 0 === f ? (g[0].gotoAndStop(c), g[g.length / 2].gotoAndStop(c)) : f <= g.length / 4 && (g[f].gotoAndStop(c), g[g.length - f].gotoAndStop(c), g[l].gotoAndStop(c), 0 !== l && g[g.length - l].gotoAndStop(c)),
            f++, l--, e = 1)
    };
    this.animLose = function() {
        for (var a = 0; a < g.length; a++) g[a].gotoAndStop(b);
        k = -1
    };
    this.update = function() {
        switch (k) {
            case 0:
                this.animIdle0();
                break;
            case 1:
                this.animIdle1();
                break;
            case 2:
                this.animIdle2();
                break;
            case 3:
                this.animSpin0();
                break;
            case 4:
                this.animWin0();
                break;
            case 5:
                this.animWin1();
                break;
            case 6:
                this.animLose()
        }
    };
    this._init(a, d)
}