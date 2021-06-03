import Header from "./components/Header";
import Home from "./components/Home";
import SearchPage from './components/SearchPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>

              <Route exact path="/search">
                  <SearchPage />
              </Route>
          </Switch>

      </BrowserRouter>

    </>
  );
}

export default App;
