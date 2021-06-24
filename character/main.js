const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = document.body.clientWidth * 2;
canvas.height = document.body.clientHeight * 2;
ctx.scale(2, 2);

const tribe = createTribe();
const mini = new Mini(300, 650, 170, 12, tribe[0].imgElem);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mini.draw(ctx);

    requestAnimationFrame(draw);
}

draw();