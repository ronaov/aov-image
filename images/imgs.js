const urlp = new URLSearchParams(window.location.search)
var id = urlp.get('id')
var mode = localStorage.getItem('mode')
var mode1 = localStorage.getItem('mode1')
var mode2 = localStorage.getItem('mode2')
mode = mode == "true"
mode1 = mode1 == "true"
mode2 = mode2 == "true"

var tittle = document.getElementById("tittle")
tittle.textContent = id

var fg = ["10600_B36", "10700_B36", "10800_B40", "10900_B36", "15300_B42", "15600_B36", "16600_B36", "17400_B42", "18400_B37", "19000_B41", "50100_B36", "51400_B36"]
var ide = id + "00"
var bl = false

var num = 0
for (var t of fg) {
  if (t.includes(ide)) {
    var bl = true
    break
  }
  num++
}

var g = new Image()
g.src = "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + fg[num] +".jpg"

var d = document.getElementById("img")
var hero = parseInt(id + "00")
for (var i = hero; i < hero + 26; i++) {
  var new_id = String(i)
  
  if (new_id == "11620") {
    new_id = "11620_2"
  }
  
  if (new_id == "13311") {
    new_id = "13311_2"
  }
  
  if (new_id == "16707") {
    new_id = "16707_2"
  }
  
  //pass
  
  var w = document.createElement("div")
  var a = document.createElement("img")
  var tag = document.createElement('img')
  var f = document.createElement("p")
  a.classList.add('img')
  f.textContent = String(i)
  w.appendChild(a)
  if (mode2) w.style.maxWidth = "50%";
  else w.style.maxWidth = "100%";
  w.style.textAlign = "center"
  w.style.position = "relative"
  d.appendChild(w)
  a.setAttribute("src", "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + new_id +".jpg")
  a.setAttribute("id", new_id)
  
  tag.setAttribute('src', `https://dl.ops.kgvn.garenanow.com/hok/SkinLabel/${new_id}.png`)
  
  var v = false
  if (bl && String(i).substring(3,5) == "00") {
    (g.onload = function () {
      v = true
    })(g, a)
  }
  
  if (v) {
    a.setAttribute("src", g.src)
  }
  
  function kt(a, f, w, tag){
    a.onerror = function() {
      if (!mode) {
        a.remove()
        if (mode1) f.remove();
      }
      if (mode) {
        a.src = "None.jpg"
      }
    }
    
    tag.onload = function() {
      tag.style.position = "absolute"
      
      if (mode2) {
        tag.style.width = "45px"
        tag.style.top = "15%"
        tag.style.right = "5%"
      } else {
        tag.style.width = "80px"
        tag.style.top = "10%"
        tag.style.right = "5%"
      }
      w.appendChild(tag)
    }

    a.onload = function() {
      if (mode1) w.appendChild(f);
      a.style.border = "1px solid #fff"
      
      w.onclick = function () {
        var K = a.src
        var K1 = K.indexOf('6')+2
        var K2 = K.indexOf('.jpg')
        var idskin = K.substring(K1, K2)
        window.location.href = 'view-img/?id=' + encodeURIComponent(idskin)
      }
    }
  }
  kt(a, f, w, tag)
}

function backk() {
  window.history.back()
}