import React from "react";
import mount from "market/MarketApp";
import RemoteApp from "../remoteApp";

export default function MarketApp() {
  return <RemoteApp mountApp={mount} />;
}
