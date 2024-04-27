//TMDb

const API_KEY = 'api_key=d47a71e6bd7db6070f8a4a2b9b17aaa5';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data);
    })
}

function showMovies(data) {
    main.innerHTML = '';

    // Vérifie si data.results est un tableau
    if (Array.isArray(data.results)) {
        data.results.forEach(movie => {
            const {title, poster_path, vote_average, overview} = movie;
            const formattedVoteAverage = parseFloat(vote_average).toFixed(1); // Converti vote_average en une chaîne avec un seul chiffre après la virgule
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${formattedVoteAverage}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
            `

            main.appendChild(movieEl);
        });
    } else {
        console.error('La réponse de l\'API ne contient pas de tableau "results".');
    }
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    } else if (vote >=5){
        return "orange"
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }
})