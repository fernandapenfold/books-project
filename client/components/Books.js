import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const Books = ({ books }) => {
  // const books = useSelector(selectBooks);

  return (
    <div>{books.length}</div>
  )
}

export default Books;