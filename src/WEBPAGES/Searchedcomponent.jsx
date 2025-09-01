import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductGridComponent from './ProductGridComponent'

const Searchedcomponent = () => {
    const Location=useLocation()
    const searchResult= Location.state?.searchResults || []
  return (
    <div>
      <ProductGridComponent data={searchResult} />
    </div>
  )
}

export default Searchedcomponent
