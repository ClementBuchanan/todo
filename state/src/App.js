import React from 'react';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}




// import React from 'react';
// import AgeWithClass from './age-class.js';
// import AgeWithFunction from './age-function.js';
// import Family from './family.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import ToDo from './components/todo/todo.js';


// function App() {
//   return (
//     <div>
//       <Family people={['Lincoln', 'Karen', 'Clement',
//         'Audrey']} />
//       <AgeWithClass age={50} />
//       <AgeWithFunction age={34} />
//       <ToDo />
//     </div>
//   );
// }

// export default App;


