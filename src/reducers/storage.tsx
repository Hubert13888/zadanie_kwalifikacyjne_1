import React from "react";
import Book from "../Book";
import { getCookie, setCookie } from "../assets/CookieManager";

/**
 * Gets the initial state of the library from cookies
 */
const getInitialLibrary = () => {
  let lib = JSON.parse(getCookie("library"));

  if (!lib || !lib[0]) return [];
  let oldLib = [];
  for (let pos of lib) {
    oldLib.push({
      id: pos.id,
      attr: {
        title: pos.title,
        author: pos.author,
        relDate: pos.relDate
      },
      jsx: (
        <Book
          id={pos.id}
          title={pos.title}
          author={pos.author}
          relDate={pos.relDate}
        />
      )
    });
  }
  return oldLib;
};

/**
 * Set the last state to cookies so it could be restored after
 * page reload
 * @param state The current reducer's state
 */
const setLibraryCookie = (state) => {
  let newCookie = [];
  for (let elem of state) {
    if (elem)
      if (elem.id || elem.id === 0) {
        newCookie.push({
          id: elem.id,
          title: elem.attr.title,
          author: elem.attr.author,
          relDate: elem.attr.relDate
        });
      }
  }
  setCookie("library", JSON.stringify(newCookie), 20 * 365);
};
/**
 * Redux reducer holding the book library
 */
const bookManager = (state = (() => getInitialLibrary())(), action) => {
  switch (action.type) {
    case "ADDBOOK":
      let nextId = 0;
      if (state[state.length - 1]) nextId = state[state.length - 1].id + 1;
      state = [
        ...state,
        {
          id: nextId,
          attr: {
            title: action.payload.title,
            author: action.payload.author,
            relDate: action.payload.relDate
          },
          jsx: (
            <Book
              id={nextId}
              title={action.payload.title}
              author={action.payload.author}
              relDate={action.payload.relDate}
            />
          )
        }
      ];
      setLibraryCookie(state);

      break;
    case "DELETEBOOK":
      let stateCpy = [...state],
        newState = [];
      for (let book of stateCpy) {
        if (book.id !== action.payload) newState.push(book);
      }
      setLibraryCookie(newState);
      return newState;
  }
  return state;
};
export default bookManager;
