let cards = document.querySelectorAll('.card');

for (i=0; i < cards.length; i++){
    cards[i].addEventListener('mouseenter', showInfo);
    cards[i].addEventListener('mouseleave', hideInfo);
}

function showInfo(event){
    console.log(event.target)
    event.target.children[1].classList.remove("d-none");
} 

function hideInfo(event){
    event.target.children[1].classList.add("d-none");
} 


