const s = new URLSearchParams(window.location.search)
var id = s.get('id')
var link

if (id === "None") {
	link = "/images/view-img/None.jpg"
} else if (id === "warning") {
	link = "warning.jpg"
} else {
	link = "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + id +".jpg"
}

var img = document.getElementById('img')
img.src = link

function backk() {
  window.history.back()
}