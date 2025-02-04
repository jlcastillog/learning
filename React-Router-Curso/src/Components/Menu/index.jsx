import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth";
import "./styles.css";

function Menu() {
  const auth = useAuth();

  return (
    <nav className="menu">
      <ul>
        {routes.map((route) => {
          if (route.private && !auth.user) {
            return null;
          }
          if (route.publicOnly && auth.user) {
            return null;
          }
          return (
            <li key={route.to}>
              <NavLink className="link" to={route.to} end>
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  text: "Login",
  publicOnly: true,
  private: false,
});
routes.push({
  to: "/logout",
  text: "Logout",
  private: true,
});

export { Menu };
