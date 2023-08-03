import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantDisplay from './containers/RestaurantDisplay';
import RestaurantCard from './components/RestaurantCard';
import NavBar from './components/Navbar';
import RestaurantQuery from './components/RestaurantQuery';
import BodyContainer from './containers/Bodycontainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BodyContainer />,
    children: [
      { path: '/', element: <RestaurantDisplay /> },
      { path: '/restaurant', element: <RestaurantCard /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <NavBar />
    <RestaurantQuery />
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  </Provider>
);
