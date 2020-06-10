import React from "react";
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const Category = props => {
  const categories = props.categories

  
    return (
      <div>
        <DropdownButton>
          {categories.map(categories => (
            <Dropdown.Item as='button'>{categories.name}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    );  
}

const mapStateToProps = state => {
  return {
      categories: state.categories
  }    
}

export default withRouter(connect(mapStateToProps)(Category))