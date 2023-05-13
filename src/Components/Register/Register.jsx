import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Register() {
    const { createUser, updateNamePhoto, } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'



    const handleSignUp = (e) => {
        setError('')
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        const name = form.name.value;
        const photo = form.photo.value;




        createUser(email, password)
            .then(res => {
                Swal.fire(
                    'Good job!',
                    'Registation Succesfull!',
                    'success'
                )
                navigate(from, { replace: true })
                updateNamePhoto(name, photo)
                    .then(res => console.log('display uppdates'))
                    .catch(err => console.log(err))
            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                        <p className="py-6">Register our website to review and get the best tips about photography.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            {error && <p className='text-red-500'>Error: {error.slice(22,42)}</p>}
                            <div className="form-control mt-6">
                                <input className='btn' type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <p className='text-center'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
