import React from "react";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="text-center">
      <h4 className="fw-bold text-danger">Error! :( (xxx)</h4>
      <p>{message}</p>
      <button className="btn btn-danger" onClick={onRetry}>
        Try again
      </button>
      <p className="text-muted mt-2">
        This error was caught by the error boundary!
      </p>
    </div>
  );
}
