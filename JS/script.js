//Скрипт для отработки события, при котором отображается текущее расписание занятий

//Запрашиваю текущую дату			
			const date = new Date();

//Ввожу константы дат и занятий по расписанию
			const dates = ['03. 07.', '05. 07.', '07. 07.', '10. 07.', '12. 07.', '14. 07.', '17. 07.', '19. 07.', '21. 07.', '24. 06.', '26. 06.', '28. 06.', '31. 06.'];
			const less = ['Йога-нидра', 'Анаварта', 'Супта падангуштасана', 'Сету', 'Упавишта конасана', 'Паршва', 'Бакасана', 'Паривритта', 'Пурвоттанасана', 'Уттхита', 'Васиштасана', 'Прасарита', 'Паривритта триконасана'];
			
//['03. 07.', '05. 07.', '07. 07.', '10. 07.', '12. 07.', '14. 07.', '17. 07.', '19. 07.', '21. 07.', '24. 07.', '26. 07.', '28. 07.', '31. 07.']
//Формирую пустой массив для ключей и значений
			const rasp = new Map();

//Заполняю массив расписания ключами (датами) и значениями (названиями занятий)
			for (let i = 0; i < less.length; i++){
				rasp.set(dates[i], less[i]);}
		
//Проверка массива ключ: значение
			/*for (var [key, value] of rasp) {
				console.log(key + ' ' + value);}*/

//Функция для отображения занятий на текущую неделю
function showHide() {
//Условте для формирования дней недели начиная с Пн 
	if (date.getDay() == 1) {
		var a = 0;
		for (let i = 0; i < 5; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM); 
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") {
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
//Вт
	if (date.getDay() == 2) {
		var a = 0;
		for (let i = -1; i < 4; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM);
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") {
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
//Ср
	if (date.getDay() == 3) {
		var a = 0;
		for (let i = -2; i < 3; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//console.log(dm);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			//console.log(DM);
//Функция отображения блоков с расписанием
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM); 
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") { 
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
//Чт
	if (date.getDay() == 4) {
		var a = 0;
		for (let i = -3; i < 2; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//console.log(dm);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			//console.log(DM);
//Функция отображения блоков с расписанием
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM); 
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") { 
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
//Пт
	if (date.getDay() == 5) {
		var a = 0;
		for (let i = -4; i < 1; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//console.log(dm);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			//console.log(DM);
//Функция отображения блоков с расписанием
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM); 
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") { 
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
//Сб
	if (date.getDay() == 6) {
		var a = 0;
		for (let i = 2; i < 7; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//console.log(dm);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			//console.log(DM);
//Функция отображения блоков с расписанием
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM); 
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") { 
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
//Вс
	if (date.getDay() == 0) {
		var a = 0;
		for (let i = 1; i < 6; i=i+2) {
			dm = String(date.getDate() + i);
		//Формирую название id для таблицы с расписанием
			sh = 'sh' + String(Math.pow(i, 0) + a);
		//console.log(dm);
		//Формирую строку в формате 'день. месяц' из текущей даты для опроса массива 
			if (dm.length == 1) {
				DM = '0' + dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			} else {
				DM = dm + '.' + ' ' + '0' + String(date.getMonth() + 1) + '.';
			}	
			//console.log(DM);
//Функция отображения блоков с расписанием
			if (document.getElementById(DM)) {
		//Копирует текст с разметкой HTML из найденного по id блока и вставляет в указанный inner блок
				document.getElementById(sh).innerHTML = document.getElementById(DM).outerHTML; 
                    //Записываем ссылку на элемент в переменную obj
				var obj = document.getElementById(DM); 
                    //Если css-свойство display не block, то: 
				if (obj.style.display != "block") { 
                			obj.style.display = "block"; //Показываем элемент
                		} else {
					obj.style.display = "none"; //Скрываем элемент
                		}
			}
		a+=1;
		}
	}
}
