import { Route,Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';
import { InPages } from './pages/InPages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/in-pages" component={InPages} />
    </Switch>
  );
}

export default App;
