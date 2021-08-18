import React from 'react';
import ReactDOM from 'react_dom';
import {POS} from "./components/pos.js";

ReactDOM.render(
    React.createElement(POS, null, null),
    document.getElementById('container')
);