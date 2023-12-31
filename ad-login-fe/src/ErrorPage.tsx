import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {isRouteErrorResponse(error) && <i>{error.statusText}</i>}
            </p>
        </div>
  );
};

export default ErrorPage;
