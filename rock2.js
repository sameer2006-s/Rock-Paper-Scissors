let result = ''
const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0, Losses: 0, Ties: 0
}
let playerMove = ''
let compMove = ''

document.body.addEventListener('keydown', (event)=>{
    console.log(event.key)
    
    if(event.key === 'r'){
        play('Rock')
    }else if(event.key==='p'){
        play('Paper')
    }else if(event.key==='s') {
        play('Scissors')
    }


})

function play(playerMoveFunc) {
    playerMove = playerMoveFunc; 
    let compNumb = Math.random();

    if (compNumb >= 0 && compNumb < 1 / 3) {
        compMove = 'Rock';
    } else if (compNumb > 1 / 3 && compNumb < 2 / 3) {
        compMove = 'Paper';
    } else if (compNumb > 2 / 3 && compNumb < 1) {
        compMove = 'Scissors';
    }

    if (playerMove === 'Rock') {
        if (compMove === 'Rock') {
            result = 'Tie';
        } else if (compMove === 'Scissors') {
            result = 'You win';
        } else if (compMove === 'Paper') {
            result = 'You lose';
        }
    } else if (playerMove === 'Paper') {
        if (compMove === 'Rock') {
            result = 'You win';
        } else if (compMove === 'Scissors') {
            result = 'You lose';
        } else if (compMove === 'Paper') {
            result = 'Tie';
        }
    } else if (playerMove === 'Scissors') {
        if (compMove === 'Rock') {
            result = 'You lose';
        } else if (compMove === 'Scissors') {
            result = 'Tie';
        } else if (compMove === 'Paper') {
            result = 'You win';
        }
    }
    console.log(playerMove)
    console.log(compMove);
    console.log(result);

   // updateScore(result);

   console.log(updateScore(result));
}

function updateScore(result) {

    console.log(`Result in updateScore: ${result}`);

    if (result === 'You win') {
        score.Wins += 1;
    } else if (result === 'You lose') {
        score.Losses += 1;
    } else if (result === 'Tie') {
        score.Ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    displayScore();

    return score;
}
confHTML = document.querySelector('.conf')
function resetButton(){
    confHTML.innerHTML = `Are you sure you want to reset score? <button onclick="resetScore()">Yes</button><button onclick="confHTML.innerHTML='';">No</button> `
}
function resetScore() {
    
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
   /* alert(`Score is resetted 
      Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`);*/
    displayScore();
    confHTML.innerHTML=''
}


function displayScore() {
    document.querySelector('.showscore').innerHTML = `
     You: <img src="imgs/${playerMove}.png"> Comp: <img src="imgs/${compMove}.png" > <br><br>
    Wins: ${score.Wins} , Losses: ${score.Losses} , Ties: ${score.Ties}`;
    document.querySelector('.resulttext').innerText = result
}


    let intervalId;
    let isAuto = false;

function autoPlay(){
   if(!isAuto){
    console.log('auto func ')
    document.querySelector('.autobutton').innerText='Stop';
    intervalId = setInterval(()=> { 
         
        play(randomize());
        
    }, 1000);
    isAuto = true;
}else{
    clearInterval(intervalId);
    isAuto = false;
    document.querySelector('.autobutton').innerText='Auto Play';
}
}

function randomize(){
    let numb = Math.random()
    if (numb >= 0 && numb < 1 / 3) {
        return 'Rock';
    } else if (numb > 1 / 3 && numb < 2 / 3) {
        return 'Paper';
    } else if (numb > 2 / 3 && numb < 1) {
        return 'Scissors';
    }
}
console.log(randomize());
