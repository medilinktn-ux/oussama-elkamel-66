import React from 'react';
import Book from './Book';

interface BookListProps {
  bookTitles: string[];
}

const BookList = ({ bookTitles }: BookListProps) => {
  return (
    <div>
      {bookTitles.map((title, index) => (
        <Book key={index} title={title} />
      ))}
    </div>
  );
};

export default BookList;
