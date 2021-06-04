import AgeWithClass from './age-class.js';
import AgeWithFunction from './age-function.js';

function App() {
  return (
    <div className="App">
      <AgeWithClass age={50} />
      <AgeWithFunction age={34} />
    </div>
  );
}

export default App;
