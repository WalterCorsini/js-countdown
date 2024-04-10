/**
 * Description save time in an html element
 * @param {number} m    // minutes
 * @param {number} s    // seconds
 * 
 */
function PrintToHtml(m, s) {
    let strSeconds = 0;
    let strMinutes = 0;
    if (s <= 9) {
        strSeconds = "0" + s;
    } else {
        strSeconds = s;
    }

    if (m <= 9) {
        strMinutes = "0" + m;
    } else {
        strMinutes = m;
    }
    displayS.innerHTML = strSeconds;
    displayM.innerHTML = strMinutes;
}

/**
 * Description reset element html and variable
 * 
 */
function reset() {
    startBtn.innerHTML = "start";
    stopBtn.classList.add("disabled");
    displayM.innerHTML = "00";
    displayS.innerHTML = "00";
    seconds = 0;
    minutes = 0;
    controll = 1;
}


/**
 * Description save best time in element html
 * 
 */
function saveBestTime() {

    if (minutes == 0 && seconds == 0) {
        alert("fai partire prima il tempo");
    } else {
        liElem = document.createElement("li");
        liElem.innerHTML =
            contRecords + ") " + minutes + " minuti : " + seconds + " secondi";
        document.getElementById("records").append(liElem);
        contRecords++;
    }

}