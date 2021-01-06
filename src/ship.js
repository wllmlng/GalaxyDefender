
const SHIP = new Image();
    SHIP.src = '../stylesheets/img/ship/player_green.png';
// SHIP.className = 'ship';
    SHIP.style.height = 'auto';
    SHIP.style.width = '40px';



window.addEventListener('keydown', onKeyPress);
window.addEventListener('keyup', onKeyUp);

const MOVE_DIR = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',
    space: " "
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

        if(KEY_STATUS.left || KEY_STATUS.RIGHT ||
            KEY_STATUS.down || KEY_STATUS.UP){
                // this.context.clearRect(this.x, this.y, this.itemWidth, this.itemHeight); 
                //removes ship at previous location if it moved
        

            if (KEY_STATUS.left) {
                this.x -= this.speed
                if (this.x <= 0) // Keep player within the screen
                    this.x = 0;
            } else if (KEY_STATUS.right) {
                this.x += this.speed
                if (this.x >= this.canvasWidth - this.width)
                    this.x = this.canvasWidth - this.width;
            } else if (KEY_STATUS.up) {
                this.y -= this.speed
                if (this.y <= this.canvasHeight/4*3)
                    this.y = this.canvasHeight/4*3;
            } else if (KEY_STATUS.down) {
                this.y += this.speed
                if (this.y >= this.canvasHeight - this.height)
                    this.y = this.canvasHeight - this.height;
            }

            this.draw();
            console.log('drawn ship')
        }    
		if (KEY_STATUS.space && counter >= fireRate) {
			this.fire();
			counter = 0;
		}
    }
	this.fire = function() {
		this.bulletPool.getTwo(this.x+6, this.y, 3, this.x+33, this.y, 3);
	};
}

Ship.prototype = new Drawable();
