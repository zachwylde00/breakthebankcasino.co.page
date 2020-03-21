var s_iScaleFactor = 1,
    s_bIsIphone = false,
    s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
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
        var c = b.createElement("body");
        c.id = "vpw-test-b";
        c.style.cssText = "overflow:scroll";
        var f = b.createElement("div");
        f.id = "vpw-test-d";
        f.style.cssText = "position:absolute;top:-1000px";
        f.innerHTML = "<style>@media(" + e + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
        c.appendChild(f);
        d.insertBefore(c, b.head);
        a = 7 == f["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(c)
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
            d = CANVAS_WIDTH * b,
            b = CANVAS_HEIGHT * b;
        if (b < a) {
            var c = a - b;
            b += c;
            d += CANVAS_WIDTH / CANVAS_HEIGHT * c
        } else d < e && (c = e - d, d += c, b += CANVAS_HEIGHT / CANVAS_WIDTH * c);
        c = a / 2 - b / 2;
        var f = e / 2 - d / 2,
            g = CANVAS_WIDTH / d;
        if (f * g < -EDGEBOARD_X || c * g < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, c = (a - b) / 2, f = (e - d) / 2, g = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * f * g;
        s_iOffsetY = -1 * c * g;
        0 <= c && (s_iOffsetY = 0);
        0 <= f && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", s_oStage.scaleX =
            s_oStage.scaleY = 2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > c ? $("#canvas").css("top", c + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", f + "px");
        d = CANVAS_WIDTH;
        b = CANVAS_HEIGHT;
        e = window.innerWidth;
        a = window.innerHeight;
        s_iScaleFactor = Math.min(a / b,
            e / d);
        s_oCanvasLeft = $("#canvas").offset().left;
        s_oCanvasTop = $("#canvas").offset().top
    }
}

function _checkOrientation(a, e) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return true
    }
}

function createBitmap(a, e, b) {
    var d = new createjs.Bitmap(a),
        c = new createjs.Shape;
    e && b ? c.graphics.beginFill("#fff").drawRect(0, 0, e, b) : c.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = c;
    return d
}

function createSprite(a, e, b, d, c, f) {
    a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
    e = new createjs.Shape;
    e.graphics.beginFill("#000000").drawRect(-b, -d, c, f);
    a.hitArea = e;
    return a
}

function randomFloatBetween(a, e, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(b))
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
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length) return a.sort();
    var e = Array.prototype.slice.call(arguments);
    return a.sort(function(a, d) {
        for (var b = e.slice(), f = b.shift(); a[f] == d[f] && b.length;) f = b.shift();
        return a[f] == d[f] ? 0 : a[f] > d[f] ? 1 : -1
    })
};

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
        c = a * a;
    b.x = d * e.start.x + 2 * (1 - a) * a * e.traj.x + c * e.end.x;
    b.y = d * e.start.y + 2 * (1 - a) * a * e.traj.y + c * e.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var e = Math.floor(a / 60);
    a = parseFloat(a - 60 * e).toFixed(1);
    var b = "",
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
    var b, d, c, f;
    var g = a.x + (b = a.width / 2);
    var h = a.y + (d = a.height / 2);
    var k = e.x + (c = e.width / 2);
    var m = e.y + (f = e.height / 2);
    g = Math.abs(g - k) - (b + c);
    h = Math.abs(h - m) - (d + f);
    return 0 > g && 0 > h ? (g = Math.min(Math.min(a.width, e.width), -g), h = Math.min(Math.min(a.height, e.height), -h), {
        x: Math.max(a.x, e.x),
        y: Math.max(a.y, e.y),
        width: g,
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
            c = d.length,
            f;
        for (f = 0; f < c; f++) {
            var g = getBounds(d[f], 1);
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
        if (a instanceof createjs.Bitmap) {
            c =
                a.sourceRect || a.image;
            f = c.width * e;
            var h = c.height * e
        } else if (a instanceof createjs.Sprite)
            if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
                c = a.spriteSheet.getFrame(a.currentFrame);
                f = c.rect.width;
                h = c.rect.height;
                d = c.regX;
                var k = c.regY
            } else b.x = a.x || 0, b.y = a.y || 0;
        else b.x = a.x || 0, b.y = a.y || 0;
        d = d || 0;
        f = f || 0;
        k = k || 0;
        h = h || 0;
        b.regX = d;
        b.regY = k;
        c = a.localToGlobal(0 - d, 0 - k);
        g = a.localToGlobal(f - d, h - k);
        f = a.localToGlobal(f - d, 0 - k);
        d = a.localToGlobal(0 - d, h - k);
        b.x =
            Math.min(Math.min(Math.min(c.x, g.x), f.x), d.x);
        b.y = Math.min(Math.min(Math.min(c.y, g.y), f.y), d.y);
        b.width = Math.max(Math.max(Math.max(c.x, g.x), f.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(c.y, g.y), f.y), d.y) - b.y
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
document.addEventListener && (document.addEventListener("webkitfullscreenchange", fullscreenHandler, false), document.addEventListener("mozfullscreenchange", fullscreenHandler, false), document.addEventListener("fullscreenchange", fullscreenHandler, false), document.addEventListener("MSFullscreenChange", fullscreenHandler, false));

function fullscreenHandler() {
    if (document.webkitIsFullScreen || document.mozFullScreen || null !== document.msFullscreenElement) s_bFullscreen = !s_bFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut()
}

function CSpriteLibrary() {
    var a, e, b, d, c, f;
    this.init = function(g, h, k) {
        b = e = 0;
        d = g;
        c = h;
        f = k;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        }, e++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        c.call(f)
    };
    this._onSpriteLoaded = function() {
        d.call(f);
        ++b == e && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return e
    }
}
var CANVAS_WIDTH = 1600,
    CANVAS_HEIGHT = 768,
    EDGEBOARD_X = 240,
    EDGEBOARD_Y = 0,
    FPS_TIME = 1E3 / 24,
    DISABLE_SOUND_MOBILE = false,
    PRIMARY_FONT = "MainFont",
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
    FICHE_WIDTH = 40,
    FICHE_VALUE = [],
    WIN_OCCURRENCE, TURN_CARD_SPEED, CARD_WIDTH = 122,
    CARD_HEIGHT = 190,
    SHOWTEXT_SPEED, START_MONEY, GAME_CASH, AD_SHOW_COUNTER, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_GAMEOVER = "موجودی حساب شما برای ادامه بازی کافی نمی باشد";
TEXT_ALLIN = "همه موجودی";
TEXT_CLEARBET = "پاک کردن";
TEXT_MAKE = "میزان شرط بندی را مشخص کنید";
TEXT_CURRENCY = "T";
TEXT_TURN = "دست ";
TEXT_HIGHS = "بیشتر ها: ";
TEXT_LOWS = "کمتر ها: ";
TEXT_GUESS = "کل پیش بینی ها: ";
TEXT_BEST = "بهترین برد: ";
TEXT_LOSE = "شما باختید";
var TEXT_CREDITS_DEVELOPED = "";

function CPreloader() {
    var a, e, b, d, c, f, g;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", self.images_location + "progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        g = new createjs.Container;
        s_oStage.addChild(g)
    };
    this.unload = function() {
        g.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(f).to({
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
        g.addChild(h);
        h = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(h);
        d.x = CANVAS_WIDTH / 2 - h.width / 2;
        d.y = CANVAS_HEIGHT - 170;
        g.addChild(d);
        a = h.width;
        e = h.height;
        c = new createjs.Shape;
        c.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, 1, e);
        g.addChild(c);
        d.mask =
            c;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 125;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        g.addChild(b);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        g.addChild(f)
    };
    this.refreshLoader = function(f) {
        b.text = f + "%";
        c.graphics.clear();
        f = Math.floor(f * a / 100);
        c.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, f, e)
    };
    this._init()
}

