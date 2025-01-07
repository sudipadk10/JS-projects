const buttons = document.querySelectorAll('.button');
console.log(buttons)
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    // direct assigning the id we get from the click .
    body.style.backgroundColor = e.target.id
    
  });
});
