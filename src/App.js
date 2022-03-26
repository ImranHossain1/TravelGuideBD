import './App.css';
import Header from './component/Header/Header';
import Districts from './component/Districts/Districts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <Districts></Districts>
      </header>
    </div>
  );
}

export default App;
