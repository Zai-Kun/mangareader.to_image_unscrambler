function baseRange(jhalani, aonesty, quana, shadarius) {
  var saren = -1;
  var dayson = Math.max(Math.ceil((aonesty - jhalani) / (quana || 1)), 0);
  const vickie = new Array(dayson);
  for (; dayson--;) {
    vickie[shadarius ? dayson : ++saren] = jhalani;
    jhalani += quana;
  }
  return vickie;
}
function toFinite(darlene) {
  return darlene ? (darlene = toNumber(darlene)) !== Infinity && darlene !== -Infinity ? darlene == darlene ? darlene : 0 : 1.7976931348623157e308 * (darlene < 0 ? -1 : 1) : 0 === darlene ? darlene : 0;
}
function toNumber(gil) {
  if ("number" == typeof gil) {
    return gil;
  }
  if (isSymbol(gil)) {
    return NaN;
  }
  if ("string" != typeof (gil = isObject(gil) ? isObject(merta = "function" == typeof gil.valueOf ? gil.valueOf() : gil) ? "" + merta : merta : gil)) {
    return 0 === gil ? gil : +gil;
  }
  gil = gil.replace(/^\s+|\s+$/g, "");
  var merta = /^0b[01]+$/i.test(gil);
  return merta || /^0o[0-7]+$/i.test(gil) ? parseInt(gil.slice(2), merta ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(gil) ? NaN : +gil;
}
function isObject(hu) {
  var quaashie = typeof hu;
  return null != hu && ("object" == quaashie || "function" == quaashie);
}
function isSymbol(farrie) {
  var ilea = typeof farrie;
  return "symbol" == ilea || "object" == ilea && null != farrie && "[object Symbol]" == getTag(farrie);
}
function createRange(fitzpatrick, nyzere, shuvonne) {
  fitzpatrick = toFinite(fitzpatrick);
  if (undefined === nyzere) {
    nyzere = fitzpatrick;
    fitzpatrick = 0;
  } else {
    nyzere = toFinite(nyzere);
  }
  return baseRange(fitzpatrick, nyzere, shuvonne = undefined === shuvonne ? fitzpatrick < nyzere ? 1 : -1 : toFinite(shuvonne), false);
}
function getColsInGroup(angelray) {
  if (1 === angelray.length) {
    return 1;
  }
  var kamarrah;
  for (var pallie = 0; pallie < angelray.length; pallie++) {
    if ((kamarrah = undefined === kamarrah ? angelray[pallie].y : kamarrah) !== angelray[pallie].y) {
      return pallie;
    }
  }
  return pallie;
}
function getGroup(keagon) {
  const margarine = {slices: keagon.length, cols: getColsInGroup(keagon)};
  margarine.rows = keagon.length / margarine.cols;
  margarine.x = keagon[0].x;
  margarine.y = keagon[0].y;
  return margarine;
}
function extractSeed(josiel) {
  return !/(number|string)/i.test(Object.prototype.toString.call(josiel).match(/^\[object (.*)\]$/)[1]) && isNaN(josiel) ? Number(String(this.strSeed = josiel).split("").map(function (maaya) {
    return maaya.charCodeAt(0);
  }).join("")) : josiel;
}
function unShuffle(altouise, laniah) {
  if (!Array.isArray(altouise)) {
    return null;
  }
  if (Math.seedrandom) {
    seedrandom = Math.seedrandom;
  }
  laniah = extractSeed(laniah) || "none";
  var delrico = altouise.length;
  var lataja = seedrandom(laniah);
  const trayven = [];
  const tyzion = [];
  for (var graceanne = 0; graceanne < delrico; graceanne++) {
    trayven.push(null);
    tyzion.push(graceanne);
  }
  for (graceanne = 0; graceanne < delrico; graceanne++) {
    var humphrey = Math.floor(lataja() * (tyzion.length - 1 - 0 + 1)) + 0;
    var johntavia = tyzion[humphrey];
    tyzion.splice(humphrey, 1);
    trayven[johntavia] = altouise[graceanne];
  }
  return trayven;
}

function mertle(inputArray) {
    var inputLength = inputArray.length;
    var context = this;
    var currentIndex = context.i = context.j = 0;
    var stateArray = context.S = [];
    
    for (let i = 0; i < 256; i++) {
        stateArray[i] = i;
    }

    for (let i = 0; i < 256; i++) {
        currentIndex = (currentIndex + stateArray[i] + inputArray[i % inputLength]) % 256;
        [stateArray[i], stateArray[currentIndex]] = [stateArray[currentIndex], stateArray[i]];
    }

    (context.g = function(generateCount) {
        var currentByte;
        var outputNumber = 0;
        var jIndex = context.i;
        var kIndex = context.j;

        for (var stateArrayReference = context.S; generateCount--;) {
            jIndex = 255 & jIndex + 1
            currentByte = stateArrayReference[jIndex];
            kIndex = 255 & kIndex + currentByte
            outputNumber = outputNumber * 256

            let a = stateArrayReference[jIndex] = stateArrayReference[kIndex]
            let b = stateArrayReference[kIndex] = currentByte
            outputNumber += stateArrayReference[255 & a + b];
        }

        context.i = jIndex;
        context.j = kIndex;
        return outputNumber;
    })(256);
}

function airelle(geraldyne) {
    function rahsheen() {
        let buruk = rhonan.g(6);
        let taleiah = 281474976710656;
        let amberlynn = 0;

        while (buruk < 4503599627370496) {
            buruk = (buruk + amberlynn) * 256;
            taleiah *= 256;
            amberlynn = rhonan.g(1);
        }
        while ((4503599627370496*2) <= buruk) {
            buruk /= 2;
            taleiah /= 2;
            amberlynn >>>= 1;
        }
        return (buruk + amberlynn) / taleiah;
    }

    const rhonan = new mertle([115, 116, 97, 121]);
    return rahsheen
}


Math.seedrandom = airelle;

const parseParams = jaysean => {
  const radiance = new URLSearchParams(jaysean);
  var jaysean = Object.fromEntries(radiance.entries());
  var wilkens = [];
  Object.keys(jaysean).forEach(tata => {
    var fiore;
    var kadynn = radiance.get(tata);
    if (tata.includes("?")) {
      if (fiore = tata.split("?")[1]) {
        wilkens.push([fiore, kadynn]);
      }
    } else {
      wilkens.push([tata, kadynn]);
    }
  });
  return wilkens;
};
function imgReverser(url, tileSize = 200, shuffleType = "stay") {

  return new Promise((resolve, reject) => {
    const canvas = document.createElement("CANVAS");
    const context = canvas.getContext("2d");
    let attemptCount = 0;
    const image = new Image();
    image.crossOrigin = "Anonymous";
    
    image.onload = function () {
        if (url == "https://c-1.mreadercdn.com/_v2/0/0dcb8f9eaacfd940603bd75c7c152919c72e45517dcfb1087df215e3be94206cfdf45f64815888ea0749af4c0ae5636fabea0abab8c2e938ab3ad7367e9bfa52/46/54/4654a02fcef4fd7375c04263cbb66a67/4654a02fcef4fd7375c04263cbb66a67_1600.jpeg?t=515363393022bbd440b0b7d9918f291a&ttl=1908547557"){
            console.log(url);
        }
      const totalTiles = Math.ceil(image.width / tileSize) * Math.ceil(image.height / tileSize);
      canvas.width = image.width;
      canvas.height = image.height;
      const tilesPerRow = Math.ceil(image.width / tileSize);
      const tiles = [];

      // Creating tiles with position and dimensions
      for (let i = 0; i < totalTiles; i++) {
        const row = parseInt(i / tilesPerRow);
        const tile = {
          x: (i - row * tilesPerRow) * tileSize,
          y: row * tileSize
        };
        tile.width = tileSize - (tile.x + tileSize <= image.width ? 0 : tile.x + tileSize - image.width);
        tile.height = tileSize - (tile.y + tileSize <= image.height ? 0 : tile.y + tileSize - image.height);
        
        const key = `${tile.width}-${tile.height}`;
        if (!tiles[key]) tiles[key] = [];
        tiles[key].push(tile);
      }

      for (const tileKey in tiles) {
        const shuffledIndices = unShuffle(createRange(0, tiles[tileKey].length), shuffleType);
        const grid = getGroup(tiles[tileKey]);

        for (const [index, tile] of tiles[tileKey].entries()) {
          const shuffledIndex = shuffledIndices[index];
          const targetRow = parseInt(shuffledIndex / grid.cols);
          const targetX = (shuffledIndex - targetRow * grid.cols) * tile.width;
          const targetY = targetRow * tile.height;

          context.drawImage(
            image,
            grid.x + targetX,
            grid.y + targetY,
            tile.width,
            tile.height,
            tile.x,
            tile.y,
            tile.width,
            tile.height
          );
        }
      }
      resolve(canvas);
    };

    // Retry on error, appending version query parameter
    image.onerror = function () {
      if (attemptCount >= 5) {
        image.onerror = null;
        return resolve(null);
      }

      let newUrl = url;
      const urlParams = parseParams(url);

      if (urlParams && urlParams.length > 0) {
        for (const param of urlParams) {
          if (!(newUrl.includes(`${param[0]}=${param[1]}`) || param[0].toString().includes("http"))) {
            newUrl += newUrl.includes("?") ? "&" : "?";
            newUrl += `${param[0]}=${param[1]}`;
          }
        }
      }

      const timestamp = Math.round(Date.now() / 1000);
      image.src = `${newUrl}${newUrl.includes("?") ? "&" : "?"}v=${timestamp}`;
      attemptCount++;
    };

    image.src = url;
  });
}
var settings = {readingMode: null, readingDirection: "rtl", quality: "medium", hozPageSize: 1};
const currentUrl = new URL(window.location.href);
const wWidth = 0 < window.innerWidth ? window.innerWidth : screen.width;
function initSettings() {
  if (Cookies.get("mr_settings") || localStorage.getItem("settings")) {
    settings = Cookies.get("mr_settings") || localStorage.getItem("settings");
    if (undefined === (settings = JSON.parse(settings)).hozPageSize) {
      settings.hozPageSize = 1;
    }
  } else {
    saveSettings();
  }
  processingSettings();
}
function processingSettings() {
  settings.hozPageSize = parseInt(settings.hozPageSize);
  settings.hozPageSize = wWidth <= 860 ? 1 : settings.hozPageSize;
}
function saveSettings() {
  settings.hozPageSize = parseInt(settings.hozPageSize);
  $(".read_tool").removeClass("active");
  if (isLoggedIn) {
    $.post("/ajax/user/settings", {settings: settings}, function (haydn) {});
  }
  localStorage.setItem("settings", JSON.stringify(settings));
  Cookies.set("mr_settings", JSON.stringify(settings), {path: "/", expires: 365});
}
setTimeout(function () {
  if (!Cookies.get("mr_viewed_" + mangaId)) {
    $.post("/ajax/manga/count-view/" + mangaId, function (carys) {
      Cookies.set("mr_viewed_" + mangaId, true, {expires: new Date((new Date).getTime() + 36e5)});
    });
  }
}, 2e4);
initSettings();
var hozElImageNext;
var readingBy = $("#wrapper").data("reading-by") || "chap";
var continueReading = null;
var firstLoad = true;
var currentImageIndex = 0;
var oldImageIndex = 0;
var totalImage = 0;
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var gesturesZone = document.getElementById("images-content");
function handleGestures() {
  var alleena = touchendX - touchstartX;
  var annajulia = touchendY - touchstartY;
  if (Math.abs(alleena) > Math.abs(annajulia)) {
    (0 < alleena ? hozPrevImage : hozNextImage)();
  } else if (Math.abs(alleena) < Math.abs(annajulia)) {
    if (0 < annajulia) {
      console.log("swipe down");
    } else {
      console.log("swipe up");
    }
  } else {
    console.log("tap");
  }
}
gesturesZone.addEventListener("touchstart", function (vu) {
  touchstartX = vu.touches[0].clientX;
  touchstartY = vu.touches[0].clientY;
}, false);
gesturesZone.addEventListener("touchend", function (jabon) {
  touchendX = jabon.changedTouches[0].clientX;
  touchendY = jabon.changedTouches[0].clientY;
}, false);
window.addEventListener("contextmenu", function (erieanna) {
  erieanna.preventDefault();
}, false);
window.addEventListener("dragstart", function (carmelite) {
  carmelite.preventDefault();
}, false);
window.addEventListener("resize", function () {
  if ("horizontal" === settings.readingMode) {
    document.getElementById("main-wrapper").style.height = window.innerHeight + "px";
  }
});
window.addEventListener("orientationchange", function (grecia) {
  if ("horizontal" === settings.readingMode) {
    document.getElementById("main-wrapper").style.height = window.innerHeight + "px";
  }
});
document.addEventListener("keyup", function (rickeeta) {
  switch (rickeeta.keyCode) {
    case 39:
      ("ltr" === settings.readingDirection ? hozNextImage : hozPrevImage)();
      break;
    case 37:
      ("ltr" === settings.readingDirection ? hozPrevImage : hozNextImage)();
  }
});
var curScroll;
var doc = document.documentElement;
var prevScroll = window.scrollY || doc.scrollTop;
var direction = null;
var prevDirection = null;
var header = document.getElementById("wrapper");
function handleVerticalScroll() {
  $(".iv-card").each(function () {
    var harleen = $(".iv-card").index(this);
    if (isInViewport(this) && harleen !== currentImageIndex) {
      currentImageIndex = harleen;
      verShowImage();
    }
  });
  curScroll = window.scrollY || doc.scrollTop;
  direction = prevScroll < curScroll ? "down" : "up";
  prevScroll = curScroll;
  if (direction !== prevDirection) {
    if ("down" === direction && 52 < curScroll) {
      header.classList.add("top-hide");
      prevDirection = direction;
    } else if ("up" === direction) {
      header.classList.remove("top-hide");
      prevDirection = direction;
    }
  }
}
function hozShowImage() {
  if (totalImage - (currentImageIndex + 1) == 0) {
    if (0 === $(".reading-item.active").prev().length) {
      $(".hoz-next").addClass("disabled");
      $(".hoz-next-hide").hide();
    }
  } else {
    $(".hoz-next").removeClass("disabled");
    $(".hoz-next-hide").show();
  }
  if (0 === currentImageIndex) {
    if (0 === $(".reading-item.active").next().length) {
      $(".hoz-prev").addClass("disabled");
      $(".hoz-prev-hide").hide();
    }
  } else {
    $(".hoz-prev").removeClass("disabled");
    $(".hoz-prev-hide").show();
  }
  if (2 === settings.hozPageSize) {
    const rahiem = $($(".ds-image").get(currentImageIndex)).parent();
    $(".ds-item").removeClass("active");
    $(".ds-item").hide();
    rahiem.addClass("active");
    rahiem.show();
    var esteve;
    var shaddix = (currentImageIndex + 1).toString().padStart(totalImage.toString().length, "0");
    if (1 < rahiem.find(".ds-image").length) {
      esteve = (currentImageIndex + 2).toString().padStart(totalImage.toString().length, "0");
      if (currentImageIndex < totalImage - 2) {
        $(".hoz-current-index").text(shaddix + " - " + esteve);
      } else {
        $(".hoz-current-index").text(shaddix);
      }
    } else {
      $(".hoz-current-index").text(shaddix);
    }
  } else {
    var melma = document.getElementsByClassName("ds-item").item(currentImageIndex);
    $(".ds-item").removeClass("active");
    $(".ds-item").hide();
    $(melma).addClass("active");
    $(melma).show();
    $(".hoz-current-index").text((currentImageIndex + 1).toString().padStart(totalImage.toString().length, "0"));
  }
  if (currentImageIndex < totalImage - 1) {
    for (var lancing = currentImageIndex; lancing <= currentImageIndex + 4 + settings.hozPageSize; lancing++) {
      if (lancing < totalImage - 1) {
        hozProcessingImage(lancing);
      }
    }
    for (lancing = 4 < totalImage - 2 ? 4 : totalImage - 2; 0 < lancing; lancing--) {
      var agim = currentImageIndex - lancing;
      hozProcessingImage(0 <= agim ? agim : lancing);
    }
  }
}
function verShowImage() {
  if (currentImageIndex <= totalImage - 1) {
    for (var alp = currentImageIndex; alp <= currentImageIndex + 4; alp++) {
      if (alp <= totalImage - 1) {
        verProcessingImage(alp);
      }
    }
    for (alp = 4 < totalImage - 1 ? 4 : totalImage - 1; 0 < alp; alp--) {
      var damarte = currentImageIndex - alp;
      verProcessingImage(0 <= damarte ? damarte : alp);
    }
  }
}
function hozProcessingImage(liviah) {
  const jolisa = document.getElementsByClassName("ds-image").item(liviah);
  if (jolisa && !jolisa.classList.contains("loaded")) {
    jolisa.classList.add("loaded");
    createImageElement(jolisa, $(jolisa).data("url"), "image-horizontal");
  }
}
function verProcessingImage(johannes) {
  johannes = document.getElementsByClassName("iv-card").item(johannes);
  if (johannes && !johannes.classList.contains("loaded")) {
    johannes.classList.add("loaded");
    createImageElement(johannes, $(johannes).data("url"), "image-vertical");
  }
}
function hozNextImage() {
  if (currentImageIndex < totalImage - 1) {
    const stephenson = $($(".ds-image").get(currentImageIndex)).parent();
    currentImageIndex += stephenson.is(":last-child") ? settings.hozPageSize : stephenson.find(".ds-image").length;
    hozShowImage();
  } else {
    nextChapterVolume();
  }
}
function hozPrevImage() {
  if (0 < currentImageIndex) {
    const keyren = $($(".ds-image").get(currentImageIndex)).parent().prev();
    currentImageIndex -= keyren.is(":last-child") ? settings.hozPageSize : keyren.find(".ds-image").length;
    hozShowImage();
  } else {
    prevChapterVolume();
  }
}
function activeSettings() {
  if (settings.readingMode) {
    if ("vertical" === settings.readingMode) {
      $("body").addClass("page-reader-ver");
    } else {
      $("body").removeClass("page-reader-ver");
    }
    $(".hr-setting").show();
    $(".mode-item[data-value=" + settings.readingMode + "]").addClass("active");
    $("#current-mode").text(settings.readingMode.charAt(0).toUpperCase() + settings.readingMode.slice(1));
  } else {
    $("#first-read").show();
  }
  $(".direction-item[data-value=" + settings.readingDirection + "]").addClass("active");
  $("#current-direction").text($(".direction-item.active").text());
  $(".quality-item[data-value=" + settings.quality + "]").addClass("active");
  $("#current-quality").text($(".quality-item.active").text());
}
function resetWhenChangeChapVol() {
  if ("vertical" === settings.readingMode) {
    $(window).scrollTo("#main-wrapper .iv-card:eq(0)", {duration: 200});
  }
  currentImageIndex = 0;
}
function nextChapterVolume() {
  resetWhenChangeChapVol();
  var maili = $(".reading-item.active").prev();
  if (0 < maili.length) {
    maili.click();
  }
}
function prevChapterVolume() {
  resetWhenChangeChapVol();
  var jaywanna = $(".reading-item.active").next();
  if (0 < jaywanna.length) {
    jaywanna.click();
  }
}
$(document).ready(function () {
  readingListInfo("read");
  $(document).on("click", "#vertical-content", function (naela) {
    $("html, body").animate({scrollTop: $(window).scrollTop() + 250}, 500);
  });
  $(".im-toggle").click(function (lidwina) {
    $(".c_b-list").toggleClass("active");
  });
  $(".ad-toggle").click(function (johnie) {
    $(".page-reader").toggleClass("pr-full");
  });
  $(".read-tips-follow").click(function (laquanya) {
    $(this).hide();
  });
  $(".item-hide").click(function (sequila) {
    $(".read-tips-keyboard").addClass("rtk-hide");
  });
  $(".kb-icon").click(function (jill) {
    $(".read-tips-keyboard").removeClass("rtk-hide");
  });
  $(".rc-close").click(function (davelle) {
    $("body").removeClass("show-comment");
  });
  $(".hr-setting, #rt-close").click(function (aairah) {
    $(".read_tool").toggleClass("active");
  });
  $(".hr-comment, .comment-bottom-button .btn").click(function (khadir) {
    $("body").toggleClass("show-comment");
  });
});
$(document).on("shown.bs.dropdown", "#dropdown-chapters,#dropdown-volumes", function () {
  $(this).find(".search-reading-item").focus();
  $(".reading-item.active").parent().scrollTo(".reading-item.active", {duration: 300});
});
$(document).on("click", ".mode-item", function (kasimu) {
  settings.readingMode = $(this).data("value");
  if ("vertical" === settings.readingMode) {
    $("body").addClass("page-reader-ver");
  } else {
    window.removeEventListener("scroll", handleVerticalScroll);
    $("body").removeClass("page-reader-ver");
  }
  $(".hr-setting").show();
  $(".mode-item").removeClass("active");
  $(this).addClass("active");
  $("#current-mode").text(settings.readingMode.charAt(0).toUpperCase() + settings.readingMode.slice(1));
  saveSettings();
  getImages();
});
$(document).on("click", ".quality-item", function (fenley) {
  settings.quality = $(this).data("value");
  $(".quality-item").removeClass("active");
  $(this).addClass("active");
  $("#current-quality").text($(this).text());
  saveSettings();
  getImages();
});
$(document).on("click", ".direction-item", function (tarl) {
  settings.readingDirection = $(this).data("value");
  $(".direction-item").removeClass("active");
  $(this).addClass("active");
  $("#current-direction").text($(this).text());
  $(".hoz-controls").hide();
  $(".hoz-controls-" + settings.readingDirection).show();
  $("#hoz-btn-next").removeClass("ltr");
  $("#hoz-btn-next").removeClass("rtl");
  $("#hoz-btn-next").addClass(settings.readingDirection);
  saveSettings();
});
$(document).on("click", ".reading-item", function (marreo) {
  marreo.preventDefault();
  $(".reading-item").removeClass("active");
  $(this).addClass("active");
  if (firstLoad) {
    firstLoad = false;
    history.pushState({}, "", $(this).find("a").attr("href") + currentUrl.search);
  } else {
    history.pushState({}, "", $(this).find("a").attr("href"));
  }
  $("#current-chapter").text($(this).find("a").data("shortname"));
  readingId = $(this).data("id");
  if (1 === parseInt($(this).data("reading-mode"))) {
    settings.readingMode = "vertical";
  }
  const aliaa = $(this).prev();
  const quadell = JSON.parse($("#syncData").text().trim());
  if ("chap" === readingBy) {
    quadell.chapter = $(this).data("number");
    if (0 < aliaa.length) {
      quadell.next_chapter_url = quadell.base_url + aliaa.find(".item-link").attr("href");
    } else {
      quadell.next_chapter_url = "";
    }
    delete quadell.volume;
    delete quadell.next_volume_url;
  } else {
    quadell.volume = $(this).data("number");
    if (0 < aliaa.length) {
      quadell.next_volume_url = quadell.base_url + aliaa.find(".item-link").attr("href");
    } else {
      quadell.next_volume_url = "";
    }
    delete quadell.chapter;
    delete quadell.next_chapter_url;
  }
  $("#syncData").text(JSON.stringify(quadell));
  getImages();
});
$(document).on("click", ".lang-item", function (tylis) {
  langCode = $(this).data("code");
  var juliemarie = $(".reading-item.active");
  if (0 < juliemarie.length) {
    (0 < (juliemarie = $('.reading-list.active .reading-item[data-number="' + juliemarie.data("number") + '"]')).length ? juliemarie : $(".reading-list.active .reading-item").last()).click();
  }
});
$(document).on("click", ".nf-item", function () {
  $(".nf-item").removeClass("active");
  $(this).addClass("active");
  settings.hozPageSize = $(this).hasClass("nf-double") ? 2 : 1;
  saveSettings();
  getImages();
});
$(".select-reading-by").click(function () {
  readingId = null;
  if (0 === $(".lang-item[data-code=" + langCode + "]").length) {
    langCode = $(".lang-item").first().data("code");
  }
  readingBy = $(this).data("value");
  changeReadingBy();
  getChaptersOrVolumes();
});
var readingId = $("#wrapper").data("reading-id") || null;
var langCode = $("#wrapper").data("lang-code") || null;
function getContinueReadingFromStorage() {
  try {
    var myeasha = localStorage.getItem("mr_reading_" + mangaId);
    if (myeasha) {
      myeasha = JSON.parse(myeasha);
      if (readingBy) {
        const elner = "chap" === readingBy ? 1 : 2;
        var kylierae = myeasha.findIndex(antionna => antionna.type === elner);
        return 0 <= kylierae ? myeasha[kylierae] : null;
      }
      return (myeasha = myeasha.sort(compareValues("updated_at", "desc")))[0];
    }
  } catch (adaleah) {}
  return null;
}
function getChaptersOrVolumes() {
  continueReading = getContinueReadingFromStorage();
  if (null === readingId && continueReading) {
    readingBy = 1 === continueReading.type ? "chap" : "vol";
  }
  $.get("/ajax/manga/reading-list/" + mangaId + "?readingBy=" + readingBy, function (trippton) {
    if (trippton) {
      $("#reading-list").html(trippton.html);
      if (trippton.settings) {
        settings = Object.assign(settings, trippton.settings);
        processingSettings();
      }
      if (trippton.continueReading) {
        continueReading = trippton.continueReading;
      }
      if (null === readingId) {
        if (continueReading) {
          readingId = continueReading.reading_id;
          langCode = continueReading.lang_code;
        } else {
          if ("" === readingBy) {
            readingBy = $(".select-reading-by").first().data("value");
          }
          if (null === langCode) {
            langCode = 0 < $(".lang-item[data-code=en]").length ? "en" : $(".lang-item").first().data("code");
          }
        }
      }
      changeReadingBy();
      $(".hr-navigation").show();
      $(".lang-item[data-code=" + langCode + "]").click();
      (0 < (trippton = $(".reading-list.active .reading-item[data-id=" + readingId + "]")).length ? trippton : $(".reading-list.active .reading-item").last()).click();
      activeSettings();
    }
  });
}
function changeReadingBy() {
  var shao;
  if (readingBy && 0 < readingBy.length) {
    shao = $(".select-reading-by[data-value=" + readingBy + "]");
    $(".select-reading-by").removeClass("active");
    shao.addClass("active");
    $("#reading-by").text(shao.text());
  }
}
function getImages() {
  if (settings.readingMode && readingId) {
    $.get("/ajax/image/list/" + readingBy + "/" + readingId + "?mode=" + settings.readingMode + "&quality=" + settings.quality + "&hozPageSize=" + settings.hozPageSize, function (diora) {
      if (diora) {
        $("#images-content").html(diora.html);
        if (continueReading && continueReading.reading_id === parseInt(readingId)) {
          currentImageIndex = parseInt(continueReading.image_number);
        }
        if ("horizontal" === settings.readingMode) {
          if (0 < currentImageIndex) {
            diora = $($(".ds-image").get(currentImageIndex)).parent();
            currentImageIndex = $(".ds-image").index(diora.find(".ds-image").first());
          }
          if ((totalImage = $(".ds-image").length) <= currentImageIndex) {
            currentImageIndex = totalImage - settings.hozPageSize;
          }
          $(".hoz-total-image").text(totalImage);
          $(".hoz-controls").hide();
          $(".hoz-controls-" + settings.readingDirection).show();
          (1 === settings.hozPageSize ? $(".nf-single") : $(".nf-double")).addClass("active");
          if (0 < (hozElImageNext = $(".reading-item.active").prev()).length) {
            $("#hoz-btn-next").addClass(settings.readingDirection);
            if (1 < (aysenur = hozElImageNext.find(".name").text().split(":")).length) {
              $("#text-next").html(aysenur[0] + '<div class="name-chapt">' + aysenur[1] + "</div>");
            } else {
              $("#text-next").html(aysenur[0]);
            }
          } else {
            $("#hoz-btn-next").hide();
            $("#content-end").show();
            $("#content-next").hide();
          }
          if ($("body").hasClass("page-reader-ver")) {
            $("body").removeClass("page-reader-ver");
          }
          var aysenur = window.innerHeight;
          document.getElementById("main-wrapper").style.height = aysenur + "px";
          hozShowImage();
        } else {
          if ((totalImage = $(".iv-card").length) <= currentImageIndex) {
            currentImageIndex = totalImage - 1;
          }
          if (1 === $(".reading-list.active .reading-item").length) {
            $(".mrt-bottom").hide();
          }
          if ($(".reading-item.active").is(":last-child")) {
            $("#ver-prev-cv").hide();
          }
          if ($(".reading-item.active").is(":first-child")) {
            $("#ver-next-cv").hide();
          }
          if (1 === parseInt($(".reading-item.active").data("reading-mode"))) {
            $(".container-reader-chapter").addClass("no-margin");
          }
          if (!$("body").hasClass("page-reader-ver")) {
            $("body").addClass("page-reader-ver");
          }
          verShowImage();
          const aurel = setInterval(function () {
            var peighten = $("#main-wrapper .iv-card").eq(currentImageIndex);
            if (peighten) {
              if (0 < peighten.find(".image-vertical").length) {
                clearInterval(aurel);
                $(window).scrollTo("#main-wrapper .iv-card:eq(" + currentImageIndex + ")");
                setTimeout(function () {
                  window.addEventListener("scroll", handleVerticalScroll);
                }, 1e3);
              }
            } else {
              clearInterval(aurel);
              window.addEventListener("scroll", handleVerticalScroll);
            }
          }, 200);
        }
        voteInfo();
      }
    });
  }
}
getChaptersOrVolumes();
const isInViewport = charline => {
  var kanaan = window.innerHeight;
  var kanaan = charline.getBoundingClientRect().top / kanaan;
  return 0 <= kanaan && kanaan <= 1;
};
const md = new MobileDetect(window.navigator.userAgent);
function createImageElement(mckoy, mateusz, aarvi) {
  var josiaha;
  if (mckoy.classList.contains("shuffled")) {
    imgReverser(mateusz).then(saanya => {
      var deella;
      if (saanya) {
        if (md.mobile()) {
          (deella = document.createElement("img")).classList.add(aarvi);
          saanya.toBlob(function (zuheily) {
            deella.src = URL.createObjectURL(zuheily);
            mckoy.appendChild(deella);
          }, "image/jpeg");
        } else {
          saanya.classList.add(aarvi);
          mckoy.appendChild(saanya);
        }
      }
    });
  } else {
    (josiaha = document.createElement("img")).classList.add(aarvi);
    josiaha.src = mateusz;
    mckoy.appendChild(josiaha);
  }
}
