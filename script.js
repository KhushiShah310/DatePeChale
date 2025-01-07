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
  