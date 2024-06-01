const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
      } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6){
            const msg=document.querySelector('#result-msg')
            msg.innerHTML=`Your BMI is ${bmi}, You are Underweight`
        }
        else if(18.6<bmi<24.9){
            const msg=document.querySelector('#result-msg')
            msg.innerHTML=`Your BMI is ${bmi}, You are Normal, Happy Eating:)`;
        }
        else{
            const msg=document.querySelector('#result-msg')
            msg.innerHTML=`Your BMI is ${bmi}, You are Overweight, Follow Your Diet`;
        }
      }

})

