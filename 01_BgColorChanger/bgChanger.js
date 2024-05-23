// const button = document.querySelectorAll('.button');
// const body = document.querySelector('body');
// const reset = document.querySelector('.reset')

// console.log(button);
// button[0].onclick = function (e) {
//     body.style.backgroundColor = "blue";
// }
// button[1].onclick = function (e) {
//     body.style.backgroundColor = "red";
// }
// button[2].onclick = function (e) {
//     body.style.backgroundColor = "yellow";
// }
// button[3].onclick = function (e) {
//     body.style.backgroundColor = "green";
// }

// reset.onclick = function (e) {
//     body.style.backgroundColor = "white";
// }


//Second Method Using "forEach"
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
const reset = document.querySelector('.reset')

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e.target);
        if(e.target.id==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='green'){
            body.style.backgroundColor = e.target.id;
        }
    })
    reset.addEventListener('click', function(e){
        if(e.target.id==='reset') {
            body.style.backgroundColor = "white";
        }
    })
})