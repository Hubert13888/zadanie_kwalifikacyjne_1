import React, { useState } from "react";
import { useDispatch } from "react-redux";

import addBook from "./actions/addBook";
import MonthSelect from "./MonthSelect";

/**
 * Form has inputs:
 * - title (title of the book)
 * - author (author of the book)
 * - month (optional month select)
 * - year
 */
const AddBookForm = (props) => {
  const dispatch = useDispatch();
  const [titleErr, setTitleErr] = useState("");
  const [authorErr, setAuthorErr] = useState("");
  const [yearErr, setYearErr] = useState("");
  return (
    <>
      <form
        action=""
        onSubmit={(e: any) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          let formArr = [];
          for (let data of formData) {
            formArr.push(data[1]);
          }
          //Validate inputs
          let error = false;
          if (formArr[0].trim() === "") {
            setTitleErr("Wpisz tytuł książki");
            error = true;
          }
          if (formArr[1].trim() === "") {
            setAuthorErr("Wprowadź autora");
            error = true;
          }
          //year can consist of surfix "pne" so It's better to not validate it further
          if (formArr[3].trim() === "") {
            setYearErr("Wprowadź rok wydania");
            error = true;
          }
          if (error) return false;
          else
            dispatch(
              addBook({
                title: formArr[0],
                author: formArr[1],
                relDate:
                  (formArr[2] === "base" ? "" : formArr[2] + " ") +
                  formArr[3] +
                  " r."
              })
            );
          alert("Pozycja została dodana");
        }}
      >
        <h1>Dodaj pozycję</h1>
        <p>Informacje o książce</p>
        <section>
          <input
            type="text"
            name="title"
            placeholder="Tytuł"
            onFocus={() => setTitleErr("")}
          />
          <div className="error">{titleErr}</div>
        </section>

        <section>
          <input
            type="text"
            name="author"
            placeholder="Autor"
            onFocus={() => setAuthorErr("")}
          />
          <div className="error">{authorErr}</div>
        </section>
        <p>Data wydania</p>
        <section>
          <MonthSelect />
          <section>
            <input
              type="text"
              name="year"
              placeholder="Rok"
              onFocus={() => setYearErr("")}
            />
            <div className="error">{yearErr}</div>
          </section>
        </section>

        <section className="book_add_form__buttons">
          <button
            className="book_add_form__close_btn"
            onClick={(e) => {
              e.preventDefault();
              props.goBack();
            }}
          >
            Powrót
          </button>
          <button className="book_add_form__add_btn">Dodaj</button>
        </section>
      </form>
    </>
  );
};
export default AddBookForm;
