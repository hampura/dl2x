function hapus0() {
	if (chFile.length === 2 && chFile.charAt(0) === '0') {
		chFile = chFile.charAt(1)
	}
}

console.info(
	'%cKomentar Disqus telah terhubung dengan ' + dl2xFtl,
	'color:cyan'
);

$('button[onclick="maps"]').attr('onclick', 'maps()'), $('#info').click(function() {
	$('#komentarDisqus').slideDown()
}), $('#tutupKomentar').click(function() {
	$('#komentarDisqus').slideUp()
});

switch (dl2xFtl) {
	case 'apkomik':
		dl2xUser = 'komikav-com',
		pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break;
	case 'kiryuu':
		hapus0();
		dl2xUser = 'kiryuu-id',
		pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'komikcast':
		dl2xUser = 'komikcastnet',
		pageUrl = 'https://' + dl2xDomain + '/chapter/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break;
	case 'komikindo':
	case 'komiksin':
		dl2xUser = 'komikindo-co',
		pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'mangakita':
		dl2xUser = 'mangakita',
		pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'mangatale':
		dl2xUser = 'baca-manga-4',
		pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'shinigami':
		if ($('del').length === 1) {
			dl2xJudul = $('del').text(),
			dl2xUser = 'dewakematian',
			pageUrl = 'https://dsq.shinigami.gg/chapter/' + dl2xJudul;
		} else {
			dl2xUser = 'reaperid',
			pageUrl = 'https://home.shinigami.cx/series/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '/chapter-' + chFile;
		}
		break;
	case 'tukangkomik':
		dl2xUser = 'tukangkomik-co',
		pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
}

var disqus_config = function() {
	this.page.url = pageUrl;
	this.page.identifier = pageIdentifier;
};

(function() {
	var d = document,
		s = d.createElement('script');

	s.src = 'https://' + dl2xUser + '.disqus.com/embed.js';

	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();