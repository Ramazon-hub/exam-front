import Category from "../../components/category/category"
import Clinica from "../../components/clinica/clinica"

import { useRef } from "react"
import useAuth from "../../hooks/authHook"
import { useHistory } from "react-router"
function Quee ({position,clinics,categories}){
    const [token] =useAuth()
    const history = useHistory()
    const selectClinic = useRef()
    const selectCategory = useRef()
    const ismFam = useRef()
    const phoneNumbers = useRef()
    const formSubmit =async (evt)=>{
        evt.preventDefault()
        // console.log(token);
        const queeData ={
            userId: token,
            userPhone:phoneNumbers.current.value,
            clinicId:selectClinic.current.value,
            categoryId:selectCategory.current.value
        }
        // console.log(queeData);
        const DATA = await fetch(`http://localhost:2000/quee`,{
            method:"POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify(queeData),
        })
        const res = await DATA.json();
        if (res) {
            history.push("/");
            alert(`Sizning navbatingiz  ${Number(res.count)+1}`)
          } else {
          
          }

        

        
    }

return(
    <div>
        <h1>NAVBAT OLISH</h1>
        <form onSubmit={formSubmit} >
           Ism Familyangiz : <input type="text" ref={ismFam}  />
           Phone Numbers: <input ref={phoneNumbers} />
                {clinics && clinics.length &&  (
                    <select  ref={selectClinic} >
                        {clinics.map(clinica=>(
                            <option value={clinica.clinic_id} >{clinica.clinic_name}</option>
                        ))
                        
                    }

                    </select>
                )}
                 {categories && categories.length && (
                    <select ref={selectCategory} >
                         {  categories.map(category=>(
                                        <option value={category.category_id} >{category.category_name}</option>

                                    
                              ))
                            
                         
                        }
                       

                    </select>
                )}
                <button type="submit" >Submit</button>
        </form>

    </div>
)
}
export default Quee