import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetups from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/Layout/MainNavigation';


function App() {
  return (<div>
    <MainNavigation />
    <Switch >
      <Route path='/' exact={true}>
        <AllMeetupsPage />
      </Route>

      <Route path='/new-meetup'>
        <NewMeetups />
      </Route>

      <Route path='/favourite'>
        <FavoritesPage />
      </Route>
    </Switch>

  </div>)
}

export default App;
