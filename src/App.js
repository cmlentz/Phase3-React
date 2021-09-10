import './App.css';
import RiverContainer from './components/River/RiverContainer';
import SingleFishContainer from './components/SingleFish/SingleFishContainer';

function App() {
  return (
    <div className="App">
      <div className="AppSubDiv">
        <RiverContainer />
      </div>
      <div className="AppSubDiv">
        <SingleFishContainer />
      </div>
    </div>
  )
}

export default App;