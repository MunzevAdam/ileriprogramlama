// script2.js

document.addEventListener("DOMContentLoaded", function () {
    // DOM yüklendiğinde çalışacak kodlar buraya gelecek
    var panelBody = document.querySelector('.panel-body');
    
    // Resim ekleyin
    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/cevizli-salata.jpg');
    salataImage.setAttribute('alt', 'salata');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    // Malzemeler listesine yeni malzeme ekleyin
    var malzemelerList = [
        '3-4 adet Domates',
        '2 adet Sivri Biber',
        '1 adet Soğan',
        '1 avuç Maydonoz',
        '1 çay bardağı iri çekilmiş Ceviz İçi',
        '4-5 yemek kaşığı Zeytinyağı',
        '1 çay kaşığı Tuz',
        '2 yemek kaşığı Nar Ekşisi'
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    // Tarif metni ekleyin
    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Tüm malzemeleri küçük küpler halinde doğruyoruz. Bir kasede karıştırıyoruz. ' +
        'İri çekilmiş ya da doğranmış cevizi de ekliyoruz. Tuz, nar ekşisi, zeytinyağını arzunuza göre ekleyin. ' +
        'Karıştırın. Servis kasesine alın. Afiyet olsun.</p>';

    // HTML içeriğini güncelleyin
    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
