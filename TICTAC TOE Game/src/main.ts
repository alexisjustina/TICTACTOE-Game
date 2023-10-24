let boxes = document.querySelectorAll('.board__box');
const playBtn = document.querySelector('.play-btn') as HTMLButtonElement;
const board = document.querySelector('.board') as HTMLElement; 
const ending = document.querySelector('.ending') as HTMLElement;
const playAgain = document.querySelector('.ending__playAgain-btn') as HTMLButtonElement;

playBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    playBtn.style.transform = 'scale(0.7)';
    setTimeout(() => {
        playBtn.style.transform = 'scale(1.2)';
        playBtn.style.transform = 'translateY(-300%)';
        playBtn.style.opacity = '0';
board.style.transform = 'translateX(0)';
board.style.opacity = '1';
    }, 500);
});
//////////////////////////////////////////////////////////////

let player1:boolean = true;
let player2:boolean = false;

const gameFunc = function(){
boxes.forEach(box=>{
    box.addEventListener('click', logic)
    function logic(){
        if(player1 === true){
            boxes.forEach(box=>{
                player1 = false;
            })
            box.innerHTML = "X"
           }
           else{
            player1 = true
            box.innerHTML = "O"
           }
           if(box.innerHTML !== ''){
            box.removeEventListener('click', logic);
        }
    }
})
};

boxes.forEach(box=>{
    gameFunc();
});
////////////////////////////////////////////////////////////////////////////


const timing = setInterval(() => {
   if(boxes[0].innerHTML !== '' && boxes[1].innerHTML !== '' && boxes[2].innerHTML !== '' && boxes[3].innerHTML !== '' && boxes[4].innerHTML !== '' && boxes[5].innerHTML !== '' && boxes[6].innerHTML !== '' && boxes[7].innerHTML !== '' && boxes[8].innerHTML !== ''){
    board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)';
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "Draw";
playAgain.addEventListener('click', (e)=>{
    window.location.reload();
});
    clearInterval(timing);
   };

   let box = document.querySelector('[data-id="0"]') as HTMLElement;
   let box1 = document.querySelector('[data-id="1"]') as HTMLElement;
   let box2 = document.querySelector('[data-id="2"]') as HTMLElement;
   let box3 = document.querySelector('[data-id="3"]') as HTMLElement;
   let box4 = document.querySelector('[data-id="4"]') as HTMLElement;
   let box5 = document.querySelector('[data-id="5"]') as HTMLElement;
   let box6 = document.querySelector('[data-id="6"]') as HTMLElement;
   let box7 = document.querySelector('[data-id="7"]') as HTMLElement;
   let box8 = document.querySelector('[data-id="8"]') as HTMLElement;

    // CHECKING HORIZONTALLY FOR WINS
    if(box.innerHTML === "X" && box1.innerHTML === "X" && box2.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    if(box.innerHTML === "O" && box1.innerHTML === "O" && box2.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
        board.style.opacity = '0';
        ending.style.opacity = '1';
        ending.style.transform = 'translateY(0)'
        let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";
        
        playAgain.addEventListener('click', (e)=>{
            window.location.reload();
            
        });
        clearInterval(timing);
    }

    if(box3.innerHTML === "X" && box4.innerHTML === "X" && box5.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    if(box3.innerHTML === "O" && box4.innerHTML === "O" && box5.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
        board.style.opacity = '0';
        ending.style.opacity = '1';
        ending.style.transform = 'translateY(0)'
        let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";
        
        playAgain.addEventListener('click', (e)=>{
            window.location.reload();
        });
        clearInterval(timing);
    }

    if(box6.innerHTML === "X" && box7.innerHTML === "X" && box8.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload(); 
});
        clearInterval(timing);
    }

    if(box6.innerHTML === "O" && box7.innerHTML === "O" && box8.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    // CHECKING VERTICALLY FOR WINS

    if(box.innerHTML === "X" && box3.innerHTML === "X" && box6.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
});
        clearInterval(timing);
    }

    if(box.innerHTML === "O" && box3.innerHTML === "O" && box6.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
        board.style.opacity = '0';
        ending.style.opacity = '1';
        ending.style.transform = 'translateY(0)'
        let endingText = document.querySelector('.ending__text') as HTMLElement;
        endingText.innerHTML = "O won";
        
        playAgain.addEventListener('click', (e)=>{
            window.location.reload();
        });
        clearInterval(timing);
    }

    if(box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    if(box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    if(box2.innerHTML === "X" && box5.innerHTML === "5" && box8.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    if(box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    // CHECKING DIAGONALLY FOR WINS
    if(box.innerHTML === "X" && box4.innerHTML === "X" && box8.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
        board.style.opacity = '0';
        ending.style.opacity = '1';
        ending.style.transform = 'translateY(0)'
        let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";
        
        playAgain.addEventListener('click', (e)=>{
            window.location.reload();
            
        });
        clearInterval(timing);
    }

    if(box.innerHTML === "O" && box4.innerHTML === "O" && box8.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload();
    
});
        clearInterval(timing);
    }

    if(box2.innerHTML === "X" && box4.innerHTML === "X" && box6.innerHTML === "X"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "X won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload(); 
});
        clearInterval(timing);
    }

    if(box2.innerHTML === "O" && box4.innerHTML === "O" && box6.innerHTML === "O"){
        board.style.transform = 'translateX(-300%)';
board.style.opacity = '0';
ending.style.opacity = '1';
ending.style.transform = 'translateY(0)'
let endingText = document.querySelector('.ending__text') as HTMLElement;
endingText.innerHTML = "O won";

playAgain.addEventListener('click', (e)=>{
    window.location.reload(); 
});
        clearInterval(timing);
    }
}, 500);