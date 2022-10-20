import { canvas, ctx, width, height, circle } from './mainTwo.js'

let Ball = function() {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 5;
    this.size = 10;
    this.xSpeed = 1;
    this.ySpeed = 0;
};
Ball.prototype.move = function() {
    this.x += this.xSpeed * this.speed;
    this.y += this.ySpeed * this.speed;

    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    } else if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

function color() {
    let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "Violet"];
    return colors[Math.floor(Math.random() * colors.length)];

}
Ball.prototype.draw = function() {
    circle(this.x, this.y, this.size, true);
    ctx.fillStyle = color();
};
Ball.prototype.doAction = function(action) {
    if (action === "вверх") {
        this.xSpeed = 0;
        this.ySpeed = -1;
    } else if (action === "вниз") {
        this.xSpeed = 0;
        this.ySpeed = 1;
    } else if (action === "влево") {
        this.xSpeed = -1;
        this.ySpeed = 0;
    } else if (action === "вправо") {
        this.xSpeed = 1;
        this.ySpeed = 0;
    } else if (action === "стоп") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (action === "быстрее") {
        this.speed++;
    } else if (action === "медленнее") {
        if (this.speed > 0) {
            this.speed--;
        }
    } else if (action === "меньше") {
        if (this.size > 0) {
            this.size--;
        }
    } else if (action === "больше") {
        this.size++;
    }
};
let ball = new Ball();
let keyActions = {
    32: "стоп",
    37: "влево",
    38: "вверх",
    39: "вправо",
    40: "вниз",
    88: "быстрее",
    90: "медленнее",
    67: "меньше",
    86: "больше"
};
let speeds = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9
};
setInterval(function() {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);
let key = document.querySelector("body");
key.addEventListener("keydown", () => {
    var action = keyActions[event.keyCode];
    ball.doAction(action);
});