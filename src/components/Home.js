import React from 'react';
import { Link } from '@curi/react';

import books from '../books';

export default () => (
  <div>
    {books.map(book => (
      <Link
        key={book.id}
        to="Book"
        params={{ id: book.id }}
      >
        {book.title} by {book.author}
      </Link>
    ))}
  </div>
);