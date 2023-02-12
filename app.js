import { dictIncludesA, dictIncludesB, dictIncludesC, dictIncludesD, dictIncludesE, dictIncludesF, dictIncludesG, dictIncludesH, dictIncludesI, dictIncludesJ, dictIncludesK, dictIncludesL, dictIncludesM, dictIncludesN, dictIncludesO, dictIncludesP, dictIncludesQ, dictIncludesR, dictIncludesS, dictIncludesT, dictIncludesU, dictIncludesV, dictIncludesW, dictIncludesX, dictIncludesY, dictIncludesZ } from "./iDictionary.js";
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
            case tileArray[0]:
                tile_A1Check();
            break;
            case tileArray[1]:
                tile_A2Check();
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

    //console.log(`input: ${newChar} - entering switch`);

    switch(newChar)
    {
        case "A":
            //console.log(`checking for A`)
            for(const entry of dictIncludesA)
            {
                //console.log(`Checking ${inputStr} against ${entry}`)
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{
                    //console.log(`no match`)
                }
            }
        break;
        case "E":
            //console.log(`checking for E`)
            for(const entry of dictIncludesE)
            {
                //console.log(`Checking ${inputStr} against ${entry}`)
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{
                    //console.log(`no match`)
                }
            }
        break;
        case "I":
            //console.log(`checking for I`)
            for(const entry of dictIncludesI)
            {
                //console.log(`Checking ${inputStr} against ${entry}`)
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{
                    //console.log(`no match`)
                }
            }
        break;
        case "O":
            //console.log(`checking for O`)
            for(const entry of dictIncludesO)
            {
                //console.log(`Checking ${inputStr} against ${entry}`)
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{
                    //console.log(`no match`)
                }
            }
        break;
        case "T":
            //console.log(`checking for O`)
            for(const entry of dictIncludesT)
            {
                //console.log(`Checking ${inputStr} against ${entry}`)
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{
                    //console.log(`no match`)
                }
            }
        break;
        case "U":
            //console.log(`checking for U`)
            for(const entry of dictIncludesU)
            {
                //console.log(`Checking ${inputStr} against ${entry}`)
                if(inputStr == entry){
                    logWord(inputStr);
                    console.log(`${inputStr} is a match!`);
                }
                else{
                    //console.log(`no match`)
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
    let input = "";

    // left -> right 
    // line indexes = 0,1,2,3,4
    if(charArray[1] != ""){        
        // 2 letter
        // go back to check against dictionary
        input = charArray[0].concat(charArray[1]);
        checkString(charArray[0], input);
        // and reverse
        input = charArray[1].concat(charArray[0]);
        checkString(charArray[0], input);
        // check next line along
        if(charArray[2] != ""){
            // 3 letter
            // go back to check against dictionary
            input = charArray[0].concat(charArray[1],charArray[2]);
            checkString(charArray[0], input);
            // and reverse
            input = charArray[2].concat(charArray[1],charArray[0]);
            checkString(charArray[0], input);
            // check next line along
            if(charArray[3] != ""){
                // 4 letter
                // go back to check against dictionary
                input = charArray[0].concat(charArray[1],charArray[2],charArray[3]);
                checkString(charArray[0], input);
                // and reverse
                input = charArray[3].concat(charArray[2].charArray[1],charArray[0]);
                checkString(charArray[0], input);
                // check next line along
                if(charArray[4] != ""){
                    // 5 letter                    
                    input = charArray[0].concat(charArray[1],charArray[2],charArray[3],charArray[4]);
                    checkString(charArray[0], input);
                    // and reverse
                    input = charArray[4].concat(charArray[3],charArray[2].charArray[1],charArray[0]);
                    checkString(charArray[0], input);
                }
            }
        }        
    }    
    // topLeft -> bottomRight
    // line indexes = 0,6,12,18,24
    if(charArray[6] != ""){        
        // 2 letter    
        input = charArray[0].concat(charArray[6]);
        checkString(charArray[0], input);        
        input = charArray[6].concat(charArray[0]);
        checkString(charArray[0], input);      
        if(charArray[12] != ""){
            // 3 letter  
            input = charArray[0].concat(charArray[6],charArray[12]);
            checkString(charArray[0], input);        
            input = charArray[12].concat(charArray[6],charArray[0]);
            checkString(charArray[0], input);           
            if(charArray[18] != ""){
                // 4 letter    
                input = charArray[0].concat(charArray[6],charArray[12],charArray[18]);
                checkString(charArray[0], input);        
                input = charArray[18].concat(charArray[12],charArray[6],charArray[0]);
                checkString(charArray[0], input);             
                if(charArray[24] != ""){
                    // 5 letter
                    input = charArray[0].concat(charArray[6],charArray[12],charArray[18],charArray[24]);
                    checkString(charArray[0], input);        
                    input = charArray[24].concat(charArray[18],charArray[12],charArray[6],charArray[0]);
                    checkString(charArray[0], input); 
                }
            }
        }        
    }
    // top -> bottom
    // line indexes = 0,5,10,15,20
    if(charArray[5] != ""){        
        // 2 letter  
        input = charArray[0].concat(charArray[5]);
        checkString(charArray[0], input);        
        input = charArray[5].concat(charArray[0]);
        checkString(charArray[0], input);       
        if(charArray[10] != ""){
            // 3 letter     
            input = charArray[0].concat(charArray[5],charArray[10]);
            checkString(charArray[0], input);        
            input = charArray[10].concat(charArray[5],charArray[0]);
            checkString(charArray[0], input);        
            if(charArray[15] != ""){
                // 4 letter      
                input = charArray[0].concat(charArray[5],charArray[10],charArray[15]);
                checkString(charArray[0], input);        
                input = charArray[15].concat(charArray[10],charArray[5],charArray[0]);
                checkString(charArray[0], input);          
                if(charArray[20] != ""){
                    // 5 letter
                    input = charArray[0].concat(charArray[5],charArray[10],charArray[15],charArray[20]);
                    checkString(charArray[0], input);        
                    input = charArray[20].concat(charArray[15],charArray[10],charArray[5],charArray[0]);
                    checkString(charArray[0], input); 
                }
            }            
        }      
    }     
}
const tile_A2Check = () => {
    let input = "";
    let inputArray = "";

    // left -> right
    // line indexes = 1,2,3,4
    if(charArray[2] != ""){        
        // 2 letter        
        input = charArray[1].concat(charArray[2]);
        checkString(charArray[1], input);        
        input = charArray[2].concat(charArray[1]);
        checkString(charArray[1], input);       
        if(charArray[3] != ""){
            // 3 letter
            input = charArray[1].concat(charArray[2],charArray[3]);
            checkString(charArray[1], input);        
            input = charArray[3].concat(charArray[2],charArray[1]);
            checkString(charArray[1], input);  
            if(charArray[4] != ""){
                // 4 letter
                input = charArray[1].concat(charArray[2],charArray[3],charArray[4]);
                checkString(charArray[1], input);        
                input = charArray[4].concat(charArray[3],charArray[2],charArray[1]);
                checkString(charArray[1], input); 
            }
        }
    }

    // topLeft -> bottomRight
    // line indexes = 1,7,13,19
    inputArray = [charArray[1], charArray[7], charArray[13], charArray[19]];
    createChecks(inputArray);

    // if(charArray[7] != ""){        
    //     // 2 letter        
    //     input = charArray[1].concat(charArray[7]);
    //     checkString(charArray[1], input);        
    //     input = charArray[7].concat(charArray[1]);
    //     checkString(charArray[1], input);       
    //     if(charArray[13] != ""){
    //         // 3 letter
    //         input = charArray[1].concat(charArray[7],charArray[13]);
    //         checkString(charArray[1], input);        
    //         input = charArray[13].concat(charArray[7],charArray[1]);
    //         checkString(charArray[1], input);  
    //         if(charArray[19] != ""){
    //             // 4 letter
    //             input = charArray[1].concat(charArray[7],charArray[13],charArray[19]);
    //             checkString(charArray[1], input);        
    //             input = charArray[19].concat(charArray[13],charArray[7],charArray[1]);
    //             checkString(charArray[1], input); 
    //         }
    //     }
    // }

    // top -> bottom
    // line indexes = 1,6,11,16,21
    inputArray = [charArray[1], charArray[6], charArray[11], charArray[16], charArray[21]];
    createChecks(inputArray);

    // topRight -> bottomLeft
    // line indexes = 1,5
    inputArray = [charArray[1], charArray[5]];
    createChecks(inputArray);

    // right -> left 
    // line indexes = 1,0
    inputArray = [charArray[1], charArray[0]];
    createChecks(inputArray);

}
const tile_A3Check = () => {
    
}
const tile_A4Check = () => {
    
}
const tile_A5Check = () => {
    
}

// ROW B
const tile_B1Check = () => {
    
}
const tile_B2Check = () => {
    
}
const tile_B3Check = () => {
    
}
const tile_B4Check = () => {
    
}
const tile_B5Check = () => {
    
}

// ROW C
const tile_C1Check = () => {
    
}
const tile_C2Check = () => {
    
}
const tile_C3Check = () => {
    
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












