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

 $(document).ready(function(){
   $('input.autocomplete').autocomplete({
     data: schueler,
   });
 });
