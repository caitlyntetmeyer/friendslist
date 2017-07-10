import React, {Component} from 'react';
import axios from 'axios';
// Pull the actual information needed:
import { API_BASE } from './constants';

class FriendList extends Component {

	constructor(props) {
		super(props)
		// Use "this.state" to create the initial state so the component doesn't throw null references while rendering:
		this.state = { friends: [] };
	}

	/* "componentWillReceiveProps" is a lifecycle method that re-renders/reacts to any new props passed to the component.  

	"nextProps" is a convention to help developers increase readability of the code. 

	Once new props are received, "this.setState({})" will set the new data. */
	componentWillReceiveProps(nextProps) {
		this.setState({ friends: nextProps.props })
	}

	renderFriends() {
		/* Ensure that data is present: */
		if (this.state.friends) {
			return this.state.friends.map(friend =>
				<div key={friend.id}>
					<li className="list-group-item">
						
						<strong>Name:</strong> {friend.name}
						<br/>
						<strong>Age:</strong> {friend.age}
						<button onClick={ () => { this.removeFriend(this, friend) } } 
							className="btn btn-danger trash">
							<span className="glyphicon glyphicon-trash"></span>
						</button>
					</li>
				</div>
			);
		// If data is NOT present:
		} else {
			return (
				<div>
					<h1>Waiting for friends</h1>
				</div>
			);
		}
	}
	/* Delete a friend from the API and temp array: */
	removeFriend(event, friend) {
		var id = friend.id;
		var tempFriends = this.state.friends;
		axios.delete(`${API_BASE}/${id}`)
			.then( response => {
				var deleteFriend = tempFriends.indexOf(friend)
				tempFriends.splice(deleteFriend, 1);
				/* Set the state to the tempFriends array: */
				this.setState({ friends: tempFriends });
			});
	}

	render() {
		return (
			<div>
				<div className="col-xs-2">
				</div>
				<div className="col-xs-6">
					<h3>List of Friends</h3>
					<ul className="list-group">
						{/* Invoke the helper method of "renderFriends()" so the list is created on the DOM: */}
						{this.renderFriends()}
						}
					</ul>
				</div>
			</div>
		);
	}
}

// Allow components to be imported to other components:
export default FriendList;
