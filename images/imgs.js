// Lấy ID từ URL, các chế độ từ localStorage
const urlParams = new URLSearchParams(window.location.search)
const heroId = urlParams.get('id')

let mode = localStorage.getItem('mode') === "true"
let mode1 = localStorage.getItem('mode1') === "true"
let mode2 = localStorage.getItem('mode2') === "true"

// Hiển thị ID làm tiêu đề
const titleElement = document.getElementById("tittle")
titleElement.textContent = heroId

// Danh sách tướng đặc biệt có ảnh thay thế
const specialHeroList = [
	"10600_B36", "10700_B36", "10800_B40", "10900_B36",
	"15300_B42", "15600_B36", "16600_B36", "17400_B42",
	"18400_B37", "19000_B41", "50100_B36", "51400_B36",
	"12700_B51"
]
const fullHeroId = heroId + "00"
let isSpecialHero = false
let specialIndex = 0

// Kiểm tra ID có nằm trong danh sách đặc biệt
for (let i = 0; i < specialHeroList.length; i++) {
	if (specialHeroList[i].includes(fullHeroId)) {
		isSpecialHero = true
		specialIndex = i
		break
	}
}

// Ảnh thay thế nếu là hero đặc biệt
const specialImage = new Image()
specialImage.src = "https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/" + specialHeroList[specialIndex] + ".jpg"

// Container chính
const mainContainer = document.getElementById("img")

// Hàm tạo URL ảnh chính
function getHeroImageUrl(id) {
	if (["52809", "14412"].includes(id)) {
		return "view-img/warning.jpg"
	} else {
		return `https://dl.ops.kgtw.garenanow.com/CHT/HeroTrainingLoadingNew_B36/${id}.jpg`
	}
}

// Hàm tạo URL label mặc định
function getHeroLabelUrl(id) {
	return `https://dl.ops.kgvn.garenanow.com/hok/SkinLabel/${id}.png`
}

// Hàm kiểm tra label phụ (_1, _2)
function tryAlternateLabels(labelImg, id) {
	let updated = false
	for (let i = 1; i <= 2; i++) {
		const testImg = new Image()
		testImg.src = `https://dl.ops.kgvn.garenanow.com/hok/SkinLabel/${id}_${i}.png`
		testImg.onload = () => {
			if (!updated) {
				labelImg.setAttribute("src", testImg.src)
				updated = true
			}
		}
	}
}

// Hàm xử lý sự kiện cho từng ảnh
function setupImageEvents(imageEl, idText, container, labelImg) {
	imageEl.onerror = () => {
		if (mode) {
			imageEl.src = "view-img/None.jpg"
		} else {
			imageEl.remove()
			if (mode1) idText.remove()
		}
	}
	
	// Đăng ký trước onload cho labelImg
	labelImg.onload = () => {
		labelImg.style.position = "absolute"
		labelImg.style.width = mode2 ? "45px" : "80px"
		labelImg.style.top = mode2 ? "15%" : "10%"
		labelImg.style.right = "5%"
		// Chỉ thêm tag khi ảnh chính đã load (container đã có mainImage)
		if (container.contains(imageEl)) {
			container.appendChild(labelImg)
		}
	}
	
	imageEl.onload = () => {
		imageEl.style.border = "1px solid #fff"
		
		// Chỉ append idText khi ảnh chính load thành công
		if (mode1) container.appendChild(idText)
		
		container.onclick = () => {
			const src = imageEl.src
			const start = src.lastIndexOf("/") + 1
			const end = src.indexOf('.jpg')
			const idskin = src.substring(start, end)
			window.location.href = 'view-img/?id=' + encodeURIComponent(idskin)
		}
	}
}

// Tạo 26 ảnh tướng theo id
const baseHeroId = parseInt(heroId + "00")
for (let i = baseHeroId; i < baseHeroId + 26; i++) {
	let newHeroId = String(i)
	
	// Những ID cần xử lý đặc biệt
	if (newHeroId === "11620") newHeroId = "11620_2"
	if (newHeroId === "13311") newHeroId = "13311_2"
	if (newHeroId === "16707") newHeroId = "16707_2"
	
	// Tạo phần tử DOM
	const container = document.createElement("div")
	const mainImage = document.createElement("img")
	const labelImage = document.createElement("img")
	const idLabel = document.createElement("p")
	
	// Thiết lập style cho container
	container.style.textAlign = "center"
	container.style.position = "relative"
	container.style.maxWidth = mode2 ? "50%" : "100%"
	
	mainImage.classList.add("img")
	mainImage.setAttribute("id", newHeroId)
	mainImage.setAttribute("src", getHeroImageUrl(newHeroId))
	
	idLabel.textContent = String(i)
	
	container.appendChild(mainImage)
	mainContainer.appendChild(container)
	
	// Set labelImage src SAU khi đăng ký onload
	try {
		labelImage.onload = null // reset để chắc chắn
	} catch {}
	
	labelImage.onload = null // reset if needed
	// gán src sau khi đã đăng ký onload (ở setupImageEvents)
	labelImage.setAttribute("src", getHeroLabelUrl(newHeroId))
	
	// Kiểm tra ảnh label phụ (nếu có)
	tryAlternateLabels(labelImage, newHeroId)
	
	// Nếu là tướng đặc biệt, thay ảnh chính khi tải xong
	if (isSpecialHero && String(i).substring(3, 5) === "00") {
		const altImage = new Image()
		altImage.src = specialImage.src
		altImage.onload = () => {
			mainImage.setAttribute("src", altImage.src)
		}
	}
	
	setupImageEvents(mainImage, idLabel, container, labelImage)
}

// Nút quay lại
function backk() {
	window.history.back()
}
