let player1Score;
let player2Score;

function refresh(){
    let button=document.querySelector("button")
    

}


function setup(){
    
    player1Score=Math.floor(Math.random() * 6)+1;
    player2Score=Math.floor(Math.random() * 6)+1;
    refresh();
    displayimg(player1Score,".img1");
    displayimg(player2Score,".img2");
    checkWinner(player1Score,player2Score);
    
}

function displayimg(score,imageclass){
    let imgsrc1=document.querySelector(imageclass);
    let imgsrc2=document.querySelector(imageclass);
 
   
    if(score===1){
        imgsrc1.setAttribute("src","./images/dice1.png");
        imgsrc2.setAttribute("src","./images/dice1.png")
    }
    if(score===2){
        imgsrc1.setAttribute("src","./images/dice2.png");
        imgsrc2.setAttribute("src","./images/dice2.png");

    }
    if(score===3){
        imgsrc1.setAttribute("src","./images/dice3.png");
        imgsrc2.setAttribute("src","./images/dice3.png");

    }
    if(score===4){
        imgsrc1.setAttribute("src","./images/dice4.png");
        imgsrc2.setAttribute("src","./images/dice4.png");

    }
    if(score===5){
        imgsrc1.setAttribute("src","./images/dice5.png");
        imgsrc2.setAttribute("src","./images/dice5.png");

    }
    if(score===6){
        imgsrc1.setAttribute("src","./images/dice6.png");
        imgsrc2.setAttribute("src","./images/dice6.png");

    }
  
}


function checkWinner(score1,score2){
    let outputmessage=document.querySelector(".message");
    let imageSelection=document.querySelector(".img1");
    let imageSelection1=document.querySelector(".img2");
    let headerWinner=document.querySelector(".container h1");
    
   
   
    if(score1>score2){
        
        outputmessage.innerHTML="Player 1 has won"
        outputmessage.classList.add("winnerMessage1")
        imageSelection.classList.add("winnerMessage1")
        headerWinner.innerHTML="<em>Player 1 has won</em>"
    }
    else if( score1<score2){
      
        outputmessage.innerHTML="Player 2 has won";
        outputmessage.classList.add("winnerMessage2");
        imageSelection1.classList.add("winnerMessage2")
        headerWinner.innerHTML="<em>Player 2 has won</em>"
    }
    else{
        outputmessage.innerHTML="Seames like i`ts a draw"
        outputmessage.classList.add("drawMessage");
        headerWinner.innerHTML="Draw"
    }

}
setup();
