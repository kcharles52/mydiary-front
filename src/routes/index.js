import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components";
import NewEntry from "../components/entries/newEntryForm";
import Entries from "../components/entries/entriesPage";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact strict />
          <Route path="/home" component={Entries} exact strict />
          <Route path="/addEntry" component={NewEntry} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
