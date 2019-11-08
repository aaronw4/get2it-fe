import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Menu() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => {
    setDropdownOpen(prevState => !prevState)
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <i class="fas fa-bars"></i>
      </DropdownToggle>
    </Dropdown>
  )
}

export default Menu