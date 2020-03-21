(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        h = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        f = function() {
            for (var b, g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], e = 0, d = g.length, c = {}; e < d; e++)
                if ((b = g[e]) && b[1] in a) {
                    for (e = 0; e < b.length; e++) c[g[0][e]] =
                        b[e];
                    return c
                }
            return false
        }(),
        b = {
            change: f.fullscreenchange,
            error: f.fullscreenerror
        },
        l = {
            request: function(b) {
                var g = f.requestFullscreen;
                b = b || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) b[g]();
                else b[g](h && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[f.exitFullscreen]()
            },
            toggle: function(b) {
                this.isFullscreen ? this.exit() : this.request(b)
            },
            onchange: function(b) {
                this.on("change", b)
            },
            onerror: function(b) {
                this.on("error", b)
            },
            on: function(k, g) {
                var e = b[k];
                e && a.addEventListener(e, g, false)
            },
            off: function(k,
                g) {
                var e = b[k];
                e && a.removeEventListener(e, g, false)
            },
            raw: f
        };
    f ? (Object.defineProperties(l, {
        isFullscreen: {
            get: function() {
                return !!a[f.fullscreenElement]
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return a[f.fullscreenElement]
            }
        },
        enabled: {
            enumerable: true,
            get: function() {
                return !!a[f.fullscreenEnabled]
            }
        }
    }), d ? module.exports = l : window.screenfull = l) : d ? module.exports = false : window.screenfull = false
})();
var s_iOffsetX = 0,
    s_iOffsetY = 0,
    s_fInverseScaling = 0,
    s_bIsIphone = false;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
jQuery(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = true); a.length;)
        if (navigator.platform === a.pop()) return true;
    return s_bIsIphone = false
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
    var d = a.toLowerCase(),
        h = window.document,
        f = h.documentElement;
    if (void 0 === window["inner" + a]) a = f["client" + a];
    else if (window["inner" + a] != f["client" + a]) {
        var b = h.createElement("body");
        b.id = "vpw-test-b";
        b.style.cssText = "overflow:scroll";
        var l = h.createElement("div");
        l.id = "vpw-test-d";
        l.style.cssText = "position:absolute;top:-1000px";
        l.innerHTML = "<style>@media(" + d + ":" + f["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        b.appendChild(l);
        f.insertBefore(b, h.head);
        a = 7 == l["offset" + a] ? f["client" + a] : window["inner" + a];
        f.removeChild(b)
    } else a = window["inner" + a];
    return a
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
        var d = getSize("Width");
        _checkOrientation(d, a);
        s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH);
        var h = CANVAS_WIDTH * s_iScaleFactor,
            f = CANVAS_HEIGHT * s_iScaleFactor;
        if (f < a) {
            var b = a - f;
            f += b;
            h += CANVAS_WIDTH / CANVAS_HEIGHT * b
        } else h < d && (b = d - h, h += b, f += CANVAS_HEIGHT / CANVAS_WIDTH * b);
        b = a / 2 - f / 2;
        var l = d / 2 - h / 2,
            k = CANVAS_WIDTH / h;
        if (l * k < -EDGEBOARD_X || b * k < -EDGEBOARD_Y) s_iScaleFactor =
            Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), h = CANVAS_WIDTH * s_iScaleFactor, f = CANVAS_HEIGHT * s_iScaleFactor, b = (a - f) / 2, l = (d - h) / 2, k = CANVAS_WIDTH / h;
        s_fInverseScaling = k;
        s_iOffsetX = -1 * l * k;
        s_iOffsetY = -1 * b * k;
        0 <= b && (s_iOffsetY = 0);
        0 <= l && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * h, s_oStage.canvas.height =
            2 * f, canvas.style.width = h + "px", canvas.style.height = f + "px", a = Math.min(h / CANVAS_WIDTH, f / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile && false === isIOS() ? ($("#canvas").css("width", h + "px"), $("#canvas").css("height", f + "px")) : (s_oStage.canvas.width = h, s_oStage.canvas.height = f, s_iScaleFactor = Math.min(h / CANVAS_WIDTH, f / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > b ? ($("#canvas").css("top", b + "px"), s_iCanvasOffsetHeight = b) : ($("#canvas").css("top", "0px"), s_iCanvasOffsetHeight =
            0);
        $("#canvas").css("left", l + "px");
        s_iCanvasResizeWidth = h;
        s_iCanvasResizeHeight = f;
        s_iCanvasOffsetWidth = l;
        fullscreenHandler()
    }
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === jQuery(".orientation-msg-container").attr("data-orientation") ? (jQuery(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : (jQuery(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === jQuery(".orientation-msg-container").attr("data-orientation") ? (jQuery(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : (jQuery(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, d, h) {
    var f = new createjs.Bitmap(a),
        b = new createjs.Shape;
    d && h ? b.graphics.beginFill("#fff").drawRect(-d / 2, -h / 2, d, h) : b.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    f.hitArea = b;
    return f
}

function createSprite(a, d, h, f, b, l) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-h, -f, b, l);
    a.hitArea = d;
    return a
}

function roundDecimal(a, d) {
    var h = Math.pow(10, d);
    return Math.round(h * a) / h
}

function randomFloatBetween(a, d, h) {
    "undefined" === typeof h && (h = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(h))
}

function shuffle(a) {
    for (var d = a.length, h, f; 0 !== d;) f = Math.floor(Math.random() * d), --d, h = a[d], a[d] = a[f], a[f] = h;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d);
    var h = "";
    h = 10 > d ? h + ("0" + d + ":") : h + (d + ":");
    return 10 > a ? h + ("0" + a) : h + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, d) {
    var h = getBounds(a, .9);
    var f = getBounds(d, .98);
    return calculateIntersection(h, f)
}

function calculateIntersection(a, d) {
    var h, f, b, l;
    var k = a.x + (h = a.width / 2);
    var g = a.y + (f = a.height / 2);
    var e = d.x + (b = d.width / 2);
    var n = d.y + (l = d.height / 2);
    k = Math.abs(k - e) - (h + b);
    g = Math.abs(g - n) - (f + l);
    return 0 > k && 0 > g ? (k = Math.min(Math.min(a.width, d.width), -k), g = Math.min(Math.min(a.height, d.height), -g), {
        x: Math.max(a.x, d.x),
        y: Math.max(a.y, d.y),
        width: k,
        height: g,
        rect1: a,
        rect2: d
    }) : null
}

function getBounds(a, d) {
    var h = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        h.x2 = -Infinity;
        h.y2 = -Infinity;
        var f = a.children,
            b = f.length,
            l;
        for (l = 0; l < b; l++) {
            var k = getBounds(f[l], 1);
            k.x < h.x && (h.x = k.x);
            k.y < h.y && (h.y = k.y);
            k.x + k.width > h.x2 && (h.x2 = k.x + k.width);
            k.y + k.height > h.y2 && (h.y2 = k.y + k.height)
        }
        Infinity == h.x && (h.x = 0);
        Infinity == h.y && (h.y = 0);
        Infinity == h.x2 && (h.x2 = 0);
        Infinity == h.y2 && (h.y2 = 0);
        h.width = h.x2 - h.x;
        h.height = h.y2 - h.y;
        delete h.x2;
        delete h.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            b =
                a.sourceRect || a.image;
            l = b.width * d;
            var g = b.height * d
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                b = a.spriteSheet.getFrame(a.currentFrame);
                l = b.rect.width;
                g = b.rect.height;
                f = b.regX;
                var e = b.regY
            } else h.x = a.x || 0, h.y = a.y || 0;
        else h.x = a.x || 0, h.y = a.y || 0;
        f = f || 0;
        l = l || 0;
        e = e || 0;
        g = g || 0;
        h.regX = f;
        h.regY = e;
        b = a.localToGlobal(0 - f, 0 - e);
        k = a.localToGlobal(l - f, g - e);
        l = a.localToGlobal(l - f, 0 - e);
        f = a.localToGlobal(0 - f, g - e);
        h.x =
            Math.min(Math.min(Math.min(b.x, k.x), l.x), f.x);
        h.y = Math.min(Math.min(Math.min(b.y, k.y), l.y), f.y);
        h.width = Math.max(Math.max(Math.max(b.x, k.x), l.x), f.x) - h.x;
        h.height = Math.max(Math.max(Math.max(b.y, k.y), l.y), f.y) - h.y
    }
    return h
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, false)
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
        var f = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in f ? document.body.className = f[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function playSound(a, d, h) {
    return false === DISABLE_SOUND_MOBILE || false === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(h), s_aSounds[a]) : null
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

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), h = 0; h < d.length; h++) {
        var f = d[h].split("=");
        if (f[0] == a) return f[1]
    }
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
        h = d.length;
    2 < h && (a = d[h - 2] + "." + d[h - 1]);
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
        } catch (h) {
            d = true
        }
        return {
            topFrame: a,
            err: d
        }
    },
    getBestPageUrl = function(a) {
        var d = a.topFrame,
            h = "";
        if (a.err) try {
            try {
                h = window.top.location.href
            } catch (b) {
                var f = window.location.ancestorOrigins;
                h = f[f.length - 1]
            }
        } catch (b) {
            h = d.document.referrer
        } else h = d.location.href;
        return h
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);

function CSpriteLibrary() {
    var a, d, h, f, b, l;
    this.init = function(k, g, e) {
        h = d = 0;
        f = k;
        b = g;
        l = e;
        a = {}
    };
    this.addSprite = function(b, g) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: g,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        b.call(l)
    };
    this._onSpriteLoaded = function() {
        f.call(l);
        ++h === d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.onerror = function() {
                s_oMain.onImageLoadError(jQuery(this).attr("src"))
            }, a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1280,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 90,
    EDGEBOARD_Y = 95,
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = false,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_GAME_WAITING_FOR_BET = 0,
    STATE_GAME_SPINNING = 1,
    STATE_GAME_SHOW_WINNER = 2,
    STATE_DISTRIBUTE_FICHES = 3,
    ON_SHOW_BET_ON_TABLE = 0,
    ON_SHOW_ENLIGHT = 1,
    ON_HIDE_ENLIGHT = 2,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_CONTROLLER_END = 6,
    ON_CONTROLLER_REMOVE = 7,
    ON_CONTROLLER_ROLL = 8,
    COLOR_RED = "red",
    COLOR_BLACK = "black",
    COLOR_ZERO = "zero",
    TOTAL_MONEY, NUM_FICHE_VALUES = 6,
    NUMBERS_TO_BET = 37,
    NUM_FICHES = 7,
    MIN_BET, MAX_BET, WIN_OCCURRENCE, TIME_WAITING_BET, TIME_SHOW_WINNER, TIME_FICHES_MOV = 1500,
    NUM_MASK_BALL_SPIN_FRAMES = 100,
    NUM_BALL_SPIN_FRAMES = 200,
    NUM_HAND_FOR_ADS, WIDTH_CELL_NUMBER, HEIGHT_CELL_NUMBER, ROW_HISTORY = 19,
    FONT1 = "MainFont",
    FONT2 = "MainFont",
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS;

function CRouletteSettings() {
    var a, d, h, f, b;
    this._init = function() {
        var b = s_oSpriteLibrary.getSprite("hit_area_number");
        WIDTH_CELL_NUMBER = b.width;
        HEIGHT_CELL_NUMBER = b.height;
        this._initAttachFiches();
        a = [50, 100, 1000, 10000, 100000, 1000000, 10000000];
        h = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        d = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        f = [
            []
        ];
        f[0][0] = 70;
        f[0][1] = 8;
        f[0][2] = 54;
        f[0][3] = 76;
        f[0][4] = 59;
        f[0][5] = 19;
        f[0][6] = 43;
        f[0][7] = 86;
        f[0][8] = 27;
        f[0][9] = 96;
        f[0][10] = 21;
        f[0][11] = 32;
        f[0][12] = 81;
        f[0][13] = 38;
        f[0][14] = 3;
        f[0][15] =
            65;
        f[0][16] = 13;
        f[0][17] = 48;
        f[0][18] = 92;
        f[0][19] = 62;
        f[0][20] = 5;
        f[0][21] = 57;
        f[0][22] = 95;
        f[0][23] = 24;
        f[0][24] = 16;
        f[0][25] = 51;
        f[0][26] = 73;
        f[0][27] = 40;
        f[0][28] = 84;
        f[0][29] = 89;
        f[0][30] = 30;
        f[0][31] = 0;
        f[0][32] = 68;
        f[0][33] = 11;
        f[0][34] = 46;
        f[0][35] = 78;
        f[0][36] = 35
    };
    this._initAttachFiches = function() {
        b = [];
        b.bet_0 = {
            x: 53,
            y: 117
        };
        for (var a = 127, k = 196, g = 1; 37 > g; g++) b["bet_" + g] = {
            x: a,
            y: k
        }, 0 === g % 3 ? (a += WIDTH_CELL_NUMBER + 3, k = 196) : k -= HEIGHT_CELL_NUMBER + 3;
        b.bet_0_1 = {
            x: 97,
            y: 195
        };
        b.bet_0_2 = {
            x: 97,
            y: 120
        };
        b.bet_0_3 = {
            x: 97,
            y: 45
        };
        a =
            159;
        k = 194;
        for (var e = 1; 34 > e; e++) b["bet_" + e + "_" + (e + 3)] = {
            x: a,
            y: k
        }, 0 === e % 3 ? (a += WIDTH_CELL_NUMBER + 3, k = 194) : k -= HEIGHT_CELL_NUMBER + 3;
        a = 128;
        k = 157;
        for (e = g = 1; 25 > e; e++) b["bet_" + g + "_" + (g + 1)] = {
            x: a,
            y: k
        }, 0 === e % 2 ? (a += WIDTH_CELL_NUMBER + 3, k = 157, g += 2) : (k -= HEIGHT_CELL_NUMBER + 3, g++);
        b.bet_0_1_2 = {
            x: 96,
            y: 158
        };
        b.bet_0_2_3 = {
            x: 96,
            y: 84
        };
        a = 128;
        k = 232;
        for (e = g = 1; 13 > e; e++) b["bet_" + g + "_" + (g + 1) + "_" + (g + 2)] = {
            x: a,
            y: k
        }, a += WIDTH_CELL_NUMBER + 3, g += 3;
        b.bet_0_1_2_3 = {
            x: 96,
            y: 232
        };
        k = a = 158;
        for (e = g = 1; 23 > e; e++) b["bet_" + g + "_" + (g + 1) + "_" + (g + 3) + "_" +
            (g + 4)] = {
            x: a,
            y: k
        }, 0 === e % 2 ? (a += WIDTH_CELL_NUMBER + 3, k = 157, g += 2) : (k -= HEIGHT_CELL_NUMBER + 3, g++);
        a = 158;
        k = 232;
        for (e = g = 1; 12 > e; e++) b["bet_" + g + "_" + (g + 1) + "_" + (g + 2) + "_" + (g + 3) + "_" + (g + 4) + "_" + (g + 5)] = {
            x: a,
            y: k
        }, g += 3, a += WIDTH_CELL_NUMBER + 3;
        b.col1 = {
            x: 872,
            y: 194
        };
        b.col2 = {
            x: 872,
            y: 120
        };
        b.col3 = {
            x: 872,
            y: 46
        };
        b.first12 = {
            x: 220,
            y: 289
        };
        b.second12 = {
            x: 469,
            y: 289
        };
        b.third12 = {
            x: 717,
            y: 289
        };
        b.first18 = {
            x: 159,
            y: 400
        };
        b.even = {
            x: 281,
            y: 400
        };
        b.black = {
            x: 409,
            y: 400
        };
        b.red = {
            x: 533,
            y: 400
        };
        b.odd = {
            x: 656,
            y: 400
        };
        b.second18 = {
            x: 778,
            y: 400
        };
        b.oDealerWin = {
            x: CANVAS_WIDTH / 2,
            y: -232
        };
        b.oReceiveWin = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT + 100
        }
    };
    this.generateFichesPileByIndex = function(b) {
        var k = [],
            g = a.length - 1,
            e = a[g];
        do {
            var d = b % e;
            d = roundDecimal(d, 1);
            b = roundDecimal(b / e, 1);
            b = Math.floor(b);
            for (var c = 0; c < b; c++) k.push(this.getFicheIndexByValue(e));
            g--;
            e = a[g];
            b = d
        } while (0 < d && -1 < g);
        return k
    };
    this.getNumbersForButton = function(b) {
        switch (b) {
            case "col1":
                var a = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
                break;
            case "col2":
                a = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
                break;
            case "col3":
                a = [3, 6,
                    9, 12, 15, 18, 21, 24, 27, 30, 33, 36
                ];
                break;
            case "first12":
                a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                break;
            case "second12":
                a = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                break;
            case "third12":
                a = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
                break;
            case "first18":
                a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
                break;
            case "second18":
                a = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
                break;
            case "even":
                a = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
                break;
            case "black":
                a = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
                break;
            case "red":
                a = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
                break;
            case "odd":
                a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
                break;
            case "oBetVoisinsZero":
                a = [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25];
                break;
            case "oBetTier":
                a = [27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33];
                break;
            case "oBetOrphelins":
                a = [1, 6, 9, 14, 17, 20, 31, 34]
        }
        return a
    };
    this.getBetMultiplierForButton = function(b) {
        switch (b) {
            case "oBetFirstRow":
                var a = 12;
                break;
            case "oBetSecondRow":
                a = 12;
                break;
            case "oBetThirdRow":
                a = 12;
                break;
            case "oBetFirst12":
                a =
                    12;
                break;
            case "oBetSecond12":
                a = 12;
                break;
            case "oBetThird12":
                a = 12;
                break;
            case "oBetFirst18":
                a = 18;
                break;
            case "oBetSecond18":
                a = 18;
                break;
            case "oBetEven":
                a = 18;
                break;
            case "oBetBlack":
                a = 18;
                break;
            case "oBetRed":
                a = 18;
                break;
            case "oBetOdd":
                a = 18;
                break;
            case "oBetVoisinsZero":
                a = 17;
                break;
            case "oBetTier":
                a = 12;
                break;
            case "oBetOrphelins":
                a = 8;
                break;
            case "oBetFinalsBet":
                a = 4
        }
        return a
    };
    this.getBetWinForButton = function(b) {
        switch (b) {
            case "oBetFirstRow":
                var a = 3;
                break;
            case "oBetSecondRow":
                a = 3;
                break;
            case "oBetThirdRow":
                a = 3;
                break;
            case "oBetFirst12":
                a = 3;
                break;
            case "oBetSecond12":
                a = 3;
                break;
            case "oBetThird12":
                a = 3;
                break;
            case "oBetFirst18":
                a = 2;
                break;
            case "oBetSecond18":
                a = 2;
                break;
            case "oBetEven":
                a = 2;
                break;
            case "oBetBlack":
                a = 2;
                break;
            case "oBetRed":
                a = 2;
                break;
            case "oBetOdd":
                a = 2;
                break;
            case "oBetVoisinsZero":
                a = 2;
                break;
            case "oBetTier":
                a = 3;
                break;
            case "oBetOrphelins":
                a = 4;
                break;
            case "oBetFinalsBet":
                a = 4
        }
        return a
    };
    this.getNumFichesPerBet = function(a) {
        switch (a) {
            case "oBetVoisinsZero":
                var b = 9;
                break;
            case "oBetTier":
                b = 6;
                break;
            case "oBetOrphelins":
                b =
                    5
        }
        return b
    };
    this.getFicheValues = function(b) {
        return a[b]
    };
    this.getFicheIndexByValue = function(b) {
        for (var d = 0, g = 0; g < a.length; g++)
            if (b === a[g]) {
                d = g;
                break
            }
        return d
    };
    this.getColorNumber = function(b) {
        var a;
        for (a = 0; a < h.length; a++)
            if (h[a] === b) return COLOR_BLACK;
        for (a = 0; a < d.length; a++)
            if (d[a] === b) return COLOR_RED;
        return COLOR_ZERO
    };
    this.getFrameForBallSpin = function(a, b) {
        return f[a][b]
    };
    this.getAttachOffset = function(a) {
        return b[a]
    };
    this._init()
}

function CFichesController(a) {
    var d, h, f, b, l, k;
    this._init = function(a) {
        k = a;
        this.reset()
    };
    this.reset = function() {
        this._removeAllFichesOnTable();
        d = [];
        h = [];
        f = [];
        b = [];
        l = []
    };
    this.setFicheOnTable = function(a, e, d) {
        this.addFicheOnTable(a, e, d);
        b.push({
            tag: "oBetSingle",
            num: 1
        })
    };
    this.addFicheOnTable = function(a, b, k) {
        void 0 === d[b] && (d[b] = 0);
        var c = s_oGameSettings.getFicheValues(a);
        d[b] += c;
        d[b] = roundDecimal(d[b], 1);
        c = s_oGameSettings.generateFichesPileByIndex(d[b]);
        c.sort(function(b, a) {
            return b - a
        });
        this._removeFichesPile(h[b]);
        h[b] = [];
        var e = s_oGameSettings.getAttachOffset(b),
            g = e.x;
        e = e.y;
        for (var l = 0; l < c.length; l++) k.push(this._attachFichesPile(c[l], b, g, e)), e -= 5;
        f.push({
            index: b,
            value: a
        })
    };
    this._attachFichesPile = function(b, a, d, c) {
        b = new CFiche(d, c, b, k);
        h[a].push(b);
        l.push(b);
        return b
    };
    this.createPileForVoisinZero = function(a, e) {
        this.addFicheOnTable(a, "bet_0_2_3", e);
        this.addFicheOnTable(a, "bet_0_2_3", e);
        this.addFicheOnTable(a, "bet_4_7", e);
        this.addFicheOnTable(a, "bet_12_15", e);
        this.addFicheOnTable(a, "bet_18_21", e);
        this.addFicheOnTable(a,
            "bet_19_22", e);
        this.addFicheOnTable(a, "bet_25_26_28_29", e);
        this.addFicheOnTable(a, "bet_25_26_28_29", e);
        this.addFicheOnTable(a, "bet_32_35", e);
        b.push({
            tag: "oBetVoisinsZero",
            num: 9
        })
    };
    this.createPileForTier = function(a, e) {
        this.addFicheOnTable(a, "bet_5_8", e);
        this.addFicheOnTable(a, "bet_10_11", e);
        this.addFicheOnTable(a, "bet_13_16", e);
        this.addFicheOnTable(a, "bet_23_24", e);
        this.addFicheOnTable(a, "bet_27_30", e);
        this.addFicheOnTable(a, "bet_33_36", e);
        b.push({
            tag: "oBetTier",
            num: 6
        })
    };
    this.createPileForOrphelins =
        function(a, e) {
            this.addFicheOnTable(a, "bet_1", e);
            this.addFicheOnTable(a, "bet_6_9", e);
            this.addFicheOnTable(a, "bet_14_17", e);
            this.addFicheOnTable(a, "bet_17_20", e);
            this.addFicheOnTable(a, "bet_31_34", e);
            b.push({
                tag: "oBetOrphelins",
                num: 5
            })
        };
    this.createPileForMultipleNumbers = function(a, e, d) {
        for (var c = 0; c < e.length; c++) this.addFicheOnTable(a, "bet_" + e[c], d);
        b.push({
            tag: "oBetMultiple",
            num: e.length
        })
    };
    this._removeAllFichesOnTable = function() {
        if (l)
            for (var a = 0; a < l.length; a++) k.contains(l[a].getSprite()) && k.removeChild(l[a].getSprite())
    };
    this._removeFichesPile = function(a) {
        for (var b in a) k.removeChild(a[b].getSprite())
    };
    this.clearLastBet = function() {
        if (0 === b.length) return 0;
        for (var a = b.pop().num, e, k = 0; k < a; k++) {
            var c = f.pop();
            e = s_oGameSettings.getFicheValues(c.value);
            d[c.index] -= e;
            d[c.index] = roundDecimal(d[c.index], 1);
            var l = s_oGameSettings.generateFichesPileByIndex(d[c.index]);
            l.sort(function(a, b) {
                return a - b
            });
            this._removeFichesPile(h[c.index]);
            h[c.index] = [];
            var w = s_oGameSettings.getAttachOffset(c.index),
                v = w.x;
            w = w.y;
            for (var u = 0; u < l.length; u++) this._attachFichesPile(l[u],
                c.index, v, w), w -= 5
        }
        return e * a
    };
    this.clearAllBets = function() {
        for (var a = f.length, b = 0; b < a; b++) this.clearLastBet()
    };
    this._init(a)
}
TEXT_MONEY = "موجودی شما";
TEXT_CUR_BET = "مقدار شرط";
TEXT_PLAY = "بازی";
TEXT_BET = "شرط";
TEXT_COIN = "مبلغ";
TEXT_MIN_BET = "حداقل شرط";
TEXT_MAX_BET = "حداکثر شرط";
TEXT_SPIN = "بچرخ";
TEXT_EXIT = "خروج";
TEXT_RECHARGE = "شارژ حساب";
TEXT_VOISINS_ZERO = "شرط با ریسک پایین";
TEXT_TIER = "شرط با ریسک بالا";
TEXT_ORPHELINS = "شرط روی خط ها";
TEXT_NEIGHBORS = "شرط روی دسته ها";
TEXT_FINALSBET = "شرط روی اعداد";
TEXT_REBET = "شرط دوباره";
TEXT_WIN = "تبریک ! برنده شدید";
TEXT_HISTORY = "تاریخچه";
TEXT_YOU_WIN = "شما برنده شدید";
TEXT_YOU_LOSE = "شما باختید";
TEXT_CURRENCY = " T ";
TEXT_ERROR_NO_MONEY_MSG = "موجودی شما برای این شرط کافی نمیباشید";
TEXT_ERROR_MAX_BET_REACHED = "حداکثر شرط";
TEXT_ERROR_MIN_BET = "شرط شما کمتر از مقدار تعیین شده است !";
TEXT_NO_MONEY = "موجودی شما کافی نیست !";
TEXT_RECHARGE_MSG = "لطفا برای ادامه ی بازی حساب خود را شارژ کنید !";
var TEXT_CREDITS_DEVELOPED = "طراحی توسط",
    TEXT_LINK = "http://www.tkstar.ir";
TEXT_CONGRATULATIONS = "تبریک میگوییم";

function CPreloader() {
    var a, d, h, f, b, l;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", self.images_location + "progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        l = new createjs.Container;
        s_oStage.addChild(l)
    };
    this.unload = function() {
        l.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        l.addChild(k);
        f = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
        f.x = 400;
        f.y = CANVAS_HEIGHT - 140;
        l.addChild(f);
        a = 476;
        b = new createjs.Shape;
        b.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(400, CANVAS_HEIGHT - 140, 1, 30);
        l.addChild(b);
        f.mask = b;
        d = new createjs.Text("0%", "30px " + FONT1, "#fff");
        d.x = 450;
        d.y = CANVAS_HEIGHT - 140;
        d.textAlign = "center";
        d.textBaseline = "middle";
        l.addChild(d);
        h = new createjs.Text("0%", "30px " +
            FONT2, "#fff");
        h.x = CANVAS_WIDTH + 200;
        h.y = CANVAS_HEIGHT + 140;
        h.textAlign = "center";
        h.textBaseline = "middle";
        l.addChild(h)
    };
    this.refreshLoader = function(f) {
        d.text = f + "%";
        h.text = f + "%";
        f = Math.floor(f * a / 100);
        b.graphics.clear();
        b.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(400, CANVAS_HEIGHT - 140, f, 30)
    };
    this._init()
}

