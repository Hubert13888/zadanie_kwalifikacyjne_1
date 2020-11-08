import { PropsBook } from "../Book";

/**
 * Adds a book to the booklist
 * @param bookData consists of the data from the form
 */
const addBook = (bookData: PropsBook) => {
  return {
    type: "ADDBOOK",
    payload: bookData
  };
};
export default addBook;
