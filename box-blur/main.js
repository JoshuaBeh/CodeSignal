// eslint-disable-next-line no-unused-vars
function solution(image) {
  // 0 1 2 (3)
  // 0 1 2  1 2 3 (4)
  // 0 1 2  1 2 3  2 3 4 (5)
  // check how long outer array length is
  // check how long inner array lengths are
  var newArr = [];
  var currentSum = 0;
  var nine = 0;
  var count = 0;
  var i = 0;
  for (; i < image.length;) {
    var j = i;
    for (; j < image[i].length; j++) {
      if (count < 3) {
        currentSum = currentSum + image[i][j];
        count++;
        nine++;
      } else if (count === 3) {
        count = 0;
        i++;
        break;
      }
    }
    if (nine === 9) {
      nine = 0;
      newArr.push(currentSum);
      currentSum = 0;
      count = 0;
    } else if (i === image.length - 1) {
      nine = 0;
      currentSum = 0;
      count = 0;
    }
  }
  // eslint-disable-next-line no-console
  console.log(newArr);
}
