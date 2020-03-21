(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function() {
            for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], d = 0, f = c.length, e = {}; d < f; d++)
                if ((b = c[d]) && b[1] in a) {
                    for (d = 0; d < b.length; d++) e[c[0][d]] =
                        b[d];
                    return e
                }
            return false
        }(),
        f = {
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
                var d = f[b];
                d && a.addEventListener(d, c, false)
            },
            off: function(b,
                c) {
                var d = f[b];
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
var s_iOffsetX, s_iOffsetY, s_bIsRetina;
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
        var f = b.createElement("body");
        f.id = "vpw-test-b";
        f.style.cssText = "overflow:scroll";
        var e = b.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + d + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        f.appendChild(e);
        c.insertBefore(f, b.head);
        a = 7 == e["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(f)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isIOS() {
    isRetina();
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return s_bIsIphone = true;
    return s_bIsIphone = false
}

function isRetina() {
    s_bIsRetina = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches ? true : false
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
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            c = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var f = a - b;
            b += f;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * f
        } else c < d && (f = d - c, c += f, b += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = a / 2 - b / 2;
        var e = d / 2 - c / 2,
            g = CANVAS_WIDTH / c;
        if (e * g < -EDGEBOARD_X || f * g < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, f = (a - b) / 2, e = (d - c) / 2, g = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * e * g;
        s_iOffsetY = -1 * f * g;
        0 <= f && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsRetina ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", a = Math.min(c /
            CANVAS_WIDTH, b / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
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
        f = new createjs.Shape;
    d && b ? f.graphics.beginFill("#fff").drawRect(0, 0, d, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = f;
    return c
}

function createSprite(a, d, b, c, f, e) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -c, f, e);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}

function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d);
    var b = "";
    b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return 10 > a ? b + ("0" + a) : b + a
}
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length) return a.sort();
    var d = Array.prototype.slice.call(arguments);
    return a.sort(function(a, c) {
        for (var b = d.slice(), e = b.shift(); a[e] == c[e] && b.length;) e = b.shift();
        return a[e] == c[e] ? 0 : a[e] > c[e] ? 1 : -1
    })
};

function roundDecimal(a, d) {
    var b = Math.pow(10, d);
    return Math.round(b * a) / b
}

function tweenVectors(a, d, b, c) {
    c.set(a.getX() + b * (d.getX() - a.getX()), a.getY() + b * (d.getY() - a.getY()));
    return c
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
            3 === a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", true, true);
            a.dispatchEvent(d)
        }
    }
};

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
            } catch (f) {
                var c = window.location.ancestorOrigins;
                b = c[c.length - 1]
            }
        } catch (f) {
            b = d.document.referrer
        } else b = d.location.href;
        return b
    },
    TOPFRAMEOBJ = getClosestTop(),
    PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);


