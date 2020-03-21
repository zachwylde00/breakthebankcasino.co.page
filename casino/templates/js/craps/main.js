var s_iOffsetX = 0,
    s_iOffsetY = 0,
    s_fInverseScaling = 0;
(function(c) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(c) {
    console.log(c)
}

function isIOS() {
    for (var c = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); c.length;)
        if (navigator.platform === c.pop()) return s_bIsIphone = true;
    return s_bIsIphone = false
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(c) {
    var e = c.toLowerCase(),
        b = window.document,
        f = b.documentElement;
    if (void 0 === window["inner" + c]) c = f["client" + c];
    else if (window["inner" + c] != f["client" + c]) {
        var h = b.createElement("body");
        h.id = "vpw-test-b";
        h.style.cssText = "overflow:scroll";
        var a = b.createElement("div");
        a.id = "vpw-test-d";
        a.style.cssText = "position:absolute;top:-1000px";
        a.innerHTML = "<style>@media(" + e + ":" + f["client" + c] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
        h.appendChild(a);
        f.insertBefore(h, b.head);
        c = 7 == a["offset" + c] ? f["client" + c] : window["inner" + c];
        f.removeChild(h)
    } else c = window["inner" + c];
    return c
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var c = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < c ? c : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var c = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var e = getSize("Width");
        _checkOrientation(e, c);
        s_iScaleFactor = Math.min(c / CANVAS_HEIGHT, e / CANVAS_WIDTH);
        var b = CANVAS_WIDTH * s_iScaleFactor,
            f = CANVAS_HEIGHT * s_iScaleFactor;
        if (f < c) {
            var h = c - f;
            f += h;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * h
        } else b < e && (h = e - b, b += h, f += CANVAS_HEIGHT / CANVAS_WIDTH * h);
        h = c / 2 - f / 2;
        var a = e / 2 - b / 2,
            g = CANVAS_WIDTH / b;
        if (a * g < -EDGEBOARD_X || h * g < -EDGEBOARD_Y) s_iScaleFactor =
            Math.min(c / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), b = CANVAS_WIDTH * s_iScaleFactor, f = CANVAS_HEIGHT * s_iScaleFactor, h = (c - f) / 2, a = (e - b) / 2, g = CANVAS_WIDTH / b;
        s_fInverseScaling = g;
        s_iOffsetX = -1 * a * g;
        s_iOffsetY = -1 * h * g;
        0 <= h && (s_iOffsetY = 0);
        0 <= a && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bMobile && !s_bIsIphone ? ($("#canvas").css("width", b + "px"), $("#canvas").css("height", f + "px")) : (s_oStage.canvas.width =
            b, s_oStage.canvas.height = f, s_oStage.scaleX = s_oStage.scaleY = Math.min(b / CANVAS_WIDTH, f / CANVAS_HEIGHT));
        0 > h ? ($("#canvas").css("top", h + "px"), s_iCanvasOffsetHeight = h) : ($("#canvas").css("top", "0px"), s_iCanvasOffsetHeight = 0);
        $("#canvas").css("left", a + "px");
        s_iCanvasResizeWidth = b;
        s_iCanvasResizeHeight = f;
        s_iCanvasOffsetWidth = a
    }
}

function _checkOrientation(c, e) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (c > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (c) {
        return true
    }
}

function createBitmap(c, e, b) {
    var f = new createjs.Bitmap(c),
        h = new createjs.Shape;
    e && b ? h.graphics.beginFill("#fff").drawRect(-e / 2, -b / 2, e, b) : h.graphics.beginFill("#ff0").drawRect(0, 0, c.width, c.height);
    f.hitArea = h;
    return f
}

function createSprite(c, e, b, f, h, a) {
    c = null !== e ? new createjs.Sprite(c, e) : new createjs.Sprite(c);
    e = new createjs.Shape;
    e.graphics.beginFill("#000000").drawRect(-b, -f, h, a);
    c.hitArea = e;
    return c
}

function roundDecimal(c, e) {
    var b = Math.pow(10, e);
    return Math.round(b * c) / b
}

function randomFloatBetween(c, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(c + Math.random() * (e - c), e))
}

function shuffle(c) {
    for (var e = c.length, b, f; 0 !== e;) f = Math.floor(Math.random() * e), --e, b = c[e], c[e] = c[f], c[f] = b;
    return c
}

function formatTime(c) {
    c /= 1E3;
    var e = Math.floor(c / 60);
    c = parseFloat(c - 60 * e);
    var b = "",
        b = 10 > e ? b + ("0" + e + ":") : b + (e + ":");
    return 10 > c ? b + ("0" + c) : b + c
}

function degreesToRadians(c) {
    return c * Math.PI / 180
}

function checkRectCollision(c, e) {
    var b = getBounds(c, .9);
    var f = getBounds(e, .98);
    return calculateIntersection(b, f)
}

function calculateIntersection(c, e) {
    var b, f, h, a;
    var g = c.x + (b = c.width / 2);
    var k = c.y + (f = c.height / 2);
    var d = e.x + (h = e.width / 2);
    var r = e.y + (a = e.height / 2);
    g = Math.abs(g - d) - (b + h);
    k = Math.abs(k - r) - (f + a);
    return 0 > g && 0 > k ? (g = Math.min(Math.min(c.width, e.width), -g), k = Math.min(Math.min(c.height, e.height), -k), {
        x: Math.max(c.x, e.x),
        y: Math.max(c.y, e.y),
        width: g,
        height: k,
        rect1: c,
        rect2: e
    }) : null
}

function getBounds(c, e) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (c instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var f = c.children,
            h = f.length,
            a;
        for (a = 0; a < h; a++) {
            var g = getBounds(f[a], 1);
            g.x < b.x && (b.x = g.x);
            g.y < b.y && (b.y = g.y);
            g.x + g.width > b.x2 && (b.x2 = g.x + g.width);
            g.y + g.height > b.y2 && (b.y2 = g.y + g.height)
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
        if (c instanceof createjs.Bitmap) {
            h =
                c.sourceRect || c.image;
            a = h.width * e;
            var k = h.height * e
        } else if (c instanceof createjs.Sprite)
            if (c.spriteSheet._frames && c.spriteSheet._frames[c.currentFrame] && c.spriteSheet._frames[c.currentFrame].image) {
                h = c.spriteSheet.getFrame(c.currentFrame);
                a = h.rect.width;
                k = h.rect.height;
                f = h.regX;
                var d = h.regY
            } else b.x = c.x || 0, b.y = c.y || 0;
        else b.x = c.x || 0, b.y = c.y || 0;
        f = f || 0;
        a = a || 0;
        d = d || 0;
        k = k || 0;
        b.regX = f;
        b.regY = d;
        h = c.localToGlobal(0 - f, 0 - d);
        g = c.localToGlobal(a - f, k - d);
        a = c.localToGlobal(a - f, 0 - d);
        f = c.localToGlobal(0 - f, k - d);
        b.x =
            Math.min(Math.min(Math.min(h.x, g.x), a.x), f.x);
        b.y = Math.min(Math.min(Math.min(h.y, g.y), a.y), f.y);
        b.width = Math.max(Math.max(Math.max(h.x, g.x), a.x), f.x) - b.x;
        b.height = Math.max(Math.max(Math.max(h.y, g.y), a.y), f.y) - b.y
    }
    return b
}

function NoClickDelay(c) {
    this.element = c;
    window.Touch && this.element.addEventListener("touchstart", this, false)
}
NoClickDelay.prototype = {
    handleEvent: function(c) {
        switch (c.type) {
            case "touchstart":
                this.onTouchStart(c);
                break;
            case "touchmove":
                this.onTouchMove(c);
                break;
            case "touchend":
                this.onTouchEnd(c)
        }
    },
    onTouchStart: function(c) {
        c.preventDefault();
        this.moved = false;
        this.element.addEventListener("touchmove", this, false);
        this.element.addEventListener("touchend", this, false)
    },
    onTouchMove: function(c) {
        this.moved = true
    },
    onTouchEnd: function(c) {
        this.element.removeEventListener("touchmove", this, false);
        this.element.removeEventListener("touchend",
            this, false);
        if (!this.moved) {
            c = document.elementFromPoint(c.changedTouches[0].clientX, c.changedTouches[0].clientY);
            3 == c.nodeType && (c = c.parentNode);
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            c.dispatchEvent(e)
        }
    }
};
(function() {
    function c(c) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        c = c || window.event;
        c.type in b ? document.body.className = b[c.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var e = "hidden";
    e in document ? document.addEventListener("visibilitychange", c) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", c) : (e = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", c) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", c) : "onfocusin" in document ? document.onfocusin = document.onfocusout = c : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = c
})();

function playSound(c, e, b) {
    return false === DISABLE_SOUND_MOBILE || false === s_bMobile ? (s_aSounds[c].play(), s_aSounds[c].volume(e), s_aSounds[c].loop(b), s_aSounds[c]) : null
}

function stopSound(c) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[c].stop()
}

function setVolume(c, e) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[c].volume(e)
}

