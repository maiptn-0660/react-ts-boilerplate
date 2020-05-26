import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('views/pages/HomePage'));

function Main() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
}

export default Main;
