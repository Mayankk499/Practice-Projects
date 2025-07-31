const btn = document.querySelectorAll('.button')
const bdy = document.querySelector("body")

btn.forEach(function(button){
    button.addEventListener('click', function(e){

        // IF Statement
        
        // if(e.target.id === 'grey'){
        //     bdy.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'red'){
        //     bdy.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'orange'){
        //     bdy.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === 'blue'){
        //     bdy.style.backgroundColor = e.target.id;
        // }

        // SWITCH Statement

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
        
            default:
                break;
        
    })
});
