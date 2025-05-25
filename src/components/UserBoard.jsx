import React, { useState } from 'react'

const UserBoard = ({setResult, result, setproductsArr, productsArr}) => {

  //משתני הקוד של המוצר
  const [productCode, setProductCode] = useState("")


  //כשהלקוח קונה נמיר את הקוד שהקיש לקוד מספרי ונציג אותו
  const buyProduct = () => {
      alert("code " + productCode);
    
        setProductCode('');
        setResult(productsArr.find(p => p.code === productCode))
        setproductsArr( productsArr.filter(p => p.code != productCode));

  }


  //משתני התשלום
  const [payCoins, setPayCoins] = useState (0)

  const pay = () => {
    setPayCoins(0)
    alert("אתה משלם כעת "+payCoins)
  }

  
  return (
    <div>
      <div className='coins'>coins
        <button onClick={() => {setPayCoins(payCoins+1)}}>1</button>
        <button onClick={() => {setPayCoins(payCoins+2)}}>2</button>
        <button onClick={() => {setPayCoins(payCoins+5)}}>5</button>
        <button onClick={() => {setPayCoins(payCoins+10)}}>10</button>
        <button onClick={() => {pay()}}>שלם</button>



      </div>
      <div className='buttons'>buy
        <button onClick={() => { setProductCode(productCode + "1") }}>1</button>
        <button onClick={() => { setProductCode(productCode + "2") }}>2</button>
        <button onClick={() => { setProductCode(productCode + "3") }}>3</button>
        <button onClick={() => { setProductCode(productCode + "4") }}>4</button>
        <button onClick={() => { setProductCode(productCode + "5") }}>5</button>
        <button onClick={() => { setProductCode(productCode + "6") }}>6</button>
        <button onClick={() => { setProductCode(productCode + "7") }}>7</button>
        <button onClick={() => { setProductCode(productCode + "8") }}>8</button>
        <button onClick={() => { setProductCode(productCode + "9") }}>9</button>
        <button onClick={() => { setProductCode(productCode + "0") }}>0</button>
        <button onClick={buyProduct}>קנה</button>
      </div>
    </div>
  )
}

export default UserBoard