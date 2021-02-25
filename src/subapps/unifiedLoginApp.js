import React from "react";
import mount from "unifiedLogin/UnifiedLoginApp";
import RemoteApp from "../remoteApp";

export default function UnifiedLoginApp() {
  return <RemoteApp mountApp={mount} />;
}
