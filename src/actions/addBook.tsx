import { PropsBook } from "../Book";
const addBook = (bookData: PropsBook) => {
  return {
    type: "ADDBOOK",
    payload: bookData
  };
};
export default addBook;
