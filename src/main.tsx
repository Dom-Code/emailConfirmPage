import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './Components/Registration.tsx';

const router = createBrowserRouter([
  {
    path: '/emailConfirmPage',
    element: <App />,
  },
  {
    path: '/emailConfirmPage/:id',
    element: <Registration />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
