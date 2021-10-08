import React from "react";
import { mainRoutes } from "../routes/mainRoutes";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header routes={mainRoutes} />
      <Main routes={mainRoutes} />
    </>
  );
};

export default App;
