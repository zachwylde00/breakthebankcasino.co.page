var s_iOffsetX, s_iOffsetY;
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
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return !1
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
        var a;
        a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            c = CANVAS_WIDTH * b,
            b = CANVAS_HEIGHT * b,
            f;
        b < a ? (f = a - b, b += f, c += CANVAS_WIDTH / CANVAS_HEIGHT * f) : c < d && (f = d - c, c += f, b += CANVAS_HEIGHT / CANVAS_WIDTH * f);
        f = a / 2 - b / 2;
        var e = d / 2 - c / 2,
            h = CANVAS_WIDTH / c;
        if (e * h < -EDGEBOARD_X || f * h < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
            d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, f = (a - b) / 2, e = (d - c) / 2, h = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * e * h;
        s_iOffsetY = -1 * f * h;
        0 <= f && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bMobile ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_oStage.scaleX = s_oStage.scaleY = Math.min(c / CANVAS_WIDTH,
            b / CANVAS_HEIGHT));
        0 > f ? $("#canvas").css("top", f + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", e + "px")
    }
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
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
    return parseFloat(Math.min(a + Math.random() * (d - a), d))
}

function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d);
    var b = "",
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
    window.Touch && this.element.addEventListener("touchstart", this, !1)
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
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 === a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};

function playSound(a, d, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? createjs.Sound.play(a, {
        loop: b,
        volume: d
    }) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.stop()
}

function setVolume(a, d) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = d
}

