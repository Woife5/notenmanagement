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
}

function getKlassenTest(Klasse, callback){
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/classes/'+Klasse)
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
}
function getTestInfo(TestID, callback){
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/test/'+TestID)
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
}

function getSchülerListe(callback){
  let httpReq = new XMLHttpRequest()
  httpReq.open("GET", '/api/students')
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
}

function getSchülerInfo(schueler,callback){
  let httpReq = new XMLHttpRequest()
  console.log("im getSchülerInfo");
  httpReq.open("GET", '/api/student/'+schueler)
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
}
