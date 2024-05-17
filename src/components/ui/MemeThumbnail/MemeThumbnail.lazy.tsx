import React, { lazy, Suspense } from 'react';

const LazyMemeThumbnail = lazy(() => import('./MemeThumbnail'));

const MemeThumbnail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeThumbnail {...props} />
  </Suspense>
);

export default MemeThumbnail;
