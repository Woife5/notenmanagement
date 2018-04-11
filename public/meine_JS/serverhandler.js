function getKlassen(callback){
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/classes')
  httpReq.onload = function() {
    if(this.status != 200){
      let errData = JSON.parse(this.responseText)
    }else{
      let resData = JSON.parse(this.responseText)
      console.log(resData)
      callback(resData)
    }
  }
  httpReq.send(null)
console.log("nach serverhandler");
}

function getKlassenTest(Klasse, callback){
  console.log("getKlassenTest callback anfgan");
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/classes/'+Klasse)
  httpReq.onload = function() {
    if(this.status != 200){
      let errData = JSON.parse(this.responseText)
    }else{
      let resData = JSON.parse(this.responseText)
      console.log(resData +"im getKlassenTest")
      callback(resData)
    }
  }
  httpReq.send(null)
console.log("nach serverhandler im getKlassenTest");
}/*
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
