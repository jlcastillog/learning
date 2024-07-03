import "./App.css";
import { useMovies } from "./hooks/movies";
import { useSearch } from "./hooks/search";
import { Movies } from "./components/Movies";

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSummit = (event) => {
    event.preventDefault();
    console.log({ search });
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
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
