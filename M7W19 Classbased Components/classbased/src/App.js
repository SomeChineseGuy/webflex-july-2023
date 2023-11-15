import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import CounterClass from './components/CounterClass';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      {/* <Counter message="Hello everyone!"/>
      <CounterClass message="Does this work?" /> */}
      <LifeCycle />
    </div>
  );
}

export default App;
