const canvas = document.getElementById("myCanvas");
canvas.width = 200;
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
road.draw(ctx);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);
car.draw(ctx);
var i = 0;


function animate() {
    //   road.draw(ctx);
    //  car.update();
    canvas.height = window.innerHeight;
    car.update();
    //     ctx.translate(0, -car.y + canvas.height * 0.7);
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}
animate();