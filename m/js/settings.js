$(document).ready(function() {
	//Завантажити налаштування
	$('select#inf option:eq(' + localStorage.inf + ')').prop('selected', true);
	$('select#fremd option:eq(' + localStorage.fremd + ')').prop('selected', true);

	function check() {
		if ($('select#inf option:selected').val() === 'first') {
			$('tr:eq(8) td:eq(1)').fadeOut(300, function() {
				$(this).text('Інформатика').fadeIn(300);
			});
			$('tr:eq(11) td:eq(1)').fadeOut(300, function() {
				$(this).text('Країнознавство').fadeIn(300);
			});
			$('tr:eq(13) td:eq(1)').fadeOut(300, function() {
				$(this).text('Тех. переклад').fadeIn(300);
			});
			$('tr:eq(26) td:eq(1)').fadeOut(300, function() {
				$(this).text('Англ. література').fadeIn(300);
			});
		} else {
			$('tr:eq(8) td:eq(1)').fadeOut(300, function() {
				$(this).text('Англ. література').fadeIn(300);
			});
			$('tr:eq(11) td:eq(1)').fadeOut(300, function() {
				$(this).text('Тех. переклад').fadeIn(300);
			});
			$('tr:eq(13) td:eq(1)').fadeOut(300, function() {
				$(this).text('Країнознавство').fadeIn(300);
			});
			$('tr:eq(26) td:eq(1)').fadeOut(300, function() {
				$(this).text('Інформатика').fadeIn(300);
			});
		}
		if ($('select#fremd option:selected').val() === 'deutsch') {
			$('tr:eq(2) td:eq(1)').fadeOut(300, function() {
				$(this).text('Німецька').fadeIn(300);
			});
			$('tr:eq(7) td:eq(4)').fadeOut(300, function() {
				$(this).text('Німецька').fadeIn(300);
			});
			$('tr:eq(16) td:eq(4)').fadeOut(300, function() {
				$(this).text('Німецька').fadeIn(300);
			});
			$('tr:eq(2) td:eq(2)').attr('style', 'opacity: 1;');
			$('tr:eq(7) td:eq(5)').attr('style', 'opacity: 1;');
			$('tr:eq(16) td:eq(5)').attr('style', 'opacity: 1;');
		} else if ($('select#fremd option:selected').val() === 'french') {
			$('tr:eq(2) td:eq(1)').fadeOut(300, function() {
				$(this).text('Французька').fadeIn(300);
			});
			$('tr:eq(7) td:eq(4)').fadeOut(300, function() {
				$(this).text('Французька').fadeIn(300);
			});
			$('tr:eq(16) td:eq(4)').fadeOut(300, function() {
				$(this).text('Французька').fadeIn(300);
			});
			$('tr:eq(2) td:eq(2)').attr('style', 'opacity: 0;');
			$('tr:eq(7) td:eq(5)').attr('style', 'opacity: 0;');
			$('tr:eq(16) td:eq(5)').attr('style', 'opacity: 0;');
		} else if ($('select#fremd option:selected').val() === 'polish') {
			$('tr:eq(2) td:eq(1)').fadeOut(300, function() {
				$(this).text('Польська').fadeIn(300);
			});
			$('tr:eq(7) td:eq(4)').fadeOut(300, function() {
				$(this).text('Польська').fadeIn(300);
			});
			$('tr:eq(16) td:eq(4)').fadeOut(300, function() {
				$(this).text('Польська').fadeIn(300);
			});
			$('tr:eq(2) td:eq(2)').attr('style', 'opacity: 0;');
			$('tr:eq(7) td:eq(5)').attr('style', 'opacity: 0;');
			$('tr:eq(16) td:eq(5)').attr('style', 'opacity: 0;');
		}
	}
	check();
	$('select#inf').click(function() {
		check();
	});
	$('select#fremd').click(function() {
		check();
	});
	$('button#savePrefs').click(function() {
		var selectedInf = $('select#inf option:selected').val();
		var selectedFremd = $('select#fremd option:selected').val();

		if (selectedInf === 'first') {
			selectedInf = 0;
		} else if (selectedInf === 'second') {
			selectedInf = 1;
		}
		if (selectedFremd === 'deutsch') {
			selectedFremd = 0;
		} else if (selectedFremd === 'french') {
			selectedFremd = 1;
		} else if (selectedFremd === 'polish') {
			selectedFremd = 2;
		}

		localStorage.inf = selectedInf;
		localStorage.fremd = selectedFremd;
	});
});