import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
	reducers, // Reducers
	{
        productos: [],
        cargando: false,
        error: ''
    }, // Estado inicial
	applyMiddleware(reduxThunk)
);


ReactDom.render(
	<Provider store={ store }>
		<App />
	</Provider>,
    document.getElementById('app')
);
