import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const { books, setBooks } = useState([
    { title: "name of the wind", id: 1 },
    { title: "name of the wind", id: 2 },
    { title: "name of the wind", id: 3 },
    { title: "name of the wind", id: 4 },
  ]);
  return (
    <BookContextProvider valur={books}>{props.children}</BookContextProvider>
  );
};

export default BookContextProvider;
