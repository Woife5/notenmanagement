

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
