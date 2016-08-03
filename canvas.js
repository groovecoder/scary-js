var md5 = require('md5');

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

// text with cases, punctuation, and symbols
let txt = "BrowserLeaks,com <canvas> 1.0";
ctx.textBaseline = 'top';

ctx.font = '14px "Arial"';
ctx.textBaseline = 'alphabetic';
ctx.fillStyle = '#f60';
ctx.fillRect(125, 1, 62, 20);

ctx.fillStyle = '#069';
ctx.fillText(txt, 2, 15);
ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
ctx.fillText(txt, 4, 17);

let fingerprint = md5(canvas.toDataURL());
