import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomeCustomer from './components/Pages/Home-Customer/HomeCustomer';
import Products from './components/Pages/Products';
import Orders from './components/Pages/Orders';
import InvoiceInfo from './components/Pages/InvoiceInfo';
import MaintenancePrograms from './components/Pages/MaintenancePrograms';
import PortalInfo from './components/Pages/PortalInfo';
import EditCustomer from './components/Pages/Home-Customer/Edit/EditofCustomer'

const App = () => {
  return (
    <div className="App">
     <NavBar/>

     <Switch>
          <Route exact path='/' component={HomeCustomer}/>
          <Route path='/products' component={Products}/>
          <Route path='/orders' component={Orders}/>
          <Route path='/invoiceInfo' component={InvoiceInfo}/>
          <Route path='/maintenancePrograms' component={MaintenancePrograms}/>
          <Route path='/portalInfo' component={PortalInfo}/>
          <Route path='/editCustomer' component={EditCustomer}/>
        </Switch>

    </div>
  );
}

export default App;
