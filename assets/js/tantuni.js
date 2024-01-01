
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/tantuni.jpg');
    salataImage.setAttribute('alt', 'tavuk');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        '1 paket tavuk göğsü',
        'Haşlamak için su',
        'Zeytinyağı',
        'Karabiber',
        'Kimyon',
        'Tuz',
        'Lavaş ekmeği',
       
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Tavuk göğüs eti minik küpler halinde doğranır.'+
    'Etler tencereye alınarak üstünü geçecek kadar su eklenip haşlanır.' +
        'Etler haşlanırken soğanlar piyazlık doğranır.' +
        'Tuz ve maydanoz ilave edilerek karıştırılır.' +
        'Haşlanan tavukların suyu süzülür.' +
        'Tantuni tavası ısıtılıp 2 yemek kaşığı yağ eklenir.' +
        'Yağa baharatlar eklenip karıştırılır.' +
        'Lavaş tavadaki tavukların üstüne bastırılıp yağlanır.' +
        'Lavaş serilip domates ve soğan yayılır.'+
        'Üstüne tavuk konulur.' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
