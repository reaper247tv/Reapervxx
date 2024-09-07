document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    const square = document.createElement('img');
    square.src = 'path/to/your/white-square.png'; // Replace with the actual path to your white square image
    square.style.position = 'absolute';
    square.style.bottom = '0';
    square.style.width = '100px';
    square.style.height = '100px';
    document.body.appendChild(square);
  }
});
