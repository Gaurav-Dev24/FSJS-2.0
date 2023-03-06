window.onload = function () {
  
    let seconds = 00; 
    let tens = 00; 
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let buttonStart = document.getElementById('start');
    let buttonStop = document.getElementById('stop');
    let buttonReset = document.getElementById('reset');
    let Interval ;
  
    // Setting the interval on start
    buttonStart.onclick = function() {
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    // Setting the interval on stop
    buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
    // Setting the interval on reset
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
    // function declaration for start the timer
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }