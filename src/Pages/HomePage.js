import React, { Suspense } from 'react'
import Banner from '../Components/Banner/Banner';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Components/ErrorBoundary';
const CoinTable = React.lazy(()=> import('../Components/CoinTable'))

const HomePage = () => {
  return (
    <div>
    <Banner/>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <Suspense fallback={<div>Loading...</div>}>
        <CoinTable/>
      </Suspense>
    </ErrorBoundary>  
    </div>
  )
}

export default HomePage