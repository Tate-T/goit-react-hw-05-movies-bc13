import { Link } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
import './App.css';

function App() {
  return (
    <nav className="nav">
      <Link to="/homepage" className="nav_link">Home</Link>
      <Link to="/MoviesPage" className="nav_link">Movies</Link>
    </nav>
  );
}

export default App;
