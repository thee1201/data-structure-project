let stack = [];
let nextValue = 1;

function pushStack() {
    if (stack.length < 4) {
        stack.push(nextValue++);
        updateStack();
    } else {
        alert('스택이 가득 찼습니다.');
    }
}

function popStack() {
    if (stack.length > 0) {
        stack.pop();
        nextValue--;
        updateStack();
    } else {
        alert('스택이 비었습니다.')
    }
}

function initStack() {
    stack = [];
    nextValue = 1;
    updateStack();
}

function updateStack() {
    const stackDraw = document.getElementById('stack-draw');
    stackDraw.innerHTML = ''; // 기존의 div 내용을 지웁니다.

    stack.slice().reverse().forEach(value => {
        const block = document.createElement('div');
        block.className = 'block';
        const p = document.createElement('p');
        p.textContent = value;
        block.appendChild(p);
        stackDraw.appendChild(block);
    });
}

// 초기화 함수 호출
initStack();
