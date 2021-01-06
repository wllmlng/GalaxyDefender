//! NON-CANVAS WAY
// //dimension of the game board
// const DIM_X = 800;
// const DIM_Y = 650;

// //ships position when game is initialized
// const SHIP_POS = {
//     x: DIM_X / 2,
//     y: (DIM_Y / 2) + 100
// }

// //when game is initialize, it will create a player and give it a position
// function createPlayer(_game){
//     const _ship = document.createElement("IMG");
//     _ship.src = '../stylesheets/img/player_green.png';
//     _ship.className = 'ship';
//     _ship.style.height = 'auto';
//     _ship.style.width = '40px';

//     //adding the ship element INTO the game element tag as the last child
//     _game.appendChild(_ship);

//     //starts the game with the ship in the SHIP_POS
//     _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`

// }


// //keypress is deprecated
// window.addEventListener('keydown', onKeyPress);
// window.addEventListener('keyup', onKeyUp);
// window.requestAnimationFrame(update); //lets the browser know to annimate something

// const MOVE_DIR = {
//     left: 'ArrowLeft',
//     right: 'ArrowRight',
//     up: 'ArrowUp',
//     down: 'ArrowDown',
//     space: " "
// }

// const KEY_PRESS = {
//     left: false,
//     right: false,
//     up: false,
//     down: false
// }

// function onKeyPress(e){
//     e.preventDefault();
//     let key = e.key;
//     const _ship = document.querySelector('.ship')

//     if(key === MOVE_DIR.left){
//         // SHIP_POS.x -= 23;
//         // console.log(SHIP_POS.x)
//         // _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`    
//         KEY_PRESS.left = true;
//     }else if( key === MOVE_DIR.right ){
//         KEY_PRESS.right = true;
//     }else if ( key === MOVE_DIR.up){
//         KEY_PRESS.up = true;
//     }else if ( key === MOVE_DIR.down ){
//         KEY_PRESS.down = true;
//     }else if ( key === MOVE_DIR.space ){
//         console.log('pew');
//     }
// }

// function onKeyUp(e){
//     let key = e.key;
//     const _ship = document.querySelector('.ship')

//     if(key === MOVE_DIR.left){   
//         KEY_PRESS.left = false;
//     }else if( key === MOVE_DIR.right ){
//         KEY_PRESS.right = false;
//     }else if ( key === MOVE_DIR.up){
//         KEY_PRESS.up = false;
//     }else if ( key === MOVE_DIR.down ){
//         KEY_PRESS.down = false;
//     }else if ( key === MOVE_DIR.space ){
//         console.log('pew');
//     }
// }


// function changeShipPos(){
//     if (KEY_PRESS.left){
//         SHIP_POS.x > 0 ? SHIP_POS.x -= 4 : 0
//         // SHIP_POS.x > 0 ? SHIP_POS.x -= 4 : 0
//         // SHIP_POS.x -= 4;
//         // console.log('ship',SHIP_POS.x);
//         // console.log(DIM_X - 40);
//     }
//     if (KEY_PRESS.right){
//         SHIP_POS.x < DIM_X - 40 ? SHIP_POS.x += 4 : DIM_X - 40
//     }
//     if (KEY_PRESS.up){
//         SHIP_POS.y > 0 ? SHIP_POS.y -= 4 : 0
//     }
//     if (KEY_PRESS.down){
//         SHIP_POS.y < DIM_Y - 40 ? SHIP_POS.y += 4 : DIM_Y - 40
//     }   

//     let horiBorder = borderRestriction(SHIP_POS.x, 0, (DIM_X - 40))
//     let veriBorder = borderRestriction(SHIP_POS.y, 0, (DIM_Y - 40))

//     executeShipPos(horiBorder, veriBorder); 
// }

// function executeShipPos(x, y){
//     const _ship = document.querySelector('.ship');
//     _ship.style.transform = `translate(${x}px, ${y}px)`
// }


// function borderRestriction(pos, min, max){
//     if( pos < min ){
//         return min;
//     }else if ( pos > max){
//         return max;
//     }else {
//         return pos;
//     }
// }


// function update(){
//     // const deltaTime = (Date.now() - SHIP_POS.lastTime) / 1000;

//     changeShipPos();
//     window.requestAnimationFrame(update)
// }



// //initializes the game
// function initialize(){
//     let _game = document.getElementById("game")

