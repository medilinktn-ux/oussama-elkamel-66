import React from 'react';

interface BookProps {
  title: string;
}

const Book = ({ title }: BookProps) => {
  return (
    <div style={{
      padding: 20,
      border: '1px solid #ccc',
      borderRadius: 10,
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <p>Book Component</p>
    </div>
  );
};

export default Book;
