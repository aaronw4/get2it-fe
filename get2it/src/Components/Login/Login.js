import React from 'react'
import '../Register/Register.css'
import logo from '../Images/logo.png'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, showPassword } from '../../actions'
import Spinner from '../Spinner/Spinner.js'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const { email, password } = this.state

    this.props.login(email, password)
      .then(() => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.error(err.error)
      })
  }

  handleClick = (evt) => {
    evt.preventDefault()

    this.props.showPassword()
  }

  render() {
    const { email, password } = this.state
    const { isLoading, error, showPW } = this.props

    return (
      <>
        {isLoading ? <Spinner /> : 
          <div className='register'>
            <h3 className='pageTitle'>Sign In</h3>
            <img className='registerLogo' src={logo} alt='get2it' />
            <form className='registerForm' onSubmit={this.handleSubmit}>
              {error && error === 'Invalid Credentials' ?
                <><p className='error'>{error}</p><br /> <p className='error'>Please try again or create a new account.</p></> : null
                }

              <div className='inputContainer'>
                <label to='email'><i id='registerIcon' className="far fa-user-circle"></i></label>
                <input type='text' id='email' name='email' placeholder='email' value={email} onChange={this.handleChange} required /><br />
              </div>
              <div className='inputContainer'>
                <label to='password'><i id='registerIcon' className="fas fa-unlock-alt"></i></label>
                {
                  showPW === false ? 
                    <>
                      <input type='password' id='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} required /><br />
                      <button onClick={this.handleClick}>Show Password</button>
                    </>
                  :
                    <>
                      <input type='text' id='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} required /><br />
                      <button onClick={this.handleClick}>Hide Password</button>
                    </>
                }
              </div>

              <button className='registerButton' type='submit'>Login</button>
            </form>
            <p className='loginMessage'>DON'T HAVE AN ACCOUNT? <Link className='loginLink' to='/register'>SIGN UP</Link></p>
          </div>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
  showPW: state.showPW
})

const mapDispatchToProps = {
  login,
  showPassword
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)
)