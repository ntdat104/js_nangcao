//* higher order functions
function createSetTimout(ms, func) {
  setTimeout(func, ms);
}

function run() {
  console.log("Run...");
}

createSetTimout(2000, run);
