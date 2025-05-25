import React, { useState } from 'react'

const Messege = () => {

  const [customer, setCustomer] = useState("")

  return (
    <div>
      <h2>ברוך הבא ל{customer}</h2>
      <input type="text" placeholder='הכנס שם לקוח' value={customer} onChange={(e) => setCustomer(e.target.value)} />
    </div>
  )
}

export default Messege