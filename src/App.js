import './App.css';
import { useState } from 'react';

function App() {

  //מערך המוצרים שלי
  const products = [
    { id: 1, name: "Dior parfume", price: 439, img: "dior.png" },
    { id: 2, name: "YSL parfume", price: 560, img: "YSL.png" },
    { id: 3, name: "Chlo'e parfume", price: 300, img: "Chlo'e.png" },
    { id: 4, name: "Chanel parfume", price: 459, img: "Chanel.png" },
    { id: 5, name: "Idole parfume", price: 339, img: "Idole.png" },
    { id: 6, name: "Hermes parfume", price: 459, img: "Hermes.png" },
    { id: 7, name: "Tommy Hilfiger parfume", price: 400, img: "Tommy Hilfiger.png" },
    { id: 8, name: "Louis Vuitton parfume", price: 500, img: "Louis Vuitton.png" },
  ]

  //המערך אותו מציגים למסך
  const [filteredProduct, setFilteredProduct] = useState(products)


  //משתנה להוספת מוצר-שם
  const [nameValue, setNameValue] = useState("")
  //משתנה להוספת מוצר-מחיר
  const [priceValue, setPriceValue] = useState("")
  //משתנה לחיפוש
  const [searchValue, setSearchValue] = useState("")


  //מערך המוצרים של העגלה
  const [cartProducts, setCartProducts] = useState([]);
  //משתנה להוספת מוצר-שם לעגלה
  // const [cartNameValue, setCartNameValue] = useState("")
  // //משתנה להוספת מוצר-מחיר לעגלה
  // const [cartPriceValue, setCartPriceValue] = useState("")

  {/* הכנה לרינדור מותנה עבור הוספת מוצר לחנות */ }
  const [user, setUser] = useState("manager")

  // הכנה לרינדור מותנה עבור הצגת הודעה מתאימה כשהסל ריק
  const [cart, setCart] = useState([]);

  // הכנה לרינדור מותנה עבור הזמן
  const [time, setTime] = useState("morning")



  //פונקציות


  //יצירת פונקציית חיפוש לפי המוכנס באינפוט המתאים
  const search = (txt) => {
    setSearchValue(txt);
    const filteredArr = products.filter(p => p.name.includes(txt) || p.price.toString().includes(txt));
    console.log(filteredArr);
    setFilteredProduct(filteredArr)

  }


  //הוספת מוצר לחנות לפי מה שהוכנס באינפוטים
  const addProduct = () => {
    const newProduct = {
      id: products[products.length - 1].id + 1,
      name: nameValue,
      price: priceValue
    }
    //עריכת מערך המוצרים - משכפלת כל מה שקיים בו ומוסיפה מוצר חדש
    // setFilteredProduct([...products, newProduct])
    products.push(newProduct);
    setFilteredProduct([...products]);
    setSearchValue("")

  }


  //מחיקת פריט מהמסך
  const deleteItem = (id) => {
    //מציאת האינדקס של האיבר למחיקה
    const index = products.findIndex(p => p.id == id)
    //שכפול המערך המקורי
    const modifiedArr = [...products]
    //מחיקת האיבר הנוכחי בלבד מהמערך המשוכפל מהאינדקס 
    modifiedArr.splice(index, 1)
    //עדכון המערך המקורי
    setFilteredProduct(modifiedArr);
  }


  //הוספת מוצר לעגלה
  const addProductToCart = (p) => {
    setCartProducts([...cartProducts, p]);
    
  };


  //מחיקת פריט מהמסך
  const deleteCartItem = (id) => {
    //מציאת האינדקס של האיבר למחיקה
    const index = cartProducts.findIndex(p => p.id == id)
    //שכפול המערך המקורי
    const modifiedArr = [...cartProducts]
    //מחיקת האיבר הנוכחי בלבד מהמערך המשוכפל מהאינדקס 
    modifiedArr.splice(index, 1)
    //עדכון המערך המקורי
    setCartProducts(modifiedArr);
  }




  return (
    <div>

      <h1>PARFUME</h1>
      <hr />
      <h3>טוב לראותך פה! {time == "morning" ? "בוקר טוב" : time == "noon" ? "צהריים טובים" : "לילה טוב"}      </h3>
      <form>
        <div>

          {/* {alert(user)} */}

          <button className='time' onClick={(event) => { event.preventDefault(); setTime("morning")}}>בוקר</button>
          <button className='time' onClick={(event) => { event.preventDefault();setTime("noon")}}>צהריים</button>
          <button className='time' onClick={(event) => { event.preventDefault();setTime("evening")}}>ערב</button>

          <span>חיפוש מוצר</span>
          <input id='search' onChange={(event) => search(event.target.value)} value={searchValue} />

          {/* הכנה לרינדור מותנה עבור הוספת מוצר לחנות */}
          <button className='use' onClick={(event) => { event.preventDefault(); setUser("manager")}}>מנהל</button>
          <button className='use' onClick={(event) => { event.preventDefault(); setUser("user")}}>משתמש</button> 

        </div>
      </form>


      <div className="products-list">
        {
          //רנדור המערך כדי להפוך כל ערך במערך לתצוגה
          filteredProduct.map(p => <div className="products">
            <h4 className='name' >{p.name}</h4>
            <p className='price' >{p.price} ש"ח</p>
            <img src={'./images/' + p.img} alt='parfume image' /><br></br>
            <button onClick={() => { addProductToCart(p) }} >הוספה לסל</button>
            <button className='btn' onClick={() => { deleteItem(p.id) }} >הסרת מוצר</button>
            {/* <button type='button' onClick={() => { addProductToCart() }}>הוסף לעגלה</button> */}

          </div>
          )
        }


        <hr />
      </div>
      <footer>
        {user === "manager" && <form>
          <div>
            <h2>הוספת מוצר לחנות</h2>
            {/* כשמקלידים באינפוט - אונצ'יינג' - תכניס את הטקסט החדש מהאינפוט למשתנה */}
            <input type='text' onChange={(event) => { setNameValue(event.target.value) }} value={nameValue} placeholder='שם מוצר' />
            <input type='text' onChange={(event) => { setPriceValue(parseInt(event.target.value)) }} value={priceValue} placeholder='מחיר מוצר' />
            <button className='single_btn' type='button' onClick={() => { addProduct() }}>הוסף מוצר</button>
          </div>
        </form>
        }



        {/* עגלה */}

        {/* לבדוק את העגלה ואת התיקון שעשיתי בה */}
        <div className='cart'>
          <hr />
          <h2>העגלה שלי</h2>
          <ul>
            {cartProducts.length === 0 ? (
              <bbb>העגלה שלך ריקה, בואו נתחיל...</bbb>
            ) : (
              cartProducts.map(item => (
                <li key={item.id}>
                  {item.name} - {item.price} ש"ח
                  <button className='single_btn' onClick={() => deleteCartItem(item.id)}>הסר</button>
                </li>
              ))
            )}
          </ul>
        </div>


      </footer>
    </div>
  );
}

export default App;

//כניסת  מנהל משתמש { event.preventDefault();}?????לא עבד אלא אם הוספתי את זה
//למה אי אפשר להוסיף מוצרים לחנות בצורה טובה
//פונקציית חץ
//עגלה הסבר


