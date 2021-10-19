
// LOCAL 

var down = document.getElementById('localValor'); 
        
var arr = ["Cinema", "Shopping", 
        "Piquenique em um Parque", "Barzinho"];
  
function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function localFunc() {
    down.innerHTML = arr[Math.floor(random(1, 5))-1];
} 
localFunc()


// ROUPAS 
var down = document.getElementById('roupasValor'); 
        
var arr = ["Havaiano", "Elegante", 
        "Jovenzinho Indie", "E-girl"];
  
function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function roupasFunc() {
    down.innerHTML = arr[Math.floor(random(1, 5))-1];
} 
roupasFunc()

// COMIDAS

var down = document.getElementById('comidasValor'); 
        
var arr = ["Mc Donalds ou Burguer King", "Pizza", 
        "Lanche Podrão", "Sorvete"];
  
function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function comidasFunc() {
    down.innerHTML = arr[Math.floor(random(1, 5))-1];
} 
comidasFunc()

// MUSICA

var down = document.getElementById('musicaValor'); 
        
var arr = ["Funk", "Pagode", 
        "Rock Indie", "Pop 2000"];
  
function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function comidasFunc() {
    down.innerHTML = arr[Math.floor(random(1, 5))-1];
} 
comidasFunc()

// VOLTAR NAME 
var storedValue = localStorage.getItem("server"); 
var storedValue2 = localStorage.getItem("server2"); 


function returnNome() {
    document.getElementById('nomeCadastrado').innerHTML = storedValue;
    document.getElementById('nomeCadastrado2').innerHTML = storedValue2;
}
returnNome() 

