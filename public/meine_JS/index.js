function activeTab() {
  return '<li class="active"><a href="#">KlassenInfo</a></li><li ><a href="./SchuelerInfo.html">SchuelerInfo</a></li><li><a href="#">asdf</a></li>'
}

function getColor() {
  return "teal"
}

let Klassenliste = ['1AHELS', '2AHELS', '3AHELS', '4AHELS', '5AHELS', '5BHELS']

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
  let TestInfo
  let badge = ''
  let Überschrift = '<div class="row"><div class="col s3 center"><p class="flow-text">Typ</p></div> <div class="col s3 center"><p class="flow-text">Fach</p></div> <div class="col s3 center"><p class="flow-text">Datum</p></div> <div class="col s3 center"><p class="flow-text">Ø</p></div></div>'
  if (KlassenInfo.length == 0) {
    badge+="<div class='center'><h5>Keine Tests eingetragen.</h5></div>"
  } else {
    for (let j = 0; j < KlassenInfo.length; j++) {
      badge += '<li>'
      badge += '<div class="collapsible-header"><div class="row"><div class="col s3 center">' + KlassenInfo[j].Typ + '</div><div class="col s3 center"> ' + KlassenInfo[j].Fach + '</div><div class="col s3 center">' + KlassenInfo[j].Datum + '</div><div class="col s3 center">' + KlassenInfo[j].Notendurchschnitt + '</div></div></div>'
      TestInfo = getTestInfo(KlassenInfo[j].Tid)
      badge += '<div class="collapsible-body">'
      if (TestInfo == null) {
        badge += "<div class='center'>Kein Schüler eingetragen.</div>"
      } else {
        badge += '<div class="row"><div class="col s3 center"><b>Name</b></div> <div class="col s3 center"><b>Punktestand</b></div> <div class="col s3 center"><b>Note</b></div> <div class="col s3 center"><b>Bemerkung</b></div></div>'
        for (var i = 0; i < TestInfo.length; i++) {
          badge += '<div class="row"><div class="col s3 center">' + TestInfo[i].Name + '</div> <div class="col s3 center">' + TestInfo[i].Punktestand + '</div> <div class="col s3 center">' + TestInfo[i].Note + '</div> <div class="col s3 center">' + TestInfo[i].Bemerkung + '</div></div>'
        }
      }
      badge += '</div>'
      badge += '</li>'
    }
  }
  badge += ''
  document.getElementById('klassenÜ').innerHTML = Überschrift
  document.getElementById('KlassenTestInfo').innerHTML = badge
}
