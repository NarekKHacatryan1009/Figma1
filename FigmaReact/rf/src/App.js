import './App.scss';
import "./sassfolder/Header.scss";
import "./sassfolder/Nav.scss";
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
    </div>
  );
}

export default App;
