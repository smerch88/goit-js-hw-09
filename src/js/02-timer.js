"use strict";
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector("#datetime-picker");
const startRef = document.querySelector("[data-start]");
const daysRef = document.querySelector("[data-days]");
const hoursRef = document.querySelector("[data-hours]");
const minutesRef = document.querySelector("[data-minutes]");
const secondsRef = document.querySelector("[data-seconds]");
let savedDate;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    savedDate = selectedDates[0].getTime();
    console.log(savedDate);
    const dateNow = new Date();
    if (selectedDates[0] < dateNow) {
      startRef.disabled = true;
      return window.alert("error");
    } else startRef.disabled = false;
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(inputRef, options);

function timerRun() {
  timerId = setInterval(() => {
    const dateNow = new Date();
    const date = savedDate - dateNow.getTime();
    let convertedDate = convertMs(date);
    daysRef.textContent = addLeadingZero(convertedDate.days);
    hoursRef.textContent = addLeadingZero(convertedDate.hours);
    minutesRef.textContent = addLeadingZero(convertedDate.minutes);
    secondsRef.textContent = addLeadingZero(convertedDate.seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, "0");
}

startRef.addEventListener("click", timerRun);
