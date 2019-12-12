import React from 'react'
import { Link } from 'react-router-dom'
import EditTask from '../editTask/EditTask'

const EditTaskModal = ({ location }) => {
  const { state = {} } = location
  const { modal } = state
  
  const modalClass = modal ? 'edittaskModal' : undefined

  return (
    <div className={editmodalClass}>
      {modal && <Link className='closeLink' to='/'>Close</Link>}
      <div>
        <EditTask />
      </div>
    </div>
  )
}

export default EditTaskModal