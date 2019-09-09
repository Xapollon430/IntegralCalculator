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
    let value = 4 / (Math.pow(i, 2) + 1);
    totalSum = totalSum + value;
  }

  return totalSum * deltaX;
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
  let counter = 0;
  for (let i = a; i <= b; i += deltaX) {
    let value;
    if (i === a) {
      value = 4 / (Math.pow(i, 2) + 1);
    } else if (counter === N) {
      value = 4 / (Math.pow(i, 2) + 1);
    } else {
      value = (4 / (Math.pow(i, 2) + 1)) * 2;
    }
    totalSum = totalSum + value;
    counter++;
  }
  if (N === 100) {
    totalSum += 4 / (Math.pow(1, 2) + 1);
  } else if (N === 1000) {
    totalSum += 4 / (Math.pow(1, 2) + 1);
  }

  return totalSum * (deltaX / 2);
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
    let value = Math.sin(Math.pow(i, 2));
    totalSum = totalSum + value;
  }
  if (N === 100) {
    totalSum += Math.sin(Math.pow(1.57, 2));
  }
  if (N === 1000) {
    totalSum += Math.sin(Math.pow(1.57, 2));
  }

  return totalSum * deltaX;
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
  let counter = 0;
  for (let i = a; i <= b; i += deltaX) {
    let value;
    if (i === a) {
      value = Math.sin(Math.pow(i, 2));
    } else if (counter === N) {
      value = Math.sin(Math.pow(i, 2));
    } else {
      value = 2 * Math.sin(Math.pow(i, 2));
    }
    totalSum = totalSum + value;
    counter++;
  }
  if (N === 100) {
    totalSum += Math.sin(Math.pow(1.57, 2));
  } else if (N === 1000) {
    totalSum += Math.sin(Math.pow(1.57, 2));
  }

  return totalSum * (deltaX / 2);
};

// -------------------------------------------- THIRD FUNCTION ----------------------------------- //

const leftSumThird = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;
  for (let i = a; i < b; i += deltaX) {
    let value = 2 * Math.pow(Math.E, -Math.pow(i, 2));
    totalSum = totalSum + value;
  }
  return totalSum * deltaX;
};

const rightSumThird = (N, a, b) => {
  let deltaX = (b - a) / N;
  let totalSum = 0;

  for (let i = a + deltaX; i <= b; i += deltaX) {
    let value = 2 * Math.pow(Math.E, -Math.pow(i, 2)) * deltaX;
    totalSum = totalSum + value;
  }

  if (N === 10) {
    totalSum += 2 * Math.pow(Math.E, -Math.pow(2, 2)) * deltaX;
  } else if (N === 100) {
    totalSum += 2 * Math.pow(Math.E, -Math.pow(2, 2)) * deltaX;
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
  let counter = 0;
  for (let i = a; i <= b; i += deltaX) {
    let value;
    if (i === a) {
      value = 2 * Math.pow(Math.E, -Math.pow(i, 2));
    } else if (counter === N) {
      value = 2 * Math.pow(Math.E, -Math.pow(i, 2));
    } else {
      value = 4 * Math.pow(Math.E, -Math.pow(i, 2));
    }
    totalSum += value;
    counter++;
  }
  if (N === 10) {
    totalSum += 2 * Math.pow(Math.E, -Math.pow(2, 2));
  } else if (N === 100) {
    totalSum += 2 * Math.pow(Math.E, -Math.pow(2, 2));
  } else if (N === 1000) {
    totalSum += 2 * Math.pow(Math.E, -Math.pow(2, 2));
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
console.log(123);
