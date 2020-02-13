import React from "react";
import { Route, Switch } from "react-router-dom";

import CardPage from "./components/CardPage";
import NoCard from "./components/NoCard";

function App() {
  return (
    <Switch>
      <Route path="/" exact strict component={NoCard} />
      <Route path="/:cardId" exact component={CardPage} />
    </Switch>
  );
}

export default App;
