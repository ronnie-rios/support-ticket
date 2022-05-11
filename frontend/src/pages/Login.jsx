import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
  
    email: '',
    password: '',
  
  })

  const {  email, password, pa } = formData

  const onChange = (e) => {
    setFormData((prev) =>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault() 
    
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />Login
        </h1>
        <p>Please login </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              id="name"
              name={email}
              value={email}
              onChange={onChange}
              placeholder='Please enter your email'
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              id="name"
              name={password}
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