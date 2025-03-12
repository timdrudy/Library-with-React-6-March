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

function App() {
  const [cart, setCart] = useState ([]);

  function addToCart(book) {
      setCart([...cart, {...book, quantity: 1}]);
    }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => 
      item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
    )
    );
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
      <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
      <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity}/> }/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