function setMute(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.setMute(d)
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

function CSpriteLibrary() {
    var a, d, b, c, f, e;
    this.init = function(h, m, l) {
        b = d = 0;
        c = h;
        f = m;
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
    DISABLE_SOUND_MOBILE = !1,
    FONT_GAME_1 = "MainFont",
    FONT_GAME_2 = "MainFont",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_GAME_WAITING_FOR_BET = 0,
    STATE_GAME_DEALING = 1,
    STATE_GAME_SHOW_WINNER = 2,
    STATE_CARD_DEALING = 0,
    STATE_CARD_REMOVING = 1,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ASSIGN_FICHES = "ASSIGN_FICHES",
    END_HAND = "END_HAND",
    ON_CARD_SHOWN = "ON_CARD_SHOWN",
    ON_CARD_ANIMATION_ENDING = "ON_CARD_ANIMATION_ENDING",
    ON_CARD_TO_REMOVE = "ON_CARD_TO_REMOVE",
    NUM_FICHES = 7,
    CARD_WIDTH = 66,
    CARD_HEIGHT = 102,
    MIN_BET, MAX_BET, TOTAL_MONEY, FICHE_WIDTH, WIN_OCCURRENCE, BET_OCCURRENCE, TIME_FICHES_MOV = 600,
    TIME_CARD_DEALING = 250,
    TIME_CARD_REMOVE = 1E3,
    TIME_SHOW_FINAL_CARDS = 4E3,
    TIME_END_HAND, BET_TIME = 1E4,
    AD_SHOW_COUNTER, NUM_DECKS = 4,
    BET_TIE = 0,
    BET_BANKER = 1,
    BET_PLAYER = 2,
    WIN_TIE = 0,
    WIN_DEALER = 1,
    WIN_PLAYER = 2,
    POS_BET = [],
    MULTIPLIERS = [],
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
	TEXT_BET = ["مساوی", "بانکدار", "شما"];
	TEXT_WIN = "برد";
	TEXT_SHOW_WIN = [TEXT_BET[0], TEXT_BET[1], TEXT_BET[2]];
	TEXT_NO_WIN = "باختید";
	TEXT_PLAY = "شروع";
	TEXT_CLEAR = "پاک کردن";
	TEXT_REBET = "شرط قبلی";
	TEXT_DEAL = "ثبت شرط";
	TEXT_NO = "خیر";
	TEXT_YES = "بله";
	TEXT_RECHARGE = "شارژ حساب";
	TEXT_EXIT = "خروج";
	TEXT_CURRENCY = " T ";
	TEXT_DISPLAY_MSG_WAITING_BET = "منتظر حرکت شما";
	TEXT_DISPLAY_MSG_PLAYER_LOSE = "شما این دست را باختید!";
	TEXT_DISPLAY_MSG_PLAYER_WIN = "برنده شدید";
	TEXT_DISPLAY_TIE = "دست مساوی";
	TEXT_DISPLAY_MSG_DEALING = "در حال دست دادن ...";
	TEXT_NO_MONEY = "موجودی حساب شما کافی نمی باشد!!!";
	TEXT_HAND_WON = "برنده : ";
	TEXT_ERROR_MIN_BET = "مبلغ شما کمتر از 50 تومان است!!";

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
        d = new createjs.Text("0%", "30px " + FONT_GAME_1, "#fff");
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
        e, h, m;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        h = new CPreloader;
        s_oGameSettings = new CGameSettings;
        d = !0
    };
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds()
    };
    this.soundLoaded = function() {
        b++;
        h.refreshLoader(Math.floor(b / c * 100));
        b === c && (h.unload(), this.gotoMenu())
    };
    this._initSounds = function() {
        createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded,
            this)), createjs.Sound.registerSound(self.sounds_location + "card.ogg", "card"), createjs.Sound.registerSound(self.sounds_location + "chip.ogg", "chip"), createjs.Sound.registerSound(self.sounds_location + "fiche_collect.ogg", "fiche_collect"), createjs.Sound.registerSound(self.sounds_location + "press_but.ogg", "press_but"), createjs.Sound.registerSound(self.sounds_location + "win.ogg", "win"), createjs.Sound.registerSound(self.sounds_location + "lose.ogg", "lose")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)),
            createjs.Sound.registerSound(self.sounds_location + "card.mp3", "card", 4), createjs.Sound.registerSound(self.sounds_location + "chip.mp3", "chip", 4), createjs.Sound.registerSound(self.sounds_location + "fiche_collect.mp3", "fiche_collect"), createjs.Sound.registerSound(self.sounds_location + "press_but.mp3", "press_but"), createjs.Sound.registerSound(self.sounds_location + "win.mp3", "win"), createjs.Sound.registerSound(self.sounds_location + "lose.mp3", "lose")), c += 6)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_menu_bg",
            self.images_location + "but_menu_bg.png");
        s_oSpriteLibrary.addSprite("but_game_bg", self.images_location + "but_game_bg.png");
        s_oSpriteLibrary.addSprite("but_exit", self.images_location + "but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", self.images_location + "bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_back", self.images_location + "bg_back.png");
        s_oSpriteLibrary.addSprite("audio_icon", self.images_location + "audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game", self.images_location + "bg_game.jpg");
        s_oSpriteLibrary.addSprite("card_spritesheet", self.images_location + "card_spritesheet.png");
        s_oSpriteLibrary.addSprite("msg_box", self.images_location + "msg_box.png");
        s_oSpriteLibrary.addSprite("fiche_highlight", self.images_location + "fiche_highlight.png");
        s_oSpriteLibrary.addSprite("bet_banker", self.images_location + "bet_banker.png");
        s_oSpriteLibrary.addSprite("bet_tie", self.images_location + "bet_tie.png");
        s_oSpriteLibrary.addSprite("bet_player", self.images_location + "bet_player.png");
        s_oSpriteLibrary.addSprite("win_bg", self.images_location + "win_bg.png");
        s_oSpriteLibrary.addSprite("history_cell", self.images_location + "history_cell.png");
        s_oSpriteLibrary.addSprite("history_highlight", self.images_location + "history_highlight.png");
        s_oSpriteLibrary.addSprite("history_bg", self.images_location + "history_bg.png");
        s_oSpriteLibrary.addSprite("but_clear", self.images_location + "but_clear.png");
        s_oSpriteLibrary.addSprite("but_deal", self.images_location + "but_deal.png");
        s_oSpriteLibrary.addSprite("but_rebet", self.images_location + "but_rebet.png");
        s_oSpriteLibrary.addSprite("gui_bg", self.images_location + "gui_bg.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", self.images_location + "but_fullscreen.png");
        for (var a = 0; a < NUM_FICHES; a++) s_oSpriteLibrary.addSprite("fiche_" + a, self.images_location + "fiche_" + a + ".png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        h.refreshLoader(Math.floor(b / c * 100));
        b === c && (h.unload(), this.gotoMenu())
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        f = STATE_MENU
    };
    this.gotoGame = function() {
        m = new CGame(e);
        f = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        d = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        createjs.Sound.setMute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && createjs.Sound.setMute(!1)
    };
    this._update = function(a) {
        if (d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && m.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    e = a;
    ENABLE_CHECK_ORIENTATION = e.check_orientation;
    ENABLE_FULLSCREEN =
        e.fullscreen;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings, s_bFullscreen = !1;

function CTextButton(a, d, b, c, f, e, h, m) {
    var l, n, k, g, r, p, q, w;
    this._init = function(a, b, c, d, f, e, h, m) {
        l = !1;
        n = [];
        k = [];
        w = m;
        r = createBitmap(c);
        m = Math.ceil(h / 20);
        p = new createjs.Text(d, h + "px " + f, "#000000");
        var z = p.getBounds();
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.x = c.width / 2 + m;
        p.y = Math.floor(c.height / 2) + z.height / 3 + m;
        q = new createjs.Text(d, h + "px " + f, e);
        q.textAlign = "center";
        q.textBaseline = "alphabetic";
        q.x = c.width / 2;
        q.y = Math.floor(c.height / 2) + z.height / 3;
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        g.regX = c.width /
            2;
        g.regY = c.height / 2;
        g.cursor = "pointer";
        g.addChild(r, p, q);
        w.addChild(g);
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown");
        g.off("pressup");
        w.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this.enable = function() {
        l = !1;
        q.color = "#fff"
    };
    this.disable = function() {
        l = !0;
        q.color = "#a39b9d"
    };
    this._initListener = function() {
        oParent = this;
        g.on("mousedown", this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        n[a] = b;
        k[a] = c
    };
    this.buttonRelease = function() {
        l ||
            (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), g.scaleX = 1, g.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        l || (g.scaleX = .9, g.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.changeText = function(a) {
        q.text = a;
        p.text = a
    };
    this.setX = function(a) {
        g.x = a
    };
    this.setY = function(a) {
        g.y = a
    };
    this.getButtonImage = function() {
        return g
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this._init(a, d, b, c, f, e, h, m);
    return this
}

function CGfxButton(a, d, b, c) {
    var f, e, h, m, l, n = [],
        k, g;
    this._init = function(a, b, c) {
        f = !1;
        m = [];
        l = [];
        e = c.width;
        h = c.height;
        k = createBitmap(c);
        k.x = a;
        k.y = b;
        k.regX = c.width / 2;
        k.regY = c.height / 2;
        k.cursor = "pointer";
        g.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        g.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this._initListener = function() {
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener =
        function(a, b, c) {
            m[a] = b;
            l[a] = c
        };
    this.addEventListenerWithParams = function(a, b, c, d) {
        m[a] = b;
        l[a] = c;
        n = d
    };
    this.buttonRelease = function() {
        f || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(l[ON_MOUSE_UP], n))
    };
    this.buttonDown = function() {
        f || m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], n)
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
        f = !1;
        k.filters = [];
        k.cache(0,
            0, e, h)
    };
    this.disable = function() {
        f = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        k.filters = [new createjs.ColorMatrixFilter(a)];
        k.cache(0, 0, e, h)
    };
    this.getButtonImage = function() {
        return k
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    g = c;
    this._init(a, d, b);
    return this
}

function CGuiButton(a, d, b, c, f, e, h, m) {
    var l, n, k, g, r, p, q;
    this._init = function(a, b, c, d, f, e, h, m) {
        l = !1;
        n = [];
        k = [];
        q = m;
        r = createBitmap(c);
        p = new createjs.Text(d, h + "px " + f, e);
        p.textAlign = "left";
        p.textBaseline = "alphabetic";
        p.x = 10;
        p.y = c.height - 10;
        g = new createjs.Container;
        g.x = a;
        g.y = b;
        g.regX = c.width / 2;
        g.regY = c.height / 2;
        g.addChild(r, p);
        q.addChild(g);
        this._initListener()
    };
    this.unload = function() {
        g.off("mousedown");
        g.off("pressup");
        q.removeChild(g)
    };
    this.setVisible = function(a) {
        g.visible = a
    };
    this.enable = function() {
        l = !1;
        p.color = "#fff"
    };
    this.disable = function() {
        l = !0;
        p.color = "#a39b9d"
    };
    this._initListener = function() {
        g.on("mousedown", this.buttonDown);
        g.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        n[a] = b;
        k[a] = c
    };
    this.buttonRelease = function() {
        l || (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || playSound("press_but", 1, 0), g.scaleX = 1, g.scaleY = 1, n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(k[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        l || (g.scaleX = .9, g.scaleY = .9, n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        g.x = a;
        g.y = b
    };
    this.changeText = function(a) {
        p.text = a
    };
    this.setX = function(a) {
        g.x = a
    };
    this.setY = function(a) {
        g.y = a
    };
    this.getButtonImage = function() {
        return g
    };
    this.getX = function() {
        return g.x
    };
    this.getY = function() {
        return g.y
    };
    this._init(a, d, b, c, f, e, h, m);
    return this
}

function CToggle(a, d, b, c, f) {
    var e, h, m, l, n = [],
        k;
    this._init = function(a, b, c, d, f) {
        m = [];
        l = [];
        var g = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2 - 5,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = d;
        h = f;
        k = createSprite(g, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        k.x = a;
        k.y = b;
        k.cursor = "pointer";
        k.stop();
        s_oStage.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        s_oStage.removeChild(k)
    };
    this._initListener = function() {
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        l[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        m[a] = b;
        l[a] = c;
        n = d
    };
    this.setActive = function(a) {
        e = a;
        k.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        k.scaleX = 1;
        k.scaleY = 1;
        playSound("press_button", 1, 0);
        h && (e = !e, k.gotoAndStop("state_" + e));
        m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(l[ON_MOUSE_UP], n)
    };
    this.buttonDown = function() {
        k.scaleX =
            .9;
        k.scaleY = .9;
        m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], n)
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this.getY = function() {
        return k.y
    };
    this._init(a, d, b, c, f)
}

function CMenu() {
    var a, d, b, c, f, e = null,
        h = null,
        m, l, n, k;
    this._init = function() {
        m = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(m);
        var asd = s_oSpriteLibrary.getSprite("bg_back");
        qwe = new CTextButton(CANVAS_WIDTH - asd.width / 4 - 140, asd.height / 2 + 10, asd, ' ', FONT_GAME_1, "#ffffff", 40, s_oStage);
        qwe.addEventListener(ON_MOUSE_UP, function(){
			window.location = '../../users/casino';
		}, this);
        var g = s_oSpriteLibrary.getSprite("but_menu_bg");
        l = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 164, g, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) g = s_oSpriteLibrary.getSprite("audio_icon"), b = CANVAS_WIDTH - g.width / 4 - 10, c = g.height / 2 + 10, n = new CToggle(b, c, g, s_bAudioActive, !0), n.addEventListener(ON_MOUSE_UP,
            this._onAudioToggle, this);
        var g = window.document,
            r = g.documentElement;
        e = r.requestFullscreen || r.mozRequestFullScreen || r.webkitRequestFullScreen || r.msRequestFullscreen;
        h = g.exitFullscreen || g.mozCancelFullScreen || g.webkitExitFullscreen || g.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (e = !1);
        e && !1 === inIframe() && (g = s_oSpriteLibrary.getSprite("but_fullscreen"), a = g.width / 4 + 10, d = g.height / 2 + 10, f = new CToggle(a, d, g, s_bFullscreen, !0), f.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(k);
        createjs.Tween.get(k).to({
            alpha: 0
        }, 400).call(function() {
            k.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(g, h) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(b - g, h + c);
        e && !1 === inIframe() && f.setPosition(a + g, d + h)
    };
    this.unload = function() {
        l.unload();
        l = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(), n = null;
        e && !1 === inIframe() && f.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoGame();
        $(s_oMain).trigger("start_session")
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (h.call(window.document), s_bFullscreen = !1) : (e.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function CGame(a) {
    var d = !1,
        b, c, f, e, h, m, l, n, k, g, r, p, q, w, z, D, x, y, C, A, E, B, G, v, t, J, I;
    this._init = function() {
        f = MAX_BET;
        e = -1;
        k = c = 0;
        z = [];
        for (var a = 0; a < BET_OCCURRENCE.length; a++)
            for (var b = 0; b < BET_OCCURRENCE[a]; b++) z.push(a);
        s_oTweenController = new CTweenController;
        G = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(G);
        a = s_oSpriteLibrary.getSprite("gui_bg");
        b = createBitmap(a);
        b.y = CANVAS_HEIGHT - a.height;
        s_oStage.addChild(b);
        B = new createjs.Container;
        s_oStage.addChild(B);
        v = new CInterface(TOTAL_MONEY);
        t = new CSeat;
        t.setCredit(TOTAL_MONEY);
        this.reset(!1);
        x = new CVector2;
        x.set(1214, 228);
        y = new CVector2;
        y.set(CANVAS_WIDTH / 2 + 100, 230);
        C = new CVector2;
        C.set(418, 820);
        A = new CVector2;
        A.set(0, -CANVAS_HEIGHT);
        E = new CVector2(454, 230);
        w = [t.getCardOffset(), y];
        I = new CGameOver;
        t.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : d = !0;
        D = new CVector2(x.getX(), x.getY());
        J = new CMsgBox;
        this.changeState(STATE_GAME_WAITING_FOR_BET)
    };
    this.unload = function() {
        d = !1;
        createjs.Sound.stop();
        for (var a = 0; a < g.length; a++) g[a].unload();
        v.unload();
        I.unload();
        J.unload();
        s_oStage.removeAllChildren()
    };
    this.reset = function(a) {
        b = !1;
        m = l = h = c = 0;
        t.reset();
        g = [];
        g.splice(0);
        v.reset();
        v.enableBetFiches(a);
        this.shuffleCard()
    };
    this.shuffleCard = function() {
        p = [];
        p = s_oGameSettings.getShuffledCardDeck()
    };
    this.changeState = function(a) {
        e = a;
        if (e === STATE_GAME_DEALING) {
            var b;
            b = n < 2 * t.getTotBet() ? WIN_OCCURRENCE : 100 * Math.random();
            a = t.getBetArray();
            for (var c = 0, d = 0; d < a.length; d++) 0 < a[d] && c++;
            if (b < WIN_OCCURRENCE)
                if (1 === c) {
                    for (d = 0; d < a.length; d++) {
                        var f = 0;
                        if (0 !== a[d]) {
                            f = d;
                            break
                        }
                    }
                    d = f
                } else {
                    do d = z[Math.floor(Math.random() * z.length)]; while (0 === a[d])
                }
            else if (3 === c) b = Math.random(), d = .5 < b ? BET_BANKER : BET_PLAYER;
            else {
                d = [];
                for (b = 0; b < a.length; b++) 0 === a[b] && d.push(b);
                b = Math.floor(Math.random() * d.length);
                d = d[b]
            }
            do 6 > p.length && this.shuffleCard(), a = [], a.push(p.splice(0, 1)), a.push(p.splice(0, 1)), b = [], b.push(p.splice(0, 1)), b.push(p.splice(0, 1)),
                f = this._simulateHand(a, b); while (d !== f);
            q = [];
            for (d = 0; d < a.length; d++) q[d] = a[d];
            r = [];
            for (d = 0; d < b.length; d++) r[d] = b[d];
            v.disableButtons();
            this._dealing()
        }
    };
    this._simulateHand = function(a, b) {
        for (var c = 0, d = 0, f = 0; f < a.length; f++) c += s_oGameSettings.getCardValue(a[f]), d += s_oGameSettings.getCardValue(b[f]);
        c %= 10;
        d %= 10;
        if (7 < d) return c = d > c ? WIN_DEALER : d === c ? WIN_TIE : WIN_PLAYER;
        f = !1;
        if (7 < c) return WIN_PLAYER;
        if (6 > c) {
            var g = p.splice(0, 1),
                e = s_oGameSettings.getCardValue(g);
            a.push(g);
            c = (c + e) % 10;
            3 > d ? f = !0 : 3 === d && 8 !== e ? f = !0 : 4 === d && 1 < e && 8 > e ? f = !0 : 5 === d && 3 < e && 8 > e ? f = !0 : 6 !== d || 6 !== e && 7 !== e || (f = !1);
            f && (g = p.splice(0, 1), b.push(g), d += s_oGameSettings.getCardValue(g), d %= 10)
        } else 6 > d && (g = p.splice(0, 1), b.push(g), d += s_oGameSettings.getCardValue(g), d %= 10);
        return d === c ? WIN_TIE : d > c ? WIN_DEALER : WIN_PLAYER
    };
    this.cardFromDealerArrived = function(a, b, c) {
        !1 === b ? m += a.getValue() : l += a.getValue();
        3 > c ? s_oGame._dealing() : (m %= 10, l %= 10, v.refreshCardValue(l, m), 1 === q.length ? (a = q.splice(0, 1), b = new CCard(x.getX(), x.getY(),
            B), b.setInfo(D, t.getAttachCardOffset(), a, s_oGameSettings.getCardValue(a), !1, h), b.addEventListener(ON_CARD_ANIMATION_ENDING, s_oGame.cardFromDealerArrived), t.newCardDealed(), h++, g.push(b)) : 1 === r.length ? (h++, c = new CVector2(y.getX() + CARD_WIDTH / 2 * 2, y.getY()), a = r.splice(0, 1), b = new CCard(x.getX(), x.getY(), B), b.setInfo(D, c, a, s_oGameSettings.getCardValue(a), !0, h), b.addEventListener(ON_CARD_ANIMATION_ENDING, s_oGame.cardFromDealerArrived), g.push(b)) : s_oGame._showWin())
    };
    this._showWin = function() {
        var a;
        a = l ===
            m ? BET_TIE : l > m ? BET_BANKER : BET_PLAYER;
        for (var b = t.getBetArray(), c = !1, d = 0; d < b.length; d++)
            if (0 < b[d]) {
                var f = 0;
                a === d ? (this._playerWin(t.getPotentialWin(d), a), f = t.getPotentialWin(d), c = !0) : this._playerLose(d, t.getPotentialWin(d));
                v.showWin(d, f)
            }
        c ? playSound("win", 1, 0) : playSound("lose", 1, 0);
        setTimeout(function() {
            s_oGame._onEndHand(a)
        }, TIME_END_HAND)
    };
    this._playerWin = function(a, b) {
        t.increaseCredit(a);
        n -= a / 1.5;
        t.initMovement(b,
            C.getX(), C.getY())
    };
    this._playerLose = function(a, c) {
        t.initMovement(a, A.getX(), A.getY())
    };
    this._dealing = function() {
        if (h < 2 * w.length) {
            var a = new CCard(x.getX(), x.getY(), B),
                b;
            if (1 === h % w.length) {
                b = new CVector2(y.getX() + CARD_WIDTH / 2 * (1 < h ? 1 : 0), y.getY());
                var c = r.splice(0, 1);
                a.setInfo(D, b, c, s_oGameSettings.getCardValue(c), !0, h)
            } else c = q.splice(0, 1), a.setInfo(D, t.getAttachCardOffset(), c, s_oGameSettings.getCardValue(c), !1, h), t.newCardDealed();
            g.push(a);
            h++;
            a.addEventListener(ON_CARD_ANIMATION_ENDING, this.cardFromDealerArrived);
            a.addEventListener(ON_CARD_TO_REMOVE, this._onRemoveCard);
            playSound("card", 1, 0)
        }
    };
    this._onEndHand = function(a) {
        v.addHistoryRow(m, l, a);
        a = new CVector2(E.getX(), E.getY());
        for (var b = 0; b < g.length; b++) g[b].initRemoving(a), g[b].hideCard();
        v.clearCardValueText();
        c = 0;
        s_oGame.changeState(STATE_GAME_SHOW_WINNER);
        playSound("fiche_collect", 1, 0);
        k++;
        k === AD_SHOW_COUNTER && (k = 0, $(s_oMain).trigger("show_interlevel_ad"));
        $(s_oMain).trigger("save_score", [t.getCredit()])
    };
    this.setBet = function(a, c, d) {
        b && (b = !1, this.clearBets());
        var g = t.getTotBet();
        g + a <= f && a <= t.getCredit() && ((g + a), t.decreaseCredit(a), n += a, t.bet(a, d, c), v.enable(!0, !1, !1, !1, !1), v.refreshCredit(t.getCredit()))
    };
    this._gameOver = function() {
        I.show()
    };
    this.onDeal = function() {
        t.getTotBet() < MIN_BET ? (J.show(TEXT_ERROR_MIN_BET), v.enableBetFiches(!1), v.enable(!0)) : (t.calculatePotentialWins(), this.changeState(STATE_GAME_DEALING))
    };
    this.clearBets = function() {
        var a =
            t.getStartingBet();
        0 < a && (t.clearBet(), t.increaseCredit(a), n -= a, v.refreshCredit(t.getCredit()), a = t.checkIfRebetIsPossible(), v.enableBetFiches(a))
    };
    this.rebet = function() {
        this.clearBets();
        var a = t.rebet();
        n -= a;
        v.enable(!0, !1, !1, !1, !1);
        v.refreshCredit(t.getCredit());
        c = BET_TIME;
        b = !0
    };
    this._onRemoveCard = function(a) {
        a.unload();
    };
    this.onExit = function() {
        this.unload();
        $(s_oMain).trigger("end_session");
        $(s_oMain).trigger("share_event",
            t.getCredit());
        s_oMain.gotoMenu()
    };
    this.getState = function() {
        return e
    };
    this._updateDealing = function() {
        for (var a = 0; a < g.length; a++) g[a].update()
    };
    this._updateShowWinner = function() {
        t.updateFichesController(s_iTimeElaps);
        for (var a = 0; a < g.length; a++) g[a].update();
        c += s_iTimeElaps;
        c > TIME_END_HAND && (c = 0, a = t.checkIfRebetIsPossible(), this.reset(a), v.reset(), t.getCredit() < s_oGameSettings.getFichesValueAt(0) ? (this._gameOver(), this.changeState(-1)) : this.changeState(STATE_GAME_WAITING_FOR_BET), v.refreshCredit(t.getCredit()))
    };
    this.update = function() {
        if (!1 !== d) switch (e) {
            case STATE_GAME_DEALING:
                this._updateDealing();
                break;
            case STATE_GAME_SHOW_WINNER:
                this._updateShowWinner()
        }
    };
    s_oGame = this;
    TOTAL_MONEY = a.money;
    MIN_BET = a.min_bet;
    MAX_BET = a.max_bet;
    MULTIPLIERS = a.multiplier;
    BET_TIME = a.bet_time;
    BLACKJACK_PAYOUT = a.blackjack_payout;
    WIN_OCCURRENCE = a.win_occurrence;
    BET_OCCURRENCE = a.bet_occurrence;
    n = a.game_cash;
    TIME_END_HAND = a.time_show_hand;
    AD_SHOW_COUNTER = a.ad_show_counter;
    this._init()
}
var s_oGame, s_oTweenController;

function CInterface(a) {
    var d, b, c, f, e, h, m, l, n, k, g, r, p, q, w, z, D = null,
        x, y, C, A, E, B, G, v, t, J, I, K = null,
        L = null;
    this._init = function(a) {
        var u = s_oSpriteLibrary.getSprite("but_exit");
        e = CANVAS_WIDTH - u.width / 2 - 10;
        h = u.height / 2 + 10;
        p = new CGfxButton(e, h, u, s_oStage);
        p.addEventListener(ON_MOUSE_UP, this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m = p.getX() - u.width - 10, l = u.height / 2 + 10, D = new CToggle(m, l, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, !0), D.addEventListener(ON_MOUSE_UP, this._onAudioToggle,
            this);
        var u = window.document,
            F = u.documentElement;
        K = F.requestFullscreen || F.mozRequestFullScreen || F.webkitRequestFullScreen || F.msRequestFullscreen;
        L = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (K = !1);
        K && !1 === inIframe() && (u = s_oSpriteLibrary.getSprite("but_fullscreen"), d = null === D ? p.getX() - u.width / 2 - 10 : m - u.width / 2 - 10, b = u.height / 2 + 10, I = new CToggle(d, b, u, s_bFullscreen, !0), I.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        t = new CGfxButton(CANVAS_WIDTH / 2, 590, s_oSpriteLibrary.getSprite("bet_player"), s_oStage);
        t.addEventListener(ON_MOUSE_UP, this._onButPlayerRelease, this);
        v = new CGfxButton(CANVAS_WIDTH / 2, 482, s_oSpriteLibrary.getSprite("bet_banker"), s_oStage);
        v.addEventListener(ON_MOUSE_UP, this._onButBankerRelease, this);
        G = new CGfxButton(CANVAS_WIDTH / 2, 400, s_oSpriteLibrary.getSprite("bet_tie"), s_oStage);
        G.addEventListener(ON_MOUSE_UP, this._onButTieRelease, this);
        u = s_oSpriteLibrary.getSprite("but_clear");
        q = new CGuiButton(939, CANVAS_HEIGHT - 31, u, TEXT_CLEAR, FONT_GAME_1, "#ffffff", 17, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onButClearRelease, this);
        u = s_oSpriteLibrary.getSprite("but_rebet");
        w = new CGuiButton(1112, CANVAS_HEIGHT - u.height / 2, u, TEXT_REBET, FONT_GAME_1, "#ffffff", 17, s_oStage);
        w.disable();
        w.addEventListener(ON_MOUSE_UP, this._onButRebetRelease, this);
        A = new createjs.Text("", "24px " + FONT_GAME_2, "#ffde00");
        A.x = 412;
        A.y = 16;
        A.lineWidth = 150;
        A.textAlign = "left";
        A.lineHeight = 20;
        s_oStage.addChild(A);
        E = new createjs.Text("",
            "19px " + FONT_GAME_2, "#ffde00");
        E.x = 412;
        E.y = 66;
        A.lineWidth = 180;
        E.textAlign = "left";
        E.lineHeight = 18;
        s_oStage.addChild(E);
        y = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
        y.shadow = new createjs.Shadow("#000000", 2, 2, 1);
        y.x = 910;
        y.y = 180;
        y.textAlign = "right";
        s_oStage.addChild(y);
        C = new createjs.Text("", "20px " + FONT_GAME_1, "#fff");
        C.shadow = new createjs.Shadow("#000000", 2, 2, 1);
        C.x = 658;
        C.y = 180;
        C.textAlign = "right";
        s_oStage.addChild(C);
        u = new createjs.Text("", "30px " + FONT_GAME_2, "#ffde00");
        u.x = 370;
        u.y =
            CANVAS_HEIGHT - 84;
        u.textAlign = "left";
        s_oStage.addChild(u);
        x = new createjs.Text(a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY, "30px " + FONT_GAME_2, "#ffde00");
        x.x = 420;
        x.y = CANVAS_HEIGHT - 78;
        x.textAlign = "left";
        s_oStage.addChild(x);
        u = s_oSpriteLibrary.getSprite("but_deal");
        z = new CGuiButton(1282, CANVAS_HEIGHT - u.height / 2, u, TEXT_DEAL, FONT_GAME_1, "#ffffff", 26, s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onButDealRelease, this);
        r = [];
        r[BET_TIE] = new CWinDisplay(CANVAS_WIDTH + 100, 360, s_oStage);
        r[BET_BANKER] = new CWinDisplay(CANVAS_WIDTH +
            100, 460, s_oStage);
        r[BET_PLAYER] = new CWinDisplay(CANVAS_WIDTH + 100, 580, s_oStage);
        POS_BET[BET_TIE] = {
            x: G.getX(),
            y: G.getY()
        };
        POS_BET[BET_BANKER] = {
            x: v.getX(),
            y: v.getY()
        };
        POS_BET[BET_PLAYER] = {
            x: t.getX(),
            y: t.getY()
        };
        F = [{
            x: 267,
            y: CANVAS_HEIGHT - 26
        }, {
            x: 347,
            y: CANVAS_HEIGHT - 26
        }, {
            x: 427,
            y: CANVAS_HEIGHT - 26
        }, {
            x: 507,
            y: CANVAS_HEIGHT - 26
        }, {
            x: 587,
            y: CANVAS_HEIGHT - 26
        }, {
            x: 667,
            y: CANVAS_HEIGHT - 26
        }, {
            x: 747,
            y: CANVAS_HEIGHT - 26
        }];
        g = [];
        a = s_oGameSettings.getFichesValues();
        for (var H = 0; H < NUM_FICHES; H++){
			u = s_oSpriteLibrary.getSprite("fiche_" + H), g[H] = new CGfxButton(F[H].x, F[H].y, u, s_oStage), g[H].addEventListenerWithParams(ON_MOUSE_UP, this._onFicheClicked, this, [a[H], H]);
		}
        F = s_oSpriteLibrary.getSprite("fiche_highlight");
        B = createBitmap(F);
        B.regX = F.width / 2;
        B.regY = F.height / 2;
        B.x = g[0].getX();
        B.y = g[0].getY();
        s_oStage.addChild(B);
        n = a[0];
        k = 0;
        FICHE_WIDTH = u.width;
        c = 10;
        f = 265;
        J = new CHistory(c, f, s_oStage);
        this.disableButtons();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        p.unload();
        p = null;
        !1 === DISABLE_SOUND_MOBILE && (D.unload(), D = null);
        K && !1 === inIframe() && I.unload();
        q.unload();
        v.unload();
        t.unload();
        G.unload();
        z.unload();
        w.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function(a, g) {
        p.setPosition(e - a, g + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || D.setPosition(m - a, g + l);
        K && !1 === inIframe() && I.setPosition(d - a, b + g);
        J.setPosition(c + a, f)
    };
    this.reset = function() {
        this.disableButtons()
    };
    this.enableBetFiches = function(a) {
        for (var b = 0; b < NUM_FICHES; b++)g[b].enable();
        q.enable();
        a && w.enable();
        G.enable();
        v.enable();
        t.enable()
    };
    this.disableBetFiches = function() {
        for (var a = 0; a < NUM_FICHES; a++)g[a].disable();
        q.disable();
        w.disable();
        G.disable();
        v.disable();
        t.disable()
    };
    this.disableButtons = function() {
        z.disable()
    };
    this.enable = function(a) {
        a ? z.enable() : z.disable()
    };
    this.refreshCredit = function(a) {
        x.text = TEXT_CURRENCY + a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
    };
    this.refreshCardValue = function(a, b) {
        y.text = "" + a;
        C.text = "" + b
    };
    this.displayMsg = function(a, b) {
        A.text = a;
        E.text = b
    };
    this.clearCardValueText = function() {
        y.text = "";
        C.text = ""
    };
    this._onFicheClicked = function(a) {
        this.hideAllWins();
        B.x = g[a[1]].getX();
        B.y = g[a[1]].getY();
        n = a[0];
        k = a[1]
    };
    this.showWin = function(a, b) {
        r[a].show(TEXT_SHOW_WIN[a], b)
    };
    this.hideAllWins = function() {
        for (var a = 0; a < r.length; a++) r[a].hide()
    };
    this.addHistoryRow = function(a, b, c) {
        J.addHistoryRow(a, b, c)
    };
    this._onButTieRelease = function() {
        this.hideAllWins();
        s_oGame.setBet(n, k, BET_TIE)
    };
    this._onButBankerRelease = function() {
        this.hideAllWins();
        s_oGame.setBet(n, k, BET_BANKER)
    };
    this._onButPlayerRelease = function() {
        this.hideAllWins();
        s_oGame.setBet(n, k, BET_PLAYER)
    };
    this._onButClearRelease = function() {
        s_oGame.clearBets()
    };
    this._onButRebetRelease = function() {
        this.hideAllWins();
        w.disable();
        s_oGame.rebet()
    };
    this._onButDealRelease = function() {
        this.disableBetFiches();
        this.disableButtons();
        s_oGame.onDeal()
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (L.call(window.document), s_bFullscreen = !1) : (K.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    s_oInterface =
        this;
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
    var a, d, b, c, f, e, h, m, l, n, k;
    this._init = function() {
        l = new createjs.Container;
        l.x = CANVAS_WIDTH / 2 - 150;
        l.y = 230;
        s_oStage.addChild(l);
        k = [];
        for (var a = 0; 3 > a; a++) k[a] = new CFichesController;
        f = 0;
        this.reset();
        n = new CVector2;
        n.set(0, 0);
        m = new CVector2(n.getX(), n.getY())
    };
    this.unload = function() {
        s_oStage.removeChild(l)
    };
    this.addEventListener = function(a, b, c) {};
    this.reset = function() {
        for (var f = c = b = d = a = 0; f < k.length; f++) k[f].reset();
        e = [];
        for (f = 0; 3 > f; f++) e[f] = []
    };
    this.clearBet = function() {
        b = d = a = 0;
        e = [];
        for (var c =
                0; 3 > c; c++) k[c].reset(), e[c] = []
    };
    this.setCredit = function(a) {
        f = a
    };
    this.increaseCredit = function(a) {
        f += a
    };
    this.bet = function(c, f, e) {
        e = 0;
        switch (f) {
            case BET_TIE:
                e = a += c;
                break;
            case BET_BANKER:
                e = d += c;
                break;
            case BET_PLAYER:
                e = b += c
        }
        k[f].createFichesPile(e, POS_BET[f].x, POS_BET[f].y)
    };
    this.calculatePotentialWins = function() {
        h = [];
        h[BET_TIE] = a * MULTIPLIERS[BET_TIE];
        h[BET_BANKER] = d * MULTIPLIERS[BET_BANKER];
        h[BET_PLAYER] = b * MULTIPLIERS[BET_PLAYER];
        k[0].setPrevValue(a);
        k[1].setPrevValue(d);
        k[2].setPrevValue(b)
    };
    this.decreaseCredit = function(a) {
        f -= a
    };
    this.refreshFiches = function(a, b, c, d, f) {
        e[f].push({
            value: a,
            index: b
        });
        k[f].refreshFiches(e[f], c, d)
    };
    this.initMovement = function(a, b, c) {
        k[a].initMovement(b, c)
    };
    this.newCardDealed = function() {
        c++
    };
    this.rebet = function() {
        for (var c = 0, f = 0; f < k.length; f++) {
            var e = parseFloat(k[f].getPrevBet());
            if (0 < e) {
                c += e;
                this.decreaseCredit(e);
                switch (f) {
                    case BET_TIE:
                        a += e;
                        break;
                    case BET_BANKER:
                        d += e;
                        break;
                    case BET_PLAYER:
                        b += e
                }
                k[f].createFichesPile(e, POS_BET[f].x, POS_BET[f].y)
            }
        }
        return c
    };
    this.checkIfRebetIsPossible = function() {
        for (var a = 0, b = 0; b < k.length; b++) var c = parseFloat(k[b].getPrevBet()),
            a = a + c;
        return a > f ? !1 : !0
    };
    this.updateFichesController = function(a) {
        for (var b = 0; b < k.length; b++) k[b].update(a)
    };
    this.getAttachCardOffset = function() {
        m.set(l.x + n.getX() + CARD_WIDTH / 2 * c, l.y + n.getY());
        return m
    };
    this.getTotBet = function() {
        return a + d + b
    };
    this.getBetArray = function() {
        return [a, d, b]
    };
    this.getCredit = function() {
        return f
    };
    this.getCardOffset = function() {
        return n
    };
    this.getPotentialWin = function(a) {
        return h[a]
    };
    this.getStartingBet = function() {
        for (var a = 0, b = 0; b < k.length; b++) a += k[b].getValue();
        return a
    };
    this._init()
}

function CFichesController() {
    var a, d, b, c, f, e, h, m, l, n, k;
    this._init = function() {
        m = new createjs.Container;
        s_oStage.addChild(m);
        f = new CVector2;
        f.set(m.x, m.y);
        l = new createjs.Container;
        s_oStage.addChild(l);
        k = new createjs.Text("", "28px " + FONT_GAME_1, "#000");
        k.textAlign = "left";
        l.addChild(k);
        n = new createjs.Text("", "28px " + FONT_GAME_1, "#fff");
        n.textAlign = "left";
        l.addChild(n);
        b = c = d = 0;
        a = !1
    };
    this.addEventListener = function(a, b, c) {};
    this.reset = function() {
        a = !1;
        b = 0;
        m.removeAllChildren();
        m.x = f.getX();
        m.y = f.getY();
        k.text =
            "";
        n.text = ""
    };
    this.setPrevValue = function(a) {
        c = a
    };
    this.refreshFiches = function(a, c, d) {
        a = a.sortOn("value", "index");
        for (var f = c, e = d, g = b = 0, h = 0; h < a.length; h++) {
            var l = createBitmap(s_oSpriteLibrary.getSprite("fiche_" + a[h].index));
            l.scaleX = .9;
            l.scaleY = .9;
            m.addChild(l);
            l.x = f;
            l.y = e;
            e -= 5;
            g++;
            9 < g && (g = 0, f += FICHE_WIDTH, e = d);
            b += a[h].value
        }
        playSound("chip", 1, 0);
        n.x = c;
        n.y = d + 40;
        n.text = b.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY;
		n.color = '#000';
        k.text = ''
    };
    this.createFichesPile = function(a, b, c) {
        this.reset();
        var d =
            s_oGameSettings.getFichesValues(),
            f = [];
        do {
            for (var e = d[d.length - 1], g = d.length - 1; e > a;) g--, e = d[g];
            for (var g = Math.floor(a / e), h = 0; h < g; h++) f.push({
                value: e,
                index: s_oGameSettings.getIndexForFiches(e)
            });
            e = Math.floor(a / e) === a / e ? 0 : a % e;
            a = e
        } while (0 < e);
        this.refreshFiches(f, b, c)
    };
    this.initMovement = function(d, f) {
        c = b;
        e = new CVector2(m.x, m.y);
        h = new CVector2(d, f);
        n.text = "";
        k.text = "";
        a = !0
    };
    this.getValue = function() {
        return b
    };
    this.getPrevBet = function() {
        return c
    };
    this.update = function(b) {
        if (a)
            if (d += b, d > TIME_FICHES_MOV) d =
                0, a = !1;
            else {
                b = easeInOutCubic(d, 0, 1, TIME_FICHES_MOV);
                var c = new CVector2,
                    c = tweenVectors(e, h, b, c);
                m.x = c.getX();
                m.y = c.getY()
            }
    };
    this._init()
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
        trace("Vector2: " + b + ", " + c + "")
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
        for (var d = 0; d < NUM_DECKS; d++)
            for (var e = 0; 52 > e; e++) {
                a.push(e);
                var h = (e + 1) % 13;
                if (10 < h || 0 === h) h = 10;
                b.push(h)
            }
        c = [50, 100, 1000, 10000, 100000, 1000000, 10000000]
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
            d, f = c.length - 1,
            l = c[f];
        do {
            d = a % l;
            d = CMath.roundDecimal(d, 1);
            a = Math.floor(a / l);
            for (var n =
                    0; n < a; n++) b.push(l);
            f--;
            l = c[f];
            a = d
        } while (0 < d && -1 < f);
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
        for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
        for (d = []; 0 < b.length;) d.push(b.splice(Math.round(Math.random() * (b.length - 1)), 1)[0]);
        return d
    };
    this.getCardValue = function(a) {
        return b[a]
    };
    this.getCardDeck = function() {
        return a
    };
    this._init()
}
var TYPE_LINEAR = 0,
    TYPE_OUT_CUBIC = 1,
    TYPE_IN_CUBIC = 2,
    TYPE_OUT_BACK = 3,
    TYPE_IN_BACK = 4;

function ease(a, d, b, c, f, e) {
    var h;
    switch (a) {
        case TYPE_LINEAR:
            h = easeLinear(d, b, c, f, e);
            break;
        case TYPE_IN_CUBIC:
            h = easeInCubic(d, b, c, f, e);
            break;
        case TYPE_OUT_CUBIC:
            h = easeOutCubic(d, b, c, f, e);
            break;
        case TYPE_IN_BACK:
            h = easeInBack(d, b, c, f, e);
            break;
        case TYPE_OUT_BACK:
            h = easeInBack(d, b, c, f, e)
    }
    return h
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

function easeInElastic(a, d, b, c, f, e, h) {
    if (0 == a) return d;
    if (1 == (a /= c)) return d + b;
    h || (h = .3 * c);
    !e || e < Math.abs(b) ? (e = b, f = h / 4) : f = h / (2 * Math.PI) * Math.asin(b / e);
    return -(e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / h)) + d
}

function easeOutElastic(a, d, b, c, f, e, h) {
    if (0 == a) return d;
    if (1 == (a /= c)) return d + b;
    h || (h = .3 * c);
    !e || e < Math.abs(b) ? (e = b, f = h / 4) : f = h / (2 * Math.PI) * Math.asin(b / e);
    return e * Math.pow(2, -10 * a) * Math.sin(2 * (a * c - f) * Math.PI / h) + b + d
}

function easeInOutElastic(a, d, b, c, f, e, h) {
    if (0 == a) return d;
    if (1 == (a /= c)) return d + b;
    h || (h = .3 * c);
    !e || e < Math.abs(b) ? (e = b, f = h / 4) : f = h / (2 * Math.PI) * Math.asin(b / e);
    return 1 > a ? -.5 * e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / h) + d : e * Math.pow(2, -10 * --a) * Math.sin(2 * (a * c - f) * Math.PI / h) * .5 + b + d
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

function CCard(a, d, b) {
    var c, f, e = -1,
        h, m, l, n, k, g, r, p, q, w;
    this._init = function(a, b, c) {
        w = c;
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
        q = createSprite(c,
            "back", CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
        q.x = a;
        q.y = b;
        q.rotation = 120;
        q.stop();
        w.addChild(q);
        r = [];
        p = []
    };
    this.unload = function() {
        g = k = null;
        w.removeChild(q)
    };
    this.addEventListener = function(a, b, c) {
        r[a] = b;
        p[a] = c
    };
    this.setInfo = function(a, b, d, p, q, r) {
        f = !1;
        n = 0;
        h = d;
        m = p;
        k = a;
        g = b;
        l = r;
        c = q;
        e = STATE_CARD_DEALING
    };
    this.removeFromTable = function() {
        r[ON_CARD_TO_REMOVE] && r[ON_CARD_TO_REMOVE].call(p[ON_CARD_TO_REMOVE], this)
    };
    this.initRemoving = function(a) {
        k = new CVector2(q.x, q.y);
        g = a;
        n = 0;
        e = STATE_CARD_REMOVING
    };
    this.setValue = function() {
        q.gotoAndStop(h);
        var a = this;
        createjs.Tween.get(q).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardShown()
        })
    };
    this.showCard = function() {
        var a = this;
        createjs.Tween.get(q).to({
            scaleX: .1
        }, 100).call(function() {
            a.setValue()
        })
    };
    this.hideCard = function() {
        var a = this;
        createjs.Tween.get(q).to({
            scaleX: .1
        }, 100).call(function() {
            a.setBack()
        })
    };
    this.setBack = function() {
        q.gotoAndStop("back");
        var a = this;
        createjs.Tween.get(q).to({
            scaleX: 1
        }, 100).call(function() {
            a.cardHidden()
        })
    };
    this.cardShown = function() {
        r[ON_CARD_SHOWN] &&
            r[ON_CARD_SHOWN].call(p[ON_CARD_SHOWN])
    };
    this.cardHidden = function() {
        f = !0
    };
    this.getValue = function() {
        return m
    };
    this.getFotogram = function() {
        return h
    };
    this._updateDealing = function() {
        n += s_iTimeElaps;
        if (n > TIME_CARD_DEALING) e = -1, n = 0, q.x = g.getX(), q.y = g.getY(), q.rotation = 360, r[ON_CARD_ANIMATION_ENDING] && r[ON_CARD_ANIMATION_ENDING].call(p[ON_CARD_ANIMATION_ENDING], this, c, l), this.showCard();
        else {
            this.visible = !0;
            var a = easeInOutCubic(n, 0, 1, TIME_CARD_DEALING),
                b = new CVector2,
                b = tweenVectors(k, g, a, b);
            q.x = b.getX();
            q.y = b.getY();
            q.rotation = 120 + 24E3 * a / 100
        }
    };
    this._updateRemoving = function() {
        n += s_iTimeElaps;
        if (n > TIME_CARD_REMOVE) n = 0, f = q.visible = !1, e = -1, r[ON_CARD_TO_REMOVE] && r[ON_CARD_TO_REMOVE].call(p[ON_CARD_TO_REMOVE], this);
        else {
            var a = easeInOutCubic(n, 0, 1, TIME_CARD_REMOVE),
                b = new CVector2,
                b = tweenVectors(k, g, a, b);
            q.x = b.getX();
            q.y = b.getY();
            q.rotation = 4500 * a / 100
        }
    };
    this.update = function() {
        switch (e) {
            case STATE_CARD_DEALING:
                this._updateDealing();
                break;
            case STATE_CARD_REMOVING:
                !0 === f && this._updateRemoving()
        }
    };
    s_oCard = this;
    this._init(a, d, b)
}
var s_oCard;

function CGameOver() {
    var a, d, b, c;
    this._init = function() {
        c = new createjs.Container;
        s_oStage.addChild(c);
        c.on("click", function() {});
        var f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        c.addChild(f);
        a = new createjs.Text(TEXT_NO_MONEY, "32px " + FONT_GAME_1, "#fff");
        a.textAlign = "center";
        a.x = CANVAS_WIDTH / 2;
        a.y = 290;
        a.lineWidth = 300;
        a.shadow = new createjs.Shadow("#000000", 2, 2, 2);
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
        c.visible = !0
    };
    this.hide = function() {
        c.visible = !1
    };
    this._onRecharge = function() {
        $(s_oMain).trigger("recharge")
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._init()
}

function CWinDisplay(a, d, b) {
    var c, f, e, h, m;
    this._init = function(a, b) {
        c = a;
        h = new createjs.Container;
        h.visible = !1;
        h.x = a;
        h.y = b;
        m.addChild(h);
        var d = s_oSpriteLibrary.getSprite("win_bg"),
            g = createBitmap(d);
        h.addChild(g);
        f = new createjs.Text("", "23px " + FONT_GAME_1, "#fff");
        f.x = d.width / 2;
        f.y = d.height / 2 - 20;
        f.textAlign = "center";
        f.textBaseline = "middle";
        h.addChild(f);
        e = new createjs.Text("", "29px " + FONT_GAME_1, "#fff");
        e.x = d.width / 2;
        e.y = d.height / 2 + 22;
        e.textAlign = "center";
        e.textBaseline = "middle";
        h.addChild(e)
    };
    this.show =
        function(a, b) {
            f.text = a;
            0 < b ? (e.color = "#07a74f", e.text = b.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + TEXT_CURRENCY) : (e.color = "#ce0909", e.text = '0' + TEXT_CURRENCY);
            h.visible = !0;
            createjs.Tween.get(h).to({
                x: CANVAS_WIDTH / 2 + 100
            }, 400, createjs.Ease.cubicOut)
        };
    this.hide = function() {
        createjs.Tween.get(h).to({
            x: c
        }, 400, createjs.Ease.cubicOut).call(function() {
            h.visible = !1
        })
    };
    m = b;
    this._init(a, d)
}

function CHistory(a, d, b) {
    var c, f, e, h, m, l, n, k, g, r, p, q;
    this._init = function(a, b) {
        k = s_oSpriteLibrary.getSprite("history_cell");
        r = new createjs.Container;
        r.x = a;
        r.y = b;
        q.addChild(r);
        l = createBitmap(s_oSpriteLibrary.getSprite("history_bg"));
        l.alpha = 0;
        r.addChild(l);
        p = new createjs.Container;
        p.x = 5;
        p.y = 5;
        r.addChild(p);
        h = 7 * k.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(p.x, p.y, k.width, h);
        r.addChild(g);
        p.mask = g;
        n = createBitmap(s_oSpriteLibrary.getSprite("history_highlight"));
        n.alpha =
            0;
        n.x = 5;
        n.y = 5;
        r.addChild(n);
        m = []
    };
    this.addHistoryRow = function(a, b, d) {
        c = a;
        f = b;
        e = d;
        if (0 < m.length)
            for (a = 0; a < m.length; a++) m[a].moveDown(this);
        else createjs.Tween.get(l).to({
            alpha: 1
        }, 400, createjs.Ease.cubicOut), createjs.Tween.get(n).to({
            alpha: 1
        }, 400, createjs.Ease.cubicOut), a = new CHistoryRow(0, 0, c, f, e, k, p), m.push(a)
    };
    this._showNextRow = function(a) {
        a === m[0] && (0 < m.length && m[0].getY() >= h && (m[0].unload(), m.splice(0, 1)), a = new CHistoryRow(0, 0, c, f, e, k, p), m.push(a))
    };
    this.setPosition = function(a, b) {
        r.x = a;
        r.y = b
    };
    q = b;
    this._init(a, d)
}

function CHistoryRow(a, d, b, c, f, e, h) {
    var m, l, n, k;
    this._init = function(a, b, c, d, e) {
        m = e.height;
        l = new createjs.Container;
        l.alpha = 0;
        l.x = a;
        l.y = b;
        n.addChild(l);
        b = new createjs.SpriteSheet({
            images: [e],
            frames: {
                width: e.width / 2,
                height: e.height
            },
            animations: {
                state_lose: [0],
                state_win: [1]
            }
        });
        a = [];
        a[0] = createSprite(b, "state_lose", 0, 0, e.width / 2, e.height);
        l.addChild(a[0]);
        a[1] = createSprite(b, "state_lose", 0, 0, e.width / 2, e.height);
        a[1].x = e.width / 2;
        l.addChild(a[1]);
        0 < f && a[f - 1].gotoAndStop("state_win");
        c = new createjs.Text(c,
            "24px " + FONT_GAME_1, "#fff");
        c.x = a[0].x + e.width / 4;
        c.y = a[0].y + e.height / 2;
        c.textAlign = "center";
        c.textBaseline = "middle";
        l.addChild(c);
        d = new createjs.Text(d, "24px " + FONT_GAME_1, "#fff");
        d.x = a[1].x + e.width / 4;
        d.y = a[1].y + e.height / 2;
        d.textAlign = "center";
        d.textBaseline = "middle";
        l.addChild(d);
        createjs.Tween.get(l).to({
            alpha: 1
        }, 400, createjs.Ease.cubicOut)
    };
    this.unload = function() {
        n.removeChild(l)
    };
    this.moveDown = function(a) {
        var b = l.y + m;
        createjs.Tween.get(l).to({
            y: b
        }, 400, createjs.Ease.cubicOut).call(function() {
            a._showNextRow(k)
        })
    };
    this.getY = function() {
        return l.y
    };
    k = this;
    n = h;
    this._init(a, d, b, c, e)
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
        c.visible = !1;
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
        c.visible = !0;
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
        c.visible && (c.off("mousedown"), c.visible = !1)
    };
    this._init();
    return this
};