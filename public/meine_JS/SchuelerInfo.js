$(document).ready(function() {
  autocomlete()

});

function activeTab() {
  return '<li ><a href="./index.html">KlassenInfo</a></li><li class="active"><a href="#">SchuelerInfo</a></li><li><a href="#">asdf</a></li>'
}

function getColor() {
  return "pink"
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
}
