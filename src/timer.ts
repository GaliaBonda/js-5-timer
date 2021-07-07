import * as moment from '../node_modules/moment/moment.js';

let timerInput = <HTMLInputElement>document.getElementById('timer-input');
let timerMoreBtn = document.getElementById('timer-more-btn');
let timerLessBtn = document.getElementById('timer-less-btn');

timerMoreBtn.onclick = () => {
  if (!timerInput.value) {
    timerInput.value = '0';
  }
  let inputTime = parseInt(timerInput.value);
  inputTime++;
  timerInput.value = inputTime.toString();
};
timerLessBtn.onclick = () => {
  let inputTime = parseInt(timerInput.value);
  if (inputTime > 0) {
    inputTime--;
    timerInput.value = inputTime.toString();
  } else {
    alert('Wanna go back in time? Good luck with that!');
  }
};

timerInput.oninput = () => {
  if (isNaN(parseInt(timerInput.value))) {
    alert('What kind of time is that?');
    timerInput.value = '0';
  }
};

export function runTimer() {
  // let timerDiv = document.getElementById('timer');
  // let timeInput = document.createElement('input');
  // timerDiv.appendChild(timeInput);
  // let timeOutput = document.createElement('div');
  // timerDiv.appendChild(timeOutput);
  let usersTime;
  let start = document.getElementById('start');
  start.onclick = () => {
    usersTime = timerInput.value;
    //console.log(timeInput.value);
    let time = moment({ minute: parseInt(usersTime), second: 0 });
    //console.log(time);
    let timerText = document.getElementById('timer-text');
    timerText.innerHTML = 'Осталось:';
    let timerMenu = document.getElementById('timer-menu');
    timerMenu.style.display = 'none';
    start.style.display = 'none';
    let timerOutput = document.createElement('div');
    timerOutput.classList.add('timer-output');
    let timer = document.getElementById('timer');
    timer.appendChild(timerOutput);

    timerOutput.innerHTML = time.format('mm:ss');
    let timing = setInterval(function () {
      let newTime = time.subtract(1, 'seconds');
      timerOutput.innerHTML = newTime.format('mm:ss');
      //console.log(newTime.format('mm:ss'));
    }, 1000);
    setTimeout(() => {
      clearInterval(timing);
    }, parseInt(usersTime) * 1000 * 60);
  };

  // timerInput.onkeydown = (event) => {
  //     if (event.keyCode === 13) {
  //         usersTime = timerInput.value;
  //         //console.log(timeInput.value);
  //         let time = moment({ minute: parseInt(usersTime), second: 0 });
  //         //console.log(time);
  //         let timerText = document.getElementById('timer-text');
  //         timerText.innerHTML = 'Осталось:';
  //         let timerMenu = document.getElementById('timer-menu');
  //         timerMenu.style.display = 'none';
  //         // timeOutput.innerHTML = time.format('mm:ss');
  //         // let timing = setInterval(function () {
  //         //     let newTime = time.subtract(1, 'seconds');
  //         //     timeOutput.innerHTML = newTime.format('mm:ss');
  //         //     //console.log(newTime.format('mm:ss'));
  //         // }, 1000);
  //         // setTimeout(() => { clearInterval(timing); }, parseInt(usersTime) * 1000 * 60);
  //     }

  // }
}
