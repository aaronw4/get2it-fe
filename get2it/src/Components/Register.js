// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

// const Register = (props) => {
//   return (
//     <Form>
//       <FormGroup className='formGroup' row>
//         <Col sm='2'>
//           <Label for="username"><i className="far fa-user-circle"></i></Label>
//         </Col>
//         <Col sm='auto'>
//           <Input type="text" name="username" id="username" placeholder="Username" />
//         </Col>
//       </FormGroup>
//       <FormGroup className='formGroup' row>
//         <Col sm={2}>
//           <Label for="examplePassword"><i className="fas fa-unlock-alt"></i></Label>
//         </Col>
//         <Col sm='auto'>
//           <Input type="password" name="password" id="examplePassword" placeholder="Password" />
//         </Col>
//       </FormGroup>
//       <Button>Continue</Button>
//     </Form>
//   )
// }
import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { createUser } from '../actions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
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

    const { username, password } = this.state

    this.props.createUser(username, password)
      .then(() => {
        !this.props.error &&
          this.props.history.push('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }
  render() {
    console.log(this.props)
    const { username, password } = this.state
    const { isLoading, error } = this.props

    return (
      <div className='register'>
        <form className='registerForm' onSubmit={this.handleSubmit}>
          {error && <p className='error'>{error}</p>}
          
          <label to='username'><i className="far fa-user-circle"></i></label>
          <input type='text' id='username' name='username' placeholder='Username' value={username} onChange={this.handleChange} /><br />
          <label to='password'><i className="fas fa-unlock-alt"></i></label>
          <input type='password' id='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} /><br />

          {isLoading ? <p>Creating account, please wait...</p> : <button className='registerButton' type='submit'>Create Account</button>}
        </form>
        <p className='loginLink'>Already a member? Click <Link to='/login'>here</Link> to login.</p>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   isLoading: state.isLoading,
//   error: state.error,
// })

// const mapDispatchToProps = {
//   createUser,
// }

export default withRouter(
  connect(/*mapStateToProps, mapDispatchToProps*/)(Register)
)