import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  //destructure form data
  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //bring in state, and then change it to the state.auth
  //brings it from the global state
  const { user, isLoading, isError, isSuccess, message } = 
  //takes in a function with the state and the state you want to maniupulate
    useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    //redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault() 
    if (password !== password2) {
      toast.error('passwords do not match')
    } else { 
      const userData = {
        name,
        email,
        password
      }
      //dispatch the register func from authSlice to our asyncthunk
      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an acoount</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              id="name"
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Please enter your name'
              required 
            />
          </div>
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
            <input 
              type="password" 
              className="form-control"
              id="password2"
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Please confirm your password'
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

export default Register