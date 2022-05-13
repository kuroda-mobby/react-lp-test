import React from "react";
import { Card } from "./Card";
import data from "./data.json";

function App() {
  return (
    <Card data={data} />
  );
}

export default App;

