(() => {
	const burger = document.querySelector('.header__box-burger');
	const close = document.querySelector('.header__nav-close');
	const menu = document.querySelector('.header__nav');

	burger.addEventListener('click', () => {
		menu.classList.add('active')
		
	});

	close.addEventListener('click', () => {
		menu.classList.remove('active')
	})
})();



(() => {
	const tabsItems = document.querySelectorAll('.tabs__links-item')
	const tabsBlocks = document.querySelectorAll('.tabs__content-item')

	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', (event) => {
			tabsBlocks.forEach(content => {
				content.classList.remove('active')
			})
			tabsItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabsItems[index].classList.add('active')
			tabsBlocks[index].classList.add('active')
		})
	})

})();

const swiper = new Swiper('.swiper', {
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ["-20%", 0, -1],
		},
		next: {
			translate: ["100%", 0, 0],
		},
	},
	// loop: true,
	// autoplay: {
	// 	delay: 3000,
	// },
	// slidesPerView: 1,
	// breakpoints: {
	// 	768: {
	// 		slidesPerView: 2
	// 	},
	// },
	// spaceBetween: 30,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});