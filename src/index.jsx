import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import App from './App.jsx';
import {loadLayers} from "./actions/builderQueryAction";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import configureStore from './store/configureStore';

const muiTheme = getMuiTheme({isRtl: true});

const store = configureStore();
store.dispatch(loadLayers());

const Index = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<App/>
	</MuiThemeProvider>
);

ReactDOM.render(
	<Provider store={store}>
		<Index/>
	</Provider>,
	document.getElementById('app')
);
