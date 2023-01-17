let titre = document.getElementsByTagName('h1')[0];
console.log(titre);

function blue(){
    titre.style.color = "blue";
}

titre.addEventListener('click',()=>{
    blue();
})
