import { useEffect, useState } from 'react'
import './App.css'
import { apis } from './companent/api'

function App() {
  const [data, setData] = useState([])
  const appdata = ()=> {
    apis.get()
    .then((res) =>{
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(()=> {
    appdata()
  }, [])

  console.log(data[1].title);
  return (
    <>
      <div className="container">
        <div className="cart-wrapper">
          {data?.map((item) => {
            console.log(item.title);
            <div className="card">
              <h1>salom</h1>
            </div>
          })}
          <h1></h1>
        </div>
      </div>
    </>
  )
}

export default App