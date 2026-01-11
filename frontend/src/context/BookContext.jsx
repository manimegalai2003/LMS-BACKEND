import React, { createContext, useState, useEffect } from "react";
import { getBooks } from "../services/bookService";

export const BookContext = createContext();

 function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}
export default BookProvider;