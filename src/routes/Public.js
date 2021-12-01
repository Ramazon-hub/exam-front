import { Route,Redirect} from "react-router-dom"
import useAuth from "../hooks/authHook"
import { useLocation } from "react-router"

function Public(props){
   const [token] = useAuth()
   const {pathname} = useLocation()
   if(token &&( pathname==='/login' || pathname==='/register')){
    return <Redirect to="/"/>
   }
     return  <Route {...props}/>
   
}

export default Public