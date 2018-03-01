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
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/'+Klasse)
  httpReq.onload = function() {
    if(this.status != 200){
      let errData = JSON.parse(this.responseText)
      Materialize.toast(errData['userdesc'],errorduration,errorcolor)
    }else{
      let resData = JSON.parse(this.responseText)
      callback(JSON.parse(this.responseText))
    }
  }
  return KlassenInfo
}
function getSchüler(Test){
  let schülerliste
  return schülerliste
}

/*
function getReserved(year, month, day, lesson, callback){
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/'+year+'/'+month+'/'+day+'/'+lesson)
  httpReq.onload = function() {
    if(this.status != 200){
      let errData = JSON.parse(this.responseText)
      Materialize.toast(errData['userdesc'],errorduration,errorcolor)
    }else{
      callback(JSON.parse(this.responseText))
    }
  }
  httpReq.onerror = function() {
    Materialize.toast('Unknown network error occured',errorduration,errorcolor)
  }
  httpReq.send(null)
}
*/
