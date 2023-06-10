// // 死循环指定的时间
// function delay(duration) {
//   var start = Date.now();
//   while (Date.now() - start < duration) {}
// }

//定义一个死循环函数
function delay(duration) {
  var start = Date.now();
  while (Date.now() - start < duration) {}
}

setTimeout(function () {
  console.log(1);
}, 0);

//生成微队列
Promise.resolve().then(function () {
  console.log(2);
});

console.log(3);

//第1题
setTimeout(function () {
  console.log(1);
}, 3000);

console.log(2);
// 结果为: 2
//         1

//第2题
setTimeout(function () {
  console.log(1);
}, 0);

console.log(2);
//这里特别注意是先打印2，再打印1，因为第一个进去后得排队
// 结果为: 2

//第3题
setTimeout(function () {
  console.log(1);
}, 0);
delay(1000);
console.log(2);
//输出2  1
