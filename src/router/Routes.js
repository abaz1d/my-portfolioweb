import React from "react";
import PageHome from "../views/PageHome";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
