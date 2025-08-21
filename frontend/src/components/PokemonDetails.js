import React from "react";

export default function PokemonDetails({ pokemon, abilities }) {
  return (
    <div className="text-center">
      <h3 className="fw-bold">
        {pokemon.name} <span className="text-muted">({pokemon.number})</span>
      </h3>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="img-fluid my-3"
        style={{ maxWidth: "180px" }}
      />

      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Ability</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {abilities.map((ab) => (
            <tr key={ab._id}>
              <td>{ab.ability}</td>
              <td>{ab.type}</td>
              <td>{ab.damage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
