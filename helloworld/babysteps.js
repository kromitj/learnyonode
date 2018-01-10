const numsLength = process.argv.length;
const nums = process.argv.splice(2, numsLength);
let sum = 0;
nums.forEach(num => sum = sum  += parseInt(num));
console.log(sum);
