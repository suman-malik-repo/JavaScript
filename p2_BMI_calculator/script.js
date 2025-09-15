const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    console.log(height);

    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerText = `${bmi}`
        if(bmi < 18.6){
            results.innerText = `your weight is ${bmi} and it is Under Weight`;
        }
        else if(18.6 <= bmi <= 24.9){
             results.innerText = `your weight is ${bmi} and it is in Normal Range`;
        }
        else {
            results.innerText = `your weight is ${bmi} and it is Over Weight`;
        }
    }
    
})