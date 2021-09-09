import React from "react";
import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
        <Route path="/welcome/new">
            <p>Welcome!</p>
        </Route>
    </section>
  );
};

export default Welcome;
