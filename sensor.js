class Sensor {
    constructor(car) {
        this.car = car;
        this.rayCount = 3;
        this.raySpread = Math.PI / 4;
        this.rayLength = 100;
        this.rays = [];
        console.log("sensor");
    }
    update() {
        this.castRays();
    }
    castRays() {
        this.rays = [];
        for (let i = 0; i < this.rayCount; i++) {
            const rayAngle = lerp(this.raySpread / 2, -this.raySpread / 2,
                i / (this.rayCount - 1)) + this.car.angle;
            console.log(rayAngle);
            const start = {
                x: this.car.x,
                y: this.car.y
            };
            const end = {
                x: this.car.x - Math.sin(rayAngle) * this.rayLength,
                y: this.car.y - Math.cos(rayAngle) * this.rayLength
            };
            this.rays.push([start, end]);

        }
        console.log(this.rays);
    }
    draw(ctx) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = "yellow";
        this.rays.forEach(rays => {
            ctx.beginPath();
            ctx.moveTo(rays[0].x, rays[0].y);
            ctx.lineTo(rays[1].x, rays[1].y);
            ctx.stroke();
        })
    }
}