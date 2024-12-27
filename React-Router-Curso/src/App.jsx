import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Components/Menu';
import { HomePage } from './Pages/HomePage';
import { BlogPage } from './Pages/BlogPage';
import { ProfilePage } from './Pages/ProfilePage';
import { BlogPost } from './Components/BlogPost';
import './App.css'

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
