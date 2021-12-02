import { Link } from 'react-router-dom'
import './Home.css'
const Home = ({position}) =>{
    return(
    
        <div className="wrapper">
          
                  <h1>HOME</h1>
                  <Link to='/clinics' >CLinics</Link>
                  <Link to='/login' >Login</Link>
                  <Link to='/register' >Register</Link>
                  {position && position ==='user' && (
                      <Link to='/quee'>Navbat</Link>
                  )}
                   {position && position ==='admin' && (
                      <Link to='/admin/users'>Users</Link>
                  )}
                   {position && position ==='admin' && (
                      <Link to='/admin/orders'>orders</Link>
                  )}
                  


             
        </div>
    )
}
export default Home