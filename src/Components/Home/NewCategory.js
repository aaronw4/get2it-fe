import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addCategory} from '../../actions'
import {Button} from 'react-bootstrap'

class NewCategory extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            categoryName:""
        }
    }
    handleChange = e => {
        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const {addCategory, userData} = this.props;
        const id = userData.id;

        const payload = {
            name: this.state.categoryName
        }

        addCategory(payload, id)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => {
                console.error(err);                
            })
    }

    render() {
        return (
            <div className="newTaskContainer">
                <br/>
                <h1 className="newTaskHeader">Add New Category</h1>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label className='newTaskLableName'>
                        New Category Name:
                    </label>
                    <input
                        className='newTaskInput'
                        type='text'
                        name='categoryName'
                        onChange={this.handleChange}
                        required
                    />
                    <div className='completeBtnContainer'>
                        <Button className='completeBtn-create' type='submit'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.userData
})

const mapDispatchToProps = {
    addCategory
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCategory))