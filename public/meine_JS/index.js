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
  let Überschrift='<div class="row"><div class="col s3 center"><p class="flow-text">Typ</p></div> <div class="col s3 center"><p class="flow-text">Fach</p></div> <div class="col s3 center"><p class="flow-text">Datum</p></div> <div class="col s3 center"><p class="flow-text">Ø</p></div></div>'
  badge += ''
  for (let j = 0; j < KlassenInfo.length; j++) {
    badge += '<li>'
    badge += '<div class="collapsible-header"><div class="row"><div class="col s3 center">'+KlassenInfo[j].Typ+'</div><div class="col s3 center"> '+KlassenInfo[j].Fach+'</div><div class="col s3 center">'+KlassenInfo[j].Datum+'</div><div class="col s3 center">'+KlassenInfo[j].Notendurchschnitt+'</div></div></div>'
    badge+='<div class="collapsible-body"><p>'+j+'</p></div>'
    badge+='</li>'
  }
  badge+=''
  document.getElementById('klassenÜ').innerHTML = Überschrift
  document.getElementById('KlassenTestInfo').innerHTML=badge
}
