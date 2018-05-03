
var scores,roundScore,activePlayer,isPlaying,prevScore;

init();
prevScore = 0;


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(isPlaying){
        
        var dice = Math.floor((Math.random() * 6) + 1);
    
        var docDOM = document.querySelector('.dice'); 

        docDOM.style.display = 'block';
        docDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1){
            
            if(dice === 6 && prevScore ===6){
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = '0';
                nextPlayer();
            }else{
                roundScore += dice;
                prevScore = dice;
                document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            }
            //Add to current 
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

        var input = document.querySelector('.final-score').value;
        var winningScore;

        if(input){

            winningScore = input;

        }else{

            winningScore = 100;

        }

        if(scores[activePlayer] >= winningScore){

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






