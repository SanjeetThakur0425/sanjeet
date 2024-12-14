import{useState} from 'react'
import'./App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import axio from 'axios'

function App(){
  const[name,setName]=useState()
  const[email,setEmail]= useState()
  const[password,setPassword]=useState()

  const handleSubmit=(e)=> {
    e.preventDefult();
    axio.post("http://localhost:3001/register",{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  }
  return(

<div className="d-flex justify-content-center align-items-center bg-primary vh-100">
  <div className ="bg-white p-3 rounded w-25">
    <h2> Register </h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email">
          <strong> Name</strong>

           </label>
           <input 
           type="text"
           placeholder="Enter the name"
           autoComplete="off"
           name="email"
           className="form-control rounded-0p"
           onChange={(e) => setName(e.target.value)}
           
           
           />
           </div>
           <div className="mb-3">
            <label htmlFor="email">
              <strong> Email</strong>

            
            </label>
            <input
            type="email"
           placeholder="Enter the email"
           name="email"
           autoComplete="off"
           className="form-control rounded-0p"
           onChange={(e) => setEmail(e.target.value)}
           />
          

           </div>

           <div className="mb-3">
            <label htmlFor="email">
              <strong> password</strong>

            
            </label>
            <input
            type="password"
           placeholder="Enter the password"
           name="password"
           className="form-control rounded-0p"
           onChange={(e) => setPassword(e.target.value)}
           
           />
            

           </div>
           <button type="submit" className="btn btn-success w-100 rounded-0">
            Register


           </button>
           <p> Already Have an Account </p>
           <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration -none">
            Login
           </button>
    
    </form>

  </div>

</div>

  );
}
export default App