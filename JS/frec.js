	Chart.defaults.font.size = 16;
	Chart.defaults.font.family = 'Lucida Sans Unicode, Verdana, sans-serif';
	Chart.defaults.color = '#000000';
	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	type: 'bar',
		data: {
			datasets: [{
				data: [116.7, 116.7, 66.5],
				label: 'Процент посещаемости',
		       		borderWidth: 1,
				backgroundColor: '#DCDCDC',
				borderColor: '#f5f5f5'
	}],
	labels: ['Понедельник', 'Среда', 'Пятница']
    }});
