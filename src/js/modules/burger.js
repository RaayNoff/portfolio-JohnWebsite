$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu, .menu__body').toggleClass('_active');
		$('body, .page').toggleClass('lock');
	});
});