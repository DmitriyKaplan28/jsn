import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {sentence, splitIntoWords} from "./01-hello-tests/01";
import {User} from "./06/06-callbacks";

const result = splitIntoWords(sentence)
console.log(result)

ReactDOM.render(<User />, document.getElementById('root')
);

reportWebVitals();