import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import App from './App.jsx';
import {loadLayers} from "./actions/builderQueryAction";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import configureStore from './store/configureStore';
import {AppContainer} from 'react-hot-loader';

const muiTheme = getMuiTheme({isRtl: true});

const store = configureStore();
store.dispatch(loadLayers());

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<MuiThemeProvider muiTheme={muiTheme}>
				<AppContainer>
					<Component/>
				</AppContainer>
			</MuiThemeProvider>
		</Provider>,
		document.getElementById('app'),
	)
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', async () => {
		const App = await import ('./App');
		render(App.default)
	})
}
