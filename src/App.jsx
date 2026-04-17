import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

function App() {
  return (
    <>
      {/* Sticky navbar with logo and navigation links */}
      <nav className="navbar">
        <Link to="/" className="nav-logo">Arthur Guyetand</Link>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      {/* Client-side routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
