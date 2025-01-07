const form = document.querySelector('form')


form.addEventListener('submit',(e)=>{
  e.preventDefault();

  height = parseInt(document.querySelector('#height').value)
  weight = parseInt(document.querySelector('#weight').value)
  results = document.querySelector('#results')
  weightguide = document.querySelector('#weight-guide')

  if(height === '' || isNaN(height) || height < 0){
    results.innerHTML = `${height}!! <br> Please enter a valid height`
  }
  else if(weight === '' || isNaN(weight) || weight < 0){
    results.innerHTML = `${weight}!!<br> Please enter a valid weight`
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
      weightguide.innerHTML = `<span> underweight </span>`
    }
    else if(bmi>24.9){
      weightguide.innerHTML = `<span> overweight </span>`
    }
    else{
      weightguide.innerHTML = `<span> Normal weight </span>`
    }
  }

})