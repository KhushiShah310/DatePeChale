function respond(answer) {
    const responseText = document.getElementById('response');
  
    if (answer) {
      responseText.innerHTML = 'Yay! I\'m so happy! Let\'s plan something amazing!';
      responseText.style.color = '#32cd32';
    } else {
      responseText.innerHTML = 'Oh no! Maybe next time. Take care!';
      responseText.style.color = '#ff6347';
    }
  }
  
  // Function to move the "No" button to a random position
  function moveButton(button) {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
  
    const randomX = Math.random() * (containerWidth - button.offsetWidth);
    const randomY = Math.random() * (containerHeight - button.offsetHeight);
  
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }
  
