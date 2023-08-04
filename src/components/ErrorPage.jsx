import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Uh oh, it seems we have a problem here:</h1>
      <p>
        <i>{error.status || error.message}</i>
      </p>
    </div>
  );
}
