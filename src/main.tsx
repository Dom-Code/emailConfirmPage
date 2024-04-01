import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Error from './Route/ErrorPage.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: 'emailConfirmPage/error',
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
