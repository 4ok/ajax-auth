import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '~/components/App/App'
import reducers, { initialState } from '~/reducers'
import middlewares from '~/middlewares'

const store = createStore(
	reducers,
	initialState,
	middlewares
)

ReactDOM.render(
	<Provider store={ store }>
		<App { ...store.getState() } />
	</Provider>,
	document.getElementById('root')
)
