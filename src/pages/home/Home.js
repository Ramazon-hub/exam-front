import { Link } from 'react-router-dom'
import './Home.css'
const Home = () =>{
    return(
    
        <div className="wrapper">
          
                  <h1>HOME</h1>
                  <Link to='/clinics' >CLinics</Link>
             
        </div>
    )
}
export default Home