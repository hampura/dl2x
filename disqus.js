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
	case 'kiryuu':
		if (chFile.length === 2 && chFile.charAt(0) === '0') {
			chFile = chFile.charAt(1);
		}
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
	case 'shinigami':
		dl2xUser = 'reaperid',
		pageUrl = 'https:\/\/home.shinigami.cx\/series\/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '\/chapter-' + chFile;
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