import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import AppLayout from './layouts/appLayout/appLayout';
import Home from './pages/home/home';

import './config/fontAwesomeLibrary';
import ErrorPage from './pages/errorPage/errorPage';
import PageNotFound from './pages/pageNotFound/pageNotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
