import { Switch, NavLink, Route } from 'react-router-dom';
import HomeView from './views/HomePage';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import CastView from './views/CastView';
import ReviewsView from './views/ReviewsView';
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

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId/cast">
          <CastView />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <ReviewsView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route path="/movies">
          <NotFoundViews />
        </Route>

      </Switch>

    </>
  );
}

export default App;
