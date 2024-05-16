import React, { lazy, Suspense } from 'react';

const LazyFlexW1Grow = lazy(() => import('./FlexW1Grow'));

const FlexW1Grow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexW1Grow {...props} />
  </Suspense>
);

export default FlexW1Grow;