function setMute(c, e) {
    false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || s_aSounds[c].mute(e)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(c) {
    for (var e = window.location.search.substring(1).split("&"), b = 0; b < e.length; b++) {
        var f = e[b].split("=");
        if (f[0] == c) return f[1]
    }
}

function CSpriteLibrary() {
    var c, e, b, f, h, a;
    this.init = function(g, k, d) {
        b = e = 0;
        f = g;
        h = k;
        a = d;
        c = {}
    };
    this.addSprite = function(a, h) {
        c.hasOwnProperty(a) || (c[a] = {
            szPath: h,
            oSprite: new Image
        }, e++)
    };
    this.getSprite = function(a) {
        return c.hasOwnProperty(a) ? c[a].oSprite : null
    };
    this._onSpritesLoaded = function() {
        h.call(a)
    };
    this._onSpriteLoaded = function() {
        f.call(a);
        ++b === e && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var a in c) c[a].oSprite.oSpriteLibrary = this, c[a].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            c[a].oSprite.onerror = function() {
                s_oMain.onImageLoadError($(this).attr("src"))
            }, c[a].oSprite.src = c[a].szPath
    };
    this.getNumSprites = function() {
        return e
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
    STATE_GAME_COME_OUT = 1,
    STATE_GAME_COME_POINT = 2,
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
    TOTAL_MONEY, NUM_FICHES = 7,
    MIN_BET, MAX_BET,
    WIN_OCCURRENCE, TIME_FICHES_MOV = 1500,
    TIME_SHOW_DICES_RESULT, NUM_DICE_ROLLING_FRAMES = 34,
    NUM_BALL_SPIN_FRAMES = 200,
    NUM_HAND_FOR_ADS, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, SHOW_CREDITS, FONT1 = "MainFont",
    FONT2 = "MainFont";

function CGameSettings() {
    var c, e, b, f;
    this._init = function() {
        this._initAttachFiches();
        this._initBetMultiplier();
        this._setPuckPos();
        c = [50, 100, 1000, 10000, 100000, 1000000, 10000000];
        NUM_FICHES = c.length
    };
    this._initAttachFiches = function() {
        f = [];
        f.pass_line = {
            x: 360,
            y: 555
        };
        f.dont_pass1 = {
            x: 730,
            y: 503
        };
        f.dont_pass2 = {
            x: 254,
            y: 320
        };
        f.dont_come = {
            x: 322,
            y: 238
        };
        f.come = {
            x: 740,
            y: 330
        };
        f.field = {
            x: 570,
            y: 420
        };
        f.big_6 = {
            x: 260,
            y: 440
        };
        f.big_8 = {
            x: 316,
            y: 490
        };
        for (var c = [{
                    value: 4,
                    x: 408,
                    y: 142
                }, {
                    value: 5,
                    x: 494,
                    y: 142
                }, {
                    value: 6,
                    x: 580,
                    y: 142
                }, {
                    value: 8,
                    x: 666,
                    y: 142
                },
                {
                    value: 9,
                    x: 752,
                    y: 142
                }, {
                    value: 10,
                    x: 838,
                    y: 142
                }
            ], a = 0; a < c.length; a++) f["lay_bet" + c[a].value] = {
            x: c[a].x + 20,
            y: c[a].y
        }, f["lose_bet" + c[a].value] = {
            x: c[a].x - 20,
            y: c[a].y + 20
        }, f["number" + c[a].value] = {
            x: c[a].x,
            y: c[a].y + 69
        }, f["win_bet" + c[a].value] = {
            x: c[a].x,
            y: c[a].y + 116
        };
        f.any11_7 = {
            x: 1032,
            y: 582
        };
        f.any_craps_7 = {
            x: 1032,
            y: 631
        };
        f.seven_bet = {
            x: 1032,
            y: 356
        };
        f.hardway6 = {
            x: 955,
            y: 400
        };
        f.hardway10 = {
            x: 1112,
            y: 400
        };
        f.hardway8 = {
            x: 955,
            y: 460
        };
        f.hardway4 = {
            x: 1112,
            y: 460
        };
        f.horn3 = {
            x: 930,
            y: 520
        };
        f.horn2 = {
            x: 1032,
            y: 520
        };
        f.horn12 = {
            x: 1134,
            y: 520
        };
        f.oDealerWin = {
            x: CANVAS_WIDTH / 2,
            y: -232
        };
        f.oReceiveWin = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT + 100
        }
    };
    this._initBetMultiplier = function() {
        e = [];
        e.pass_line = 1;
        e.dont_pass1 = 1;
        e.dont_pass2 = 1;
        e.dont_come = 1;
        e.come = 1;
        e.field = 1;
        e.big_6 = 1;
        e.big_8 = 1;
        for (var c = [4, 5, 6, 8, 9, 10], a = [.5, .66, .83, .83, .66, .5], g = [.45, .62, .8, .8, .62, .45], b = [2, 1.5, 1.2, 1.2, 1.5, 2], d = [1.8, 1.4, 1.17, 1.17, 1.4, 1.8], f = 0; f < c.length; f++) e["lay_bet" + c[f]] = a[f], e["lose_bet" + c[f]] = g[f], e["number" + c[f]] = b[f], e["win_bet" + c[f]] = d[f];
        e.any11_7 = 15;
        e.any_craps_7 =
            7;
        e.seven_bet = 4;
        e.hardway6 = 9;
        e.hardway10 = 7;
        e.hardway8 = 9;
        e.hardway4 = 7;
        e.horn3 = 15;
        e.horn2 = 30;
        e.horn12 = 30
    };
    this.generateFichesPileByIndex = function(b) {
        var a = [],
            g = c.length - 1,
            h = c[g];
        do {
            var d = b % h;
            d = roundDecimal(d, 1);
            b = roundDecimal(b / h, 1);
            b = Math.floor(b);
            for (var e = 0; e < b; e++) a.push(this.getFicheIndexByValue(h));
            g--;
            h = c[g];
            b = d
        } while (0 < d && -1 < g);
        return a
    };
    this._setPuckPos = function() {
        b = [];
        b[4] = 410;
        b[5] = 495;
        b[6] = 580;
        b[8] = 666;
        b[9] = 752;
        b[10] = 836
    };
    this.getBetWinLoss = function(c, a, g) {
        var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        switch (g) {
            case "pass_line":
                c === STATE_GAME_COME_OUT ? (b[6] = 1, b[10] = 1, d[1] = 1, d[2] = 1, d[11] = 1) : (b[a - 1] = 1, d[6] = 1);
                break;
            case "come":
                b[6] = 1;
                b[10] = 1;
                d[1] = 1;
                d[2] = 1;
                d[11] = 1;
                break;
            case "dont_pass1":
            case "dont_pass2":
                c === STATE_GAME_COME_OUT ? (b[1] = 1, b[2] = 1, b[11] = 1, d[6] = 1, d[10] = 1) : (b[6] = 1, d[a - 1] = 1);
                break;
            case "dont_come":
                b[1] = 1;
                b[2] = 1;
                b[11] = 1;
                d[6] = 1;
                d[10] = 1;
                break;
            case "field":
                b[1] = 1;
                b[2] = 1;
                b[3] = 1;
                b[8] = 1;
                b[9] = 1;
                b[10] = 1;
                b[11] = 1;
                d[0] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                break;
            case "big_6":
                b[5] =
                    1;
                break;
            case "big_8":
                b[7] = 1;
                break;
            case "lay_bet4":
            case "lose_bet4":
                b[6] = 1;
                d[3] = 1;
                break;
            case "lay_bet5":
            case "lose_bet5":
                b[6] = 1;
                d[4] = 1;
                break;
            case "lay_bet6":
            case "lose_bet6":
                b[6] = 1;
                d[5] = 1;
                break;
            case "lay_bet8":
            case "lose_bet8":
                b[6] = 1;
                d[7] = 1;
                break;
            case "lay_bet9":
            case "lose_bet9":
                b[6] = 1;
                d[8] = 1;
                break;
            case "lay_bet10":
            case "lose_bet10":
                b[6] = 1;
                d[9] = 1;
                break;
            case "number4":
            case "win_bet4":
                b[3] = 1;
                d[6] = 1;
                break;
            case "number5":
            case "win_bet5":
                b[4] = 1;
                d[6] = 1;
                break;
            case "number6":
            case "win_bet6":
                b[5] = 1;
                d[6] = 1;
                break;
            case "number8":
            case "win_bet8":
                b[7] = 1;
                d[6] = 1;
                break;
            case "number9":
            case "win_bet9":
                b[8] = 1;
                d[6] = 1;
                break;
            case "number10":
            case "win_bet10":
                b[9] = 1;
                d[6] = 1;
                break;
            case "any11":
                b[10] = 1;
                d[1] = 1;
                d[2] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[11] = 1;
                break;
            case "any_craps":
                b[1] = 1;
                b[2] = 1;
                b[11] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                break;
            case "seven_bet":
                b[6] = 1;
                d[1] = 1;
                d[2] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "hardway6":
                b[5] = 1;
                d[1] = 1;
                d[2] = 1;
                d[3] =
                    1;
                d[4] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "hardway10":
                b[9] = 1;
                d[1] = 1;
                d[2] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "hardway8":
                b[7] = 1;
                d[1] = 1;
                d[2] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "hardway4":
                b[3] = 1;
                d[1] = 1;
                d[2] = 1;
                d[3] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "horn3":
                b[2] = 1;
                d[1] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "horn2":
                b[1] = 1;
                d[2] = 1;
                d[3] = 1;
                d[4] = 1;
                d[5] = 1;
                d[6] = 1;
                d[7] = 1;
                d[8] = 1;
                d[9] = 1;
                d[10] = 1;
                d[11] = 1;
                break;
            case "horn12":
                b[11] = 1, d[1] = 1, d[2] = 1, d[3] = 1, d[4] = 1, d[5] = 1, d[6] = 1, d[7] = 1, d[8] = 1, d[9] = 1, d[10] = 1
        }
        return {
            win: b,
            lose: d
        }
    };
    this.checkBetWin = function(b, a, c, e, d, f) {
        var g = -1;
        switch (d) {
            case "pass_line":
                if (a === STATE_GAME_COME_OUT)
                    if (2 === b || 3 === b || 12 === b) g = 0;
                    else {
                        if (7 === b || 11 === b) g = c * s_oGameSettings.getBetMultiplier(d)
                    }
                else 7 === b ? g = 0 : b === e && (g = c * s_oGameSettings.getBetMultiplier(d));
                break;
            case "come":
                7 === b || 11 === b ? g = c * s_oGameSettings.getBetMultiplier(d) : 2 ===
                    b || 3 === b || 12 === b ? g = 0 : s_oGame.assignBetFromCome(b, d);
                break;
            case "dont_pass1":
            case "dont_pass2":
                a === STATE_GAME_COME_OUT ? 2 === b || 3 === b ? g = c * s_oGameSettings.getBetMultiplier(d) : 7 === b || 11 === b ? g = 0 : 12 === b && (g = c) : 7 === b ? g = c * s_oGameSettings.getBetMultiplier(d) : b === e && (g = 0);
                break;
            case "dont_come":
                2 === b || 7 === b ? g = c * s_oGameSettings.getBetMultiplier(d) : 7 === b || 11 === b ? g = 0 : s_oGame.assignBetFromDontCome(b, d);
                break;
            case "field":
                if (5 === b || 6 === b || 7 === b || 8 === b) g = 0;
                else if (g = c * s_oGameSettings.getBetMultiplier(d), 2 === b || 12 ===
                    b) g *= 2;
                break;
            case "big_6":
                6 === b ? g = c * s_oGameSettings.getBetMultiplier(d) : 7 === b && (g = 0);
                break;
            case "big_8":
                8 === b ? g = c * s_oGameSettings.getBetMultiplier(d) : 7 === b && (g = 0);
                break;
            case "lay_bet4":
            case "lose_bet4":
                7 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "lay_bet4" === d && (g = roundDecimal(.05 * g, 2))) : 4 === b && (g = 0);
                break;
            case "lay_bet5":
            case "lose_bet5":
                7 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "lay_bet5" === d && (g = roundDecimal(.05 * g, 2))) : 5 === b && (g = 0);
                break;
            case "lay_bet6":
            case "lose_bet6":
                7 === b ? (g = c * s_oGameSettings.getBetMultiplier(d),
                    "lay_bet6" === d && (g = roundDecimal(.05 * g, 2))) : 6 === b && (g = 0);
                break;
            case "lay_bet8":
            case "lose_bet8":
                7 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "lay_bet8" === d && (g = roundDecimal(.05 * g, 2))) : 8 === b && (g = 0);
                break;
            case "lay_bet9":
            case "lose_bet9":
                7 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "lay_bet9" === d && (g = roundDecimal(.05 * g, 2))) : 9 === b && (g = 0);
                break;
            case "lay_bet10":
            case "lose_bet10":
                7 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "lay_bet10" === d && (g = roundDecimal(.05 * g, 2))) : 10 === b && (g = 0);
                break;
            case "number4":
            case "win_bet4":
                a ===
                    STATE_GAME_COME_POINT && (4 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "number4" === d && (g = roundDecimal(.05 * c, 2))) : 7 === b && (g = 0));
                break;
            case "number5":
            case "win_bet5":
                a === STATE_GAME_COME_POINT && (5 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "number5" === d && (g = roundDecimal(.05 * c, 2))) : 7 === b && (g = 0));
                break;
            case "number6":
            case "win_bet6":
                a === STATE_GAME_COME_POINT && (6 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "number6" === d && (g = roundDecimal(.05 * c, 2))) : 7 === b && (g = 0));
                break;
            case "number8":
            case "win_bet8":
                a ===
                    STATE_GAME_COME_POINT && (8 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "number8" === d && (g = roundDecimal(.05 * c, 2))) : 7 === b && (g = 0));
                break;
            case "number9":
            case "win_bet9":
                a === STATE_GAME_COME_POINT && (9 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "number9" === d && (g = roundDecimal(.05 * c, 2))) : 7 === b && (g = 0));
                break;
            case "number10":
            case "win_bet10":
                a === STATE_GAME_COME_POINT && (10 === b ? (g = c * s_oGameSettings.getBetMultiplier(d), "number10" === d && (g = roundDecimal(.05 * c, 2))) : 7 === b && (g = 0));
                break;
            case "any11_7":
                g = 11 === b ? c * s_oGameSettings.getBetMultiplier(d) :
                    0;
                break;
            case "any_craps_7":
                g = 2 === b || 3 === b || 12 === b ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "seven_bet":
                g = 7 === b ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "hardway6":
                g = 3 === f[0] && 3 === f[1] ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "hardway10":
                g = 5 === f[0] && 5 === f[1] ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "hardway8":
                g = 4 === f[0] && 4 === f[1] ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "hardway4":
                g = 2 === f[0] && 2 === f[1] ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "horn3":
                g =
                    3 === b ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "horn2":
                g = 2 === b ? c * s_oGameSettings.getBetMultiplier(d) : 0;
                break;
            case "horn12":
                g = 12 === b ? c * s_oGameSettings.getBetMultiplier(d) : 0
        }
        return g
    };
    this.getFicheValues = function(b) {
        return c[b]
    };
    this.getFicheIndexByValue = function(b) {
        for (var a = 0, g = 0; g < c.length; g++)
            if (b === c[g]) {
                a = g;
                break
            }
        return a
    };
    this.getBetMultiplier = function(b) {
        return e[b]
    };
    this.getAttachOffset = function(b) {
        return f[b]
    };
    this.getHelpMsgByBet = function(b) {
        return (void 0)[b]
    };
    this.getPuckXByNumber =
        function(c) {
            return b[c]
        };
    this._init()
}

