function preloader() {
	var got11, got2;
	$.getJSON('https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=0Ai-LoyR7iRPYdDUyRGk3cjN4WkgxV2s0dTFwcmZfYnc&sheet=Sheet1', function(json) {
		got1 = json.Sheet1;
	}).done(function() {
		loader();
	});
}

function loader() {
	var str = [];
	for (var i = 1, tr = 2; i < got1.length; i++, tr++) {
		dz = got1[i].завдання_додому;
		if (dz.length > 50) {
			str[tr] = [dz.slice(0, 49), dz.slice(49, 300)];
			$('tr:eq(' + tr + ') td:eq(2)').addClass('expand');
			$('tr:eq(' + tr + ') td:eq(2)').text(str[tr][0] + ' (далі)');
			(function(tr) {
				$('tr:eq(' + tr + ') td:eq(2)').mouseenter(function() {
					$(this).text(str[tr][0] + '' + str[tr][1]);
				});
				$('tr:eq(' + tr + ') td:eq(2)').mouseleave(function() {
					$(this).text(str[tr][0] + ' (далі)');
				});
			})(tr)
		} else {
			$('tr:eq(' + tr + ') td:eq(2)').text(dz);
		}
	}
	$.getJSON('https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=0Ai-LoyR7iRPYdDUyRGk3cjN4WkgxV2s0dTFwcmZfYnc&sheet=Sheet2', function(json) {
		got2 = json.Sheet2;
	}).done(function() {
		var str = [];
		for (var i = 1, tr = 2; i < got2.length; i++, tr++) {
			dz = got2[i].завдання_додому;
			if (dz.length > 50) {
				str[tr] = [dz.slice(0, 49), dz.slice(49, 300)];
				$('tr:eq(' + tr + ') td:eq(5)').addClass('expand');
				$('tr:eq(' + tr + ') td:eq(5)').text(str[tr][0] + ' (далі)');
				(function(tr) {
					$('tr:eq(' + tr + ') td:eq(5)').mouseenter(function() {
						$(this).text(str[tr][0] + '' + str[tr][1]);
					});
					$('tr:eq(' + tr + ') td:eq(5)').mouseleave(function() {
						$(this).text(str[tr][0] + ' (далі)');
					});
				})(tr)
			} else {
				$('tr:eq(' + tr + ') td:eq(5)').text(dz);
			}
		}
	});
}
preloader()
setInterval(function() {
	preloader();
}, 10000);



$.getJSON('https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=0Ai-LoyR7iRPYdDUyRGk3cjN4WkgxV2s0dTFwcmZfYnc&sheet=Sheet1', function(json) {
	console.log(json);
})