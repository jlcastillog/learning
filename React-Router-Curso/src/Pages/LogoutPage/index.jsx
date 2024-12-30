import { useAuth } from "../../Components/Auth";

function LogoutPage() {
  const auth = useAuth();
  const logout = () => {
    auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>¿Seguro de que quiere salir?</label>
        <button type="submit">Salir</button>
      </form>
    </>
  );
  }
  
  export { LogoutPage };