let header = document.querySelector("header");

window.addEventListener("scroll", () => {
	if(window.scrollY > 60) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
	// header.classList.toggle("sticky", window.scrollY > 60);
})

// Toggle show navbar

let menu = document.querySelector('.menu-btn');
let navlist = document.querySelector('.links');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('fa-times');
	navlist.classList.remove('open');
}
// console.log("hello");