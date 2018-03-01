function activeTab() {
  return '<li class="active"><a href="#">KlassenInfo</a></li><li ><a href="#">asdf</a></li><li><a href="#">asdf</a></li>'
}

let Klassenliste = ['1AHELS', '2AHELS', '3AHELS', '4AHELS', '5AHELS']

function Klassendropdown() {
  let drop = ''
  for (let i = 0; i < Klassenliste.length; i++) {
    drop += '<li><a onclick="KlassenÜbersicht(this)" href="#!">' + Klassenliste[i] + '</a></li>'
  }
  document.getElementById("Klassendropdown").innerHTML = drop
}



function KlassenÜbersicht(Klasse) {
  Klasse = Klasse.innerHTML
  let KlassenInfo = getKlassenTest(Klasse)
  let badge = ''
  badge += '<li><div class="collapsible-header"> Typ Fach Datum Notendurchschnitt</div><div class="collapsible-body"><p>Header</p></div>'
  badge += '</li>'
  for (let j = 0; j < KlassenInfo.length; j++) {
    badge += '<li>'
    badge += '<div class="collapsible-header">'+KlassenInfo[j].Typ+' '+KlassenInfo[j].Fach+' '+KlassenInfo[j].Datum+' '+KlassenInfo[j].Notendurchschnitt+'</div>'
    badge+='<div class="collapsible-body"><p>'+j+'</p></div>'
    badge+='</li>'
  }
console.log(badge);
  document.getElementById('KlassenTestInfo').innerHTML = badge
}
