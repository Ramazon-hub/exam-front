import './Clinic.css'
import Clinica from '../../components/clinica/clinica';
const Clinics = ({ data }) =>{
    console.log(data);
    
    return(
    
        <div className="wrapper">
            <div className="sidebar-wrapper">
            </div>
            <div className="posts-wrapper">
                <div className="posts-wrapper-top">
                    <h1>Clinics</h1> 
                   {  data.clinics && data.clinics.length && <ul>
                            {
                            data.clinics.map((clinica,i) => (
                             <Clinica key={i} clinica={clinica} data={data}  />
                                )  )
                            }
                            </ul>  }                  
                </div>
            </div>
        </div>
    )
}
export default Clinics