import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prev) =>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault() 
    if (password !== password2) {
      toast.error('passwords do not match')
    }
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
              name={name}
              value={name}
              onChange={onChange}
              placeholder='Please enter your name'
              required 
            />
          </div>
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
            <input 
              type="text" 
              className="form-control"
              id="name"
              name={password2}
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