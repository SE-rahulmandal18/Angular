import React from 'react';
import ReactDOM from 'react-dom';
import App from './list rendering demo/App';
// import App from './conditional rendering demo/App';


// import FunctionalComp from './simple components demos/FunctionalComp';
// import ClassBasedComp from './simple components demos/ClassBasedComp';
// import JSXDemo from './jsx demos/JSXDemo';
// import App from './simple props demo/App';
// import App from './states in react/App';

// Parent Component
// function App() {

//   // JSX
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <FunctionalComp></FunctionalComp>
//       <ClassBasedComp/>
//       <JSXDemo/>
//     </div>
//   );
// }

ReactDOM.render(
  <App/>, document.querySelector("#root")
);

