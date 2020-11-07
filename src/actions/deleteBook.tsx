const deleteBook = (bookId: number) => {
  return {
    type: "DELETEBOOK",
    payload: bookId
  };
};
export default deleteBook;
