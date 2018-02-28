let KlassenInfo={'AHELS5': [
    {"Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
] }


function getKlassenTest(){
console.log(KlassenInfo.AHELS5[1].Typ);
  return KlassenInfo
}
