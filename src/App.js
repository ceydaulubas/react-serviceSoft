import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Customers from './components/Pages/Home-Customers';
import Products from './components/Pages/Products';
import Orders from './components/Pages/Orders';
import InvoiceInfo from './components/Pages/InvoiceInfo';
import MaintenancePrograms from './components/Pages/MaintenancePrograms';
import PortalInfo from './components/Pages/PortalInfo';

const App = () => {
  return (
    <div className="App">
     <NavBar/>

     <Switch>
          <Route exact path='/' component={Customers}/>
          <Route path='/products' component={Products}/>
          <Route path='/orders' component={Orders}/>
          <Route path='/invoiceInfo' component={InvoiceInfo}/>
          <Route path='/maintenancePrograms' component={MaintenancePrograms}/>
          <Route path='/portalInfo' component={PortalInfo}/>
        </Switch>

    </div>
  );
}

export default App;
