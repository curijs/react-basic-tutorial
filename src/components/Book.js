import React from 'react';

import books from '../books';
import cart from '../cart';

export default function Book({ response, router }) {
  const id = parseInt(response.params.id, 10);
  const book = books.find(b => b.id === id);
  if (!book) {
    return <div>The requested book could not be found</div>;
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>Published in {book.published}</p>
      <p>{book.pages} pages</p>
      <button
        type="button"
        onClick={() => {
          cart.add(book, 1);
          router.navigate({ name: "Checkout" });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
