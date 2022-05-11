import React from "react";
import Background from "./components/Background/Background.component";
import Header from "./components/Header/Header.component";
import ThreeDiamond from "./images/threeDiamonds.svg";
import "./App.css";

function App() {
  return (
    <Background>
      <Header title="Aktuelle Angebote" icon={ThreeDiamond} />
    </Background>
  );
}

export default App;
