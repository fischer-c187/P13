import Error from '../../components/error/error';

/**
 * The PageNotFound component displays a 404 error message.
 * This component is typically used when the URL path does not match any of the known routes.
 *
 * @returns {JSX.Element} The rendered 404 error page.
 *
 */
function PageNotFound() {
  return <Error messageScope='pageNotFound' to='/' />;
}

export default PageNotFound;
