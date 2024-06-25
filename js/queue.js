let queue =[];
let nextValue = 1;

function enqueueQueue() {
    if (queue.length < 7) {
        queue.push(nextValue++);
        updateQueue();
    } else {
        alert('큐가 가득 찼습니다.');
    }
}

function dequeueQueue() {
    if(queue.length > 0) {
        queue.shift();
        updateQueue();
    } else {
        alert('큐가 비었습니다.')
    }
}

function initQueue() {
    queue = [];
    nextValue = 1;
    updateQueue();
}

function updateQueue() {
    const queueDraw = document.getElementById('queue-draw');
    queueDraw.innerHTML = '';

    queue.forEach(value => {
        const block = document.createElement('div');
        block.className = 'block';
        const p = document.createElement('p');
        p.textContent = value;
        block.appendChild(p);
        queueDraw.appendChild(block);
    });
}

initQueue();