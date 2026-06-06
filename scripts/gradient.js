const { createCanvas } = require('canvas');
const fs = require('fs');

const WIDTH = 1080;
const HEIGHT = 1920;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

const cx = WIDTH / 2;
const cy = HEIGHT / 2;
const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.hypot(cx, cy));
grad.addColorStop(0, '#ff6b6b');
grad.addColorStop(1, '#1a1a2e');

ctx.fillStyle = grad;
ctx.fillRect(0, 0, WIDTH, HEIGHT);

fs.writeFileSync('gradient.png', canvas.toBuffer('image/png'));
console.log('Done: gradient.png');
