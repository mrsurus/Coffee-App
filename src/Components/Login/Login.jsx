import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const {name, Login, googleLogIn}  = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    console.log(name);
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        Login(email,password)
        .then(res =>{
            console.log(res.user);
            Swal.fire(
                'Good job!',
                'Log In Successful!',
                'success'
              )
            navigate(from, {replace: true})
           
              
        })
        .catch(err => console.log(err))

    }

    const handleGoogleLogIn= ()=> {
        googleLogIn()
        .then(res => {
            console.log(res.user)
            Swal.fire(
                'Good job!',
                'Log In Successful!',
                'success'
              )
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-center text-3xl mt-5 font-bold'>Log In Now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            New to this site? <Link to='/register' className='text-blue-500'>Sign Up</Link>
                        </div>
                        
                    </form>
                    <div className="form-control my-4 mx-8">
                            <button onClick={handleGoogleLogIn} className="btn btn-success ">Google Log In</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;