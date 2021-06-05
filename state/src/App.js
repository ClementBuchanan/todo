import AgeWithClass from './age-class.js';
import AgeWithFunction from './age-function.js';
import Family from './family.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Family people={['Lincoln', 'Karen', 'Clement',
        'Audrey']} />
      <AgeWithClass age={50} />
      <AgeWithFunction age={34} />
    </div>
  );
}

export default App;
