import './App.css';
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import Widgets from './Widgets';
function App() {
  return (
    <div className="App">
      {/* <h1>Hiii this is shubham making twitter clone</h1> */}

      <Sidebar />

      {/* { feed } */}
      <Feeds />

      {/* { Widget } */}
      <Widgets />
    </div>
  );
}

export default App;
