
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var salataImage = document.createElement('img');
    salataImage.setAttribute('src', 'assets/images/ezogelin.jpg');
    salataImage.setAttribute('alt', 'çorba');
    panelBody.insertBefore(salataImage, panelBody.firstChild);

    var malzemelerList = [
        '1 su bardağı kırmızı mercimek',
        '1 tatlı kaşığı pirinç',
        '1 tatlı kaşığı bulgur',
        '2 çay kaşığı pul biber, nane , 2 diş sarımsak',
        '1 orta boy soğan',
        '1 yemek kaşığı biber salçası',
        '1 yemek kaşığı tereyağı',
        '2 litreye yakın sıcak su',
       
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p> Ezogelin çorbası yapmak için düdüklü tencerede önce rendelemiş olduğumuz soğanı ve ezmiş olduğumuz sarımsağı tereyağında kavuruyoruz' +
        'Soğanlar diriliğini kaybetsin yeterli yakmadan orta ateşte kavuralım.' +
        'Soğanlar kavrulunca naneyi, kırmızı biberi ve salçayı ilave edip. Kavurmaya devam edelim.' +
        'Bir iki karıştırdıktan sonra yıkadığımız mercimeği, pirinci, bulguru ve tuzunu da ilave ederek karıştıralım.' +
        'Başka bir tarafta kaynamakta olan 2 litreye yakın suyu üzerine boşaltalım.' +
        'Düdüklünün kapağını ve düdüğünü kapattıktan sonra 10 dakika pişiriyoruz. Normal tencerede de yapabilirsiniz ama biraz daha geç pişecektir (yaklaşık 30-40 dakika sürecektir).' +
        'İsteğe göre süsleyerek, servis edebilirsiniz. Afiyet olsun.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
