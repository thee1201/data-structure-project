let stack = [];
let nextValue = 1;
const svg = document.getElementById('stack-draw');

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

function updateStack() {
    svg.innerHTML = '';
    const blockHeight = 30;
    stack.forEach((value, index) => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        
        rect.setAttribute('x', 50);
        rect.setAttribute('y', 350 - index * blockHeight);
        rect.setAttribute('width', 100);
        rect.setAttribute('height', blockHeight - 2);
        rect.setAttribute('fill', '#4CAF50');
        
        text.setAttribute('x', 100);
        text.setAttribute('y', 350 - index * blockHeight + 20);
        text.setAttribute('fill', 'white');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = value;

        svg.appendChild(rect);
        svg.appendChild(text);
    });
}