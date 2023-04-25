import './App.css';
// import CounterApp from './components/CounterApp';
// import CounterClass from './components/CounterClass';
import FormClassComponent from './components/FormClassComponent';
import FormFunctionalComponent from './components/FormFunctionalComponent';

function App() {
  return (
    <div className="App">
      {/* <CounterApp className="first__app"/>
      <CounterClass/> */}

      <FormClassComponent/>
      <FormFunctionalComponent/>
    </div>
  );
}

export default App;
