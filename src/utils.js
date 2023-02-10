const maxRandomNum = 100;
const minrandomNum = 0;
function randomNumber(max = maxRandomNum, min = minrandomNum) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default randomNumber;
