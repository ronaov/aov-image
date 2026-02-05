var btn = document.getElementById("on")
var txt = document.getElementById("txt")

var btn1 = document.getElementById("on1")
var txt1 = document.getElementById("txt1")

var btn2 = document.getElementById("on2")
var txt2 = document.getElementById("txt2")

var mode = false
var mode1 = false
var mode2 = false

window.onload = function () {
  const h = localStorage.getItem("mode")
  const h1 = localStorage.getItem("mode1")
  const h2 = localStorage.getItem("mode2")

  if (h=="true") {
    btn.style.transform = "translateX(21px)"
    txt.textContent = "Hiện skin không có"
    mode = true
  }
  
  if (h1=="true") {
    btn1.style.transform = "translateX(21px)"
    txt1.textContent = "Hiện mã số skin"
    mode1 = true
  }
  
  if (h2=="true") {
    btn2.style.transform = "translateX(21px)"
    txt2.textContent = "Hai cột ảnh"
    mode2 = true
  }
}

var ids = [
  "105: Toro",
  "106: Krixi",
  "107: Zephys",
  "108: Gildur",
  "109: Veera",
  "110: Kahlii",
  "111: Violet",
  "112: Yorn",
  "113: Chaugnar",
  "114: Omega",
  "115: Jinna",
  "116: Butterfly",
  "117: Ormarr",
  "118: Alice",
  "119: Mganga",
  "120: Mina",
  "121: Marja",
  "123: Maloch",
  "124: Ignis",
  "126: Arduin",
  "127: Azzen'Ka",
  "128: Lữ Bố",
  "129: Triệu Vân",
  "130: Airi",
  "131: Murad",
  "132: Hayate",
  "133: Valhein",
  "134: Skud",
  "135: Thane",
  "136: Ilumia",
  "137: Paine",
  "139: Kil'Groth",
  "140: Superman",
  "141: Lauriel",
  "142: Natalya",
  "144: Taara",
  "146: Zill",
  "148: Preyta",
  "149: Xeniel",
  "150: Nakroth",
  "152: Điêu Thuyền",
  "153: Kaine",
  "154: Yena",
  "156: Aleister",
  "157: Raz",
  "159: Dolia",
  "162: Kriknak",
  "163: Ryoma",
  "166: Arthur",
  "167: Ngộ Không",
  "168: Lumburr",
  "169: Slimz",
  "170: Moren",
  "171: Cresht",
  "173: Fennik",
  "174: Stuart",
  "175: Grakk",
  "177: Lindis",
  "180: Max",
  "184: Helen",
  "186: TeeMee",
  "187: Arum",
  "189: Krizzix",
  "190: Tulen",
  "191: Rouie",
  "192: Celica",
  "193: Amily",
  "194: Wiro",
  "195: Enzo",
  "196: Elsu",
  "199: Eland'orr",
  "206: Charlotte",
  "501: Tel'Annas",
  "502: Astrid",
  "503: Zuka",
  "504: Wonder Woman",
  "505: Baldum",
  "506: Omen",
  "507: The Flash",
  "508: Wisp",
  "509: Y'bneth",
  "510: Liliana",
  "511: Ata",
  "512: Rourke",
  "513: Zata",
  "514: Roxie",
  "515: Richter",
  "518: Quillen",
  "519: Annette",
  "520: Veres",
  "521: Florentino",
  "522: Errol",
  "523: D'Arcy",
  "524: Capheny",
  "525: Zip",
  "526: Ishar",
  "527: Sephera",
  "528: Qi",
  "529: Volkath",
  "530: Dirak",
  "531: Keera",
  "532: Thorne",
  "533: Laville",
  "534: Dextra",
  "535: Sinestrea",
  "536: Aoi",
  "537: Allain",
  "538: Iggy",
  "539: Lorion",
  "540: Bright",
  "541: Bonnie",
  "542: Tachi",
  "543: Aya",
  "544: Yan",
  "545: Yue",
  "546: Teeri",
  "548: Bijan",
  "563: Heino",
  "567: Erin",
  "568: Ming",
  "577: Dyadia",
  "595: Edras",
  "596: Goverra",
  "597: Biron",
  "598: Bolt Baron",
  "599: Billow"
]

