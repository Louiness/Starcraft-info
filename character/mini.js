class Mini {
    constructor(offsetX, offsetY, radius, speed, image){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.radius = radius;
        this.speed = speed;
        this.rotateSpeed = speed;
        this.degree = 0;
        this.image = image;
        this.acceleration = 0.95;
        this.clientWidth = document.body.clientWidth;
        this.clientHeight = document.body.clientHeight;
    }
    toRadian(deg) {
        return deg * Math.PI / 180;
    }
    rotatingCircle(ctx) {
        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 20;
        ctx.translate(this.offsetX, this.offsetY);
        ctx.rotate(this.toRadian(this.degree));
        ctx.arc(0, 0, this.radius, 0, this.toRadian(105));
        ctx.stroke();
        ctx.beginPath();
        ctx.rotate(this.toRadian(180));
        ctx.arc(0, 0, this.radius, 0, this.toRadian(105));
        ctx.stroke();
        ctx.restore();
        this.setSpeed();
    }
    setSpeed() {
        this.degree = this.degree + this.rotateSpeed;
        this.rotateSpeed *= this.acceleration;
        
        if(this.rotateSpeed < 0.1) this.rotateSpeed = this.speed;
        if(this.degree > 360) this.degree = 0;
    }
    draw(ctx) {
        this.createFullBg(ctx);
        this.createBgCircle(ctx);
        this.rotatingCircle(ctx);
        this.createImgCircle(ctx);
    }
    createImgCircle(ctx) {
        ctx.beginPath();
        ctx.save();
        ctx.arc(this.offsetX, this.offsetY, this.radius - 20, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(this.image, 0, this.clientHeight / 2, 700, 400);
        ctx.restore();
    }
    createBgCircle(ctx) {
        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 0.5;
        ctx.arc(this.offsetX, this.offsetY, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    createFullBg(ctx) {
        ctx.beginPath();
        ctx.drawImage(this.image, 0, 0, this.clientWidth, this.clientHeight);
    }
}