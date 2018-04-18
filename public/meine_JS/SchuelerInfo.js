function activeTab() {
  return '<li ><a href="./index.html">KlassenInfo</a></li><li class="active"><a href="#">SchuelerInfo</a></li><li><a href="#">asdf</a></li>'
}
function getColor(){
  return "pink"
}
let schueler={
  "Franz": null,
  "Martin": null,
  "Wolfgang": null
}

function onload(){
  document.getElementById('searchdiv').innerHTML = '<div class="row"><div class="col s12"><div class="row"><div class="input-field col s12"><form onsubmit="search()"><input type="text" id="autocomplete-input" class="autocomplete" ><label for="autocomplete-input">Schüler</label></form></div></div></div></div>'
  $('input.autocomplete').autocomplete({
    data: schueler,
  });
}

function search(){
  
  return false
}
