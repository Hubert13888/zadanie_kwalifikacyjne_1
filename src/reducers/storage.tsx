import React from "react";
import Book from "../Book";

const bookManager = (state = [], action) => {
  switch (action.type) {
    case "ADDBOOK":
      state = [
        ...state,
        <Book
          title={action.payload.title}
          author={action.payload.author}
          relDate={action.payload.date}
        />
      ];
      break;
  }
  return state;
};
export default bookManager;
