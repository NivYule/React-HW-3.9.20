import MoviesPage from './components/pages/movies-page';
import AboutPage from './components/pages/about-page';
import ConfigurationPage from './components/pages/configuration-page';
import FavoritePage from './components/pages/favorite-page';
import SearchResultPage from './components/pages/search-result-page';

export const Routes = [{ component: MoviesPage, path: "/home", name: "Movies" },
{ component: ConfigurationPage, path: "/configuration", name: "configuration" },
{ component: AboutPage, path: "/about", name: "about" },
{ component: FavoritePage, path: "/favorites", name: "favorites" },
{ component: SearchResultPage, path: "/search-result", name: "Search Result" }
];