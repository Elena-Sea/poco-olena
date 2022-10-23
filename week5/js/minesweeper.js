// Set this constant to true to debug the placement of bombs without
// having to click on all cells to reveal them.
const CHEAT_REVEAL_ALL = false;

const ROWS_COUNT = 10;
const COLS_COUNT = 10;

const BOMBS_COUNT = 10;



var defeat = false;
var victory = false;

// Cell constructor
function Cell()
{
    this.discovered = false;
    this.isBomb = false;
    this.hasBeenFlagged = false;
}
// Initialize cells
var cells = Array(ROWS_COUNT);

for (var row = 0; row < ROWS_COUNT; row++) {
    cells[row] = Array(COLS_COUNT);

    for (var col = 0; col < COLS_COUNT; col++) {
        cells[row][col] = new Cell();
    }
}



//
// TODO: Task 1 - add some bombs at fixed positions.

// cells[0][2].isBomb = true;



//
// TODO: Task 2 - Comment out the code of task 1. Instead of adding bombs in fixed places, add 10 of them in random places.
//                Add a BOMBS_COUNT constant so that you can easily change the amount of bombs placed. Put it next to the
//                other constants.
//


let bombsNumber = BOMBS_COUNT;
let bomRowI;
let bomColI;

for (let i = 0; i < bombsNumber; i += 1) {
  
    bomRowI = Math.floor(Math.random() * 10);
    bomColI = Math.floor(Math.random() * 10);

    // cells[bomRowI][bomColI].isBomb == true ? bombsNumber += 1 : cells[bomRowI][bomColI].isBomb = true;

    if (cells[bomRowI][bomColI].isBomb == true) {
        bombsNumber += 1;
        // console.log(bombsNumber);
    } else { 
        cells[bomRowI][bomColI].isBomb = true;
        // console.log(bombsNumber);
    }

}

// Once the game has been initialized, we "render" it.
render();

//
// Game functions definitions
//
let numDisCells = 0;
function discoverCell(row, col) {
    //
    // TODO: Task 5 - Reveal cells when clicked.
    //
    

    cells[row][col].discovered = true;
    numDisCells += 1;
    console.log(numDisCells);
    // TODO: Task 6 - Discover neighbor cells recursively, as long as there are no adjacent bombs to the current cell.
    //
    let maxRowNum = ROWS_COUNT - 1;
    let maxColNum = COLS_COUNT - 1;
    
    let bombNum = countAdjacentBombs(row, col);
            console.log(bombNum);

    if (bombNum == 0) { 
        if (row > 0 && row < maxRowNum && col > 0 && col < maxColNum) {
            for (let i = row - 1; i <= row + 1; i += 1) {
                for (let j = col - 1; j <= col + 1; j += 1) {
                    cells[i][j].discovered = true;
                        numDisCells += 1;

                }
            }
        }
        
    }


    //
    // TODO: Task 8 - Implement defeat. If the player "discovers" a bomb (clicks on it without holding shift), set the variable defeat to true.
    //
    if (cells[row][col].isBomb == true) { 
        defeat = true;
        
    }
    return numDisCells;
}

function flagCell(row, col) {
    //
    // TODO: Task 7 - Implement flags. Flags allow the player to mark cells that they think contain a bomb.
    //                When clicking a cell and holding shift, function flagCell() will be called for you.
    //

    
    if (cells[row][col].hasBeenFlagged == true) {
        cells[row][col].discovered = false;
        cells[row][col].hasBeenFlagged = false;
    } else { 
        cells[row][col].hasBeenFlagged = true;
    }
    
}

