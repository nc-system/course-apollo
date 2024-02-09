
import './App.css'

// Components
import Monitor from './modules/clients/views/Monitor'
import Control from './modules/clients/views/Control'

import MonitorCylinder from './modules/cylinders/views/MonitorCylinder'
import ControlCylinder from './modules/cylinders/views/ControlCylinder'

function App() {

  return (
    <>
      <Monitor/>
      <hr/>
      <Control/>
      <br></br><br></br>
      <hr/>
      <MonitorCylinder/>
      <hr/>
      <ControlCylinder/>
      <hr/>
    </>
  )
}

export default App
