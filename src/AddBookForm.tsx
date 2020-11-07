import React from "react";
import { useDispatch } from "react-redux";
import addBook from "./actions/addBook";
import MonthSelect from "./MonthSelect";

const AddBookForm = (props) => {
  const dispatch = useDispatch();
  return (
    <form
      action=""
      onSubmit={(e: any) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let formArr = [];
        for (let data of formData) {
          formArr.push(data[1]);
        }

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
      }}
    >
      <h1>Dodaj pozycję</h1>
      <p>Informacje o książce</p>
      <section>
        <input type="text" name="title" placeholder="Tytuł" />
        <div className="error">Jakiś error</div>
      </section>

      <section>
        <input type="text" name="author" placeholder="Autor" />
        <div className="error">Jakiś error</div>
      </section>
      <p>Data wydania</p>
      <section>
        <MonthSelect />
        <input type="text" name="year" placeholder="Rok/Wiek" />
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
  );
};
export default AddBookForm;