// This function is called once for each cell when rendering the game. The row and col of the current cell is
// passed to the functionn
function countAdjacentBombs(row, col) {
    //
    // TODO: Task 4 - Adjacent bombs are bombs in cells touching our cell (also diagonally). Implement this function
    //                so that it returns the count of adjacent cells with bombs in them.
    
   
    let maxRowNum = ROWS_COUNT - 1;
    let maxColNum = COLS_COUNT - 1;
    let bombCounter = 0;


    if (row > 0 && row < maxRowNum && col > 0 && col < maxColNum) {
        // console.log(row, col);
        for (let i = row - 1; i <= row + 1; i += 1) {
            for (let j = col - 1; j <= col + 1; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (row == 0 && col == 0) {
        for (let i = row; i <= row + 1; i += 1) {
            for (let j = col; j <= col + 1; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (row == maxRowNum && col == 0) {
        for (let i = row - 1; i <= row; i += 1) {
            for (let j = col; j <= col + 1; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (row == maxRowNum && col == maxColNum) {
        for (let i = row - 1; i <= row; i += 1) {
            for (let j = col - 1; j <= col; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (row == 0 && col == maxColNum) {
        for (let i = row; i <= row + 1; i += 1) {
            for (let j = col - 1; j <= col; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }
    
    if (row == 0 && col > 0  && col < maxColNum) {

        for (let i = row; i <= row + 1; i += 1) {
            for (let j = col - 1; j <= col + 1; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (row == maxRowNum && col > 0  && col < maxColNum) {

        for (let i = row - 1; i <= row; i += 1) {
            for (let j = col - 1; j <= col + 1; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (col == 0 && row > 0 && row < maxRowNum) {

        for (let i = row - 1; i <= row + 1; i += 1) {
            for (let j = col; j <= col + 1; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    if (col == maxColNum && row > 0 && row < maxRowNum) {

        for (let i = row - 1; i <= row + 1; i += 1) {
            for (let j = col - 1; j <= col; j += 1) {
                if (cells[i][j].isBomb == true) {
                    bombCounter += 1;
                }
            }
        }
    }

    
    return bombCounter;
}

function getBombsCount() {
    //
    // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
    //
    return 0;
}

function getClearedCells() {

    // let clearedCells = numDisCells;
    // clearedCells += discoverCell(row, col);
   
    //
    // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
    //
    return 0;
}

function getTotalCellsToClear() {
    //
    // TODO: Task 9 - Implement stats: the counters currently always display 0, calculate and return the relevant values.
    //
    return 0;
}

function checkForVictory() {
    //
    // TODO: Task 10 - Implement victory. If the player has revealed as many cells as they must (every cell that isn't a
    //                 bomb), set variable victory to true.
    //

  
    return 0;
}

//
// Rendering functions
//
function getMessage() {
    if (victory == true) {
        return "Well done! 👏🏼<br><br>Refresh the page to start again.";
    } else if (defeat) {
        return "Boom! 💥<br><br>Refresh the page to try again.";
    }
    return "";
}

// "Render" the game. Update the content of the page to reflect any changes to the game state.
function render() {
    var playfield = document.getElementById("playfield");
    var html = "";
    for (var row = 0; row < ROWS_COUNT; row++) {
        html += '<div class="row">';
        for (var col = 0; col < COLS_COUNT; col++) {
            var cell = cells[row][col];
            var cellText = "";
            var cssClass = "";
            var textColor = "";
            if (cell.discovered || CHEAT_REVEAL_ALL || defeat) {
                cssClass = "discovered";
                if (cell.isBomb) {
                    cellText = "💣";
                } else {
                    var adjBombs = countAdjacentBombs(row, col);
                    
                    if (adjBombs > 0) { 
                        cellText = adjBombs.toString();
                        if (adjBombs == 1) {
                            textColor = "blue";
                        } else if (adjBombs == 2) {
                            textColor = "green";
                        } else if (adjBombs == 3) {
                            textColor = "red";
                        } else if (adjBombs == 4) {
                            textColor = "black";
                        }
                    }
                }
            } else {
                if (cell.hasBeenFlagged) {
                    cellText = "🚩"
                }
            }
            html += `<div class="cell ${cssClass}" style="color:${textColor}" onclick="onCellClicked(${row}, ${col}, event)">${cellText}</div>`;
        }
        html += "</div>"
    }
    playfield.innerHTML = html;

    // Defeat screen
    var body = document.getElementsByTagName("body")[0];
    if (defeat) {
        body.classList.add("defeat")
    }

    // Victory screen
    if (victory) {
        body.classList.add("victory")
    }

    // Update stats
    document.getElementById("bombs-count").innerText = getBombsCount().toString();
    document.getElementById("cleared-cells-count").innerText = getClearedCells().toString();
    document.getElementById("total-cells-to-clear").innerText = getTotalCellsToClear().toString();

    // Update message
    document.getElementById("message").innerHTML = getMessage();
}

// This function gets called each time a cell is clicked. Arguments "row" and "col" will be set to the relevant
// values. Argument "event" is used to check if the shift key was held during the click.
function onCellClicked(row, col, event) {
    if(event.shiftKey) {
        flagCell(row, col);
    } else {
        discoverCell(row, col);
    }
    checkForVictory();
    render();
}
