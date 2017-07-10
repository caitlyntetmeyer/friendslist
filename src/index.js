import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import './index.css';

ReactDOM.render(
	<div className="row">
		{/* {this.props.children} from App.js will inform React that it needs to render the components nested in these App tags: */}
		<App>
			<Header />
		</App>
	</div>,
	document.getElementById('root')
);

// registerServiceWorker();
