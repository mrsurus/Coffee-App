
import { RouterProvider } from 'react-router-dom'
import { route } from './Router/Router'
import React from 'react'

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={route}>

      </RouterProvider>
    </React.Fragment>
  )
}

export default App
