const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

const item1 = document.querySelector('.item1');

item1.addEventListener('dragstart', dragstart);
item1.addEventListener('dragend', dragend);

const item2 = document.querySelector('.item2');

item2.addEventListener('dragstart', dragstart);
item2.addEventListener('dragend', dragend);

const placeholders = document.querySelectorAll('.placeholder');
const placeholders1 = document.querySelectorAll('.placeholder1');
const placeholders2 = document.querySelectorAll('.placeholder2');

function dragstart(event) {
    setTimeout(() => event.target.classList.add('hide'), 0)
    event.target.classList.add('hold');
};

function dragend(event) {
    event.target.classList.remove('hide', 'hold');
};

for( const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
};

for( const placeholder1 of placeholders1) {
    placeholder1.addEventListener('dragover', dragover);
    placeholder1.addEventListener('dragenter', dragenter);
    placeholder1.addEventListener('dragleave', dragleave);
    placeholder1.addEventListener('drop', drop1);
};

for( const placeholder2 of placeholders2) {
    placeholder2.addEventListener('dragover', dragover);
    placeholder2.addEventListener('dragenter', dragenter);
    placeholder2.addEventListener('dragleave', dragleave);
    placeholder2.addEventListener('drop', drop2);
};
function dragover(event) {
    event.preventDefault();
};

function dragenter(event) {
    event.target.classList.add('hovered');
};

function dragleave(event) {
    event.target.classList.remove('hovered');
};

function drop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
};

function drop1(event) {
    event.target.classList.remove('hovered');
    event.target.append(item1);
};

function drop2(event) {
    event.target.classList.remove('hovered');
    event.target.append(item2);
};