import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import AppLayout from './layouts/appLayout/appLayout';
import Home from './pages/home/home';

import './config/fontAwesomeLibrary';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
