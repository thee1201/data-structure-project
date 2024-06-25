let stack = [];
let nextValue = 1;
const canvas = document.getElementById("stack-draw");
const ctx = canvas.getContext("2d");

function pushStack() {
  stack.push(nextValue++);
  updateStack();
}

function popStack() {
  if (stack.length > 0) {
    stack.pop();
    nextValue--;
    updateStack();
  }
}

function initStack() {
  stack = [];
  nextValue = 1;
  updateStack();
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function updateStack() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  const blockHeight = 30;
  const radius = 10;
  const blockWidth = 100;

    stack.forEach((value,index) => {
        const x = (canvas.width - blockWidth) / 2;
        const y = canvas.height - (index + 1) * blockHeight;
        const width = blockWidth;
        const height = blockHeight - 2;

        ctx.fillStyle = '#C8CBCF';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        drawRoundedRect(ctx,x,y,width,height,radius);

        ctx.fillStyle = '#414345';
        ctx.font = '16px';
        ctx.textAlign = 'center';
        ctx.fillText(value,x+width/2,y+height/2+6);
    });
}

initStack();