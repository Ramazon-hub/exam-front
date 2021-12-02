import './App.css';
import  { Switch,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Clinics from './pages/clinics/Clinics';
import Error from './pages/Error/error';
import Quee from './pages/quee/Quee';
import Users from './pages/users/users';
import Orders from './pages/orders/order';

import Public from './routes/Public';
import Private from './routes/Private';
import useAuth from './hooks/authHook';

function App() {
  const [data, setData] = useState({});
  const [position,setPosition] = useState()
  const [quees,setQuees] = useState({})
  const [token] = useAuth()
  useEffect(() => {
    (async () => {
      const DATA = await fetch("http://localhost:2000/",{
        method:"GET",
        headers: {
          "Content-Type": "Application/json",
          token,
        },
      });
      const data = await DATA.json();

      if (data.clinics && data.categories && data.quees) {
        setData(data)
        console.log(data);
      }
    })();

  }, []);

  return (
    <div className="App">
          <Switch>
                    <Public path='/'  exact >
                        <Home position={position} />
                    </Public>

                    <Public path='/login' >
                      <Login setPosition={setPosition} />
                    </Public>

                    <Public path='/clinics'>
                        <Clinics data={data}  />
                    </Public>  

                    <Public path='/register'>
                        <Register setPosition={setPosition}  />
                    </Public>
                    <Private path='/quee' >
                        <Quee clinics={data.clinics} categories={data.categories} />
                    </Private>
                    <Private path='/admin/users' >
                        <Users  />
                    </Private>
                    <Private path="/admin/orders" >
                        <Orders quees={data.quees} />
                    </Private>
                    <Route path="*" component={Error} />    
            </Switch>
    </div>
  );
}

export default App;
