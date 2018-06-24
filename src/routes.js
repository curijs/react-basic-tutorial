import Home from './components/Home';
import Book from './components/Book';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

export default [
  {
    name: "Home",
    path: "",
    response() {
      return {
        body: Home
      };
    }
  },
  {
    name: "Book",
    path: "book/:id",
    response() {
      return {
        body: Book
      };
    }
  },
  {
    name: "Checkout",
    path: "checkout",
    response() {
      return {
        body: Checkout
      };
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    response() {
      return {
        body: NotFound
      };
    }
  }
];
