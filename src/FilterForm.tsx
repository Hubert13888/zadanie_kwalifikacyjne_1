import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import ClassNames from "classnames";
import { Reducers } from "./App";

const FilterForm = () => {
  let [filterText, setFilterText] = useState("");
  const bookManager = useSelector((state: Reducers) => state.bookManager);

  return (
    <>
      <form className="title_filter">
        <input
          type="text"
          placeholder="Wyszukaj tytuł"
          onChange={(e: any) => {
            e.persist();
            setFilterText(e.target.value);
          }}
        />
      </form>
      {bookManager.length ? (
        <div className="library">
          {bookManager.map((book) => {
            if (book) {
              return (
                <div
                  className={ClassNames({
                    hide: !book.attr.title
                      .toLowerCase()
                      .trim()
                      .includes(filterText.toLowerCase().trim())
                  })}
                >
                  {book.jsx}
                </div>
              );
            }
            return <></>;
          })}
        </div>
      ) : (
        <p className="no_position">Brak pozycji</p>
      )}
    </>
  );
};

export default FilterForm;
