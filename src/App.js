import { NavLink } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
import './App.css';

function App() {
  return (
    <nav className="nav">
      <NavLink to="/home" className="navLink" activeClassName="activeLink">Home</NavLink>
      <NavLink to="/movies" className="navLink" activeClassName="activeLink">Movies</NavLink>
    </nav>
  );
}

export default App;
