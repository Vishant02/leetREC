/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  const x = Math.log2(n);
  if (Number.isInteger(x)) {
    console.log("xxxxxxxxxxxxxxxx---->",x);
    return true
  }
  else{
    return false
  }
};

