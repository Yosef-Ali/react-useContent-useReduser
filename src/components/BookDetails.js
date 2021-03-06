import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <div>
      <li onClick={() => removeBook(book.id)}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
    </div>
  );
};

export default BookDetails;
