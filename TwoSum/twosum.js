const valueInput = document.getElementById("valueHere");
const twoSumButton = document.getElementById("twoSumButton");
const arrNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

function stretchValue(arr, target) {
  if (typeof arr === "object") {
    for (let i = 0; i < arr.length; i++) {
      let remainder = target - arr[i];

      if (arr.includes(remainder)) {
        if (arr[i] + remainder === target) {
          valueInput.innerText = `${arr[i]} + ${remainder} = ${target}`;
          return;
        }
      }
    }
    valueInput.innerText = "No two numbers found that add up to the target.";
  }
}

twoSumButton.addEventListener("click", () => {
  const targetInput = prompt("Pick a number between 1 and 50!");
  const targetInputNum = +targetInput;
  console.log(typeof targetInputNum);
  stretchValue(arrNum, targetInputNum);
});
