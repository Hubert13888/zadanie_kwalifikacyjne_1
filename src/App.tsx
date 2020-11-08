import React, { useState } from "react";

import AddBookForm from "./AddBookForm";
import FilterForm from "./FilterForm";

import ClassNames from "classnames";

import "./assets/styles/main.scss";

export default function App() {
  const [hide_form, setHideForm] = useState(true);
  return (
    <div className="app">
      <nav
        className={ClassNames({
          book_add_form: true,
          slide_left: hide_form
        })}
      >
        <AddBookForm goBack={() => setHideForm(true)} />
      </nav>
      <main>
        <button
          className={ClassNames({
            book_add_form__show_btn: true,
            hide: !hide_form
          })}
          onClick={(e) => {
            setHideForm(false);
          }}
        >
          +
        </button>
        <h1>Domowa biblioteczka</h1>
        <FilterForm />
      </main>
    </div>
  );
}
