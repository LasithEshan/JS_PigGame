
var scores,roundScore,activePlayer,isPlaying,prevScore;

init();
prevScore = 0;


document.querySelector('.btn-roll').addEventListener('click', function(){

    if(isPlaying){

        var dice_0 = Math.floor((Math.random() * 6) + 1);
        var dice_1 = Math.ceil(Math.random() * 6);
        var totalDice = dice_0 + dice_1;

        var docDOM_0 = document.querySelector('.dice-0');
        var docDOM_1 = document.querySelector('.dice-1');

        docDOM_0.style.display = 'block';
        docDOM_1.style.display = 'block';

        docDOM_0.src = 'dice-' + dice_0 + '.png';
        docDOM_1.src = 'dice-' + dice_1 + '.png';

        if(dice_0 !== 1 && dice_1 !== 1){

                roundScore += totalDice;
                prevScore = totalDice;
                document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            //Add to current
        }else if((dice_0 === 1 && dice_1 !== 1) || (dice_0 !==1 && dice_1 === 1)){
            //MOve to next player
            nextPlayer();

          }else{
            scores[activePlayer] = 0;
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

        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
}
// document.querySelector('.dice').style.display = 'none';


function init(){

    scores = [0,0];//scores of two plyers
    roundScore = 0;//score of the round
    activePlayer = 0;//currently active player
    isPlaying = true;//is playing is set to true

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('#name-0').textContent = 'Player 1';
    // document.querySelector('#name-1').textContent = 'Player 2';


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}
