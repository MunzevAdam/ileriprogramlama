
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/alinazik.jpg');
    salataImage.setAttribute('alt', 'et');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        '400 gram süzme yoğurt',
        '3 - 4 adet kemer patlıcan',
        'Tuz',
        '2 - 3 diş sarımsak',
        'Diğer Malzemeler;',

        '500 gram dana kuşbaşı',
        '1 yemek kaşığı tereyağı',
        'Tuz, karabiber, pul biber, kekik',
        'Yarım su bardağı su',
        '2 yemek kaşığı domates sosu'
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Patlıcanları közleyip, kabuklarını temizleyin.'+
    'İnce ince doğrayın.' + 'Soğuduktan sonra, ezilmiş sarımsak ve süzme yoğurtla beraber iyice karıştırın.' +
        'Tuzunu ayarlayın.' +
        'Diğer taraftan etleri yıkayıp, suyunu süzdürün.' +
        'Pişirme kabına alarak kısık ateşte, tencerenin kapağı kapalı bir şekilde etlerin bırakmış olduğu suyu çekmesini bekleyin.' +
        'Daha sonra tereyağını ilave edin.' +
        'Tuz hariç, baharatları ve domates sosunu ilave edin.' +
        'Mutlaka sıcak su ekleyin. Çok sulu olmayacak, sadece koyu kıvamlı bir sosumuz olacak.' +
        'Etlerin pişme süresi uzarsa, sık sık kontrol edip gerekirse tencerenin dibi tutmaması için az az sıcak su ilave edebilirsiniz.' +
        'Pişen etlere, son olarak tuzu ilave edin ve ocaktan alın.' +
        'Servis tabağına önce patlıcanlı harç, üzerine ise etleri koyun.' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
