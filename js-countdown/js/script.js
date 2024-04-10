let seconds = parseInt(document.getElementById("seconds").innerHTML);

const stop = setInterval(function(){
    seconds--;
    if(seconds === 0){
        document.getElementById("seconds").innerHTML = "BUON ANNO";
        clearInterval(stop);
    } else{
        document.getElementById("seconds").innerHTML = seconds;
    }
},1000);