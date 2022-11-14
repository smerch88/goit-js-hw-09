import { Notify } from "notiflix/build/notiflix-notify-aio";

const formRef = document.querySelector("form");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    formRef.elements.delay.value,
    formRef.elements.step.value,
    formRef.elements.amount.value
  );
  let delayRef = Number(formRef.elements.delay.value);
  let stepRef = Number(formRef.elements.step.value);
  let amountRef = Number(formRef.elements.amount.value);

  for (let i = 1; i <= amountRef; i++) {
    createPromise(i, delayRef)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayRef += stepRef;
  }
});
