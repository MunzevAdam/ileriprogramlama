
document.addEventListener("DOMContentLoaded", function () {
  var panelBody = document.querySelector('.panel-body');
  var sarmaImage = document.createElement('img');
  sarmaImage.setAttribute('src', 'assets/images/YEMEK.jpeg');
  sarmaImage.setAttribute('alt', 'sarma');
  panelBody.insertBefore(sarmaImage, panelBody.firstChild);

  var malzemelerList = [
    '300 gram asma yaprağı',
    '1 adet limon',
    '4 yemek kaşığı zeytinyağı',
    '1 su bardağı sıcak su'
  ];

  var icHarcList = [
    '6 yemek kaşığı zeytinyağı',
    '3 adet orta boy kuru soğan',
    '1,5 su bardağı pirinç',
    '1 su bardağı sıcak su',
    '1 yemek kaşığı dolmalık fıstık',
    '1 yemek kaşığı kuş üzümü',
    '1 çay kaşığı karabiber',
    '1 çay kaşığı yenibahar',
    '1/2 çay kaşığı tarçın',
    '1 adet kesme şeker',
    '1 çay kaşığı tuz'
  ];

  var malzemelerHtml = '<h4>Malzemeler:</h4><ul>';
  malzemelerList.forEach(function (malzeme) {
    malzemelerHtml += '<li>' + malzeme + '</li>';
  });
  malzemelerHtml += '</ul>';

  var icHarcHtml = '<h4>İç harcı için:</h4><ul>';
  icHarcList.forEach(function (malzeme) {
    icHarcHtml += '<li>' + malzeme + '</li>';
  });
  icHarcHtml += '</ul>';

  var malzemeIcerik = malzemelerHtml + icHarcHtml;
  panelBody.innerHTML += malzemeIcerik;
});
