import './App.css';
import CounterApp from './components/CounterApp';
import CounterClass from './components/CounterClass';

function App() {
  return (
    <div className="App">
      <CounterApp className="first__app"/>
      <CounterClass/>
    </div>
  );
}

export default App;
