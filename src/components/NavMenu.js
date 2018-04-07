import React from 'react';
import { Link } from '@curi/react';

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="Home">Home</Link>
      </li>
      <li>
        <Link to="Checkout">Checkout</Link>
      </li>
    </ul>
  </nav>
);
