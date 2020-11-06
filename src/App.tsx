import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

interface Reducers {
  bookManager: any;
}

export default function App() {
  const allReducers = useSelector((state: Reducers) => state.allReducers);
  return (
    <div className="App">
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Dodaj książkę
      </button>
    </div>
  );
}
