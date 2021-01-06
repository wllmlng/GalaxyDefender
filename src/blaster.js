//? Object pool data structure to recycle things that may be used again (like firing a blaster)
//? https://gamedevelopment.tutsplus.com/tutorials/object-pools-help-you-reduce-lag-in-resource-intensive-games--gamedev-651
//!didnt implement at the moment

// const Drawable = require("./game")


const BLASTER = new Image();
    BLASTER.src = '../stylesheets/img/blaster/laserBlue01.png';

   
function Blaster(){

    this.fire = false;

    this.blaster = function(x, y){
        this.x = x;
        this.y = y;
        this.speed = 2;
        this.fire = true;
    }

    this.draw = function(){
        this.context.clearRect(this.x, this.y, this.itemWidth, this.itemHeight); 
        //erases the pixels in a given rectangular space
        this.y -= this.speed;
        this.context.drawImage(BLASTER, this.x, this.y)
    }

    this.clear = function(){
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.alive = false;
    }


}
Blaster.prototype = new Drawable();