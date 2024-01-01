
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/mantar.jpg');
    salataImage.setAttribute('alt', 'çorba');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        '2 adet kuru soğan',
        '10 adet mantar',
        '4 yemek kaşığı sıvı yağ',
        '1 yemek kaşığı tereyağı',
        '2 yemek kaşığı un',
        '1 litre sıcak su',
        '1 su bardağı süt',
        'Yarım çay kaşığı karabiber ve 1 tatlı kaşığı tuz',
       
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Öncelikle soğanları ince ince doğrayalım.' +
        'Ardından mantarları minik minik doğrayalım.' +
        'Tencereye sıvı yağ ve tereyağını alarak erimesi için bekleyelim.' +
        'Eridikten sonra soğanları ekleyelim ve hafif pembeleşene kadar kavuralım.' +
        'Mantarları da ekleyelim ve orta ateşte mantarlar suyunu salıp çekinceye kadar kavuralım.' +
        'Daha sonra unu ilave edelim ve unun kokusu çıkana kadar kavuralım.' +
        'Bir taraftan karıştırırken bir taraftan da suyumuzu ekleyelim ve orta ateşte çorbamızı kaynamaya bırakalım.' +
        'Çorbamız kaynadıktan sonra altını kısalım ve oda ısısındaki sütü ve karabiberi ilave ederek karıştıralım ve kaynamaya bırakalım.' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
