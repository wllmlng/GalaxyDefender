//dimension of the game board
const DIM_X = 800;
const DIM_Y = 650;

//ships position when game is initialized
const SHIP_POS = {
    x: DIM_X / 2,
    y: (DIM_Y / 2) + 100
}


//keypress is deprecated
window.addEventListener('keydown', onKeyPress);
// window.addEventListener('keyup', onKeyUp);

const MOVE_DIR = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',

    // left: false,
    // right: false,
    // up: false,
    // down: false,
    space: " "
}

const DIAG_DIR = {
    left: false,
    right: false,
    up: false,
    down: false
}


//when game is initialize, it will create a player and give it a position
function createPlayer(_game){
    const _ship = document.createElement("IMG");
    _ship.src = '../stylesheets/img/player_green.png';
    _ship.className = 'ship';
    _ship.style.height = 'auto';
    _ship.style.width = '40px';
    // _ship.alt = 'test';
    console.log(_ship)

    //adding the ship element INTO the game element tag as the last child
    _game.appendChild(_ship);

    //starts the game with the ship in the SHIP_POS
    _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`

}

function onKeyPress(e){
    // let hi = document.addEventListener('keydown', fn);
    // console.log(e.key)
    let key = e.key;
    const _ship = document.querySelector('.ship')

    if(key === MOVE_DIR.left){
        SHIP_POS.x -= 23;
        console.log(SHIP_POS.x)
        _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`    
    }else if( key === MOVE_DIR.right ){
        SHIP_POS.x += 23;
        console.log(SHIP_POS.x)
        _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`
    }else if ( key === MOVE_DIR.up && DIAG_DIR.left === false && DIAG_DIR.right === false){
        SHIP_POS.y -= 23;
        console.log(SHIP_POS.y)
        _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`
    }else if ( key === MOVE_DIR.down ){
        SHIP_POS.y += 23;
        console.log(SHIP_POS.y)
        _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`
    }else if ( key === MOVE_DIR.space ){
        console.log('pew');
    }
}

//!diagonal test
// function onKeyUp(e){
//     let key = e.key;

//     if(key === MOVE_DIR.left){
//         DIAG_DIR.left = false;
//         console.log('released clicked', DIAG_DIR.left)
        
//     }else if( key === MOVE_DIR.right ){
//         console.log('up',SHIP_POS.x)
        
//         //test
//         DIAG_DIR.right = false;


//     }else if ( key === MOVE_DIR.up ){
//         DIAG_DIR.up = false;
//         console.log('released clicked', DIAG_DIR.up)
        


//     }else if ( key === MOVE_DIR.down ){
//         console.log('up',SHIP_POS.y)
        
//         //test
//         DIAG_DIR.down = false;
//     }
// }
//!diagonal test

//initializes the game
function initialize(){
    let _game = document.getElementById("game")

    createPlayer(_game);
    console.log('Game initialized')
    console.log('Game test')
}

initialize();  




//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST~~~~~~~~~~~~~~~~~~~~~~~~~
