document.addEventListener('DOMContentLoaded', function() {
  const typedElements = document.querySelectorAll('.terminal-text');
  let delay = 0;

  typedElements.forEach((el, index) => {
    const text = el.getAttribute('data-text');
    el.textContent = '';
    
    setTimeout(() => {
      el.style.width = '0';
      el.style.animation = `typing ${text.length * 75}ms steps(${text.length}) forwards, blink 0.75s step-end infinite`;
      el.textContent = text;
    }, delay);

    delay += text.length * 75 + 300;
  });
});
