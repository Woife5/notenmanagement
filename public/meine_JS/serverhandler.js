let KlassenInfo={'5AHELS': [
    {"Tid":"0","Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Tid":"1","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Tid":"2","Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Tid":"3","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
],
'4AHELS': [
    {"Tid":"4","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Tid":"5","Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Tid":"6","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
],
'3AHELS': [
    {"Tid":"7","Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Tid":"8","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"}
],
'2AHELS': [
    {"Tid":"9","Typ":"SMÜP", "Fach":"Englisch","Datum":"20.2.2018","Notendurchschnitt":"2,8"},
    {"Tid":"10","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
],
'1AHELS': [
    {"Tid":"11","Typ":"Test", "Fach":"Fsst","Datum":"20.2.2018","Notendurchschnitt":"3,2"},
    {"Tid":"12","Typ":"SA", "Fach":"Mathe","Datum":"15.2.2018","Notendurchschnitt":"2,2"},
    {"Tid":"13","Typ":"Test", "Fach":"KSN","Datum":"24.2.2018","Notendurchschnitt":"3,6"}
] }

let TestInfo={
  "0":[{"Name":"Hans Gruber","Punktestand":"10/20","Note":"4","Bemerkung":"4-5"},
        {"Name":"Spp","Punktestand":"13/20","Note":"3","Bemerkung":""}],
  "1":[{"Name":"Peter","Punktestand":"11/10","Note":"1","Bemerkung":"+"}],
  "2":[{"Name":"Fritz","Punktestand":"15/23","Note":"3","Bemerkung":"3-4"}],
  "3":[{"Name":"Pepe","Punktestand":"13/20","Note":"3","Bemerkung":""}]
}


function getKlassenTest(Klasse){
  /*let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/'+Klasse)
  httpReq.onload = function() {
    if(this.status != 200){
      let errData = JSON.parse(this.responseText)
      Materialize.toast(errData['userdesc'],errorduration,errorcolor)
    }else{
      let resData = JSON.parse(this.responseText)
      callback(JSON.parse(this.responseText))
    }
  }*/
  return KlassenInfo[Klasse]
}
function getTestInfo(Test){
  let schülerliste=TestInfo[Test]
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
