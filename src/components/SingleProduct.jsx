import React, { useState } from 'react'

const SingleProduct = ({pr, buyPr}) => {
  const onBuyClicked = () =>{
    buyPr(pr.id)
  }
  return (
    <div>
      <p>{pr.id}</p>
      <p>קוד מוצר {pr.code}</p>
      <p>{pr.name}</p>
      <p>מחיר {pr.price}</p>
    </div>
  )
}

export default SingleProduct