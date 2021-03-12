import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Checklists from './pages/Checklists'
import Equipments from './pages/Equipments'
import Navbar from './components/Navbar'
import ArrState from './components/home/ArrState'
import EquipmentList from './components/equipment/selectList'
import CheckList from './components/checklist/checklist'

function App() {
  return (
    <CheckList>
      <EquipmentList>
        <ArrState>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/checklists'} component={Checklists}/>
              <Route path={'/equipments'} component={Equipments}/>
            </Switch>
          </BrowserRouter>
        </ArrState>
      </EquipmentList>
    </CheckList>
  );
}

export default App;
