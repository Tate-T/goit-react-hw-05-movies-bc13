import { Link } from 'react-router-dom';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/homepage">HomePage</Link>
      <Link to="/MoviesPage">MoviesPage</Link>
    </div>
  );
}

export default App;
