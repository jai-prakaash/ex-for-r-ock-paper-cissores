
function shake(){
    
    const nom3= Math.random();
console.log(nom3); 
let result = "";


    if (nom3 < 1/3) {document.querySelector('.result').innerHTML = 'Rock';;
        result= 'Rock';
        console.log('Rock');
        
    }   else if (nom3 > 1/3 && nom3 < 2/3 ){
   
    document.querySelector('.result').innerHTML = 'Paper';
    result = 'Paper';;

    console.log('Paper');
    
        } else { document.querySelector('.result').innerHTML = 'Scissors';
            result = 'Scissors';
            console.log('Scissors');        
}

console.log(result);

 
 if (result == 'Rock') { document.querySelector('.who').innerHTML = `you pick mover computer choose ${result}`;

 } else if (result == 'Paper') {document.querySelector('.who').innerHTML = `you pick mover computer choose ${result}`;}
 
 else {document.querySelector('.who').innerHTML = `you pick mover computer choose ${result}`; }




} ;








