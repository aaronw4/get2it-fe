import React, {Component } from 'react'



class Clock extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			time: new Date()
		}
		
	}
	
	componentDidMount() {
		
		setInterval(this.update, 1000)
		
	}
	
	update = () => {
		
		this.setState({
			time: new Date()
		})
		
	};
	
	render() {
		
		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()
		
		return (
		
			<h1>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'am' : 'pm'}</h1>
		
		)
		
	}
	
}

export default Clock;



// const tasks = [
//     {
//       id: 1,
//       description: 'Get out of bed',
//       deadline: '2017-09-11',
//       done: true
//     },
//     {
//       id: 2,
//       description: 'Brush teeth',
//       deadline: '2017-09-10',
//       done: false
//     },
//     {
//       id: 3,
//       description: 'Eat breakfast',
//       deadline: '2017-09-09',
//       done: false
//     }
//   ];
//   function TaskItem({ task, removeTask, toggleMarked }) {
//     return (
//       <li className="collection-item">
//         <label>
//           <input
//             checked={task.done && 'checked'}
//             type="checkbox"
//             className="filled-in"
//             onChange={() => toggleMarked(task.id)}
//           />
//           <span className={task.done ? 'done' : ''}>{task.description}</span> | <span>{task.deadline}</span>
//         </label>
//         <span className="right red-text">
//           <i className="material-icons" onClick={() => removeTask(task.id)}>
//             highlight_off
//           </i>
//         </span>
//       </li>
//     );
//   }
  
//   function TaskList({ items, removeTask, toggleMarked }) {
//     const taskListUI = items.map(task => (
//       <TaskItem key={task.id} task={task} removeTask={removeTask} toggleMarked={toggleMarked} />
//     ));
  
//     return <ul className="collection">{taskListUI}</ul>;
//   }
  
//   function TaskAddForm({ addTask }) {
//     function onSubmit(e) {
//       e.preventDefault();
//       const newTaskDesc = e.target.description.value;
//       const newTaskDate = e.target.deadline.value;
//       console.log('hello from onsubmit')
//       addTask(newTaskDesc, newTaskDate);
//     }
  
//     function onfocus(e) {
//       const datepicker = e.target;
//       M.Datepicker.init(datepicker, { format: 'yyyy-mm-dd' });
//     }
  
//     return (
//       <div className="row">
//         <form className="col s12" name="form" onSubmit={onSubmit}>
//           <div className="row">
//             <div className="input-field col s5">
//               <input id="description" name="description" type="text" />
//               <label htmlFor="description">Description</label>
//             </div>
//             <div className="input-field col s5">
//               <input onFocus={onfocus} className="datepicker" id="deadline" name="deadline" type="text" />
//               <label htmlFor="deadline">Deadline</label>
//             </div>
//             <div className="input-field col s2">
//               <button className="btn-floating waves-effect waves-light teal" type="submit">
//                 <i className="material-icons">add</i>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
  
//   class NewTask extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         tasks,
//         lastId: tasks.length
//       };
//       this.removeTask = this.removeTask.bind(this);
//       this.toggleMarked = this.toggleMarked.bind(this);
//       this.addTask = this.addTask.bind(this);
//     }
  
//     addTask(description, deadline) {
//     //   // I any field is empty, send user a notification message without adding the task
//     // if (description === '' || deadline === ''){
//     //     //  M.toast({ html: 'Please fill all the fields!', classes: 'red darken-4' });
//     //      return
//     // }
//     const newTask = {
//       id: 1,
//         description,
//         deadline,
//         done: false
//     }
//       console.log(newTask)
//       this.setState({ tasks:[...this.state.tasks,newTask]});
//     }
  
//     removeTask(id) {
//       const newTasks = this.state.task.filter(task => task.id !== id);
//       this.setState({ tasks: newTasks });
  
//       // After removing send notification
//       M.toast({ html: 'Task removed!', classes: 'red darken-4' });
//     }
  
//     toggleMarked(id) {
//       const tasksCopy = [...this.state.tasks];
//       const task = tasksCopy.find(task => task.id === id);
  
//       task.done = !task.done;
//       this.setState({ tasks: tasksCopy });
  
//       // After marking/unmarking send notification
//       task.done
//         ? M.toast({ html: 'Marked as done!', classes: 'blue darken-2' })
//         : M.toast({ html: 'Marked as undone!', classes: 'lime darken-2' });
//     }
  
//     render() {
//       return (
//         <div className="container">
//           <div className="row">
//             <div className="col s12 card" style={{ padding: '2em' }}>
//               <h4 className="bold center-align">New Task</h4>
//               <TaskAddForm addTask={this.addTask} />
//               {this.state.tasks.length === 0 ? (
//                 <p className="red-text center">Task list is empty. Lets add one!</p>
//               ) : (
//                 <TaskList items={this.state.tasks} removeTask={this.removeTask} toggleMarked={this.toggleMarked} />
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default NewTask;
  
