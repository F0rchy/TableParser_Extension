// Поиск всех элементов с классом "bg" (Начиная с 3 элемента - ячейки таблицы)
const form = document.querySelectorAll('.bg')
var result = "";

// Цикл проходит по всем строчкам таблицы (в таблице всегда 85 столбцов)
for (let i = 3; i < form.length-85; i = i + 85) {
	var date = form[i-3+11].innerHTML;
	var name = form[i-3+29].innerHTML;
	var category = form[i-3+46].innerHTML;
	var registration = form[i-3+7].innerHTML;
	var area = form[i-3+37].innerHTML;
	var text = form[i-3+33].innerHTML;
	var object = form[i-3+31].innerHTML;
	var number = form[i-3+27].innerHTML;

	// Проверка, не прошла ли дата
	if (date === '')
	{
		// Проверка, указано ли наименование объекта. Если не указано наименование, то пишется категория земли,
		// если не указаны наименование и категория земли, то пишется "объект недвижимости"
		if (name === '&nbsp;' || name === '' || name === ' ' || name === 'bsp;') {
			if (category === '&nbsp;' || category === '' || category === ' ' || category === 'bsp;') {
				name = "TO_REMOVE";
			}
			else {
				name = text + category;
				name = name.slice(name.indexOf(" ") + 3, name.length);
			}
		}
		// Понижение регистра букв
		name = name.toLowerCase();
		// Все варианты категорий
		switch(category) {
			case '1':
				result = result + "<p>" + "с " + registration + " " + name + " " + area + " " + text + " (" + object + ")" + ";</p>";
				break;

			case '2':
				result = result + "<p>" + "с " + registration + " " + name + " " + area + " " + text + " (" + number + ");</p>";
				break;

			case '3':
				result = result + "<p>" + "с " + registration + " " + name + " " + area + " (" + object + ") " + "(" + number + ");</p>";
				break;

			case '4':
				result = result + "<p>" + "с " + registration + " " + name + " " + text + " (" + object + ") " + "(" + number + ");</p>";
				break;

			case '5':
				result = result + "<p>" + "с " + registration + " " + area + " " + text + " (" + object + ") " + "(" + number + ");</p>";
				break;

			case '6':
				result = result + "<p>" + " " + name + " " + area + " " + text + " (" + object + ") " + "(" + number + ");</p>";
				break;

			case '7':
				result = result + "<p>" + "с " + registration + " " + name + " " + area + " " + text + ";</p>";
				break;

			case '8':
				result = result + "<p>" + "с " + registration + " " + name + "(" + number + ");</p>";
				break;
		}
	}
}

// Поиск всех div, чтобы встроить под таблицу вывод
var table = document.querySelectorAll("div");
// Создание элемента div
var div = document.createElement("div");
// Смена шрифта для div
div.style.cssText = 'font-size: 18.5px; font-family: TimesNewRoman';
// Внедрение html-кода результата в div
div.innerHTML = result;
// Вставка созданного div в div таблицы сайта
table[3].appendChild(div);