import Notiflix from 'notiflix';
const notiflix = {
  useIcon: false,
};

const inputDelay = document.querySelector('[name="delay"]');
const inputStep = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const formForPromises = document.querySelector('.form');

btnCriatePromises.addEventListener('click', e => {
  e.preventDefault();
  for (let i = 0; i < +inputAmount.value; i += 1) {
    const position = i + 1;
    const delay = +inputDelay.value + +inputStep.value * i;
    console.log(delay);

    createPromise(position, delay)
      .then(() => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// const howManyDelays = document.querySelector('.input-v');
// const delay = document.querySelector('.input-d');
// const btn = document.querySelector('.btn');
// console.log('🚀 ~ file: index.js ~ line 3 ~ btn', btn);
// let count = 0;
// btn.addEventListener('click', e => {
//   console.log('🚀 ~ file: index.js ~ line 18 ~ btn.addEventListener ~ e', e);
//   e.preventDefault();
//   for (let i = 0; i < +delay.value; i += 1) {
//     setTimeout(() => {
//       // createPromise()
//       console.log(1111111111, i * +howManyDelays.value);
//     }, i * +howManyDelays.value);
//   }
// });
