class Particle extends AcGameObject {
    constructor(playground, x, y, radius, vx, vy, color, speed){
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.playground = playground;
        this.vx = vx * Math.random() * 1.5;
        this.vy = vy * Math.random() * 1.5;
        this.color = color;
        this.speed = speed;
        this.eps = 30;
        this.friction = 0.9;
        this.ctx = this.playground.game_map.ctx;
        //console.log(this.x, this.y, this.radius, this.speed);
        //console.log(this.radius, this.vx, this.speed);
        this.start();
    }

    start(){
    }

    update(){
        if (this.speed < this.eps) {
            this.destroy();
            return false;
        }
        
        this.x += this.vx * this.speed * this.timedelta / 1000;
        this.y += this.vy * this.speed * this.timedelta / 1000;
        this.speed *= this.friction;
        //console.log(this.x, this.y, this.speed);
        this.render();
    }

    render(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}
