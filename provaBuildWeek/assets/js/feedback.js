const ratingBar = document.getElementById('ratingBar');
const stelle = ratingBar.querySelectorAll('input');

for (const stella of stelle) {
    stella.addEventListener('click', function(e){
        const stellaCliccata = e.target;
        const indiceStellaCliccata = Array.prototype.indexOf.call(stelle,stellaCliccata);
        
        for(i=0; i<=indiceStellaCliccata; i++){
            stelle[i].parentNode.classList.add('checked');
        }
        for(i=indiceStellaCliccata + 1; i < stelle.length; i++) {
            stelle[i].parentNode.classList.remove('checked');
        }
    });
}