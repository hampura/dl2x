function hapus0() {
	if (chFile.length === 2 && chFile.charAt(0) === '0') {
		chFile = chFile.charAt(1);
	}
}

console.info(
	'%cKomentar Disqus telah terhubung dengan ' + dl2xFtl,
	'color:cyan'
);

$('#info').click(function() {
	$('#komentarDisqus').slideDown()
});

$('#tutupKomentar').click(function() {
	$('#komentarDisqus').slideUp()
});

switch (dl2xFtl) {
	case 'apkomik':
		dl2xUser = 'komikav-com',
		pageUrl = 'https:\/\/apkomik.cc\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break;
	case 'kiryuu':
		hapus0();
		dl2xUser = 'kiryuu-id',
		pageUrl = 'https:\/\/kiryuu.id\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'komikcast':
		dl2xUser = 'komikcastnet',
		pageUrl = 'https:\/\/komikcast.lol\/chapter\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break;
	case 'komikindo':
		dl2xUser = 'komikindo-co',
		pageUrl = 'https:\/\/komikindo.co\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'mangakita':
		dl2xUser = 'mangakita',
		pageUrl = 'https:\/\/mangakita.id\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break;
	case 'mangatale':
		dl2xUser = 'baca-manga-4',
		pageUrl = 'https:\/\/mangatale.co\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break;
	case 'shinigami':
		dl2xUser = 'reaperid',
		pageUrl = 'https:\/\/shinigamitoon.id\/series\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '\/chapter-' + chFile;
		break;
	case 'tukangkomik':
		dl2xUser = 'tukangkomik-com-1',
		pageUrl = 'https:\/\/tukangkomik.id\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
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