import { useParams } from "react-router-dom"

const Users=()=>{
    const {id}=useParams();
     
    return (
       <div style={{backgroundColor:'rebeccapurple',padding:'20px',borderRadius:'5px',color:'black'}}>
            <h4>Your Users ID : {id}</h4>
       </div>
    )
}
export default Users;