//     createPlayer(_game);
//     console.log('Game initialized')
//     console.log('Game test')
// }

// initialize();  



//!~~~~~~~~~~~~~~~~~~~CANVAS TEST  -  ORIGINAL~~~~~~~~~~~~~~~~~~~~~~~~~
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// canvas.width = 800;
// canvas.height= 650;

// const keys= [];
// const player = {
//     x: 0, //hori posi 
//     y: 0, //vert posi 
//     width: 40, //size of player
//     height: 40,  //size of player
//     frameX: 0,  //hori coord - spreadsheet/sprite 
//     frameY: 0, //vert coord - spreadsheet/sprite
//     speed: 9,//pixel per frame
//     moving: false //standing and walking animation
// };


// const shipSprite = new Image();
// shipSprite.src = '../stylesheets/img/player_green.png';
// // shipSprite.className = 'ship';
// // shipSprite.style.height = 'auto';
// // shipSprite.style.width = '40px';

// const background = new Image();
// background.src = '../stylesheets/img/background_blue.png';


// // function drawSprite(img, sX, sY, sW, SH, dX, dY, dW, dH){
// //     ctx.drawImage(img, sX, sY, sW, SH, dX, dY, dW, dH);
// // } //!for big sprite with tilt effect
// function drawSprite(img, dX, dY, dW, dH){
//     ctx.drawImage(img, dX, dY, dW, dH);
// }

// let position = 0;
// function animate(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(background, 0, position, canvas.width, canvas.height);
//     //built in canvas method. 
//     position ++;
//     // drawSprite(shipSprite, 0, 0, player.width, player.height,
//     //     200, 150, player.width, player.hieght); //!for big sprite with tilt effect
//     drawSprite(shipSprite, 200, 500, player.height, player.width);
//     requestAnimationFrame(animate);
// }

// animate();

// window.addEventListener('keydown', onKeyPress);
// window.addEventListener('keyup', onKeyUp);

// function onKeyPress(e){
    
// }

// function onKeyUp(e){
    
// }

//!~~~~~~~~~~~~~~~~~~~CANVAS ATTEMPT~~~~~~~~~~~~~~~~~~~~~~~~~

const BACKGROUND = new Image();
    BACKGROUND.src = '../stylesheets/img/bg.png';


const SHIP = new Image();
    SHIP.src = '../stylesheets/img/ship/player_cool.png';


function Drawable(){
    this.initialize = function(x, y, width, height){ 
        this.x = x; //start pos(x,y) when initialized
        this.y = y;
        this.itemWidth = width; //size for ships/projectiles from 2nd canvas
        this.itemHeight = height; 
    }
    this.pixelSpeed = 0; // pixels fps 
    this.canvasWidth = 0; //800 //the imgs width+height / canvas size 
    this.canvasHeight = 0; //650

    this.draw = function(){}; //DELETE indicator that this function isnt to create objects



}


                                        //! === BACKGROUND

function Background(){
    this.pixelSpeed = 1; 

    this.draw = function(){
        this.y += this.pixelSpeed; //1 pixel per frame
        
        this.context.drawImage(BACKGROUND, this.x, this.y);
        this.context.drawImage(BACKGROUND, this.x, this.y - this.canvasHeight); //height="360"
        //redraw the same image twice so it appears to be infinite scrolling

        if (this.y >= this.canvasHeight){
            this.y = 0;     //if the image leaves the screen, it will restart
        }
    }   
}
Background.prototype = new Drawable();
// telling Background to inherit everything from Drawable;


                                        //!BLASTER



// const BLASTER = new Image();
//     BLASTER.src = '../stylesheets/img/blaster/laserBlue01.png';

   
// function Blaster(){

//     this.fire = false;

//     this.blaster = function(x, y){
//         this.x = x;
//         this.y = y;
//         this.speed = 2;
//         this.fire = true;
//     }

//     this.draw = function(){
//         this.context.clearRect(this.x, this.y, this.itemWidth, this.itemHeight); 
//         //erases the pixels in a given rectangular space
//         this.y -= this.speed;
//         this.context.drawImage(BLASTER, this.x, this.y)
//     }

//     this.clear = function(){
//         this.x = 0;
//         this.y = 0;
//         this.speed = 0;
//         this.alive = false;
//     }


// }
// Blaster.prototype = new Drawable();                                        






                                        //! === SHIP


