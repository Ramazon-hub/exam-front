import Category from '../category/category';
import './clinica.css'
function Clinica({clinica,data}){
    console.log(data,'kl');
    return(
      <li>
          <h1>{clinica.clinic_name}</h1>
          <p>{clinica.clinic_rate}</p>
          <p>{clinica.clinic_adres}</p>
          <Category categories={data.categories} clinica={clinica} />
         

      </li>
    )
}
export default Clinica