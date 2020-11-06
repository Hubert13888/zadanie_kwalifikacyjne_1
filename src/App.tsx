import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "./actions/addBook";
import "./styles.css";

interface Reducers {
  bookManager: any;
}

export default function App() {
  const bookManager = useSelector((state: Reducers) => state.bookManager);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>{bookManager}</div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            addBook({
              author: "abcd",
              title: "efgh",
              relDate: 1
            })
          );
        }}
      >
        Dodaj książkę
      </button>
    </div>
  );
}
