let stack = [];
let nextValue = 1;

const stackElement = document.getElementById('stack-draw');

// 스택 시각화 함수
function drawStack() {
    stackElement.innerHTML = '';

    for (let i = stack.length - 1; i >= 0; i--) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.textContent = stack[i];
        stackElement.appendChild(block);
    }
}

// Push 버튼 클릭 시 호출될 함수
function pushStack() {
    stack.push(nextValue);
    nextValue++;
    drawStack();
}

// Pop 버튼 클릭 시 호출될 함수
function popStack() {
    if (stack.length > 0) {
        stack.pop();
        drawStack();
    } else {
        alert('Stack is empty!');
    }
}

// Init 버튼 클릭 시 호출될 함수
function initStack() {
    stack = [];
    nextValue = 1; // 다음 값 초기화
    drawStack();
}

// 초기화면 그리기
drawStack();