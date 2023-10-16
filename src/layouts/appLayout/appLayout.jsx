import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

/**
 * AppLayout serves as the layout wrapper for the application's root path.
 * It includes the Header and Footer components and uses React Router's Outlet
 * to dynamically load nested route components.
 *
 * @returns {JSX.Element} The AppLayout component rendering Header, Footer, and Outlet components.
 */
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