function CFichesController(c) {
    var e, b, f, h;
    this._init = function(a) {
        h = a;
        this.reset()
    };
    this.reset = function() {
        this._removeAllFichesOnTable();
        e = [];
        b = [];
        f = []
    };
    this.setFicheOnTable = function(a, b, c) {
        -1 !== b.indexOf("any_craps_") ? b = "any_craps_7" : -1 !== b.indexOf("any11_") && (b = "any11_7");
        this.addFicheOnTable(a, b, c)
    };
    this.addFicheOnTable = function(a, c, f) {
        void 0 === e[c] && (e[c] = 0);
        a = s_oGameSettings.getFicheValues(a);
        e[c] += a;
        e[c] = roundDecimal(e[c], 1);
        a = s_oGameSettings.generateFichesPileByIndex(e[c]);
        a.sort(function(a,
            b) {
            return a - b
        });
        this._removeFichesPile(b[c]);
        b[c] = [];
        for (var d = s_oGameSettings.getAttachOffset(c), g = d.x, d = d.y, h = 0; h < a.length; h++) f.push(this._attachFichesPile(a[h], c, g, d)), d -= 5
    };
    this._attachFichesPile = function(a, c, e, d) {
        a = new CFiche(e, d, a, h);
        b[c].push(a);
        f.push(a);
        return a
    };
    this._removeAllFichesOnTable = function() {
        if (f)
            for (var a = 0; a < f.length; a++) h.contains(f[a].getSprite()) && h.removeChild(f[a].getSprite())
    };
    this._removeFichesPile = function(a) {
        for (var b in a) h.removeChild(a[b].getSprite())
    };
    this.removeBet =
        function(a) {
            b[a] = [];
            e[a] = 0
        };
    this.swapBet = function(a, c) {
        b[c] = b[a];
        e[c] = e[a];
        this.removeBet(a)
    };
    this.clearAllBets = function() {
        this._removeAllFichesOnTable();
        e = [];
        b = [];
        f = []
    };
    this.clearAllBetsInComePoint = function() {
        if (b) {
            var a = 0;
            for (var c in b)
                if ("pass_line" !== c && "dont_pass1" !== c && "dont_pass2" !== c) {
                    a += e[c];
                    for (var k = 0; k < b[c].length; k++) h.removeChild(b[c][k].getSprite());
                    delete e[c];
                    delete b[c];
                    delete f[c]
                }
        }
        return a
    };
    this.getFicheMc = function(a) {
        return b[a]
    };
    this.getBetAmountInPos = function(a) {
        return e[a]
    };
    this._init(c)
}
var TEXT_MONEY = "موجودی حساب",
    TEXT_CUR_BET = "مبلغ شرط بندی",
    TEXT_MIN_BET = "حداقل شرط",
    TEXT_MAX_BET = "حداکثر شرط",
    TEXT_ROLL = "تاس بریز",
    TEXT_EXIT = "خروج",
    TEXT_RECHARGE = "افزایش موجودی",
    TEXT_YOU_WIN = "بسیار عالی ! شما برنده شدید",
    TEXT_CURRENCY = " T ",
    TEXT_ARE_SURE = "آیا مطمئن هستید ؟?",
    TEXT_COME_OUT = "نتیجه",
    TEXT_ERROR_NO_MONEY_MSG = "موجودی حساب شما برای این شرط کافی نیست",
    TEXT_ERROR_MAX_BET_REACHED = "حداکثر شرط توسط شما بسته شده است",
    TEXT_ERROR_MIN_BET = "شرط شما کمتر از حداقل شرط است",
    TEXT_NO_MONEY = "موجودی حساب شما کافی نیست",
    TEXT_RECHARGE_MSG = "برای شارژ حساب خود روی افزایش موجودی کلیک کنید",
    TEXT_WAITING_BET = "منتظر شرط بندی شما ...",
    TEXT_READY_TO_ROLL = "",
    TEXT_HELP_MSG = [];
TEXT_HELP_MSG.pass_line = "";
TEXT_HELP_MSG.dont_pass1 = "";
TEXT_HELP_MSG.dont_pass2 = "";
TEXT_HELP_MSG.dont_come = "";
TEXT_HELP_MSG.come = "";
TEXT_HELP_MSG.field = "";
TEXT_HELP_MSG.big_6 = "";
TEXT_HELP_MSG.big_8 = "";
for (var aValues = [4, 5, 6, 8, 9, 10], aInfosLay = "1:2 ON 7 BEFORE POINT LESS 5% OF WIN;2:3 ON 7 BEFORE POINT LESS 5% OF WIN;5:6 ON 7 BEFORE POINT LESS 5% OF WIN;5:6 ON 7 BEFORE POINT LESS 5% OF WIN;2:3 ON 7 BEFORE POINT LESS 5% OF WIN;1:2 ON 7 BEFORE POINT LESS 5% OF WIN".split(";"), aInfosLose = "5:11 ON 7 BEFORE POINT;5:8 ON 7 BEFORE POINT;4:5 ON 7 BEFORE POINT;4:5 ON 7 BEFORE POINT;5:8 ON 7 BEFORE POINT;5:11 ON 7 BEFORE POINT".split(";"), aInfosBuy = "2:1 ON MAKING POINT LESS 5% OF BET;3:2 ON MAKING POINT LESS 5% OF BET;6:5 ON MAKING POINT LESS 5% OF BET;6:5 ON MAKING POINT LESS 5% OF BET;3:2 ON MAKING POINT LESS 5% OF BET;2:1 ON MAKING POINT LESS 5% OF BET".split(";"),
        aInfosWin = "9:5 ON MAKING POINT;7:5 ON MAKING POINT;7:6 ON MAKING POINT;7:6 ON MAKING POINT;7:5 ON MAKING POINT;9:5 ON MAKING POINT".split(";"), i = 0; i < aValues.length; i++) TEXT_HELP_MSG["lay_bet" + aValues[i]] = "PLACE YOUR BET ON LAY " + aValues[i] + " - " + aInfosLay[i], TEXT_HELP_MSG["lose_bet" + aValues[i]] = "PLACE YOUR BET ON LOSE " + aValues[i] + " - " + aInfosLose[i], TEXT_HELP_MSG["number" + aValues[i]] = "PLACE YOUR BET ON BUY " + aValues[i] + " - " + aInfosBuy[i], TEXT_HELP_MSG["win_bet" + aValues[i]] = "PLACE YOUR BET ON WIN " +
    aValues[i] + " - " + aInfosWin[i];
for (var j = 0; 8 > j; j++) TEXT_HELP_MSG["any11_" + j] = "PLACE YOUR BET ON HORN 11", TEXT_HELP_MSG["any_craps_" + j] = "PLACE YOUR BET ON ANY CRAPS";
TEXT_HELP_MSG.seven_bet = "";
TEXT_HELP_MSG.hardway6 = "";
TEXT_HELP_MSG.hardway10 = "";
TEXT_HELP_MSG.hardway8 = "";
TEXT_HELP_MSG.hardway4 = "";
TEXT_HELP_MSG.horn3 = "";
TEXT_HELP_MSG.horn2 = "";
TEXT_HELP_MSG.horn12 = "";
var TEXT_CREDITS_DEVELOPED = "",
    TEXT_LINK = "www.tkstar.ir",
    TEXT_CONGRATULATIONS = "";

function CPreloader() {
    var c, e, b, f, h, a;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", self.images_location + "progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        a = new createjs.Container;
        s_oStage.addChild(a)
    };
    this.unload = function() {
        a.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        a.addChild(g);
        f = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
        f.x = 400;
        f.y = CANVAS_HEIGHT - 140;
        a.addChild(f);
        c = 476;
        h = new createjs.Shape;
        h.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(400, CANVAS_HEIGHT - 140, 1, 30);
        a.addChild(h);
        f.mask = h;
        e = new createjs.Text("0%", "30px " + FONT1, "#fff");
        e.x = 450;
        e.y = CANVAS_HEIGHT - 140;
        e.textAlign = "center";
        e.textBaseline = "middle";
        a.addChild(e);
        b = new createjs.Text("0%", "30px " +
            FONT2, "#fff");
        b.x = CANVAS_WIDTH + 200;
        b.y = CANVAS_HEIGHT + 140;
        b.textAlign = "center";
        b.textBaseline = "middle";
        a.addChild(b)
    };
    this.refreshLoader = function(a) {
        e.text = a + "%";
        b.text = a + "%";
        a = Math.floor(a * c / 100);
        h.graphics.clear();
        h.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(400, CANVAS_HEIGHT - 140, a, 30)
    };
    this._init()
}

