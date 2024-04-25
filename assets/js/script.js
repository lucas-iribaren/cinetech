const axios = require('axios');

const apiKey = '8c4b867188ee47a1d4e40854b27391ec';
const url = 'https://api.themoviedb.org/3/movie/11?api_key=' + apiKey;

axios.get(url)
    .then(response => {
        // Vérification du statut de la réponse
        if (response.status === 200) {
            // Affichage des données du film dans la console
            console.log(response.data);
        } else {
            console.log('Erreur lors de la requête à l\'API.');
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête à l\'API:', error);
    });
