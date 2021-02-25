import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const MarketApp = lazy(() => import("./subapps/marketApp"));
const UnifiedLoginApp = lazy(() => import("./subapps/unifiedLoginApp"));
const P2pApp = lazy(() => import("./subapps/p2pApp"));

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <h1>PP</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyleType: "none",
            }}
          >
            <li style={{ margin: 5 }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: 5 }}>
              <Link to="/login">Log in</Link>
            </li>
            <li style={{ margin: 5 }}>
              <Link to="/p2p">Send Money</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Suspense fallback="loading...">
        <Switch>
          <Route path="/p2p">
            <P2pApp />
          </Route>
          <Route path="/login">
            <UnifiedLoginApp />
          </Route>
          <Route path="/">
            <MarketApp />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
