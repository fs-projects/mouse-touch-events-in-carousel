const slideElement = document.querySelectorAll('.product');
let isDragging = false;
Array.from(slideElement).forEach((el, index) => {
  el.addEventListener('dragstart', dragStart);
  el.addEventListener('dragend', dragEnd);
  el.addEventListener('touchstart', touchStart);
  el.addEventListener('touchmove', touchMove);
  el.addEventListener('touchend', touchEnd);
  el.addEventListener('mouseup', mouseUp);
  el.addEventListener('mousedown', mouseDown);
  el.addEventListener('mousemove', mouseMove);
  el.addEventListener('mouseleave', mouseLeave);
});

function dragStart() {
  isDragging = true;
  console.log('drag start');
}

function dragEnd() {
  isDragging = false;
  console.log('drag end');
}

function touchStart() {
  console.log('touch start');
}

function touchMove() {
  if (isDragging) {
    console.log('touch move while dragging');
  }
}

function touchEnd() {
  console.log('touch end');
}

function mouseUp() {
  console.log('mouse up');
}

function mouseDown() {
  console.log('mouse down');
}

function mouseMove() {
  if (isDragging) {
    console.log('mouse move while dragging');
  }
}

function mouseLeave() {
  console.log('mouse leave');
}
