import React from 'react';
import { Link } from '@curi/react-dom';

import books from '../books';

export default function Home() {
  return (
    <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to="Book" params={{ id: book.id }} >
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
