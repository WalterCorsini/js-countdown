let secondi = 0
let minuti = 0
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
console.log(startBtn,stopBtn);
startBtn.addEventListener("click", function(){
    startBtn.classList.add("disabled");
    stopBtn.classList.remove("disabled");
    const stop = setInterval(function(){
        console.log("ciao");
    },1000);
    stopBtn.addEventListener("click", function(){
        clearInterval(stop);
        startBtn.classList.remove("disabled");
        stopBtn.classList.add("disabled");
    });
});
