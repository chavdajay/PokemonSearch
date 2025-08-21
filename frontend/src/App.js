import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonForm from "./components/PokemonForm";

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Pokemon Search</h1>
      <PokemonForm />
    </div>
  );
}

export default App;
