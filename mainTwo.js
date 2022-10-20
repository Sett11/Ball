let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}
export {
    canvas,
    ctx,
    width,
    height,
    circle
}