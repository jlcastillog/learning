import "./App.css";
import { useCallback } from "react";
import { useMovies } from "./hooks/movies";
import { useSearch } from "./hooks/search";
import { Movies } from "./components/Movies";
import debounce from "just-debounce-it";

function App() {
  const { search, updateSearch, errorSearch } = useSearch();
  const { movies, getMovies, loading, errorLoadMovies } = useMovies({ search });

  const debounceGetMovies = useCallback(
    debounce((search) => {
      console.log('debounce', search)
      getMovies({ search });
    }, 300),
    []
  );

  const handleSummit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debounceGetMovies(newSearch);
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
