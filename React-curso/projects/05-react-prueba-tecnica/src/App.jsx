import "./App.css";

function App() {
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
        Aquí iran los resultados
      </main>
    </div>
  );
}

export default App;
