import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Pages/HomePage";
import { BlogPage } from "./Pages/BlogPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { LoginPage } from "./Pages/LoginPage";
import { LogoutPage } from "./Pages/LogoutPage";
import { BlogPost } from "./Components/BlogPost";
import { LoginErrorPage } from "./Pages/LoginErrorPage";
import { EditBlogPage } from "./Pages/EditBlogPage";
import { AuthProvider, AuthRoute } from "./Components/Auth";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/edit-blog/:slug" element={<EditBlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="/error-login" element={<LoginErrorPage />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
