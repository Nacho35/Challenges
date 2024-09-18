const copyBtn = document.getElementById("copy-btn");
const colorSpan = document.querySelector(".color");

copyBtn.addEventListener("click", () => {
	const color = colorSpan.textContent;
	navigator.clipboard.writeText(color);

	const toast = document.createElement("div");
	toast.textContent = `Copiado: ${color}`;
	toast.className = "toast";

	document.body.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, 3000);
});

const colors = new Set();

function generateColor() {
	let r, g, b;
	do {
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);
	} while (
		colors.has(
			`#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
				.toString(16)
				.padStart(2, "0")}`
		)
	);
	colors.add(
		`#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
			.toString(16)
			.padStart(2, "0")}`
	);
	return `#${r.toString(16).padStart(2, "0")}${g
		.toString(16)
		.padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	const newColor = generateColor();
	document.body.style.backgroundColor = newColor;
	color.textContent = newColor;
});

function changeColor() {
	const newColor = generateColor();
	color.textContent = newColor;
	document.body.style.backgroundColor = newColor;
}

changeColor();
