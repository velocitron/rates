var React = require('react'); // import React package

// import ReactDOM from 'react-dom'; // import ReactDOM package
import './styles/main.css'; // import our external css file
// import DataTable from './components/table.jsx'; // import our frame component
// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'
import App from './components/App.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var ReactDOM = require('react-dom');
// const App = () => (
//   <MuiThemeProvider>
//     <DataTable/>
//   </MuiThemeProvider>
// );

ReactDOM.render(
  <App
  />, 
  document.getElementById('app')
);
