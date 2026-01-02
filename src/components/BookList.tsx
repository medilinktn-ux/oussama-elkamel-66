import React from 'react';
import Book from './Book';

interface BookListProps {
  books: { title: string; author: string; description: string }[];
}

function BookList({ books }: BookListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {books && books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} description={book.description} />
      ))}
    </div>
  );
}

export default BookList;
