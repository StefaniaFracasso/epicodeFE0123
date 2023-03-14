let inputReference = document.getElementById('inputField')
let saveButton = document.getElementById('save')
let deleteButton = document.getElementById('delete')
let title = document.getElementById('title')

saveButton.addEventListener('click', function () {
    const text = inputReference.value
    localStorage.setItem('Name', text)
    const savedText = localStorage.getItem('Name')
    if(savedText) {
        let newP = document.createElement('p')
        newP.innerText = savedText
        title.appendChild(newP)
    }
})

deleteButton.addEventListener('click', function () {
    inputReference.value = '';
    console.log('Il contenuto è stato cancellato')
})


let timer = document.getElementById('timer')
let counter = 0;

if(sessionStorage.getItem('timer')>0){
    counter = sessionStorage.getItem('timer')
}

window.onload = function() {
    setInterval(function(){
        timer.innerText = counter++
        sessionStorage.setItem('timer', counter)
    },1000)
} 
