import React from "react";
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { Dropdown, DropdownButton } from 'react-bootstrap';

class Category extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.categoryName
    };
  }

  categories = this.props.categories  

  render() {
    return (
      <div className='catTaskForm'>
        {
          this.state.name === '' ? 
          <p className='catTaskFormP'>Category: {this.props.categoryName}</p> :
          <p className='catTaskFormP'>Category: {this.state.name}</p>
        }        
        
        <DropdownButton
          id='dropdown-item-button'
          data-testid='catButton'
          onClick = {evt => evt.preventDefault()}
        >
          {this.categories.map(categories => (
            <Dropdown.Item 
              as='button' 
              value={categories.id}
              onClick={() => {
                this.setState({name: categories.name});
                this.props.setCategoryID(categories.id);
              }}
            >
                {categories.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    );  
}}

const mapStateToProps = state => {
  return {
      categories: state.categories
  }    
}

export default withRouter(connect(mapStateToProps)(Category))