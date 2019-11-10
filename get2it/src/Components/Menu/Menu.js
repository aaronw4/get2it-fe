import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'
import './Menu.css'

function Menu(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(prevState => !prevState)
  }

  const logout = evt => {
    evt.preventDefault()

    localStorage.removeItem('token')
    props.history.push('/login')
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className='dropButton'>
        <i className="fas fa-bars fa-lg"></i>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{props.userData.username}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={logout}><i className="fas fa-sign-out-alt icon"></i>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
})

export default withRouter(connect(mapStateToProps)(Menu))