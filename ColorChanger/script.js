const btn = document.querySelectorAll('.button')
const bdy = document.querySelector("body")

btn.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            bdy.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            bdy.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            bdy.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            bdy.style.backgroundColor = e.target.id;
        }
        
    })
});