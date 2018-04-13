$(document).ready(function() {
  autocomlete()

});

function activeTab() {
  return '<li ><a href="./index.html">KlassenInfo</a></li><li class="active"><a href="#">SchuelerInfo</a></li><li><a href="#">asdf</a></li>'
}

function getColor() {
  return "pink"
}

function onload(){
  document.getElementById('searchdiv').innerHTML = '<div class="row"><div class="col s12"><div class="row"><div class="input-field col s12"><input type="text" id="autocomplete-input" class="autocomplete" ><label for="autocomplete-input">Schüler</label></div></div></div></div>'
  $('input.autocomplete').autocomplete({
    data: schueler,
  });
}

function autocomlete() {
  getSchülerListe(function(responseSchuelerListe) {
    $('input.autocomplete').autocomplete({
      data: responseSchuelerListe,
      onautocomlete:showTest(this)
    });
  })
}

function showTests(schueler){
  getSchülerInfo(schueler, function(response) {
    let x=''
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      console.log(response[i]);
    }
  })
}