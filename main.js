// Select all buttons with the class 'rgb-button'
const buttons = document.querySelectorAll('.rgb-button');

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the URL from the button's data attribute or inner text
    const url = button.dataset.url;

    // If a URL is defined, open it in a new tab
    if (url) {
      window.open(url, '_blank');
    }
  });
});