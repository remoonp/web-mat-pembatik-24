x=0;

function quiz(event) {
    // Get the element which triggered the event
    var choices = event.target.parentElement.querySelectorAll('.choice');
    choices.forEach(function(choice){
        choice.style.backgroundColor='#d9edff';
        });
    let button = event.currentTarget;
    console.log(button.dataset.latex);
    // Check if the element's inner HTML matches expected answer
    if(button.dataset.value == '1'){
        button.style.backgroundColor = 'Yellow';
        x=x+10;
    }
    else {
        button.style.backgroundColor = 'Yellow';
    }
}

function result(event) {
let button = event.currentTarget;
console.log(button);
button.parentElement.querySelector('.feedback').innerHTML = 'Nilai Anda adalah '+ x +'/100' ;
}