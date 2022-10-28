/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 5;
const enemiesArray = [];
// enemy1 = {
//     x: 10,
//     y: 50,
//     width: 200,
//     height: 200,
// }

class Enemy {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
    }
    update(){
        this.x+= this.speed;
        this.y+= this.speed;
    }
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
};

// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}



console.log(enemiesArray)
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();

    })
    requestAnimationFrame(animate);
}

animate();