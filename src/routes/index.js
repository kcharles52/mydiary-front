import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components";
import NewEntry from "../components/entries/newEntryForm";
import Entries from "../components/entries/entriesPage";
import Entry from "../components/entries/singleEntry";
import EditEntry from "../components/entries/editEntry";
import ProtectedRoute from "./protectedRoutes";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact strict />
          <ProtectedRoute path="/home" component={Entries} exact strict />
          <ProtectedRoute path="/entry/:entry_id" component={Entry} exact strict />
          <ProtectedRoute path="/edit/:entry_id" component={EditEntry} exact strict />
          <ProtectedRoute path="/addEntry" component={NewEntry} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
