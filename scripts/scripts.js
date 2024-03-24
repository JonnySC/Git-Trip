const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
	span.addEventListener("click", (e) => {
		e.target.classList.add("active");
	});
	span.addEventListener("animationend", (e) => {
		e.target.classList.remove("active");
	});

	// Initial animation
	setTimeout(() => {
		span.classList.add("active");
	}, 750 * (idx + 1));
}); 

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

      function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function myFunction() {
            var x = document.getElementById("myNavbar");
            if (x.className === "navbar") {
                x.className += " responsive";
            } else {
                x.className = "navbar";
            }
        }



