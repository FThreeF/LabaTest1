import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Authorization from './components/Authorization';
import List from './components/List';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Authorization />,
	},
	{
		path: '/list',
		element: <List />,
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
