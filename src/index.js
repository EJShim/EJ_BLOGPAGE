import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'containers';
import style from './style.css';


const rootElement = document.getElementById('root');

ReactDOM.render(<App className = {style.app}/>, rootElement);
