// INPUT
// declaration variable
let secondi = 0
let minuti = 0
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
console.log(startBtn,stopBtn);

// LOGIC


startBtn.addEventListener("click", function(){      // add event on click start button
    startBtn.classList.add("disabled");             // add class disabled start button 
    stopBtn.classList.remove("disabled");           // remove class disable stop button
    const stop = setInterval(function(){            // assign set interval to variable and start setInterval
        console.log("ciao");                        
    },1000);                                        // 1 second inteval
    stopBtn.addEventListener("click", function(){   // add event on click stop button
        clearInterval(stop);                        // stop set interval
        startBtn.classList.remove("disabled");      // remove start button class disabled
        stopBtn.classList.add("disabled");          // add stop button class disabled
    });
});