function CMain(a) {
    var d, h = 0,
        f = 0,
        b = STATE_LOADING,
        l, k;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        false === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(FPS);
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = true);
        s_oSpriteLibrary = new CSpriteLibrary;
        l = new CPreloader;
    };
    this.soundLoaded = function() {
        h++;
        h === f && (l.unload(), this.gotoMenu())
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: self.sounds_location,
            filename: "chip",
            loop: false,
            volume: 1,
            ingamename: "chip"
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
            filename: "fiche_collect",
            loop: false,
            volume: 1,
            ingamename: "fiche_collect"
        });
        a.push({
            path: self.sounds_location,
            filename: "wheel_sound",
            loop: true,
            volume: 1,
            ingamename: "wheel_sound"
        });
        a.push({
            path: self.sounds_location,
            filename: "win",
            loop: false,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: self.sounds_location,
            filename: "lose",
            loop: false,
            volume: 1,
            ingamename: "lose"
        });
        f += a.length;
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
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded,
            this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("bg_game", self.images_location + "bg_game.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("hit_area_0", self.images_location + "hit_area_0.png");
        s_oSpriteLibrary.addSprite("hit_area_color", self.images_location + "hit_area_color.png");
        s_oSpriteLibrary.addSprite("hit_area_horizontal", self.images_location + "hit_area_horizontal.png");
        s_oSpriteLibrary.addSprite("hit_area_number", self.images_location + "hit_area_number.png");
        s_oSpriteLibrary.addSprite("hit_area_couple_horizontal", self.images_location + "hit_area_couple_horizontal.png");
        s_oSpriteLibrary.addSprite("hit_area_couple_vertical", self.images_location + "hit_area_couple_vertical.png");
        s_oSpriteLibrary.addSprite("hit_area_small", self.images_location + "hit_area_small.png");
        s_oSpriteLibrary.addSprite("hit_area_horizontal_half", self.images_location + "hit_area_horizontal_half.png");
        s_oSpriteLibrary.addSprite("chip_box", self.images_location + "chip_box.png");
        s_oSpriteLibrary.addSprite("but_bets", self.images_location + "but_bets.png");
        s_oSpriteLibrary.addSprite("but_bg", self.images_location + "but_bg.png");
        s_oSpriteLibrary.addSprite("but_clear_all", self.images_location + "but_clear_all.png");
        s_oSpriteLibrary.addSprite("but_clear_last", self.images_location + "but_clear_last.png");
        s_oSpriteLibrary.addSprite("but_rebet", self.images_location + "but_rebet.png");
        s_oSpriteLibrary.addSprite("but_play", self.images_location + "but_play.png");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("logo_tkstar", self.images_location + "logo_tkstar.png");
        s_oSpriteLibrary.addSprite("but_credits", self.images_location + "but_credits.png");
        s_oSpriteLibrary.addSprite("history_bg", self.images_location + "history_bg.png");
        s_oSpriteLibrary.addSprite("show_number_panel", self.images_location + "show_number_panel.png");
        s_oSpriteLibrary.addSprite("show_number_bg", self.images_location + "show_number_bg.png");
        s_oSpriteLibrary.addSprite("ball", self.images_location + "ball.png");
        s_oSpriteLibrary.addSprite("enlight_0", self.images_location + "enlight_0.png");
        s_oSpriteLibrary.addSprite("enlight_color", self.images_location + "enlight_color.png");
        s_oSpriteLibrary.addSprite("enlight_horizontal", self.images_location + "enlight_horizontal.png");
        s_oSpriteLibrary.addSprite("enlight_number", self.images_location + "enlight_number.png");
        s_oSpriteLibrary.addSprite("enlight_horizontal_half", self.images_location + "enlight_horizontal_half.png");
        s_oSpriteLibrary.addSprite("select_fiche", self.images_location + "select_fiche.png");
        s_oSpriteLibrary.addSprite("spin_but", self.images_location + "spin_but.png");
        s_oSpriteLibrary.addSprite("placeholder", self.images_location + "placeholder.png");
        s_oSpriteLibrary.addSprite("circle_red", self.images_location + "circle_red.png");
        s_oSpriteLibrary.addSprite("circle_green", self.images_location + "circle_green.png");
        s_oSpriteLibrary.addSprite("circle_black", self.images_location + "circle_black.png");
        s_oSpriteLibrary.addSprite("final_bet_bg", self.images_location + "final_bet_bg.png");
        s_oSpriteLibrary.addSprite("neighbor_bg", self.images_location + "neighbor_bg.jpg");
        s_oSpriteLibrary.addSprite("neighbor_enlight", self.images_location + "neighbor_enlight.png");
        s_oSpriteLibrary.addSprite("hitarea_neighbor", self.images_location + "hitarea_neighbor.png");
        s_oSpriteLibrary.addSprite("bg_wheel", self.images_location + "bg_wheel.jpg");
        s_oSpriteLibrary.addSprite("logo_game_0", self.images_location + "logo_game_0.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        s_oSpriteLibrary.addSprite("board_roulette", self.images_location + "board_roulette.jpg");
        for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, self.images_location + "fiche_" + a + ".png");
        for (a = 0; a < NUM_MASK_BALL_SPIN_FRAMES; a++) s_oSpriteLibrary.addSprite("wheel_handle_" + a, self.images_location + "mask_ball_spin/wheel_handle_" + a + ".png");
        for (a = 0; a < NUM_MASK_BALL_SPIN_FRAMES; a++) s_oSpriteLibrary.addSprite("wheel_numbers_" + a, self.images_location + "wheel_anim/wheel_numbers_" + a + ".png");
        f += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        h++;
        l.refreshLoader(Math.floor(h / f * 100));
        h === f && (l.unload(), this.gotoMenu())
    };
    this._onAllImagesLoaded = function() {};
    this.onImageLoadError = function(a) {};
    this.preloaderReady = function() {
        this._loadImages();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || this._initSounds();
        d = true
    };
    this.gotoMenu = function() {
        new CMenu;
        b = STATE_MENU
    };
    this.gotoGame = function() {
        k = new CGame(g);
        b = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        b = STATE_HELP
    };
    this.stopUpdate = function() {
        d = false;
        createjs.Ticker.paused = true;
        jQuery("#block_game").css("display", "block");
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || Howler.mute(true)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = true;
        createjs.Ticker.paused = false;
        jQuery("#block_game").css("display", "none");
        (false === DISABLE_SOUND_MOBILE || false === s_bMobile) && s_bAudioActive && Howler.mute(false)
    };
    this._update = function(a) {
        if (false !== d) {
            var e = (new Date).getTime();
            s_iTimeElaps = e - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = e;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            b === STATE_GAME && k.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var g = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    SHOW_CREDITS = g.show_credits;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = true,
    s_bFullscreen = false,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain = null,
    s_oSpriteLibrary, s_aSounds;

function CTextButton(a, d, h, f, b, l, k, g) {
    var e, n, c, p, w, v, u, q, m, r;
    this._init = function(a, b, g, d, f, k, h, l) {
        e = false;
        p = [];
        w = [];
        r = createBitmap(g);
        n = g.width;
        c = g.height;
        var t = Math.ceil(h / 20);
        q = new createjs.Text(d, h + "px " + f, "#000000");
        var x = q.getBounds();
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.x = g.width / 2 + t;
        q.y = Math.floor(g.height / 2) + x.height / 3 + t;
        m = new createjs.Text(d, h + "px " + f, k);
        m.textAlign = "center";
        m.textBaseline = "alphabetic";
        m.x = g.width / 2;
        m.y = Math.floor(g.height / 2) + x.height / 3;
        u = new createjs.Container;
        u.x = a;
        u.y = b;
        u.regX = g.width / 2;
        u.regY = g.height / 2;
        s_bMobile || (u.cursor = "pointer");
        u.addChild(r, q, m);
        false !== l && s_oStage.addChild(u);
        this._initListener()
    };
    this.unload = function() {
        u.off("mousedown");
        u.off("pressup");
        s_oStage.removeChild(u)
    };
    this.setVisible = function(a) {
        u.visible = a
    };
    this.setAlign = function(a) {
        m.textAlign = a;
        q.textAlign = a
    };
    this.enable = function() {
        e = false;
        r.filters = [];
        r.cache(0, 0, n, c)
    };
    this.disable = function() {
        e = true;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        r.filters = [new createjs.ColorMatrixFilter(a)];
        r.cache(0, 0, n, c)
    };
    this._initListener = function() {
        u.on("mousedown", this.buttonDown);
        u.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        p[a] = b;
        w[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, e) {
        p[a] = b;
        w[a] = c;
        v = e
    };
    this.buttonRelease = function() {
        e || (playSound("click", 1, false), u.scaleX = 1, u.scaleY = 1, p[ON_MOUSE_UP] && p[ON_MOUSE_UP].call(w[ON_MOUSE_UP], v))
    };
    this.buttonDown = function() {
        e || (u.scaleX = .9, u.scaleY = .9, p[ON_MOUSE_DOWN] && p[ON_MOUSE_DOWN].call(w[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        u.x = a;
        u.y = b
    };
    this.changeText = function(a) {
        m.text = a;
        q.text = a
    };
    this.setX = function(a) {
        u.x = a
    };
    this.setY = function(a) {
        u.y = a
    };
    this.getButtonImage = function() {
        return u
    };
    this.getX = function() {
        return u.x
    };
    this.getY = function() {
        return u.y
    };
    this.getSprite = function() {
        return u
    };
    this._init(a, d, h, f, b, l, k, g);
    return this
}

function CGfxButton(a, d, h, f) {
    var b, l, k, g, e, n, c;
    this._init = function(a, d, f) {
        b = false;
        g = [];
        e = [];
        c = createBitmap(f);
        l = f.width;
        k = f.height;
        c.x = a;
        c.y = d;
        c.regX = f.width / 2;
        c.regY = f.height / 2;
        s_bMobile || (c.cursor = "pointer");
        p.addChild(c);
        this._initListener()
    };
    this.unload = function() {
        c.off("mousedown", this.buttonDown);
        c.off("pressup", this.buttonRelease);
        false === s_bMobile && (c.off("rollover", this.mouseOver), c.off("rollout", this.mouseOut));
        p.removeChild(c)
    };
    this.setVisible = function(a) {
        c.visible = a
    };
    this.enable = function() {
        b = false;
        c.filters = [];
        c.cache(0, 0, l, k)
    };
    this.disable = function() {
        b = true;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        c.filters = [new createjs.ColorMatrixFilter(a)];
        c.cache(0, 0, l, k)
    };
    this._initListener = function() {
        c.on("mousedown", this.buttonDown);
        c.on("pressup", this.buttonRelease);
        false === s_bMobile && (c.on("rollover", this.mouseOver), c.on("rollout", this.mouseOut))
    };
    this.addEventListener = function(a, b, c) {
        g[a] = b;
        e[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        g[a] = b;
        e[a] = c;
        n = d
    };
    this.buttonRelease = function() {
        b || (playSound("click", 1, false), c.scaleX = 1, c.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(e[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        b || (c.scaleX = .9, c.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], n))
    };
    this.mouseOver = function() {
        g[ON_MOUSE_OVER] && g[ON_MOUSE_OVER].call(e[ON_MOUSE_OVER], n)
    };
    this.mouseOut = function() {
        g[ON_MOUSE_OUT] && g[ON_MOUSE_OUT].call(e[ON_MOUSE_OUT], n)
    };
    this.setPosition = function(a, b) {
        c.x = a;
        c.y = b
    };
    this.rotate = function(a) {
        c.rotation =
            a
    };
    this.setX = function(a) {
        c.x = a
    };
    this.setY = function(a) {
        c.y = a
    };
    this.getButtonImage = function() {
        return c
    };
    this.getX = function() {
        return c.x
    };
    this.getY = function() {
        return c.y
    };
    var p = f;
    this._init(a, d, h);
    return this
}

function CFicheBut(a, d, h) {
    var f, b, l, k, g, e, n = [],
        c, p, w;
    this._init = function(a, d, h) {
        b = false;
        p = new createjs.Container;
        s_oStage.addChild(p);
        f = false;
        g = [];
        e = [];
        c = createBitmap(h);
        c.x = a;
        c.y = d;
        c.regX = h.width / 2;
        c.regY = h.height / 2;
        s_bMobile || (c.cursor = "pointer");
        p.addChild(c);
        l = h.width;
        k = h.height;
        h = s_oSpriteLibrary.getSprite("select_fiche");
        w = createBitmap(h);
        w.x = a - 2;
        w.y = d - 2;
        w.regX = h.width / 2;
        w.regY = h.height / 2;
        p.addChild(w);
        w.visible = f;
        this._initListener()
    };
    this.unload = function() {
        c.off("mousedown", this.buttonDown);
        c.off("pressup",
            this.buttonRelease);
        s_oStage.removeChild(p)
    };
    this.select = function() {
        f = true;
        w.visible = f
    };
    this.deselect = function() {
        f = false;
        w.visible = f
    };
    this.enable = function() {
        b = false;
        c.filters = [];
        c.cache(0, 0, l, k)
    };
    this.disable = function() {
        b = true;
        var a = (new createjs.ColorMatrix).adjustSaturation(-90);
        c.filters = [new createjs.ColorMatrixFilter(a)];
        c.cache(0, 0, l, k)
    };
    this.setVisible = function(a) {
        c.visible = a
    };
    this._initListener = function() {
        c.on("mousedown", this.buttonDown);
        c.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a,
        b, c) {
        g[a] = b;
        e[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        g[a] = b;
        e[a] = c;
        n = d
    };
    this.buttonRelease = function() {
        b || (playSound("click", 1, false), c.scaleX = 1, c.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(e[ON_MOUSE_UP], n), f = !f, w.visible = f)
    };
    this.buttonDown = function() {
        b || (c.scaleX = .9, c.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], n))
    };
    this.setPosition = function(a, b) {
        c.x = a;
        c.y = b
    };
    this.setX = function(a) {
        c.x = a
    };
    this.setY = function(a) {
        c.y = a
    };
    this.getButtonImage = function() {
        return c
    };
    this.getX = function() {
        return c.x
    };
    this.getY = function() {
        return c.y
    };
    this._init(a, d, h)
}

function CBetTableButton(a, d, h, f, b, l) {
    var k, g, e, n, c, p, w, v, u;
    this._init = function(a, b, c, d, f, h) {
        k = h;
        w = d;
        g = [];
        e = [];
        u = f;
        n = createBitmap(c);
        n.x = a;
        n.y = b;
        n.regX = c.width / 2;
        n.regY = c.height / 2;
        s_bMobile || (n.cursor = "pointer");
        this._initListener();
        u.addChild(n);
        v = [];
        v = w.split("_");
        1 < v.length ? v.splice(0, 1) : this._assignNumber();
        this._assignBetMultiplier()
    };
    this.unload = function() {
        n.off("mousedown", this.buttonDown);
        n.off("pressup", this.buttonRelease);
        n.off("rollover", this.mouseOver);
        n.off("rollout", this.mouseOut);
        u.removeChild(n)
    };
    this.setVisible = function(a) {
        n.visible = a
    };
    this._assignNumber = function() {
        v = s_oGameSettings.getNumbersForButton(w)
    };
    this._assignBetMultiplier = function() {
        switch (v.length) {
            case 0:
                c = s_oGameSettings.getBetMultiplierForButton(w);
                p = s_oGameSettings.getBetWinForButton(w);
                break;
            default:
                c = v.length, p = Math.floor(36 / v.length)
        }
    };
    this._initListener = function() {
        n.on("mousedown", this.buttonDown);
        n.on("pressup", this.buttonRelease);
        n.on("rollover", this.mouseOver);
        n.on("rollout", this.mouseOut)
    };
    this.addEventListener = function(a,
        b, c) {
        g[a] = b;
        e[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        g[a] = b;
        e[a] = c
    };
    this.buttonRelease = function() {
        playSound("click", 1, false);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(e[ON_MOUSE_UP], {
            numbers: v,
            bet_mult: c,
            bet_win: p,
            name: w,
            num_fiches: 1
        }, false)
    };
    this.buttonDown = function() {
        g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN], {
            button: w,
            numbers: v,
            bet_mult: c,
            bet_win: p,
            num_fiches: 1
        }, false)
    };
    this.mouseOver = function() {
        g[ON_MOUSE_OVER] && (k ? g[ON_MOUSE_OVER].call(e[ON_MOUSE_OVER], {
                numbers: v,
                enlight: w
            }) :
            g[ON_MOUSE_OVER].call(e[ON_MOUSE_OVER], {
                numbers: v
            }))
    };
    this.mouseOut = function() {
        g[ON_MOUSE_OUT] && (k ? g[ON_MOUSE_OUT].call(e[ON_MOUSE_OUT], {
            numbers: v,
            enlight: w
        }) : g[ON_MOUSE_OUT].call(e[ON_MOUSE_OUT], {
            numbers: v
        }))
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    this.setX = function(a) {
        n.x = a
    };
    this.setY = function(a) {
        n.y = a
    };
    this.rotate = function(a) {
        n.rotation = a
    };
    this.getButtonImage = function() {
        return n
    };
    this.getX = function() {
        return n.x
    };
    this.getY = function() {
        return n.y
    };
    this._init(a, d, h, f, b, l)
}

function CBetTextButton(a, d, h, f, b, l, k, g) {
    var e, n, c, p, w, v, u, q, m, r, t, x, z, B;
    this._init = function(a, b, d, g, f, h, k, l) {
        e = false;
        m = [];
        r = [];
        B = createBitmap(d);
        n = d.width;
        c = d.height;
        var y = Math.ceil(k / 20);
        x = new createjs.Text(g, k + "px " + f, "#000000");
        x.textAlign = "center";
        x.lineWidth = .8 * n;
        var A = x.getBounds();
        x.x = d.width / 2 + y;
        x.y = (d.height - A.height) / 2 + y;
        z = new createjs.Text(g, k + "px " + f, h);
        z.textAlign = "center";
        z.lineWidth = .8 * n;
        A = z.getBounds();
        z.x = d.width / 2;
        z.y = (d.height - A.height) / 2;
        t = new createjs.Container;
        t.x = a;
        t.y = b;
        t.regX =
            d.width / 2;
        t.regY = d.height / 2;
        s_bMobile || (t.cursor = "pointer");
        t.addChild(B, x, z);
        s_oStage.addChild(t);
        this._initListener();
        u = l;
        q = [];
        q = l.split("_");
        1 < q.length ? q.splice(0, 1) : this._assignNumber(l);
        p = s_oGameSettings.getBetMultiplierForButton(l);
        w = s_oGameSettings.getBetWinForButton(l);
        v = s_oGameSettings.getNumFichesPerBet(l)
    };
    this._assignNumber = function(a) {
        q = s_oGameSettings.getNumbersForButton(a)
    };
    this.unload = function() {
        t.off("mousedown");
        t.off("pressup");
        s_oStage.removeChild(t)
    };
    this.setVisible = function(a) {
        t.visible =
            a
    };
    this.enable = function() {
        e = false;
        B.filters = [];
        B.cache(0, 0, n, c)
    };
    this.disable = function() {
        e = true;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        B.filters = [new createjs.ColorMatrixFilter(a)];
        B.cache(0, 0, n, c)
    };
    this._initListener = function() {
        oParent = this;
        t.on("mousedown", this.buttonDown);
        t.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        r[a] = c
    };
    this.buttonRelease = function() {
        e || (playSound("click", 1, false), t.scaleX = 1, t.scaleY = 1, m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(r[ON_MOUSE_UP], {
            name: u,
            numbers: q,
            bet_mult: p,
            bet_win: w,
            num_fiches: v
        }, false))
    };
    this.buttonDown = function() {
        e || (t.scaleX = .9, t.scaleY = .9, m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(r[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        t.x = a;
        t.y = b
    };
    this.changeText = function(a) {
        z.text = a;
        x.text = a
    };
    this.setX = function(a) {
        t.x = a
    };
    this.setY = function(a) {
        t.y = a
    };
    this.getButtonImage = function() {
        return t
    };
    this.getX = function() {
        return t.x
    };
    this.getY = function() {
        return t.y
    };
    this._init(a, d, h, f, b, l, k, g);
    return this
}

function CToggle(a, d, h, f, b) {
    var l, k, g, e, n;
    this._init = function(a, b, d, f, h) {
        n = void 0 !== h ? h : s_oStage;
        k = [];
        g = [];
        h = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        l = f;
        e = createSprite(h, "state_" + l, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        e.x = a;
        e.y = b;
        e.stop();
        s_bMobile || (e.cursor = "pointer");
        n.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", this.buttonDown);
        e.off("pressup",
            this.buttonRelease);
        n.removeChild(e)
    };
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        k[a] = b;
        g[a] = d
    };
    this.setCursorType = function(a) {
        e.cursor = a
    };
    this.setActive = function(a) {
        l = a;
        e.gotoAndStop("state_" + l)
    };
    this.buttonRelease = function() {
        e.scaleX = 1;
        e.scaleY = 1;
        playSound("click", 1, false);
        l = !l;
        e.gotoAndStop("state_" + l);
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(g[ON_MOUSE_UP], l)
    };
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY =
            .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this._init(a, d, h, f, b)
}

function CMenu() {
    var a, d, h, f, b, l, k, g, e, n = null,
        c = null,
        p, w, v, u, q;
    this._init = function() {
        p = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(p);
        var m = s_oSpriteLibrary.getSprite("but_play");
        h = CANVAS_WIDTH / 2;
        f = CANVAS_HEIGHT - 110;
        w = new CGfxButton(h, f, m, s_oStage);
        w.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        var l = s_oSpriteLibrary.getSprite("bg_back");
        m = new CTextButton(CANVAS_WIDTH - l.width / 4 - 75, l.height + 68, l, ' ', FONT1, "#ffffff", 40, s_oStage);
        m.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) m = s_oSpriteLibrary.getSprite("audio_icon"), k = CANVAS_WIDTH - m.width / 4 - 10, g = m.height / 2 + 10, u = new CToggle(k, g, m, s_bAudioActive,
            s_oStage), u.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var r = s_oSpriteLibrary.getSprite("but_fullscreen");
        SHOW_CREDITS ? (m = s_oSpriteLibrary.getSprite("but_credits"), b = m.width / 2 + 10, l = m.height / 2 + 10, v = new CGfxButton(b, l, m, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onCredits, this), a = b + r.width / 2 + 10, d = r.height / 2 + 10) : (a = m.width / 4 + 10, d = m.height / 2 + 10);
        m = window.document;
        var t = m.documentElement;
        n = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen;
        c = m.exitFullscreen ||
            m.mozCancelFullScreen || m.webkitExitFullscreen || m.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (n = false);
        n && screenfull.enabled && (e = new CToggle(a, d, r, s_bFullscreen, s_oStage), e.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: 0
        }, 400).call(function() {
            q.visible = false
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(c, h) {
        false !== DISABLE_SOUND_MOBILE &&
            false !== s_bMobile || u.setPosition(k - c, h + g);
        n && screenfull.enabled && e.setPosition(a + c, d + h);
        SHOW_CREDITS && v.setPosition(b + c, h + l);
        w.setPosition(f, f - h)
    };
    this.unload = function() {
        w.unload();
        w = null;
        SHOW_CREDITS && (v.unload(), v = null);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) u.unload(), u = null;
        n && screenfull.enabled && e.unload();
        s_oStage.removeChild(p);
        p = null;
        s_oStage.removeChild(q);
        s_oMenu = q = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
        jQuery(s_oMain).trigger("start_session")
    };
    this._onAudioToggle =
        function() {
            Howler.mute(s_bAudioActive);
            s_bAudioActive = !s_bAudioActive
        };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function() {
        n && screenfull.enabled && e.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? c.call(window.document) : n.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var d = false,
        h, f, b, l, k, g, e, n, c, p, w, v, u, q, m, r, t, x, z, B, A, D;
    this._init = function() {
        s_oTweenController = new CTweenController;
        s_oGameSettings = new CRouletteSettings;
        u = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(u);
        t = new CTableController;
        t.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
        t.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
        t.addEventListener(ON_SHOW_BET_ON_TABLE, this._onShowBetOnTable);
        g = 0;
        f = -1;
        b = 37;
        e = [];
        n = [];
        c = [];
        v = [];
        q = new CSeat;
        r = new CInterface;
        B = new CFinalBetPanel(816, 564);
        z = new CWheelAnim(0, 0);
        A = new CNeighborsPanel(q.getCredit());
        D = new CGameOver;
        x = new CMsgBox;
        p = [];
        l = 0;
        this._onSitDown();
        d = true
    };
    this.unload = function() {
        stopSound("wheel_sound");
        r.unload();
        t.unload();
        x.unload();
        B.unload();
        A.unload();
        D.unload();
        z.unload();
        s_oStage.removeAllChildren()
    };
    this._setState = function(a) {
        f = a;
        switch (a) {
            case STATE_GAME_WAITING_FOR_BET:
                r.enableBetFiches(), r.setCurBet(0), r.hideBlock()
        }
    };
    this._resetTable = function() {
        l = 0;
        b = 37;
        e = [];
        n = [];
        c = [];
        null !== m && (t.getContainer().removeChild(m),
            m = null);
        q.reset();
        A.reset();
        .1 > q.getCredit() ? (f = -1, r.hideBlock(), D.show()) : (r.enableRebet(), this._setState(STATE_GAME_WAITING_FOR_BET));
        g++;
        g === NUM_HAND_FOR_ADS && (g = 0, jQuery(s_oMain).trigger("show_interlevel_ad"))
    };
    this._startRouletteAnim = function() {
        r.disableBetFiches();
        k = this._generateWinLoss();
        p.push(k);
        l = 0
    };
    this._startBallSpinAnim = function() {
        var a = q.getNumbersBetted()[k];
        a = roundDecimal(a.win, 2);
        z.startSpin(0, s_oGameSettings.getFrameForBallSpin(0, k), k, a)
    };
    this._generateWinLoss = function() {
        var a = q.getNumbersBetted(),
            c = q.getNumberSelected(),
            d = a[c[0][0]].win;
        C += q.getCurBet();
        C = parseFloat(C);
        if (C < d) {
            c = 0;
            var e = Math.floor(100 * Math.random())
        } else -1 === WIN_OCCURRENCE ? (c = 37 - b, e = Math.floor(38 * Math.random())) : (c = WIN_OCCURRENCE, e = Math.floor(100 * Math.random()));
        if (h = e >= c ? false : true) {
            do e = Math.floor(Math.random() * a.length), d = a[e].win; while (0 === d)
        } else {
            c = [];
            for (e = 0; 37 > e; e++) c.push(e);
            do {
                if (0 === c.length) {
                    e = Math.floor(Math.random() * a.length);
                    break
                }
                e = Math.floor(Math.random() * c.length);
                d = a[e].win;
                c.splice(e, 1)
            } while (d > q.getCurBet())
        }
        return k =
            e
    };
    this._rouletteAnimEnded = function() {
        l = 0;
        this._setState(STATE_GAME_SHOW_WINNER);
        stopSound("wheel_sound");
        var a = q.getNumbersBetted(),
            b = a[k],
            c = roundDecimal(b.win, 2);
        w = [];
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (0 < e.win)
                for (var g = 0; g < e.mc.length; g++) {
                    w.push(e.mc[g]);
                    var f = s_oGameSettings.getAttachOffset("oDealerWin");
                    e.mc[g].setEndPoint(f.x, f.y)
                }
        }
        if (b.mc)
            for (a = 0; a < b.mc.length; a++) f = s_oGameSettings.getAttachOffset("oReceiveWin"), b.mc[a].setEndPoint(f.x, f.y);
        r.refreshNumExtracted(p);
        m = createBitmap(s_oSpriteLibrary.getSprite("placeholder"));
        0 === k ? (m.x = t.getEnlightX(k) + 22, m.y = t.getEnlightY(k) + 90) : (m.x = t.getEnlightX(k) + 8, m.y = t.getEnlightY(k) + 16);
        m.regX = 6;
        m.regY = 20;
        t.getContainer().addChild(m);
        q.showWin(c);
        0 < c && (C -= c);
        C = parseFloat(C);
		var type = e.win >= 1 ? 'win' : 'lose';
        jQuery(s_oMain).trigger("save_score", [q.getCredit(), type]);
        r.refreshMoney(q.getCredit() - c, c)
    };
    this.showMsgBox = function(a) {
        x.show(a)
    };
    this.onRecharge = function() {
        q.recharge(TOTAL_MONEY);
        r.setMoney(q.getCredit());
        this._setState(STATE_GAME_WAITING_FOR_BET);
        D.hide();
        jQuery(s_oMain).trigger("recharge")
    };
    this.onSpin = function() {
        if (A.isVisible()) A.onExit();
        0 !== q.getCurBet() && (q.getCurBet() < MIN_BET ? (x.show(TEXT_ERROR_MIN_BET), r.enableBetFiches(), r.enableSpin(true)) : r.isBlockVisible() || (r.showBlock(), A.hide(), B.hide(), r.enableSpin(false), jQuery(s_oMain).trigger("bet_placed", q.getCurBet()), this._startRouletteAnim(), this._startBallSpinAnim(), this._setState(STATE_GAME_SPINNING), playSound("wheel_sound", 1, false)))
    };
    this._onSitDown = function() {
        this._setState(STATE_GAME_WAITING_FOR_BET);
        q.setInfo(TOTAL_MONEY, t.getContainer());
        r.setMoney(TOTAL_MONEY);
        r.setCurBet(0)
    };
    this._onShowBetOnTable =
        function(a, d) {
            var g = a.button,
                f = a.numbers;
            b -= a.bet_mult;
            e.push(a.bet_mult);
            var h = a.bet_win,
                t = a.num_fiches;
            if (d) var k = a.value;
            else k = r.getCurFicheSelected(), 0 === n.length && (v = [], r.disableRebet()), v.push({
                button: a.button,
                numbers: a.numbers,
                bet_mult: a.bet_mult,
                bet_win: a.bet_win,
                num_fiches: a.num_fiches,
                neighbors: false,
                value: k
            });
            var l = s_oGameSettings.getFicheValues(k);
            n.push(h);
            c.push(t);
            var m = q.getCurBet();
            if (0 > q.getCredit() - l * t) x.show(TEXT_ERROR_NO_MONEY_MSG), A.reset();
            else if (m + l * t > MAX_BET) x.show(TEXT_ERROR_MAX_BET_REACHED),
                A.reset();
            else {
                switch (g) {
                    case "oBetVoisinsZero":
                        q.createPileForVoisinZero(l, k, f, h, t);
                        break;
                    case "oBetTier":
                        q.createPileForTier(l, k, f, h, t);
                        break;
                    case "oBetOrphelins":
                        q.createPileForOrphelins(l, k, f, h, t);
                        break;
                    case "oBetFinalsBet":
                        q.createPileForMultipleNumbers(l, k, f, h, t);
                        break;
                    default:
                        q.addFicheOnTable(l, k, f, h, g)
                }
                r.setMoney(q.getCredit());
                r.setCurBet(q.getCurBet());
                r.enableSpin(true);
                playSound("chip", 1, false)
            }
        };
    this._onShowBetOnTableFromNeighbors = function(a, d) {
        var g = a.numbers;
        b -= a.bet_mult;
        e.push(a.bet_mult);
        var f = a.bet_win,
            h = a.num_fiches;
        d || (0 === n.length && (v = [], r.disableRebet()), v.push({
            button: a.button,
            numbers: a.numbers,
            bet_mult: a.bet_mult,
            bet_win: a.bet_win,
            num_fiches: a.num_fiches,
            value: r.getCurFicheSelected(),
            num_clicked: a.num_clicked,
            neighbors: true
        }));
        n.push(f);
        c.push(h);
        var t = s_oGameSettings.getFicheValues(a.value);
        t * h > q.getCredit() ? (x.show(TEXT_ERROR_NO_MONEY_MSG), A.reset()) : (q.createPileForMultipleNumbers(t, a.value, g, f, h), r.setMoney(q.getCredit()), r.setCurBet(q.getCurBet()), r.enableSpin(true), playSound("chip",
            1, false))
    };
    this._onShowEnlight = function(a) {
        for (var b = a.numbers, c = 0; c < b.length; c++) t.enlight("oEnlight_" + b[c]);
        (a = a.enlight) && t.enlight("oEnlight_" + a)
    };
    this._onHideEnlight = function(a) {
        for (var b = a.numbers, c = 0; c < b.length; c++) t.enlightOff("oEnlight_" + b[c]);
        (a = a.enlight) && t.enlightOff("oEnlight_" + a)
    };
    this.onClearLastBet = function() {
        if (0 < e.length) {
            var a = e.pop();
            b += a
        }
        0 === e.length && r.enableSpin(false);
        q.clearLastBet(n.pop(), c.pop());
        r.setMoney(q.getCredit());
        r.setCurBet(q.getCurBet());
        A.clearLastBet();
        0 < v.length &&
            v.pop()
    };
    this.onClearAllBets = function() {
        q.clearAllBets();
        r.setMoney(q.getCredit());
        r.setCurBet(q.getCurBet());
        r.enableSpin(false);
        A.reset();
        v = [];
        b = 37
    };
    this.onRebet = function() {
        for (var a = 0; a < v.length; a++) true === v[a].neighbors ? A.rebet(v[a].num_clicked) : this._onShowBetOnTable(v[a], true)
    };
    this.onFinalBetShown = function() {
        B.isVisible() ? B.hide() : B.show()
    };
    this.onOpenNeighbors = function() {
        B.hide();
        A.showPanel(r.getCurFicheSelected(), q.getCredit(), q.getCurBet())
    };
    this.onExit = function() {
        jQuery(s_oMain).trigger("end_session");
        jQuery(s_oMain).trigger("save_score", q.getCredit());
        jQuery(s_oMain).trigger("share_event", q.getCredit());
        this.unload();
        s_oMain.gotoMenu()
    };
    this._updateWaitingBet = function() {
        A.isVisible() || 0 === TIME_WAITING_BET || (l += s_iTimeElaps, l > TIME_WAITING_BET && (l = 0, this.onSpin()))
    };
    this._updateSpinning = function() {};
    this._updateShowWinner = function() {
        l += s_iTimeElaps;
        l > TIME_SHOW_WINNER && (l = 0, s_oGame._setState(STATE_DISTRIBUTE_FICHES))
    };
    this._updateDistributeFiches = function() {
        l += s_iTimeElaps;
        if (l > TIME_FICHES_MOV) l = 0, playSound("fiche_collect",
            1, false), this._resetTable();
        else
            for (var a = s_oTweenController.easeInOutCubic(l, 0, 1, TIME_FICHES_MOV), b = 0; b < w.length; b++) w[b].updatePos(a)
    };
    this.update = function() {
        if (false !== d) {
            switch (f) {
                case STATE_GAME_WAITING_FOR_BET:
                    this._updateWaitingBet();
                    break;
                case STATE_GAME_SPINNING:
                    this._updateSpinning();
                    break;
                case STATE_GAME_SHOW_WINNER:
                    this._updateShowWinner();
                    break;
                case STATE_DISTRIBUTE_FICHES:
                    this._updateDistributeFiches()
            }
            z.isVisible() && z.update()
        }
    };
    s_oGame = this;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET =
        a.max_bet;
    TIME_WAITING_BET = a.time_bet;
    TIME_SHOW_WINNER = a.time_winner;
    WIN_OCCURRENCE = a.win_occurrence;
    NUM_HAND_FOR_ADS = a.num_hand_before_ads;
    var C = a.casino_cash;
    this._init()
}
var s_oGame, s_oTweenController, s_oGameSettings;

function CInterface() {
    var a, d, h, f, b, l, k, g, e, n, c, p = null,
        w = null,
        v, u, q, m, r, t, x, z, B, A, D, C, E, G, F;
    this._init = function() {
        var y = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
        y.x = 191;
        y.y = 93;
        s_oStage.addChild(y);
        y = new createjs.Text(TEXT_MONEY, "16px " + FONT1, "#fff");
        y.textAlign = "center";
        y.x = 272;
        y.y = 108;
        s_oStage.addChild(y);
        v = new createjs.Text("", "16px " + FONT1, "#fff");
        v.textAlign = "center";
        v.x = 272;
        v.y = 128;
        s_oStage.addChild(v);
        y = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
        y.x = 350;
        y.y = 93;
        s_oStage.addChild(y);
        y = new createjs.Text(TEXT_CUR_BET, "16px " + FONT1, "#fff");
        y.textAlign = "center";
        y.x = 432;
        y.y = 108;
        s_oStage.addChild(y);
        u = new createjs.Text("", "16px " + FONT1, "#fff");
        u.textAlign = "center";
        u.x = 432;
        u.y = 128;
        s_oStage.addChild(u);
        m = createBitmap(s_oSpriteLibrary.getSprite("but_bets"));
        m.x = 515;
        m.y = 100;
        s_oStage.addChild(m);
        q = new createjs.Text(TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": نامحدود", "14px " + FONT1, "#fff");
        q.textAlign = "center";
        q.lineHeight = 20;
        q.x = m.x + 75;
        q.y = m.y + 9;
        s_oStage.addChild(q);
        y = createBitmap(s_oSpriteLibrary.getSprite("logo_game_0"));
        y.x = 740;
        y.y = 98;
        s_oStage.addChild(y);
        r = new CTextButton(1107, 641, s_oSpriteLibrary.getSprite("spin_but"), "  " + TEXT_SPIN, FONT1, "#fff", 19, s_oStage);
        r.setVisible(false);
        r.setAlign("left");
        r.addEventListener(ON_MOUSE_UP, this._onSpin, this);
        C = new CBetTextButton(266, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_VOISINS_ZERO, FONT1, "#fff", 16, "oBetVoisinsZero");
        C.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
        D = new CBetTextButton(424, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_TIER, FONT1, "#fff", 16, "oBetTier");
        D.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
        A = new CBetTextButton(582, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_ORPHELINS, FONT1, "#fff", 16, "oBetOrphelins");
        A.addEventListener(ON_MOUSE_UP, this._onBetRelease, this);
        B = new CTextButton(740, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_NEIGHBORS, FONT1, "#fff", 16);
        B.addEventListener(ON_MOUSE_UP, this._onNeighborsPanel, this);
        z = new CTextButton(898, 641, s_oSpriteLibrary.getSprite("but_bg"), TEXT_FINALSBET, FONT1, "#fff", 16);
        z.addEventListener(ON_MOUSE_UP,
            this._onFinalBetShow, this);
        E = new CGfxButton(1064, 586, s_oSpriteLibrary.getSprite("but_rebet"), s_oStage);
        E.disable();
        E.addEventListener(ON_MOUSE_UP, this._onRebet, this);
        t = new CGfxButton(1064, 526, s_oSpriteLibrary.getSprite("but_clear_last"), s_oStage);
        t.addEventListener(ON_MOUSE_UP, this._onClearLastBet, this);
        x = new CGfxButton(1064, 466, s_oSpriteLibrary.getSprite("but_clear_all"), s_oStage);
        x.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
        this._initFichesBut();
        this.disableBetFiches();
        G = new CHistory(1095,
            158, s_oStage);
        k = 0;
        g[k].select();
        y = (new createjs.Graphics).beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        F = new createjs.Shape(y);
        F.on("click", function() {});
        F.visible = false;
        s_oStage.addChild(F);
        y = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH - y.width / 2 - 10;
        d = y.height / 2 + 10;
        e = new CGfxButton(a, d, y, s_oStage);
        e.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) y = s_oSpriteLibrary.getSprite("audio_icon"), b = a - y.width / 2, l = y.height / 2 + 10,
            n = new CToggle(b, l, y, s_bAudioActive, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        y = window.document;
        var H = y.documentElement;
        p = H.requestFullscreen || H.mozRequestFullScreen || H.webkitRequestFullScreen || H.msRequestFullscreen;
        w = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (p = false);
        p && screenfull.enabled && (y = s_oSpriteLibrary.getSprite("but_fullscreen"), h = y.width / 4 + 10, f = y.height / 2 + 10, c = new CToggle(h, f, y, s_bFullscreen, s_oStage),
            c.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        e.unload();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || n.unload();
        p && screenfull.enabled && c.unload();
        r.unload();
        t.unload();
        x.unload();
        z.unload();
        B.unload();
        A.unload();
        D.unload();
        C.unload();
        E.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(g, t) {
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || n.setPosition(b - g, l + t);
        p && screenfull.enabled && c.setPosition(h + g, f + t);
        e.setPosition(a -
            g, d + t)
    };
    this.hideBlock = function() {
        F.visible = false
    };
    this.showBlock = function() {
        F.visible = true
    };
    this.enableBetFiches = function() {
        for (var a = 0; a < NUM_FICHE_VALUES; a++) g[a].enable();
        t.enable();
        x.enable();
        z.enable();
        B.enable();
        A.enable();
        D.enable();
        C.enable()
    };
    this.disableBetFiches = function() {
        for (var a = 0; a < NUM_FICHE_VALUES; a++) g[a].disable();
        t.disable();
        x.disable();
        z.disable();
        B.disable();
        A.disable();
        D.disable();
        C.disable();
        E.disable()
    };
    this.enableRebet = function() {
        E.enable()
    };
    this.disableRebet = function() {
        E.disable()
    };
    this.deselectAllFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++) if(a == 6) continue; else g[a].deselect();
    };
    this.enableSpin = function(a) {
        r.setVisible(a)
    };
    this._initFichesBut = function() {
        var a = createBitmap(s_oSpriteLibrary.getSprite("chip_box"));
        a.x = 102;
        a.y = 100;
        s_oStage.addChild(a);
        a = 150;
        g = [];
        for (var b = 0; b < NUM_FICHES; b++) {
			if(b == 6)continue;
            var c = s_oSpriteLibrary.getSprite("fiche_" + b);
            g[b] = new CFicheBut(142, a, c);
            g[b].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheSelected, this, [b]);
            a += c.height + 25
        }
    };
    this.refreshTime = function(a) {
        formatTime(a)
    };
    this.setMoney = function(a) {
        v.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.setCurBet = function(a) {
        u.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.refreshMoney = function(a, b) {
        new CRollingTextController(v, null, a, b, 1, EASE_LINEAR, TEXT_CURRENCY);
    };
    this.refreshNumExtracted = function(a) {
        var b = a.length - 1,
            c = -1;
        a.length > ROW_HISTORY - 1 && (c = b - ROW_HISTORY);
        for (var d = 0; b > c; b--) {
            switch (s_oGameSettings.getColorNumber(a[b])) {
                case COLOR_BLACK:
                    G.showBlack(d, a[b]);
                    break;
                case COLOR_RED:
                    G.showRed(d, a[b]);
                    break;
                case COLOR_ZERO:
                    G.showGreen(d,
                        a[b])
            }
            d++
        }
    };
    this.gameOver = function() {};
    this._onBetRelease = function(a) {
        var b = a.numbers,
            c = a.bet_mult,
            d = a.bet_win;
        null !== b && s_oGame._onShowBetOnTable({
            button: a.name,
            numbers: b,
            bet_mult: c,
            bet_win: d,
            num_fiches: a.num_fiches
        }, false)
    };
    this._onFicheSelected = function(a) {
        playSound("fiche_collect", 1, false);
        this.deselectAllFiches();
        a = a[0];
        for (var b = 0; b < NUM_FICHE_VALUES; b++) b === a && (k = b)
    };
    this._onSpin = function() {
        this.disableBetFiches();
        this.enableSpin(false);
        s_oGame.onSpin()
    };
    this._onClearLastBet = function() {
        s_oGame.onClearLastBet()
    };
    this._onClearAllBet = function() {
        s_oGame.onClearAllBets()
    };
    this._onFinalBetShow = function() {
        s_oGame.onFinalBetShown()
    };
    this._onNeighborsPanel = function() {
        s_oGame.onOpenNeighbors()
    };
    this._onRebet = function() {
        E.disable();
        s_oGame.onRebet()
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        p && screenfull.enabled && c.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ?
            w.call(window.document) : p.call(window.document.documentElement);
        sizeHandler()
    };
    this.getCurFicheSelected = function() {
        return k
    };
    this.isBlockVisible = function() {
        return F.visible
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CMsgBox() {
    var a, d, h, f;
    this._init = function() {
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        a.on("click", function() {});
        h = new createjs.Text("", "24px " + FONT1, "#000");
        h.x = CANVAS_WIDTH / 2 + 2;
        h.y = CANVAS_HEIGHT / 2 - 28;
        h.textAlign = "center";
        h.lineWidth = 300;
        d = new createjs.Text("", "24px " + FONT1, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 30;
        d.textAlign = "center";
        d.lineWidth = 300;
        f = new createjs.Container;
        f.alpha = 0;
        f.visible = false;
        f.addChild(a, h, d);
        s_oStage.addChild(f)
    };
    this.unload = function() {
        a.off("click",
            function() {})
    };
    this.show = function(a) {
        h.text = a;
        d.text = a;
        f.visible = true;
        var b = this;
        createjs.Tween.get(f).to({
            alpha: 1
        }, 500);
        setTimeout(function() {
            b._onExit()
        }, 2E3)
    };
    this._onExit = function() {
        f.visible && (f.off("mousedown"), f.visible = false)
    };
    this._init();
    return this
}

function CTweenController() {
    this.tweenValue = function(a, d, h) {
        return a + h * (d - a)
    };
    this.easeLinear = function(a, d, h, f) {
        return h * a / f + d
    };
    this.easeInCubic = function(a, d, h, f) {
        f = (a /= f) * a * a;
        return d + h * f
    };
    this.easeBackInQuart = function(a, d, h, f) {
        f = (a /= f) * a;
        return d + h * (2 * f * f + 2 * f * a + -3 * f)
    };
    this.easeInBack = function(a, d, h, f) {
        return h * (a /= f) * a * (2.70158 * a - 1.70158) + d
    };
    this.easeOutCubic = function(a, d, h, f) {
        return h * ((a = a / f - 1) * a * a + 1) + d
    };
    this.easeInOutCubic = function(a, d, h, f) {
        return 1 > (a /= f / 2) ? h / 2 * a * a * a + d : h / 2 * ((a -= 2) * a * a + 2) + d
    };
    this.tweenVectors = function(a, d, h, f) {
        f.x = a.x + h * (d.x - a.x);
        f.y = a.y + h * (d.y - a.y);
        return f
    }
}

function CSeat() {
    var a, d, h, f, b, l;
    this._init = function() {
        this.reset()
    };
    this.reset = function() {
        h = [];
        f = [];
        b = [];
        this.resetNumberWins();
        l && l.reset();
        a = 0
    };
    this.setInfo = function(b, g) {
        d = b;
        a = 0;
        l = new CFichesController(g)
    };
    this.resetNumberWins = function() {
        for (var a = 0; a < NUMBERS_TO_BET; a++) h[a] = {
            win: 0,
            mc: null
        };
        b = []
    };
    this.setFicheBetted = function(k, g, e, l, c) {
        for (var n = [], w = [], v = 0; v < g.length; v++) {
            var u = (parseFloat(h[g[v]].win) + e * k * c);
            h[g[v]] = {
                win: u,
                mc: l
            };
            n.push(e * k * c);
            w.push(l)
        }
        b.push({
            win: n,
            mc: l
        });
        f.push(g);
        k = parseFloat(k * c);
        a += k;
        a = parseFloat(a);
        d -= k;
        d = roundDecimal(d, 1)
    };
    this.createPileForVoisinZero = function(a, b, d, f, c) {
        var e = [];
        l.createPileForVoisinZero(b, e);
        this.setFicheBetted(a, d, f, e, c)
    };
    this.createPileForTier = function(a, b, d, f, c) {
        var e = [];
        l.createPileForTier(b, e);
        this.setFicheBetted(a, d, f, e, c)
    };
    this.createPileForOrphelins = function(k, g, e, n, c) {
        n = [];
        l.createPileForOrphelins(g, n);
        g = [];
        var p = parseFloat(h[e[0]].win) + 36 * k;
        h[e[0]] = {
            win: p,
            mc: n
        };
        g.push(36 * k);
        p = (parseFloat(h[e[1]].win) +
            18 * k);
        h[e[1]] = {
            win: p,
            mc: n
        };
        g.push(18 * k);
        p = parseFloat(h[e[2]].win) + 18 * k;
        h[e[2]] = {
            win: p,
            mc: n
        };
        g.push(18 * k);
        p = parseFloat(h[e[3]].win) + 18 * k;
        h[e[3]] = {
            win: p,
            mc: n
        };
        g.push(18 * k);
        p = parseFloat(h[e[4]].win) + 36 * k;
        h[e[4]] = {
            win: p,
            mc: n
        };
        g.push(36 * k);
        p = parseFloat(h[e[5]].win) + 18 * k;
        h[e[5]] = {
            win: p,
            mc: n
        };
        g.push(18 * k);
        p = parseFloat(h[e[6]].win) + 18 * k;
        h[e[6]] = {
            win: p,
            mc: n
        };
        g.push(18 * k);
        p = parseFloat(h[e[7]].win) + 18 * k;
        h[e[7]] = {
            win: p,
            mc: n
        };
        g.push(18 * k);
        f.push(e);
        k = parseFloat(k * c);
        a += k;
        d -= k;
        d = roundDecimal(d, 1);
        b.push({
            win: g,
            mc: n
        })
    };
    this.createPileForMultipleNumbers = function(a, b, d, f, c) {
        var e = [];
        l.createPileForMultipleNumbers(b, d, e);
        this.setFicheBetted(a, d, f, e, c)
    };
    this.addFicheOnTable = function(a, b, d, f, c) {
        var e = [];
        l.setFicheOnTable(b, c, e);
        this.setFicheBetted(a, d, f, e, 1)
    };
    this.clearLastBet = function() {
        if (0 !== f.length) {
            var k = l.clearLastBet();
            d += k;
            d = roundDecimal(d, 1);
            a -= k;
            k = f.pop();
            for (var g = b.pop().win, e = 0; e < k.length; e++) h[k[e]] =
                0 < b.length ? {
                    win: h[k[e]].win - g[e],
                    mc: b[b.length - 1].mc
                } : {
                    win: h[k[e]].win - g[e],
                    mc: null
                }
        }
    };
    this.clearAllBets = function() {
        this.resetNumberWins();
        l.clearAllBets();
        d += a;
        d = roundDecimal(d, 1);
        a = 0
    };
    this.showWin = function(a) {
        d += a;
        d = roundDecimal(d, 1)
    };
    this.recharge = function(a) {
        d = a
    };
    this.getCurBet = function() {
        return a
    };
    this.getCredit = function() {
        return d
    };
    this.getNumbersBetted = function() {
        return h
    };
    this.getNumberSelected = function() {
        return f
    };
    this._init()
}

function CTableController() {
    var a, d, h, f;
    this._init = function() {
        d = new createjs.Container;
        d.x = 184;
        d.y = 150;
        s_oStage.addChild(d);
        var a = createBitmap(s_oSpriteLibrary.getSprite("board_roulette"));
        d.addChild(a);
        this._initEnlights();
        a = new CBetTableButton(221, 289, s_oSpriteLibrary.getSprite("hit_area_horizontal"), "first12", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
            this));
        a = new CBetTableButton(470, 289, s_oSpriteLibrary.getSprite("hit_area_horizontal"), "second12", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(717, 289, s_oSpriteLibrary.getSprite("hit_area_horizontal"), "third12", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver,
            this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(54, 121, s_oSpriteLibrary.getSprite("hit_area_0"), "bet_0", d, false);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        for (var l = s_oSpriteLibrary.getSprite("hit_area_number"), k = 128, g = 194, e = 1; 37 > e; e++) a = new CBetTableButton(k, g, l, "bet_" + e, d, false), a.addEventListener(ON_MOUSE_DOWN,
            this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === e % 3 ? (k += WIDTH_CELL_NUMBER + 3, g = 194) : g -= HEIGHT_CELL_NUMBER + 3;
        a = new CBetTableButton(97, 195, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_0_1", d, false);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
            this));
        a = new CBetTableButton(97, 120, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_0_2", d, false);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(97, 45, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_0_3", d, false);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
            this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        k = 159;
        g = 194;
        for (var n = 1; 34 > n; n++) a = new CBetTableButton(k, g, s_oSpriteLibrary.getSprite("hit_area_couple_vertical"), "bet_" + n + "_" + (n + 3), d, false), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === n % 3 ? (k += WIDTH_CELL_NUMBER + 3, g = 194) : g -= HEIGHT_CELL_NUMBER + 3;
        k = 128;
        g = 157;
        for (n =
            e = 1; 25 > n; n++) a = new CBetTableButton(k, g, s_oSpriteLibrary.getSprite("hit_area_couple_horizontal"), "bet_" + e + "_" + (e + 1), d, false), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === n % 2 ? (k += WIDTH_CELL_NUMBER + 3, g = 157, e += 2) : (g -= HEIGHT_CELL_NUMBER + 3, e++);
        a = new CBetTableButton(96, 158, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_0_1_2", d, false);
        a.addEventListener(ON_MOUSE_DOWN,
            this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(96, 84, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_0_2_3", d, false);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        k = 128;
        g = 232;
        e = 1;
        l = s_oSpriteLibrary.getSprite("hit_area_couple_horizontal");
        for (n = 1; 13 > n; n++) a = new CBetTableButton(k, g, l, "bet_" + e + "_" + (e + 1) + "_" + (e + 2), d, false), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), k += WIDTH_CELL_NUMBER + 3, e += 3;
        a = new CBetTableButton(96, 232, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_0_1_2_3", d, false);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
            this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        g = k = 158;
        for (n = e = 1; 23 > n; n++) a = new CBetTableButton(k, g, s_oSpriteLibrary.getSprite("hit_area_small"), "bet_" + e + "_" + (e + 1) + "_" + (e + 3) + "_" + (e + 4), d, false), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), 0 === n % 2 ? (k += WIDTH_CELL_NUMBER + 3, g = 157, e += 2) : (g -= HEIGHT_CELL_NUMBER + 3, e++);
        k =
            158;
        g = 232;
        e = 1;
        l = s_oSpriteLibrary.getSprite("hit_area_small");
        for (n = 1; 12 > n; n++) a = new CBetTableButton(k, g, l, "bet_" + e + "_" + (e + 1) + "_" + (e + 2) + "_" + (e + 3) + "_" + (e + 4) + "_" + (e + 5), d, false), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), e += 3, k += WIDTH_CELL_NUMBER + 3;
        a = new CBetTableButton(872, 194, s_oSpriteLibrary.getSprite("hit_area_number"), "col1", d, true);
        a.addEventListener(ON_MOUSE_DOWN,
            this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(872, 120, s_oSpriteLibrary.getSprite("hit_area_number"), "col2", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(872, 46, s_oSpriteLibrary.getSprite("hit_area_number"),
            "col3", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(159, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "first18", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(281, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "even", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(408, 400, s_oSpriteLibrary.getSprite("hit_area_color"), "black", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver,
            this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(533, 400, s_oSpriteLibrary.getSprite("hit_area_color"), "red", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(656, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "odd", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false ===
            s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        a = new CBetTableButton(778, 400, s_oSpriteLibrary.getSprite("hit_area_horizontal_half"), "second18", d, true);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        h = [];
        f = []
    };
    this._initEnlights = function() {
        a = [];
        var b = new CEnlight(11, 10, s_oSpriteLibrary.getSprite("enlight_0"),
            d);
        a.oEnlight_0 = b;
        for (var f = 98, h = 159, g = s_oSpriteLibrary.getSprite("enlight_number"), e = 0; 36 > e; e++) b = new CEnlight(f, h, g, d), a["oEnlight_" + (e + 1)] = b, 0 === (e + 1) % 3 ? (f += g.width + 3, h = 159) : h -= g.height + 3;
        b = new CEnlight(842, 159, s_oSpriteLibrary.getSprite("enlight_number"), d);
        a.oEnlight_col1 = b;
        b = new CEnlight(842, 85, s_oSpriteLibrary.getSprite("enlight_number"), d);
        a.oEnlight_col2 = b;
        b = new CEnlight(842, 11, s_oSpriteLibrary.getSprite("enlight_number"), d);
        a.oEnlight_col3 = b;
        b = new CEnlight(98, 234, s_oSpriteLibrary.getSprite("enlight_horizontal"),
            d);
        a.oEnlight_first12 = b;
        b = new CEnlight(347, 234, s_oSpriteLibrary.getSprite("enlight_horizontal"), d);
        a.oEnlight_second12 = b;
        b = new CEnlight(595, 234, s_oSpriteLibrary.getSprite("enlight_horizontal"), d);
        a.oEnlight_third12 = b;
        b = new CEnlight(98, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), d);
        a.oEnlight_first18 = b;
        b = new CEnlight(220, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), d);
        a.oEnlight_even = b;
        b = new CEnlight(347, 348, s_oSpriteLibrary.getSprite("enlight_color"), d);
        a.oEnlight_black =
            b;
        b = new CEnlight(470, 348, s_oSpriteLibrary.getSprite("enlight_color"), d);
        a.oEnlight_red = b;
        b = new CEnlight(595, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), d);
        a.oEnlight_odd = b;
        b = new CEnlight(717, 345, s_oSpriteLibrary.getSprite("enlight_horizontal_half"), d);
        a.oEnlight_second18 = b
    };
    this.unload = function() {
        for (var a = 0; a < d.getNumChildren(); a++) {
            var f = d.getChildAt(a);
            f instanceof CBetTableButton && f.unload()
        }
    };
    this.addEventListener = function(a, d, k) {
        h[a] = d;
        f[a] = k
    };
    this._onBetPress = function(a) {
        null !==
            a.numbers && h[ON_SHOW_BET_ON_TABLE] && h[ON_SHOW_BET_ON_TABLE].call(f[ON_SHOW_BET_ON_TABLE], a, false)
    };
    this._onBetNumberOver = function(a) {
        null !== a.numbers && h[ON_SHOW_ENLIGHT] && h[ON_SHOW_ENLIGHT].call(f[ON_SHOW_ENLIGHT], a)
    };
    this._onBetNumberOut = function(a) {
        null !== a.numbers && h[ON_HIDE_ENLIGHT] && h[ON_HIDE_ENLIGHT].call(f[ON_HIDE_ENLIGHT], a)
    };
    this.enlight = function(b) {
        a[b].show()
    };
    this.enlightOff = function(b) {
        a[b].hide()
    };
    this.getEnlightX = function(b) {
        return a["oEnlight_" + b].getX()
    };
    this.getEnlightY = function(b) {
        return a["oEnlight_" +
            b].getY()
    };
    this.getContainer = function() {
        return d
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.x
    };
    this._init()
}

function CEnlight(a, d, h, f) {
    var b;
    this._init = function(a, d, f, e) {
        b = createBitmap(f);
        b.x = a;
        b.y = d;
        b.visible = false;
        e.addChild(b)
    };
    this.show = function() {
        b.visible = true
    };
    this.hide = function() {
        b.visible = false
    };
    this.rotate = function(a) {
        b.rotation = a
    };
    this.getX = function() {
        return b.x
    };
    this.getY = function() {
        return b.y
    };
    this._init(a, d, h, f)
}

function CFiche(a, d, h, f, b) {
    var l, k, g, e, n;
    this._init = function(a, b, d, f, g) {
        n = f;
        f = s_oSpriteLibrary.getSprite("fiche_" + d);
        e = createBitmap(f);
        e.x = a;
        e.y = b;
        e.regX = f.width / 2;
        e.regY = f.height / 2;
        g ? (e.scaleX = g, e.scaleY = g) : (e.scaleX = .8, e.scaleY = .8);
        l = d;
        n.addChild(e)
    };
    this.setEndPoint = function(a, b) {
        k = new createjs.Point(e.x, e.y);
        g = new createjs.Point(a, b)
    };
    this.updatePos = function(a) {
        var b = new createjs.Point;
        b = s_oTweenController.tweenVectors(k, g, a, b);
        e.x = b.x;
        e.y = b.y
    };
    this.getSprite = function() {
        return e
    };
    this.getValue =
        function() {
            return l
        };
    this._init(a, d, h, f, b)
}

function CHistoryRow(a, d, h) {
    var f, b, l, k, g, e, n;
    this._init = function(a, d) {
        n = new createjs.Container;
        n.x = a;
        n.y = d;
        h.addChild(n);
        f = createBitmap(s_oSpriteLibrary.getSprite("circle_red"));
        f.visible = false;
		f.x = 20;
        n.addChild(f);
        b = createBitmap(s_oSpriteLibrary.getSprite("circle_green"));
        b.visible = false;
        b.x = 24;
        n.addChild(b);
        l = createBitmap(s_oSpriteLibrary.getSprite("circle_black"));
        l.visible = false;
        l.x = 48;
        n.addChild(l);
        k = new createjs.Text("a", "12px " + FONT1, "#fff");
        k.x = f.x + 10;
        k.y = f.y + 3;
        k.visible = false;
        k.textAlign = "center";
        n.addChild(k);
        g = new createjs.Text("a", "12px " + FONT1, "#fff");
        g.x = b.x + 10;
        g.y = b.y + 3;
        g.visible = false;
        g.textAlign = "center";
        n.addChild(g);
        e = new createjs.Text("a", "12px " + FONT1, "#fff");
        e.x = l.x + 10;
        e.y = l.y + 3;
        e.visible = false;
        e.textAlign = "center";
        n.addChild(e)
    };
    this.showBlack = function(a) {
        e.text = a;
        f.visible = false;
        k.visible = false;
        b.visible = false;
        g.visible = false;
        l.visible = true;
        e.visible = true
    };
    this.showRed = function(a) {
        k.text = a;
        f.visible = true;
        k.visible = true;
        b.visible = false;
        g.visible = false;
        l.visible = false;
        e.visible = false
    };
    this.showGreen = function(a) {
        g.text = a;
        f.visible = false;
        k.visible = false;
        b.visible = true;
        g.visible = true;
        l.visible = false;
        e.visible = false
    };
    this._init(a, d)
}

function CWheelAnim(a, d) {
    var h, f, b, l, k, g, e, n, c, p, w, v, u, q, m, r, t, x;
    this._init = function(a, b) {
        k = l = 0;
        f = false;
        x = new createjs.Container;
        x.visible = false;
        x.x = a;
        x.y = b;
        t = x.on("click", function() {});
        s_oStage.addChild(x);
        var c = new createjs.Shape;
        c.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        x.addChild(c);
        c = createBitmap(s_oSpriteLibrary.getSprite("bg_wheel"));
        c.x = 240;
        c.y = 159;
        x.addChild(c);
        e = [];
        for (var d = 0; d < NUM_MASK_BALL_SPIN_FRAMES; d++) c = createBitmap(s_oSpriteLibrary.getSprite("wheel_numbers_" +
            d)), c.x = 418, c.y = 219, c.visible = false, x.addChild(c), e.push(c);
        this._initBall();
        n = [];
        for (d = 0; d < NUM_MASK_BALL_SPIN_FRAMES; d++) c = createBitmap(s_oSpriteLibrary.getSprite("wheel_handle_" + d)), c.x = 519, c.y = 186, c.visible = false, x.addChild(c), n.push(c);
        w = e[0];
        w.visible = true;
        v = n[0];
        v.visible = true;
        m = new createjs.Container;
        m.visible = false;
        m.x = CANVAS_WIDTH / 2;
        m.y = CANVAS_HEIGHT / 2;
        x.addChild(m);
        c = s_oSpriteLibrary.getSprite("show_number_panel");
        d = createBitmap(c);
        m.addChild(d);
        d = {
            images: [s_oSpriteLibrary.getSprite("show_number_bg")],
            frames: {
                width: 117,
                height: 117,
                regX: 58,
                regY: 58
            },
            animations: {
                black: [0],
                red: [1],
                green: [2]
            }
        };
        d = new createjs.SpriteSheet(d);
        r = createSprite(d, "black", 58, 58, 117, 117);
        r.x = c.width / 2;
        r.y = c.height / 2;
        m.addChild(r);
        u = new createjs.Text("36", "80px " + FONT2, "#fff");
        u.textAlign = "center";
        u.textBaseline = "middle";
        u.x = c.width / 2;
        u.y = c.height / 2 + 7;
        m.addChild(u);
        d = s_oSpriteLibrary.getSprite("but_bg");
        var g = createBitmap(d);
        g.regX = d.width / 2;
        g.x = c.width / 2;
        g.y = c.height - 12;
        m.addChild(g);
        q = new createjs.Text("", "22px " + FONT1, "#fff");
        q.textAlign = "center";
        q.textBaseline = "middle";
        q.x = c.width / 2;
        q.y = c.height + 20;
        m.addChild(q);
        m.regX = c.width / 2;
        m.regY = c.height / 2
    };
    this.unload = function() {
        x.off("click", t)
    };
    this._initBall = function() {
        c = [];
        c.push({
            x: 892.9,
            y: 358.95
        });
        c.push({
            x: 889.4,
            y: 338.95
        });
        c.push({
            x: 880.9,
            y: 320.45
        });
        c.push({
            x: 870.9,
            y: 303.45
        });
        c.push({
            x: 857.65,
            y: 287.2
        });
        c.push({
            x: 842.4,
            y: 272.2
        });
        c.push({
            x: 825.9,
            y: 257.45
        });
        c.push({
            x: 808.15,
            y: 245.7
        });
        c.push({
            x: 788.15,
            y: 234.45
        });
        c.push({
            x: 767.9,
            y: 224.45
        });
        c.push({
            x: 746.9,
            y: 217.2
        });
        c.push({
            x: 724.4,
            y: 210.7
        });
        c.push({
            x: 702.15,
            y: 205.2
        });
        c.push({
            x: 680.15,
            y: 201.7
        });
        c.push({
            x: 657.15,
            y: 199.45
        });
        c.push({
            x: 634.15,
            y: 198.95
        });
        c.push({
            x: 609.15,
            y: 199.95
        });
        c.push({
            x: 586.4,
            y: 202.2
        });
        c.push({
            x: 564.15,
            y: 206.2
        });
        c.push({
            x: 541.65,
            y: 211.2
        });
        c.push({
            x: 519.15,
            y: 218.2
        });
        c.push({
            x: 498.9,
            y: 227.45
        });
        c.push({
            x: 478.9,
            y: 236.7
        });
        c.push({
            x: 461.15,
            y: 248.95
        });
        c.push({
            x: 444.15,
            y: 261.45
        });
        c.push({
            x: 429.15,
            y: 275.7
        });
        c.push({
            x: 416.65,
            y: 291.45
        });
        c.push({
            x: 406.65,
            y: 308.95
        });
        c.push({
            x: 399.15,
            y: 326.7
        });
        c.push({
            x: 394.4,
            y: 345.7
        });
        c.push({
            x: 394.4,
            y: 365.7
        });
        c.push({
            x: 396.65,
            y: 385.7
        });
        c.push({
            x: 402.4,
            y: 405.2
        });
        c.push({
            x: 411.65,
            y: 424.95
        });
        c.push({
            x: 425.9,
            y: 444.2
        });
        c.push({
            x: 444.15,
            y: 462.2
        });
        c.push({
            x: 465.9,
            y: 477.95
        });
        c.push({
            x: 491.15,
            y: 492.45
        });
        c.push({
            x: 519.15,
            y: 504.7
        });
        c.push({
            x: 549.9,
            y: 512.95
        });
        c.push({
            x: 582.4,
            y: 518.7
        });
        c.push({
            x: 615.4,
            y: 520.45
        });
        c.push({
            x: 648.4,
            y: 518.45
        });
        c.push({
            x: 681.4,
            y: 513.45
        });
        c.push({
            x: 711.9,
            y: 505.2
        });
        c.push({
            x: 739.65,
            y: 493.45
        });
        c.push({
            x: 764.65,
            y: 478.7
        });
        c.push({
            x: 786.15,
            y: 461.95
        });
        c.push({
            x: 802.9,
            y: 444.45
        });
        c.push({
            x: 816.15,
            y: 424.7
        });
        c.push({
            x: 825.15,
            y: 404.7
        });
        c.push({
            x: 829.9,
            y: 384.7
        });
        c.push({
            x: 829.9,
            y: 364.7
        });
        c.push({
            x: 825.9,
            y: 345.95
        });
        c.push({
            x: 818.9,
            y: 327.2
        });
        c.push({
            x: 808.15,
            y: 310.2
        });
        c.push({
            x: 795.15,
            y: 293.95
        });
        c.push({
            x: 779.65,
            y: 279.45
        });
        c.push({
            x: 761.65,
            y: 267.2
        });
        c.push({
            x: 742.4,
            y: 256.45
        });
        c.push({
            x: 721.15,
            y: 247.95
        });
        c.push({
            x: 698.65,
            y: 240.45
        });
        c.push({
            x: 673.65,
            y: 236.95
        });
        c.push({
            x: 650.65,
            y: 234.45
        });
        c.push({
            x: 625.65,
            y: 233.95
        });
        c.push({
            x: 603.15,
            y: 235.45
        });
        c.push({
            x: 579.9,
            y: 238.7
        });
        c.push({
            x: 556.9,
            y: 246.2
        });
        c.push({
            x: 534.4,
            y: 254.2
        });
        c.push({
            x: 514.4,
            y: 265.7
        });
        c.push({
            x: 497.65,
            y: 278.2
        });
        c.push({
            x: 482.15,
            y: 292.45
        });
        c.push({
            x: 468.9,
            y: 307.7
        });
        c.push({
            x: 460.65,
            y: 326.2
        });
        c.push({
            x: 455.65,
            y: 344.7
        });
        c.push({
            x: 454.4,
            y: 364.7
        });
        c.push({
            x: 458.15,
            y: 384.7
        });
        c.push({
            x: 466.9,
            y: 403.7
        });
        c.push({
            x: 480.15,
            y: 421.95
        });
        c.push({
            x: 498.15,
            y: 438.2
        });
        c.push({
            x: 520.65,
            y: 453.2
        });
        c.push({
            x: 546.65,
            y: 463.7
        });
        c.push({
            x: 575.4,
            y: 471.45
        });
        c.push({
            x: 605.4,
            y: 475.2
        });
        c.push({
            x: 635.4,
            y: 474.95
        });
        c.push({
            x: 664.4,
            y: 469.95
        });
        c.push({
            x: 690.9,
            y: 460.7
        });
        c.push({
            x: 714.15,
            y: 447.95
        });
        c.push({
            x: 732.65,
            y: 431.2
        });
        c.push({
            x: 743.4,
            y: 418.7
        });
        c.push({
            x: 749.4,
            y: 411.2
        });
        c.push({
            x: 752.15,
            y: 397.95
        });
        c.push({
            x: 757.65,
            y: 379.45
        });
        c.push({
            x: 757.65,
            y: 379.45
        });
        c.push({
            x: 755.65,
            y: 375.7
        });
        c.push({
            x: 756.15,
            y: 366.2
        });
        c.push({
            x: 756.15,
            y: 356.2
        });
        c.push({
            x: 753.65,
            y: 344.95
        });
        c.push({
            x: 751.4,
            y: 346.45
        });
        c.push({
            x: 749.9,
            y: 346.45
        });
        c.push({
            x: 751.65,
            y: 351.7
        });
        c.push({
            x: 754.15,
            y: 356.7
        });
        c.push({
            x: 754.9,
            y: 362.45
        });
        c.push({
            x: 755.9,
            y: 367.45
        });
        c.push({
            x: 756.4,
            y: 374.2
        });
        c.push({
            x: 756.4,
            y: 380.2
        });
        c.push({
            x: 755.65,
            y: 386.7
        });
        c.push({
            x: 754.4,
            y: 392.45
        });
        c.push({
            x: 752.65,
            y: 399.2
        });
        c.push({
            x: 750.15,
            y: 405.45
        });
        c.push({
            x: 747.65,
            y: 411.7
        });
        c.push({
            x: 744.4,
            y: 416.95
        });
        c.push({
            x: 740.65,
            y: 424.45
        });
        c.push({
            x: 736.15,
            y: 429.7
        });
        c.push({
            x: 731.15,
            y: 434.95
        });
        c.push({
            x: 725.65,
            y: 440.95
        });
        c.push({
            x: 720.15,
            y: 446.2
        });
        c.push({
            x: 713.65,
            y: 451.2
        });
        c.push({
            x: 705.9,
            y: 455.45
        });
        c.push({
            x: 698.65,
            y: 460.2
        });
        c.push({
            x: 691.15,
            y: 462.95
        });
        c.push({
            x: 682.15,
            y: 466.7
        });
        c.push({
            x: 673.65,
            y: 469.2
        });
        c.push({
            x: 664.65,
            y: 471.45
        });
        c.push({
            x: 655.15,
            y: 473.45
        });
        c.push({
            x: 646.15,
            y: 475.2
        });
        c.push({
            x: 634.9,
            y: 476.45
        });
        c.push({
            x: 624.9,
            y: 476.45
        });
        c.push({
            x: 614.9,
            y: 476.45
        });
        c.push({
            x: 604.9,
            y: 475.7
        });
        c.push({
            x: 595.65,
            y: 474.2
        });
        c.push({
            x: 586.4,
            y: 472.45
        });
        c.push({
            x: 577.15,
            y: 470.45
        });
        c.push({
            x: 568.65,
            y: 466.95
        });
        c.push({
            x: 561.15,
            y: 464.95
        });
        c.push({
            x: 553.15,
            y: 460.95
        });
        c.push({
            x: 545.15,
            y: 457.95
        });
        c.push({
            x: 539.9,
            y: 452.95
        });
        c.push({
            x: 531.4,
            y: 447.95
        });
        c.push({
            x: 525.9,
            y: 443.45
        });
        c.push({
            x: 518.4,
            y: 439.45
        });
        c.push({
            x: 513.4,
            y: 433.7
        });
        c.push({
            x: 509.15,
            y: 426.95
        });
        c.push({
            x: 504.15,
            y: 420.45
        });
        c.push({
            x: 500.65,
            y: 415.2
        });
        c.push({
            x: 497.4,
            y: 409.7
        });
        c.push({
            x: 495.15,
            y: 403.45
        });
        c.push({
            x: 494.65,
            y: 398.45
        });
        c.push({
            x: 493.4,
            y: 391.2
        });
        c.push({
            x: 492.4,
            y: 385.7
        });
        c.push({
            x: 491.9,
            y: 378.7
        });
        c.push({
            x: 492.4,
            y: 373.7
        });
        c.push({
            x: 492.9,
            y: 367.2
        });
        c.push({
            x: 493.4,
            y: 361.95
        });
        c.push({
            x: 495.15,
            y: 356.2
        });
        c.push({
            x: 497.65,
            y: 350.95
        });
        c.push({
            x: 500.15,
            y: 344.2
        });
        c.push({
            x: 502.65,
            y: 339.2
        });
        c.push({
            x: 505.9,
            y: 334.7
        });
        c.push({
            x: 510.65,
            y: 328.95
        });
        c.push({
            x: 513.9,
            y: 323.95
        });
        c.push({
            x: 518.9,
            y: 318.95
        });
        c.push({
            x: 523.9,
            y: 314.2
        });
        c.push({
            x: 528.9,
            y: 311.2
        });
        c.push({
            x: 533.9,
            y: 306.7
        });
        c.push({
            x: 539.65,
            y: 301.7
        });
        c.push({
            x: 544.65,
            y: 299.2
        });
        c.push({
            x: 550.65,
            y: 295.95
        });
        c.push({
            x: 558.4,
            y: 294.45
        });
        c.push({
            x: 564.9,
            y: 289.95
        });
        c.push({
            x: 572.4,
            y: 289.45
        });
        c.push({
            x: 579.9,
            y: 286.95
        });
        c.push({
            x: 585.15,
            y: 285.95
        });
        c.push({
            x: 592.65,
            y: 283.45
        });
        c.push({
            x: 600.15,
            y: 283.45
        });
        c.push({
            x: 607.9,
            y: 283.45
        });
        c.push({
            x: 613.9,
            y: 281.2
        });
        c.push({
            x: 621.9,
            y: 280.7
        });
        c.push({
            x: 629.4,
            y: 280.7
        });
        c.push({
            x: 636.9,
            y: 280.7
        });
        c.push({
            x: 644.4,
            y: 280.95
        });
        c.push({
            x: 651.9,
            y: 281.95
        });
        c.push({
            x: 658.9,
            y: 284.2
        });
        c.push({
            x: 665.65,
            y: 287.45
        });
        c.push({
            x: 672.65,
            y: 289.95
        });
        c.push({
            x: 679.65,
            y: 291.2
        });
        c.push({
            x: 686.4,
            y: 293.7
        });
        c.push({
            x: 692.4,
            y: 296.2
        });
        c.push({
            x: 699.15,
            y: 298.7
        });
        c.push({
            x: 704.15,
            y: 301.95
        });
        c.push({
            x: 710.65,
            y: 306.95
        });
        c.push({
            x: 715.65,
            y: 309.45
        });
        c.push({
            x: 721.15,
            y: 312.95
        });
        c.push({
            x: 726.15,
            y: 316.95
        });
        c.push({
            x: 731.15,
            y: 321.95
        });
        c.push({
            x: 736.15,
            y: 324.95
        });
        c.push({
            x: 739.9,
            y: 330.95
        });
        c.push({
            x: 742.4,
            y: 335.7
        });
        c.push({
            x: 746.15,
            y: 340.95
        });
        c.push({
            x: 748.65,
            y: 346.45
        });
        p = createBitmap(s_oSpriteLibrary.getSprite("ball"));
        p.x = c[0].x;
        p.y = c[0].y;
        x.addChild(p);
        g = 0
    };
    this.hide = function() {
        m.visible = false;
        x.visible = false;
        g = 0
    };
    this.startSpin = function(a, c, d, e) {
        this.playToFrame(c);
        b = e;
        f = true;
        x.visible = true;
        this.setShowNumberInfo(d);
        h = true
    };
    this.setShowNumberInfo = function(a) {
        u.text = a;
        0 < b ? (q.font = "18px " + FONT1, q.text = b + TEXT_CURRENCY) : (q.font = "22px " + FONT1, q.text = TEXT_YOU_LOSE);
        switch (s_oGameSettings.getColorNumber(a)) {
            case COLOR_BLACK:
                r.gotoAndStop("black");
                break;
            case COLOR_RED:
                r.gotoAndStop("red");
                break;
            case COLOR_ZERO:
                r.gotoAndStop("green")
        }
    };
    this._showNumberExtracted = function() {
        m.scaleX = m.scaleY = .1;
        m.visible = true;
        createjs.Tween.get(m).to({
            scaleX: 1,
            scaleY: 1
        }, 800, createjs.Ease.cubicOut);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) 0 < b ? playSound("win", 1, false) : playSound("lose", 1, false)
    };
    this.playToFrame = function(a) {
        w.visible = false;
        l = a;
        e[l].visible = true;
        w = e[l];
        v.visible = false;
        n[l].visible = true;
        v = n[l]
    };
    this.nextFrame = function() {
        w.visible = false;
        l++;
        e[l].visible = true;
        w = e[l];
        v.visible = false;
        n[l].visible = true;
        v = n[l]
    };
    this._ballSpin =
        function() {
            p.x = c[g].x;
            p.y = c[g].y;
            g++;
            g === NUM_BALL_SPIN_FRAMES ? (h = false, g = NUM_BALL_SPIN_FRAMES - 1, s_oGame._rouletteAnimEnded(), this.hide()) : g === NUM_BALL_SPIN_FRAMES / 2 && this._showNumberExtracted()
        };
    this.isVisible = function() {
        return x.visible
    };
    this.update = function() {
        false !== h && (k++, 2 === k && (k = 0, f && (this._ballSpin(), l === NUM_MASK_BALL_SPIN_FRAMES - 1 ? this.playToFrame(1) : this.nextFrame())))
    };
    this._init(a, d)
}

function CFinalBetPanel(a, d) {
    var h, f;
    this._init = function(a, d) {
        h = [
            [0, 10, 20, 30],
            [1, 11, 21, 31],
            [2, 12, 22, 32],
            [3, 13, 23, 33],
            [4, 14, 24, 34],
            [5, 15, 25, 35],
            [6, 16, 26, 36],
            [7, 17, 27],
            [8, 18, 28],
            [9, 19, 29]
        ];
        f = new createjs.Container;
        f.x = a;
        f.y = d;
        s_oStage.addChild(f);
        for (var b = s_oSpriteLibrary.getSprite("final_bet_bg"), g = b.width / 2, e = b.height / 2, l = 0; 10 > l; l++) {
            var c = new CTextButton(g, e, b, "" + l, FONT1, "#fff", 14, false);
            c.addEventListenerWithParams(ON_MOUSE_UP, this._onFinalBetPressed, this, {
                index: l
            });
            f.addChild(c.getSprite());
            4 ===
                l ? (g = b.width / 2, e += b.height) : g += b.width + 2
        }
        f.visible = false
    };
    this.unload = function() {
        for (var a = 0; a < f.getNumChildren(); a++)
            if (d instanceof CTextButton) {
                var d = f.getChildAt(a);
                d.unload()
            }
    };
    this.show = function() {
        f.visible = true
    };
    this.hide = function() {
        f.visible = false
    };
    this._onFinalBetPressed = function(a) {
        a = a.index;
        s_oGame._onShowBetOnTable({
            button: "oBetFinalsBet",
            numbers: h[a],
            bet_mult: 4 === h[a].length ? 4 : 3,
            bet_win: 4 === h[a].length ? 9 : 12,
            num_fiches: h[a].length
        }, false);
        this.hide()
    };
    this.isVisible = function() {
        return f.visible
    };
    this._init(a, d)
}

function CNeighborsPanel() {
    var a, d, h, f, b, l, k, g, e, n, c, p, w, v, u, q, m, r;
    this._init = function() {
        c = [];
        r = new createjs.Container;
        s_oStage.addChild(r);
        q = new createjs.Shape;
        q.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        q.on("click", function() {});
        r.addChild(q);
        m = new createjs.Container;
        m.x = 265;
        m.y = 85;
        r.addChild(m);
        var a = createBitmap(s_oSpriteLibrary.getSprite("neighbor_bg"));
        m.addChild(a);
        u = new createjs.Text(h + TEXT_CURRENCY, "20px " + FONT1, "#fff");
        u.textAlign = "center";
        u.x = 690;
        u.y =
            564;
        m.addChild(u);
        g = [];
        a = new CEnlight(354, 41, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        g.oEnlight_0 = a;
        a = new CEnlight(212, 505, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-136.8);
        g.oEnlight_1 = a;
        a = new CEnlight(586, 145, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(58.1);
        g.oEnlight_2 = a;
        a = new CEnlight(268, 62, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-19.2);
        g.oEnlight_3 = a;
        a = new CEnlight(523, 84, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(39);
        g.oEnlight_4 = a;
        a = new CEnlight(377, 563, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-175);
        g.oEnlight_5 = a;
        a = new CEnlight(637, 311, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(96.2);
        g.oEnlight_6 = a;
        a = new CEnlight(142, 184, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-58.8);
        g.oEnlight_7 = a;
        a = new CEnlight(504, 530, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(156.5);
        g.oEnlight_8 = a;
        a = new CEnlight(121, 357, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-97);
        g.oEnlight_9 = a;
        a = new CEnlight(421, 560, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(175.6);
        g.oEnlight_10 = a;
        a = new CEnlight(574, 473, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(135.8);
        g.oEnlight_11 = a;
        a = new CEnlight(195, 113, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-39.1);
        g.oEnlight_12 = a;
        a = new CEnlight(619, 399, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(117.4);
        g.oEnlight_13 = a;
        a = new CEnlight(155, 440, s_oSpriteLibrary.getSprite("neighbor_enlight"),
            m);
        a.rotate(-118.2);
        g.oEnlight_14 = a;
        a = new CEnlight(442, 47, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(19.7);
        g.oEnlight_15 = a;
        a = new CEnlight(290, 548, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-156.8);
        g.oEnlight_16 = a;
        a = new CEnlight(628, 226, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(80.2);
        g.oEnlight_17 = a;
        a = new CEnlight(117, 269, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-79.2);
        g.oEnlight_18 = a;
        a = new CEnlight(484, 62, s_oSpriteLibrary.getSprite("neighbor_enlight"),
            m);
        a.rotate(29.6);
        g.oEnlight_19 = a;
        a = new CEnlight(181, 475, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-127.5);
        g.oEnlight_20 = a;
        a = new CEnlight(557, 112, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(49.1);
        g.oEnlight_21 = a;
        a = new CEnlight(115, 314, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-88.9);
        g.oEnlight_22 = a;
        a = new CEnlight(463, 549, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(166.4);
        g.oEnlight_23 = a;
        a = new CEnlight(333, 559, s_oSpriteLibrary.getSprite("neighbor_enlight"),
            m);
        a.rotate(-166.6);
        g.oEnlight_24 = a;
        a = new CEnlight(610, 183, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(69);
        g.oEnlight_25 = a;
        a = new CEnlight(311, 47, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-7.9);
        g.oEnlight_26 = a;
        a = new CEnlight(633, 355, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(106.4);
        g.oEnlight_27 = a;
        a = new CEnlight(166, 146, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-48.1);
        g.oEnlight_28 = a;
        a = new CEnlight(126, 225, s_oSpriteLibrary.getSprite("neighbor_enlight"),
            m);
        a.rotate(-68.3);
        g.oEnlight_29 = a;
        a = new CEnlight(541, 505, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(146);
        g.oEnlight_30 = a;
        a = new CEnlight(134, 400, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-108.2);
        g.oEnlight_31 = a;
        a = new CEnlight(397, 40, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(8.7);
        g.oEnlight_32 = a;
        a = new CEnlight(249, 530, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-146.3);
        g.oEnlight_33 = a;
        a = new CEnlight(636, 268, s_oSpriteLibrary.getSprite("neighbor_enlight"),
            m);
        a.rotate(87.9);
        g.oEnlight_34 = a;
        a = new CEnlight(230, 85, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(-29.1);
        g.oEnlight_35 = a;
        a = new CEnlight(600, 439, s_oSpriteLibrary.getSprite("neighbor_enlight"), m);
        a.rotate(127.1);
        g.oEnlight_36 = a;
        v = new createjs.Container;
        m.addChild(v);
        a = s_oSpriteLibrary.getSprite("hitarea_neighbor");
        var b = new CGfxButton(376, 72, a, m);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 0
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
            this, {
                index: 0
            });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 0
        });
        b = new CGfxButton(415, 76, a, m);
        b.rotate(9.2);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 32
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 32
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 32
        });
        b = new CGfxButton(453, 86, a, m);
        b.rotate(20);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 15
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 15
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 15
        });
        b = new CGfxButton(490, 102, a, m);
        b.rotate(29.4);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 19
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 19
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 19
        });
        b = new CGfxButton(520, 124, a, m);
        b.rotate(39.4);
        b.addEventListenerWithParams(ON_MOUSE_UP,
            this._onNeighborRelease, this, {
                index: 4
            });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 4
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 4
        });
        b = new CGfxButton(549, 150, a, m);
        b.rotate(48.8);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 21
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 21
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 21
        });
        b = new CGfxButton(571,
            181, a, m);
        b.rotate(58.5);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 2
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 2
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 2
        });
        b = new CGfxButton(588, 216, a, m);
        b.rotate(68.7);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 25
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 25
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT,
            this._onNeighborOut, this, {
                index: 25
            });
        b = new CGfxButton(599, 253, a, m);
        b.rotate(78.9);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 17
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 17
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 17
        });
        b = new CGfxButton(604, 291, a, m);
        b.rotate(90.4);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 34
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
            this, {
                index: 34
            });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 34
        });
        b = new CGfxButton(603, 330, a, m);
        b.rotate(96.5);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 6
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 6
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 6
        });
        b = new CGfxButton(596, 368, a, m);
        b.rotate(107.5);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 27
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 27
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 27
        });
        b = new CGfxButton(580, 404, a, m);
        b.rotate(116);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 13
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 13
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 13
        });
        b = new CGfxButton(560, 438, a, m);
        b.rotate(126.2);
        b.addEventListenerWithParams(ON_MOUSE_UP,
            this._onNeighborRelease, this, {
                index: 36
            });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 36
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 36
        });
        b = new CGfxButton(534, 466, a, m);
        b.rotate(135.7);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 11
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 11
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 11
        });
        b = new CGfxButton(504,
            490, a, m);
        b.rotate(145.2);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 30
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 30
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 30
        });
        b = new CGfxButton(471, 510, a, m);
        b.rotate(154.9);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 8
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 8
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT,
            this._onNeighborOut, this, {
                index: 8
            });
        b = new CGfxButton(434, 522, a, m);
        b.rotate(165.2);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 23
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 23
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 23
        });
        b = new CGfxButton(395, 529, a, m);
        b.rotate(174.9);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 10
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
            this, {
                index: 10
            });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 10
        });
        b = new CGfxButton(357, 529, a, m);
        b.rotate(-176.5);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 5
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 5
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 5
        });
        b = new CGfxButton(319, 522, a, m);
        b.rotate(-166);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 24
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 24
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 24
        });
        b = new CGfxButton(282, 509, a, m);
        b.rotate(-156);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 16
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 16
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 16
        });
        b = new CGfxButton(247, 491, a, m);
        b.rotate(-146);
        b.addEventListenerWithParams(ON_MOUSE_UP,
            this._onNeighborRelease, this, {
                index: 33
            });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 33
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 33
        });
        b = new CGfxButton(217, 466, a, m);
        b.rotate(-137);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 1
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 1
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 1
        });
        b = new CGfxButton(193,
            437, a, m);
        b.rotate(-128);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 20
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 20
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 20
        });
        b = new CGfxButton(172, 404, a, m);
        b.rotate(-118.4);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 14
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 14
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT,
            this._onNeighborOut, this, {
                index: 14
            });
        b = new CGfxButton(158, 367, a, m);
        b.rotate(-105.7);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 31
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 31
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 31
        });
        b = new CGfxButton(149, 330, a, m);
        b.rotate(-95.5);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 9
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
            this, {
                index: 9
            });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 9
        });
        b = new CGfxButton(148, 291, a, m);
        b.rotate(-88.2);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 22
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 22
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 22
        });
        b = new CGfxButton(154, 252, a, m);
        b.rotate(-78);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 18
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 18
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 18
        });
        b = new CGfxButton(164, 216, a, m);
        b.rotate(-67.8);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 29
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 29
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 29
        });
        b = new CGfxButton(181, 181, a, m);
        b.rotate(-57.6);
        b.addEventListenerWithParams(ON_MOUSE_UP,
            this._onNeighborRelease, this, {
                index: 7
            });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 7
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 7
        });
        b = new CGfxButton(205, 150, a, m);
        b.rotate(-48.8);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 28
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 28
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 28
        });
        b = new CGfxButton(233,
            124, a, m);
        b.rotate(-39.1);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 12
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 12
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 12
        });
        b = new CGfxButton(265, 102, a, m);
        b.rotate(-29.9);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 35
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 35
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT,
            this._onNeighborOut, this, {
                index: 35
            });
        b = new CGfxButton(300, 86, a, m);
        b.rotate(-19.2);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 3
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver, this, {
            index: 3
        });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 3
        });
        b = new CGfxButton(338, 76, a, m);
        b.rotate(-8.5);
        b.addEventListenerWithParams(ON_MOUSE_UP, this._onNeighborRelease, this, {
            index: 26
        });
        b.addEventListenerWithParams(ON_MOUSE_OVER, this._onNeighborOver,
            this, {
                index: 26
            });
        b.addEventListenerWithParams(ON_MOUSE_OUT, this._onNeighborOut, this, {
            index: 26
        });
        this._initNeighbors();
        w = new CGfxButton(717, 38, s_oSpriteLibrary.getSprite("but_exit"), m);
        w.addEventListener(ON_MOUSE_UP, this.onExit, this);
        this.reset();
        this.hide()
    };
    this.unload = function() {
        q.off("click", function() {});
        for (var a = 0; a < r.getNumChildren(); a++)
            if (b instanceof CGfxButton) {
                var b = r.getChildAt(a);
                b.unload()
            }
    };
    this.showPanel = function(a, b, c) {
        d = a;
        h = b;
        f = c;
        n = [];
        u.text = b.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY;
        r.visible = true
    };
    this.hide =
        function() {
            r.visible = false
        };
    this._initNeighbors = function() {
        b = [
            [3, 26, 0, 32, 15],
            [16, 33, 1, 20, 14],
            [4, 21, 2, 25, 17],
            [12, 35, 3, 26, 0],
            [15, 19, 4, 21, 2],
            [23, 10, 5, 24, 16],
            [17, 34, 6, 27, 13],
            [18, 29, 7, 28, 12],
            [11, 30, 8, 23, 10],
            [14, 31, 9, 22, 18],
            [8, 23, 10, 5, 24],
            [13, 36, 11, 30, 8],
            [7, 28, 12, 35, 3],
            [6, 27, 13, 36, 11],
            [1, 20, 14, 31, 9],
            [0, 32, 15, 19, 4],
            [5, 24, 16, 33, 1],
            [2, 25, 17, 34, 6],
            [9, 22, 18, 29, 7],
            [32, 15, 19, 4, 21],
            [33, 1, 20, 14, 31],
            [19, 4, 21, 2, 25],
            [31, 9, 22, 18, 29],
            [30, 8, 23, 10, 5],
            [10, 5, 24, 16, 33],
            [21, 2, 25, 17, 34],
            [35, 3, 26, 0, 32],
            [34, 6, 27, 13, 36],
            [29, 7, 28,
                12, 35
            ],
            [22, 18, 29, 7, 28],
            [36, 11, 30, 8, 23],
            [20, 14, 31, 9, 22],
            [26, 0, 32, 15, 19],
            [24, 16, 33, 1, 20],
            [25, 17, 34, 6, 27],
            [28, 12, 35, 3, 26],
            [27, 13, 36, 11, 30]
        ];
        p = [];
        p.oAttach_0 = new createjs.Point(377, 70);
        p.oAttach_32 = new createjs.Point(416, 74);
        p.oAttach_15 = new createjs.Point(454, 85);
        p.oAttach_19 = new createjs.Point(492, 101);
        p.oAttach_4 = new createjs.Point(523, 122);
        p.oAttach_21 = new createjs.Point(550, 150);
        p.oAttach_2 = new createjs.Point(572, 180);
        p.oAttach_25 = new createjs.Point(588, 216);
        p.oAttach_17 = new createjs.Point(603, 255);
        p.oAttach_34 = new createjs.Point(607, 294);
        p.oAttach_6 = new createjs.Point(605, 330);
        p.oAttach_27 = new createjs.Point(600, 370);
        p.oAttach_13 = new createjs.Point(585, 408);
        p.oAttach_36 = new createjs.Point(565, 442);
        p.oAttach_11 = new createjs.Point(538, 472);
        p.oAttach_30 = new createjs.Point(506, 494);
        p.oAttach_8 = new createjs.Point(475, 515);
        p.oAttach_23 = new createjs.Point(435, 526);
        p.oAttach_10 = new createjs.Point(398, 536);
        p.oAttach_5 = new createjs.Point(357, 534);
        p.oAttach_24 = new createjs.Point(318, 526);
        p.oAttach_16 =
            new createjs.Point(282, 513);
        p.oAttach_33 = new createjs.Point(245, 494);
        p.oAttach_1 = new createjs.Point(218, 468);
        p.oAttach_20 = new createjs.Point(190, 440);
        p.oAttach_14 = new createjs.Point(173, 406);
        p.oAttach_31 = new createjs.Point(156, 368);
        p.oAttach_9 = new createjs.Point(150, 330);
        p.oAttach_22 = new createjs.Point(148, 292);
        p.oAttach_18 = new createjs.Point(153, 252);
        p.oAttach_29 = new createjs.Point(165, 215);
        p.oAttach_7 = new createjs.Point(182, 183);
        p.oAttach_28 = new createjs.Point(208, 150);
        p.oAttach_12 = new createjs.Point(233,
            123);
        p.oAttach_35 = new createjs.Point(266, 100);
        p.oAttach_3 = new createjs.Point(302, 86);
        p.oAttach_26 = new createjs.Point(339, 76)
    };
    this.reset = function() {
        l = [];
        for (var a = 0; a < NUMBERS_TO_BET; a++) l[a] = 0;
        if (k)
            for (a = 0; a < k.length; a++) v.removeChild(k[a].getSprite());
        k = [];
        e = [];
        f = 0
    };
    this.clearLastBet = function() {
        if (0 !== c.length) {
            var a = c.pop(),
                b = s_oGameSettings.getFicheValues(d);
            l[a] -= b;
            l[a] = roundDecimal(l[a], 1);
            b = e[a];
            0 < b.length ? v.removeChild(b[b.length - 1].getSprite()) : (c = [], l[a] = 0);
            k.pop();
            e[a].pop();
            if (0 === c.length)
                for (k = [], e = [], a = 0; a < NUMBERS_TO_BET; a++) l[a] = 0;
            f = 0
        }
    };
    this.onExit = function() {
        this.hide()
    };
    this.addFicheOnNeighborTable = function() {
        var g = s_oGameSettings.getFicheValues(d);
        if (f + 5 * g > h) s_oGame.showMsgBox(TEXT_ERROR_NO_MONEY_MSG);
        else if (f + 5 * g > MAX_BET) s_oGame.showMsgBox(TEXT_ERROR_MAX_BET_REACHED);
        else {
            f += 5 * g;
            f = roundDecimal(f, 1);
            var k = h - f;
            k = roundDecimal(k, 1);
            u.text = k.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY;
            playSound("chip", 1, false);
            l[a] += g;
            l[a] = roundDecimal(l[a], 1);
            g = s_oGameSettings.generateFichesPileByIndex(l[a]);
            g.sort();
            this._removeFichesPile(e[a]);
            e[a] = [];
            k = p["oAttach_" + a].x;
            for (var m = p["oAttach_" + a].y, q = 0; q < g.length; q++) this._attachFichesPile(g[q], a, k, m), m -= 5;
            n.push(a);
            s_oGame._onShowBetOnTableFromNeighbors({
                button: "oBetNeighbors",
                numbers: b[a],
                bet_mult: 5,
                bet_win: 7.2,
                value: d,
                num_fiches: 5,
                num_clicked: a
            }, false);
            c.push(a)
        }
    };
    this._attachFichesPile = function(a, b, c, d) {
        a = new CFiche(c, d, a, v, .7);
        e[b].push(a);
        k.push(a)
    };
    this._removeFichesPile = function(a) {
        for (var b in a) v.removeChild(a[b].getSprite())
    };
    this.searchForNumClicked = function() {
        for (var b = 0; b < n.length; b++)
            if (n[b] ===
                a) return true;
        return false
    };
    this._onNeighborRelease = function(b) {
        a = b.index;
        this.addFicheOnNeighborTable()
    };
    this.rebet = function(b) {
        a = b;
        this.addFicheOnNeighborTable()
    };
    this._onNeighborOver = function(a) {
        a = b[a.index];
        for (var c = 0; c < a.length; c++) g["oEnlight_" + a[c]].show()
    };
    this._onNeighborOut = function(a) {
        a = b[a.index];
        for (var c = 0; c < a.length; c++) g["oEnlight_" + a[c]].hide()
    };
    this.isVisible = function() {
        return r.visible
    };
    this._init()
}

function CGameOver() {
    var a, d, h, f, b;
    this._init = function() {
        b = new createjs.Container;
        s_oStage.addChild(b);
        var l = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        b.addChild(l);
        a = new createjs.Text(TEXT_NO_MONEY, "36px " + FONT1, "#fff");
        a.textAlign = "center";
        a.lineWidth = 500;
        a.x = CANVAS_WIDTH / 2;
        a.y = 240;
        b.addChild(a);
        d = new createjs.Text(TEXT_RECHARGE_MSG, "20px " + FONT1, "#fff");
        d.textAlign = "center";
        d.lineWidth = 500;
        d.x = CANVAS_WIDTH / 2;
        d.y = 400;
        b.addChild(d);
        h = new CTextButton(CANVAS_WIDTH / 2 + 170, 510, s_oSpriteLibrary.getSprite("but_bg"),
            TEXT_RECHARGE, FONT1, "#fff", 14, false);
        h.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
        b.addChild(h.getSprite());
        f = new CTextButton(CANVAS_WIDTH / 2 - 170, 510, s_oSpriteLibrary.getSprite("but_bg"), TEXT_EXIT, FONT1, "#fff", 14, false);
        f.addEventListener(ON_MOUSE_UP, this._onExit, this);
        b.addChild(f.getSprite());
        this.hide()
    };
    this.unload = function() {
        h.unload();
        f.unload()
    };
    this.show = function() {
        b.visible = true
    };
    this.hide = function() {
        b.visible = false
    };
    this._onRecharge = function() {
        s_oGame.onRecharge()
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._init()
}

function CCreditsPanel() {
    var a, d, h, f, b, l, k, g;
    this._init = function() {
        g = new createjs.Container;
        s_oStage.addChild(g);
        var e = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        g.addChild(e);
        b = new createjs.Shape;
        b.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.addChild(b);
        e = s_oSpriteLibrary.getSprite("msg_box");
        d = createBitmap(e);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        d.regX = e.width / 2;
        d.regY = e.height / 2;
        g.addChild(d);
        l = new createjs.Shape;
        l.graphics.beginFill("#0f0f0f").drawRect(0, 0,
            CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .01;
        l.on("click", this._onLogoButRelease);
        g.addChild(l);
        e = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 234;
        h = new CGfxButton(a, 254, e, g);
        h.addEventListener(ON_MOUSE_UP, this.unload, this);
        f = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px Arial", "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = 300;
        f.textAlign = "center";
        g.addChild(f);
        e = s_oSpriteLibrary.getSprite("logo_tkstar");
        var n = createBitmap(e);
        n.regX = e.width / 2;
        n.regY = e.height / 2;
        n.x = CANVAS_WIDTH / 2;
        n.y = CANVAS_HEIGHT / 2;
        g.addChild(n);
        k = new createjs.Text(TEXT_LINK, "24px Arial", "#ffffff");
        k.x = CANVAS_WIDTH / 2;
        k.y = 440;
        k.textAlign = "center";
        g.addChild(k)
    };
    this.unload = function() {
        l.off("click", this._onLogoButRelease);
        h.unload();
        h = null;
        s_oStage.removeChild(g)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.tkstar.ir")
    };
    this._init()
}

function CHistory(a, d, h) {
    var f, b;
    this._init = function(a, d) {
        b = new createjs.Container;
        b.x = a;
        b.y = d;
        l.addChild(b);
        var e = s_oSpriteLibrary.getSprite("history_bg"),
            g = createBitmap(e);
			g.x = 10;
        b.addChild(g);
        g = new createjs.Text(TEXT_HISTORY, "12px " + FONT1, "#fff");
        g.textAlign = "center";
        g.x = e.width / 2 + 10;
        g.y = 5;
        b.addChild(g);
        this._initNumExtracted()
    };
    this._initNumExtracted = function() {
        f = [];
        for (var a = 24, d = 0; d < ROW_HISTORY; d++) {
            var e = new CHistoryRow(5, a, b);
            f[d] = e;
            a += 22
        }
    };
    this.setPosition = function(a, d) {
        b.x = a;
        b.y = d
    };
    this.showBlack =
        function(a, b) {
            f[a].showBlack(b)
        };
    this.showRed = function(a, b) {
        f[a].showRed(b)
    };
    this.showGreen = function(a, b) {
        f[a].showGreen(b)
    };
    var l = h;
    this._init(a, d)
}
var EASE_LINEAR = 0,
    EASE_CUBIC_IN = 1,
    EASE_QUART_BACKIN = 2,
    EASE_BACKIN = 3,
    EASE_SIN_IN = 4,
    EASE_QUAD_IN = 5,
    EASE_CUBIC_OUT = 6,
    EASE_ELASTIC_OUT = 7,
    EASE_BACKOUT = 8,
    EASE_QUINT_OUT = 9,
    EASE_CUBIC_INOUT = 10;

function CRollingTextController(a, d, h, f, b, l, k) {
    var g, e, n, c, p, w, v, u, q, m, r, t = [],
        x, z;
    this._init = function(a, b, c, d, e, f, g) {
        m = [];
        r = [];
        p = e;
        this.setUpdateInfo(c, d);
        u = f;
        q = g;
        x = a;
        z = b
    };
    this.unload = function() {
        clearInterval(v)
    };
    this.setUpdateInfo = function(a, b) {
        n = parseFloat(a);
        c = n + b;
		c = c.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        g = 0;
        e = Math.round(p / FPS);
        w = 0;
        var d = this;
        v = setInterval(function() {
            d.update()
        }, FPS_TIME)
    };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        r[a] = c
    };
    this.addRollingListener = function(a, b, c) {
        m[ON_CONTROLLER_ROLL] = a;
        r[ON_CONTROLLER_ROLL] = b;
        t = [];
        for (a = 0; a < c.length; a++) t[a] = {
            step: c[a],
            flag: false
        }
    };
    this.increaseValue = function(a) {
        w = a
    };
    this.getTarget = function() {
        return x
    };
    this.update = function() {
        g++;
        if (g > e) g = 0, x.text = c + q, null !== z && (z.text = c + q), clearInterval(v), null !== m[ON_CONTROLLER_END] && void 0 !== m[ON_CONTROLLER_END] && m[ON_CONTROLLER_END].call(r[ON_CONTROLLER_END], this), 0 < w ? this.setUpdateInfo(w) : null !== m[ON_CONTROLLER_REMOVE] && void 0 !== m[ON_CONTROLLER_REMOVE] && m[ON_CONTROLLER_REMOVE].call(r[ON_CONTROLLER_REMOVE], this);
        else {
            switch (u) {
                case EASE_BACKIN:
                    var a =
                        s_oTweenController.easeInBack(g, 0, 1, e);
                    break;
                case EASE_BACKOUT:
                    a = s_oTweenController.easeOutBack(g, 0, 1, e);
                    break;
                case EASE_CUBIC_IN:
                    a = s_oTweenController.easeInCubic(g, 0, 1, e);
                    break;
                case EASE_CUBIC_OUT:
                    a = s_oTweenController.easeOutCubic(g, 0, 1, e);
                    break;
                case EASE_ELASTIC_OUT:
                    a = s_oTweenController.easeOutElastic(g, 0, 1, e);
                    break;
                case EASE_LINEAR:
                    a = s_oTweenController.easeLinear(g, 0, 1, e);
                    break;
                case EASE_QUART_BACKIN:
                    a = s_oTweenController.easeBackInQuart(g, 0, 1, e);
                    break;
                default:
                    a = s_oTweenController.easeLinear(g,
                        0, 1, e)
            }
            a = s_oTweenController.tweenValue(n, c, a);
            for (var b = 0; b < t.length; b++) a > t[b].step && !t[b].flag && (t[b].flag = true, null !== m[ON_CONTROLLER_ROLL] && m[ON_CONTROLLER_ROLL].call(r[ON_CONTROLLER_ROLL], b));
            x.text = a + q;
            null !== z && (z.text = a + q)
        }
    };
    this._init(a, d, h, f, b, l, k)
};