
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/tavuksote.jpg');
    salataImage.setAttribute('alt', 'tavuk');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        'Tavuk etini kuşbaşı doğrayın.',
        'Soğanları yemeklik, biberleri julyen doğrayın, domatesleri de küp küp doğrayın.',
        'Kısık ateşte tavukları arada karıştırarak kavurun.',
        'Suyunu biraz çektikten sonra soğanları ve ince kesilmiş sarımsağı ekleyin.',
        '1-2 dk kavurduktan sonra biberleri ilave edin.        ',
        'Biberler de sotelenince domatesi, salçayı, baharatları ve tuzu ekleyip pişirmeye devam edin.',
        'Son olarak 1 bardak suyu ekleyin ve etler pişene kadar kapağı kapalı bir şekilde pişirin.',

    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Tavuk soteyi tavuğun kuşbaşı olarak doğranmış farklı bölümleriyle yapabilirsiniz. Bu tarifte kemiksiz göğüs eti kullanıldı.' +
        'Tavukları geniş tavaya alıp sotelerseniz tavukların suyu içinde kalır ve yumuşacık pişer.' +
        'Kış aylarında sotenizi yazdan hazırladığınız domates sos ile de pişirebilirsiniz.        ' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
