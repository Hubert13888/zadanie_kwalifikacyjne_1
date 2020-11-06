import Book from "../Book";

const bookManager = (state = [], action) => {
  switch (action.type) {
    case "ADDBOOK":
      return state.push({});
    default:
      return state;
  }
};
export default bookManager;
