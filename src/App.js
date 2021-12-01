import './App.css';
import  { Switch,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Clinics from './pages/clinics/Clinics';
import Error from './pages/Error/error';


import Public from './routes/Public';
import Private from './routes/Private';

function App() {
  const [clinics, setClinics] = useState({});
  useEffect(() => {
    (async () => {
      const DATA = await fetch("http://localhost:2000/clinics");
      const data = await DATA.json();

      if (data.clinics && data.categories) {
        setClinics(data)
        // console.log(data,'if');
      }
    })();

  }, []);

  return (
    <div className="App">
          <Switch>
                    <Public path='/'  exact >
                        <Home  />
                    </Public>

                    <Public path='/login' component={Login} />

                    <Public path='/clinics'>
                        <Clinics clinics={clinics}  />
                    </Public>  

                    <Public path='/register' component={Register} />
                    <Route path="*" component={Error} />    
            </Switch>
    </div>
  );
}

export default App;
