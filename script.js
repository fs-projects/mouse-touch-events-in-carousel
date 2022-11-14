const sliderContainer = document.querySelector('.container');
const slideElement = document.querySelectorAll('.product');
let isDragging = false;
let startPos = 0;
let currentIndex = 0;
let currentTranslate = 0;
let previousTranslate = 0;
let animationId = null;
Array.from(slideElement).forEach((el, index) => {
  const slideImage = el.querySelector('img');
  slideImage.addEventListener('dragstart', (e) => e.preventDefault());

  // el.addEventListener('dragstart', dragStart);
  // el.addEventListener('dragend', dragEnd);
  el.addEventListener('touchstart', touchStart(index));
  el.addEventListener('touchmove', touchMove);
  el.addEventListener('touchend', touchEnd);
  el.addEventListener('mouseup', mouseUp);
  el.addEventListener('mousedown', mouseDown);
  el.addEventListener('mousemove', mouseMove);
  el.addEventListener('mouseleave', mouseLeave);
});

function getCurrentPositionX(event) {
  return event.type.includes('mouse') ? event.pageY : event.touches[0].clientX;
}

// function dragStart() {
//   isDragging = true;
//   console.log('drag start');
// }

// function dragEnd() {
//   isDragging = false;
//   console.log('drag end');
// }

function touchStart(index) {
  return function (event) {
    console.log(`${event.type}`);
    isDragging = true;
    currentIndex = index;
    startPos = getCurrentPositionX(event);
    console.log('start position', startPos);
    animationId = requestAnimationFrame(animation);
  };
}

function animation() {
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
  if (isDragging) requestAnimationFrame(animation);
}

function touchMove(event) {
  if (isDragging) {
    console.log(`${event.type} move while dragging`);
    const currentPosition = getCurrentPositionX(event);
    currentTranslate = previousTranslate + currentPosition - startPos;
  }
}

function touchEnd() {
  console.log('touch end');
}

function mouseUp() {
  console.log('mouse up');
  isDragging = false;
}

function mouseDown() {
  isDragging = true;
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
