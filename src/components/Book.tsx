import React from 'react';

interface BookProps {
  title: string;
  author: string;
}

const Book = ({ title, author }: BookProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
    </div>
  );
};

export default Book;