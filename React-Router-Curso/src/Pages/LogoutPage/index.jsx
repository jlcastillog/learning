import { useAuth } from "../../Components/Auth";
import "./styles.css";

function LogoutPage() {
  const auth = useAuth();
  const logout = () => {
    auth.logout();
  };
  return (
    <section className="logout-section">
      <h1>Logout</h1>
      <form onSubmit={logout} className="logout-form">
        <label>¿Seguro de que quiere salir?</label>
        <button type="submit">Salir</button>
      </form>
    </section>
  );
  }
  
  export { LogoutPage };