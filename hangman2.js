const words = ["apple and jeans", "today is monday", "ice cream", "basketball"]
let wordsCurrentPos = 0;
let word = " ";
let wordList = word.split(" ");
const positions = [0,0,0];
let wrongCounter = 0;
let correctCounter = 0;
let timer = 30;
let timerwidth = 100;



function decreaseTime(){
    var x = setInterval(function() {
        let g = document.getElementById("timer");
        g.innerHTML=g.innerHTML-1;
        timer--;
        timerwidth -=3.33;
        g.style.width = timerwidth+"%";
        console.log("aahahhsidcasifc")
        if(timer<=0){
            console.log("moo");
            clearInterval(x);
            roundOver();
            g.style.width = 0 + "%";
        }
        else if(timer<=10){
            g.style.backgroundColor="Red";
        }
    },100);
    
}
//============SETTING UP LINES================//
function init(){
    word = words[0];
    wordList = word.split(" ");
    setWord();
    decreaseTime();
    
}

function setWord(){
    
    if(wordList.length==1){
        setPositions(1);
    }
    else if(wordList.length==2){
        setPositions(2);
    }
    else if(wordList.length==3){
        setPositions(3);
    }
}
function setPositions(n){
    if(n==1){
        middleMethod(wordList[0],0,1);
    }
    else if(n==2){
        //case 1 -> if word one is bigger than 7, then middle
        if(wordList[0].length>7){
            middleMethod(wordList[0],0,1);
            middleMethod(wordList[1],1,2);
        }
        //case 2 -> if word one is smaller than 7, word 2 will go through the thing
        else{
            //if word 1  - 9 < word 2 then split method
            if(9-wordList[0].length>=wordList[1].length){
                splitMethod(wordList[0],wordList[1],0,1,1);
            }
            else{
                middleMethod(wordList[0],0,1);
                middleMethod(wordList[1],1,2);
            }
        }

    }
    else if(n==3){
        //case 1 -> if word 1 is too big, middle method for it, then try split method for the remaining two, if split does not work, change word
        //or word 2 is too big so split method for the last two words
        if(wordList[0].length>7 || wordList[0].length==7 && wordList[1].length>2){
            middleMethod(wordList[0],0,1);
            splitMethod(wordList[1],wordList[2],1,2,2);
        }
        //case 2-> word 1 & 2 split, middle method for word 3
        else if(wordList[0].length==7 && wordList[1].length==2){
            splitMethod(wordList[0],wordList[1],0,1,1);
            middleMethod(wordList[2],2,2);
        }
        //case 3-> word 1 is smaller than 7 thus split top, middle for third word
        else{
            splitMethod(wordList[0],wordList[1],0,1,1);
            middleMethod(wordList[2],2,2);
        }
        
        
    }
    showLines();
}
//string w, int h
function middleMethod(w,p,h){
    let pos=0;
    if(w.length==3){
        pos=3;
    }
    else if(w.length==4){
        pos=3;
    }
    else if(w.length==5){
        pos=2;
    }
    else if(w.length==6){
        pos=2;
    }
    else if(w.length==7){
        pos=1;
    }else if(w.length==8){
        pos=1;
    }else if(w.length==9){
        pos=0;
    }else if(w.length==4){
        pos=0;
    }
    if(h==2){
        pos+=10;
    }
    positions[p]=pos;
}
//string o, string t, int w, int m, int u
function splitMethod(o,t,w,m,u){
    console.log("touch 2");
    if(o.length==2){
        if(t.length==2 || t.length==3||t.length==4||t.length==5||t.length==6||t.length==7){
            positions[w]=0;
            positions[m]=o.length + 1;
        }
    }
    else if(o.length==3){
        if(t.length==2 || t.length==3||t.length==4||t.length==5||t.length==6){
            positions[w]=0;
            positions[m]=o.length + 1;
        }
    }
    else if(o.length==4){
        if(t.length==2 || t.length==3||t.length==4||t.length==5){
            positions[w]=0;
            positions[m]=o.length + 1;
        }
    }else if(o.length==5){
        if(t.length==2 || t.length==3||t.length==4){
            positions[w]=0;
            positions[m]=o.length + 1;
        }
    }else if(o.length==6){
        if(t.length==2 || t.length==3){
            positions[w]=0;
            positions[m]=o.length + 1;
        }
    }else if(o.length==7){
        if(t.length==2){
            positions[w]=0;
            positions[m]=o.length + 1;
        }
    }
    //
    else{
        middleMethod(wordList[w],w,1);
        middleMethod(wordList[m],m,2);
    }
    if(u==2){
        positions[w]+=10;
        positions[m]+=10;
    }
}
//show the lines
function showLines(){
    console.log("touch show lines");
    
   for(let i=0;i<wordList.length;i++){
    for(let j=positions[i];j<wordList[i].length+positions[i];j++){
        document.getElementsByClassName("lineBox")[j].style.visibility="visible";
    }
   }    
}
//============BUTTONS================//
//for when u click on a letter button
function touchLetterButton(x){
    x.disabled = true;
    checkLetter(x);
}
//check if the letter is there
function checkLetter(x){
    let correct=false;
    let totalLetters=0;
    for(let o=0;o<wordList.length;o++){
        totalLetters+=wordList[o].length;
    }
    for(let i=0;i<wordList.length;i++){
        let wordSplit = wordList[i].split("");
        for(let j=0;j<wordList[i].length;j++){
            if(x.innerText.toUpperCase() == wordSplit[j].toUpperCase()){
                document.getElementsByClassName("lineBox")[positions[i]+j].innerText = wordSplit[j];
                correct=true;
                correctCounter++;
            }
        }
        
    } 
    if(correct!=true){
        showBodyParts();
    }
    
    if(correctCounter>=totalLetters){
        roundOver();
    }
    //console.log(x.innerText.toUpperCase() == wordSplit[0].toUpperCase());
}
//guess textbox
function guessWordCheck(){
    let guess = document.getElementById("guessWordTextBox");
    if(guess.value.toUpperCase() == word.toUpperCase()){
        guess.value = "";
        console.log("win");
        showAllLetters();
        roundOver();
    }
    else{
        guess.value="";
    }
}
//show the hangman parts per incorrect choice
function showBodyParts(){
    document.getElementsByClassName("body")[wrongCounter++].style.visibility = "visible";
    if(wrongCounter>=6){
        roundOver();
    }
    console.log(wrongCounter)
}
//if you guess word, and its true, show all the letters
function showAllLetters(){
    for(let i=0;i<wordList.length;i++){
        let wordSplit = wordList[i].split("");
        for(let j=0;j<wordList[i].length;j++){
            document.getElementsByClassName("lineBox")[positions[i]+j].innerText = wordSplit[j];
        }
        
    }

}
//disable everything 
function roundOver(){
    document.getElementById("guessWordTextBox").disabled = true;
    document.getElementById("guessButton").disabled = true;
    for(let i=0;i<26;i++){
        document.getElementsByClassName("letterButton")[i].disabled = true;
    }
    showAllLetters();
    var h = setTimeout(function() {
        inBetweenRound(document.getElementById("gameBoard"))
    },5000);
}


function inBetweenRound(element){
    //show different div where points are collected
    //organize it by who completed it the fastest
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.visibility = 'hidden';
        }
        element.style.opacity = op;
        console.log(op)
        //element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    startNewRound();
    
    //startNewRound();
    
}

function startNewRound(){
    //basically make all the letters show up again
    //show the new word
    let t = 0;
    var g = setTimeout(function(){
        console.log("hello");
        fade(document.getElementById("gameBoard"));
        for(let i=0;i<20;i++){
            document.getElementsByClassName("lineBox")[i].innerText = "";
            document.getElementsByClassName("lineBox")[i].style.visibility="hidden";
        }
        for(let i=0;i<26;i++){
            document.getElementsByClassName("letterButton")[i].disabled = false;
        }
        for(let i=0;i<6;i++){
        document.getElementsByClassName("body")[i].style.visibility = "hidden";
            
        }
        let f = document.getElementById("timer");
        f.innerHTML=30;
        timer = 30;
        timerwidth=100;
        word = words[++wordsCurrentPos];
        wordList = word.split(" ");
        setWord();
       // decreaseTime();

    },5000);
    console.log("new round start");
    
}

function fade(element) {
    element.style.visibility = 'visible';
    
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            decreaseTime();
            
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

