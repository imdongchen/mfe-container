import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function RemoteApp({ mountApp }) {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    mountApp(ref.current);
  }, []);
  return <div ref={ref} />;
}
