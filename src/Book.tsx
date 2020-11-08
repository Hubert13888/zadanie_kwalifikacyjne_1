import React from "react";
import { useDispatch } from "react-redux";
import ClassNames from "classnames";

import deleteBook from "./actions/deleteBook";

export interface PropsBook {
  id?: number;
  title: string;
  author: string;
  relDate: string;
}

const Book = (props: PropsBook) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="library__book">
        <button
          className={ClassNames({
            library__book__close: true
          })}
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteBook(props.id));
          }}
        ></button>
        <p className="library__book__title">{props.title}</p>
        <p className="library__book__author">{props.author}</p>
        <p className="library__book__released">
          <span>wydano</span>
          {props.relDate}
        </p>
      </div>
    </>
  );
};
export default Book;
