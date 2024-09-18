const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

const colors = [
	"#3498db",
	"#e74c3c",
	"#2ecc71",
	"#f1c40f",
	"#F05A7E",
	"#e67e22",
	"#7CF5FF",
	"#ED3EF7",
	"#603F26",
	"#4535C1",
	"#3498db",
];

let currentActive = 1;

next.addEventListener("click", () => {
	const active = document.querySelector(".active");
	active.classList.remove("active");
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}
	update();
});

prev.addEventListener("click", () => {
	const active = document.querySelector(".active");
	active.classList.remove("active");
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
});

function update() {
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add("active");
			circle.style.backgroundColor = colors[index];
		} else {
			circle.classList.remove("active");
			circle.style.backgroundColor = "#333";
		}
	});
	const active = document.querySelectorAll(".active");
	progress.style.backgroundColor = colors[currentActive - 1];
	progress.style.width =
		((active.length - 1) / (circles.length - 1)) * 100 + "%";
	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}

update();
