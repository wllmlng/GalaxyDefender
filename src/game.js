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
//         SHIP_POS.x -= 23;
//         console.log(SHIP_POS.x)
//         _ship.style.transform = `translate(${SHIP_POS.x}px, ${SHIP_POS.y}px)`    
    //     KEY_PRESS.left = true;
    // }else if( key === MOVE_DIR.right ){
    //     KEY_PRESS.right = true;
    // }else if ( key === MOVE_DIR.up){
    //     KEY_PRESS.up = true;
    // }else if ( key === MOVE_DIR.down ){
    //     KEY_PRESS.down = true;
    // }else if ( key === MOVE_DIR.space ){
    //     console.log('pew');
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
    BACKGROUND.src = './stylesheets/img/bg_vert.png';
const SHIP = new Image();
    SHIP.src = './stylesheets/img/ship/PlayerRed_Frame_01_55.png';    
    // SHIP.src = './stylesheets/img/ship/blue/PlayerBlue_Frame_55.png';    
const ACCEL = new Image();
    ACCEL.src = './stylesheets/img/ship/Exhaust_Frame_05.png';    
const BLASTER = new Image();
    BLASTER.src = './stylesheets/img/blaster/laserBlue01.png';
const ENEMY1 = new Image();
    // ENEMY1.src = './stylesheets/img/enemy/spaceShips_003_60.png';    
    ENEMY1.src = './stylesheets/img/enemy/skullBoss_70.png';    
const ZAPPER = new Image();
    // ZAPPER.src = './stylesheets/img/blaster/Minigun_Small.png';        
    ZAPPER.src = './stylesheets/img/blaster/Laser_Small_green.png';   
    // ZAPPER.src = './stylesheets/img/blaster/Plasma_Small_purp.png';   
const SPIDERBOSS = new Image();
    SPIDERBOSS.src = './stylesheets/img/boss/spiderBoss.png'
const SKULLBOSS = new Image();
    SKULLBOSS.src = './stylesheets/img/boss/skullBoss.png'    
    
// AUDIO
const BLASTERSOUND = new Audio("./stylesheets/audio/newNewFrostArrow.mp3");
// const BLASTERSOUND = new Audio("./stylesheets/audio/laser1.mp3");
BLASTERSOUND.volume = 0.35
const MUSIC = new Audio("./stylesheets/audio/slipknot-background-music.mp3");
MUSIC.volume = 0.15;
MUSIC.loop = true;
// MUSIC.autoplay = true;







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

}


                                        //! BACKGROUND

function Background(){
    this.pixelSpeed = 1; 

    this.draw = function(){
        this.y += this.pixelSpeed; //1 pixel per frame
        
        this.context.drawImage(BACKGROUND, this.x, this.y); //600 x 360
        this.context.drawImage(BACKGROUND, this.x, this.y - this.canvasHeight); //height="360"
        //redraw the same image twice so it appears to be infinite scrolling

        if (this.y >= this.canvasHeight){
            this.y = 0;     //if the image leaves the screen, it will restart
        }
    }   
}
Background.prototype = new Drawable();
// telling Background to inherit everything from Drawable;



                                        //!BLASTER / ZAPPER