var s = document.getElementById("mh")
for (var id of ids) {
  var d = document.createElement("button")
  d.textContent = id
  d.onclick = function() {
    var Q = this.textContent.substring(0, 3);
    window.location.href = "images/?id=" + encodeURIComponent(Q);
  }
  s.appendChild(d)
}

function nhan() {
  if (mode) {
    btn.style.transform = "translateX(0)"
    txt.classList.add("fade")
    setTimeout( function () {
      txt.textContent = "Ẩn skin không có"
      txt.classList.remove("fade")
    }, 250)
    mode = false
  }
  else {
    btn.style.transform = "translateX(21px)"
    txt.classList.add("fade")
    setTimeout( function () {
      txt.textContent = "Hiện skin không có"
      txt.classList.remove("fade")
    }, 250)
    mode = true
  }
  localStorage.setItem("mode", mode.toString())
}

function nhan1() {
  if (mode1) {
    btn1.style.transform = "translateX(0)"
    txt1.classList.add("fade")
    setTimeout( function () {
      txt1.textContent = "Ẩn mã số skin"
      txt1.classList.remove("fade")
    }, 250)
    mode1 = false
  }
  else {
    btn1.style.transform = "translateX(21px)"
    txt1.classList.add("fade")
    setTimeout( function () {
      txt1.textContent = "Hiện mã số skin"
      txt1.classList.remove("fade")
    }, 250)
    mode1 = true
  }
  localStorage.setItem("mode1", mode1.toString())
}

function nhan2() {
  if (mode2) {
    btn2.style.transform = "translateX(0)"
    txt2.classList.add("fade")
    setTimeout( function () {
      txt2.textContent = "Một cột ảnh"
      txt2.classList.remove("fade")
    }, 250)
    mode2 = false
  }
  else {
    btn2.style.transform = "translateX(21px)"
    txt2.classList.add("fade")
    setTimeout( function () {
      txt2.textContent = "Hai cột ảnh"
      txt2.classList.remove("fade")
    }, 250)
    mode2= true
  }
  localStorage.setItem("mode2", mode2.toString())
}

var st = document.getElementById("setting")
function btnst() {
  st.style.transform = "translateX(0)"
}

function closee() {
  st.style.transform = "translateX(-100%)"
}

const ttk = document.getElementById("tk")
const fd = document.getElementById("fd")
const mh = document.getElementById('mh')
const ip = document.getElementById('input')
function timkiem() {
  if (fd.classList.contains('bx-search')) {
    fd.classList.remove('bx-search')
    fd.classList.add("bx-x-circle")
    fd.style.color = "red"
    mh.style.transform = "translateY(40px)"
    ttk.style.transform = "translateY(0)"
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    ip.focus()
  }
  else {
    fd.classList.add('bx-search')
    fd.classList.remove("bx-x-circle")
    fd.style.color = "white"
    mh.style.transform = "translateY(0)"
    ttk.style.transform = "translateY(-200%)"
    var tong = document.querySelectorAll('#mh button')
    for (var x of tong) {
      x.style.display = 'inline-block'
    ip.value = ""
    }
  }
}

function tim() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  var tong = document.querySelectorAll('#mh button')
  for (var x of tong) {
    var tp = x.textContent.toLocaleLowerCase()
    var ipp = ip.value.toLocaleLowerCase()
    
    if (!ipp.includes("'")) {
      tp = tp.replace("'", "")
    }
    
    if (tp.includes(ipp)) {
      x.style.display= 'inline-block'
    }
    else {
      x.style.display= 'none'
    }
  }
}

function kenh() {
  window.location.href = 'https://youtube.com/@ronaov'
}

function xong (new_id, kkk) {
  if (new_id.length == 0) {
    kkk.textContent = 'Không có skin mới! Chạm vào thông báo để tắt.'
    kkk.onclick = function () {
      kkk.style.display = 'none'
    }
  }
  else {
    var dsmoi = new_id.join(' ') + '. Chạm vào thông báo để tắt.'
    kkk.textContent = dsmoi
    kkk.onclick = function() {
        kkk.style.display = 'none'
    }
    localStorage.setItem('dsskin', dsskincu + "_" + new_id.join("_"))
  }
}