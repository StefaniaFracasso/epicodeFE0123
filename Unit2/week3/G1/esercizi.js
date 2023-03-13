//esercizio 1
class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }
     isOlderThen(user){
        if (this.age > user.age) {
            console.log(this.firstName + ' è più vecchio di ' + user.firstName)
        }else if(this.age == user.age){
            console.log(this.firstName + ' e ' + user.firstName + ' hanno la stessa età') 
        }else {
            console.log(this.firstName + ' è più giovane di ' + user.firstName)
        }

     } 
}

let user1 = new User ('Mario', 'Rossi', 53, 'Roma' )
let user2 = new User ('Luca', 'Bianchi', 37, 'Milano' )

user1.isOlderThen(user2)

//esercizio 2

let petName = document.getElementById('pet_name-field')
let ownerName = document.getElementById('owner_name-field')
let petSpecies = document.getElementById('pet_species-field')
let petBreed = document.getElementById('pet_breed-field')
let addData = document.getElementById('add')
let datalist = document.getElementById('list')

let pets = []

class Pet {
    constructor(petName, ownerName, species, breed){
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
    isOwnerTheSame(pet){
        if (this.ownerName == pet.ownerName) {
            return true
        }
    }
}

const renderList = () => {
    datalist.innerHTML = '';
    pets.forEach(pet => {
        const newLi = document.createElement('li')
        newLi.innerText = 'Nome del proprietario: ' + pet.ownerName + ', ' + 'Nome del pet: ' + pet.petName + ', ' + 'Specie del pet: ' + pet.species + ', ' + 'Razza del pet: ' + pet.breed
        datalist.appendChild(newLi)
    })
}

addData.addEventListener('click', () => {
    let newPet = new Pet (petName.value, ownerName.value, petSpecies.value, petBreed.value)
    pets.push(newPet)
    petName.value = '';
    ownerName.value = '';
    petSpecies.value = '';
    petBreed.value = '';
    renderList();
})

