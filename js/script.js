let ui = setInterval(function(){
    let random = Math.floor(Math.random()*1000);
    let random2 = Math.floor(Math.random()*10000);
    document.getElementById("activities").innerHTML=random;
    document.getElementById("participant").innerHTML=random2;
    return
},50);

let stop = setInterval(function(){
    clearInterval(ui);
},2000);