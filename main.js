// ========================= практика таймер ====================================

const counterElementt = document.querySelector('#counter')
let counter = 0;
let timerID;


// btn start
const btnStart = document.querySelector('#start')
btnStart.onclick = function() {
  timerID = setInterval(function(){
    // counter = counter + 1
    // counter += 1
    counter++
    counterElementt.innerText = counter
  }, 1000)

}


// btn stop
const btnPause = document.querySelector('#pause')
btnPause.onclick = function() {
  clearInterval(timerID)
}

// btn reset
const btnReset = document.querySelector('#reset')
btnReset.onclick = function() {
  counter = 0
  counterElementt.innerText = counter
  clearInterval(timerID)

}

