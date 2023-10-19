const valueInput = document.getElementById("valueHere");
const twoSumButton = document.getElementById("twoSumButton");
const arrNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

function stretchValue(arr, target) {
  if (typeof arr === "object") {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          results.push(`${arr[i]} + ${arr[j]}`);
        }
      }
    }

    if (results.length > 0) {
      valueInput.innerText = "Ways to make the target number:";
      results.forEach((result) => {
        valueInput.innerText += "\n" + result;
      });
    } else {
      valueInput.innerText = "No two numbers found that add up to the target.";
    }
  }
}

twoSumButton.addEventListener("click", () => {
  const targetInput = prompt("Pick a number between 1 and 50!");
  const targetInputNum = +targetInput;

  if (!isNaN(targetInputNum) && targetInputNum >= 1 && targetInputNum <= 50) {
    stretchValue(arrNum, targetInputNum);
  } else {
    valueInput.innerText =
      "Invalid input. Please pick a number between 1 and 50.";
  }
});

//     for (let i = 0; i < arr.length; i++) {
//       let remainder = target - arr[i];

//       if (arr.includes(remainder)) {
//         if (arr[i] + remainder === target) {
//           valueInput.innerText = `${arr[i]} + ${remainder} = ${target}`;
//           return;
//         }
//       }
//     }
//     valueInput.innerText = "No two numbers found that add up to the target.";
//   }
// }

// twoSumButton.addEventListener("click", () => {
//   const targetInput = prompt("Pick a number between 1 and 50!");
//   const targetInputNum = +targetInput;
//   console.log(typeof targetInputNum);
//   stretchValue(arrNum, targetInputNum);
// });

// R2 animation, random start point

const viewportHeight = window.innerHeight;
const r2d2Container = document.querySelector(".r2d2-container");

function setRandomStartPosition() {
  const randomTop = Math.floor(Math.random() * viewportHeight);
  r2d2Container.style.top = `${randomTop}px`;
}

setRandomStartPosition();

// Reset the position when the animation completes
r2d2Container.addEventListener("animationiteration", setRandomStartPosition);
