import './clinica.css'
function Clinica({clinica,clinics}){
    console.log(clinica,'kl');
    return(
      <li>
          <h1>{clinica.clinic_name}</h1>
          {
            clinics.categories && clinics.categories.length &&(
              <ul>
                {clinics.categories.map((category)=>(
                  <li>{}</li>
                ))

                }
              </ul>
            )
          }

      </li>
    )
}
export default Clinica