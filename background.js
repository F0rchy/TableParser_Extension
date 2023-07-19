// Создание кнопки контекстного меню в браузере
browser.menus.create({
	id: "parser",
	title: "Конвертировать таблицу",
	contexts: ["all"],
});

// Создание обработчика нажатия на кнопку в контекстном меню
browser.menus.onClicked.addListener(async function (info, tab) {
	if (info.menuItemId == "parser") {
		browser.tabs.executeScript({
			file: "parser.js"
		});
	}
})