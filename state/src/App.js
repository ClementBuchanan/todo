import AgeWithClass from './age-class.js';
import AgeWithFunction from './age-function.js';
import Family from './family.js';

function App() {
  return (
    <div className="App">
      <Family people={['Lincoln', 'Karen', 'Clement',
        'Audrey']} />
      <AgeWithClass age={50} />
      <AgeWithFunction age={34} />
    </div>
  );
}

export default App;
