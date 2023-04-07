let ville = "Madrid";          // ville par défaut choisie pour le démarrage de la page
recevoirTemperature(ville);    // quand la page s'affiche la 1ére fois, la température  de la ville par défaut s'affichera

// fonction pour récupérer une ville choisie par l'utilisateur au clic puis à la saisie dans une boîte de dialogue
let changerDeVille   = document.querySelector('#changer'); 
changerDeVille.addEventListener('click', () => {            
    ville = prompt("Entrez le nom d'une autre ville :");
    recevoirTemperature(ville);
});

 // fonction contenant la requête AJAX et permettant de récupérer du JSON
function recevoirTemperature(ville){             
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=9ba95770851eb9957aa8dee4f436ba81&units=metric';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        // le chiffre 200 est un code erreur signifiant que la requete a bien fonctionnée
        let reponse = requete.response; // on stocke la réponse
        console.log(reponse);
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#ville").textContent = ville;
      } else {
        alert("Un problème est survenu, merci de revenir plus tard.");
      }
    }
  }

}

recevoirTemperature(ville);



