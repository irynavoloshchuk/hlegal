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
