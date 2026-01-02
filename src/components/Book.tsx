import React from 'react';

interface BookProps {
  title: string;
}

const Book = ({ title }: BookProps) => {
  return <div>{title}</div>;
};

export default Book;