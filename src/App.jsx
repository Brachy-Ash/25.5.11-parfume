import { useState } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
// import UserBoard from './components/Products';
// import Change from './components/Products';
import Messege from './components/Messege';
import Wallet from './components/Wallet';
import UserBoard from './components/UserBoard';
import SingleProduct from './components/SingleProduct';



function App() {

  //הגדרת משתנים

  //מערך המוצרים שלי
  const [productsArr, setproductsArr] = useState([
    { id: 1, code: 100, name: "Coka-Cola", price: 10, img: 'deafault.jpg' },
    { id: 2, code: 101, name: "Coka-Cola zero", price: 11, img: 'deafault.jpg' },
    { id: 3, code: 102, name: "Coka-Cola lemon", price: 9, img: 'deafault.jpg' },
    { id: 4, code: 103, name: "Coka-Cola Coffee", price: 13, img: 'deafault.jpg' },
    { id: 5, code: 104, name: "Coka-Cola ice-coffee", price: 15, img: 'deafault.jpg' },
    { id: 6, code: 105, name: "Nes-tea", price: 7, img: 'deafault.jpg' }
  ])

  //הגדרת משתנה לטקסט הודעה
  const [txtMessege, setTxtMessege] = useState("")

  //הגדרת משתנה לממתק תוצאה
  const [result, setResult] = useState("")

  //הגדרת משתנה לסכום כסף בארנק
  const [sumInWallet, setSumInWallet] = useState(0)

  //הגדרת משתנה לעודף
  const [changeSum, setChangeSum] = useState(0)




  //פונקציות

  //פונקציה למחיקת המוצר מהרשימה כשמישהו קונה
  const removePrFromLPist = (id) => {
    setproductsArr([...productsArr.filter(p => p.id != id)])
  }


  //פונקציית קניית מוצר
  const buyProduct = (code) => {
    alert('You choose: ${product.name}  product code: ${product.code}' )

  }


  return (<>
    <h2>קוקה קולה טעם החיים</h2>
    <div className='right'>
      <div className='messege'><Messege /></div>
      <div className='UserBoard'><UserBoard setResult={setResult} result={result} setproductsArr={setproductsArr} productsArr={productsArr}/></div>
      <div className='change'></div>
    </div>
    <div className='left'>
    <div className='products'>
      <ProductsList prList={productsArr} buyPr={buyProduct} />
    </div>
          <div className='coins'></div>

    </div>
    <footer className='wallet'>
      <Wallet />
    </footer>
  </>
  );
}

export default App;



//שיעור 8
//יש להפעיל את התהליך של רכישת מוצר(פונקציה שמוחקת מוצר מהמכונה כאשר נלחץ על כפתור קנה)
//שדרוגים
//העברת הסכום שנמצא במטבעות
//עדכון ההודעה
//עדכון הארנק


//שיעור 7
//בראשי: מערך מוצרים, טקסט הודעה, ממתק תוצאה, סכום כסף בארנק, עודף
//במטבעות ובקוד זה משתנים פנימיים יש לפתח לוגיקה משלהם
//יש להעביר ע"י פרופס
//אתגר: צרי קומפוננטה נוספת בשם כרטיס מוצר השתמשי בה בתוך קומפוננטה מוצרים הקומפוננטה תקבל את המידע שהיא מציגה
