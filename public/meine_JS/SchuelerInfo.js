$(document).ready(function() {


});

function activeTab() {
  return '<li ><a href="./index.html">KlassenInfo</a></li><li class="active"><a href="#">SchuelerInfo</a></li><li><a href="./eintagen.html">Eintragen</a></li>'
}

function getColor() {
  return "pink"
}

function onload(){
  document.getElementById('searchdiv').innerHTML = '<div class="row"><div class="col s12"><div class="row"><div class="input-field col s12"><input type="text" id="autocomplete-input" class="autocomplete" ><label for="autocomplete-input">Schüler</label></div></div></div></div>'
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

    let x=''
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      console.log(response[i]);
    }
  })
}
