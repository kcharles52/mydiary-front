// react libraries
import * as React from "react";

//third party packages
import { Route, Switch } from "react-router-dom";

//components
import Home from "../pages/LandingPage/";
import Entries from "../pages/Entries";
import CreatEditEntry from "../pages/CreateEditEntry";
import SingleEntry from "../pages/SingleEntry";

// import ProtectedRoute from "./protectedRoutes";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact strict />
        <Route path="/home" component={Entries} exact strict />
        <Route
          path="/editEntry/:entry_id"
          component={CreatEditEntry}
          exact
          strict
        />
        <Route path="/addEntry" component={CreatEditEntry} exact strict />
        <Route path="/Entry/:entry_id" component={SingleEntry} exact strict />
      </Switch>
    </div>
  );
};

export default AppRoutes;
