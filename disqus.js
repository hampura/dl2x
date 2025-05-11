function hapus0() {
	2 === chFile.length && '0' === chFile.charAt(0) && (chFile=chFile.charAt(1))
}

function komentarDq() {
	disqus_config = function() {
		this.page.url = pageUrl;
		this.page.identifier = pageIdentifier;
	}, d = document, s = d.createElement('script');

	s.src = 'https://' + dl2xUser + '.disqus.com/embed.js';

	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s); console.info(
		'%cKomentar telah terhubung ke:\n' + pageUrl,
		'color:cyan'
	)
}

function komentarLama() {
	switch (dl2xFtl) {
		case 'apkomik': dl2xUser = 'komikav-com', pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break; case 'kiryuu': hapus0(); dl2xUser = 'kiryuu-id', pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break; case 'komikcast': dl2xUser = 'komikcastnet', pageUrl = 'https://' + dl2xDomain + '/chapter/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile + '-bahasa-indonesia';
		break; case 'komikindo':
		break; case 'komiksin': dl2xUser = 'komikindo-co', pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break; case 'mangakita': dl2xUser = 'mangakita', pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break; case 'mangatale': dl2xUser = 'baca-manga-4', pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
		break; case 'shinigami': dl2xUser = 'reaperid', 	pageUrl = 'https://home.shinigami.cx/series/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '/chapter-' + chFile;
		break; case 'tukangkomik': dl2xUser = 'tukang', pageUrl = 'https://' + dl2xDomain + '/' + dl2xJudul.toLowerCase().replace(/\s+/g, '-') + '-chapter-' + chFile;
	} komentarDq()
}

function komentarBaru() {
	switch (dl2xFtl) {
		case 'apkomik':			dl2xUser = 'komikav-com';
		break; case 'kiryuu':		dl2xUser = 'kiryuu-id';
		break; case 'komikcast':	dl2xUser = 'komikcastnet';
		break; case 'komikindo':
		break; case 'komiksin':		dl2xUser = 'komikindo-co';
		break; case 'mangakita':	dl2xUser = 'mangakita';
									dl2xJudul = dl2xJudul.split(' ')[0]
		break; case 'mangatale':	dl2xUser = 'baca-manga-4';
		break; case 'shinigami':	dl2xUser = 'dewakematianss';
		break; case 'tukangkomik':	dl2xUser = 'tukang';
		break; default: return
	}

	if (dl2xFtl === 'shinigami') {
		if ($('del').text().includes('/')) {
			pageUrl = 'https://dsq.shinigami.gg' + dl2xJudul
		} else {
			dl2xJudul = $('del').text(), pageUrl = 'https://dsq.shinigami.gg/chapter/' + dl2xJudul
		}
	} else {
		pageUrl = 'https://' + dl2xDomain + dl2xJudul
	} komentarDq()
}

function komentarFtl(pesan) {
    const popup = $('<div id="popupMessage">' + pesan + '</div>').appendTo('body');
    popup.fadeIn('slow').click(function() {
		$(this).fadeOut('slow').remove()
	})
}

$('button[onclick="maps"]').attr('onclick', 'maps()'), $('#info').click(function() {
	'undefined' === typeof pageUrl ? komentarFtl('Gagal menghubungkan komentar') : $('#komentarDisqus').slideDown()
}), $('#tutupKomentar').click(function() {
	$('#komentarDisqus').slideUp()
}); 1 === $('del').length ? komentarBaru() : komentarLama();