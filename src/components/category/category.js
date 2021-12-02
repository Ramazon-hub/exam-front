import './category.css'
function Category({clinica,categories}){
    return(
      <li>
          {/* <h1>{clinica.clinic_name}</h1> */}
          {
            categories && categories.length &&(
              <ul>
                {categories.map((category)=>(
                  clinica.clinic_id === category.clinic_id &&(
                    <li>{category.category_name}</li>
                  )
                ))

                }
              </ul>
            )
          }
      </li>
    )
}
export default Category