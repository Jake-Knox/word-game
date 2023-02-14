import { dictIncludesA, dictIncludesB, dictIncludesC, dictIncludesD, dictIncludesE, dictIncludesF, dictIncludesG, dictIncludesH, dictIncludesI, dictIncludesJ, dictIncludesK, dictIncludesL, dictIncludesM, dictIncludesN, dictIncludesO, dictIncludesP, dictIncludesQ, dictIncludesR, dictIncludesS, dictIncludesT, dictIncludesU, dictIncludesV, dictIncludesW, dictIncludesX, dictIncludesY, dictIncludesZ } from "./iDictionary.js";

import { dictA2Letter, dictA3Letter, dictA4Letter, dictA5Letter }  from "./iDictionary.js";
import { dictB2Letter, dictB3Letter, dictB4Letter, dictB5Letter }  from "./iDictionary.js";





//console.log(dictIncludesA);

// console.log("game start");

// Tile array setup
const tileArray = [];
const tile_A1 = document.getElementById("A1");
const tile_A2 = document.getElementById("A2");
const tile_A3 = document.getElementById("A3");
const tile_A4 = document.getElementById("A4");
const tile_A5 = document.getElementById("A5");
const tile_B1 = document.getElementById("B1");
const tile_B2 = document.getElementById("B2");
const tile_B3 = document.getElementById("B3");
const tile_B4 = document.getElementById("B4");
const tile_B5 = document.getElementById("B5");
const tile_C1 = document.getElementById("C1");
const tile_C2 = document.getElementById("C2");
const tile_C3 = document.getElementById("C3");
const tile_C4 = document.getElementById("C4");
const tile_C5 = document.getElementById("C5");
const tile_D1 = document.getElementById("D1");
const tile_D2 = document.getElementById("D2");
const tile_D3 = document.getElementById("D3");
const tile_D4 = document.getElementById("D4");
const tile_D5 = document.getElementById("D5");
const tile_E1 = document.getElementById("E1");
const tile_E2 = document.getElementById("E2");
const tile_E3 = document.getElementById("E3");
const tile_E4 = document.getElementById("E4");
const tile_E5 = document.getElementById("E5");

tileArray.push(tile_A1, tile_A2, tile_A3, tile_A4, tile_A5, tile_B1, tile_B2, tile_B3, tile_B4, tile_B5, tile_C1, tile_C2, tile_C3, tile_C4, tile_C5, tile_D1, tile_D2, tile_D3, tile_D4, tile_D5, tile_E1, tile_E2, tile_E3, tile_E4, tile_E5);
// console.log(tileArray)

let charArray = ["","","","","","","","","","","","","","","","","","","","","","","","",""]
//console.log(charArray.length)



// other elements
const player1Text = document.getElementById("player_1_text");
const player2Text = document.getElementById("player_2_text");

const gameLog = document.getElementById("game_log");


// game setup
let playerTurn = 1; // player1/ player2
let player1Points = 0;
let player2Points = 0;

let moveMade = true;
let lastTileUsed = null;




const resetMove = () => {
    moveMade = false;
    lastTileUsed = null;    
}
resetMove();

// setting up button click on each tile
for(let i = 0; i < tileArray.length; i++){   
    tileArray[i].tabIndex = 1;

    // add on-click to each
    tileArray[i].addEventListener("click", () => {

        //testing here
        if(tileArray[i].classList.contains("locked")){
            //console.log("locked detected at");
            //console.log(tileArray[i]);
        }
        else{
            for(let j = 0; j < tileArray.length; j++){

                if(tileArray[j].classList.contains("locked") == false){
                    // reset bg colour of other tiles
                    tileArray[j].style.backgroundColor = "#b2b7bb";
                    tileArray[j].tabIndex = 1;                
                    if(lastTileUsed != null){
                        lastTileUsed.innerHTML = (`<p></p>`);                    
                    }
                    resetMove();
                }
            }
        // set clicked tile bg colour
        tileArray[i].style.backgroundColor = "#667f9d";
        tileArray[i].tabIndex = 0;
        // set this tile to last used
        lastTileUsed = tileArray[i];
        // console.log(lastTileUsed)
        } 
    })

    // add keydown to each
    tileArray[i].addEventListener("keydown", (logKey) => {
        // console.log(logKey.key); // see key press
        
        if(tileArray[i].classList.contains("locked"))
        {
            
        } 
        else{
            var charCode = logKey.keyCode;
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            {
                tileArray[i].innerHTML = (`<p>${(logKey.key).toLocaleUpperCase()}</p>`);
                tileArray[i].style.backgroundColor = "#667f9d";
                lastTileUsed = tileArray[i];
                moveMade = true;      
                
                charArray[i] = logKey.key.toLocaleUpperCase();
            }   
            else if(logKey.keyCode == 8){
                tileArray[i].innerHTML = (`<p></p>`);
                if(lastTileUsed != null){
                    // reset colour to normal
                    lastTileUsed.style.backgroundColor = "#b2b7bb";
                    lastTileUsed.tabIndex = 1;
                    resetMove();          
                } 
            } 
        }
    })
        
}


