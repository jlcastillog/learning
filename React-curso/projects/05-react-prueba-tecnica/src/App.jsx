import "./App.css";
import responseMovies from "./mocks/response-sample-with-results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input placeholder="Matrix, Lord of the Rings, Avengers, ..." />
          <button type="Submit">Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
          ? (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              }
            </ul>
          ) 
          : (
            <p>No se encontraron películas para esta busqueda</p>
          )
        }
      </main>
    </div>
  );
}

export default App;
