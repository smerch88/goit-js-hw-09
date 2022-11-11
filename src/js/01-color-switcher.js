const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickEventStart = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startButton.disabled = true;
  stopButton.disabled = false;
};

const onClickEventStop = () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
};

startButton.addEventListener("click", onClickEventStart);
stopButton.addEventListener("click", onClickEventStop);
