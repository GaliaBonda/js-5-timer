/* eslint-disable import/prefer-default-export */
import * as moment from '../node_modules/moment/moment';

const timerInput : HTMLInputElement = <HTMLInputElement>document.getElementById('timer-input');
const timerMoreBtn : HTMLElement = document.getElementById('timer-more-btn');
const timerLessBtn : HTMLElement = document.getElementById('timer-less-btn');

timerMoreBtn.onclick = () => {
  if (!timerInput.value) {
    timerInput.value = '0';
  }
  let inputTime : number = parseInt(timerInput.value, 10);
  inputTime += 1;
  timerInput.value = inputTime.toString();
};
timerLessBtn.onclick = () => {
  let inputTime : number = parseInt(timerInput.value, 10);
  if (inputTime > 0) {
    inputTime -= 1;
    timerInput.value = inputTime.toString();
  } else {
    // eslint-disable-next-line no-alert
    alert('Wanna go back in time? Good luck with that!');
  }
};

timerInput.oninput = () => {
  if (Number.isNaN(parseInt(timerInput.value, 10))) {
    // eslint-disable-next-line no-alert
    alert('What kind of time is that?');
    timerInput.value = '0';
  }
};

export function runTimer() {
  let usersTime;
  const start : HTMLElement= document.getElementById('start');
  start.onclick = () => {
    usersTime = timerInput.value;
    const time : moment.Moment = moment({ minute: parseInt(usersTime, 10), second: 0 });
    const timerText : HTMLElement = document.getElementById('timer-text');
    timerText.innerHTML = 'Осталось:';
    const timerMenu : HTMLElement = document.getElementById('timer-menu');
    timerMenu.style.display = 'none';
    start.style.display = 'none';
    const timerOutput : HTMLDivElement = document.createElement('div');
    timerOutput.classList.add('timer-output');
    const timer : HTMLElement = document.getElementById('timer');
    timer.appendChild(timerOutput);

    timerOutput.innerHTML = time.format('mm:ss');
    const timing : number = setInterval(() => {
      const newTime : moment.Moment = time.subtract(1, 'seconds');
      timerOutput.innerHTML = newTime.format('mm:ss');
    }, 1000);
    setTimeout(() => {
      clearInterval(timing);
    }, parseInt(usersTime, 10) * 1000 * 60);
  };
}
