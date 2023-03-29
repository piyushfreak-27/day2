import logo from './logo.svg';
import './App.css';
import Header from './header';
import Navigation from './navigation';
import Section from './product';
import { Cart } from './footer';

function App() {
  return (
    <div>
    <Header/>
    <Navigation/>
    <Section/>
    <Cart/>
    </div>
  );
}

export default App;
