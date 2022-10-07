 
import './App.css';
import Chart from './component/Chart/Chart';
import Navbar from './component/Navber/Navbar';
import PhoneChart from './component/PhoneChart/PhoneChart';
import PricePlan from './component/PricePlan/PricePlan';

function App() {


  return (
    <div className='App mx-6'>
       <Navbar></Navbar>
       <PricePlan></PricePlan>
       <Chart></Chart>
       <PhoneChart></PhoneChart>
    </div>
  );
}

export default App;
