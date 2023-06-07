import "./Login.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
const Login = () => {
  const {signIn} = useContext(AuthContext)
  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
   .then(result=>{
    const loginUser = result.user;
    form.reset()
    if(loginUser){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login SuccessFully',
            showConfirmButton: false,
            timer: 1500
          })                  
        }
   })
   .catch(error=>{
    form.reset()
    if(error){
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text:`${error}`
        })
      }
   })
   
}

  return (
    <div className="hero min-h-screen login-item">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm">
          <form onSubmit={handleLogin}>
            <div className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
               <input className="btn-primary" type="submit" value="Login" />
              </div>
              <p className="mt-3 text-white">
                <small>New Here ?</small> <Link to="/signUp"><span className="text-lime-500 font-semibold"> Sign Up</span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
