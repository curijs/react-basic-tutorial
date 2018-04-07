import Home from './components/Home';
import Book from './components/Book';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

export default [
  {
    name: "Home",
    path: "",
    match: {
      response({ set }) {
        set.body(Home);
      }
    }
  },
  {
    name: "Book",
    path: "book/:id",
    match: {
      response({ set }) {
        set.body(Book);
      }
    }
  },
  {
    name: "Checkout",
    path: "checkout",
    match: {
      response({ set }) {
        set.body(Checkout);
      }
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    match: {
      response({ set }) {
        set.body(NotFound);
      }
    }
  }
];
