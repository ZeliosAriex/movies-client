import React, { lazy, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { Spin } from 'antd'
import { ProtectedRoute } from './components/ProtectedRoute'

// Lazy load pages
const SearchPage = lazy(() => import('../pages/Search'))
const MyListPage = lazy(() => import('../pages/MyList'))

export const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Spin size='large' />}>
      <Router>
        <Redirect from='/' to='/search' noThrow />
        <ProtectedRoute
          component={SearchPage}
          path='/search'
        />
        <MyListPage path='/mylist' />
      </Router>
    </Suspense>
  )
}
