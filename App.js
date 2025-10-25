import React from "react";
import ReactDOM from "react-dom"

const heading = React.createElement('div', {id : 'parent'}, React.createElement('div', {id : 'child'}, 
      [React.createElement('h1', {}, "Inside the first h1"),
        React.createElement('h2', {}, "Inside the first h2"),]
     ));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);