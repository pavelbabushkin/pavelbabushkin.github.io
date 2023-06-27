	Chart.defaults.font.size = 16;
	Chart.defaults.font.family = 'Lucida Sans Unicode, Verdana, sans-serif';
	//Chart.defaults.font.weight = 'bold';
	Chart.defaults.color = '#000000';
	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	type: 'bar',
		data: {
			datasets: [{
				data: [0.565, 0.173, 0.26],
				label: 'Процент посещаемости',
		       		borderWidth: 1,
				backgroundColor: '#778899',
				borderColor: '#f5f5f5'
	}],
	labels: ['Понедельник', 'Среда', 'Пятница']
    }});
