$( document ).ready(function(){
    // Creates first important part of the game, the number to match against
    var Random=Math.floor(Math.random()*102+19)
    $('.randomScore').text(Random);
    
    //Need to generate a random variable per instrucctions for each crystal
    var value1= Math.floor(Math.random()*12+1)
    var value2= Math.floor(Math.random()*12+1)
    var value3= Math.floor(Math.random()*12+1)
    var value4= Math.floor(Math.random()*12+1)
    
    // Created variables to keep track of our incremented variables
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Adding a function to reset the game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('.randomScore').text(Random);
        value1= Math.floor(Math.random()*12+1);
        value2= Math.floor(Math.random()*12+1);
        value3= Math.floor(Math.random()*12+1);
        value4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('.totalScore').text(playerTotal);
        } 
  // Display wins using a function and the alert the  message
  function iWon(){
  alert("Oh yeah! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses using a function and then alert  the message
  function loser(){
  alert ("Oh no! You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals so that you generate the number per a crystal
    $('#dred').on ('click', function(){
      playerTotal = playerTotal + value1;
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            iWon();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('#dgreen').on ('click', function(){
      playerTotal = playerTotal + value2;
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            iWon();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#dblue').on ('click', function(){
      playerTotal = playerTotal + value3;

      $('#totalScore').text(playerTotal);
            if (playerTotal == Random){
            iWon();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#dblack').on ('click', function(){
      playerTotal = playerTotal + value4;

      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            iWon();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 