function CSpriteLibrary() {
    var a, d, b, c, f, e;
    this.init = function(g, m, n) {
        b = d = 0;
        c = g;
        f = m;
        e = n;
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
        f.call(e)
    };
    this._onSpriteLoaded = function() {
        c.call(e);
        ++b === d && this._onSpritesLoaded()
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
var CANVAS_WIDTH = 1700,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 338,
    EDGEBOARD_Y = 0,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = false,
    FONT_GAME_1 = "MainFont",
    FONT_GAME_2 = "MainFont",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_GAME_WAITING_FOR_BET = 0,
    STATE_GAME_DEALING = 1,
    STATE_GAME_HITTING = 2,
    STATE_GAME_SPLIT = 3,
    STATE_GAME_FINALIZE = 4,
    STATE_GAME_SHOW_WINNER = 5,
    STATE_CARD_DEALING = 0,
    STATE_CARD_SPLIT = 1,
    STATE_CARD_REMOVING = 2,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END =
    5,
    SIT_DOWN = "SIT_DOWN",
    PASS_TURN = "PASS_TURN",
    PLAYER_LOSE = "PLAYER_LOSE",
    ASSIGN_FICHES = "ASSIGN_FICHES",
    FICHES_END_MOV = "FICHES_END_MOV",
    RESTORE_ACTION = "RESTORE_ACTION",
    END_HAND = "END_HAND",
    ON_CARD_SHOWN = "ON_CARD_SHOWN",
    ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
    SPLIT_CARD_END_ANIM = "SPLIT_CARD_END_ANIM",
    ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
    NUM_FICHES = 7,
    CARD_WIDTH = 44,
    CARD_HEIGHT = 63,
    MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, WIN_OCCURRENCE, TIME_FICHES_MOV = 600,
    TIME_CARD_DEALING = 250,
    TIME_CARD_REMOVE =
    1E3,
    TIME_SHOW_FINAL_CARDS = 1000,
    TIME_END_HAND = 1500,
    BET_TIME = 1E4,
    AD_SHOW_COUNTER, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS;
TEXT_PLAY = "شروع بازی";
TEXT_SIT_DOWN = "شروع بازی";
TEXT_CLEAR = "پاک کردن";
TEXT_REBET = "شرط قبلی";
TEXT_DEAL = "شرط بستن";
TEXT_HIT = "کارت";
TEXT_STAND = "توقف";
TEXT_DOUBLE = "دوبرابر";
TEXT_SPLIT = "بریدن";
TEXT_MIN_BET = "حداقل شرط";
TEXT_MAX_BET = "حداکثر شرط";
TEXT_NO = "خیر";
TEXT_YES = "بله";
TEXT_RECHARGE = "شارژ حساب";
TEXT_EXIT = "خروج";
TEXT_CURRENCY = " T ";
TEXT_DISPLAY_MSG_WAITING_BET = "شرط ببندید";
TEXT_DISPLAY_MSG_SIT_DOWN = "برای شروع بازی بنشینید";
TEXT_DISPLAY_MSG_YOUR_ACTION = "حرکت بعدی شما ...";
TEXT_DISPLAY_MSG_DEALER_TURN = "رقیب";
TEXT_DISPLAY_MSG_PLAYER_LOSE = "رقیب برنده ی این دست شد ";
TEXT_DISPLAY_MSG_PLAYER_WIN = "شما برنده ی این دست شدید ";
TEXT_DISPLAY_MSG_PLAYER_STANDOFF = "دست مساوی ";
TEXT_DISPLAY_MSG_DEALING = "بازی ...";
TEXT_SHOW_WIN_PLAYER = "شما برنده شدید ";
TEXT_SHOW_LOSE_PLAYER = "شما باختید ";
TEXT_SHOW_STANDOFF = "دست مساوی";
TEXT_INSURANCE = "آیا میخواهید پول شما بیمه شود ؟";
TEXT_NO_MONEY = "موجودی حساب شما کافی نمیباشد !";
TEXT_ERROR_MIN_BET = "شرط شما از حداقل شرط پایین تر است";
TEXT_ERROR_MAX_BET = "شرط شما از حداکثر شرط بالا تر است";
TEXT_CREDITS_DEVELOPED = "طراحی توسط";

function CPreloader() {
    var a, d, b, c, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_preloader", self.images_location + "bg_preloader.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", self.images_location + "progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var e = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
        f.addChild(e);
        b = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
        b.x = 599;
        b.y = CANVAS_HEIGHT - 50;
        f.addChild(b);
        a = 476;
        c = new createjs.Shape;
        c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(599, CANVAS_HEIGHT - 50, 1, 30);
        f.addChild(c);
        b.mask = c;
        d = new createjs.Text("0%", "30px" + FONT_GAME_1, "#fff");
        d.x = 638;
        d.y = CANVAS_HEIGHT - 56;
        d.textAlign = "center";
        d.textBaseline = "middle";
        f.addChild(d)
    };
    this.refreshLoader = function(b) {
        d.text =
            b + "%";
        b = Math.floor(b * a / 100);
        c.graphics.clear();
        c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(599, CANVAS_HEIGHT - 50, b, 30)
    };
    this._init()
}

function CMain(a) {
    var d, b = 0,
        c = 0,
        f = STATE_LOADING,
        e, g;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        false === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = true);
        s_oSpriteLibrary = new CSpriteLibrary;
        e = new CPreloader;
        s_oGameSettings = new CGameSettings;
        d = true
    };
    this.preloaderReady = function() {
        this._loadImages();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || this._initSounds()
    };
    this.soundLoaded = function() {
        b++;
        e.refreshLoader(Math.floor(b / c * 100));
        b === c && (e.unload(), s_oMain.gotoMenu())
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: self.sounds_location,
            filename: "card",
            loop: false,
            volume: 1,
            ingamename: "card"
        });
        a.push({
            path: self.sounds_location,
            filename: "chip",
            loop: false,
            volume: 1,
            ingamename: "chip"
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
            filename: "press_but",
            loop: false,
            volume: 1,
            ingamename: "press_but"
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
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path +
                a[b].filename + ".ogg"
            ],
            autoplay: false,
            preload: true,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_menu_bg", self.images_location + "but_menu_bg.png");
        s_oSpriteLibrary.addSprite("but_game_bg", self.images_location + "but_game_bg.png");
        s_oSpriteLibrary.addSprite("but_game_small_bg", self.images_location + "but_game_small_bg.png");
        s_oSpriteLibrary.addSprite("but_game_very_small_bg", self.images_location + "but_game_very_small_bg.png");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("play", self.images_location + "play.png");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game_1", self.images_location + "bg_game_1.jpg");
        s_oSpriteLibrary.addSprite("bg_game_2", self.images_location + "bg_game_2.jpg");
        s_oSpriteLibrary.addSprite("bg_game_3", self.images_location + "bg_game_3.jpg");
        s_oSpriteLibrary.addSprite("seat", self.images_location + "seat.png");
        s_oSpriteLibrary.addSprite("card_spritesheet", self.images_location + "card_spritesheet.png");
        s_oSpriteLibrary.addSprite("arrow_hand", self.images_location + "arrow_hand.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("display_bg", self.images_location + "display_bg.png");
        s_oSpriteLibrary.addSprite("bet_bg", self.images_location + "bet_bg.png");
        s_oSpriteLibrary.addSprite("money_bg", self.images_location + "money_bg.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, self.images_location + "fiche_" + a + ".png");
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
        f = STATE_MENU
    };
    this.gotoGame = function() {
        g = new CGame(m);
        f = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        d = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");
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
        if (d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && g.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var m = a;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    SHOW_CREDITS = a.show_credits;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = true,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings, s_bFullscreen = false,
    s_aSounds;

function CTextButton(a, d, b, c, f, e, g, m) {
    var n, h, t, p, q, r, l, v;
    this._init = function(a, b, c, d, f, e, g, m) {
        n = false;
        h = [];
        t = [];
        v = m;
        q = createBitmap(c);
        m = Math.ceil(g / 20);
        r = new createjs.Text(d, g + "px " + f, "#000000");
        var w = r.getBounds();
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        r.x = c.width / 2 + m;
        r.y = Math.floor(c.height / 2) + w.height / 3 + m;
        l = new createjs.Text(d, g + "px " + f, '#000000');
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = c.width / 2;
        l.y = Math.floor(c.height / 2) + w.height / 3;
        p = new createjs.Container;
        p.x = a;
        p.y = b;
        p.regX = c.width /
            2;
        p.regY = c.height / 2;
        p.addChild(q, l);
        p.cursor = "pointer";
        v.addChild(p);
        this._initListener()
    };
    this.unload = function() {
        p.off("mousedown");
        p.off("pressup");
        v.removeChild(p)
    };
    this.setVisible = function(a) {
        p.visible = a
    };
    this.enable = function() {
        n = false;
        l.color = "#000"
    };
    this.disable = function() {
        n = true;
        l.color = "#989191"
    };
    this._initListener = function() {
        oParent = this;
        p.on("mousedown", this.buttonDown);
        p.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        h[a] = b;
        t[a] = c
    };
    this.buttonRelease = function() {
        n ||
            (playSound("press_but", 1, false), p.scaleX = 1, p.scaleY = 1, h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(t[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        n || (p.scaleX = .9, p.scaleY = .9, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        p.x = a;
        p.y = b
    };
    this.changeText = function(a) {
        l.text = a;
        r.text = a
    };
    this.setX = function(a) {
        p.x = a
    };
    this.setY = function(a) {
        p.y = a
    };
    this.getButtonImage = function() {
        return p
    };
    this.getX = function() {
        return p.x
    };
    this.getY = function() {
        return p.y
    };
    this._init(a, d, b, c, f, e, g,
        m);
    return this
}

function CGfxButton(a, d, b) {
    var c, f, e, g, m, n = [],
        h;
    this._init = function(a, b, d) {
        c = false;
        g = [];
        m = [];
        f = d.width;
        e = d.height;
        h = createBitmap(d);
        h.x = a;
        h.y = b;
        h.regX = d.width / 2;
        h.regY = d.height / 2;
        h.cursor = "pointer";
        s_oStage.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", this.buttonDown);
        h.off("pressup", this.buttonRelease);
        s_oStage.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this._initListener = function() {
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    };
    this.addEventListener =
        function(a, b, c) {
            g[a] = b;
            m[a] = c
        };
    this.addEventListenerWithParams = function(a, b, c, d) {
        g[a] = b;
        m[a] = c;
        n = d
    };
    this.buttonRelease = function() {
        c || (playSound("press_but", 1, false), h.scaleX = 1, h.scaleY = 1, g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(m[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        c || (h.scaleX = .9, h.scaleY = .9, g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN], n))
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.setX = function(a) {
        h.x = a
    };
    this.setY = function(a) {
        h.y = a
    };
    this.enable = function() {
        c = false;
        h.filters = [];
        h.cache(0,
            0, f, e)
    };
    this.disable = function() {
        c = true;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        h.filters = [new createjs.ColorMatrixFilter(a)];
        h.cache(0, 0, f, e)
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(a, d, b);
    return this
}

function CToggle(a, d, b, c, f) {
    var e, g, m, n;
    this._init = function(a, b, c, d) {
        g = [];
        m = [];
        var f = new createjs.SpriteSheet({
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
        n = createSprite(f, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        n.x = a;
        n.y = b;
        n.stop();
        h.addChild(n);
        this._initListener()
    };
    this.unload = function() {
        n.off("mousedown", this.buttonDown);
        n.off("pressup", this.buttonRelease);
        s_bMobile || n.off("mouseover", this.buttonOver);
        h.removeChild(n)
    };
    this._initListener = function() {
        n.on("mousedown", this.buttonDown);
        n.on("pressup", this.buttonRelease);
        if (!s_bMobile) n.on("mouseover", this.buttonOver)
    };
    this.addEventListener = function(a, b, c) {
        g[a] = b;
        m[a] = c
    };
    this.setActive = function(a) {
        e = a;
        n.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        n.scaleX = 1;
        n.scaleY = 1;
        playSound("press_but", 1, 0);
        e = !e;
        n.gotoAndStop("state_" + e);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(m[ON_MOUSE_UP], e)
    };
    this.buttonDown = function() {
        n.scaleX = .9;
        n.scaleY = .9;
        g[ON_MOUSE_DOWN] &&
            g[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, b) {
        n.x = a;
        n.y = b
    };
    var h = f;
    this._init(a, d, b, c)
}

function CMenu() {
    var a, d, b, c, f, e, g, m, n, h, t, p, q = null,
        r = null;
    this._init = function() {
        g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(g);
        var l = s_oSpriteLibrary.getSprite("play");
        m = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 80, l, ' ', FONT_GAME_1, "#ffffff", 40, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        var l = s_oSpriteLibrary.getSprite("bg_back");
        m = new CTextButton(CANVAS_WIDTH - l.width / 4 - 140, l.height / 2 + 10, l, ' ', FONT_GAME_1, "#ffffff", 40, s_oStage);
        m.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) l = s_oSpriteLibrary.getSprite("audio_icon"), f = CANVAS_WIDTH - l.width / 4 - 10, e = l.height / 2 + 10, n = new CToggle(f,
            e, l, s_bAudioActive, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var v = s_oSpriteLibrary.getSprite("but_credits");
        l = window.document;
        var w = l.documentElement;
        q = w.requestFullscreen || w.mozRequestFullScreen || w.webkitRequestFullScreen || w.msRequestFullscreen;
        r = l.exitFullscreen || l.mozCancelFullScreen || l.webkitExitFullscreen || l.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (q = false);
        q && screenfull.enabled ? (l = s_oSpriteLibrary.getSprite("but_fullscreen"), b = l.width / 4 + 10, c = l.height / 2 + 10, t = new CToggle(b,
            c, l, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this), a = b + 10 + l.width / 2, d = l.height / 2 + 10) : (a = 10 + v.width / 2, d = v.height / 2 + 10);
        SHOW_CREDITS && (p = new CGfxButton(a, d, v), p.addEventListener(ON_MOUSE_UP, this._onCredits, this));
        h = new createjs.Shape;
        h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(h);
        createjs.Tween.get(h).to({
            alpha: 0
        }, 400).call(function() {
            h.visible = false
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos =
        function(g, h) {
            false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || n.setPosition(f - g, h + e);
            q && screenfull.enabled && t.setPosition(b + g, c + h);
            SHOW_CREDITS && p.setPosition(a + g, d + h)
        };
    this.unload = function() {
        m.unload();
        m = null;
        SHOW_CREDITS && p.unload();
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) n.unload(), n = null;
        q && screenfull.enabled && t.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
        $(s_oMain).trigger("start_session")
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        q && screenfull.enabled && t.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? r.call(window.document) : q.call(window.document.documentElement);
        sizeHandler()
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var d = false,
        b, c, f, e = false,
        g, m, n, h, t, p, q, r, l, v, w, F, y, z, A, E, C, B, G, u, I, D, H, J, N, M, P, x, k, O, L;
    this._init = function() {
        n = MAX_BET;
        h = MIN_BET;
        t = -1;
        F = m = 0;
        s_oTweenController = new CTweenController;
        P = createBitmap(s_oSpriteLibrary.getSprite("bg_game_" + (Math.floor(3 * Math.random()) + 1)));
        s_oStage.addChild(P);
        k = new CSeat;
        k.setCredit(TOTAL_MONEY);
        k.addEventListener(SIT_DOWN, this._onSitDown, this);
        k.addEventListener(RESTORE_ACTION, this._onSetPlayerActions);
        k.addEventListener(PASS_TURN, this._passTurnToDealer);
        k.addEventListener(END_HAND, this._onEndHand);
        k.addEventListener(PLAYER_LOSE, this._playerLose);
        M = new createjs.Container;
        s_oStage.addChild(M);
        x = new CInterface(TOTAL_MONEY);
        self.win = 0;
        self.draw = 0;
        self.lose = 0;
        x.displayMsg(self.win + " برد\n" + self.lose + " باخت\n" + self.draw + " مساوی");
        this.reset(true);
        I = new CVector2;
        I.set(1214, 228);
        D = new CVector2;
        D.set(788, 180);
        H = new CVector2;
        H.set(418, 820);
        J = new CVector2;
        J.set(CANVAS_WIDTH / 2, -100);
        N = new CVector2(408, 208);
        B = [k.getCardOffset(), D];
        x.disableBetFiches();
        O = new CGameOver;
        L = new CMsgBox;
        k.getCredit() < s_oGameSettings.getFichesValueAt(0) ?
            (this._gameOver(), this.changeState(-1)) : d = true;
		this._onSitDown();
		this.changeState(STATE_GAME_WAITING_FOR_BET);
    };
    this.unload = function() {
        d = false;
        for (var a = 0; a < y.length; a++) y[a].unload();
        a = k.getPlayerCards();
        for (var b = 0; b < a.length; b++) a[b].unload();
        x.unload();
        O.unload();
        L.unload();
        s_oStage.removeAllChildren()
    };
    this.reset = function(a) {
        b = true;
        f = c = false;
        l = r = q = p = m = g = 0;
        k.reset();
        y = [];
        y.splice(0);
        A = [];
        A.splice(0);
        x.reset();
        x.enableBetFiches();
        a ? this.shuffleCard() : (v > C.length / 2 || w > z.length / 2) && this.shuffleCard()
    };
    this.shuffleCard = function() {
        E = [];
        E = s_oGameSettings.getShuffledCardDeck();
        C = [];
        z = [];
        for (var a = 0; a < E.length; a++) 0 === a % 2 ? C.push(E[a]) : z.push(E[a]);
        w = v = 0;
        G = [];
        for (a = 0; a < E.length; a++) G[a] = 0
    };
    this.changeState = function(a) {
        t = a;
        switch (t) {
            case STATE_GAME_DEALING:
                if ((K < 2 * k.getCurBet() ? WIN_OCCURRENCE : 100 * Math.random()) < WIN_OCCURRENCE) {
                    e = true;
                    do a = s_oGameSettings.getRandDealerPattern(); while (false === this._checkIfDealerPatternCanBeUsed(a));
                    u = [];
                    for (var b = 0; b < a.length; b++) u[b] = a[b]
                } else e = false;
                x.disableButtons();
                this._dealing()
        }
    };
    this._checkIfDealerPatternCanBeUsed =
        function(a) {
            for (var b = 0; b < a.length; b++)
                if (1 < G[a[b]]) return false;
            return true
        };
    this.attachCardToDeal = function(a, b, c, d) {
        var f = new CCard(I.getX(), I.getY(), M);
        if (c)
            if (e) {
                var g = u.shift();
                w++
            } else {
                do {
                    g = z[w];
                    w++;
                    w > z.length / 2 && (this.shuffleCard(), w = 0);
                    var h = s_oGameSettings.getCardValue(g);
                    11 === h && 21 < q + h && (h = 1)
                } while (21 < q + h || 16 < q + h && q + h < k.getHandValue(0) && 21 > k.getHandValue(0))
            }
        else if (e) {
            do g = C[v], v++, v > C.length / 2 && (this.shuffleCard(), v = 0), h = s_oGameSettings.getCardValue(g), 11 === h && 21 < k.getHandValue(0) + h && (h = 1); while (21 <
                k.getHandValue(0) + h)
        } else {
            do g = C[v], v++, v > C.length / 2 && (this.shuffleCard(), v = 0), h = s_oGameSettings.getCardValue(g), 11 === h && 21 < k.getHandValue(0) + h && (h = 1); while (16 < k.getHandValue(0) + h && 22 > k.getHandValue(0) + h)
        }
        f.setInfo(a, b, g, s_oGameSettings.getCardValue(g), c, d);
        G[g] += 1;
        f.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
        y.push(f);
        playSound("card", 1, false)
    };
    this.cardFromDealerArrived = function(a, b, c) {
        for (var d = 0; d < y.length; d++)
            if (y[d] === a) {
                y.splice(d, 1);
                break
            }false === b ? (k.addCardToHand(a),
            k.increaseHandValue(a.getValue()), 2 < c && k.refreshCardValue()) : (q += a.getValue(), 2 < r && x.refreshDealerCardValue(q), 11 === a.getValue() && l++, A.push(a));
        3 > c ? s_oGame._dealing() : (s_oGame._checkHand(), false === b && f && (f = false, s_oGame._onStandPlayer()))
    };
    this._onStandPlayer = function() {
        k.stand()
    };
    this._checkHand = function() {
        var a;
        if (b) k.checkHand();
        else if (x.refreshDealerCardValue(q), 21 === q)
            for (0 < g && 2 === A.length && (k.increaseCredit(2 * g), K -= 2 * g, x.refreshCredit(k.getCredit())), a = 0; a < k.getNumHands(); a++) this._playerLose(a);
        else 21 < q ? 0 < l ? (l--, q -= 10, x.refreshDealerCardValue(q), 17 > q ? this.hitDealer() : this._checkWinner()) : this._checkWinner() : 17 > q ? this.hitDealer() : this._checkWinner()
    };
    this._playerWin = function(a) {
        var b = 1;
        21 === k.getHandValue(a) && 2 === k.getNumCardsForHand(a) && (b = BLACKJACK_PAYOUT);
        b = k.getBetForHand(a) + parseFloat((k.getBetForHand(a) * b));
        k.increaseCredit(b);
        K -= b;
        k.showWinner(a, TEXT_SHOW_WIN_PLAYER, b, 'win');
        k.initMovement(a, H.getX(), H.getY());
        self.win = parseInt(self.win + 1);
        x.displayMsg(self.win + " برد\n" + self.lose + " باخت\n" + self.draw + " مساوی");
        21 === q ? k.initInsuranceMov(H.getX(),
            H.getY()) : k.initInsuranceMov(J.getX(), J.getY())
    };
    this._playerLose = function(a) {
        k.showWinner(a, TEXT_SHOW_LOSE_PLAYER, 0, 'lose');
        self.lose = parseInt(self.lose + 1);
        x.displayMsg(self.win + " برد\n" + self.lose + " باخت\n" + self.draw + " مساوی");
        k.initMovement(a, J.getX(), J.getY());
        21 === q ? k.initInsuranceMov(H.getX(), H.getY()) : k.initInsuranceMov(J.getX(), J.getY())
    };
    this.playerStandOff = function(a) {
        k.increaseCredit(k.getBetForHand(a));
        K -= k.getBetForHand(a);
        k.showWinner(a, TEXT_SHOW_STANDOFF, 0, 'draw');
        self.draw = parseInt(self.draw + 1);
        x.displayMsg(self.win + " برد\n" + self.lose + " باخت\n" + self.draw + " مساوی");
        k.initMovement(a, H.getX(), H.getY());
        21 === q ? k.initInsuranceMov(H.getX(),
            H.getY()) : k.initInsuranceMov(J.getX(), J.getY())
    };
    this._dealing = function() {
        if (p < 2 * B.length) {
            var a = new CCard(I.getX(), I.getY(), M),
                b = new CVector2(I.getX(), I.getY());
            if (1 === p % B.length) {
                r++;
                var c = new CVector2(D.getX() + (CARD_WIDTH + 2) * (1 < p ? 1 : 0), D.getY());
                var d = e ? u.shift() : z[w];
                a.setInfo(b, c, d, s_oGameSettings.getCardValue(d), true, r);
                G[d] += 1;
                w++;
                2 === r && a.addEventListener(ON_CARD_SHOWN, this._onCardShown)
            } else a.setInfo(b, k.getAttachCardOffset(), C[v], s_oGameSettings.getCardValue(C[v]), false, k.newCardDealed()), G[C[v]] +=
                1, v++;
            y.push(a);
            p++;
            a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
            a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
            playSound("card", 1, false)
        } else this._checkAvailableActionForPlayer()
    };
    this.hitDealer = function() {
        var a = new CVector2(I.getX(), I.getY()),
            b = new CVector2(D.getX() + (CARD_WIDTH + 3) * r, D.getY());
        r++;
        this.attachCardToDeal(a, b, true, r);
        this.changeState(STATE_GAME_HITTING);
        playSound("card", 1, false)
    };
    this._checkWinner = function() {
        for (var a = 0; a < k.getNumHands(); a++) 21 < k.getHandValue(a) ?
            this._playerLose(a) : 21 < q ? this._playerWin(a) : 22 > k.getHandValue(a) && k.getHandValue(a) > q ? this._playerWin(a) : k.getHandValue(a) === q ? this.playerStandOff(a) : this._playerLose(a)
    };
    this._onEndHand = function() {
        for (var a = new CVector2(N.getX(), N.getY()), b = 0; b < A.length; b++) A[b].initRemoving(a), A[b].hideCard();
        b = k.getPlayerCards();
        for (var c = 0; c < b.length; c++) b[c].initRemoving(a), b[c].hideCard();
        k.clearText();
        x.clearDealerText();
        m = 0;
        s_oGame.changeState(STATE_GAME_SHOW_WINNER);
        playSound("fiche_collect", 1, false);
        F++;
        F ===
            AD_SHOW_COUNTER && (F = 0, $(s_oMain).trigger("show_interlevel_ad"))
    };
    this.ficheSelected = function(a, b) {
        var c = k.getCurBet();
        a > k.getCredit() ? L.show(TEXT_NO_MONEY) : c + a > n ? L.show(TEXT_ERROR_MAX_BET) : (c = Number((c + a)), k.decreaseCredit(a), K += a, k.changeBet(c), k.refreshFiches(a, b, 0, 0), k.bet(c, false), x.enable(true, false, false, false, false), x.refreshCredit(k.getCredit()))
    };
    this._checkAvailableActionForPlayer = function() {
        this.changeState(-1);
        var a = k.getHandValue(0);
        if (21 === a) k.refreshCardValue(), this._passTurnToDealer();
        else {
            21 <
                a && k.removeAce();
            k.refreshCardValue();
            a = false;
            k.isSplitAvailable() && k.getCredit() >= 1.5 * k.getCurBet() && (a = true);
            var b = false;
            2 === k.getNumCardsForHand(0) && 8 < k.getHandValue(0) && 16 > k.getHandValue(0) && k.getCredit() >= k.getCurBet() && !c && (b = true);
            x.enable(false, true, true, b, a);
            11 === A[0].getValue() && k.getCredit() >= k.getCurBet() / 2 && (g = k.getCurBet() / 2, x.showInsurancePanel())
        }
    };
    this._passTurnToDealer = function() {
        b && (b = false, x.disableButtons(), A[1].showCard(), playSound("card", 1, false))
    };
    this._gameOver = function() {
        O.show()
    };
    this.onFicheSelected = function(a, b) {
        this.ficheSelected(b, a)
    };
    this._onSetPlayerActions = function(a, b, c, d, f) {
        x.enable(a, b, c, d, f);
        k.refreshCardValue()
    };
    this._onSitDown = function() {
        this.changeState(STATE_GAME_WAITING_FOR_BET);
        x.enableBetFiches()
    };
    this.onDeal = function() {
        h > k.getCurBet() ? (L.show(TEXT_ERROR_MIN_BET), s_oInterface.enableBetFiches(), s_oInterface.enable(true, false, false, false, false)) : (this.changeState(STATE_GAME_DEALING), $(s_oMain).trigger("bet_placed", k.getCurBet()))
    };
    this.onHit =
        function() {
            var a = new CVector2(I.getX(), I.getY()),
                b = new CVector2(k.getAttachCardOffset().getX(), k.getAttachCardOffset().getY());
            this.attachCardToDeal(a, b, false, k.newCardDealed());
            this.changeState(STATE_GAME_HITTING)
        };
    this.onStand = function() {
        k.stand()
    };
    this.onDouble = function() {
        var a = k.getCurBet();
        var b = a + a;
        k.doubleAction(b);
        k.changeBet(b);
        k.decreaseCredit(a);
        K += a;
        K < 2 * b && (e = false);
        k.bet(b);
        x.refreshCredit(k.getCredit());
        this.onHit();
        f = true;
        $(s_oMain).trigger("bet_placed", a)
    };
    this.onSplit = function() {
        K < 4 * k.getCurBet() &&
            (e = false);
        k.split();
        this.changeState(STATE_GAME_SPLIT)
    };
    this._onSplitCardEndAnim = function() {
        var a = k.getCurBet(),
            b = a;
        a += b;
        k.bet(a, true);
        c = true;
        x.enable(false, true, true, false, false);
        k.setSplitHand();
        k.refreshCardValue();
        k.changeBet(a - b);
        k.decreaseCredit(b);
        K += b;
        x.refreshCredit(k.getCredit());
        $(s_oMain).trigger("bet_placed", b)
    };
    this.clearBets = function() {
        var a = k.getStartingBet();
        0 < a && (k.clearBet(), k.increaseCredit(a), K -= a, x.refreshCredit(k.getCredit()))
    };
    this.rebet = function() {
        this.clearBets();
        k.rebet() ? (x.enable(true, false, false, false, false), x.refreshCredit(k.getCredit()), m = BET_TIME) : x.disableRebet()
    };
    this.onBuyInsurance = function() {
        var a = k.getCurBet();
        a += g;
        k.insurance(a, -g, g);
        x.refreshCredit(k.getCredit())
    };
    this._onCardShown = function() {
        s_oGame._checkHand()
    };
    this._onRemoveCard = function(a) {
        a.unload()
    };
    this.onExit = function() {
        this.unload();
        $(s_oMain).trigger("save_score", [k.getCredit(), '']);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", k.getCredit());
        s_oMain.gotoMenu()
    };
    this.getState = function() {
        return t
    };
    this._updateWaitingBet =
        function() {
            m += s_iTimeElaps;
            m > BET_TIME ? (m = 0, k.getCurBet() < h || (x.disableBetFiches(), x.enable(true, false, false, false, false), this.changeState(STATE_GAME_DEALING), $(s_oMain).trigger("bet_placed", k.getCurBet()))) : ''
        };
    this._updateDealing = function() {
        for (var a = 0; a < y.length; a++) y[a].update()
    };
    this._updateHitting = function() {
        for (var a = 0; a < y.length; a++) y[a].update()
    };
    this._updateSplit = function() {
        k.updateSplit()
    };
    this._updateShowWinner = function() {
        k.updateFichesController(s_iTimeElaps);
        for (var a = k.getPlayerCards(), b = 0; b < a.length; b++) a[b].update();
        for (a = 0; a < A.length; a++) A[a].update();
        m += s_iTimeElaps;
        m > TIME_END_HAND && (m = 0, this.reset(false), x.reset(), k.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : this.changeState(STATE_GAME_WAITING_FOR_BET), x.refreshCredit(k.getCredit()))
    };
    this.update = function() {
        if (false !== d) switch (t) {
            case STATE_GAME_WAITING_FOR_BET:
                this._updateWaitingBet();
                break;
            case STATE_GAME_DEALING:
                this._updateDealing();
                break;
            case STATE_GAME_HITTING:
                this._updateHitting();
                break;
            case STATE_GAME_SPLIT:
                this._updateSplit();
                break;
            case STATE_GAME_SHOW_WINNER:
                this._updateShowWinner()
        }
    };
    s_oGame = this;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    BET_TIME = a.bet_time;
    BLACKJACK_PAYOUT = a.blackjack_payout;
    WIN_OCCURRENCE = a.win_occurrence;
    var K = a.game_cash;
    AD_SHOW_COUNTER = a.ad_show_counter;
    this._init()
}
var s_oGame, s_oTweenController;

function CInterface(a) {
    var d, b, c, f, e, g, m, n, h, t, p, q, r, l, v, w, F, y, z, A, E, C, B = null,
        G = null;
    this._init = function(a) {
        var u = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - u.width / 2 - 10;
        f = u.height / 2 + 10;
        n = new CGfxButton(c, f, u, true);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        false === DISABLE_SOUND_MOBILE || false === s_bMobile ? (e = n.getX() - u.width - 10, g = u.height / 2 + 10, w = new CToggle(e, g, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), d = e - u.width - 10, b = g - 4) : (d = n.getX() - u.width, b = u.height / 2);
        u = window.document;
        var D = u.documentElement;
        B = D.requestFullscreen || D.mozRequestFullScreen || D.webkitRequestFullScreen || D.msRequestFullscreen;
        G = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (B = false);
        B && screenfull.enabled && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), C = new CToggle(d, b, u, s_bFullscreen, s_oStage), C.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        u = createBitmap(s_oSpriteLibrary.getSprite("display_bg"));
        u.x = 290;
        u.y = 6;
        s_oStage.addChild(u);
        u = s_oSpriteLibrary.getSprite("bet_bg");
        D = createBitmap(u);
        D.x = 340;
        D.y = CANVAS_HEIGHT - u.height + 4;
        s_oStage.addChild(D);
        u = s_oSpriteLibrary.getSprite("but_game_small_bg");
        h = new CTextButton(444, CANVAS_HEIGHT - 30, u, TEXT_CLEAR, FONT_GAME_1, "#ffffff", 14, s_oStage);
        h.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
        t = new CTextButton(632, CANVAS_HEIGHT - 30, u, TEXT_REBET, FONT_GAME_1, "#ffffff", 14, s_oStage);
        t.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
        j = new CTextButton(632, CANVAS_HEIGHT - 63, u, 'مبلغ را وارد کنید', FONT_GAME_1, "#ffffff", 14, s_oStage);
        j.addEventListener(ON_MOUSE_UP, function(){
            var d2, count_1000000, count_10000000, count_100000, count_10000, count_1000, count_100, count_50;
            d2 = window.prompt('مبلغ را به تومان وارد کنید');
            d2 = Math.floor(d2);
			count_10000000 = d2 / 10000000;
			count_10000000 = Math.floor(count_10000000);
			if(count_10000000 >= 1){
				d2 = d2 - (count_10000000 * 10000000);
			}
			count_1000000 = d2 / 1000000;
			count_1000000 = Math.floor(count_1000000);
			if(count_1000000 >= 1){
				d2 = d2 - (count_1000000 * 1000000);
			}
			count_100000 = d2 / 100000;
			count_100000 = Math.floor(count_100000);
			if(count_100000 >= 1){
				d2 = d2 - (count_100000 * 100000);
			}
			count_10000 = d2 / 10000;
			count_10000 = Math.floor(count_10000);
			if(count_10000 >= 1){
				d2 = d2 - (count_10000 * 10000);
			}
			count_1000 = d2 / 1000;
			count_1000 = Math.floor(count_1000);
			if(count_1000 >= 1){
				d2 = d2 - (count_1000 * 1000);
			}
			count_100 = d2 / 100;
			count_100 = Math.floor(count_100);
			if(count_100 >= 1){
				d2 = d2 - (count_100 * 100);
			}
			count_25 = d2 / 50;
			count_25 = Math.floor(count_25);
			if(count_25 >= 1){
				d2 = d2 - (count_25 * 50);
			}
			for(var i_1 = 0; i_1 < count_10000000; i_1++)this._onFicheClicked([10000000, 6]);
			for(var i_1 = 0; i_1 < count_1000000; i_1++)this._onFicheClicked([1000000, 5]);
			for(var i_1 = 0; i_1 < count_100000; i_1++)this._onFicheClicked([100000, 4]);
			for(var i_1 = 0; i_1 < count_10000; i_1++)this._onFicheClicked([10000, 3]);
			for(var i_1 = 0; i_1 < count_1000; i_1++)this._onFicheClicked([1000, 2]);
			for(var i_1 = 0; i_1 < count_100; i_1++)this._onFicheClicked([100, 1]);
			for(var i_1 = 0; i_1 < count_25; i_1++)this._onFicheClicked([50, 0]);
        }, this);
        i = new CTextButton(444, CANVAS_HEIGHT - 63, u, 'همه موجودی', FONT_GAME_1, "#ffffff", 14, s_oStage);
        i.addEventListener(ON_MOUSE_UP, function() {
            var d2, count_10000000, count_1000000, count_100000, count_10000, count_1000, count_100, count_50;
            d2 = self._user_credit;
			count_10000000 = d2 / 10000000;
			count_10000000 = Math.floor(count_10000000);
			if(count_10000000 >= 1){
				d2 = d2 - (count_10000000 * 10000000);
			}
			count_1000000 = d2 / 1000000;
			count_1000000 = Math.floor(count_1000000);
			if(count_1000000 >= 1){
				d2 = d2 - (count_1000000 * 1000000);
			}
			count_100000 = d2 / 100000;
			count_100000 = Math.floor(count_100000);
			if(count_100000 >= 1){
				d2 = d2 - (count_100000 * 100000);
			}
			count_10000 = d2 / 10000;
			count_10000 = Math.floor(count_10000);
			if(count_10000 >= 1){
				d2 = d2 - (count_10000 * 10000);
			}
			count_1000 = d2 / 1000;
			count_1000 = Math.floor(count_1000);
			if(count_1000 >= 1){
				d2 = d2 - (count_1000 * 1000);
			}
			count_100 = d2 / 100;
			count_100 = Math.floor(count_100);
			if(count_100 >= 1){
				d2 = d2 - (count_100 * 100);
			}
			count_50 = d2 / 50;
			count_50 = Math.floor(count_50);
			if(count_50 >= 1){
				d2 = d2 - (count_50 * 1);
			}
			for(var i_1 = 0; i_1 < count_10000000; i_1++)this._onFicheClicked([10000000, 6]);
			for(var i_1 = 0; i_1 < count_1000000; i_1++)this._onFicheClicked([1000000, 5]);
			for(var i_1 = 0; i_1 < count_100000; i_1++)this._onFicheClicked([100000, 4]);
			for(var i_1 = 0; i_1 < count_10000; i_1++)this._onFicheClicked([10000, 3]);
			for(var i_1 = 0; i_1 < count_1000; i_1++)this._onFicheClicked([1000, 2]);
			for(var i_1 = 0; i_1 < count_100; i_1++)this._onFicheClicked([100, 1]);
			for(var i_1 = 0; i_1 < count_50; i_1++)this._onFicheClicked([50, 0]);
		}, this);
        z = new createjs.Text("",
            "20px " + FONT_GAME_2, "#ffde00");
        z.x = 500;
        z.y = 20;
        z.lineWidth = 100;
        z.textAlign = "left";
        z.lineHeight = 30;
        s_oStage.addChild(z);
        A = new createjs.Text("", "18px " + FONT_GAME_2, "#ffde00");
        A.x = 412;
        A.y = 70;
        z.lineWidth = 140;
        A.textAlign = "left";
        A.lineHeight = 20;
        s_oStage.addChild(A);
        y = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
        y.x = 758;
        y.y = 180;
        y.textAlign = "right";
        s_oStage.addChild(y);
        u = createBitmap(s_oSpriteLibrary.getSprite("money_bg"));
        u.x = 1127;
        u.y = CANVAS_HEIGHT - 100;
        s_oStage.addChild(u);
        F = new createjs.Text(a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY, "29px " + FONT_GAME_2, "#ffde00");
        F.x = 1240;
        F.y = CANVAS_HEIGHT - 95;
        F.textAlign = "center";
        s_oStage.addChild(F);
        u = s_oSpriteLibrary.getSprite("but_game_bg");
        p = new CTextButton(908, CANVAS_HEIGHT - 30, u, TEXT_DEAL, FONT_GAME_1, "#000000", 20, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
        q = new CTextButton(1008, CANVAS_HEIGHT - 30, u, TEXT_HIT, FONT_GAME_1, "#000000", 20, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onButHitRelease, this);
        r = new CTextButton(1108,
            CANVAS_HEIGHT - 30, u, TEXT_STAND, FONT_GAME_1, "#000000", 20, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onButStandRelease, this);
        l = new CTextButton(1208, CANVAS_HEIGHT - 30, u, TEXT_DOUBLE, FONT_GAME_1, "#000000", 20, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onButDoubleRelease, this);
        v = new CTextButton(1308, CANVAS_HEIGHT - 30, u, TEXT_SPLIT, FONT_GAME_1, "#000000", 20, s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onButSplitRelease, this);
        a = [{
            x: 387,
            y: 662
        }, {
            x: 447,
            y: 662
        }, {
            x: 507,
            y: 662
        }, {
            x: 567,
            y: 662
        }, {
            x: 627,
            y: 662
        }, {
            x: 687,
            y: 662
        }];
        m = [];
        for (D = 0; D < NUM_FICHES; D++) {
			if(D == 6)continue;
            var H = s_oGameSettings.getFichesValues();
            u = s_oSpriteLibrary.getSprite("fiche_" + D);
            m[D] = new CGfxButton(a[D].x, a[D].y, u, s_oStage);
            m[D].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [H[D], D])
        }
        E = new CInsurancePanel;
        FICHE_WIDTH = u.width;
        this.disableButtons();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        n.unload();
        n = null;
        false === DISABLE_SOUND_MOBILE && (w.unload(), w = null);
        B && screenfull.enabled && C.unload();
        s_oStage.removeChild(F);
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, h) {
        n.setPosition(c - a, h + f);
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || w.setPosition(e - a, h + g);
        B && screenfull.enabled && C.setPosition(d - a, b + h)
    };
    this.reset = function() {
        this.disableButtons()
    };
    this.enableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++) {
			if(a == 6) continue;
			m[a].enable();
        }
		h.enable();
        i.enable();
        j.enable();
        t.enable()
    };
    this.disableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++) {
			if(a == 6) continue;
			m[a].disable();
        }
        h.disable();
        j.disable();
        i.disable();
        t.disable()
    };
    this.disableRebet = function() {
        t.disable()
    };
    this.disableButtons = function() {
        p.disable();
        q.disable();
        r.disable();
        l.disable();
        v.disable()
    };
    this.enable = function(a, b, c, d, f) {
        a ? p.enable() : p.disable();
        b ? q.enable() : q.disable();
        c ? r.enable() : r.disable();
        d ? l.enable() : l.disable();
        f ? v.enable() : v.disable()
    };
    this.refreshCredit = function(a) {
        F.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.refreshDealerCardValue = function(a) {
        y.text = "" + a
    };
    this.displayMsg = function(a, b) {
        z.text = a;
        A.text = b
    };
    this.showInsurancePanel = function() {
        E.show(TEXT_INSURANCE)
    };
    this.clearDealerText = function() {
        y.text = ""
    };
    this._onFicheClicked = function(a) {
        s_oGame.onFicheSelected(a[1],
            a[0])
    };
    this._onButClearRelease = function() {
        s_oGame.clearBets()
    };
    this._onButRebetRelease = function() {
        s_oGame.rebet()
    };
    this._onButDealRelease = function() {
        this.disableBetFiches();
        this.disableButtons();
        s_oGame.onDeal()
    };
    this._onButHitRelease = function() {
        this.disableButtons();
        s_oGame.onHit()
    };
    this._onButStandRelease = function() {
        this.disableButtons();
        s_oGame.onStand()
    };
    this._onButDoubleRelease = function() {
        this.disableButtons();
        s_oGame.onDouble()
    };
    this._onButSplitRelease = function() {
        this.disableButtons();
        s_oGame.onSplit()
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this.resetFullscreenBut = function() {
        B && screenfull.enabled && C.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? G.call(window.document) : B.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;

function CTweenController() {
    this.tweenValue = function(a, d, b) {
        return a + b * (d - a)
    };
    this.easeLinear = function(a, d, b, c) {
        return b * a / c + d
    };
    this.easeInCubic = function(a, d, b, c) {
        c = (a /= c) * a * a;
        return d + b * c
    };
    this.easeBackInQuart = function(a, d, b, c) {
        c = (a /= c) * a;
        return d + b * (2 * c * c + 2 * c * a + -3 * c)
    };
    this.easeInBack = function(a, d, b, c) {
        return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
    };
    this.easeOutCubic = function(a, d, b, c) {
        return b * ((a = a / c - 1) * a * a + 1) + d
    }
}

function CSeat() {
    var a, d, b, c, f, e, g, m, n, h, t, p, q, r, l, v, w, F, y, z, A, E, C, B, G;
    this._init = function() {
        h = new createjs.Container;
        h.x = 734;
        h.y = 360;
        var a = createBitmap(s_oSpriteLibrary.getSprite("seat"));
        a.x = 66;
        a.y = 175;
        h.addChild(a);
        a = s_oSpriteLibrary.getSprite("but_game_small_bg");
        q = new createjs.Text("", "20px " + FONT_GAME_1, "#ffde00");
        q.x = 84;
        q.y =
            208;
        q.textAlign = "right";
        h.addChild(q);
        r = new createjs.Text("", "20px " + FONT_GAME_1, "#ffde00");
        r.x = 175;
        r.y = 208;
        r.textAlign = "left";
        h.addChild(r);
        t = new createjs.Text("", "20px " + FONT_GAME_1, "#ffffff");
        t.x = 56;
        t.y = 105;
        t.textAlign = "right";
        h.addChild(t);
        p = new createjs.Text("", "20px " + FONT_GAME_1, "#ffffff");
        p.x = 138;
        p.y = 105;
        p.textAlign = "left";
        h.addChild(p);
        y = new createjs.Text("",
            "20px " + FONT_GAME_1, "#ffffff");
        y.x = 0;
        y.y = 240;
        y.textAlign = "center";
        h.addChild(y);
        z = new createjs.Text("", "20px " + FONT_GAME_1, "#ffffff");
        z.x = 150;
        z.y = 240;
        z.textAlign = "left";
        h.addChild(z);
        A = createBitmap(s_oSpriteLibrary.getSprite("arrow_hand"));
        A.visible = false;
        h.addChild(A);
        s_oStage.addChild(h);
        v = new CVector2;
        v.set(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        E = new CFichesController({
            x: 834,
            y: 566
        }, v);
        f = 0;
        e = [];
        g = [];
        this.reset();
        w = new CVector2;
        w.set(64, 163);
        n = new CVector2(w.getX(), w.getY());
        F = new CVector2;
        F.set(172, 163);
        B = [];
        G = []
    };
    this.unload = function() {
        s_oStage.removeChild(h)
    };
    this.addEventListener = function(a, b, c) {
        B[a] = b;
        G[a] = c
    };
    this.reset = function() {
        c = b = 0;
        d = a = false;
        for (var f = 0; f < e.length; f++) e[f].getFichesController().reset();
        e = [];
        f = new CHandController(w, E);
        e.push(f);
        for (f = 0; f < g.length; f++) g[f].unload();
        g = [];
        m = [];
        E.addEventListener(FICHES_END_MOV, this._onFichesEndMove);
        C = null;
        this.clearText();
    };
    this.clearText = function() {
        q.text =
            "";
        r.text = "";
        t.text = "";
        p.text = ""
    };
    this.clearBet = function() {
        E.reset();
        m = [];
        q.text = "";
        e[b].changeBet(0)
    };
    this.addCardToHand = function(a) {
        e[b].addCard(a);
        g.push(a);
        a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard)
    };
    this.increaseHandValue = function(a) {
        e[b].increaseHandValue(a)
    };
    this.refreshCardValue = function() {
        t.text = "" + this.getHandValue(0);
        0 < this.getHandValue(1) && (p.text = "" + this.getHandValue(1))
    };
    this.setCredit = function(a) {
		self._user_credit = a;
        f = a
    };
    this.increaseCredit = function(a) {
		self._user_credit = f + a;
        f += a
    };
    this.changeBet = function(a) {
        e[b].changeBet(a)
    };
    this.checkHand = function() {
        var c = e[b].getValue();
        if (21 === c) this.checkPlayerLastHand(PASS_TURN);
        else if (21 < c) 0 < e[b].getAces() ? (e[b].removeAce(), 21 === e[b].getValue() ? this.checkPlayerLastHand(PASS_TURN) : a ? this.checkPlayerLastHand(PASS_TURN) : B[RESTORE_ACTION] && B[RESTORE_ACTION].call(G[RESTORE_ACTION], false, true, true, false, false), this.refreshCardValue()) : 1 < e.length || d ? this.checkPlayerLastHand(PASS_TURN) : this.checkPlayerLastHand(PLAYER_LOSE);
        else if (a) this.checkPlayerLastHand(PASS_TURN);
        else {
            var f = false;
            2 === e[b].getNumCards() &&
                8 < c && 16 > c ? f = true : 0 < this.getAces() && (21 < c ? (c -= 10, this.removeAce(), 8 < c && 16 > c && (f = true)) : (c -= 10, 2 === e[b].getNumCards() && 8 < c && 16 > c && (f = true)));
            B[RESTORE_ACTION] && B[RESTORE_ACTION].call(G[RESTORE_ACTION], false, true, true, f, false)
        }
    };
    this.checkPlayerLastHand = function(a) {
        b--; - 1 < b ? (B[RESTORE_ACTION] && B[RESTORE_ACTION].call(G[RESTORE_ACTION], false, true, true, false, false), A.x = w.getX()) : (B[a] && B[a].call(G[a], 0), this.removeArrow())
    };
    this.bet = function(a, b) {
        b ? (q.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY / 2, r.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY / 2) : q.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.setSplitHand =
        function() {
            for (var a = [], c = 0; c < m.length; c++) a.push(m[c]);
            C = new CFichesController({
                x: 950,
                y: 566
            }, v);
            C.refreshFiches(a, 0, 0, false);
            C.addEventListener(C.FICHES_END_MOV, this._onFichesEndMove);
            a = new CHandController(F, C);
            e.push(a);
            e[1].addCard(e[0].getCard(1));
            e[0].removeCard(1);
            e[1].setHandValue(e[0].getValue());
            b = e.length - 1
        };
    this.decreaseCredit = function(a) {
		self._user_credit = f - a;
        f -= a
    };
    this.stand = function() {
        this.checkPlayerLastHand(PASS_TURN)
    };
    this.refreshFiches = function(a, b, c, d) {
        m.push({
            value: a,
            index: b
        });
        E.refreshFiches(m, c, d)
    };
    this.initMovement = function(a, b, c) {
        this.getFichesController(a).initMovement(b, c, false)
    };
    this.initInsuranceMov = function(a, b) {
        E.initInsuranceMov(a, b)
    };
    this.showWinner = function(a, b, c, t) {
        0 < c ? (0 === a ? y.text = b + ": " + c : z.text = b + ": " + c, playSound("win", 1, false)) : (0 === a ? y.text = b : z.text = b, playSound("lose", 1, false));
        var type = 0 < c ? 'win' : 'lose';
        var d = this;
        0 === a ? createjs.Tween.get(y).to({
            alpha: 1
        }, TIME_SHOW_FINAL_CARDS).call(function() {
            d.endWinAnim()
        }) : createjs.Tween.get(z).to({
            alpha: 1
        }, TIME_SHOW_FINAL_CARDS).call(function() {
            d.endWinAnim()
        });
        $(s_oMain).trigger("save_score", [f, t])
    };
    this.endWinAnim = function() {
        y && z && (y.text = "", z.text = "", B[END_HAND] && B[END_HAND].call(G[END_HAND]))
    };
    this.newCardDealed = function() {
        c++;
        return c
    };
    this.removeAce = function() {
        e[b].removeAce()
    };
    this.removeArrow = function() {
        A.visible = false
    };
    this.doubleAction = function(a) {
        e[b].changeBet(a);
        a = [];
        for (var c = 0; c < m.length; c++) a.push(m[c]);
        1 < e.length ? 1 === b ? C.refreshFiches(a, 0, 40) : E.refreshFiches(a, 0, 40) : E.refreshFiches(a, 0, 40)
    };
    this.split = function() {
        g[0].initSplit(new CVector2(h.x + w.getX(), h.y + w.getY()));
        g[1].initSplit(new CVector2(h.x +
            F.getX(), h.y + F.getY()));
        g[1].addEventListener(SPLIT_CARD_END_ANIM, this._onSplitCardEndAnim)
    };
    this.insurance = function(a, b, c) {
        this.changeBet(a);
        this.increaseCredit(b);
        a = E.createFichesPile(c, true);
        m = [];
        for (b = 0; b < a.length; b++) m.push({
            value: a[b].value,
            index: a[b].index
        });
        d = true
    };
    this.rebet = function() {
        var a = E.getPrevBet();
        if (a > f || 0 === a) return false;
        this.decreaseCredit(a);
        this.changeBet(a);
        var b = E.createFichesPile(a, false);
        m = [];
        for (var c = 0; c < b.length; c++) m.push({
            value: b[c].value,
            index: b[c].index
        });
        this.bet(a, false);
        return true
    };
    this._onSitDown = function() {
        l.setVisible(false);
        B[SIT_DOWN] && B[SIT_DOWN].call(G[SIT_DOWN])
    };
    this._onFichesEndMove = function() {
        B[ASSIGN_FICHES] && B[ASSIGN_FICHES].call(G[ASSIGN_FICHES])
    };
    this._onRemoveCard = function(a) {
        for (var b = 0; b < g.length; b++)
            if (g[b] === a) {
                g.splice(b, 1);
                break
            }
    };
    this._onSplitCardEndAnim = function() {
        s_oGame._onSplitCardEndAnim();
        A.x = F.getX();
        A.y = F.getY() + 70;
        A.visible = true
    };
    this.updateFichesController = function(a) {
        C && C.update(a);
        E.update(a)
    };
    this.updateSplit = function() {
        for (var a = 0; a < g.length; a++) g[a].update(s_iTimeElaps)
    };
    this.isSplitAvailable = function() {
        return g[0] && g[1] ? 0 === Math.abs(g[0].getFotogram() - g[1].getFotogram()) % 13 ? true : false : false
    };
    this.getAttachCardOffset = function() {
        if (0 === b) n.set(h.x + w.getX() + CARD_WIDTH / 2 * e[b].getNumCards(), h.y + w.getY() - CARD_HEIGHT / 2 * e[b].getNumCards());
        else {
            var a = h.x + F.getX() + CARD_WIDTH / 2 * e[b].getNumCards(),
                c = h.y + F.getY() - CARD_HEIGHT / 2 * e[b].getNumCards();
            n.set(a, c)
        }
        return n
    };
    this.getCurBet = function() {
        return e[b].getCurBet()
    };
    this.getCredit = function() {
        return f
    };
    this.getHandValue = function(a) {
        return a >
            e.length - 1 ? 0 : e[a].getValue()
    };
    this.getNumHands = function() {
        return e.length
    };
    this.getNumCardsForHand = function(a) {
        return e[a].getNumCards()
    };
    this.getBetForHand = function(a) {
        return e[a].getCurBet()
    };
    this.getAces = function() {
        return e[b].getAces()
    };
    this.getFichesController = function(a) {
        return e[a].getFichesController()
    };
    this.getCardOffset = function() {
        return w
    };
    this.getPlayerCards = function() {
        return g
    };
    this.getStartingBet = function() {
        return E.getValue()
    };
    this._init()
}

function CFichesController(a, d) {
    var b, c, f, e, g, m, n, h, t, p, q, r, l, v, w;
    this._init = function(a, d) {
        r = new createjs.Container;
        r.x = a.x;
        r.y = a.y;
        s_oStage.addChild(r);
        l = new createjs.Container;
        l.x = 400;
        l.y = 230;
        s_oStage.addChild(l);
        n = new CVector2;
        n.set(r.x, r.y);
        p = new CVector2;
        p.setV(d);
        g = m = e = 0;
        c = b = false;
        v = [];
        w = []
    };
    this.addEventListener = function(a, b, c) {
        v[a] = b;
        w[a] = c
    };
    this.reset = function() {
        f = b = false;
        g = 0;
        r.removeAllChildren();
        l.removeAllChildren();
        r.x = n.getX();
        r.y = n.getY();
        l.x = p.getX();
        l.y = p.getY()
    };
    this.refreshFiches = function(a,
        c, d, f) {
        a = a.sortOn("value", "index");
        var e = d;
        f && (b = true);
        for (var h = g = 0, n = 0; n < a.length; n++) {
            var m = createBitmap(s_oSpriteLibrary.getSprite("fiche_" + a[n].index));
            m.scaleX = .7;
            m.scaleY = .7;
            f ? l.addChild(m) : r.addChild(m);
            m.x = c;
            m.y = e;
            e -= 5;
            h++;
            9 < h && (h = 0, c += FICHE_WIDTH, e = d);
            g += a[n].value
        }
        playSound("chip", 1, false)
    };
    this.createFichesPile = function(a, b) {
        var c = s_oGameSettings.getFichesValues(),
            d = [];
        do {
            for (var f = c[c.length - 1], e = c.length - 1; f > a;) e--, f = c[e];
            e = Math.floor(a / f);
            for (var g = 0; g < e; g++) d.push({
                value: f,
                index: s_oGameSettings.getIndexForFiches(f)
            });
            f = a % f;
            a = f = parseFloat(f)
        } while (0 < f);
        this.refreshFiches(d, 0, 0, b);
        return d
    };
    this.rebet = function() {
        this.createFichesPile(m, false)
    };
    this.initMovement = function(a, b, d) {
        m = g;
        c = d;
        h = new CVector2(r.x, r.y);
        t = new CVector2(a, b)
    };
    this.initInsuranceMov = function(a, b) {
        q = new CVector2(a, b)
    };
    this.getValue = function() {
        return g
    };
    this.getPrevBet = function() {
        return m
    };
    this._updateInsuranceFiches = function() {
        if (b) {
            var a = easeInOutCubic(e, 0, 1, TIME_FICHES_MOV);
            a = tweenVectors(p, q, a, new CVector2);
            l.x = a.getX();
            l.y = a.getY()
        }
    };
    this.update = function(a) {
        if (!f)
            if (e += a, e > TIME_FICHES_MOV) e = 0, f = true, v[FICHES_END_MOV] && v[FICHES_END_MOV].call(w[FICHES_END_MOV], c, g);
            else {
                a = easeInOutCubic(e, 0, 1, TIME_FICHES_MOV);
                var b = new CVector2;
                b = tweenVectors(h, t, a, b);
                r.x = b.getX();
                r.y = b.getY();
                this._updateInsuranceFiches()
            }
    };
    this._init(a, d)
}

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

function CGameSettings() {
    var a, d, b, c;
    this._init = function() {
        b = [];
        a = [];
        for (var d = 0; 2 > d; d++)
            for (var e = 0; 52 > e; e++) {
                a.push(e);
                var g = (e + 1) % 13;
                if (10 < g || 0 === g) g = 10;
                1 === g && (g = 11);
                b.push(g)
            }
        c = [50, 100, 1000, 10000, 100000, 1000000]
    };
    this.getFichesValues = function() {
        return c
    };
    this.getFichesValueAt = function(a) {
        return c[a]
    };
    this.getIndexForFiches = function(a) {
        for (var b = 0, d = 0; d < c.length; d++) c[d] === a && (b = d);
        return b
    };
    this.generateFichesPile = function(a) {
        var b = [],
            d = c.length - 1,
            f = c[d];
        do {
            var n = a % f;
            n = CMath.roundDecimal(n, 1);
            a = Math.floor(a /
                f);
            for (var h = 0; h < a; h++) b.push(f);
            d--;
            f = c[d];
            a = n
        } while (0 < n && -1 < d);
        return b
    };
    this.timeToString = function(a) {
        a = Math.round(a / 1E3);
        var b = Math.floor(a / 60);
        a -= 60 * b;
        var c = "";
        c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
        return 10 > a ? c + ("0" + a) : c + a
    };
    this.getShuffledCardDeck = function() {
        for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
        for (d = []; 0 < b.length;) d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
        return d
    };
    this.getCardValue = function(a) {
        return b[a]
    };
    this.getRandDealerPattern = function() {
        var a;
        do {
            var b = [];
            for (var c =
                    a = 0; 2 > c; c++) {
                do var d = Math.floor(52 * Math.random()); while (11 === this.getCardValue(d));
                a += this.getCardValue(d);
                b.push(d)
            }
        } while (12 > a || 16 < a);
        a = 21 - a;
        do c = Math.floor(52 * Math.random()); while (this.getCardValue(c) <= a || 11 === this.getCardValue(c));
        b.push(c);
        return b
    };
    this._init()
}
var TYPE_LINEAR = 0,
    TYPE_OUT_CUBIC = 1,
    TYPE_IN_CUBIC = 2,
    TYPE_OUT_BACK = 3,
    TYPE_IN_BACK = 4;

function ease(a, d, b, c, f, e) {
    switch (a) {
        case TYPE_LINEAR:
            var g = easeLinear(d, b, c, f, e);
            break;
        case TYPE_IN_CUBIC:
            g = easeInCubic(d, b, c, f, e);
            break;
        case TYPE_OUT_CUBIC:
            g = easeOutCubic(d, b, c, f, e);
            break;
        case TYPE_IN_BACK:
            g = easeInBack(d, b, c, f, e);
            break;
        case TYPE_OUT_BACK:
            g = easeInBack(d, b, c, f, e)
    }
    return g
}

function easeOutBounce(a, d, b, c) {
    return (a /= c) < 1 / 2.75 ? 7.5625 * b * a * a + d : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
}

function easeInBounce(a, d, b, c) {
    return b - easeOutBounce(c - a, 0, b, c) + d
}

function easeInOutBounce(a, d, b, c) {
    return a < c / 2 ? .5 * easeInBounce(2 * a, 0, b, c) + d : .5 * easeOutBounce(2 * a - c, 0, b, c) + .5 * b + d
}

function easeInCirc(a, d, b, c) {
    return -b * (Math.sqrt(1 - (a /= c) * a) - 1) + d
}

function easeOutCirc(a, d, b, c) {
    return b * Math.sqrt(1 - (a = a / c - 1) * a) + d
}

function easeInOutCirc(a, d, b, c) {
    return 1 > (a /= c / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + d : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + d
}

function easeInCubic(a, d, b, c, f) {
    return b * (a /= c) * a * a + d
}

function easeOutCubic(a, d, b, c, f) {
    return b * ((a = a / c - 1) * a * a + 1) + d
}

function easeInOutCubic(a, d, b, c, f) {
    return 1 > (a /= c / 2) ? b / 2 * a * a * a + d : b / 2 * ((a -= 2) * a * a + 2) + d
}

function easeInElastic(a, d, b, c, f, e, g) {
    if (0 == a) return d;
    if (1 == (a /= c)) return d + b;
    g || (g = .3 * c);
    !e || e < Math.abs(b) ? (e = b, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
    return -(e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g)) + d
}

function easeOutElastic(a, d, b, c, f, e, g) {
    if (0 == a) return d;
    if (1 == (a /= c)) return d + b;
    g || (g = .3 * c);
    !e || e < Math.abs(b) ? (e = b, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
    return e * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - f) * Math.PI / g) + b + d
}

function easeInOutElastic(a, d, b, c, f, e, g) {
    if (0 == a) return d;
    if (1 == (a /= c)) return d + b;
    g || (g = .3 * c);
    !e || e < Math.abs(b) ? (e = b, f = g / 4) : f = g / (2 * Math.PI) * Math.asin(b / e);
    return 1 > a ? -.5 * e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g) + d : e * Math.pow(2, -10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / g) * .5 + b + d
}

function easeInExpo(a, d, b, c) {
    return 0 == a ? d : b * Math.pow(2, 10 * (a / c - 1)) + d
}

function easeOutExpo(a, d, b, c) {
    return a == c ? d + b : b * (-Math.pow(2, -10 * a / c) + 1) + d
}

function easeInOutExpo(a, d, b, c) {
    return 0 == a ? d : a == c ? d + b : 1 > (a /= c / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + d : b / 2 * (-Math.pow(2, -10 * --a) + 2) + d
}

function easeLinear(a, d, b, c) {
    return b * a / c + d
}

function easeInQuad(a, d, b, c) {
    return b * (a /= c) * a + d
}

function easeOutQuad(a, d, b, c) {
    return -b * (a /= c) * (a - 2) + d
}

function easeInOutQuad(a, d, b, c) {
    return 1 > (a /= c / 2) ? b / 2 * a * a + d : -b / 2 * (--a * (a - 2) - 1) + d
}

function easeInQuart(a, d, b, c) {
    return b * (a /= c) * a * a * a + d
}

function easeOutQuart(a, d, b, c) {
    return -b * ((a = a / c - 1) * a * a * a - 1) + d
}

function easeInOutQuart(a, d, b, c) {
    return 1 > (a /= c / 2) ? b / 2 * a * a * a * a + d : -b / 2 * ((a -= 2) * a * a * a - 2) + d
}

function easeInQuint(a, d, b, c) {
    return b * (a /= c) * a * a * a * a + d
}

function easeOutQuint(a, d, b, c) {
    return b * ((a = a / c - 1) * a * a * a * a + 1) + d
}

function easeInOutQuint(a, d, b, c) {
    return 1 > (a /= c / 2) ? b / 2 * a * a * a * a * a + d : b / 2 * ((a -= 2) * a * a * a * a + 2) + d
}

function easeInSine(a, d, b, c) {
    return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
}

function easeOutSine(a, d, b, c) {
    return b * Math.sin(a / c * (Math.PI / 2)) + d
}

function easeInOutSine(a, d, b, c) {
    return -b / 2 * (Math.cos(Math.PI * a / c) - 1) + d
}

function easeInBack(a, d, b, c) {
    return b * (a /= c) * a * (2.70158 * a - 1.70158) + d
}

function easeOutBack(a, d, b, c) {
    return b * ((a = a / c - 1) * a * (2.70158 * a + 1.70158) + 1) + d
}

function CHandController(a, d) {
    var b, c, f, e, g, m;
    this._init = function(a, d) {
        f = c = b = 0;
        e = [];
        g = a;
        m = d
    };
    this.addCard = function(a) {
        e.push(a);
        11 === a.getValue() && c++
    };
    this.removeCard = function(a) {
        var d = e[a];
        b -= d.getValue();
        11 === d.getValue() && c--;
        e.splice(a, 1)
    };
    this.changeBet = function(a) {
        f = a
    };
    this.removeAce = function() {
        b -= 10;
        c--
    };
    this.setHandValue = function(a) {
        b = a
    };
    this.increaseHandValue = function(a) {
        b += a
    };
    this.getValue = function() {
        return b
    };
    this.getCurBet = function() {
        return f
    };
    this.getDoubleBet = function() {
        return f
    };
    this.getAces =
        function() {
            return c
        };
    this.getCard = function(a) {
        return e[a]
    };
    this.getNumCards = function() {
        return e.length
    };
    this.getAttachOffset = function() {
        return g
    };
    this.getFichesController = function() {
        return m
    };
    this._init(a, d)
}

function CCard(a, d, b) {
    var c, f, e = -1,
        g, m, n, h, t, p, q, r, l, v;
    this._init = function(a, b, c) {
        v = c;
        c = {
            images: [s_oSpriteLibrary.getSprite("card_spritesheet")],
            frames: {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                regX: CARD_WIDTH / 2,
                regY: CARD_HEIGHT / 2
            },
            animations: {
                card_1_1: [0],
                card_1_2: [1],
                card_1_3: [2],
                card_1_4: [3],
                card_1_5: [4],
                card_1_6: [5],
                card_1_7: [6],
                card_1_8: [7],
                card_1_9: [8],
                card_1_10: [9],
                card_1_J: [10],
                card_1_Q: [11],
                card_1_K: [12],
                card_2_1: [13],
                card_2_2: [14],
                card_2_3: [15],
                card_2_4: [16],
                card_2_5: [17],
                card_2_6: [18],
                card_2_7: [19],
                card_2_8: [20],
                card_2_9: [21],
                card_2_10: [22],
                card_2_J: [23],
                card_2_Q: [24],
                card_2_K: [25],
                card_3_1: [26],
                card_3_2: [27],
                card_3_3: [28],
                card_3_4: [29],
                card_3_5: [30],
                card_3_6: [31],
                card_3_7: [32],
                card_3_8: [33],
                card_3_9: [34],
                card_3_10: [35],
                card_3_J: [36],
                card_3_Q: [37],
                card_3_K: [38],
                card_4_1: [39],
                card_4_2: [40],
                card_4_3: [41],
                card_4_4: [42],
                card_4_5: [43],
                card_4_6: [44],
                card_4_7: [45],
                card_4_8: [46],
                card_4_9: [47],
                card_4_10: [48],
                card_4_J: [49],
                card_4_Q: [50],
                card_4_K: [51],
                back: [52]
            }
        };
        c = new createjs.SpriteSheet(c);
        l = createSprite(c,
            "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        l.x = a;
        l.y = b;
        l.stop();
        v.addChild(l);
        q = [];
        r = []
    };
    this.unload = function() {
        p = t = null;
        v.removeChild(l)
    };
    this.addEventListener = function(a, b, c) {
        q[a] = b;
        r[a] = c
    };
    this.setInfo = function(a, b, d, l, q, r) {
        f = false;
        h = 0;
        g = d;
        m = l;
        t = a;
        p = b;
        n = r;
        c = q;
        e = STATE_CARD_DEALING
    };
    this.removeFromTable = function() {
        q[ON_CARD_TO_REMOVE] && q[ON_CARD_TO_REMOVE].call(r[ON_CARD_TO_REMOVE], this)
    };
    this.initSplit = function(a) {
        t = new CVector2(l.x, l.y);
        p = a;
        h = 0;
        e = STATE_CARD_SPLIT
    };
    this.initRemoving =
        function(a) {
            t = new CVector2(l.x, l.y);
            p = a;
            h = 0;
            e = STATE_CARD_REMOVING
        };
    this.setValue = function() {
        l.gotoAndStop(g);
        var a = this;
        createjs.Tween.get(l).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardShown()
        })
    };
    this.showCard = function() {
        var a = this;
        createjs.Tween.get(l).to({
            scaleX: .1
        }, 100).call(function() {
            a.setValue()
        })
    };
    this.hideCard = function() {
        var a = this;
        createjs.Tween.get(l).to({
            scaleX: .1
        }, 100).call(function() {
            a.setBack()
        })
    };
    this.setBack = function() {
        l.gotoAndStop("back");
        var a = this;
        createjs.Tween.get(l).to({
                scaleX: 1
            },
            100).call(function() {
            a.cardHidden()
        })
    };
    this.cardShown = function() {
        q[ON_CARD_SHOWN] && q[ON_CARD_SHOWN].call(r[ON_CARD_SHOWN])
    };
    this.cardHidden = function() {
        f = true
    };
    this.getValue = function() {
        return m
    };
    this.getFotogram = function() {
        return g
    };
    this._updateDealing = function() {
        h += s_iTimeElaps;
        if (h > TIME_CARD_DEALING) e = -1, h = 0, l.x = p.getX(), l.y = p.getY(), l.rotation = 360, q[ON_CARD_ANIMATION_ENDING] && q[ON_CARD_ANIMATION_ENDING].call(r[ON_CARD_ANIMATION_ENDING], this, c, n), false === (c && 2 === n) && this.showCard();
        else {
            this.visible = true;
            var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING),
                b = new CVector2;
            b = tweenVectors(t, p, a, b);
            l.x = b.getX();
            l.y = b.getY();
            false === c && (l.rotation = 36E3 * a / 100)
        }
    };
    this._updateSplit = function() {
        h += s_iTimeElaps;
        if (h > TIME_CARD_DEALING) h = 0, q[SPLIT_CARD_END_ANIM] && q[SPLIT_CARD_END_ANIM].call(r[SPLIT_CARD_END_ANIM]), e = -1;
        else {
            var a = easeInOutCubic(h, 0, 1, TIME_CARD_DEALING),
                b = new CVector2;
            b = tweenVectors(t, p, a, b);
            l.x = b.getX();
            l.y = b.getY()
        }
    };
    this._updateRemoving = function() {
        h += s_iTimeElaps;
        if (h > TIME_CARD_REMOVE) h = 0, f = l.visible = false, e = -1, q[ON_CARD_TO_REMOVE] && q[ON_CARD_TO_REMOVE].call(r[ON_CARD_TO_REMOVE], this);
        else {
            var a = easeInOutCubic(h, 0, 1, TIME_CARD_REMOVE),
                b = new CVector2;
            b = tweenVectors(t, p, a, b);
            l.x = b.getX();
            l.y = b.getY();
            l.rotation = 4500 * a / 100
        }
    };
    this.update = function() {
        switch (e) {
            case STATE_CARD_DEALING:
                this._updateDealing();
                break;
            case STATE_CARD_SPLIT:
                this._updateSplit();
                break;
            case STATE_CARD_REMOVING:
                true === f && this._updateRemoving()
        }
    };
    s_oCard = this;
    this._init(a, d, b)
}
var s_oCard;

function CInsurancePanel() {
    var a, d, b, c;
    this._init = function() {
        c = new createjs.Container;
        s_oStage.addChild(c);
        c.visible = false;
        var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.addChild(f);
        b = new createjs.Text("", "50px " + FONT_GAME_1, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = 300;
        b.lineWidth = 300;
        b.textAlign = "center";
        c.addChild(b);
        f = s_oSpriteLibrary.getSprite("but_game_small_bg");
        a = new CTextButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT - 300, f, TEXT_NO, FONT_GAME_1, "#ffffff", 20, c);
        a.addEventListener(ON_MOUSE_UP, this._onButNoRelease,
            this);
        d = new CTextButton(CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT - 300, f, TEXT_YES, FONT_GAME_1, "#ffffff", 20, c);
        d.addEventListener(ON_MOUSE_UP, this._onButYesRelease, this)
    };
    this.unload = function() {
        s_oStage.removeChild(c)
    };
    this.show = function(a) {
        b.text = a;
        c.visible = true
    };
    this._onButNoRelease = function() {
        c.visible = false
    };
    this._onButYesRelease = function() {
        c.visible = false;
        s_oGame.onBuyInsurance()
    };
    this._init()
}

function CGameOver() {
    var a, d, b, c;
    this._init = function() {
        c = new createjs.Container;
        s_oStage.addChild(c);
        c.on("click", function() {});
        var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.addChild(f);
        a = new createjs.Text(TEXT_NO_MONEY, "32px " + FONT_GAME_1, "#000000");
        a.textAlign = "center";
        a.x = CANVAS_WIDTH / 2;
        a.y = 290;
        a.lineWidth = 300;
        c.addChild(a);
        d = new CTextButton(CANVAS_WIDTH / 2 - 100, 450, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_RECHARGE, FONT_GAME_1, "#fff",
            14, c);
        d.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
        b = new CTextButton(CANVAS_WIDTH / 2 + 100, 450, s_oSpriteLibrary.getSprite("but_game_bg"), TEXT_EXIT, FONT_GAME_1, "#fff", 14, c);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        this.hide()
    };
    this.unload = function() {
        d.unload();
        b.unload();
        c.off("click", function() {})
    };
    this.show = function() {
        c.visible = true
    };
    this.hide = function() {
        c.visible = false
    };
    this._onRecharge = function() {
        $(s_oMain).trigger("recharge")
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._init()
}

function CMsgBox() {
    var a, d, b, c;
    this._init = function() {
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        b = new createjs.Text("", "34px " + FONT_GAME_1, "#000");
        b.x = CANVAS_WIDTH / 2 + 2;
        b.y = CANVAS_HEIGHT / 2 - 28;
        b.textAlign = "center";
        b.lineWidth = 400;
        b.textBaseline = "middle";
        d = new createjs.Text("", "34px " + FONT_GAME_1, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 30;
        d.textAlign = "center";
        d.lineWidth = 400;
        d.textBaseline = "middle";
        c = new createjs.Container;
        c.alpha = 0;
        c.visible = false;
        c.addChild(a, b, d);
        s_oStage.addChild(c)
    };
    this.unload = function() {
        c.off("mousedown", this._onExit)
    };
    this._initListener = function() {
        c.on("mousedown", this._onExit)
    };
    this.show = function(a) {
        b.text = a;
        d.text = a;
        c.visible = true;
        var e = this;
        createjs.Tween.get(c).to({
            alpha: 1
        }, 500).call(function() {
            e._initListener()
        });
        setTimeout(function() {
            e._onExit()
        }, 3E3)
    };
    this._onExit = function() {
        c.visible && (c.off("mousedown"), c.visible = false)
    };
    this._init();
    return this
}

function CCreditsPanel() {
    var a, d, b, c, f, e, g, m, n, h, t;
    this._init = function() {
        t = new createjs.Container;
        t.alpha = 0;
        s_oStage.addChild(t);
        var p = new createjs.Shape;
        p.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.addChild(p);
        b = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        t.addChild(b);
        m = new createjs.Shape;
        m.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = .01;
        m.on("click", this._onLogoButRelease);
        t.addChild(m);
        p = s_oSpriteLibrary.getSprite("but_menu_bg");
        a = CANVAS_WIDTH / 2;
        d = CANVAS_HEIGHT - 164;
        f = new CTextButton(a, d, p, TEXT_EXIT, FONT_GAME_1, "#ffffff", 40, s_oStage);
        f.addEventListener(ON_MOUSE_UP, this.unload, this);
        g = new createjs.Text(TEXT_CREDITS_DEVELOPED, "38px " + FONT_GAME_1, "#000");
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.x = CANVAS_WIDTH / 2;
        g.y = 330;
        g.outline = 2;
        t.addChild(g);
        e = new createjs.Text(TEXT_CREDITS_DEVELOPED, "38px " + FONT_GAME_1, "#fff");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = 330;
        t.addChild(e);
        p = s_oSpriteLibrary.getSprite("logo_tkstar");
        c = createBitmap(p);
        c.regX = p.width / 2;
        c.regY = p.height / 2;
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        t.addChild(c);
        h = new createjs.Text("www.tkstar.ir", "36px " + FONT_GAME_1, "#000");
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH / 2;
        h.y = 460;
        h.outline = 2;
        t.addChild(h);
        n = new createjs.Text("www.tkstar.ir", "36px " + FONT_GAME_1, "#fff");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = CANVAS_WIDTH / 2;
        n.y = 460;
        t.addChild(n);
        createjs.Tween.get(t).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, b) {};
    this.unload = function() {
        m.off("click", this._onLogoButRelease);
        f.unload();
        f = null;
        s_oStage.removeChild(t)
    };
    this._onLogoButRelease = function() {
        return false;
    };
    this._init()
};