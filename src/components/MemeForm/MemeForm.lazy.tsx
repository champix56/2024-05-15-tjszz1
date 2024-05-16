import React, { lazy, Suspense } from 'react';

const LazyMemeForm = lazy(() => import('./MemeForm'));

const MemeForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeForm {...props} />
  </Suspense>
);

export default MemeForm;
