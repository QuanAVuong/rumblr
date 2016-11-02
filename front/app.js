import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'


// const Greeting = () => (
//   <div>Hello World</div>
// )

const NewPostForm = React.createClass({
	getInitialState: function() {
		return ({
			input: ""
		})
	},

	handleChange: function(e) {
		this.setState({
			input: e.target.value
		})
	},

	makeNewPost: function(e) {
		e.preventDefault();
		let body = this.state.input;

		$.ajax({
			url:"/posts", // name of the 'package'
			type:"POST", // type of data
			data:{post: body}  // content of data packaged into the request: sift through huge HTTP request file get only the data portion out
		})
	},

	render: function () {
		return (
			<form onSubmit={this.makeNewPost}>
				<input type="text"
							 placeholder="body"
							 onChange={this.handleChange}
				/>
				<input type="submit"/>
			</form>
		)
	}
})


ReactDOM.render(
  <NewPostForm/>,
  document.getElementById('root')
)
