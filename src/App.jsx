import { useState, useEffect } from 'react'
import logo from './assets/SpaceX_Logo_Black.png' ;
import { HiCalendar } from 'react-icons/hi';
import * as API from './services/launches';
import './index.css';




export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);



  return (
    <>
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <img src={logo} width={300}alt="" className="" />
      <h1 className="text-3xl text-center">SpaceX Launches</h1>
    </div>
    <ul className="flex flex-col justify-center items-center ">
      {launches.map(launch => (
        <li key={launch.flight_number} className="m-2 w-11/12 h-40 rounded bg-sky-100 flex flex-col items-center justify-center md:w-3/5 md:h-44 lg:w-1/3">
          <div className='w-full h-auto flex items-center  justify-between gap-2'>
          <p className="text-base ml-4 w-13 text-wrap max-w-180 lg:max-w-full">Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})</p>
          <div className={launch.launch_success ? 'w-24 h-10 bg-green-600  rounded mr-5 flex items-center justify-center' : 'w-24 h-10 bg-red-600  rounded mr-5 flex items-center justify-center'} id="boton-color">
            {launch.launch_success ? "Success" : "Failure"}
          </div>
          </div>
          <div className='w-full h-8 mt-5 flex items-center ml-10'>
            <HiCalendar />
            <p className='ml-2'>{launch.launch_date_local.split("T")[0]}</p>
          </div>
          <div className="w-full mt-1">
          <button className="border rounded bg-purple-400 w-28 h-10 ml-5">
            More Details
            </button>
            </div>
        </li>
        
      ))}
    </ul>
    </>
  )
}

export default App
