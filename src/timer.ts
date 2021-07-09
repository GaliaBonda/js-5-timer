/* eslint-disable import/prefer-default-export */
import * as moment from '../node_modules/moment/moment';

const timerInput = <HTMLInputElement>document.getElementById('timer-input');
const timerMoreBtn = document.getElementById('timer-more-btn');
const timerLessBtn = document.getElementById('timer-less-btn');

timerMoreBtn.onclick = () => {
  if (!timerInput.value) {
    timerInput.value = '0';
  }
  let inputTime = parseInt(timerInput.value, 10);
  inputTime += 1;
  timerInput.value = inputTime.toString();
};
timerLessBtn.onclick = () => {
  let inputTime = parseInt(timerInput.value, 10);
  if (inputTime > 0) {
    inputTime -= 1;
    timerInput.value = inputTime.toString();
  } else {
    alert('Wanna go back in time? Good luck with that!');
  }
};

timerInput.oninput = () => {
  if (Number.isNaN(parseInt(timerInput.value, 10))) {
    alert('What kind of time is that?');
    timerInput.value = '0';
  }
};

export function runTimer() {
  let usersTime;
  const start = document.getElementById('start');
  start.onclick = () => {
    usersTime = timerInput.value;
    const time = moment({ minute: parseInt(usersTime, 10), second: 0 });
    const timerText = document.getElementById('timer-text');
    timerText.innerHTML = 'Осталось:';
    const timerMenu = document.getElementById('timer-menu');
    timerMenu.style.display = 'none';
    start.style.display = 'none';
    const timerOutput = document.createElement('div');
    timerOutput.classList.add('timer-output');
    const timer = document.getElementById('timer');
    timer.appendChild(timerOutput);

    timerOutput.innerHTML = time.format('mm:ss');
    const timing = setInterval(() => {
      const newTime = time.subtract(1, 'seconds');
      timerOutput.innerHTML = newTime.format('mm:ss');
    }, 1000);
    setTimeout(() => {
      clearInterval(timing);
    }, parseInt(usersTime, 10) * 1000 * 60);
  };
}
