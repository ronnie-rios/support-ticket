import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'


function Login() {
  const [formData, setFormData] = useState({
  
    email: '',
    password: '',
  
  })

  const {  email, password } = formData

  //intiializing state
  const dispatch = useDispatch()

  //bring in state, and then change it to the state.auth
  //brings it from the global state
  const { user, isLoading, isSuccess, message } = 
    useSelector(
      (state) => state.auth)

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //getting the local state
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              className="form-control"
              id="email"
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Please enter your email'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control"
              id="password"
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Please enter your password'
              required 
            />
          </div>
          <div className="form-group">
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login