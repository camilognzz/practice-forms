import './App.css'
import { BinaryNumber } from './components/BinaryNumber'
import { DaysWeek } from './components/DaysWeek'
import { Degree } from './components/Degree'
import { Form } from './components/Form'
import { NumberOfCaracters } from './components/NumberOfCaracters'
import { Rubros } from './components/Rubros'

function App() {


  return (
    <div>
      <Rubros />
      <Degree />
      <DaysWeek />
      <NumberOfCaracters />
      <BinaryNumber />
      <Form />
    </div>
  )
}

export default App
