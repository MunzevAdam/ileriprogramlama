
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/mantı.jpg');
    salataImage.setAttribute('alt', 'pratik');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        '1 paket milföy hamuru',
        '300 gram kıyma',
        '1 adet rendelenmiş soğan',
        '1 çay kaşığı tuz',
        '2 çay kaşığı karabiber',
        '5 - 6 dal maydanoz',
        'Üzeri için;',
        '1 kase yoğurt',
        '1 yemek kaşığı tereyağı',
        '1 tutam nane',

        'Yarım çay kaşığı karabiber ve 1 tatlı kaşığı tuz',
       
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Kıyma için bütün malzemeleri karıştırın.' +
        'Milföy hamuru yapraklarını küçük karelere bölün.' +
        'Üzerine kıymaları yerleştirin. Milföyleri mantı yapar gibi kapatın. Yağlanmış fırın kabına ters çevirip dizin.' +
        'Kızarana kadar 180 derecede 30 dakika pişirin.' +
        'Yoğurt ve kızdırılmış yağ koyun.' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
