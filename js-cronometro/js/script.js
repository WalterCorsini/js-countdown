// INPUT
// declaration variable
let seconds = 0;                                                                // seconds variable
let minutes = 0;                                                                // minutes variable
const startBtn = document.getElementById("start");                              // button start
const stopBtn = document.getElementById("stop");                                //button reset
const displayM = document.getElementById("minutes");                            // minutes display
const displayS = document.getElementById("seconds");                            // seconds display
const message = document.getElementById("message");                             // max time arrived
let controll = false;                                                           // controll start or pause
let contRecords = 1;                                                            // records counter
// LOGIC
startBtn.addEventListener("click", function () {   
    startBtn.classList.add("disabled");                                         // start button event click
    message.innerHTML = "";                                                     // reset message max time arrived
    if(controll === true){
        controll = false;
        setTimeout(function(){
            // per provare a disabilitare e riattivare start
                startBtn.classList.remove("disabled");
        },1000);  
    } else {
        controll = true;
        setTimeout(function(){
            // per provare a disabilitare e riattivare start
            startBtn.classList.remove("disabled");
        },1000); 
        stopBtn.classList.remove("disabled");                                   // remove class disable at reset btn
    }                                                                           // increment controll start button
    const stop = setInterval(function () {
        startBtn.classList.add("disabled");
        if (controll === true) {                                               // run the code or not
            startBtn.innerText = "pause";                                       // trasform text of btn star in "pause"
            seconds++;                                                          // increment seconds
            if (seconds == 60) {                                                 // controll max seconds
                seconds = 0;                                                    // reset value second
                minutes++;                                                      // increment minutes
            } else if (minutes == 60) {                                          // controll max minutes
                seconds = 0;                                                    // reset seconds variable
                message.innerHTML = "hai superato il tempo limite di 1 ora";    // show on page message
                saveBestTime();                                                 // message max time arrived
                clearInterval(stop);                                            // stop setInterval
                reset();                                                        // reset display and variable with function
            }
            console.log(seconds);
            PrintToHtml(minutes, seconds);                                       //function show result HTML
        } else {
            //  inposto set timeout 1 secondo per resettarlo
            startBtn.innerText = "start ";                                      // trasform text of btn start in "start"
            clearInterval(stop);                                                //stop setInterval
        }
        startBtn.classList.remove("disabled");
    }, 1000);                                                                   // set interval 1 second
});
stopBtn.addEventListener("click", function () {                                 // reset button Event Click
    stopBtn.classList.add("disabled");                                          // add class disablet to reset btn            
    saveBestTime();                                                             // save best time with function
    clearInterval(stop);                                                        // stop setInterval
    reset();                                                                    // reset display and variable with function
});
