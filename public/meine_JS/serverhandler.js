let KlassenInfo={'5AHELS': [
    {"Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
],
'4AHELS': [
    {"Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
],
'3AHELS': [
    {"Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"}
],
'2AHELS': [
    {"Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
],
'1AHELS': [
    {"Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
] }


function getKlassenTest(Klasse){
  console.log(Klasse);
  console.log(KlassenInfo[Klasse])
  return KlassenInfo[Klasse]
}
