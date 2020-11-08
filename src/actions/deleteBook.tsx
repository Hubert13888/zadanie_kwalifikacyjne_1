/**
 * Deletes a book from the book list
 * @param bookId id of the book that needs to be deleted
 */

const deleteBook = (bookId: number) => {
  return {
    type: "DELETEBOOK",
    payload: bookId
  };
};
export default deleteBook;