window.addEventListener("keypress", (logKey) => {    
    if (logKey.key == "Enter"){
        // console.log("enter");
        if(moveMade == true){
            endTurn();
        }           
    }
})


const endTurn = () => {
    if(moveMade == true && lastTileUsed != null){

        // perform check against each tile :/
        switch(lastTileUsed)
        {   
            // ROW A
            case tileArray[0]:
                tile_A1Check();
            break;
            case tileArray[1]:
                tile_A2Check();
            break;
            case tileArray[2]:
                tile_A3Check();
            break;
            case tileArray[3]:
                tile_A4Check();
            break;
            case tileArray[4]:
                tile_A5Check();
            break;
            // ROW B
            case tileArray[5]:
                tile_B1Check();
            break;
            case tileArray[6]:
                tile_B2Check();
            break;
            case tileArray[7]:
                tile_B3Check();
            break;
            case tileArray[8]:
                tile_B4Check();
            break;
            case tileArray[9]:
                tile_B5Check();
            break;
            // ROW C
            case tileArray[10]:
                tile_C1Check();
            break;
            case tileArray[11]:
                tile_C2Check();
            break;
            case tileArray[12]:
                tile_C3Check();
            break;
            case tileArray[13]:
                tile_C4Check();
            break;
            case tileArray[14]:
                tile_C5Check();
            break;
            // ROW D
            case tileArray[15]:
                tile_D1Check();
            break;
            case tileArray[16]:
                tile_D2Check();
            break;
            case tileArray[17]:
                tile_D3Check();
            break;
            case tileArray[18]:
                tile_D4Check();
            break;
            case tileArray[19]:
                tile_D5Check();
            break;
            // ROW E
            case tileArray[20]:
                tile_E1Check();
            break;
            case tileArray[21]:
                tile_E2Check();
            break;
            case tileArray[22]:
                tile_E3Check();
            break;
            case tileArray[23]:
                tile_E4Check();
            break;
            case tileArray[24]:
                tile_E5Check();
            break;

            default:
                // nothing
                console.log("tile not supported yet")
        }

        if(playerTurn == 1)
        {
            playerTurn = 2;
            player2Text.style.color = "red";      
            player2Text.style.border = "2px solid red";   
            player1Text.style.border = "2px solid rgb(248, 208, 134)";  
        }
        else{
            playerTurn = 1;
            player1Text.style.color = "blue";                     
            player1Text.style.border = "2px solid blue";   
            player2Text.style.border = "2px solid rgb(248, 208, 134)";     

        }        
        lastTileUsed.style.backgroundColor ="#002a5c";
        lastTileUsed.style.color = "white";
        lastTileUsed.classList.add("locked");        


        resetMove();    
        
        //console.log(charArray); // see the new grid of letters
    }  
}

