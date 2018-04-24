$(document).ready(function() {


});

function activeTab() {
  return '<li ><a href="./index.html">KlassenInfo</a></li><li class="active"><a href="#">SchuelerInfo</a></li><li><a href="./eintagen.html">Eintragen</a></li>'
}

function getColor() {
  return "pink"
}

function onload(){
  let form='<div class="row"><div class="col s12"><div class="row">'
  form+='<form onsubmit="showTests(); return false" ><div class="input-field col s11">'
  form+='<input type="text" id="autocomplete-input" class="autocomplete" autocomplete="off"><label for="autocomplete-input">Schüler</label>'
  form+='<button class="btn waves-effect waves-light col s12" id="submitbutton" type="submit" value="Value">Submit<i class="material-icons right">send</i></button>'
  form+='</div></form></div></div></div>'

  document.getElementById('searchdiv').innerHTML = form
  getSchülerListe(function(responseSchuelerListe) {
    let SchuelerListe={}
    for (var i = 0; i < responseSchuelerListe.length; i++) {
      SchuelerListe[responseSchuelerListe[i].firstname+" "+responseSchuelerListe[i].lastname]=null
    }
    $('input.autocomplete').autocomplete({
      data: SchuelerListe,
      onAutocomplete:function(val){
        showTests()
      }
    });
  })
}


function showTests(){
  let schueler=document.getElementById("autocomplete-input").value

  getSchülerInfo(schueler, function(response) {
    let subject
    let x=''

    x+='<div class="collection with-header row">'
    x+='<li class="collection-header"><h5 class="col s2">Fach</h5>'
    x+='<h5 class="col s2">Datum</h5>'
    x+='<h5 class="col s2">Typ</h5>'
    x+='<h5 class="col s2">Note</h5>'
    x+='<h5 class="col s2">Punke</h5>'
    x+='<h5 class="col s2">Max Punkte</h5></li>'

    for (let i = 0; i < response.length; i++) {

      x+='<a href="#!" class="collection-item"><div class="col s2">'+response[i].subject+'</div> <div class="col s2">'+response[i].date+'</div> <div class="col s2">'+response[i].type+'</div> <div class="col s2">'+response[i].grade+'</div> <div class="col s2">'+response[i].points+'</div> <div class="col s2">'+response[i].maxpoints+'</div></a>'
      console.log(response[i]);
    }
    x+='</div>'
    document.getElementById("searchcontent").innerHTML=x
  })
}
