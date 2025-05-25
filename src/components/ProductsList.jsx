import React, { useState } from 'react'
import SingleProduct from './SingleProduct'

const ProductsList = ({prList, buyPr}) => {

  const [allProducts, setAllProducts] = useState(prList)

  return (
    <div>
      {prList.map(p => <SingleProduct pr={p} buyPr={buyPr} />)}
    </div>
  )
}

export default ProductsList

//      <button onClick={() => buyPr(pr.code) }>קנה מוצר</button>

  // {allProducts.map(p => <SingleProduct key={p.id} pr={p} buyPr={buyPr} />)}
