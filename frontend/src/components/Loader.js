import React from "react";

export default function Loader({ name }) {
  return (
    <div className="text-center">
      <h4 className="fw-bold">Loading {name}... (xxx)</h4>
      <div className="spinner-border text-pink mt-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
