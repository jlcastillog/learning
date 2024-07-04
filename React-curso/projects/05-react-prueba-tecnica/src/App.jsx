import "./App.css";
import { useMovies } from "./hooks/movies";
import { useSearch } from "./hooks/search";
import { Movies } from "./components/Movies";
import { useRef } from "react";

function App() {
  const { search, updateSearch, errorSearch } = useSearch();
  const { movies, getMovies, loading, errorLoadMovies } = useMovies({ search });
  
  const handleSummit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSummit}>
          <input
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Matrix, Lord of the Rings, Avengers, ..."
          />
          <button type="Submit">Buscar</button>
        </form>
        {errorSearch && <p style={{ color: "red" }}>{errorSearch}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : null}
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
