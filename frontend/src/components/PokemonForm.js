import React, { useState } from "react";
import "../App.css";
import { fetchPokemon, fetchAbilities } from "../services/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import PokemonDetails from "./PokemonDetails";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setError("");
    setPokemon(null);
    setAbilities([]);

    try {
      const { data } = await fetchPokemon(name);
      setPokemon(data);

      const abilityRes = await fetchAbilities(data._id);
      setAbilities(abilityRes.data);
    } catch (err) {
      setError(`The pokemon '${name}' is not in the database.`);
    }
    setLoading(false);
  };

  const handleSampleClick = (sample) => {
    setName(sample);
    handleSearch({ preventDefault: () => {} });
  };

  const handleRetry = () => {
    setName("");
    setError("");
    setPokemon(null);
    setAbilities([]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center fw-bold mb-4 text-pink">
        Aureate React Assignment Mockup
      </h1>

      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center mb-2"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control w-50 me-2"
          placeholder="Which pokemon?"
        />
        <button className="btn btn-pink" type="submit">
          Fetch!
        </button>
      </form>

      <p className="text-muted text-center small">
        Try{" "}
        <span
          className="text-pink pointer"
          onClick={() => handleSampleClick("Pikachu")}
        >
          Pikachu
        </span>
        ,{" "}
        <span
          className="text-pink pointer"
          onClick={() => handleSampleClick("Charizard")}
        >
          Charizard
        </span>
        , or{" "}
        <span
          className="text-pink pointer"
          onClick={() => handleSampleClick("Ninetales")}
        >
          Ninetales
        </span>
      </p>

      <div
        className="border rounded p-4 mt-3"
        style={{ borderColor: "#e75480" }}
      >
        {loading && <Loader name={name} />}

        {!loading && !pokemon && !error && (
          <div className="text-center">
            <h4 className="fw-bold">No Pokemon Yet! (xxx)</h4>
            <p>Please submit a pokemon!</p>
          </div>
        )}

        {error && <ErrorMessage message={error} onRetry={handleRetry} />}

        {pokemon && !loading && !error && (
          <PokemonDetails pokemon={pokemon} abilities={abilities} />
        )}
      </div>
    </div>
  );
}
