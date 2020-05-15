/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, activePlayer, roundScore, gamePlaying;
init();
document.querySelector('.btn-new').addEventListener('click',init);
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    var dice1=Math.floor(Math.random()*6)+1;
    diceDOM=document.querySelector('#dice-1');
    diceDOM1=document.querySelector('#dice-2');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png'
    diceDOM1.style.display='block';
    diceDOM1.src='dice-'+dice1+'.png'
    if(dice!==1 && dice1!==1){
        roundScore+=dice+dice1;
        document.querySelector('#current-'+activePlayer).textContent=roundScore
    }
    else{
        nextPlayer()
    }
}
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    score[activePlayer]+=roundScore;    
    document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
    if(score[activePlayer]>=100){
        gamePlaying=false;
        document.getElementById('name-'+activePlayer).textContent='Winner';
        document.querySelector('#dice-1').style.display='none';
        document.querySelector('#dice-2').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');

    }
    else{
        nextPlayer();
    }}
});

function init(){
    score=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector('#dice-2').style.display='none';
    document.querySelector('#dice-1').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';


}
function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}