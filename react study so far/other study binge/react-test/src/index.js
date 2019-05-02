import React from 'react';
import ReactDOM from 'react-dom';

//Due to JSX, we can write HTMl code within javascript
const element = <h1> Hello World </h1>;
//The DOM.render(name of the element/code and the id of an element where the code will be in)
ReactDOM.render(element, document.getElementById('root'));