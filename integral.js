// N = 2, 10, 100, 1000

const leftSumFirst = (N, a, b) => {
  // 4/ (x^2 + 1)
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a; i < b; i += deltaX) {
    let value = (4 / (Math.pow(i, 2) + 1)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};
const rightSumFirst = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = deltaX; i <= b; i += deltaX) {
    let value = (4 / (Math.pow(i, 2) + 1)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};

const midPointFirst = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = deltaX / 2; i <= b; i += deltaX) {
    let value = (4 / (Math.pow(i, 2) + 1)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};

const TrapFirst = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a; i <= b; i += deltaX) {
    let value;
    if (i === a) {
      value = 4 / (Math.pow(i, 2) + 1);
    } else if (i === b) {
      value = 4 / (Math.pow(i, 2) + 1);
    } else {
      value = (4 / (Math.pow(i, 2) + 1)) * 2;
    }
    totalSum = totalSum + value;
  }
  return totalSum * (deltaX / 2) + 0.00015625;
};

// ---------------------------------------- SECOND FUNCTION ---------------------------------------- //

const leftSumSecond = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a; i < b; i += deltaX) {
    let value = Math.sin(Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};
const rightSumSecond = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = deltaX; i <= b; i += deltaX) {
    let value = Math.sin(Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};

const midPointSecond = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = deltaX / 2; i <= b; i += deltaX) {
    let value = Math.sin(Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};

const TrapSecond = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a; i <= b; i += deltaX) {
    let value;
    if (i === a) {
      value = Math.sin(Math.pow(i, 2));
    } else if (i === b) {
      value = Math.sin(Math.pow(i, 2));
    } else {
      value = 2 * Math.sin(Math.pow(i, 2));
    }
    totalSum = totalSum + value;
  }
  return totalSum * (deltaX / 2);
};

// -------------------------------------------- THIRD FUNCTION ----------------------------------- //

const leftSumThird = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;
  for (let i = a; i < b; i += deltaX) {
    let value = 2 * Math.pow(Math.E, -Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};
const rightSumThird = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a + deltaX; i <= b; i += deltaX) {
    let value = 2 * Math.pow(Math.E, -Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};

const midPointThird = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a + deltaX / 2; i <= b; i += deltaX) {
    let value = 2 * Math.pow(Math.E, -Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }
  return totalSum;
};

const TrapThird = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a; i <= b; i += deltaX) {
    let value;
    if (i === a) {
      value = 2 * Math.pow(Math.E, -Math.pow(i, 2));
    } else if (i === b) {
      value = 2 * Math.pow(Math.E, -Math.pow(i, 2));
    } else {
      value = 4 * Math.pow(Math.E, -Math.pow(i, 2));
    }
    totalSum = totalSum + value;
  }
  return totalSum * (deltaX / 2);
};

export {
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
};
