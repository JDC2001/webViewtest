let intNum = 686;
const timeId = setInterval(() => {
  intNum += 1;
  if (intNum >= 1000) {
    window.clearInterval(timeId);
  }
  document.querySelector(".number").innerHTML = intNum / 10 + "%";
}, 1000);
