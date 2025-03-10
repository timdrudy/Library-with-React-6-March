import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import { books } from "../src/data"
import BookInfo from './components/pages/BookInfo';
import Cart from './components/pages/Cart';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cart, setCart] = useState ([]);

  function addToCart(book) {
      setCart([...cart, book])
    }

    useEffect(() => {
      console.log(cart)
    }, [cart])


  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact render={() => <Books books={books}/>} />
      <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
      <Route path="/cart" render={() => <Cart books={books}/>} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
