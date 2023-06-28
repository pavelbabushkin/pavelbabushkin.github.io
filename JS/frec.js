	Chart.defaults.font.size = 16;
	Chart.defaults.font.family = 'Lucida Sans Unicode, Verdana, sans-serif';
	Chart.defaults.color = '#000000';
	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	type: 'bar',
		data: {
			datasets: [{
				data: [150, 80.7, 69.2],
				label: 'Процент посещаемости',
		       		borderWidth: 1,
				backgroundColor: '#DCDCDC',
				borderColor: '#f5f5f5'
	}],
	labels: ['Понедельник', 'Среда', 'Пятница']
    }});
