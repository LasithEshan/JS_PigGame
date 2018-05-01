/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,isPlaying,prevScore;

init();
prevScore = 0;

//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);





document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(isPlaying){
        
        var dice = Math.floor((Math.random() * 6) + 1);
    
        var docDOM = document.querySelector('.dice'); 

        docDOM.style.display = 'block';
        docDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1){
            
            if(dice === 6 && prevScore ===6){
                nextPlayer();
            }else{
                roundScore += dice;
                prevScore = dice;
                document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            }
            //Add to current score
        }else{
            //MOve to next player
            nextPlayer();

            }
        
    }
    
    
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(isPlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] > 19){

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'; 
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isPlaying = false;


        }else{

            nextPlayer();

        }
        
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click', init); 


function nextPlayer() {
    
       if(activePlayer === 1){
            
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            activePlayer = 0;
            
        }else{
            
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            activePlayer = 1;
        }
        
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.dice').style.display = 'none';
}


function init(){
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2'; 


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    
}