const MOVE_DIR = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',
    space: "Space"
}

const KEY_PRESS = {
    left: false,
    right: false,
    up: false,
    down: false,
    space: false
}

window.addEventListener('keydown', onKeyPress);
function onKeyPress(e){
    e.preventDefault(); //prevents browser scroll
    let key = e.code;
    if(key === MOVE_DIR.left){
        KEY_PRESS.left = true;
        // console.log(KEY_PRESS.left)
    }else if( key === MOVE_DIR.right ){
        KEY_PRESS.right = true;
    }else if ( key === MOVE_DIR.up){
        KEY_PRESS.up = true;
    }else if ( key === MOVE_DIR.down ){
        KEY_PRESS.down = true;
    }else if ( key === MOVE_DIR.space ){
        console.log('pew');
    }
}

window.addEventListener('keyup', onKeyUp);
function onKeyUp(e){
    let key = e.code;

    if(key === MOVE_DIR.left){   
        KEY_PRESS.left = false;
    }else if( key === MOVE_DIR.right ){
        KEY_PRESS.right = false;
    }else if ( key === MOVE_DIR.up){
        KEY_PRESS.up = false;
    }else if ( key === MOVE_DIR.down ){
        KEY_PRESS.down = false;
    }else if ( key === MOVE_DIR.space ){
        console.log('pew');
    }
}


function Ship(){

    this.speed = 5;

    let fireCounter = 15;
    let counter = 0;

    this.draw = function(){
        this.context.drawImage(SHIP, this.x, this.y);
    }

    this.move = function(){
        counter++;

        if(KEY_PRESS.left || KEY_PRESS.right || KEY_PRESS.down || KEY_PRESS.up){

            this.context.clearRect(this.x, this.y, this.itemWidth, this.itemHeight); 
            //removes ship at previous location if it moved
        

            if (KEY_PRESS.left) {                
                this.x <= 0 ? this.x = 0 : this.x -= this.speed
            }
            if (KEY_PRESS.right) {
                this.x >= this.canvasWidth-SHIP.width ? this.x = this.canvasWidth - SHIP.width : this.x += this.speed
            }
            if (KEY_PRESS.up) {
                this.y <= 0 ? this.y = 0 : this.y -= this.speed
                console.log(this.canvasHeight)
                
            }
            if (KEY_PRESS.down) {
                this.y >= this.canvasHeight-SHIP.height ? this.y = this.canvasHeight - SHIP.height : this.y += this.speed
            }
            
            this.draw();
        }    
		// if (KEY_STATUS.space && counter >= fireRate) {
		// 	this.fire();
		// 	counter = 0;
		// }
    }
	// this.fire = function() {
	// 	this.bulletPool.getTwo(this.x+6, this.y, 3, this.x+33, this.y, 3);
	// };
}
Ship.prototype = new Drawable();





                                    //! GAME
function Game(){
    this.initialize = function(){
        this.bgCanvas = document.getElementById('background');
        this.bgContext = this.bgCanvas.getContext('2d');
        
        Background.prototype.context = this.bgContext;
        Background.prototype.canvasWidth = this.bgCanvas.width; //width="600"
        Background.prototype.canvasHeight = this.bgCanvas.height; //height="360"



        this.shipCanvas = document.getElementById('ship');
        this.shipContext = this.shipCanvas.getContext('2d');
        
        Ship.prototype.context = this.shipContext;
        Ship.prototype.canvasWidth = this.shipCanvas.width; //width="85"
        Ship.prototype.canvasHeight = this.shipCanvas.height; //width="85"

        this.background = new Background();
        this.background.initialize(0, 0); //initializes bg - centered

        this.ship = new Ship();
        
        let shipStartPosX = (this.shipCanvas.width / 2) - (SHIP.width / 2);
        let shipStartPosY = (this.shipCanvas.height / 2) + 150;

        // console.log(this.shipCanvas.width)
        // console.log(SHIP.width)
        // console.log(SHIP.height)
		this.ship.initialize(shipStartPosX, shipStartPosY, SHIP.width, SHIP.height);

    }

    this.start = function(){
        this.ship.draw();
        animate();
    }
}


function animate(){
    window.requestAnimationFrame(animate); //lets the browser know to animate something
    game.background.draw();
    game.ship.move();

}


// Initialize Game
let game = new Game();

function initialize(){
    game.initialize();
    game.start();
}




