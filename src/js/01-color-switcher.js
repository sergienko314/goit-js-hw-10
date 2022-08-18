const onStart = document.querySelector('[data-start]');
const onStop = document.querySelector('[data-stop]');
const onBody = document.querySelector('body');
onStop.addEventListener('click', onStopFoo);
onStart.addEventListener('click', onStartFoo);
onStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let bgColor = null;

function onStartFoo() {
  if ((onStart.disabled = true)) {
    onStop.disabled = false;
  }

  bgColor = setInterval(() => {
    onBody.style.backgroundColor = getRandomHexColor();
    console.log('start interval');
  }, 1000);
}
function onStopFoo() {
  if ((onStop.disabled = true)) {
    onStart.disabled = false;
  }
  clearInterval(bgColor);
  console.log('stop interval');
}
console.log(onBody);

// function onStopFoo() {
//   if ((onStart.disabled = true)) onStop.Disabled = false;
// }
