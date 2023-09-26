import React from 'react'
import { BrowserRouter, Routes as ReactRouterDom, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'


const Routes = () => {
  return (
<BrowserRouter>
<Layout>
  <ReactRouterDom>
    <Route path= "/" element = {<Home/>}/>
  </ReactRouterDom>

</Layout>
</BrowserRouter>
  )
}

export default Routes