const checkString = (newChar, inputStr) => {

    let inputLC = inputStr.toLowerCase();

    //console.log(`input: ${newChar} - entering switch`);

    //console.log(inputStr.length);

    // code has been collapsed - use arrow to see
    switch(newChar)
    {
        case "A":
            switch(inputStr.length){
                case 2:
                    //console.log("case 2")
                    for(const entry of dictA2Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
                case 3:
                    //console.log("case 3")
                    for(const entry of dictA3Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
                case 4:
                    //console.log("case 4")
                    for(const entry of dictA4Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
                case 5:
                    //console.log("case 5")
                    for(const entry of dictA5Letter)
                    {                        
                        //console.log(`Checking ${inputLC} against ${entry}`)
                        //console.log(entry)
                        if(inputLC == entry){
                            logWord(inputStr);
                            console.log(`${inputStr} is a match!`);
                        }
                    }
                    break;
            }
        break;

        case "B": 

            for(const entry of dictIncludesB)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }

        break;

        case "C":           
            for(const entry of dictIncludesC)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "D":           
            for(const entry of dictIncludesD)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "E":           
            for(const entry of dictIncludesE)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "F":           
            for(const entry of dictIncludesF)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "G":           
            for(const entry of dictIncludesG)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "H":           
            for(const entry of dictIncludesH)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "I":           
            for(const entry of dictIncludesI)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "J":           
            for(const entry of dictIncludesJ)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "K":           
            for(const entry of dictIncludesK)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "L":           
            for(const entry of dictIncludesL)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "M":           
            for(const entry of dictIncludesM)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "N":           
            for(const entry of dictIncludesN)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "O":            
            for(const entry of dictIncludesO)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                    
                }
            }
        break;
        case "P":           
            for(const entry of dictIncludesP)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "Q":           
            for(const entry of dictIncludesQ)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "R":           
            for(const entry of dictIncludesR)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "S":           
            for(const entry of dictIncludesS)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "T":            
            for(const entry of dictIncludesT)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "U":           
            for(const entry of dictIncludesU)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                    
                }
            }
        break;
        case "V":           
            for(const entry of dictIncludesV)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "W":           
            for(const entry of dictIncludesW)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "X":           
            for(const entry of dictIncludesX)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "Y":           
            for(const entry of dictIncludesY)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;
        case "Z":           
            for(const entry of dictIncludesZ)
            {                
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{                   
                }
            }
        break;

        default:
        // nothing yet
        console.log(`letter ${newChar} not included in dictionary/search yet`);

    }
}

const logWord = (word) => {

    // include points in html

    let newLI = document.createElement("li");

    let player = "";
    if(playerTurn == 1)
    {        
        player = "Player 1";
        newLI.style.color = "blue";
        player1Points += word.length;
        player1Text.innerText =  (`Player 1: ${player1Points}`); 
    }
    else{
        player = "Player 2";
        newLI.style.color = "red";
        player2Points += word.length;
        player2Text.innerText =  (`Player 2: ${player2Points}`); 
    }    
    newLI.innerText = (`${player} made ${word} - ${word.length} points`);
    gameLog.prepend(newLI);
}


// tile checks
// all 25 of em

// ROW A

const tile_A1Check = () => {    
    let inputArray = ""; // start index = 0
    // left <-> right // line indexes = 0,1,2,3,4
    inputArray = [charArray[0], charArray[1], charArray[2], charArray[3], charArray[4]];
    createChecks(inputArray);
    // topLeft <\> bottomRight // line indexes = 0,6,12,18,24
    inputArray = [charArray[0], charArray[6], charArray[12], charArray[18], charArray[24]];
    createChecks(inputArray);
    // top ^-V bottom // line indexes = 0,5,10,15,20
    inputArray = [charArray[0], charArray[5], charArray[10], charArray[15], charArray[20]];
    createChecks(inputArray);
}

