import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";

function App () {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/gifs/cats" />} />
            <Route exact path="/gifs" render={() => <Redirect to="/gifs/cats" />} />
            <Route exact path="/gifs/:searchWord" component={PhotoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
