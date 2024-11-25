const s = new URLSearchParams(window.location.search)
var id = s.get('id')

var link = "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + id +".jpg"

var img = document.getElementById('img')
img.src = link

function backk() {
  window.history.back()
}