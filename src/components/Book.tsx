import React from 'react';

interface BookProps {
  title: string;
  author: string;
  description: string;
}

function Book({ title, author, description }: BookProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{description}</p>
    </div>
  );
}

export default Book;