$(function () {
	$.datepicker.setDefaults($.datepicker.regional["es"]);
	$("#datepicker").datepicker({
		dateFormat: 'dd/mm/yy',
		firstDay: 1
	});
});