function CMain(c) {
    var e, b = 0,
        f = 0,
        h = STATE_LOADING,
        a, g;
    this.initContainer = function() {
        var b = document.getElementById("canvas");
        s_oStage = new createjs.Stage(b);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        false === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(FPS);
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = true);
        s_oSpriteLibrary = new CSpriteLibrary;
        a = new CPreloader
    };
    this.soundLoaded = function() {
        b++;
        b === f && (a.unload(), this.gotoMenu())
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
            filename: "fiche_select",
            loop: false,
            volume: 1,
            ingamename: "fiche_select"
        });
        a.push({
            path: self.sounds_location,
            filename: "dice_rolling",
            loop: false,
            volume: 1,
            ingamename: "dice_rolling"
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
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("chip_box", self.images_location + "chip_box.png");
        s_oSpriteLibrary.addSprite("but_bets", self.images_location + "but_bets.png");
        s_oSpriteLibrary.addSprite("but_bg", self.images_location + "but_bg.png");
        s_oSpriteLibrary.addSprite("but_clear_all", self.images_location + "but_clear_all.png");
        s_oSpriteLibrary.addSprite("but_play", self.images_location + "but_play.png");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("but_credits", self.images_location + "but_credits.png");
        s_oSpriteLibrary.addSprite("ball", self.images_location + "ball.png");
        s_oSpriteLibrary.addSprite("enlight_any_craps", self.images_location + "enlight_any_craps.png");
        s_oSpriteLibrary.addSprite("enlight_big_6", self.images_location + "enlight_big_6.png");
        s_oSpriteLibrary.addSprite("enlight_big_8", self.images_location + "enlight_big_8.png");
        s_oSpriteLibrary.addSprite("enlight_circle", self.images_location + "enlight_circle.png");
        s_oSpriteLibrary.addSprite("enlight_come", self.images_location + "enlight_come.png");
        s_oSpriteLibrary.addSprite("enlight_dont_come", self.images_location + "enlight_dont_come.png");
        s_oSpriteLibrary.addSprite("enlight_dont_pass1", self.images_location + "enlight_dont_pass1.png");
        s_oSpriteLibrary.addSprite("enlight_dont_pass2", self.images_location + "enlight_dont_pass2.png");
        s_oSpriteLibrary.addSprite("enlight_field", self.images_location + "enlight_field.png");
        s_oSpriteLibrary.addSprite("enlight_lay_bet", self.images_location + "enlight_lay_bet.png");
        s_oSpriteLibrary.addSprite("enlight_lose_bet", self.images_location + "enlight_lose_bet.png");
        s_oSpriteLibrary.addSprite("enlight_number", self.images_location + "enlight_number.png");
        s_oSpriteLibrary.addSprite("enlight_pass_line", self.images_location + "enlight_pass_line.png");
        s_oSpriteLibrary.addSprite("enlight_proposition1", self.images_location + "enlight_proposition1.png");
        s_oSpriteLibrary.addSprite("enlight_proposition2", self.images_location + "enlight_proposition2.png");
        s_oSpriteLibrary.addSprite("enlight_seven", self.images_location + "enlight_seven.png");
        s_oSpriteLibrary.addSprite("enlight_any11", self.images_location + "enlight_any11.png");
        s_oSpriteLibrary.addSprite("hit_area_any_craps", self.images_location + "hit_area_any_craps.png");
        s_oSpriteLibrary.addSprite("hit_area_big_8", self.images_location + "hit_area_big_8.png");
        s_oSpriteLibrary.addSprite("hit_area_big_6", self.images_location + "hit_area_big_6.png");
        s_oSpriteLibrary.addSprite("hit_area_circle", self.images_location + "hit_area_circle.png");
        s_oSpriteLibrary.addSprite("hit_area_come", self.images_location + "hit_area_come.png");
        s_oSpriteLibrary.addSprite("hit_area_dont_come", self.images_location + "hit_area_dont_come.png");
        s_oSpriteLibrary.addSprite("hit_area_dont_pass1", self.images_location + "hit_area_dont_pass1.png");
        s_oSpriteLibrary.addSprite("hit_area_dont_pass2", self.images_location + "hit_area_dont_pass2.png");
        s_oSpriteLibrary.addSprite("hit_area_field", self.images_location + "hit_area_field.png");
        s_oSpriteLibrary.addSprite("hit_area_lay_bet", self.images_location + "hit_area_lay_bet.png");
        s_oSpriteLibrary.addSprite("hit_area_lose_bet", self.images_location + "hit_area_lose_bet.png");
        s_oSpriteLibrary.addSprite("hit_area_number", self.images_location + "hit_area_number.png");
        s_oSpriteLibrary.addSprite("hit_area_pass_line", self.images_location + "hit_area_pass_line.png");
        s_oSpriteLibrary.addSprite("hit_area_proposition1", self.images_location + "hit_area_proposition1.png");
        s_oSpriteLibrary.addSprite("hit_area_proposition2", self.images_location + "hit_area_proposition2.png");
        s_oSpriteLibrary.addSprite("hit_area_seven", self.images_location + "hit_area_seven.png");
        s_oSpriteLibrary.addSprite("hit_area_any11", self.images_location + "hit_area_any11.png");
        s_oSpriteLibrary.addSprite("select_fiche", self.images_location + "select_fiche.png");
        s_oSpriteLibrary.addSprite("roll_but", self.images_location + "roll_but.png");
        s_oSpriteLibrary.addSprite("dices_screen_bg", self.images_location + "dices_screen_bg.jpg");
        s_oSpriteLibrary.addSprite("logo_game_0", self.images_location + "logo_game_0.png");
        s_oSpriteLibrary.addSprite("board_table", self.images_location + "board_table.jpg");
        s_oSpriteLibrary.addSprite("display_bg", self.images_location + "display_bg.png");
        s_oSpriteLibrary.addSprite("puck", self.images_location + "puck.png");
        s_oSpriteLibrary.addSprite("dice_topdown1", self.images_location + "dice_topdown1.png");
        s_oSpriteLibrary.addSprite("dice_topdown2", self.images_location + "dice_topdown2.png");
        s_oSpriteLibrary.addSprite("but_not", self.images_location + "but_not.png");
        s_oSpriteLibrary.addSprite("but_yes", self.images_location + "but_yes.png");
        s_oSpriteLibrary.addSprite("dice_a", self.images_location + "dice_a.png");
        s_oSpriteLibrary.addSprite("dice_b", self.images_location + "dice_b.png");
        s_oSpriteLibrary.addSprite("dices_box", self.images_location + "dices_box.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits", self.images_location + "but_credits.png");
        for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, self.images_location + "fiche_" + a + ".png");
        for (a = 0; a < NUM_DICE_ROLLING_FRAMES; a++) s_oSpriteLibrary.addSprite("launch_dices_" + a, self.images_location + "launch_dice_anim/launch_dices_" + a + ".png");
        f += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        a.refreshLoader(Math.floor(b / f * 100));
        b === f && (a.unload(), this.gotoMenu())
    };
    this._onAllImagesLoaded = function() {};
    this.onImageLoadError = function(a) {};
    this.preloaderReady = function() {
        this._loadImages();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile ||
            this._initSounds();
        e = true
    };
    this.gotoMenu = function() {
        new CMenu;
        h = STATE_MENU
    };
    this.gotoGame = function() {
        g = new CGame(k);
        h = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        h = STATE_HELP
    };
    this.stopUpdate = function() {
        e = false;
        createjs.Ticker.paused = true;
        $("#block_game").css("display", "block");
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || Howler.mute(true)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        e = true;
        createjs.Ticker.paused = false;
        $("#block_game").css("display", "none");
        (false === DISABLE_SOUND_MOBILE || false === s_bMobile) &&
        s_bAudioActive && Howler.mute(false)
    };
    this._update = function(a) {
        if (false !== e) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            h === STATE_GAME && g.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var k = c;
    SHOW_CREDITS = c.show_credits;
    ENABLE_FULLSCREEN = c.fullscreen;
    ENABLE_CHECK_ORIENTATION = c.check_orientation;
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

function CTextButton(c, e, b, f, h, a, g, k) {
    var d, r, l, t, n, w, m, v, q, p;
    this._init = function(a, b, c, g, e, f, h, k) {
        d = false;
        t = [];
        n = [];
        p = createBitmap(c);
        r = c.width;
        l = c.height;
        var B = Math.ceil(h / 20);
        v = new createjs.Text(g, h + "px " + e, "#000000");
        var u = v.getBounds();
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        v.x = c.width / 2 + B;
        v.y = Math.floor(c.height / 2) + u.height / 3 + B;
        q = new createjs.Text(g, h + "px " + e, f);
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.x = c.width / 2;
        q.y = Math.floor(c.height / 2) + u.height / 3;
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        m.regX = c.width / 2;
        m.regY = c.height / 2;
        s_bMobile || (m.cursor = "pointer");
        m.addChild(p, v, q);
        false !== k && s_oStage.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown");
        m.off("pressup");
        s_oStage.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this.setAlign = function(a) {
        q.textAlign = a;
        v.textAlign = a
    };
    this.enable = function() {
        d = false;
        p.filters = [];
        p.cache(0, 0, r, l)
    };
    this.disable = function() {
        d = true;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(0);
        p.filters = [new createjs.ColorMatrixFilter(a)];
        p.cache(0, 0, r, l)
    };
    this._initListener = function() {
        m.on("mousedown", this.buttonDown);
        m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        t[a] = b;
        n[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        t[a] = b;
        n[a] = c;
        w = d
    };
    this.buttonRelease = function() {
        d || (playSound("click", 1, false), m.scaleX = 1, m.scaleY = 1, t[ON_MOUSE_UP] && t[ON_MOUSE_UP].call(n[ON_MOUSE_UP], w))
    };
    this.buttonDown = function() {
        d || (m.scaleX = .9, m.scaleY = .9, t[ON_MOUSE_DOWN] && t[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.changeText = function(a) {
        q.text = a;
        v.text = a
    };
    this.setX = function(a) {
        m.x = a
    };
    this.setY = function(a) {
        m.y = a
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    this.getSprite = function() {
        return m
    };
    this._init(c, e, b, f, h, a, g, k);
    return this
}

function CGfxButton(c, e, b, f) {
    var h, a, g, k, d, r, l;
    this._init = function(b, c, e) {
        h = false;
        k = [];
        d = [];
        l = createBitmap(e);
        a = e.width;
        g = e.height;
        l.x = b;
        l.y = c;
        l.regX = e.width / 2;
        l.regY = e.height / 2;
        s_bMobile || (l.cursor = "pointer");
        t.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", this.buttonDown);
        l.off("pressup", this.buttonRelease);
        false === s_bMobile && (l.off("rollover", this.mouseOver), l.off("rollout", this.mouseOut));
        t.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this.enable = function() {
        h = false;
        l.filters = [];
        l.cache(0, 0, a, g)
    };
    this.disable = function() {
        h = true;
        var b = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        l.filters = [new createjs.ColorMatrixFilter(b)];
        l.cache(0, 0, a, g)
    };
    this._initListener = function() {
        l.on("mousedown", this.buttonDown);
        l.on("pressup", this.buttonRelease);
        false === s_bMobile && (l.on("rollover", this.mouseOver), l.on("rollout", this.mouseOut))
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        d[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, g) {
        k[a] = b;
        d[a] = c;
        r = g
    };
    this.buttonRelease = function() {
        h || (playSound("click", 1, false), l.scaleX = 1, l.scaleY = 1, k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(d[ON_MOUSE_UP], r))
    };
    this.buttonDown = function() {
        h || (l.scaleX = .9, l.scaleY = .9, k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN], r))
    };
    this.mouseOver = function() {
        k[ON_MOUSE_OVER] && k[ON_MOUSE_OVER].call(d[ON_MOUSE_OVER], r)
    };
    this.mouseOut = function() {
        k[ON_MOUSE_OUT] && k[ON_MOUSE_OUT].call(d[ON_MOUSE_OUT], r)
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
    this.getX = function() {
        return l.x
    };
    this.getY = function() {
        return l.y
    };
    var t = f;
    this._init(c, e, b);
    return this
}

function CFicheBut(c, e, b) {
    var f, h, a, g, k, d, r = [],
        l, t, n;
    this._init = function(b, c, e) {
        h = false;
        t = new createjs.Container;
        s_oStage.addChild(t);
        f = false;
        k = [];
        d = [];
        l = createBitmap(e);
        l.x = b;
        l.y = c;
        l.regX = e.width / 2;
        l.regY = e.height / 2;
        s_bMobile || (l.cursor = "pointer");
        t.addChild(l);
        a = e.width;
        g = e.height;
        e = s_oSpriteLibrary.getSprite("select_fiche");
        n = createBitmap(e);
        n.x = b - 2;
        n.y = c - 2;
        n.regX = e.width / 2;
        n.regY = e.height / 2;
        t.addChild(n);
        n.visible = f;
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown", this.buttonDown);
        l.off("pressup",
            this.buttonRelease);
        s_oStage.removeChild(t)
    };
    this.select = function() {
        f = true;
        n.visible = f
    };
    this.deselect = function() {
        f = false;
        n.visible = f
    };
    this.enable = function() {
        h = false;
        l.filters = [];
        l.cache(0, 0, a, g)
    };
    this.disable = function() {
        h = true;
        var b = (new createjs.ColorMatrix).adjustSaturation(-90);
        l.filters = [new createjs.ColorMatrixFilter(b)];
        l.cache(0, 0, a, g)
    };
    this.setVisible = function(a) {
        l.visible = a
    };
    this._initListener = function() {
        l.on("mousedown", this.buttonDown);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a,
        b, c) {
        k[a] = b;
        d[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, g) {
        k[a] = b;
        d[a] = c;
        r = g
    };
    this.buttonRelease = function() {
        h || (playSound("click", 1, false), l.scaleX = 1, l.scaleY = 1, k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(d[ON_MOUSE_UP], r), f = !f, n.visible = f)
    };
    this.buttonDown = function() {
        h || (l.scaleX = .9, l.scaleY = .9, k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN], r))
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
    this.getX = function() {
        return l.x
    };
    this.getY =
        function() {
            return l.y
        };
    this._init(c, e, b)
}

function CBetTableButton(c, e, b, f, h) {
    var a, g, k, d, r;
    this._init = function(b, c, e, f, h) {
        d = f;
        a = [];
        g = [];
        r = h;
        k = new createjs.Bitmap(e);
        k.x = b;
        k.y = c;
        k.regX = e.width / 2;
        k.regY = e.height / 2;
        s_bMobile || (k.cursor = "pointer");
        this._initListener();
        r.addChild(k)
    };
    this.unload = function() {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        k.off("rollover", this.mouseOver);
        k.off("rollout", this.mouseOut);
        r.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this._initListener = function() {
        k.on("mousedown",
            this.buttonDown);
        k.on("pressup", this.buttonRelease);
        k.on("rollover", this.mouseOver);
        k.on("rollout", this.mouseOut)
    };
    this.addEventListener = function(b, c, d) {
        a[b] = c;
        g[b] = d
    };
    this.buttonRelease = function() {
        playSound("click", 1, false);
        a[ON_MOUSE_UP] && a[ON_MOUSE_UP].call(g[ON_MOUSE_UP], {
            button: d
        }, false)
    };
    this.buttonDown = function() {
        a[ON_MOUSE_DOWN] && a[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], {
            button: d
        }, false)
    };
    this.mouseOver = function() {
        a[ON_MOUSE_OVER] && a[ON_MOUSE_OVER].call(g[ON_MOUSE_OVER], {
            enlight: d
        })
    };
    this.mouseOut = function() {
        a[ON_MOUSE_OUT] &&
            a[ON_MOUSE_OUT].call(g[ON_MOUSE_OUT], {
                enlight: d
            })
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.setX = function(a) {
        k.x = a
    };
    this.setY = function(a) {
        k.y = a
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this._init(c, e, b, f, h)
}

function CToggle(c, e, b, f, h) {
    var a, g, k, d, r, l, t;
    this._init = function(b, c, e, f, h) {
        t = void 0 !== h ? h : s_oStage;
        g = [];
        k = [];
        h = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 2,
                height: e.height,
                regX: e.width / 2 / 2,
                regY: e.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        a = f;
        d = createSprite(h, "state_" + a, e.width / 2 / 2, e.height / 2, e.width / 2, e.height);
        d.x = b;
        d.y = c;
        d.stop();
        s_bMobile || (d.cursor = "pointer");
        t.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", r);
        d.off("pressup", l);
        t.removeChild(d)
    };
    this._initListener = function() {
        r = d.on("mousedown", this.buttonDown);
        l = d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        g[a] = b;
        k[a] = c
    };
    this.setCursorType = function(a) {
        d.cursor = a
    };
    this.setActive = function(b) {
        a = b;
        d.gotoAndStop("state_" + a)
    };
    this.buttonRelease = function() {
        d.scaleX = 1;
        d.scaleY = 1;
        playSound("click", 1, false);
        a = !a;
        d.gotoAndStop("state_" + a);
        g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(k[ON_MOUSE_UP], a)
    };
    this.buttonDown = function() {
        d.scaleX = .9;
        d.scaleY = .9;
        g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this._init(c, e, b, f, h)
}

function CMenu() {
    var c, e, b, f, h, a, g, k, d, r, l, t, n, w = null,
        m = null,
        v;
    this._init = function() {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        var q = s_oSpriteLibrary.getSprite("but_play");
        h = CANVAS_WIDTH / 2;
        a = CANVAS_HEIGHT - 110;
        r = new CGfxButton(h, a, q, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        var l = s_oSpriteLibrary.getSprite("bg_back");
        m = new CTextButton(CANVAS_WIDTH - l.width / 4 - 75, l.height + 68, l, ' ', FONT1, "#ffffff", 40, s_oStage);
        m.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        q = s_oSpriteLibrary.getSprite("but_credits");
        SHOW_CREDITS ? (c = CANVAS_WIDTH - q.height / 2 - 10, e = q.height / 2 + 10, l = new CGfxButton(c, e, q, s_oStage), l.addEventListener(ON_MOUSE_UP,
            this._onCredits, this), q = s_oSpriteLibrary.getSprite("audio_icon"), g = c - q.width / 2 - 10) : (q = s_oSpriteLibrary.getSprite("audio_icon"), g = CANVAS_WIDTH - q.height / 2 - 10);
        k = q.height / 2 + 10;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) t = new CToggle(g, k, q, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        q = window.document;
        var p = q.documentElement;
        w = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen;
        m = q.exitFullscreen || q.mozCancelFullScreen ||
            q.webkitExitFullscreen || q.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (w = false);
        w && false === inIframe() && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), b = 10 + q.width / 4, f = q.height / 2 + 10, n = new CToggle(b, f, q, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        v = new createjs.Shape;
        v.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(v);
        createjs.Tween.get(v).to({
            alpha: 0
        }, 400).call(function() {
            v.visible = false
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(d, m) {
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || t.setPosition(g - d, m + k);
        w && false === inIframe() && n.setPosition(b + d, f + m);
        SHOW_CREDITS && l.setPosition(c - d, m + e);
        r.setPosition(h, a - m)
    };
    this.unload = function() {
        r.unload();
        r = null;
        SHOW_CREDITS && (l.unload(), l = null);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) t.unload(), t = null;
        w && false === inIframe() && n.unload();
        s_oStage.removeChild(d);
        d = null;
        s_oStage.removeChild(v);
        s_oMenu = v = null
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
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (m.call(window.document), s_bFullscreen = false) : (w.call(window.document.documentElement), s_bFullscreen = true);
        sizeHandler()
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(c) {
    var e = false,
        b, f, h, a, g, k, d, r, l, t, n, w, m, v, q, p, x, y, z, A;
    this._init = function() {
        s_oTweenController = new CTweenController;
        s_oGameSettings = new CGameSettings;
        x = new CTableController;
        x.addEventListener(ON_SHOW_ENLIGHT, this._onShowEnlight);
        x.addEventListener(ON_HIDE_ENLIGHT, this._onHideEnlight);
        x.addEventListener(ON_SHOW_BET_ON_TABLE, this._onShowBetOnTable);
        b = false;
        d = 0;
        a = f = -1;
        n = {};
        m = new CSeat;
        q = new CPuck(325, 108, s_oStage);
        p = new CInterface;
        v = new CDicesAnim(240, 159);
        A = new CAreYouSurePanel(s_oStage);
        z = new CGameOver;
        y = new CMsgBox;
        r = [];
        h = 0;
        this._onSitDown();
        e = true
    };
    this.unload = function() {
        p.unload();
        x.unload();
        y.unload();
        z.unload();
        v.unload();
        s_oStage.removeAllChildren()
    };
    this._setState = function(b) {
        f = b;
        switch (b) {
            case STATE_GAME_WAITING_FOR_BET:
                if (m.getCredit() < s_oGameSettings.getFicheValues(0)) {
                    f = -1;
                    setTimeout(function() {
                        p.hideBlock();
                        z.show()
                    }, 2E3);
                    return
                }
                a = -1;
                g = 0;
                k = Math.floor(3 * Math.random() + 3);
                p.enableClearButton();
                0 === m.getCurBet() && p.enableRoll(false);
                d++;
                d > NUM_HAND_FOR_ADS && (d = 0, $(s_oMain).trigger("show_interlevel_ad"));
                p.hideBlock()
        }
        x.setState(b)
    };
    this._prepareForRolling = function() {
        p.disableBetFiches();
        p.disableClearButton();
        g++;
        l = [];
        this._generateWinLoss();
        r.push(l);
        h = 0
    };
    this._generateWinLoss = function() {
        var b;
        var c = u < 2 * m.getCurBet() ? 0 : WIN_OCCURRENCE;
        for (b in n) {
            -1 !== b.indexOf("any11_") ? b = "any11" : -1 !== b.indexOf("any_craps") && (b = "any_craps");
            var d = s_oGameSettings.getBetWinLoss(f, a, b);
            var e = d.lose;
            d = d.win
        }
        if (Math.floor(100 * Math.random()) >= c)
            if (g > k) {
                do c = this._generateRandomDices(), b = c[0] + c[1]; while (0 === e[b - 1])
            } else {
                do c =
                    this._generateRandomDices(), b = c[0] + c[1], b = 0 === d[b - 1] ? true : false; while (!b)
            }
        else if (g > k)
            if (-1 !== b.indexOf("hardway")) c = this._checkHardwayWin(b);
            else {
                do c = this._generateRandomDices(), b = c[0] + c[1]; while (0 === d[b - 1])
            }
        else if (-1 !== b.indexOf("hardway")) c = this._checkHardwayWin(b);
        else {
            do c = this._generateRandomDices(), b = c[0] + c[1], b = 0 === e[b - 1] ? false : true; while (b)
        }
        l[0] = c[0];
        l[1] = c[1]
    };
    this._generateRandomDices = function() {
        var a = [],
            b = Math.floor(6 * Math.random()) + 1;
        a.push(b);
        b = Math.floor(6 * Math.random()) + 1;
        a.push(b);
        return a
    };
    this._checkHardwayWin = function(a) {
        var b = 6,
            c = 6;
        switch (a) {
            case "hardway6":
                c = b = 3;
                break;
            case "hardway10":
                c = b = 5;
                break;
            case "hardway8":
                c = b = 4;
                break;
            case "hardway4":
                c = b = 2
        }
        do a = this._generateRandomDices(); while (a[0] !== b || a[1] !== c);
        return a
    };
    this._startRollingAnim = function() {
        v.startRolling(l)
    };
    this.dicesAnimEnded = function() {
        var c = l[0] + l[1];
        if (f === STATE_GAME_COME_OUT) {
            2 !== c && 3 !== c && 12 !== c && 7 !== c && 11 !== c && this._assignNumber(c);
            this._checkWinForBet();
            if (0 < t.length) {
                b = true;
                for (var d = 0; d < w.length; d++) m.removeBet(w[d]),
                    delete n[w[d]];
                p.setCurBet(m.getCurBet())
            } - 1 !== a && this._setState(STATE_GAME_COME_POINT)
        } else {
            this._checkWinForBet();
            if (0 < t.length) {
                b = true;
                for (d = 0; d < w.length; d++) m.removeBet(w[d]), delete n[w[d]];
                p.setCurBet(m.getCurBet())
            }
            a === c ? (q.switchOff(), this._setState(STATE_GAME_WAITING_FOR_BET)) : 7 === c && (q.switchOff(), this._setState(STATE_GAME_WAITING_FOR_BET))
        }
        p.setMoney(m.getCredit());
        0 < Object.keys(n).length && (p.enableRoll(true), p.enableClearButton());
        p.hideBlock();
        p.enableBetFiches();
        $(s_oMain).trigger("save_score", [m.getCredit()])
    };
    this._assignNumber = function(b) {
        a = b;
        b = s_oGameSettings.getPuckXByNumber(a);
        q.switchOn(b);
        p.hideBlock()
    };
    this._checkWinForBet = function() {
        var b = l[0] + l[1],
            c = 0;
        t = [];
        w = [];
        for (var d in n) {
            var e = d; - 1 !== d.indexOf("any11_") ? d = "any11_7" : -1 !== d.indexOf("any_craps") && (d = "any_craps_7");
            var g = m.getBetAmountInPos(e),
                g = s_oGameSettings.checkBetWin(b, f, g, a, d, l);
            if (-1 !== g) {
                var c = c + g,
                    h = m.getFicheMc(d);
                w.push(e);
                for (var k = 0; k < h.length; k++) {
                    t.push(h[k]);
                    if (0 < g) {
                        var q = s_oGameSettings.getAttachOffset("oReceiveWin");
                        playSound("win", .2, false)
                    } else q = s_oGameSettings.getAttachOffset("oDealerWin"), playSound("lose", .2, false);
                    h[k].setEndPoint(q.x, q.y);
                    m.decreaseBet(s_oGameSettings.getFicheValues(t[k].getValue()))
                }
                0 < g && (m.showWin(m.getBetAmountInPos(e) + g), u -= g, e = h[0].getStartingPos(), new CScoreText(g + TEXT_CURRENCY, e.x, e.y))
            }
        }
        0 < c && (p.refreshMsgHelp(TEXT_YOU_WIN + ": " + c), setTimeout(function() {
            p.clearMsgHelp()
        }, 3E3))
    };
    this.assignBetFromCome = function(a, b) {
        for (var c = m.getFicheMc(b), d = 0; d < c.length; d++) {
            t.push(c[d]);
            var e = s_oGameSettings.getAttachOffset("number" +
                a);
            c[d].setEndPoint(e.x, e.y)
        }
        n["number" + a] = n[b];
        delete n[b];
        m.swapBet(b, "number" + a)
    };
    this.assignBetFromDontCome = function(a, b) {
        for (var c = m.getFicheMc(b), d = 0; d < c.length; d++) {
            t.push(c[d]);
            var e = s_oGameSettings.getAttachOffset("lay_bet" + a);
            c[d].setEndPoint(e.x, e.y)
        }
        n["lay_bet" + a] = n[b];
        delete n[b];
        m.swapBet(b, "lay_bet" + a)
    };
    this.onRecharge = function() {
        m.recharge(TOTAL_MONEY);
        p.setMoney(m.getCredit());
        this._setState(STATE_GAME_WAITING_FOR_BET);
        z.hide();
        $(s_oMain).trigger("recharge")
    };
    this.onRoll = function() {
        0 !==
            m.getCurBet() && (m.getCurBet() < MIN_BET ? (y.show(TEXT_ERROR_MIN_BET), p.enableBetFiches(), p.enableRoll(true)) : p.isBlockVisible() || (p.showBlock(), f === STATE_GAME_WAITING_FOR_BET && this._setState(STATE_GAME_COME_OUT), $(s_oMain).trigger("bet_placed", m.getCurBet()), this._prepareForRolling(), this._startRollingAnim()))
    };
    this._onSitDown = function() {
        this._setState(STATE_GAME_WAITING_FOR_BET);
        m.setInfo(TOTAL_MONEY, x.getContainer());
        p.setMoney(TOTAL_MONEY);
        p.setCurBet(0)
    };
    this._onShowBetOnTable = function(a) {
        if (!b) {
            var c =
                a.button,
                d = p.getCurFicheSelected(),
                e = s_oGameSettings.getFicheValues(d),
                g = m.getCurBet();
            0 > m.getCredit() - e ? y.show(TEXT_ERROR_NO_MONEY_MSG) : g + e > MAX_BET ? y.show(TEXT_ERROR_MAX_BET_REACHED) : (n[a.button] = void 0 === n[a.button] ? e : n[a.button] + e, m.addFicheOnTable(e, d, c), p.setMoney(m.getCredit()), p.setCurBet(m.getCurBet()), p.enableRoll(true), p.enableClearButton(), p.refreshMsgHelp(TEXT_READY_TO_ROLL, true), playSound("chip", 1, false))
        }
    };
    this._onShowEnlight = function(a) {
        if (a = a.enlight) x.enlight(a), p.refreshMsgHelp(TEXT_HELP_MSG[a], false)
    };
    this._onHideEnlight = function(a) {
        if (a = a.enlight) x.enlightOff(a), p.clearMsgHelp()
    };
    this.onClearAllBets = function() {
        $(s_oMain).trigger("clear_bet", m.getCurBet());
        if (f === STATE_GAME_COME_POINT) {
            m.clearAllBetsInComePoint();
            for (var a in n) "pass_line" !== a && "dont_pass1" !== a && "dont_pass2" !== a && delete n[a]
        } else m.clearAllBets(), n = {}, p.enableRoll(false);
        p.setMoney(m.getCredit());
        p.setCurBet(m.getCurBet());
        p.enableRoll(false);
        p.disableClearButton()
    };
    this.onExit = function(a) {
        a ? (this.unload(), s_oMain.gotoMenu()) : A.show()
    };
    this.onConfirmExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", m.getCredit())
    };
    this._updateDistributeFiches = function() {
        h += s_iTimeElaps;
        if (h > TIME_FICHES_MOV) h = 0, b = false, playSound("fiche_collect", 1, false);
        else
            for (var a = s_oTweenController.easeInOutCubic(h, 0, 1, TIME_FICHES_MOV), c = 0; c < t.length; c++) t[c].updatePos(a)
    };
    this.update = function() {
        false !== e && (b && this._updateDistributeFiches(), v.isVisible() && v.update())
    };
    s_oGame = this;
    TOTAL_MONEY = c.money;
    MIN_BET = c.min_bet;
    MAX_BET = c.max_bet;
    WIN_OCCURRENCE = c.win_occurrence;
    TIME_SHOW_DICES_RESULT = c.time_show_dice_result;
    NUM_HAND_FOR_ADS = c.num_hand_before_ads;
    var u = c.casino_cash;
    this._init()
}
var s_oGame, s_oTweenController, s_oGameSettings;

function CInterface() {
    var c, e, b, f, h, a, g, k, d, r, l, t, n, w, m, v, q, p, x, y = null,
        z = null,
        A;
    this._init = function() {
        var u = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
        u.x = 251;
        u.y = 603;
        s_oStage.addChild(u);
        u = new createjs.Text(TEXT_MONEY, "16px " + FONT1, "#fff");
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.x = 332;
        u.y = 629;
        s_oStage.addChild(u);
        t = new createjs.Text("", "16px " + FONT1, "#fff");
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.x = 332;
        t.y = 649;
        s_oStage.addChild(t);
        u = createBitmap(s_oSpriteLibrary.getSprite("but_bg"));
        u.x = 410;
        u.y = 603;
        s_oStage.addChild(u);
        u = new createjs.Text(TEXT_CUR_BET, "16px " + FONT1, "#fff");
        u.textAlign = "center";
        u.textBaseline = "alphabetic";
        u.x = 492;
        u.y = 629;
        s_oStage.addChild(u);
        n = new createjs.Text("", "16px " + FONT1, "#fff");
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = 492;
        n.y = 649;
        s_oStage.addChild(n);
        v = createBitmap(s_oSpriteLibrary.getSprite("but_bets"));
        v.x = 575;
        v.y = 610;
        s_oStage.addChild(v);
        w = new createjs.Text(TEXT_MIN_BET + ": " + MIN_BET + "\n" + TEXT_MAX_BET + ": نامحدود", "15px " + FONT1, "#fff");
        w.textAlign =
            "center";
        w.textBaseline = "alphabetic";
        w.lineHeight = 21;
        w.x = v.x + 75;
        w.y = v.y + 19;
        s_oStage.addChild(w);
        k = TEXT_WAITING_BET;
        q = new CTextButton(1030, 152, s_oSpriteLibrary.getSprite("roll_but"), "  " + TEXT_ROLL, FONT1, "#fff", 22, s_oStage);
        q.disable();
        q.setAlign("left");
		q.setY("280");
        q.addEventListener(ON_MOUSE_UP, this._onRoll, this);
        p = new CGfxButton(764, 636, s_oSpriteLibrary.getSprite("but_clear_all"), s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onClearAllBet, this);
        this._initFichesBut();
        g = 0;
        d[g].select();
        u = (new createjs.Graphics).beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        A = new createjs.Shape(u);
        A.on("click", function() {});
        A.visible = false;
        s_oStage.addChild(A);
        u = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - u.width / 2 - 10;
        e = u.height / 2 + 10;
        r = new CGfxButton(c,
            e, u, s_oStage);
        r.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) u = s_oSpriteLibrary.getSprite("audio_icon"), h = c - u.width / 2, a = u.height / 2 + 10, l = new CToggle(h, a, u, s_bAudioActive, s_oStage), l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var u = window.document,
            B = u.documentElement;
        y = B.requestFullscreen || B.mozRequestFullScreen || B.webkitRequestFullScreen || B.msRequestFullscreen;
        z = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (y = false);
        y && false === inIframe() && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), b = 10 + u.width / 4, f = u.height / 2 + 10, x = new CToggle(b, f, u, s_bFullscreen, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        r.unload();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || l.unload();
        y && false === inIframe() && x.unload();
        q.unload();
        p.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(d, g) {
        false !== DISABLE_SOUND_MOBILE &&
            false !== s_bMobile || l.setPosition(h - d, a + g);
        y && false === inIframe() && x.setPosition(b + d, f + g);
        r.setPosition(c - d, e + g)
    };
    this.hideBlock = function() {
        A.visible = false
    };
    this.showBlock = function() {
        A.visible = true
    };
    this.enableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++){
			if(a == 6)continue;
			d[a].enable()
		}
    };
    this.enableClearButton = function() {
        p.enable()
    };
    this.disableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++){
			if(a == 6)continue;
			d[a].disable()
		}
    };
    this.disableClearButton = function() {
        p.disable()
    };
    this.deselectAllFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++){
			if(a == 6)continue;
			d[a].deselect()
		}
    };
    this.enableRoll = function(a) {
        a ? q.enable() : q.disable()
    };
    this._initFichesBut = function() {
        var a = createBitmap(s_oSpriteLibrary.getSprite("chip_box"));
        a.x = 82;
        a.y = 94;
        s_oStage.addChild(a);
        a = 144;
        d = [];
        for (var b = 0; b < NUM_FICHES; b++) {
			if(b == 6)continue;
            var c = s_oSpriteLibrary.getSprite("fiche_" + b);
            d[b] = new CFicheBut(124, a, c);
            d[b].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheSelected, this, [b]);
            a += c.height + 25
        }
    };
    this.setMoney = function(a) {
        t.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.refreshMoney = function(a, b) {
        new CRollingTextController(t,
            null, a, parseFloat(b), 4E3, EASE_LINEAR, TEXT_CURRENCY)
    };
    this.setCurBet = function(a) {
        n.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY
    };
    this.refreshMsgHelp = function(a, b) {
        b && (k = a)
    };
    this.clearMsgHelp = function() {
    };
    this._onBetRelease = function(a) {
        null !== a.numbers && s_oGame._onShowBetOnTable({
            button: a.name
        }, false)
    };
    this._onFicheSelected = function(a) {
        playSound("fiche_collect", 1, false);
        this.deselectAllFiches();
        a = a[0];
        for (var b = 0; b < NUM_FICHES; b++) b === a && (g = b)
    };
    this._onRoll = function() {
        this.disableBetFiches();
        this.enableRoll(false);
        s_oGame.onRoll()
    };
    this._onClearAllBet = function() {
        s_oGame.onClearAllBets()
    };
    this._onExit = function() {
		s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session");
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (z.call(window.document), s_bFullscreen = false) : (y.call(window.document.documentElement), s_bFullscreen = true);
        sizeHandler()
    };
    this.getCurFicheSelected = function() {
        return g
    };
    this.isBlockVisible = function() {
        return A.visible
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CMsgBox() {
    var c, e, b, f;
    this._init = function() {
        c = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.on("click", function() {});
        b = new createjs.Text("", "24px " + FONT1, "#000");
        b.x = CANVAS_WIDTH / 2 + 2;
        b.y = CANVAS_HEIGHT / 2 - 28;
        b.textAlign = "center";
        b.lineWidth = 300;
        e = new createjs.Text("", "24px " + FONT1, "#ffffff");
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 - 30;
        e.textAlign = "center";
        e.lineWidth = 300;
        f = new createjs.Container;
        f.alpha = 0;
        f.visible = false;
        f.addChild(c, b, e);
        s_oStage.addChild(f)
    };
    this.unload = function() {
        c.off("click",
            function() {})
    };
    this.show = function(c) {
        b.text = c;
        e.text = c;
        f.alpha = 0;
        f.visible = true;
        var a = this;
        createjs.Tween.get(f).to({
            alpha: 1
        }, 500);
        setTimeout(function() {
            a._onExit()
        }, 2E3)
    };
    this._onExit = function() {
        f.visible && (f.visible = false)
    };
    this._init();
    return this
}

function CTweenController() {
    this.tweenValue = function(c, e, b) {
        return c + b * (e - c)
    };
    this.easeLinear = function(c, e, b, f) {
        return b * c / f + e
    };
    this.easeInCubic = function(c, e, b, f) {
        f = (c /= f) * c * c;
        return e + b * f
    };
    this.easeBackInQuart = function(c, e, b, f) {
        f = (c /= f) * c;
        return e + b * (2 * f * f + 2 * f * c + -3 * f)
    };
    this.easeInBack = function(c, e, b, f) {
        return b * (c /= f) * c * (2.70158 * c - 1.70158) + e
    };
    this.easeOutCubic = function(c, e, b, f) {
        return b * ((c = c / f - 1) * c * c + 1) + e
    };
    this.easeInOutCubic = function(c, e, b, f) {
        return 1 > (c /= f / 2) ? b / 2 * c * c * c + e : b / 2 * ((c -= 2) * c * c + 2) + e
    };
    this.tweenVectors = function(c, e, b, f) {
        f.x = c.x + b * (e.x - c.x);
        f.y = c.y + b * (e.y - c.y);
        return f
    }
}

function CSeat() {
    var c, e, b, f;
    this._init = function() {
        this.reset()
    };
    this.reset = function() {
        b = [];
        f && f.reset();
        c = 0
    };
    this.setInfo = function(b, a) {
        e = b;
        c = 0;
        f = new CFichesController(a)
    };
    this.setFicheBetted = function(b, a, g) {
        c += b * g;
        e -= b * g;
        e = roundDecimal(e, 1)
    };
    this.addFicheOnTable = function(b, a, c) {
        var e = [];
        f.setFicheOnTable(a, c, e);
        this.setFicheBetted(b, e, 1)
    };
    this.decreaseBet = function(b) {
        c -= b
    };
    this.removeBet = function(b) {
        f.removeBet(b)
    };
    this.swapBet = function(b, a) {
        f.swapBet(b, a)
    };
    this.clearAllBets = function() {
        f.clearAllBets();
        e += c;
        e = roundDecimal(e, 1);
        c = 0
    };
    this.clearAllBetsInComePoint = function() {
        var b = f.clearAllBetsInComePoint();
        c -= b;
        e += b;
        e = roundDecimal(e, 1)
    };
    this.showWin = function(b) {
        e += b;
        e = roundDecimal(e, 1)
    };
    this.recharge = function(b) {
        e = b
    };
    this.getCurBet = function() {
        return c
    };
    this.getCredit = function() {
        return e
    };
    this.getNumberSelected = function() {
        return b
    };
    this.getFicheMc = function(b) {
        return f.getFicheMc(b)
    };
    this.getBetAmountInPos = function(b) {
        return f.getBetAmountInPos(b)
    };
    this._init()
}

function CTableController() {
    var c, e, b, f, h;
    this._init = function() {
        b = new createjs.Container;
        s_oStage.addChild(b);
        var a = createBitmap(s_oSpriteLibrary.getSprite("board_table"));
        b.addChild(a);
        this._initEnlights();
        this._initButtonBets();
        this.setState(STATE_GAME_WAITING_FOR_BET);
        f = [];
        h = []
    };
    this._initEnlights = function() {
        e = [];
        var a = new CEnlight(170, 160, s_oSpriteLibrary.getSprite("enlight_pass_line"), b);
        e.pass_line = a;
        a = new CEnlight(360, 475, s_oSpriteLibrary.getSprite("enlight_dont_pass1"), b);
        e.dont_pass1 = a;
        a =
            new CEnlight(222, 125, s_oSpriteLibrary.getSprite("enlight_dont_pass2"), b);
        e.dont_pass2 = a;
        a = new CEnlight(274, 125, s_oSpriteLibrary.getSprite("enlight_dont_come"), b);
        e.dont_come = a;
        a = new CEnlight(274, 263, s_oSpriteLibrary.getSprite("enlight_come"), b);
        e.come = a;
        for (var c = [{
                value: 4,
                x: 365,
                y: 127
            }, {
                value: 5,
                x: 451,
                y: 127
            }, {
                value: 6,
                x: 537,
                y: 127
            }, {
                value: 8,
                x: 623,
                y: 127
            }, {
                value: 9,
                x: 709,
                y: 127
            }, {
                value: 10,
                x: 795,
                y: 127
            }], f = 0; 6 > f; f++) a = new CEnlight(c[f].x - 5, c[f].y - 3, s_oSpriteLibrary.getSprite("enlight_lay_bet"), b), e["lay_bet" +
            c[f].value] = a, a = new CEnlight(c[f].x - 5, c[f].y + 29, s_oSpriteLibrary.getSprite("enlight_lose_bet"), b), e["lose_bet" + c[f].value] = a, a = new CEnlight(c[f].x - 5, c[f].y + 39, s_oSpriteLibrary.getSprite("enlight_number"), b), e["number" + c[f].value] = a, a = new CEnlight(c[f].x - 5, c[f].y + 123, s_oSpriteLibrary.getSprite("enlight_lose_bet"), b), e["win_bet" + c[f].value] = a;
        a = new CEnlight(222, 388, s_oSpriteLibrary.getSprite("enlight_big_6"), b);
        e.big_6 = a;
        a = new CEnlight(235, 430, s_oSpriteLibrary.getSprite("enlight_big_8"), b);
        e.big_8 = a;
        a = new CEnlight(279,
            391, s_oSpriteLibrary.getSprite("enlight_field"), b);
        e.field = a;
        for (var c = 401, d = 409, f = 0; 7 > f; f++) a = new CEnlight(800, c, s_oSpriteLibrary.getSprite("enlight_circle"), b), e["any11_" + f] = a, a = new CEnlight(836, d, s_oSpriteLibrary.getSprite("enlight_circle"), b), e["any_craps_" + f] = a, c += 37, d += 34;
        a = new CEnlight(873, 551, s_oSpriteLibrary.getSprite("enlight_any11"), b);
        e["any11_" + f] = a;
        a = new CEnlight(873, 612, s_oSpriteLibrary.getSprite("enlight_any_craps"), b);
        e["any_craps_" + f] = a;
        a = new CEnlight(873, 371, s_oSpriteLibrary.getSprite("enlight_proposition1"),
            b);
        e.hardway6 = a;
        a = new CEnlight(1030, 371, s_oSpriteLibrary.getSprite("enlight_proposition1"), b);
        e.hardway10 = a;
        a = new CEnlight(873, 431, s_oSpriteLibrary.getSprite("enlight_proposition1"), b);
        e.hardway8 = a;
        a = new CEnlight(1030, 431, s_oSpriteLibrary.getSprite("enlight_proposition1"), b);
        e.hardway4 = a;
        a = new CEnlight(873, 491, s_oSpriteLibrary.getSprite("enlight_proposition2"), b);
        e.horn3 = a;
        a = new CEnlight(980, 491, s_oSpriteLibrary.getSprite("enlight_proposition2"), b);
        e.horn2 = a;
        a = new CEnlight(1081, 491, s_oSpriteLibrary.getSprite("enlight_proposition2"),
            b);
        e.horn12 = a;
        a = new CEnlight(873, 338, s_oSpriteLibrary.getSprite("enlight_seven"), b);
        e.seven_bet = a
    };
    this._initButtonBets = function() {
        c = [];
        var a = new CBetTableButton(485, 371, s_oSpriteLibrary.getSprite("hit_area_pass_line"), "pass_line", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.pass_line = a;
        a = new CBetTableButton(580, 501, s_oSpriteLibrary.getSprite("hit_area_dont_pass1"),
            "dont_pass1", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.dont_pass1 = a;
        a = new CBetTableButton(252, 259, s_oSpriteLibrary.getSprite("hit_area_dont_pass2"), "dont_pass2", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut,
            this));
        c.dont_pass2 = a;
        a = new CBetTableButton(321, 195, s_oSpriteLibrary.getSprite("hit_area_dont_come"), "dont_come", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.dont_come = a;
        a = new CBetTableButton(536, 327, s_oSpriteLibrary.getSprite("hit_area_come"), "come", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
            this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.come = a;
        a = new CBetTableButton(536, 433, s_oSpriteLibrary.getSprite("hit_area_field"), "field", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.field = a;
        a = new CBetTableButton(304, 480, s_oSpriteLibrary.getSprite("hit_area_big_8"), "big_8", b);
        a.addEventListener(ON_MOUSE_DOWN,
            this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.big_8 = a;
        a = new CBetTableButton(274, 455, s_oSpriteLibrary.getSprite("hit_area_big_6"), "big_6", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.big_6 = a;
        for (var e = [{
                value: 4,
                x: 408,
                y: 142
            }, {
                value: 5,
                x: 494,
                y: 142
            }, {
                value: 6,
                x: 580,
                y: 142
            }, {
                value: 8,
                x: 666,
                y: 142
            }, {
                value: 9,
                x: 752,
                y: 142
            }, {
                value: 10,
                x: 838,
                y: 142
            }], f = 0; 6 > f; f++) a = new CBetTableButton(e[f].x, e[f].y, s_oSpriteLibrary.getSprite("hit_area_lay_bet"), "lay_bet" + e[f].value, b), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), c["lay_bet" + e[f].value] = a, a = new CBetTableButton(e[f].x, e[f].y + 20, s_oSpriteLibrary.getSprite("hit_area_lose_bet"),
            "lose_bet" + e[f].value, b), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), c["lose_bet" + e[f].value] = a, a = new CBetTableButton(e[f].x, e[f].y + 69, s_oSpriteLibrary.getSprite("hit_area_number"), "number" + e[f].value, b), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT,
            this._onBetNumberOut, this)), c["number" + e[f].value] = a, a = new CBetTableButton(e[f].x, e[f].y + 116, s_oSpriteLibrary.getSprite("hit_area_lose_bet"), "win_bet" + e[f].value, b), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), c["win_bet" + e[f].value] = a;
        for (var e = [{
                x: 820,
                y: 299
            }, {
                x: 820,
                y: 337
            }, {
                x: 820,
                y: 374
            }, {
                x: 820,
                y: 410
            }, {
                x: 820,
                y: 447
            }, {
                x: 820,
                y: 484
            }, {
                x: 820,
                y: 521
            }], f = [{
                x: 855,
                y: 308
            }, {
                x: 855,
                y: 342
            }, {
                x: 855,
                y: 376
            }, {
                x: 855,
                y: 410
            }, {
                x: 855,
                y: 445
            }, {
                x: 855,
                y: 479
            }, {
                x: 855,
                y: 514
            }], d = 0; 7 > d; d++) a = new CBetTableButton(e[d].x, e[d].y + 116, s_oSpriteLibrary.getSprite("hit_area_circle"), "any11_7", b), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), c["any11_" + d] = a, a = new CBetTableButton(f[d].x, f[d].y + 116, s_oSpriteLibrary.getSprite("hit_area_circle"), "any_craps_7",
            b), a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this), false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this)), c["any_craps_" + d] = a;
        a = new CBetTableButton(1031, 355, s_oSpriteLibrary.getSprite("hit_area_seven"), "seven_bet", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.seven_bet = a;
        a = new CBetTableButton(954, 401, s_oSpriteLibrary.getSprite("hit_area_proposition1"), "hardway6", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.hardway6 = a;
        a = new CBetTableButton(1109, 401, s_oSpriteLibrary.getSprite("hit_area_proposition1"), "hardway10", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
            this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.hardway10 = a;
        a = new CBetTableButton(954, 460, s_oSpriteLibrary.getSprite("hit_area_proposition1"), "hardway8", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.hardway8 = a;
        a = new CBetTableButton(1109, 460, s_oSpriteLibrary.getSprite("hit_area_proposition1"), "hardway4", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.hardway4 = a;
        a = new CBetTableButton(928, 521, s_oSpriteLibrary.getSprite("hit_area_proposition2"), "horn3", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.horn3 =
            a;
        a = new CBetTableButton(1032, 521, s_oSpriteLibrary.getSprite("hit_area_proposition2"), "horn2", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.horn2 = a;
        a = new CBetTableButton(1136, 521, s_oSpriteLibrary.getSprite("hit_area_proposition2"), "horn12", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER,
            this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.horn12 = a;
        a = new CBetTableButton(1032, 581, s_oSpriteLibrary.getSprite("hit_area_any11"), "any11_7", b);
        a.addEventListener(ON_MOUSE_DOWN, this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.any11_7 = a;
        a = new CBetTableButton(1032, 628, s_oSpriteLibrary.getSprite("hit_area_any_craps"), "any_craps_7", b);
        a.addEventListener(ON_MOUSE_DOWN,
            this._onBetPress, this);
        false === s_bMobile && (a.addEventListener(ON_MOUSE_OVER, this._onBetNumberOver, this), a.addEventListener(ON_MOUSE_OUT, this._onBetNumberOut, this));
        c.any_craps_7 = a
    };
    this.setState = function(a) {
        switch (a) {
            case STATE_GAME_WAITING_FOR_BET:
                for (var b in c) "come" === b || "dont_come" === b ? c[b].setVisible(false) : c[b].setVisible(true);
                break;
            case STATE_GAME_COME_POINT:
                for (b in c) "pass_line" === b || "dont_pass1" === b || "dont_pass2" === b ? c[b].setVisible(false) : c[b].setVisible(true)
        }
    };
    this.unload = function() {
        for (var a = 0; a <
            b.getNumChildren(); a++) {
            var c = b.getChildAt(a);
            c instanceof CBetTableButton && c.unload()
        }
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        h[a] = c
    };
    this._onBetPress = function(a) {
        null !== a.numbers && f[ON_SHOW_BET_ON_TABLE] && f[ON_SHOW_BET_ON_TABLE].call(h[ON_SHOW_BET_ON_TABLE], a, false)
    };
    this._onBetNumberOver = function(a) {
        null !== a.numbers && f[ON_SHOW_ENLIGHT] && f[ON_SHOW_ENLIGHT].call(h[ON_SHOW_ENLIGHT], a)
    };
    this._onBetNumberOut = function(a) {
        null !== a.numbers && f[ON_HIDE_ENLIGHT] && f[ON_HIDE_ENLIGHT].call(h[ON_HIDE_ENLIGHT],
            a)
    };
    this.enlight = function(a) {
        if (-1 !== a.indexOf("any11_"))
            for (a = 0; 8 > a; a++) e["any11_" + a].show();
        else if (-1 !== a.indexOf("any_craps_"))
            for (a = 0; 8 > a; a++) e["any_craps_" + a].show();
        else e[a].show()
    };
    this.enlightOff = function(a) {
        if (-1 !== a.indexOf("any11_"))
            for (a = 0; 8 > a; a++) e["any11_" + a].hide();
        else if (-1 !== a.indexOf("any_craps_"))
            for (a = 0; 8 > a; a++) e["any_craps_" + a].hide();
        else e[a].hide()
    };
    this.getEnlightX = function(a) {
        return e["oEnlight_" + a].getX()
    };
    this.getEnlightY = function(a) {
        return e["oEnlight_" + a].getY()
    };
    this.getContainer = function() {
        return b
    };
    this.getX = function() {
        return b.x
    };
    this.getY = function() {
        return b.x
    };
    this._init()
}

function CEnlight(c, e, b, f) {
    var h;
    this._init = function(a, b, c, d) {
        h = createBitmap(c);
        h.x = a;
        h.y = b;
        h.visible = false;
        d.addChild(h)
    };
    this.show = function() {
        h.visible = true
    };
    this.hide = function() {
        h.visible = false
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(c, e, b, f)
}

function CFiche(c, e, b, f, h) {
    var a, g, k, d, r;
    this._init = function(b, c, e, f, g) {
        r = f;
        f = s_oSpriteLibrary.getSprite("fiche_" + e);
        d = createBitmap(f);
        d.x = b;
        d.y = c;
        d.regX = f.width / 2;
        d.regY = f.height / 2;
        g ? (d.scaleX = g, d.scaleY = g) : (d.scaleX = .6, d.scaleY = .6);
        a = e;
        r.addChild(d)
    };
    this.setEndPoint = function(a, b) {
        g = new createjs.Point(d.x, d.y);
        k = new createjs.Point(a, b)
    };
    this.updatePos = function(a) {
        var b = new createjs.Point,
            b = s_oTweenController.tweenVectors(g, k, a, b);
        d.x = b.x;
        d.y = b.y
    };
    this.getSprite = function() {
        return d
    };
    this.getValue =
        function() {
            return a
        };
    this.getStartingPos = function() {
        return g
    };
    this._init(c, e, b, f, h)
}

function CDicesAnim(c, e) {
    var b, f, h, a, g, k, d, r, l, t, n, w, m;
    this._init = function(a, b) {
        h = f = 0;
        n = new createjs.Container;
        n.visible = false;
        n.x = a;
        n.y = b;
        s_oStage.addChild(n);
        var c = (new createjs.Graphics).beginFill("rgba(0,0,0,0.6)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m = new createjs.Shape(c);
        m.x = -a;
        m.y = -b;
        n.addChild(m);
        k = m.on("click", function() {});
        w = createBitmap(s_oSpriteLibrary.getSprite("dices_screen_bg"));
        n.addChild(w);
        g = [];
        for (c = 0; c < NUM_DICE_ROLLING_FRAMES; c++) {
            var e = createBitmap(s_oSpriteLibrary.getSprite("launch_dices_" +
                c));
            e.x = 162;
            e.y = 150;
            e.visible = false;
            n.addChild(e);
            g.push(e)
        }
        l = g[0];
        l.visible = true;
        c = {
            images: [s_oSpriteLibrary.getSprite("dice_a")],
            frames: {
                width: 80,
                height: 34
            },
            animations: {
                anim_1: [0, 9, "stop_anim_1"],
                anim_2: [10, 19, "stop_anim_2"],
                anim_3: [20, 29, "stop_anim_3"],
                anim_4: [30, 39, "stop_anim_4"],
                anim_5: [40, 49, "stop_anim_5"],
                anim_6: [50, 59, "stop_anim_6"],
                stop_anim_1: 9,
                stop_anim_2: 19,
                stop_anim_3: 29,
                stop_anim_4: 39,
                stop_anim_5: 49,
                stop_anim_6: 59
            }
        };
        c = new createjs.SpriteSheet(c);
        d = createSprite(c, "anim_1", 80, 34);
        d.stop();
        d.visible = false;
        d.x = 332;
        d.y = 206;
        n.addChild(d);
        c = {
            images: [s_oSpriteLibrary.getSprite("dice_b")],
            frames: {
                width: 102,
                height: 65
            },
            animations: {
                anim_1: [0, 14, "stop_anim_1"],
                anim_2: [15, 29, "stop_anim_2"],
                anim_3: [30, 44, "stop_anim_3"],
                anim_4: [45, 59, "stop_anim_4"],
                anim_5: [60, 74, "stop_anim_5"],
                anim_6: [75, 89, "stop_anim_6"],
                stop_anim_1: 14,
                stop_anim_2: 29,
                stop_anim_3: 44,
                stop_anim_4: 59,
                stop_anim_5: 74,
                stop_anim_6: 89
            }
        };
        c = new createjs.SpriteSheet(c);
        r = createSprite(c, "anim_1", 102, 65);
        r.stop();
        r.visible = false;
        r.x = 239;
        r.y = 240;
        n.addChild(r);
        r.addEventListener("animationend", v._onDiceBAnimEnded);
        t = new CDicesTopDownView(584, 20, n)
    };
    this.unload = function() {
        m.off("click", k)
    };
    this.hide = function() {
        t.hide();
        n.visible = false;
        d.visible = false;
        r.visible = false;
        for (var a = 0; a < g.length; a++) g[a].visible = false;
        s_oGame.dicesAnimEnded()
    };
    this.startRolling = function(c) {
        a = c;
        this.playToFrame(0);
        b = n.visible = true;
        n.visible = true;
        playSound("dice_rolling", 1, false)
    };
    this.setShowNumberInfo = function() {
        t.setDiceResult(a[0], a[1])
    };
    this.playToFrame = function(a) {
        l.visible = false;
        f = a;
        g[f].visible = true;
        l = g[f]
    };
    this.nextFrame = function() {
        l.visible = false;
        f++;
        g[f].visible = true;
        l = g[f]
    };
    this._setAnimForDiceResult = function() {
        g[f].visible = false;
        d.visible = true;
        r.visible = true;
        d.gotoAndPlay("anim_" + a[0]);
        r.gotoAndPlay("anim_" + a[1])
    };
    this._onDiceBAnimEnded = function(a) {
        -1 !== a.currentTarget.currentAnimation.indexOf("stop_anim") && (v.setShowNumberInfo(), setTimeout(function() {
            v.hide()
        }, TIME_SHOW_DICES_RESULT))
    };
    this.isVisible = function() {
        return n.visible
    };
    this.update = function() {
        false !== b && (h++, 1 === h && (h = 0, f === NUM_DICE_ROLLING_FRAMES -
            1 ? (b = false, this._setAnimForDiceResult()) : this.nextFrame()))
    };
    var v = this;
    this._init(c, e)
}

function CGameOver() {
    var c, e, b, f, h;
    this._init = function() {
        h = new createjs.Container;
        s_oStage.addChild(h);
        var a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        h.addChild(a);
        c = new createjs.Text(TEXT_NO_MONEY, "36px " + FONT1, "#fff");
        c.textAlign = "center";
        c.lineWidth = 500;
        c.x = CANVAS_WIDTH / 2;
        c.y = 240;
        h.addChild(c);
        e = new createjs.Text(TEXT_RECHARGE_MSG, "20px " + FONT1, "#fff");
        e.textAlign = "center";
        e.lineWidth = 500;
        e.x = CANVAS_WIDTH / 2;
        e.y = 400;
        h.addChild(e);
        b = new CTextButton(CANVAS_WIDTH / 2 + 170, 510, s_oSpriteLibrary.getSprite("but_bg"),
            TEXT_RECHARGE, FONT1, "#fff", 18, false);
        b.addEventListener(ON_MOUSE_UP, this._onRecharge, this);
        h.addChild(b.getSprite());
        f = new CTextButton(CANVAS_WIDTH / 2 - 170, 510, s_oSpriteLibrary.getSprite("but_bg"), TEXT_EXIT, FONT1, "#fff", 18, false);
        f.addEventListener(ON_MOUSE_UP, this._onExit, this);
        h.addChild(f.getSprite());
        this.hide()
    };
    this.unload = function() {
        b.unload();
        f.unload()
    };
    this.show = function() {
        h.visible = true
    };
    this.hide = function() {
        h.visible = false
    };
    this._onRecharge = function() {
        s_oGame.onRecharge()
    };
    this._onExit = function() {
        s_oGame.onExit(true)
    };
    this._init()
}

function CCreditsPanel() {
    var c, e, b, f, h, a, g;
    this._init = function() {
        g = new createjs.Container;
        s_oStage.addChild(g);
        var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        g.addChild(k);
        k = s_oSpriteLibrary.getSprite("msg_box");
        e = createBitmap(k);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        e.regX = k.width / 2;
        e.regY = k.height / 2;
        g.addChild(e);
        h = new createjs.Shape;
        h.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .01;
        h.on("click", this._onLogoButRelease);
        g.addChild(h);
        k = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH / 2 + 234;
        b = new CGfxButton(c, 254, k, g);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        f = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px Arial", "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = 300;
        f.textAlign = "center";
        g.addChild(f);
        var k = s_oSpriteLibrary.getSprite("logo_credits"),
            d = createBitmap(k);
        d.regX = k.width / 2;
        d.regY = k.height / 2;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        g.addChild(d);
        a = new createjs.Text(TEXT_LINK, "30px Arial", "#ffffff");
        a.x = CANVAS_WIDTH / 2;
        a.y = 444;
        a.textAlign = "center";
        g.addChild(a)
    };
    this.unload =
        function() {
            h.off("click", this._onLogoButRelease);
            b.unload();
            b = null;
            s_oStage.removeChild(g)
        };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._init()
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

function CRollingTextController(c, e, b, f, h, a, g) {
    var k, d, r, l, t, n, w, m, v, q, p, x = [],
        y, z;
    this._init = function(a, b, c, d, e, f, g) {
        q = [];
        p = [];
        t = e;
        this.setUpdateInfo(c, d);
        m = f;
        v = g;
        y = a;
        z = b
    };
    this.unload = function() {
        clearInterval(w)
    };
    this.setUpdateInfo = function(a, b) {
        r = parseFloat(a);
        l = r + b;
        k = 0;
        d = Math.round(t / FPS);
        n = 0;
        var c = this;
        w = setInterval(function() {
            c.update()
        }, FPS_TIME)
    };
    this.addEventListener = function(a, b, c) {
        q[a] = b;
        p[a] = c
    };
    this.addRollingListener = function(a, b, c) {
        q[ON_CONTROLLER_ROLL] = a;
        p[ON_CONTROLLER_ROLL] = b;
        x = [];
        for (a = 0; a < c.length; a++) x[a] = {
            step: c[a],
            flag: false
        }
    };
    this.increaseValue = function(a) {
        n = a
    };
    this.getTarget = function() {
        return y
    };
    this.update = function() {
        k++;
        if (k > d) k = 0, y.text = l + v, null !== z && (z.text = l + v), clearInterval(w), null !== q[ON_CONTROLLER_END] && void 0 !== q[ON_CONTROLLER_END] && q[ON_CONTROLLER_END].call(p[ON_CONTROLLER_END], this), 0 < n ? this.setUpdateInfo(n) : null !== q[ON_CONTROLLER_REMOVE] && void 0 !== q[ON_CONTROLLER_REMOVE] && q[ON_CONTROLLER_REMOVE].call(p[ON_CONTROLLER_REMOVE], this);
        else {
            switch (m) {
                case EASE_BACKIN:
                    var a =
                        s_oTweenController.easeInBack(k, 0, 1, d);
                    break;
                case EASE_BACKOUT:
                    a = s_oTweenController.easeOutBack(k, 0, 1, d);
                    break;
                case EASE_CUBIC_IN:
                    a = s_oTweenController.easeInCubic(k, 0, 1, d);
                    break;
                case EASE_CUBIC_OUT:
                    a = s_oTweenController.easeOutCubic(k, 0, 1, d);
                    break;
                case EASE_ELASTIC_OUT:
                    a = s_oTweenController.easeOutElastic(k, 0, 1, d);
                    break;
                case EASE_LINEAR:
                    a = s_oTweenController.easeLinear(k, 0, 1, d);
                    break;
                case EASE_QUART_BACKIN:
                    a = s_oTweenController.easeBackInQuart(k, 0, 1, d);
                    break;
                default:
                    a = s_oTweenController.easeLinear(k,
                        0, 1, d)
            }
            a = s_oTweenController.tweenValue(r, l, a);
            for (var b = 0; b < x.length; b++) a > x[b].step && !x[b].flag && (x[b].flag = true, null !== q[ON_CONTROLLER_ROLL] && q[ON_CONTROLLER_ROLL].call(p[ON_CONTROLLER_ROLL], b));
            y.text = a + v;
            null !== z && (z.text = a + v)
        }
    };
    this._init(c, e, b, f, h, a, g)
}

function CPuck(c, e, b) {
    var f, h;
    this._init = function() {
        f = c;
        var b = s_oSpriteLibrary.getSprite("puck"),
            k = new createjs.SpriteSheet({
                images: [b],
                frames: {
                    width: b.width / 2,
                    height: b.height,
                    regX: b.width / 2 / 2,
                    regY: b.height / 2
                },
                animations: {
                    on: [0],
                    off: [1]
                }
            });
        h = createSprite(k, "off", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        h.x = c;
        h.y = e;
        a.addChild(h)
    };
    this.switchOn = function(a) {
        createjs.Tween.get(h).to({
            x: a
        }, 1E3, createjs.Ease.cubicOut).call(function() {
            h.gotoAndStop("on")
        })
    };
    this.switchOff = function() {
        createjs.Tween.get(h).to({
                x: f
            },
            1E3, createjs.Ease.cubicOut).call(function() {
            h.gotoAndStop("off")
        })
    };
    var a = b;
    this._init(c, e)
}

function CDicesTopDownView(c, e, b) {
    var f, h, a, g;
    this._init = function(b, c) {
        g = new createjs.Container;
        g.x = b;
        g.y = c;
        g.visible = false;
        k.addChild(g);
        var d = createBitmap(s_oSpriteLibrary.getSprite("dices_box"));
        g.addChild(d);
        var d = s_oSpriteLibrary.getSprite("dice_topdown1"),
            e = {
                images: [d],
                frames: {
                    width: d.width / 6,
                    height: d.height,
                    regX: d.width / 6 / 2,
                    regY: d.height / 2
                },
                animations: {
                    dice_1: [0],
                    dice_2: [1],
                    dice_3: [2],
                    dice_4: [3],
                    dice_5: [4],
                    dice_6: [5]
                }
            },
            e = new createjs.SpriteSheet(e);
        h = createSprite(e, "dice_1", d.width / 6 / 2, d.height /
            2, d.width / 6, d.height);
        h.x = d.width / 6 / 2 + 10;
        h.y = d.height / 2;
        g.addChild(h);
        d = s_oSpriteLibrary.getSprite("dice_topdown2");
        e = {
            images: [d],
            frames: {
                width: d.width / 6,
                height: d.height,
                regX: d.width / 6 / 2,
                regY: d.height / 2
            },
            animations: {
                dice_1: [0],
                dice_2: [1],
                dice_3: [2],
                dice_4: [3],
                dice_5: [4],
                dice_6: [5]
            }
        };
        e = new createjs.SpriteSheet(e);
        a = createSprite(e, "dice_1", d.width / 6 / 2, d.height / 2, d.width / 6, d.height);
        a.x = d.width / 6 / 2 + d.width / 6 + 20;
        a.y = d.height / 2;
        g.addChild(a);
        f = new createjs.Text(TEXT_COME_OUT + " ", "20px " + FONT1, "#fff");
        f.textAlign = "center";
        f.x = d.width / 6 + 15;
        f.y = d.height + 8;
        g.addChild(f)
    };
    this.setDiceResult = function(b, c) {
        h.gotoAndStop("dice_" + b);
        a.gotoAndStop("dice_" + c);
        f.text = TEXT_COME_OUT + " " + (b + c);
        g.alpha = 0;
        g.visible = true;
        createjs.Tween.get(g).to({
            alpha: 1
        }, 400)
    };
    this.hide = function() {
        g.visible = false
    };
    var k = b;
    this._init(c, e)
}

function CAreYouSurePanel(c) {
    var e, b, f, h, a, g;
    this._init = function() {
        g = new createjs.Container;
        g.visible = false;
        k.addChild(g);
        var c = s_oSpriteLibrary.getSprite("msg_box");
        a = createBitmap(c);
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        a.regX = .5 * c.width;
        a.regY = .5 * c.height;
        g.addChild(a);
        e = a.on("click", function() {});
        b = new createjs.Text(TEXT_ARE_SURE, "60px " + FONT1, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = .5 * CANVAS_HEIGHT - 40;
        b.textAlign = "center";
        b.textBaseline = "middle";
        g.addChild(b);
        f = new CGfxButton(CANVAS_WIDTH / 2 + 186, b.y + 140,
            s_oSpriteLibrary.getSprite("but_yes"), g);
        f.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        h = new CGfxButton(CANVAS_WIDTH / 2 - 186, b.y + 140, s_oSpriteLibrary.getSprite("but_not"), g);
        h.addEventListener(ON_MOUSE_UP, this._onButNo, this)
    };
    this.show = function() {
        g.visible = true
    };
    this.unload = function() {
        h.unload();
        f.unload();
        a.off("click", e)
    };
    this._onButYes = function() {
        this.unload();
        playSound("click", 1, false);
        s_oGame.onConfirmExit()
    };
    this._onButNo = function() {
        playSound("click", 1, false);
        g.visible = false
    };
    var k = c;
    this._init()
}

function CScoreText(c, e, b) {
    var f;
    this._init = function(b, a, c) {
        f = new createjs.Text("+" + b, " 30px " + FONT1, "#ffffff");
        f.textAlign = "center";
        f.x = a;
        f.y = c - 10;
        f.alpha = 0;
        f.shadow = new createjs.Shadow("#000000", 2, 2, 2);
        s_oStage.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 1
        }, 500, createjs.Ease.quadIn).call(function() {
            createjs.Tween.get(f).wait(1E3).to({
                alpha: 0
            }, 500)
        });
        this.moveUp()
    };
    this.moveUp = function() {
        var b = f.y - 40,
            a = this;
        createjs.Tween.get(f).to({
            y: b
        }, 2E3, createjs.Ease.sineIn).call(function() {
            a.unload()
        })
    };
    this.unload =
        function() {
            s_oStage.removeChild(f)
        };
    this._init(c, e, b)
};