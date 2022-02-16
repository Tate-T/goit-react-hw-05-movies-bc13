import { lazy } from 'react';
import { Switch, NavLink, Route, Suspense } from 'react-router-dom';
import './App.css';
// import HomeView from './views/HomeView';
// import MoviesView from './views/MoviesView';
// import MovieDetailsView from './views/MovieDetailsView';
// import CastView from './views/CastView';
// import ReviewsView from './views/ReviewsView';
// import NotFoundViews from './views/NotFoundViews';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView.js'));
const NotFoundViews = lazy(() => import('./views/MovieDetailsView.js'));

function App() {
  return (
    <>
      <nav className="nav">
        <NavLink exact to="/" className="navLink" activeClassName="activeLink">Home</NavLink>
        <NavLink to="/movies" className="navLink" activeClassName="activeLink">Movies</NavLink>
      </nav>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>

          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route path="/movies">
            <NotFoundViews />
          </Route>

        </Switch>
      </Suspense>
    </>
  );
}

export default App;