function AmmoSupply() { //?OBJECT POOL TO RECYCLE BLASTERS
    let bulletAmt = 50; //! pool size to recycle 
    let bossAmt = 1;
    let pool = [];
    

    //fills up our arr with a collection of blaster objects to RECYCLE
    this.initialize = function(team) {

        if( team === 'blaster' ){
            for ( let i = 0; i < bulletAmt; i ++){
                let bullet = new Blaster('blaster');
                bullet.initialize(0, 0, BLASTER.width, BLASTER.height);
                pool.push(bullet);
            }
        }

        if ( team === 'enemyShip'){
            for ( let i = 0; i < bulletAmt; i ++){
                let enemy = new Enemy('enemyShip');
                enemy.initialize(0, 0, ENEMY1.width, ENEMY1.height);
                pool.push(enemy);
                // console.log('297 - fine',enemy)
            }
        }
        
        
        if (team === 'zapper'){
            for ( let i = 0; i < bulletAmt; i ++){
                let zap = new Blaster('zapper');
                zap.initialize(0, 0, ZAPPER.width, ZAPPER.height);
                pool.push(zap);
                // console.log('305 - fine',zap)
            }
        }
        
        if ( team === 'enemyBoss'){
            for ( let i = 1; i <= bossAmt; i ++){
                let boss = new Enemy('enemyBoss');
                boss.initialize(0, 0, SPIDERBOSS.width, SPIDERBOSS.height);
                pool.push(boss);
                // console.log('313', pool)
            }
        }

    }
    //checking to see if the item has been fired
    //if false, it will move it to the front for grabs
	this.shoot = function(x, y) {
        // console.log('gppd', pool)
        let lastShot = pool[pool.length - 1] //pool[-1]
		if(lastShot.fired === false) {
            let item = pool.pop();
			item.create(x, y);
			pool.unshift(item); //moves used item to the front of arr 
		}                         
    };
    
    //FIRES 2 BLASTER
	this.shootTwo = function(x1, y1, x2, y2) {
        let lastShot = pool[pool.length - 1] //pool[-1]
        let twoLastShot = pool[pool.length - 2] //pool[-2]
		if (lastShot.fired === false && twoLastShot.fired === false) {
            this.shoot(x1, y1);
            this.shoot(x2, y2);
        }
    };
    //FIRES 3 BLASTER
    this.shootThree = function(x1, y1, x2, y2, x3, y3) {
        let lastShot = pool[pool.length - 1] //pool[-1]
        let twoLastShot = pool[pool.length - 2] //pool[-2]
        let threeLastShot = pool[pool.length - 3] //pool[-3]
		if (lastShot.fired === false && twoLastShot.fired === false && threeLastShot.fired === false) {
            this.shoot(x1, y1);
            this.shoot(x2, y2);
            this.shoot(x3, y3);
        }
    };
    
    // if object is flipped true, this will animate the blaster and render it
	this.animateFiring = function() {
        for (let i = 0; i < bulletAmt; i++) {
            if (pool[i] === undefined){
                break;
            }else
            if (pool[i].fired === true) {
                pool[i].draw()
            }
        }
    };
}



   
function Blaster(good_evil){
    let team = good_evil;
    
    this.fired = false;

    this.create = function(x, y){  //x and y provided but the ship fire function
        this.x = x; 
        this.y = y; //where the blaster travels when its shot
        team === "blaster" ? this.speed = 10 : this.speed = 4
        this.fired = true;
    }
    
    this.draw = function(){
        this.context.clearRect(this.x, this.y, this.itemWidth, this.itemHeight);  //need clearRect to clear the image after each movement
        team === 'blaster' ? this.y -= this.speed : this.y += this.speed; //determines if bullets flies up or down
        
        //!TESTING
        if (team === 'blaster' && this.y <= 0 ) {
            this.resetBulletObj()
            // console.log('blast reseting')
        } else if( team === 'zapper' && this.y >= this.canvasHeight ){
            this.resetBulletObj()
            // console.log('zap reseting')
        }
        else {
            team === 'zapper' ? 
            this.context.drawImage(ZAPPER, this.x, this.y) : 
            this.context.drawImage(BLASTER, this.x, this.y) 
        }
        //!TESTING
    }

    //resets the blaster object so we can reuse it in our pool
    //covers both blaster and zapper
    this.resetBulletObj = function(){
        this.x = 0;
		this.y = 0;
		this.speed = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.fired = false;
    }

}
Blaster.prototype = new Drawable();                                        




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
    let key = e.code;
    // console.log(e)
    if(key === MOVE_DIR.left){
        e.preventDefault(); //prevents browser scroll
        KEY_PRESS.left = true;
        SHIP.src = './stylesheets/img/ship/PlayerRed_Frame_55_left.png';
        // SHIP.src = '../stylesheets/img/ship/blue/PlayerBlue_Frame_left_55.png';
        

    }else if( key === MOVE_DIR.right ){
        e.preventDefault(); 
        KEY_PRESS.right = true;
        SHIP.src = './stylesheets/img/ship/PlayerRed_Frame_55_right.png';
        // SHIP.src = '../stylesheets/img/ship/blue/PlayerBlue_Frame_right_55.png';

    }else if ( key === MOVE_DIR.up){
        e.preventDefault(); 
        KEY_PRESS.up = true;
        ship.thrust = true;

    }else if ( key === MOVE_DIR.down ){
        e.preventDefault(); 
        KEY_PRESS.down = true;

    }else if ( key === MOVE_DIR.space ){
        e.preventDefault(); 
        KEY_PRESS.space = true;
    }
}

