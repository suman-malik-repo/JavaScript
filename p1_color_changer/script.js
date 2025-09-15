const buttons = document.querySelectorAll(".button");
console.log(buttons)
buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.id);

        if(event.target.id === 'grey'){
          document.body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'white'){
          document.body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'blue'){
          document.body.style.backgroundColor = event.target.id;
        }

        if(event.target.id === 'yellow'){
          document.body.style.backgroundColor = event.target.id;
        }

    })
})