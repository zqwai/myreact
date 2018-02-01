import React from 'react';
import {render} from 'react-dom';
import App from './App.js';

import './stylus/index.styl';

console.error('I get called from print.js!');

render(
	<App></App>,
	document.getElementById('root')
);