window.addEventListener('keyup', onKeyUp);
function onKeyUp(e){
    let key = e.code;

    if(key === MOVE_DIR.left){  
        SHIP.src = './stylesheets/img/ship/PlayerRed_Frame_01_55.png'; 
        // SHIP.src = './stylesheets/img/ship/blue/PlayerBlue_Frame_55.png'; 
        KEY_PRESS.left = false;

    }else if( key === MOVE_DIR.right ){
        SHIP.src = './stylesheets/img/ship/PlayerRed_Frame_01_55.png';
        // SHIP.src = './stylesheets/img/ship/blue/PlayerBlue_Frame_55.png'; 
        KEY_PRESS.right = false;

    }else if ( key === MOVE_DIR.up){
        KEY_PRESS.up = false;
        ship.thrust = false;

    }else if ( key === MOVE_DIR.down ){
        KEY_PRESS.down = false;

    }else if ( key === MOVE_DIR.space ){
        KEY_PRESS.space = false;
    }
}


function Ship(){
    this.thrust = false;

    this.speed = 4; //speed of ship movement

    this.ammoSupply = new AmmoSupply(); 

    // this.ammoSupply.initialize();   //creates ammo collection (objPool)
    //!TEST
    this.ammoSupply.initialize('blaster');   //creates ammo collection (objPool)
    
    //!TEST


    this.accelAnim = function() {
        if (ship.thrust === true) {
            this.context.drawImage(ACCEL, this.x + 15, this.y + 39, 35, 40);
            this.context.drawImage(ACCEL, this.x + 4, this.y + 39, 35, 40);
        } else {
            this.thrust = false;
        }
    }

    let fireCoolDown = 25; 
    let coolDownCounter = 0; //shoot once every 25 frame

    this.draw = function(){
        this.context.drawImage(SHIP, this.x, this.y);
    }

    this.move = function(){
        coolDownCounter += 1;
        // console.log(coolDownCounter);
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
                this.accelAnim();
            }
            if (KEY_PRESS.down) {
                this.y >= this.canvasHeight-SHIP.height ? this.y = this.canvasHeight - SHIP.height : this.y += this.speed
            }

            this.draw();
            // this.accelAnim();
        }    
		if (KEY_PRESS.space && coolDownCounter >= fireCoolDown) {
            this.fire();
            BLASTERSOUND.load();
            BLASTERSOUND.play();
            coolDownCounter = 0;
        }
    }

	this.fire = function() {
        // this.ammoSupply.shoot(this.x+23, this.y);
        this.ammoSupply.shootTwo(this.x+8, this.y, this.x+35 , this.y);
        // this.ammoSupply.shootThree(this.x, this.y, this.x+44, this.y, this.x+23, this.y);
	};
}
Ship.prototype = new Drawable();



                                    //! ENEMY SHIP

function Enemy(monster){
    let randomFire = .01;
    let chanceOfFire = 0
    this.monster = monster;

    this.fired = false;

    this.create = function(x, y){ 
        this.x = x;  //enemy ship start pos (init 650)
        this.y = y;  //enemy ship start pos (init -10)
        this.speed = 5; 
		this.speedX = 3; // speed they descend hori/diag
		this.speedY = 1; // speed they descend vert/diag
        this.fired = true;
        this.leftBorder = this.x - 750; // how far left they can go
		this.rightBorder = this.x - 330;
        this.bottomBorder = this.y + 300; // how far down they can go
        this.topBorder = this.y + 200; // how far down they can go
    }

    //enemy ships movement
    this.draw = function(){
        this.context.clearRect(this.x, this.y, this.itemWidth, this.itemHeight);
        this.x -= this.speedX;
        this.y += this.speedY;
        if (this.x === this.leftBorder) {
            this.speedX = -3;
            this.speedY = -1;
        }
        if( this.x === this.rightBorder){
            this.speedX = 1;
        }
        if( this.y === this.topBorder){
            this.speedY = 1;
        }
        if( this.y === this.bottomBorder){
            this.speedY = -1;
        }

        if(this.monster === 'enemyShip'){
            this.context.drawImage(ENEMY1, this.x, this.y);
        } else if (this.monster === 'enemyBoss'){
            this.context.drawImage(SPIDERBOSS, this.x, this.y);
        }
        

        // Enemy has a chance to shoot every movement
        // if(this.monster === 'enemyBoss'){
        //     if (chanceOfFire < randomFire + 90) {
        //         this.fire();
        //     }
        // }else{
            // if (chanceOfFire < randomFire) {
            //     this.fire();
            // }
        // }
        chanceOfFire = Math.floor(Math.random() * 101);
        if (chanceOfFire/100 < randomFire){
            this.fire();
        }
    };    
    
	this.fire = function() {
        game.enemyAmmo.shoot(this.x+30, this.y+40);
        // game.enemyAmmo.shoot(this.x, this.y);
    }
    
    //resets the blaster object so we can reuse it in our pool
    //possibly not needed here since its covered in Blaster Function
    // this.resetBulletObj = function(){
	// 	this.x = 0;
	// 	this.y = 0;
	// 	this.speed = 0;
	// 	this.speedX = 0;
	// 	this.speedY = 0;
	// 	this.fired = false;
    // }
}
Enemy.prototype = new Drawable();
               


                                    //! GAME

