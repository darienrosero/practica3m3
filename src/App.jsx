import Butons from "./components/butons"
import Wrapper from "./components/wrapper/index"
import Input from "./components/input"
import { useEffect, useState } from "react"



function App() {

  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [porcentaje, setPorcentaje] = useState(0)
  const [totals, setTotals] = useState({tip: 0, total: 0}) 

  useEffect(() =>{
    if (people > 0 && porcentaje > 0 && bill > 0) {
      let tip = (bill * (porcentaje / 100)) / people
      let total = (bill * (porcentaje / 100) + bill) / people
      setTotals({tip: tip, total: total})
    }
  }, [bill, people, porcentaje])

  const cal = (e) => {
    let name = e.target.name
    let value = parseFloat(e.target.value)

    if (name === 'bill') {
      setBill(value)
    }

    if (name === 'people') {
      setPeople(value)
    }

    if (name === 'porcentage') {
      setPorcentaje(value)
    }

  }

  return (
    <>
      <header><img src="./images/logo.svg" alt="" /></header>
      <div className="general-wrapper">
        <div className="data-wrapper">

          <h1>Bill</h1>
          <Input id={'inpu-bill'} name={'bill'} value={bill} onChange={cal} />

          <h2>Select Tip %</h2>
          < Butons porcentage={porcentaje} setPorcentaje={cal} />
          <h2>Number of People</h2>
          <Input id={'inpu-bill'} name={'people'} value={people} onChange={cal} />

        </div>
        <Wrapper totals={totals} />
      </div>
    </>
  )
}

export default App
