import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function Custom() {
  const { darkMode, toggle } = useContext(DarkModeContext);

  console.log(darkMode);
  console.log(toggle);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Custom;