const tile_A2Check = () => {    
    let inputArray = ""; // start index = 1
    // left right - line indexes = 1,2,3,4
    inputArray = [charArray[1], charArray[2], charArray[3], charArray[4]];
    createChecks(inputArray);
    // 1,0
    inputArray = [charArray[1], charArray[0]];
    createChecks(inputArray);  
    // 0,1,2
    inputArray = [charArray[0],charArray[1],charArray[2]];
    strictCheck(charArray[1], inputArray);
    // 0,1,2,3
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3]];
    strictCheck(charArray[1], inputArray);
    // 0,1,2,3,4
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(charArray[1], inputArray);

    // diag \ - line indexes = 1,7,13,19
    inputArray = [charArray[1], charArray[7], charArray[13], charArray[19]];
    createChecks(inputArray);
     // up down - line indexes = 1,6,11,16,21
    inputArray = [charArray[1], charArray[6], charArray[11], charArray[16], charArray[21]];
    createChecks(inputArray);
    // diag / - line indexes = 1,5
    inputArray = [charArray[1], charArray[5]];
    createChecks(inputArray);
}
const tile_A3Check = () => {
    let inputArray = ""; // start index = 2
    // left right
    inputArray = [charArray[2], charArray[3], charArray[4]];
    createChecks(inputArray);
    inputArray = [charArray[2], charArray[1], charArray[0]];
    createChecks(inputArray);


    inputArray = [charArray[1],charArray[2],charArray[3]];
    strictCheck(charArray[2], inputArray);
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3]];
    strictCheck(charArray[2], inputArray);
    inputArray = [charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(charArray[2], inputArray);
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(charArray[2], inputArray);

    // diag \
    inputArray = [charArray[2], charArray[8], charArray[14]];
    createChecks(inputArray);
    // up down
    inputArray = [charArray[2], charArray[7], charArray[12], charArray[17], charArray[22]];
    createChecks(inputArray);
    // diag /
    inputArray = [charArray[2], charArray[6], charArray[10]];
    createChecks(inputArray);
}
const tile_A4Check = () => {
    let inputArray = ""; // start index = 3
    // left right - line indexes = 0,1,2,3
    inputArray = [charArray[3], charArray[2], charArray[1], charArray[0]];
    createChecks(inputArray);
    // 3,4
    inputArray = [charArray[3], charArray[4]];
    createChecks(inputArray);
    // 2,3,4
    inputArray = [charArray[2],charArray[3],charArray[4]];
    strictCheck(charArray[3], inputArray);
    // 1,2,3,4
    inputArray = [charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(charArray[3], inputArray);
    // 0,1,2,3,4
    inputArray = [charArray[0],charArray[1],charArray[2],charArray[3],charArray[4]];
    strictCheck(charArray[3], inputArray);

    // diag \ - line indexes = 3,9
    inputArray = [charArray[3], charArray[9]];
    createChecks(inputArray);
     // up down - line indexes = 3,8,13,18,23
    inputArray = [charArray[3], charArray[8], charArray[13], charArray[18], charArray[23]];
    createChecks(inputArray);
    // diag / - line indexes = 3,7,11,15
    inputArray = [charArray[3], charArray[7], charArray[11], charArray[15]];
    createChecks(inputArray);
}
const tile_A5Check = () => {
    let inputArray = ""; // start index = 4
    // left right - line indexes = 4,3,2,1,0
    inputArray = [charArray[4], charArray[3], charArray[2], charArray[1], charArray[0]];
    createChecks(inputArray);
    // up down - line indexes = 4,9,14,19,24
    inputArray = [charArray[4], charArray[9], charArray[14], charArray[19], charArray[24]];
    createChecks(inputArray);
    // diag / - line indexes = 4,8,12,16,20
    inputArray = [charArray[4], charArray[8], charArray[12], charArray[16], charArray[20]];
    createChecks(inputArray);
}

// ROW B
const tile_B1Check = () => {
    let inputArray = ""; // start index = 5
    // left right - 5,6,7,8,9
    inputArray = [charArray[5], charArray[6], charArray[7], charArray[8], charArray[9]];
    createChecks(inputArray);
    // diag \ 5,11,17,23
    inputArray = [charArray[5], charArray[6], charArray[7], charArray[8], charArray[9]];
    createChecks(inputArray);
    // up down - 5,10,15,20
    inputArray = [charArray[5], charArray[10], charArray[15], charArray[20]];
    createChecks(inputArray);
    // 5,0
    inputArray = [charArray[5], charArray[0]];
    createChecks(inputArray);
    // 0,5,10
    inputArray = [charArray[0],charArray[5],charArray[10]];
    strictCheck(charArray[5], inputArray);
    // 0,5,10,15
    inputArray = [charArray[0],charArray[5],charArray[10],charArray[15]];
    strictCheck(charArray[5], inputArray);
    //0,5,10,15,20
    inputArray = [charArray[0],charArray[5],charArray[10],charArray[15],charArray[20]];
    strictCheck(charArray[5], inputArray);

    // diag /
    inputArray = [charArray[5], charArray[1]];
    createChecks(inputArray);
    
}
const tile_B2Check = () => {
    let inputArray = ""; // start index = 6
    // left right
    inputArray = [charArray[6], charArray[5]];
    createChecks(inputArray);
    inputArray = [charArray[6], charArray[7],charArray[8],charArray[9]];
    createChecks(inputArray);   

    inputArray = [charArray[5],charArray[6],charArray[7]];
    strictCheck(charArray[6], inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8]];
    strictCheck(charArray[6], inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8],charArray[9]];
    strictCheck(charArray[6], inputArray);

    // diag \
    inputArray = [charArray[6], charArray[12],charArray[18],charArray[24]];
    createChecks(inputArray);
    inputArray = [charArray[6], charArray[0]];
    createChecks(inputArray);

    inputArray = [charArray[0],charArray[6],charArray[12]];
    strictCheck(charArray[6], inputArray);
    inputArray = [charArray[0],charArray[6],charArray[12],charArray[18]];
    strictCheck(charArray[6], inputArray);
    inputArray = [charArray[0],charArray[6],charArray[12],charArray[18],charArray[24]];
    strictCheck(charArray[6], inputArray);

    // up down
    inputArray = [charArray[6], charArray[11],charArray[16],charArray[21]];
    createChecks(inputArray);
    inputArray = [charArray[6], charArray[1]];
    createChecks(inputArray);

    inputArray = [charArray[1],charArray[6],charArray[11]];
    strictCheck(charArray[6], inputArray);
    inputArray = [charArray[1],charArray[6],charArray[11],charArray[16]];
    strictCheck(charArray[6], inputArray);
    inputArray = [charArray[1],charArray[6],charArray[11],charArray[16],charArray[21]];
    strictCheck(charArray[6], inputArray);

    // diag /
    inputArray = [charArray[6],charArray[2]];
    createChecks(inputArray);
    inputArray = [charArray[6],charArray[10]];
    createChecks(inputArray);
    inputArray = [charArray[2],charArray[6],charArray[10]];
    strictCheck(charArray[6], inputArray);
}
const tile_B3Check = () => {
    let inputArray = "";
    // left right
    inputArray = [charArray[7],charArray[6],charArray[5]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[8],charArray[9]];
    createChecks(inputArray);

    inputArray = [charArray[6],charArray[7],charArray[8]];    
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8]];
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[6],charArray[7],charArray[8],charArray[9]];
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[5],charArray[6],charArray[7],charArray[8],charArray[9]];
    strictCheck(charArray[7], inputArray);

    // diag \
    inputArray = [charArray[7],charArray[13],charArray[19]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[1]];
    createChecks(inputArray);

    inputArray = [charArray[1],charArray[7],charArray[13]];
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[1],charArray[7],charArray[13],charArray[19]];
    strictCheck(charArray[7], inputArray);

    // up down
    inputArray = [charArray[7],charArray[2]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[12],charArray[17],charArray[22]];
    createChecks(inputArray);
    
    inputArray = [charArray[2],charArray[7],charArray[12]];    
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[2],charArray[7],charArray[12],charArray[17]];
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[2],charArray[7],charArray[12],charArray[17],charArray[22]];
    strictCheck(charArray[7], inputArray);

    // diag /

    inputArray = [charArray[7],charArray[3]];
    createChecks(inputArray);
    inputArray = [charArray[7],charArray[11],charArray[15]];
    createChecks(inputArray);
    
    inputArray = [charArray[3],charArray[7],charArray[11]];    
    strictCheck(charArray[7], inputArray);
    inputArray = [charArray[3],charArray[7],charArray[11],charArray[15]];
    strictCheck(charArray[7], inputArray);


}
const tile_B4Check = () => {
    let inputArray = "";
    // left right
    // 8,9 - 8,7,6,5 - 9,8,7 - 9,8,7,6 - 9,8,7,6,5

    // diag \
    // 8,2 - 8,14 - 2,8,14

    // up down
    // 8,3 - 8,13,18,23 - 3,8,13 - 3,8,13,18 - 3,8,13,18,23

    // diag /
    // 8,4 - 8.12,16,20 - 4,8,12 - 4,8,12,16 - 4,8,12,16,20

}
const tile_B5Check = () => {
    let inputArray = "";
    // left right
    // 9,8,7,6,5

    // diag \
    // 9,3

    // up down
    // 9,4 - 9,14,19,24 - 4,9,14 - 4,9,14,19 - 4,9,14,19,24

    // diag /
    // 9,13,17,21

    
}

