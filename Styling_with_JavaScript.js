function changeColor() {
  let box = document.getElementById('box');
  box.style.backgroundColor = box.style.backgroundColor === 'red' ? 'blue' : 'red';
}

document.getElementById('hoverBox').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'yellow';
});

document.getElementById('hoverBox').addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});

document.getElementById('styleBtn').addEventListener('click', function() {
  let hoverBox = document.getElementById('hoverBox');
  hoverBox.style.border = '2px solid black';
  hoverBox.style.padding = '10px';
});
