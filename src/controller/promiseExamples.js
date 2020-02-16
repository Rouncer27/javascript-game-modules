promiseButton.addEventListener("click", promiseLandTest);
const promiseLandTest = async function() {
  console.log("Hello");
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("yo promise");
      resolve("done");
      console.dir(resolve);
    }, 1000);
  });

  console.log(`on to the next one!!`);
  return;
};
const promiseButton = document.querySelector(".btn-promise");
// var clickPromise = new Promise(function(resolve) {
//   promiseButton.addEventListener(
//     "click",
//     function(e) {
//       resolve(e);
//       console.log("yep!");
//     },
//     { once: true }
//   );
// });

// console.log(clickPromise);
// console.log("hello done!");

// Start the game with a choice. //
