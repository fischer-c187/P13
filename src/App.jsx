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
import SignIn from './pages/signIn/signIn';
import User from './pages/user/user';
import ProtectedRoute from './utils/protectedRoutes';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path='user' element={<User />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
