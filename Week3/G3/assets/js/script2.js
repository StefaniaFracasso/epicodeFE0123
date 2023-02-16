var inputField = document.getElementById('text');
var bottoneAggiungi = document.getElementById('addButton');
var listaTasks = document.getElementById('tasks');
var bottoneAggiungi =

bottoneAggiungi.addEventListener('click', function(){
    if(inputField.value === '') {
        alert('Scrivi una cosa da fare!')
    }else {
        listaTasks.innerHTML += `<li>${inputField.value}<button type = "button" id = "cancellaTask" name = "cancellaTask"><i class="fas fa-trash-alt"></i></button></li>` 
        inputField.value = '';
    }
})