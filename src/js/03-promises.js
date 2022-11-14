const formRef = document.querySelector("form");
let delayRef;
let stepRef;
let amountRef;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    formRef.elements.delay.value,
    formRef.elements.step.value,
    formRef.elements.amount.value
  );
  delayRef = formRef.elements.delay.value;
  stepRef = formRef.elements.step.value;
  amountRef = formRef.elements.amount.value;
});
