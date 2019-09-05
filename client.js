import {
  leftSumFirst,
  rightSumFirst,
  midPointFirst,
  TrapFirst,
  leftSumSecond,
  rightSumSecond,
  midPointSecond,
  TrapSecond,
  leftSumThird,
  rightSumThird,
  midPointThird,
  TrapThird
} from "./integral.js";

let integralOneCalculate = document.querySelector("#integralOneCalculate");
let integralOneSolution = document.querySelector("#integralOneSolution");
let integralOneRadioInputs = document.querySelectorAll(".rectangleOne");
let integralOneMethods = document.querySelectorAll(".methodOne");
let integralTwoCalculate = document.querySelector("#integralTwoCalculate");
let integralTwoSolution = document.querySelector("#integralTwoSolution");
let integralTwoRadioInputs = document.querySelectorAll(".rectangleTwo");
let integralTwoMethods = document.querySelectorAll(".methodTwo");
let integralThreeCalculate = document.querySelector("#integralThreeCalculate");
let integralThreeSolution = document.querySelector("#integralThreeSolution");
let integralThreeRadioInputs = document.querySelectorAll(".rectangleThree");
let integralThreeMethods = document.querySelectorAll(".methodThree");

integralOneCalculate.addEventListener("click", () => {
  let rectangle;
  let method;
  let answer;
  for (let radio of integralOneRadioInputs) {
    if (radio.checked) {
      rectangle = radio.parentElement.querySelector("label").textContent;
    }
  }
  for (let radio of integralOneMethods) {
    if (radio.checked) {
      method = radio.parentElement.querySelector("label").textContent;
    }
  }

  switch (method) {
    case "Left Sum":
      answer = leftSumFirst(rectangle, 0, 1);
      break;

    case "Right Sum":
      answer = rightSumFirst(rectangle, 0, 1);
      break;

    case "Mid Point":
      answer = midPointFirst(rectangle, 0, 1);
      break;

    case "Trapezoid":
      answer = TrapFirst(rectangle, 0, 1);
  }

  if (answer) {
    integralOneSolution.value = answer;
  }
});

integralTwoCalculate.addEventListener("click", () => {
  let rectangle;
  let method;
  let answer;
  for (let radio of integralTwoRadioInputs) {
    if (radio.checked) {
      rectangle = radio.parentElement.querySelector("label").textContent;
    }
  }
  for (let radio of integralTwoMethods) {
    if (radio.checked) {
      method = radio.parentElement.querySelector("label").textContent;
    }
  }

  switch (method) {
    case "Left Sum":
      answer = leftSumSecond(rectangle, 0, 1);
      break;

    case "Right Sum":
      answer = rightSumSecond(rectangle, 0, 1);
      break;

    case "Mid Point":
      answer = midPointSecond(rectangle, 0, 1);
      break;

    case "Trapezoid":
      answer = TrapSecond(rectangle, 0, 1);
  }

  if (answer) {
    integralTwoSolution.value = answer;
  }
});

integralThreeCalculate.addEventListener("click", () => {
  let rectangle;
  let method;
  let answer;
  for (let radio of integralThreeRadioInputs) {
    if (radio.checked) {
      rectangle = radio.parentElement.querySelector("label").textContent;
    }
  }
  for (let radio of integralThreeMethods) {
    if (radio.checked) {
      method = radio.parentElement.querySelector("label").textContent;
    }
  }

  switch (method) {
    case "Left Sum":
      answer = leftSumThird(rectangle, 1, 2);
      break;

    case "Right Sum":
      answer = rightSumThird(rectangle, 1, 2);
      break;

    case "Mid Point":
      answer = midPointThird(rectangle, 1, 2);
      break;

    case "Trapezoid":
      console.log(rectangle);
      console.log(method);
      answer = TrapThird(rectangle, 1, 2);
  }

  if (answer) {
    integralThreeSolution.value = answer;
  }
});
