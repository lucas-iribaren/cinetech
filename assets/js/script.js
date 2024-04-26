const apiKey = 'd47a71e6bd7db6070f8a4a2b9b17aaa5';
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=&include_adult=false&language=fr-FR&page=1`;

const fetchMovies = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const movies = data.results; // Récupère la liste des films depuis la réponse de l'API
    const moviesSection = document.querySelector('.movies'); // Sélectionne la section des films dans le HTML
    
    // Boucle à travers chaque film
    movies.forEach(movie => {
      // Crée un élément de paragraphe pour afficher le titre du film
      const movieTitle = document.createElement('p');
      movieTitle.textContent = movie.title; // Récupère le titre du film depuis les données de l'API
      
      // Ajoute le titre à la section des films
      moviesSection.appendChild(movieTitle);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchMovies();