function CMain(a) {
    var e, b = 0,
        d = 0,
        c = STATE_LOADING,
        f, g;
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
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = true);
        s_oSpriteLibrary = new CSpriteLibrary;
        f = new CPreloader
    };
    this.preloaderReady = function() {
        this._loadImages();
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || this._initSounds();
        e = true
    };
    this.soundLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / d * 100));
        b === d && this._onRemovePreloader()
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
            filename: "click",
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
            filename: "snap",
            loop: false,
            volume: 1,
            ingamename: "snap"
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
            filename: "win",
            loop: false,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: self.sounds_location,
            filename: "soundtrack",
            loop: true,
            volume: 1,
            ingamename: "soundtrack"
        });
        d += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename +
                ".ogg"
            ],
            autoplay: false,
            preload: true,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", self.images_location + "but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", self.images_location + "bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("money_panel", self.images_location + "money_panel.png");
        s_oSpriteLibrary.addSprite("but_bet", self.images_location + "but_bet.png");
        s_oSpriteLibrary.addSprite("panel_high_sx", self.images_location + "panel_high_sx.png");
        s_oSpriteLibrary.addSprite("arrow_high", self.images_location + "arrow_high.png");
        s_oSpriteLibrary.addSprite("arrow_low",
            self.images_location + "arrow_low.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_credits", self.images_location + "but_credits.png");
        s_oSpriteLibrary.addSprite("card_spritesheet", self.images_location + "card_spritesheet.png");
        for (var a, b = 0; 7 > b; b++) a = b, s_oSpriteLibrary.addSprite("fiche_" + a, self.images_location + "fiche_" + a + ".png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded =
        function() {
            b++;
            f.refreshLoader(Math.floor(b / d * 100));
            b === d && this._onRemovePreloader()
        };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this._onRemovePreloader = function() {
        f.unload();
        isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, true));
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        c = STATE_MENU
    };
    this.gotoGame = function(a) {
        s_bEasyMode = a;
        g = new CGame(h);
        c = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        c = STATE_HELP
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
        (false === DISABLE_SOUND_MOBILE || false === s_bMobile) && s_bAudioActive && Howler.mute(false)
    };
    this._update = function(a) {
        if (false !== e) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps =
                s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            c === STATE_GAME && g.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var h = a;
    SHOW_CREDITS = a.show_credits;
    ENABLE_FULLSCREEN = h.fullscreen;
    ENABLE_CHECK_ORIENTATION = h.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bEasyMode, s_bAudioActive = true,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
    s_oCanvas, s_oGameSettings, s_bFullscreen = false,
    s_aSounds;

function CTextButton(a, e, b, d, c, f, g, h, k) {
    var m, r, t, l, n, p, u;
    this._init = function(a, b, c, d, e, f, g, h, k) {
        m = false;
        r = [];
        t = [];
        u = createBitmap(c);
        var D = Math.ceil(g / 20);
        p = new createjs.Text(d, g + "px " + e, "#000000");
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        var v = p.getBounds();
        p.x = c.width / 2 + D;
        p.y = Math.floor(c.height / 2) + v.height / 3 + D - 7;
        n = new createjs.Text(d, g + "px " + e, f);
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        v = n.getBounds();
        n.x = c.width / 2;
        n.y = Math.floor(c.height / 2) + v.height / 3 - 7;
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        l.regX = c.width / 2;
        l.regY = c.height / 2;
        l.cursor = "pointer";
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
        }), u = createSprite(a, "state_false", c.width / 2 / 2, c.height / 2, c.width / 2, c.height), p.x = 7, p.y = 7, n.x = -7, n.y = 7, l.regX = 0, l.regY = 0);
        l.addChild(u, p, n);
        k.addChild(l);
        this._initListener()
    };
    this.unload = function() {
        l.off("mousedown");
        l.off("pressup");
        k.removeChild(l)
    };
    this.setVisible = function(a) {
        l.visible =
            a
    };
    this._initListener = function() {
        oParent = this;
        l.on("mousedown", this.buttonDown);
        l.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        r[a] = b;
        t[a] = c
    };
    this.buttonRelease = function() {
        m || (l.scaleX = 1, l.scaleY = 1, r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(t[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        m || (l.scaleX = .9, l.scaleY = .9, r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(t[ON_MOUSE_DOWN]))
    };
    this.enable = function() {
        m = false;
        h || u.gotoAndStop("state_true")
    };
    this.disable = function() {
        m = true;
        h || u.gotoAndStop("state_false")
    };
    this.setTextPosition = function(a, b) {
        var c = Math.ceil(g / 20);
        p.x = a + c;
        p.y = b + c;
        n.x = a;
        n.y = b
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
    this._init(a, e, b, d, c, f, g, h, k);
    return this
}

function CToggle(a, e, b, d) {
    var c, f, g, h;
    this._init = function(a, b, d, e) {
        f = [];
        g = [];
        var k = new createjs.SpriteSheet({
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
        c = e;
        h = createSprite(k, "state_" + c, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        h.x = a;
        h.y = b;
        h.stop();
        h.cursor = "pointer";
        s_oStage.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", this.buttonDown);
        h.off("pressup", this.buttonRelease);
        s_oStage.removeChild(h)
    };
    this._initListener = function() {
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        g[a] = c
    };
    this.setActive = function(a) {
        c = a;
        h.gotoAndStop("state_" + c)
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, false);
        c = !c;
        h.gotoAndStop("state_" + c);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(g[ON_MOUSE_UP], c)
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a,
        b) {
        h.x = a;
        h.y = b
    };
    this._init(a, e, b, d)
}

function CGfxButton(a, e, b, d) {
    var c, f, g, h = [],
        k;
    this._init = function(a, b, d, e) {
        c = false;
        f = [];
        g = [];
        e ? (k = createBitmap(d), k.regX = d.width / 2, k.regY = d.height / 2) : (e = new createjs.SpriteSheet({
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
        }), k = createSprite(e, "state_false", d.width / 2 / 2, d.height / 2, d.width / 2, d.height));
        k.x = a;
        k.y = b;
        k.cursor = "pointer";
        s_oStage.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        s_oStage.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this._initListener = function() {
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        g[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        f[a] = b;
        g[a] = c;
        h = d
    };
    this.buttonRelease = function() {
        c || (playSound("click", 1, false), k.scaleX = 1, k.scaleY = 1, f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(g[ON_MOUSE_UP], h))
    };
    this.buttonDown = function() {
        c || (k.scaleX = .9,
            k.scaleY = .9, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN], h))
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
    this.enable = function() {
        c = false;
        d || k.gotoAndStop("state_true")
    };
    this.disable = function() {
        c = true;
        d || k.gotoAndStop("state_false")
    };
    this.getButtonImage = function() {
        return k
    };
    this.getDisable = function() {
        return c
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this._init(a, e, b, d);
    return this
}

function CMenu() {
    var a, e, b, d, c, f, g, h, k, m, r, t, l = null,
        n = null;
    this._init = function() {
        g = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(g);
        var asd = s_oSpriteLibrary.getSprite("bg_back");
        qwe = new CTextButton(CANVAS_WIDTH - asd.width / 4 - 120, asd.height / 2 + 10, asd, ' ', PRIMARY_FONT, "#ffffff", 40, true, s_oStage);
        qwe.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        var p = s_oSpriteLibrary.getSprite("but_play");
        h = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 130, p, true);
        h.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"), c = CANVAS_WIDTH - p.height / 2 - 10, f = p.height / 2 + 10, m = new CToggle(c, f, p, s_bAudioActive), m.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        SHOW_CREDITS ? (p = s_oSpriteLibrary.getSprite("but_credits"), a = p.width / 2 + 10, e = p.height / 2 + 10, r = new CGfxButton(a, e, p, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onCredits, this), p = s_oSpriteLibrary.getSprite("but_fullscreen"), b = a + p.width / 2 + 10) : (p = s_oSpriteLibrary.getSprite("but_fullscreen"), b = p.width / 4 + 10);
        d = p.height / 2 + 10;
        var u = window.document,
            v = u.documentElement;
        l = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        n = u.exitFullscreen ||
            u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (l = false);
        l && false === inIframe() && (t = new CToggle(b, d, p, s_bFullscreen, true), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(k);
        createjs.Tween.get(k).to({
            alpha: 0
        }, 1E3).call(function() {
            k.visible = false
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(g, h) {
        false !== DISABLE_SOUND_MOBILE &&
            false !== s_bMobile || m.setPosition(c - g, h + f);
        SHOW_CREDITS && r.setPosition(a + g, h + e);
        l && false === inIframe() && t.setPosition(b + g, d + h)
    };
    this.unload = function() {
        h.unload();
        h = null;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) m.unload(), m = null;
        SHOW_CREDITS && (r.unload(), r = null);
        l && false === inIframe() && t.unload();
        s_oStage.removeChild(g);
        s_oMenu = g = null
    };
    this.resetFullscreenBut = function() {
        t.setActive(s_bFullscreen)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease =
        function() {
            this.unload();
            isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, true));
            $(s_oMain).trigger("start_session");
            $(s_oMain).trigger("start_level", 1);
            s_oMain.gotoGame()
        };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? n.call(window.document) : l.call(window.document.documentElement);
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
    var e, b, d, c, f, g, h, k, m, r, t, l, n, p, u, v, x, y, z, C, w, A = null,
        B, E;
    this._init = function() {
        d = false;
        c = START_MONEY;
        m = GAME_CASH;
        g = f = 0;
        h = 1;
        p = n = l = t = r = k = 0;
        u = [];
        v = [];
        x = [];
        y = [];
        s_oGameSettings = new CGameSettings;
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        w = new CInterface;
        E = new createjs.Container;
        s_oStage.addChild(E);
        e = CANVAS_WIDTH / 2;
        b = CANVAS_HEIGHT / 2 - 30;
        this._setCards();
        this._setHideCardOnTable();
        B = new CFichesController(463, 519, E);
        0 >= c ? this.gameOver() : ''
    };
    this._setCards = function() {
        u = [];
        u = s_oGameSettings.getShuffledCardDeck();
        v = [];
        x = [];
        y = [];
        for (var a = 0; a < u.length; a++) {
            var b = s_oGameSettings.getCardValue(u[a]);
            1 < b && 8 > b ? v.push(u[a]) : 7 < b && 14 > b ? x.push(u[a]) : y.push(u[a])
        }
    };
    this.tryShowAd = function() {
        p++;
        p === AD_SHOW_COUNTER && (p = 0, $(s_oMain).trigger("show_interlevel_ad"))
    };
    this.unload = function() {
        w.unload();
        null !== A && A.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.resetBet = function() {
        B.reset();
        c += f;
        f = 0;
        w.refreshMoney(c)
    };
    this.updateCurBet =
        function(a) {
            0 > a && (a = c);
            c -= a;
            f += a;
            0 > c ? (f += c, c = 0, w.disableAllIn(), u = [], u = s_oGameSettings.getShuffledCardDeck()) : 0 === c && w.disableAllIn();
            w.refreshMoney(c);
            B.createFichesPile(f)
        };
    this._setHideCardOnTable = function() {
        C = new CCard(e, b, s_oStage, 0, s_oGameSettings.getCardValue(0))
    };
    this._pickCard = function(a) {
        a = "high" === a ? x.pop() : "low" === a ? v.pop() : y.pop();
        z = new CCard(e, b, s_oStage, a, s_oGameSettings.getCardValue(a))
    };
    this.onPlayerSelection = function(a) {
        C.unload();
        m += f;
        var b = 100 * Math.random();
        $(s_oMain).trigger("bet_placed",
            f);
        m < 2 * f && (b = WIN_OCCURRENCE + 1);
        if (b < WIN_OCCURRENCE) {
            var b = Math.random(),
                c = 4 / (52 - g);
            "high" === a ? (d = true, b < c && 0 !== y.length || 0 === x.length ? this._pickCard("ace") : this._pickCard("high")) : (d = false, b < c && 0 !== y.length || 0 === v.length ? this._pickCard("ace") : this._pickCard("low"))
        } else "high" === a ? (d = true, this._pickCard("low")) : (d = false, this._pickCard("high"));
        z.showCard()
    };
    this.checkWin = function(a) {
        if (!d && 8 > a.getRank()) {
            var b = 2 * f;
            b = new CWinText(b.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + " برنده شدید", e, b);
            b.show();
            k++;
            l++;
            n++;
            playSound("win", .3, false)
        } else d &&
            (8 <= a.getRank() || 1 === a.getRank()) ? (b = 2 * f, b = new CWinText(b.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + " برنده شدید", e, b), b.show(), k++, r++, t++, playSound("win", .3, false)) : (playSound("game_over", .3, false), b = f, b = new CWinText(TEXT_LOSE + " " + b.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ","), e, 0), b.show(), 8 > a.getRank() ? n++ : t++)
    };
    this._calculateStats = function() {
        var a = (k / h * 100).toFixed(2);
        w.refreshGuess(k, a);
        0 !== t && (a = (r / t * 100).toFixed(2), w.refreshHighs(r, t, a));
        0 !== n && (a = (l / n * 100).toFixed(2), w.refreshLows(l, n, a))
    };
    this.refreshGame = function(a) {
        c += a;
        m -= a * 2;
        $(s_oMain).trigger("save_score", [c, "standard"]);
        this._calculateStats();
        w.refreshMoney(c);
        if (0 === c) this.gameOver();
        else {
            f = 0;
            B.reset();
            z.unload();
            g++;
            h++;
            w.refreshTurn(h);
            if (0 === v.length || 0 === x.length) g = 0, this._setCards();
            this._setHideCardOnTable();
            w.initState()
        }
    };
    this.onGiveUp = function() {
        new CGiveupPanel(s_oSpriteLibrary.getSprite("msg_box"), c)
    };
    this.onExit = function() {
        $(s_oMain).trigger("save_score", [c, "standard"]);
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("share_event", [c])
    };
    this._onExitHelp = function() {
        _bStartGame = true
    };
    this.gameOver = function() {
        A = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        A.show()
    };
    this.update = function() {};
    s_oGame = this;
    WIN_OCCURRENCE = a.win_occurrence;
    START_MONEY = a.starting_money;
    GAME_CASH = a.starting_cash;
    FICHES_VALUE = a.fiches_value;
    TURN_CARD_SPEED = a.turn_card_speed;
    SHOWTEXT_SPEED = a.showtext_timespeed;
    AD_SHOW_COUNTER = a.ad_show_counter;
    this._init()
}
var s_oGame;

function CInterface() {
    var a, e, b, d, c, f, g, h, k, m, r, t, l, n, p, u, v, x, y, z, C, w, A, B, E, D = null,
        H = null;
    this._init = function() {
        var q = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - q.height / 2 - 10;
        f = q.height / 2 + 10;
        h = new CGfxButton(c, f, q, true);
        h.addEventListener(ON_MOUSE_UP, this._onExit, this);
        var F = CANVAS_WIDTH - q.width / 2 - 70;
        if (false === DISABLE_SOUND_MOBILE || false === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), b = F - 25, d = q.height / 2 + 10, g = new CToggle(b, d, q, s_bAudioActive), g.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        q = window.document;
        F = q.documentElement;
        D = F.requestFullscreen || F.mozRequestFullScreen || F.webkitRequestFullScreen || F.msRequestFullscreen;
        H = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
        false === ENABLE_FULLSCREEN && (D = false);
        D && false === inIframe() && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), a = q.width / 4 + 10, e = q.height / 2 + 10, E = new CToggle(a, e, q, s_bFullscreen, true), E.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = s_oSpriteLibrary.getSprite("but_bet");
        r = new CTextButton(1237, CANVAS_HEIGHT - 46, q, TEXT_ALLIN, PRIMARY_FONT, "#ffffff", 30, false, s_oStage);
        r.setTextPosition(-3, 0);
        r.addEventListener(ON_MOUSE_UP, this._onButAllinRelease, this);
        r.enable();
        q = s_oSpriteLibrary.getSprite("but_bet");
        k = new CTextButton(295, CANVAS_HEIGHT - 46, q, TEXT_CLEARBET, PRIMARY_FONT, "#ffffff", 30, false, s_oStage);
        k.setTextPosition(-3, 0);
        k.addEventListener(ON_MOUSE_UP, this._onButClearBetRelease, this);
        k.enable();
        q = s_oSpriteLibrary.getSprite("arrow_high");
        u = new CGfxButton(CANVAS_WIDTH / 2 - q.height / 2 - 100, CANVAS_HEIGHT / 2 - q.height / 2 - 5, q, false);
        u.addEventListener(ON_MOUSE_UP, this._onArrowHigh, this);
        q = s_oSpriteLibrary.getSprite("arrow_low");
        v = new CGfxButton(CANVAS_WIDTH / 2 - q.height / 2 + 235, CANVAS_HEIGHT / 2 - q.height / 2 + 85, q, false);
        v.addEventListener(ON_MOUSE_UP, this._onArrowLow, this);
        x = new createjs.Shape;
        x.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0,
            0, 135, 135);
        x.visible = false;
        x.on("mousedown", function() {});
        s_oStage.addChild(x);
        this.enableArrow(false);
        F = [];
        for (var G = 0; 6 > G; G++){
			q = s_oSpriteLibrary.getSprite("fiche_" + G);
			F[G] = new CGfxButton(450 + 50 * G, 630, q, true);
			F[G].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, G);
		}
        y = new createjs.Shape;
        y.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(420, 614, CANVAS_WIDTH, 150);
        y.visible = false;
        y.on("mousedown", function() {});
        s_oStage.addChild(y);
        n = new createjs.Text(TEXT_MAKE, "20px " + PRIMARY_FONT, "#000000");
        n.x = 575;
        n.y = 590;
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.lineWidth = 300;
        s_oStage.addChild(n);
        p = new createjs.Text(TEXT_MAKE, "20px " + PRIMARY_FONT, "#ffffff");
        p.x = 575;
        p.y = 590;
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.lineWidth = 300;
        s_oStage.addChild(p);
        q = s_oSpriteLibrary.getSprite("money_panel");
        q = createBitmap(q);
        q.x = 282;
        q.y = 659;
        s_oStage.addChild(q);
        t = new createjs.Text(START_MONEY.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "25px " + PRIMARY_FONT, "#000000");
        t.x = 585;
        t.y = 688;
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 200;
        s_oStage.addChild(t);
        l = new createjs.Text(START_MONEY.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "25px " + PRIMARY_FONT, "#ffffff");
        l.x = 582;
        l.y = 688;
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.lineWidth = 200;
        s_oStage.addChild(l);
        z = new createjs.Container;
        z.x = 242;
        z.y = 74;
        s_oStage.addChild(z);
        q = s_oSpriteLibrary.getSprite("panel_high_sx");
        q = createBitmap(q);
        z.addChild(q);
        C = new createjs.Text(TEXT_TURN + "1", "20px " + PRIMARY_FONT, "#ffffff");
        C.x = 140;
        C.y = 25;
        C.textAlign = "center";
        C.textBaseline = "alphabetic";
        C.lineWidth =
            400;
        z.addChild(C);
        w = new createjs.Text(TEXT_HIGHS + "0/0", "18px " + PRIMARY_FONT, "#ffffff");
        w.x = 260;
        w.y = 50;
        w.textAlign = "right";
        w.textBaseline = "alphabetic";
        w.lineWidth = 400;
        z.addChild(w);
        A = new createjs.Text(TEXT_LOWS + "0/0", "18px " + PRIMARY_FONT, "#ffffff");
        A.x = 260;
        A.y = 75;
        A.textAlign = "right";
        A.textBaseline = "alphabetic";
        A.lineWidth = 400;
        z.addChild(A);
        B = new createjs.Text(TEXT_GUESS + "0", "18px " + PRIMARY_FONT, "#ffffff");
        B.x = 260;
        B.y = 100;
        B.textAlign = "right";
        B.textBaseline = "alphabetic";
        B.lineWidth = 400;
        z.addChild(B);
        this.refreshButtonPos(s_iOffsetX,
            s_iOffsetY)
    };
    this.refreshButtonPos = function(k, p) {
        h.setPosition(c - k, f + p);
        false !== DISABLE_SOUND_MOBILE && false !== s_bMobile || g.setPosition(b - k, d + p);
        D && false === inIframe() && E.setPosition(a + k, e + p)
    };
    this.unload = function() {
        D && false === inIframe() && E.unload();
        h.unload();
        r.unload();
        k.unload();
        u.unload();
        v.unload();
        for (var a = 0; a < FICHE_VALUE.length; a++)(void 0)[a].unload();
        y.off("mousedown", function() {});
        x.off("mousedown", function() {});
        s_oStage.removeChild(z);
        s_oInterface = null
    };
    this.resetFullscreenBut = function() {
        E.setActive(s_bFullscreen)
    };
    this.refreshMoney = function(a) {
        t.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY;
        l.text = a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY
    };
    this.refreshTurn = function(a) {
        C.text = TEXT_TURN + a
    };
    this.refreshHighs = function(a, b, c) {
        w.text = TEXT_HIGHS + a + "/" + b + " (" + c + "%)"
    };
    this.refreshLows = function(a, b, c) {
        A.text = TEXT_LOWS + a + "/" + b + " (" + c + "%)"
    };
    this.refreshGuess = function(a, b) {
        B.text = TEXT_GUESS + a + " (" + b + "%)"
    };
    this.disableAllIn = function() {
        r.disable()
    };
    this.initState = function() {
        r.enable();
        k.enable();
        x.visible = false;
        n.visible = true;
        p.visible = true;
        this.enableArrow(false);
        this._enableFiche(true)
    };
    this._onButAllinRelease = function() {
        r.disable();
        n.visible = false;
        p.visible = false;
        this.enableArrow(true);
        this._enableFiche(false);
        s_oGame.updateCurBet(-1)
    };
    this._onButGiveupRelease = function() {
        s_oGame.onGiveUp()
    };
    this._onButClearBetRelease = function() {
        s_oGame.resetBet();
        r.enable();
        n.visible = true;
        p.visible = true;
        this.enableArrow(false);
        this._enableFiche(true)
    };
    this._onArrowHigh = function() {
        v.disable();
        k.disable();
        this._enableFiche(false);
        x.x = CANVAS_WIDTH / 2 - 230;
        x.y = CANVAS_HEIGHT / 2 - 140;
        x.visible = true;
        s_oGame.onPlayerSelection("high")
    };
    this._onArrowLow = function() {
        u.disable();
        k.disable();
        this._enableFiche(false);
        x.x = CANVAS_WIDTH / 2 + 100;
        x.y = CANVAS_HEIGHT / 2 - 50;
        x.visible = true;
        s_oGame.onPlayerSelection("low")
    };
    this._enableFiche = function(a) {
        y.visible = a ? false : true
    };
    this.enableArrow = function(a) {
        a ? (u.enable(), v.enable()) : (u.disable(), v.disable())
    };
    this._onFicheClicked = function(a) {
        playSound("chip",
            1, false);
        n.visible = false;
        p.visible = false;
        this.enableArrow(true);
        r.enable();
        a = s_oGameSettings.getFichesValueAt(a);
        s_oGame.updateCurBet(a)
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        s_oGame.onExit()
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? H.call(window.document) : D.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;
function CEndPanel(a) {
    var e, b, d, c;
    this._init = function(a) {
        e = createBitmap(a);
        e.x = 0;
        e.y = 0;
        d = new createjs.Text("", "22px " + PRIMARY_FONT, "#000");
        d.x = CANVAS_WIDTH / 2 + 3;
        d.y = CANVAS_HEIGHT / 2 + 2;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = 500;
        c = new createjs.Text("", "22px " + PRIMARY_FONT, "#ffffff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 500;
        b = new createjs.Container;
        b.alpha = 0;
        b.visible = false;
        b.addChild(e, d, c);
        s_oStage.addChild(b)
    };
    this.unload = function() {
        b.off("mousedown",
            this._onExit)
    };
    this._initListener = function() {
        b.on("mousedown", function(){
			$(s_oMain).trigger("recharge");
		})
    };
    this.show = function() {
        playSound("game_over", 1, false);
        d.text = TEXT_GAMEOVER;
        c.text = TEXT_GAMEOVER;
        b.visible = true;
        var a = this;
        createjs.Tween.get(b).to({
            alpha: 1
        }, 500).call(function() {
            a._initListener()
        })
    };
    this._onExit = function() {
        $(s_oMain).trigger("end_session");
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CCard(a, e, b, d, c) {
    var f, g, h, k, m;
    this._init = function(a, b, c, d, e) {
        m = c;
        f = d;
        g = e;
        k = new createjs.Container;
        k.x = a;
        k.y = b;
        m.addChild(k);
        a = {
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
        a = new createjs.SpriteSheet(a);
        h = createSprite(a, "back", 0, 0, CARD_WIDTH, CARD_HEIGHT);
        h.stop();
        k.addChild(h)
    };
    this.unload = function() {
        m.removeChild(k)
    };
    this.showCard = function() {
        var a = this;
        createjs.Tween.get(k).to({
            scaleX: .1
        }, TURN_CARD_SPEED / 2, createjs.Ease.cubicIn).call(function() {
            a.setValue()
        }).call(function() {})
    };
    this.setValue = function() {
        h.gotoAndStop(f);
        playSound("card", 1, false);
        createjs.Tween.get(k).to({
            scaleX: 1
        }, TURN_CARD_SPEED / 2, createjs.Ease.cubicOut).call(function() {
            s_oGame.checkWin(r)
        })
    };
    this.hideCard = function() {
        var a = this;
        createjs.Tween.get(k).to({
            scaleX: .1
        }, TURN_CARD_SPEED / 2, createjs.Ease.linear).call(function() {
            a.setBack()
        })
    };
    this.setBack = function() {
        h.gotoAndStop("back");
        var a = this;
        createjs.Tween.get(k).to({
            scaleX: 1
        }, TURN_CARD_SPEED / 2, createjs.Ease.linear).call(function() {
            a.cardHidden()
        })
    };
    this.getRank = function() {
        return g
    };
    var r = this;
    this._init(a, e, b, d, c)
}

function CGameSettings() {
    var a, e, b, d;
    this._init = function() {
        b = [];
        a = [];
        for (var c = 0; 52 > c; c++) {
            a.push(c);
            var e = (c + 1) % 13;
            0 === e && (e = 13);
            b.push(e)
        }
        d = [];
        for (c = 0; c < FICHES_VALUE.length; c++) d[c] = FICHES_VALUE[c]
    };
    this.getFichesValues = function() {
        return d
    };
    this.getFichesValueAt = function(a) {
        return d[a]
    };
    this.getIndexForFiches = function(a) {
        for (var b = 0, c = 0; c < d.length; c++) d[c] === a && (b = c);
        return b
    };
    this.generateFichesPile = function(a) {
        var b = [],
            c = d.length - 1,
            e = d[c];
        do {
            var k = a % e;
            k = CMath.roundDecimal(k, 1);
            a = Math.floor(a /
                e);
            for (var m = 0; m < a; m++) b.push(e);
            c--;
            e = d[c];
            a = k
        } while (0 < k && -1 < c);
        return b
    };
    this.timeToString = function(a) {
        a = Math.round(a / 1E3);
        var b = Math.floor(a / 60);
        a -= 60 * b;
        var c = "",
            c = 10 > b ? c + ("0" + b + ":") : c + (b + ":");
        return 10 > a ? c + ("0" + a) : c + a
    };
    this.getShuffledCardDeck = function() {
        for (var b = [], d = 0; d < a.length; d++) b[d] = a[d];
        for (e = []; 0 < b.length;) e.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
        return e
    };
    this.getCardValue = function(a) {
        return b[a]
    };
    this._init()
}

function CFichesController(a, e, b) {
    var d, c, f, g, h, k, m, r, t, l, n;
    this._init = function(a, b, c) {
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        c.addChild(m);
        g = f = 0;
        d = false;
        l = [];
        n = []
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        n[a] = c
    };
    this.reset = function() {
        c = false;
        g = 0;
        m.removeAllChildren()
    };
    this.refreshFiches = function(a, b, c) {
        a = a.sortOn("value", "index");
        for (var d = c, e = g = 0, f = 0; f < a.length; f++) {
            var h = createBitmap(s_oSpriteLibrary.getSprite("fiche_" + a[f].index));
            h.scaleX = .7;
            h.scaleY = .7;
            m.addChild(h);
            h.x = b;
            h.y = d;
            d -= 5;
            e++;
            9 < e && (e =
                0, b += FICHE_WIDTH, d = c);
            g += a[f].value
        }
        playSound("chip", 1, false)
    };
    this._createFichesAmountText = function(a, b, c) {
        r = new createjs.Text(c.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "24px " + PRIMARY_FONT, "#000000");
        r.x = a + 3;
        r.y = b + 3;
        r.textAlign = "center";
        r.textBaseline = "alphabetic";
        r.lineWidth = 200;
        m.addChild(r);
        t = new createjs.Text(c.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + " " + TEXT_CURRENCY, "24px " + PRIMARY_FONT, "#ffffff");
        t.x = a;
        t.y = b;
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.lineWidth = 200;
        m.addChild(t)
    };
    this.createFichesPile = function(a) {
        m.removeAllChildren();
        this._createFichesAmountText(10,
            60, a);
        var b = s_oGameSettings.getFichesValues(),
            c = [];
        do {
            var d = b[b.length - 1];
            for (var e = b.length - 1; d > a;) e--, d = b[e];
            for (var e = Math.floor(a / d), f = 0; f < e; f++) c.push({
                value: d,
                index: s_oGameSettings.getIndexForFiches(d)
            });
            a = d = a % d
        } while (0 < d);
        this.refreshFiches(c, 0, 0)
    };
    this.initMovement = function(a, b, c) {
        d = c;
        h = new CVector2(m.x, m.y);
        k = new CVector2(a, b)
    };
    this.getValue = function() {
        return g
    };
    this.update = function(a) {
        if (!c)
            if (f += a, f > TIME_FICHES_MOV) f = 0, c = true, l[FICHES_END_MOV] && l[FICHES_END_MOV].call(n[FICHES_END_MOV], d,
                g);
            else {
                a = easeInOutCubic(f, 0, 1, TIME_FICHES_MOV);
                var b = new CVector2,
                    b = tweenVectors(h, k, a, b);
                m.x = b.getX();
                m.y = b.getY()
            }
    };
    this._init(a, e, b)
}

function CWinText(a, e, b) {
    var d, c, f, g;
    this._init = function(a, b, e) {
        g = new createjs.Container;
        g.x = 0;
        g.y = CANVAS_HEIGHT / 2 - 135;
        g.alpha = 1;
        s_oStage.addChild(g);
        c = new createjs.Text("", "60px " + PRIMARY_FONT, "#ffffff");
        c.textAlign = "center";
        c.text = a;
        c.textBaseline = "alphabetic";
		c.direction = "rtl";
        g.addChild(c);
        f = new createjs.Text("", "60px " + PRIMARY_FONT, "#000000");
        f.textAlign = "center";
        f.text = a;
        f.outline = 3;
        f.textBaseline = "alphabetic";
        g.addChild(f);
        d = f.getMeasuredWidth()
    };
    this.show = function() {
        createjs.Tween.get(g).to({
                x: e
            }, SHOWTEXT_SPEED /
            4, createjs.Ease.elasticOut).wait(SHOWTEXT_SPEED / 2).to({
            x: CANVAS_WIDTH + d / 2
        }, SHOWTEXT_SPEED / 4, createjs.Ease.quartOut).call(function() {
            h.unload();
            s_oGame.tryShowAd();
            s_oGame.refreshGame(b)
        })
    };
    this.unload = function() {
        s_oStage.removeChild(g)
    };
    var h = this;
    this._init(a, e, b)
}

function CGiveupPanel(a, e) {
    var b, d, c, f, g, h, k;
    this._init = function(a, e) {
        b = createBitmap(a);
        b.x = 0;
        b.y = 0;
        c = new createjs.Text("", "60px " + PRIMARY_FONT, "#000");
        c.x = CANVAS_WIDTH / 2 + 2;
        c.y = CANVAS_HEIGHT / 2 - 140;
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.lineWidth = 500;
        f = new createjs.Text("", "60px " + PRIMARY_FONT, "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 142;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = 500;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0,
            0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.on("mousedown", function() {});
        d = new createjs.Container;
        d.alpha = 0;
        d.addChild(b, c, f, g);
        var m = s_oSpriteLibrary.getSprite("but_bet");
        s_oStage.addChild(d);
        playSound("click", 1, false);
        createjs.Tween.get(d).to({
            alpha: 1
        }, 500)
    };
    this.unload = function() {
        s_oStage.removeChild(d)
    };
    this._onYesRelease = function() {
        $(s_oMain).trigger("save_score", [e, "standard"]);
        $(s_oMain).trigger("end_level", 1);
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event", [e]);
        s_oStage.removeChild(d);
        s_oGame.onExit()
    };
    this._onNoRelease = function() {
        this.unload()
    };
    this._init(a, e);
    return this
}

function CCreditsPanel() {
    var a, e, b, d, c, f, g;
    this._init = function() {
        g = new createjs.Container;
        s_oStage.addChild(g);
        var h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        g.addChild(h);
        h = s_oSpriteLibrary.getSprite("msg_box");
        e = createBitmap(h);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        e.regX = h.width / 2;
        e.regY = h.height / 2;
        g.addChild(e);
        c = new createjs.Shape;
        c.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = .01;
        c.on("click", this._onLogoButRelease);
        g.addChild(c);
        h = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 320;
        b = new CGfxButton(a, 210, h, g);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "26px " + PRIMARY_FONT, "#ffffff");
        d.x = CANVAS_WIDTH / 2;
        d.y = 300;
        d.textAlign = "center";
        g.addChild(d);
        f = new createjs.Text("www.tkstar.ir", "30px " + PRIMARY_FONT, "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = 444;
        f.textAlign =
            "center";
        g.addChild(f)
    };
    this.unload = function() {
        c.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(g)
    };
    this._onLogoButRelease = function() {
        return
    };
    this._init()
};