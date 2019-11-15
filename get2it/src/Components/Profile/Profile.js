import React from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from '../../actions.js'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    const { username } = this.props.userData
    this.state = {
      username: username,
      password: '',
    }
  }

  updatedProfile = evt => {
    evt.preventDefault()

    const payload = {
      id: this.props.userID,
      username: this.state.username,
      password: this.state.password
    }

    const id = this.props.userID

    this.props.updateUser(payload, id)

    this.props.history.push('/')
  }

  handleChange = evt => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { username, password } = this.state;
    const { isLoading, error } = this.props;

    return (
      <div className="profile">
        <h3 className="pageTitle">Profile</h3>
        <i className="fas fa-user-circle profileImg"></i>
        <form className="registerForm" onSubmit={this.updatedProfile}>
          {error && <p className="error">{error}</p>}

          <div className="inputContainer">
            <label to="username">
              <i id="registerIcon" className="far fa-user-circle"></i>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
              required
            />
            <br />
          </div>
          <div className="inputContainer">
            <label to="password">
              <i id="registerIcon" className="fas fa-unlock-alt"></i>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <br />
          </div>

          {isLoading ? (
            <p>Getting account, please wait...</p>
          ) : (
            <button className="registerButton" type="submit">
              Update Profile
            </button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  userID: state.userID,
});

const mapDispatchToProps = {
  updateUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));