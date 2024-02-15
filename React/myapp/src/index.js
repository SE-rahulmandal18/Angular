import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './react router/App';
// import App from './Forms in React/App';
// import App from './time excercise/App';
// import App from './styling in react/App';
// import App from './Lifting state up/App';
// import App from './list rendering demo/App';
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
 <BrowserRouter> <App/>, </BrowserRouter>, document.querySelector("#root")
);

