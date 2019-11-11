import React from 'react';
import { withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'
import './Menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: this.props.userData,
      dropdownOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  logout = evt => {
    evt.preventDefault()

    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className='dropButton'>
          <i className="fas fa-bars fa-lg"></i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{this.state.userData.username}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.logout}><i className="fas fa-sign-out-alt icon"></i>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
})

export default withRouter(connect(mapStateToProps)(Menu))