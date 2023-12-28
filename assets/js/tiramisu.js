
document.addEventListener("DOMContentLoaded", function () {
    var panelBody = document.querySelector('.panel-body');

    var tiramisuImage = document.createElement('img');
    tiramisuImage.setAttribute('src', 'assets/images/tiramisu.jpg');
    tiramisuImage.setAttribute('alt', 'tiramisu');
    tiramisuImage.classList.add('img-thumbnail');
    panelBody.insertBefore(tiramisuImage, panelBody.firstChild);

    var malzemelerList = [
        '16 adet savoyar (kedi dili) bisküvi',
        '400 gram mascarpone peyniri',
        '1 su bardağı toz şeker',
        '4 adet yumurta',
        '2 yemek kaşığı filtre kahve (arzuya göre granül kahve)',
        '1 su bardağı sıcak su',
        '1 yemek kaşığı toz şeker',
        '3 yemek kaşığı kakao'
    ];
    var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
    malzemelerList.forEach(function (malzeme) {
        malzemelerHtml += '<li>' + malzeme + '</li>';
    });
    malzemelerHtml += '</ul>';

    var nasilYapilirHtml = '<strong> Nasıl Yapılır?</strong>' +
        '<p>Tatlının kremasını hazırlamak için; yumurtaların sarı ve beyaz kısımlarını dikkatli bir şekilde ayırın. Yumurta beyazlarını ayrı bir kapta, bir mikser yardımıyla yüksek devirde, köpük köpük olana kadar çırpın.' +
        'Yumurta sarılarını, toz şeker ilavesi ile yüksek devirde, şeker tamamen eriyip, mat sarı bir renk elde edene kadar çırpın. Mascarpone peynirini ayrı bir kapta ezerek, krema haline getirin.' +
        'Hazırlamış olduğunuz bu üç karışımı, yumurta beyazlarının sönmemesi için; bir spatula yardımıyla alttan üstte doğru hareket ettirerek, karıştırın.' +
        'Konyağı da ekledikten sonra karıştırma işlemini 1 dakika kadar sürdürün. Hazırladığınız krema karışımını 10 dakika kadar buzdolabında soğutun</p>' +
        '<p>Şerbeti için; sıcak su, toz şeker ve filtre kahveyi derin bir kapta karıştırın.' +
        'Bir porsiyonda kullanacağınız dört adet savoyar bisküvinin iki adetinin üst kısmını şerbet karışımına batırdıktan sonra kuru kısımları üst tarafta kalacak şekilde servis tabağına yan yana yerleştirin.' +
        'Kuru kalan üst kısımlarını bir tatlı kaşığı şerbet ilavesi ile ıslatın. Soğuttuğunuz kremayı buzdolabından çıkartın. Bisküvilerin üzerini çok fazla taşmayacak şekilde krema ile kaplayın.' +
        'Kalan iki bisküviyi aynı şekilde ıslattıktan sonra kuru kısımları üstte kalacak şekilde kremanın üzerine yan yana yerleştirin. Kuru kalan üst kısımları bir tatlı kaşığı şerbet ilavesi ile ıslatın. Bisküvilerin üzerini çok fazla taşmayacak şekilde krema ile kaplayın.' +
        'Aynı işlemi diğer porsiyonları hazırlamak için sırasıyla tekrarlayın. Tatlıların üzerine bir çay süzgeci ile servisinde kullanacağınız kakaoyu eleyin.' +
        'Daha lezzetli olması için buzdolabında en az iki saat beklettikten sonra soğuk olarak ve bekletmeden sevdiklerinizle paylaşın.</p>';

    panelBody.innerHTML += malzemelerHtml + nasilYapilirHtml;
});
