import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurantDisplay, {
  loader as restDisplayLoader,
} from './containers/RestaurantDisplay';
import RestaurantReviewCard from './components/RestaurantReviewCard';
import NavBar from './components/Navbar';
import BodyContainer from './containers/Bodycontainer';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BodyContainer />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <RestaurantDisplay /> },
      {
        path: '/:location',
        element: <RestaurantDisplay />,
        loader: restDisplayLoader,
      },
      { path: '/restaurant/:id', element: <RestaurantReviewCard /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <NavBar />
    <RouterProvider router={router} />
  </Provider>
);
