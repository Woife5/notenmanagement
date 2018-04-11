$(document).ready(function() {
  Klassendropdown()
})

function activeTab() {
  return '<li class="active"><a href="#">KlassenInfo</a></li><li ><a href="./SchuelerInfo.html">SchuelerInfo</a></li><li><a href="#">asdf</a></li>'
}

function getColor() {
  return "teal"
}

function Klassendropdown() {
  let drop = ''
  getKlassen(function(response) {
    for (let i = 0; i < response.length; i++) {
      drop += '<li><a onclick="KlassenÜbersicht(this)" href="#!">' + response[i].class + '</a></li>'
    }
    document.getElementById("Klassendropdown").innerHTML = drop
  })
}

function KlassenÜbersicht(Klasse) {
    document.getElementById('KlassenTestInfo').innerHTML = ''
  Klasse = Klasse.innerHTML
  getKlassenTest(Klasse, function(responseKlassen) {
    let TestInfo
    let badge = ''
    let Überschrift = '<div class="row"><div class="col s3 center"><p class="flow-text">Typ</p></div> <div class="col s3 center"><p class="flow-text">Fach</p></div> <div class="col s3 center"><p class="flow-text">Datum</p></div> <div class="col s3 center"><p class="flow-text">Ø</p></div></div>'
    if (responseKlassen.length == 0) {
      badge += "<div class='center'><h5>Keine Tests eingetragen.</h5></div>"
    } else {
      console.log(responseKlassen);
      for (let j = 0; j < responseKlassen.length; j++) {
        badge += '<li>'
        badge += '<div class="collapsible-header"><div class="row"><div class="col s3 center">' + responseKlassen[j].type + '</div><div class="col s3 center"> ' + responseKlassen[j].subject + '</div><div class="col s3 center">' + responseKlassen[j].date + '</div><div class="col s3 center">' + responseKlassen[j].avggrade + '</div></div></div>'
        getTestInfo(responseKlassen[j].testkey, function(TestInfo) {
            badge += '<div class="collapsible-body">'
            if (TestInfo == null) {
              console.log("kein schüler eingetragen");
              badge += "<div class='center'>Kein Schüler eingetragen.</div>"
            } else {

              badge += '<div class="row"><div class="col s3 center"><b>Name</b></div> <div class="col s3 center"><b>Punktestand</b></div> <div class="col s3 center"><b>Note</b></div> <div class="col s3 center"><b>Bemerkung</b></div></div>'
              for (var i = 0; i < TestInfo.length; i++) {
                badge += '<div class="row"><div class="col s3 center">' + TestInfo[i].firstname +" "+TestInfo[i].lastname + '</div> <div class="col s3 center">' + TestInfo[i].points + '</div> <div class="col s3 center">' + TestInfo[i].grade + '</div> <div class="col s3 center">' + TestInfo[i].comment + '</div></div>'
              }
            }
            badge += '</div>'
            badge += '</li>'
            badge += ''
            console.log(badge);
            document.getElementById('klassenÜ').innerHTML = Überschrift
            document.getElementById('KlassenTestInfo').innerHTML = badge
          })
        }
    }
  })

}
