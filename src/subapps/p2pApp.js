import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import mount from "p2p/P2pApp";
import RemoteApp from "../remoteApp";

export default function P2pApp() {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        console.log("subapp navigate", pathname, nextPathname);
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}