// ROW C
const tile_C1Check = () => {
    
}
const tile_C2Check = () => {
    
}
const tile_C3Check = () => {
    let inputArray = "";
    // line indexes = 0,1,2,3,4
    
}
const tile_C4Check = () => {
    
}
const tile_C5Check = () => {
    
}

// ROW D
const tile_D1Check = () => {
    
}
const tile_D2Check = () => {
    
}
const tile_D3Check = () => {
    
}
const tile_D4Check = () => {
    
}
const tile_D5Check = () => {
    
}

// ROW E
const tile_E1Check = () => {
    
}
const tile_E2Check = () => {
    
}
const tile_E3Check = () => {
    
}
const tile_E4Check = () => {
    
}
const tile_E5Check = () => {
    
}


const createChecks = (lineChars) => {

    let input = "";

    switch(lineChars.length){
        case 2:
            // 2 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[0], input);
            }
            break;

        case 3:
            // 3 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[0], input);
                
                if(lineChars[2] != ""){
                    input = lineChars[0].concat(lineChars[1],lineChars[2]);
                    checkString(lineChars[0], input);
                    input = lineChars[2].concat(lineChars[1],lineChars[0]);
                    checkString(lineChars[0], input);                        
                }
            }            
            break;  

        case 4:
            // 4 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[0], input);
                
                if(lineChars[2] != ""){
                    input = lineChars[0].concat(lineChars[1],lineChars[2]);
                    checkString(lineChars[0], input);
                    input = lineChars[2].concat(lineChars[1],lineChars[0]);
                    checkString(lineChars[0], input);    
                    
                    if(lineChars[3] != ""){
                        input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3]);
                        checkString(lineChars[0], input);
                        input = lineChars[3].concat(lineChars[2],lineChars[1],lineChars[0]);
                        checkString(lineChars[0], input);                        
                    }
                }
            } 
            break;       
        case 5:
            // 5 letter
            if(lineChars[1] != ""){
                input = lineChars[0].concat(lineChars[1]);
                checkString(lineChars[0], input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(lineChars[0], input);
                
                if(lineChars[2] != ""){
                    input = lineChars[0].concat(lineChars[1],lineChars[2]);
                    checkString(lineChars[0], input);
                    input = lineChars[2].concat(lineChars[1],lineChars[0]);
                    checkString(lineChars[0], input);    
                    
                    if(lineChars[3] != ""){
                        input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3]);
                        checkString(lineChars[0], input);
                        input = lineChars[3].concat(lineChars[2],lineChars[1],lineChars[0]);
                        checkString(lineChars[0], input); 

                        if(lineChars[4] != ""){
                            input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3],lineChars[4]);
                            checkString(lineChars[0], input);
                            input = lineChars[4].concat(lineChars[3],lineChars[2],lineChars[1],lineChars[0]);
                            checkString(lineChars[0], input);                        
                        }                      
                    }
                }
            } 
            break;
        default:
            //
            console.log("issue detected")
    }
}


