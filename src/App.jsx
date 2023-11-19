import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PlayersList from "./PlayersList";
import { players } from "./data";

function App() {
  return (
    <div className="foot">
      <h1>Football Players</h1>
      <PlayersList players={players} />
    </div>
  );
}

export default App;
