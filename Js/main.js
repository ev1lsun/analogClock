const canv = document.getElementById('clock');
const ctx = canv.getContext('2d');
ctx.canvas.width = 300;
ctx.canvas.height = 300;

ctx.translate(150, 150);

setInterval(() => {
    const time = new Date();
    const sec = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    ctx.clearRect(-150, -150, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#29292b';
    ctx.fillRect(-150, -150, ctx.canvas.width, ctx.canvas.height);

    ctx.strokeStyle = '#ffd007';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
//seconds
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.rotate(sec * Math.PI / 30);
    ctx.lineTo(0, -85);
    ctx.stroke();
    ctx.rotate(-sec * Math.PI / 30);
//minutes
    ctx.lineWidth = 3;
    ctx.moveTo(0, 0);
    ctx.rotate(minutes * Math.PI / 30);
    ctx.lineTo(0, -80);
    ctx.stroke();
    ctx.rotate(-minutes * Math.PI / 30);
//hours
    ctx.lineWidth = 3;
    ctx.moveTo(0, 0);
    ctx.rotate(hours * Math.PI / 19);
    ctx.lineTo(0, -55);
    ctx.stroke();
    ctx.rotate(-hours * Math.PI / 19);
}, 1000);