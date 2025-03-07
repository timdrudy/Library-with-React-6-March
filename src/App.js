import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import { books } from "../src/data"
import BookInfo from './components/pages/BookInfo';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact render={() => <Books books={books}/>} />
      <Route path="/books/1" render={() => <BookInfo books={books}/>} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