function Game(){
    this.initialize = function(){
        this.bgCanvas = document.getElementById('background');
        this.bgContext = this.bgCanvas.getContext('2d');
        // console.log(this.bgCanvas.width) 
        // console.log(this.bgCanvas.height) 
        
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width; //width="600"
            Background.prototype.canvasHeight = this.bgCanvas.height; //height="360"
            

            this.background = new Background();
            this.background.initialize(0, 0); //initializes bg - centered


        this.shipCanvas = document.getElementById('ship');
        this.shipContext = this.shipCanvas.getContext('2d');
        
            Ship.prototype.context = this.shipContext;
            Ship.prototype.canvasWidth = this.shipCanvas.width; //width="800"
            Ship.prototype.canvasHeight = this.shipCanvas.height; //height="650"

            this.ship = new Ship();
            
            let shipStartPosX = (this.shipCanvas.width / 2) - (SHIP.width / 2);
            let shipStartPosY = (this.shipCanvas.height / 2) + 150;

            this.ship.initialize(shipStartPosX, shipStartPosY, SHIP.width, SHIP.height+20);

        this.mainCanvas = document.getElementById('main');
        this.mainContext = this.mainCanvas.getContext('2d');    

            Blaster.prototype.context = this.mainContext;
            Blaster.prototype.canvasWidth = this.mainCanvas.width;  //width="800"
            Blaster.prototype.canvasHeight = this.mainCanvas.height;//height="650"
            // console.log(this.mainContext) 

        //!TEST
            Enemy.prototype.context = this.mainContext;
            Enemy.prototype.canvasWidth = this.mainCanvas.width;
            Enemy.prototype.canvasHeight = this.mainCanvas.height;    
            this.enemyShip = new AmmoSupply();
            this.enemyShip.initialize('enemyShip');

            this.spiderBoss = new AmmoSupply();
            this.spiderBoss.initialize('enemyBoss');


            //levels
            this.formation1();
            // this.boss1();

            this.enemyAmmo = new AmmoSupply();
            this.enemyAmmo.initialize('zapper');

        //!TEST
            MUSIC.load();
            MUSIC.play();

    }

    // LEVELS IN EACH ROUND
    this.formation1 = function(){
        let x = 650;
        let y = -10;
        let spacer = y * 7; //spacing between units
			for (let i = 1; i <= 18; i++) {
				this.enemyShip.shoot(x, y);
				x += ENEMY1.width + 25;
				if (i % 6 === 0) {
					x -= 400;
					y += spacer
				}
            }
    }

    this.boss1 = function(){
        let x2 = 0;
        let y2 = 0;
        this.spiderBoss.shoot(x2, y2);

    }

    this.start = function(){
        animate();
    }
}


function animate(){
    window.requestAnimationFrame(animate); //lets the browser know to animate something
    game.background.draw();
    game.ship.accelAnim();
    game.ship.draw();
    game.ship.move();
    game.ship.ammoSupply.animateFiring();

    game.enemyShip.animateFiring();
    game.spiderBoss.animateFiring();
    game.enemyAmmo.animateFiring();
    

}


// Initialize Game
let game = new Game();

function initialize(){
    game.initialize();
    game.start();
}

