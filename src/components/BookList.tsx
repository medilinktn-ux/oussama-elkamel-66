import React from 'react';
import Book from './Book';

interface Book {
  title: string;
  author: string;
}

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div>
      {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default BookList;