const strictCheck = (newChar, lineChars) => {

    // console.log(`line length: ${lineChars.length}`)
    //console.log(lineChars)

    let input = "";
    let missing = false;

    for(let i=0; i<lineChars.length; i++)
    {
        if (lineChars[i] == ""){
            missing = true
        }
    }
    //console.log(missing)

    if(missing != true)
    {
        switch (lineChars.length){
            case 1:                
                break;

            case 2:
                input = lineChars[0].concat(lineChars[1]);
                checkString(newChar, input);
                input = lineChars[1].concat(lineChars[0]);
                checkString(newChar, input);
                break;
    
            case 3:
                input = lineChars[0].concat(lineChars[1],lineChars[2]);
                checkString(newChar, input);
                input = lineChars[2].concat(lineChars[1],lineChars[0]);
                checkString(newChar, input);
                break;
    
            case 4:
                input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3]);
                checkString(newChar, input);
                input = lineChars[3].concat(lineChars[2],lineChars[1],lineChars[0]);
                checkString(newChar, input);
                break;
            
            case 5:
                input = lineChars[0].concat(lineChars[1],lineChars[2],lineChars[3],lineChars[4]);
                checkString(newChar, input);
                input = lineChars[4].concat(lineChars[3],lineChars[2],lineChars[1],lineChars[0]);
                checkString(newChar, input);
                break;
                                                        
            default:
                //
        }
    }
}









