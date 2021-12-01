import './Clinic.css'
import Clinica from '../../components/clinica/clinica';
const Clinics = ({ clinics }) =>{
    console.log(clinics);
    return(
    
        <div className="wrapper">
            <div className="sidebar-wrapper">
            </div>
            <div className="posts-wrapper">
                <div className="posts-wrapper-top">
                    <h1>Clinics</h1> 
                   {  clinics.clinics && clinics.clinics.length && <ul>
                            {
                            clinics.clinics.map((clinica,i) => (
                             <Clinica key={i} clinica={clinica} clinics={clinics}  />
                                )  )
                            }
                            </ul>  }                  
                </div>
            </div>
        </div>
    )
}
export default Clinics