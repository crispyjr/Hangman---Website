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