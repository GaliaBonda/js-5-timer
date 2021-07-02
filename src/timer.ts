import * as moment from "../node_modules/moment/moment.js";

export function createTimer() {
    let timerDiv = document.getElementById('timer');
    let timeInput = document.createElement('input');
    timerDiv.appendChild(timeInput);
    let timeOutput = document.createElement('div');
    timerDiv.appendChild(timeOutput);
    let usersTime = '5';
    timeInput.onkeydown = (event) => {
        if (event.keyCode === 13) {
            usersTime = timeInput.value;
            //console.log(timeInput.value);
            let time = moment({ minute:parseInt(usersTime), second:0 });
            timeOutput.innerHTML = time.format('mm:ss');
            let timing = setInterval(function () {
                let newTime = time.subtract(1, 'seconds');
                timeOutput.innerHTML = newTime.format('mm:ss');
                //console.log(newTime.format('mm:ss'));
            }, 1000);
    setTimeout(() => { clearInterval(timing); }, parseInt(usersTime)*1000*60);
        }

    }
    
}