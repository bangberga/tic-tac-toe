const leftEdge = (index, width) => index % width === 0;
const rightEdge = (index, width) => index % width === width - 1;
const topEdge = (index, width) => index < width;
const bottomEdge = (index, width, height) => index >= width * height - width;

const isWin = (player, index, width, height, squares) => {
  {
    let count = 1;
    let currentIndex = index;
    let isLeftEdge = leftEdge(currentIndex, width);
    let isRightEdge = rightEdge(currentIndex, width);
    while (!isLeftEdge) {
      if (squares[--currentIndex] === player) {
        count++;
        isLeftEdge = leftEdge(currentIndex, width);
      } else break;
    }
    currentIndex = index;
    while (!isRightEdge) {
      if (squares[++currentIndex] === player) {
        count++;
        isRightEdge = rightEdge(currentIndex, width);
      } else break;
    }
    if (count >= 5) return true;
  }
  {
    let count = 1;
    let currentIndex = index;
    let isTopEdge = topEdge(currentIndex, width);
    let isBottomEdge = bottomEdge(currentIndex, width, height);
    while (!isTopEdge) {
      currentIndex -= width;
      if (squares[currentIndex] === player) {
        count++;
        isTopEdge = topEdge(currentIndex, width);
      } else break;
    }
    currentIndex = index;
    while (!isBottomEdge) {
      currentIndex += width;
      if (squares[currentIndex] === player) {
        count++;
        isBottomEdge = bottomEdge(currentIndex, width, height);
      } else break;
    }
    if (count >= 5) return true;
  }
  {
    let count = 1;
    let currentIndex = index;
    let isLeftEdge = leftEdge(currentIndex, width);
    let isTopEdge = topEdge(currentIndex, width);
    let isRightEdge = rightEdge(currentIndex, width);
    let isBottomEdge = bottomEdge(currentIndex, width, height);
    while (!isLeftEdge && !isTopEdge) {
      currentIndex = currentIndex - width - 1;
      if (squares[currentIndex] === player) {
        count++;
        isLeftEdge = leftEdge(currentIndex, width);
        isTopEdge = topEdge(currentIndex, width);
      } else break;
    }
    currentIndex = index;
    while (!isRightEdge && !isBottomEdge) {
      currentIndex = currentIndex + width + 1;
      if (squares[currentIndex] === player) {
        count++;
        isRightEdge = rightEdge(currentIndex, width);
        isBottomEdge = bottomEdge(currentIndex, width, height);
      } else break;
    }
    if (count >= 5) return true;
  }
  {
    let count = 1;
    let currentIndex = index;
    let isLeftEdge = leftEdge(currentIndex, width);
    let isTopEdge = topEdge(currentIndex, width);
    let isRightEdge = rightEdge(currentIndex, width);
    let isBottomEdge = bottomEdge(currentIndex, width, height);
    while (!isRightEdge && !isTopEdge) {
      currentIndex = currentIndex - width + 1;
      if (squares[currentIndex] === player) {
        count++;
        isRightEdge = rightEdge(currentIndex, width);
        isTopEdge = topEdge(currentIndex, width);
      } else break;
    }
    currentIndex = index;
    while (!isLeftEdge && !isBottomEdge) {
      currentIndex = currentIndex + width - 1;
      if (squares[currentIndex] === player) {
        count++;
        isLeftEdge = leftEdge(currentIndex, width);
        isBottomEdge = bottomEdge(currentIndex, width, height);
      } else break;
    }
    if (count >= 5) return true;
  }
  return false;
};

const isEnd = (squares) => {
  return squares.every((square) => square !== 0);
};

export { isWin, isEnd };
