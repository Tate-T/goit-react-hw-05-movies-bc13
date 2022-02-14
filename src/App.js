import { Switch, NavLink, Route } from 'react-router-dom';
import HomeView from './views/HomePage';
import MoviesView from './views/MoviesView';
import NotFoundViews from './views/NotFoundViews';
import './App.css';

function App() {
  return (
    <>
      <nav className="nav">
        <NavLink exact to="/" className="navLink" activeClassName="activeLink">Home</NavLink>
        <NavLink to="/movies" className="navLink" activeClassName="activeLink">Movies</NavLink>
      </nav>

      <Switch>

        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>

        <Route path="/movies">
          <NotFoundViews />
        </Route>

      </Switch>

    </>
  );
}

export default App;
