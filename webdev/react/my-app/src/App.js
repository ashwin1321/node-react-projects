import './App.css';
import EventListener from './components/EventListener';
import Props from './components/Props';
import UsingState from './components/UsingState';
// import Header from './components/Header';

function App() {
  return (
    <div>
      <Props  name="ashwindgsj"/>  {/* passing props. we can use as much props we want */}
      <EventListener />
    <br />
    <UsingState />
    </div>

  );
}

export default App;


