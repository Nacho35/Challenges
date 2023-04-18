let d = document;

const containers = d.querySelectorAll(".container");

containers.forEach((container) => {
	container.addEventListener("click", () => {
		removeActiveClasses();
		container.classList.add("active");
	});
});

function removeActiveClasses() {
	containers.forEach((container) => {
		container.classList.remove("active");
	});
}
