
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/etlinohut.jpg');
    salataImage.setAttribute('alt', 'et');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        'Yarım kilo kuşbaşı doğranmış et',
        '1,5 su bardağı haşlanmış nohut',
        '1 adet kuru soğan',
        '3 yemek kaşığı sıvı yağ',
        '2 yemek kaşığı salça',
        'Tuz',
        'Pul biber',
       
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Eti kuşbaşı doğrayarak yumuşayana kadar haşlayın.'+
    'Soğanları yemeklik doğrayarak sıvı yağda pembeleşene kadar kavurun.' +
        'Salçayı, tuzunu, pul biberini ilave edip 2 dakika daha kavurun.' +
        'Haşlanmış etleri ve haşlanmış nohutu da ilave ederek bir kaç kez karıştırın.' +
        'Daha sonra üzerlerine çıkacak kadar yaklaşık 6 su bardağı kaynamış su koyup beraber biraz daha (10-15 dakika kadar) kaynattıktan sonra ocağı kapatabilirsiniz.' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
