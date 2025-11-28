import { useState } from 'react'
import { Link, Route, Router, Switch, useLocation } from "wouter";
import Home from "./pages/Home";


export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/teams/:team">
          {params => {
            return (
              <>Teams, {params.team}</>
            );
          }}
        </Route>
        <Route>404: Page not found</Route>
      </Switch>
    </>
  )
}
