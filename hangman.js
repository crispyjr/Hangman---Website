//get word from api
//depending on the amount of characters, grab the id's of the guess boxes
//if chara = 5
//box positions will be 3,4,5,6,7
//each letter will be assigned the position and the text will remain invisible until they guess the right one

//if chara = 6
//box positions = 3,4,5,6,7,8
// if 7
//pos: 2,3,4,5,6,7,8
//if 8
//pos: 2,3,4,5,6,7,8,9
//if 9
//pos:2,3,4,5,6,7,8,9,10
//if 10
//all top positions

//if two words, it will depend on how many characters each word has. 
//second word has to be smaller than first word in order to be on top or bigger by the remaining spaces
//for example: second>first
//axe throw
//pos 1,2,3 and 5,6,7,8,9
//medical id
//pos 1,2,3,4,5,6 and 8,9
//basically if there is enough space, they both can be on top. 

let tempword = "hotdogs";
const wordSplit = tempword.split("");
let position = document.getElementsByClassName("lineBox")[3];
let startPosition= 0;
let wrongCounter = 0;
let correctCounter = 0;
let hhhh = "hello";
const h = hhhh.split(" ");
let correctWord = "hello";
const wordList = correctWord.split(" ");


function checkHowManyWords(){

    //if one word
    if(wordList.length==1){
        oneWord();
    }
    else if(wordList.length==2){
        twoWords();
    }
    //else if two words
}

//if correct word is only one word
function oneWord(){

}
//if correct word is only two words
function twoWords(){


}

function showPosition(){
    if(tempword.length==4){
        startPosition=3;
        console.log("hit 4");
    }
    else if(tempword.length==5){
        startPosition=2;
        //document.getElementsByClassName("lineBox")[3].style.visibility="visible";
        console.log("hit 5");
    }
    else if(tempword.length==6){
        startPosition=2;
        console.log("hit 6");

    }
    else if(tempword.length==7){
        startPosition=1;
        console.log("hit 7");

    }
    else if(tempword.length==8){
        startPosition=0;
        console.log("hit 8");
    }
    else if(tempword.length==9){
        startPosition=0;
        console.log("hit 9");

    }else if(tempword.length==10){
        startPosition=0;
        console.log("hit 10");
    }
    else{
        startPosition=0;
    }
    //console.log(startPosition);
    showLines(startPosition);
    console.log(h);
    
}

//show lines
function showLines(n){
    for(let i=n;i<tempword.length+n;i++){
        document.getElementsByClassName("lineBox")[i].style.visibility="visible";
    }
}

//for when u click on a letter button
function touchLetterButton(x){
    x.disabled = true;
    checkLetter(x);
}

//check if the letter is there
function checkLetter(x){
    let correct=false;
    for(let i=0;i<tempword.length;i++){
        if(x.innerText.toUpperCase() == wordSplit[i].toUpperCase()){
            correct=true;
            document.getElementsByClassName("lineBox")[startPosition+i].innerText = wordSplit[i];
            correctCounter++;
        }
    }
    if(correct!=true){
        showBodyParts();
    }
    if(correctCounter>=tempword.length){
        roundOver();
    }
    //console.log(x.innerText.toUpperCase() == wordSplit[0].toUpperCase());
}
//show the hangman parts per incorrect choice
function showBodyParts(){
    document.getElementsByClassName("body")[wrongCounter++].style.visibility = "visible";
    if(wrongCounter>=6){
        roundOver();
    }
    console.log(wrongCounter)
}

//guess textbox
function guessWordCheck(){
    let guess = document.getElementById("guessWordTextBox");
    if(guess.value.toUpperCase() == tempword.toUpperCase()){
        guess.value = "";
        console.log("win");
        showAllLetters();
        roundOver();
    }
    else{
        guess.value="";
    }
}
//if you guess word, and its true, show all the letters
function showAllLetters(){
    for(let i=0;i<tempword.length;i++){
        document.getElementsByClassName("lineBox")[startPosition+i].innerText = wordSplit[i];
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
}
//make new word, and enable every button again
function restartBoard(){

}

